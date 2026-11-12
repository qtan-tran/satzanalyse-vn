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
assets/engine.js        tách Satz (. · ; ! + xuống dòng) → token hóa khối từ
        │                (chỉ ký tự Hy Lạp + apostrophe elision ’ ʼ ')
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

Bước "tự điền" là chủ đích, không phải thiếu sót: triết lý của tool là **không bịa phân tích** – mọi ô chưa xác định được để trống cho người học. Từ điển (Phần 2) và gợi ý hình thái (Phần 3) sẽ pre-fill dần các ô này bằng dữ liệu xác định được.

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

- **Phần 2 – từ điển**: `data/dict.js` – chuỗi TSV nhúng trong biến JS, parse bằng `split('\n')` + `split('\t')`. Khởi nguồn từ `vocab/vocab-01-10.tsv` của graecum-vn (186 từ, 8 cột) + gloss các bài; mở rộng cộng dồn theo cụm 10 bài. Tra không thấy → trả về gợi ý đuôi + ô nghĩa để trống (không bịa).
- **Phần 3 – gợi ý hình thái**: bảng pattern đuôi (mạo từ, biến cách 1st/2nd/3rd, đuôi động từ các thời/thức) nhúng tương tự trong `data/`; pre-fill ô `form` của `.wb` và bảng đuôi PHẦN 2 bằng gợi ý có nhãn "gợi ý".
- **Phần 4 – corpus**: `data/corpus/*.js` – các bài phân tích mẫu hoàn chỉnh (làm tay, biên soạn theo pipeline graecum-vn) cho câu dựng từ readings L1–10 graecum-vn (nội dung public domain); `corpus.html` là gallery.

## 6. Ràng buộc bản quyền

Chỉ public domain + tự biên soạn; chi tiết trong `docs/COPYRIGHT.md`. Corpus không sao chép văn bản adapted của bất kỳ giáo trình bản quyền nào.
