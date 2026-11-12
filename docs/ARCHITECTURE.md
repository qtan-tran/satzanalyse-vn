# ARCHITECTURE – satzanalyse-vn

> Platform phân tích câu tiếng Hy Lạp cổ cho người Việt, chạy hoàn toàn client-side, không server, không build.

## 1. Vị trí trong kiến trúc org 3 repo

| Repo | Vai trò | URL |
| --- | --- | --- |
| `graecum-vn` | Portal bài giảng 48 bài (L1–L24 Graecum I, L25–L48 Graecum II) + 10 bài ôn tập + vocab/Anki | https://github.com/qtan-tran/graecum-vn |
| `ancient-greek-toolkit` | Hub công cụ tra cứu (lexica, văn bản, gõ chữ, luyện tập, tham khảo) | https://github.com/qtan-tran/ancient-greek-toolkit |
| **`satzanalyse-vn`** (repo này) | Platform phân tích câu: paste câu Hy Lạp tự do → khung phân tích HTML tĩnh + `.tex` | https://github.com/qtan-tran/satzanalyse-vn |

Ba repo độc lập về deploy, cross-link nhau: portal giới thiệu tool ở mục "Công cụ học kèm", toolkit liệt kê satzanalyse-vn trong danh mục practice, satzanalyse-vn link ngược về hai repo trên.

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
        │                dictLookup(token): 3 tầng khoá, không thấy/mơ hồ → null
        │                morphLookup(token, entry): dạng đóng (conf 2) hoặc
        │                đoán theo đuôi (conf 1 – gắn "?" khi xuất)
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

- **Phần 2 – từ điển** (đã dựng): `data/dict.js` – chuỗi TSV nhúng trong biến JS (`window.SA_DICT`), parse bằng `split('\n')` + `split('\t')` khi lần tra đầu tiên (lazy). 812 mục, 6 cột (lemma/forms/pos/vi/en/keys); danh sách từ = 800 từ thông dụng nhất theo Kantharos Neu (Omega – Ulrich Gebhardt, CC BY-NC-SA 4.0), gloss tiếng Việt/English tự biên soạn (xem `docs/COPYRIGHT.md`). Lookup trong engine: 3 tầng khoá (chính xác → bỏ dấu hút → bỏ dấu thanh, từ ≥ 2 ký tự cơ bản) + 4 mức claim (lemma > keys > forms > weak) – chi tiết đặc tả `docs/FORMAT-SPEC.md` §5. Tra thấy → điền sẵn gloss/bảng từ vựng; không thấy hoặc mơ hồ → trả `null`, ô để trống (không bịa). Gợi ý đuôi thuộc Phần 3.
- **Phần 3 – gợi ý hình thái** (đã dựng): `data/morph.js` (`window.SA_MORPH`): exact map dạng đóng (mạo từ, đại từ quan hệ, εἰμί, đại từ thường gặp; tra qua key0 + biến thể dấu grave/acute do hình thức biến thiên theo vị trí) + bảng đuôi danh từ (ch 1/2/3) và động từ (hiện tại/quá khứ/aorist/tương lai, chủ động + TD/BN, nguyên mẫu, ν di động). Engine `morphLookup(token, entry)`: từ loại tra được từ từ điển (entry) quyết định bảng đuôi (gate: tiểu từ/trạng từ/liên từ/giới từ → không đoán); không có từ điển → thử bảng noun trước, không khớp mới thử verb; tối đa 2 khả năng, cao nhất đứng đầu (quy ước chốt của người sở hữu); iota dưới cuối từ (ῃ/ᾳ/ῳ) = Dat. Sg. hoặc 2 Sg. TD/BN. conf 2 ghi thẳng, conf 1 gắn "?" – chi tiết đặc tả `docs/FORMAT-SPEC.md` §6. Pre-fill: ô form `.wb`, cột "Dạng (gợi ý)" bảng vocab, bảng đuôi tự động, comment `% Gợi ý hình thái` trong .tex.
- **Phần 4 – corpus** (đã dựng): `data/corpus.js` (`window.SA_CORPUS`) – 10 bài phân tích mẫu hoàn chỉnh (1 câu/bài L1–10, làm tay, biên soạn theo pipeline graecum-vn, kèm 3 ô Pattern `{vi, rule, tip}` mỗi câu) cho câu dựng từ readings graecum-vn (nội dung public domain; L6 = John 1:1 nguyên văn). Item shape + fill API + quy ước khóa `#n` (token lặp lại) – chi tiết đặc tả `docs/FORMAT-SPEC.md` §9. Exporter HTML nhận tham số thứ hai `SA_HTML.build(model, fill)` (pre-fill fn/form/gl/chunks/vtab/woertlich/vi/note/patterns, tương thích ngược khi không truyền); `corpus.html` là gallery (render lazy qua iframe `srcdoc`, nút tải Blob). Fill cho `.tex` là lộ trình, chưa làm.

## 6. Ràng buộc bản quyền

Chỉ public domain + tự biên soạn; chi tiết trong `docs/COPYRIGHT.md`. Corpus không sao chép văn bản adapted của bất kỳ giáo trình bản quyền nào.
