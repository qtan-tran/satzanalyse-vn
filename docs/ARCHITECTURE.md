# ARCHITECTURE – satzanalyse-vn

> Platform phân tích câu tiếng Hy Lạp cổ cho người Việt, chạy hoàn toàn client-side, không server, không build.

## 1. Vị trí trong kiến trúc org 3 repo

| Repo | Vai trò | URL |
| --- | --- | --- |
| `graecum-vn` | Portal bài giảng 48 bài (L1–L24 Graecum I, L25–L48 Graecum II) + 10 bài ôn tập + vocab/Anki | https://github.com/qtan-tran/graecum-vn |
| `ancient-greek-toolkit` | Hub công cụ tra cứu (lexica, văn bản, gõ chữ, luyện tập, tham khảo) | https://github.com/qtan-tran/ancient-greek-toolkit |
| **`satzanalyse-vn`** (repo này) | Platform phân tích câu: paste câu Hy Lạp tự do → khung phân tích HTML tĩnh + `.tex` | https://github.com/qtan-tran/satzanalyse-vn |

Ba repo độc lập về deploy, cross-link nhau: portal giới thiệu tool ở mục "Công cụ học kèm" (homepage + `README.md` + `toolkit.md`), toolkit liệt kê satzanalyse-vn trong danh mục practice (cả bản tiếng Việt lẫn `en/`), satzanalyse-vn link ngược về hai site live (qtan-tran.github.io/graecum-vn + /ancient-greek-toolkit) kèm link repo GitHub của chính nó.

## 2. Luồng dữ liệu (100% client-side)

```
Người dùng paste văn bản Hy Lạp (≤ 1.500 ký tự)
        │
        ▼
data/dict.js + data/morph.js (nạp trước engine)
        │      gán window.SA_DICT (TSV 812 mục) + window.SA_MORPH (bảng hình thái)
        ▼
assets/engine.js        tách Satz (. · ; ! + xuống dòng) → token hóa khối từ
        │                (chỉ ký tự Hy Lạp + apostrophe elision ’ ʼ ')
        │                dictLookup(token): 3 tầng khoá; hụt cả 3 → tier 3
        │                bóc đuôi về lemma (derived) hoặc null khi mơ hồ
        │                morphLookup(token, entry): dạng đóng / bất biến
        │                (conf 2) hoặc đoán theo đuôi (conf 1 – gắn "?")
        ▼
model dữ liệu trung gian  { title, subtitle, sentences[{n, greek, tokens}],
        │                  vocab[unique theo thứ tự xuất hiện] }
        ├──► assets/exporter-html.js → satzanalyse.html (tự chứa, CSS in sẵn)
        └──► assets/exporter-tex.js  → satzanalyse.tex (XeLaTeX/Overleaf)
        ▼
Người học tự điền phần để trống (chức năng, dạng, nghĩa, dịch)
        ▼
Tự xuất PDF: in HTML qua trình duyệt, hoặc biên dịch .tex (xem huong-dan.html)
```

Bước "tự điền" là chủ đích, không phải thiếu sót: triết lý của tool là **không bịa phân tích** – mọi ô chưa xác định được để trống cho người học. Từ điển (Phần 2) điền sẵn nghĩa khi tra thấy; gợi ý hình thái (Phần 3) điền dạng theo hai mức tin cậy: dạng đóng là chắc chắn, đoán theo đuôi luôn kèm "?" để kiểm chứng. Corpus mẫu (Phần 4) là nhánh riêng: `corpus.html` nạp thêm `data/corpus.js` (bài phân tích làm tay, đã duyệt) và gọi exporter với tham số fill `{hint, vi, sentences[], patterns[]}` – khung dựng ra đã điền sẵn (kể cả 3 ô Pattern làm gương phương pháp), làm mẫu cho người học.

**Worksheet tương tác (Phần 7)** từng làm (commit `4a0d41f`) rồi **rút lại** cùng ngày theo yêu cầu người sở hữu: hướng đi chốt là khung phân tích hoàn chỉnh (chức năng + màu + dịch từng cụm + hình thái chính xác) do người phân tích fill qua đúng fill API Phần 4 nêu trên, thay vì người học tự gán từng khối. Bản `.tex` không nhận fill (giữ quyết định Phần 4).

## 3. Nguyên tắc kỹ thuật bắt buộc

1. **No-build**: static HTML + JS thuần tự chứa, không framework, không package manager, không bước build. Mở `index.html` trực tiếp (file://) là chạy đủ.
2. **Không fetch local data**: mọi data file nạp qua `<script src="...js">` gán biến toàn cục (ví dụ `data/dict.js` → `window.SA_DICT`). `fetch()` JSON/TSV bị chặn CORS khi mở file:// – không dùng.
3. **Server chỉ khi thật cần và chỉ loopback** (ví dụ `python3 -m http.server`); sản phẩm không phụ thuộc server.
4. **Zero dependency**: không CDN, không npm, không font tải về (dùng font hệ thống; file xuất dùng FreeSerif/DejaVu phía LaTeX).
5. **URL ổn định**: đường dẫn đã publish không bao giờ đổi tên/ đổi chỗ; nội dung mới thêm file mới.
6. **Không phụ thuộc một người duy nhất**: mọi quyết định thiết kế ghi rationale trong `docs/ARCHITECTURE.md` và `docs/FORMAT-SPEC.md`; quy ước biên soạn trong `docs/STYLE-AND-CONVENTIONS.md`; vận hành trong `docs/ROADMAP.md`.
7. **Ngưỡng đầu vào 1.500 ký tự** (~15–20 Satz) mỗi lần paste: chặn trong `engine.js` (`SA.LIMIT`), hiển thị bộ đếm trong UI, báo lỗi thân thiện kèm gợi ý chia nhỏ văn bản. Lý do: giữ file HTML xuất không phình to và khối tự điền ở quy mô một buổi học.

## 4. Hai định dạng xuất song song

Cùng một model dữ liệu sinh hai định dạng, cấu trúc tương ứng 1:1 (đặc tả chi tiết: `docs/FORMAT-SPEC.md`):

| Thành phần | HTML (exporter-html.js) | LaTeX (exporter-tex.js) |
| --- | --- | --- |
| Khung câu | `.satz` (head + body) | môi trường `satz{Câu n – {\grt …}}` |
| Khối từ 3 tầng | `.wb` (fn/word/form) | `\w{KEY}{Khối từ}{Dạng}` |
| Nhóm AcI/mệnh đề phụ | `.grp` | `\grp` |
| Bảng dịch theo cụm | `table.chunks` (3 cột, sau diagram trước vtab) | `tabular >{\grt}l l l` (2 `&`/dòng) |
| Bảng động từ | `.vtab` 8 cột | `\vtab{…}` (7 `&`/dòng) |
| 7 bước | `ol.steps` | `\steps{…}` |
| Bản dịch | `.ueb` | `\ueb{wörtlich}{natürlich}` |
| Từ vựng | `.vocab` 6 cột (★ riêng) | `longtable` 5 cột (4 `&`) |
| Pattern | `.pat` | môi trường `pat` |
| Bảng đuôi | `table` 3 cột | `tabular` 3 cột (2 `&`) |

Preamble `.tex` lấy 1:1 từ định dạng canvas Satzanalyse (macro `\w \en \grp \chip satz vtab steps ueb pat` không đổi), **thêm block `\renewcommand{\lab...}` tiếng Việt** sau preamble theo quy ước portal (không thuật ngữ Đức trong bản publish; key macro giữ nguyên để bảng ánh xạ ở trên luôn khớp).

## 5. Kế hoạch dữ liệu đóng gói

- **Phần 2 – từ điển** (đã dựng): `data/dict.js` – chuỗi TSV nhúng trong biến JS (`window.SA_DICT`), parse bằng `split('\n')` + `split('\t')` khi lần tra đầu tiên (lazy). 812 mục, 6 cột (lemma/forms/pos/vi/en/keys); danh sách từ = 800 từ thông dụng nhất theo Kantharos Neu (Omega – Ulrich Gebhardt, CC BY-NC-SA 4.0), gloss tiếng Việt/English tự biên soạn (xem `docs/COPYRIGHT.md`). Lookup trong engine: 3 tầng khoá (chính xác → bỏ dấu hút → bỏ dấu thanh, từ ≥ 2 ký tự cơ bản) + 4 mức claim (lemma > keys > forms > weak) – chi tiết đặc tả `docs/FORMAT-SPEC.md` §5. Tra thấy → điền sẵn gloss/bảng từ vựng; không thấy hoặc mơ hồ → trả `null`, ô để trống (không bịa). Gợi ý đuôi thuộc Phần 3; bóc đuôi ngược về lemma thuộc Phần 6.
- **Phần 3 – gợi ý hình thái** (đã dựng): `data/morph.js` (`window.SA_MORPH`): exact map dạng đóng (mạo từ, đại từ quan hệ, εἰμί, đại từ thường gặp; tra qua key0 + biến thể dấu grave/acute do hình thức biến thiên theo vị trí) + bảng đuôi danh từ (ch 1/2/3) và động từ (hiện tại/quá khứ/aorist/tương lai, chủ động + TD/BN, nguyên mẫu, ν di động). Engine `morphLookup(token, entry)`: từ loại tra được từ từ điển (entry) quyết định bảng đuôi (gate: tiểu từ/liên từ/giới từ/trạng từ → ghi `bất biến` conf 2 – Phần 6; mạo từ/công thức dẫn thoại → null); không có từ điển → thử bảng noun trước, không khớp mới thử verb; tối đa 2 khả năng, cao nhất đứng đầu (quy ước chốt của người sở hữu); iota dưới cuối từ (ῃ/ᾳ/ῳ) = Dat. Sg. hoặc 2 Sg. TD/BN. conf 2 ghi thẳng, conf 1 gắn "?" – chi tiết đặc tả `docs/FORMAT-SPEC.md` §6. Pre-fill: ô form `.wb`, cột "Dạng (gợi ý)" bảng vocab, bảng đuôi tự động, comment `% Gợi ý hình thái` trong .tex.
- **Phần 4 – corpus** (đã dựng): `data/corpus.js` (`window.SA_CORPUS`) – 10 bài phân tích mẫu hoàn chỉnh (1 câu/bài L1–10, làm tay, biên soạn theo pipeline graecum-vn, kèm 3 ô Pattern `{vi, rule, tip}` mỗi câu) cho câu dựng từ readings graecum-vn (nội dung public domain; L6 = John 1:1 nguyên văn). Item shape + fill API + quy ước khóa `#n` (token lặp lại) – chi tiết đặc tả `docs/FORMAT-SPEC.md` §9. Exporter HTML nhận tham số thứ hai `SA_HTML.build(model, fill)` (pre-fill fn/form/gl/chunks/vtab/woertlich/vi/note/patterns, tương thích ngược khi không truyền); `corpus.html` là gallery (render lazy qua iframe `srcdoc`, nút tải Blob). Fill cho `.tex` là lộ trình, chưa làm.
- **Phần 6 – bóc đuôi về lemma** (đã dựng, engine `dictTier3`): khi cả 3 tầng khoá hụt, bóc đuôi biến cách/chia (danh từ 16 đuôi; động từ 22 đuôi; sigmatic σ/ψ/ξ; thê -θη) + thử lẫn không lược augment ἐ- rồi tra ngược về index thân dựng từ lemma (danh từ/tính từ ch 1/2; động từ -ω/-ομαι kèm biến thể co ε/α → η). Token ≥ 5 ký tự, thân ≥ 2 ký tự; đúng 1 lemma → entry `derived: true` (xuất ghi "(bóc đuôi)"); 0 hoặc > 1 → `null`. Chuẩn hoá mọi sigma về σ khi bóc (`bk`). Dạng đóng τίνες/τινάς thêm vào cột keys của dict v3 (tier 0, không derived). Lợi ích phụ: entry tier 3 mang từ loại → `morphLookup` chọn đúng bảng đuôi động từ. Cùng Phần 6 (morph v2): tiểu từ/liên từ/giới từ/trạng từ ghi `bất biến` (conf 2); thêm 27 đuôi so sánh hơn -τερ- và so sánh nhất -τατ- vào bảng noun (key trần vì âm chủ đề thay đổi; πατέρα/πατέρων ghi 2 khả năng; ἕτερος trùng khuôn nên nhãn so sánh có thể lệch, vẫn kèm "?"). Giới hạn (FORMAT-SPEC §5): không phủ ch 3, phân từ, hoàn thành, temporal augment, co α, thân lỏng, -μι, kép đôi, bổ sung thân; từ ngoài danh sách 800 vẫn `null`.
- **Phần 8 – sửa lỗi tier 3 theo chẩn đoán Text 7a** (draft, chờ duyệt): 5 lỗi thật đã sửa trong engine: (1) guard tier 3 `bare.length < 5` chặn dạng ngắn → hạ còn `< 3` (ἔχει → ἔχω, ὅλην → ὅλος, γῆν → γῆ); (2) thiếu đuôi -εν (imperfect 3 Sg, ἔλεγεν) và -εσθαι (nguyên mẫu medium, ἐργάζεσθαι) → tách SV_ENDS thành SV_ACT + SV_MED; (3) thân trùng cặp -ω/-ομαι (φαίνω/φαίνομαι) → AMB → null → thêm index thân medium riêng STEM_VM, đuôi medium tra song song STEM_VM + STEM_V (φαίνεται → φαίνομαι; ἐλέγετο → λέγω vẫn đúng); (4) thân danh từ -η lấy slice(0,-2) làm cụt phụ âm cuối (τιμή → τι) và γῆ → thân rỗng → sửa slice(0,-1), chấp nhận thân 1 ký tự (chỉ γ thực tế); (5) thiếu keys με (enclitic của ἐγώ) → dict v3.1. Kết quả đo Text 7a: miss 27 → 19 (còn lại = nhóm c: từ ngoài 800 + augment sau tiền tố/temporal, giới hạn chủ đích). Diag script giữ ở work dir (không push).

## 6. Ràng buộc bản quyền

Chỉ public domain + tự biên soạn; chi tiết trong `docs/COPYRIGHT.md`. Corpus không sao chép văn bản adapted của bất kỳ giáo trình bản quyền nào.
