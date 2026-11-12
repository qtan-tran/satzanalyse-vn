# FORMAT-SPEC – đặc tả khung phân tích (v1, Phần 1)

> Đặc tả cấu trúc hai định dạng xuất song song từ cùng một model dữ liệu, theo đúng cấu trúc canvas Satzanalyse hiện tại + quy ước bổ sung (bảng "Dịch theo cụm" sau mỗi diagram, gloss nghĩa trong Wortblöcke). Không render PDF trong tool; người dùng tự xuất (xem `huong-dan.html`).

## 0. Input & model dữ liệu

- Ngưỡng: **1.500 ký tự** Unicode (~15–20 Satz). Vượt → lỗi thân thiện + gợi ý chia nhỏ.
- Tách Satz: cắt sau `. · ; !` và xuống dòng, chỉ khi ký tự kế tiếp là khoảng trắng hoặc kết thúc text.
- Token (khối từ ứng viên): chuỗi ký tự Hy Lạp (`U+0370–U+03FF`, `U+1F00–U+1FFF`) + apostrophe elision (`’ U+2019`, `ʼ U+02BC`, `' ASCII`), bỏ dấu câu ở rìa; token phải chứa ít nhất một ký tự Hy Lạp.
- Model: `{ title, subtitle, chars, sentences: [{n, greek, tokens[]}], vocab: [token unique theo thứ tự xuất hiện] }`.
- **Không hỏi trọng tâm ngữ pháp**: người dùng mặc định là người mới học Ancient Greek – mọi điểm ngữ pháp đều quan trọng; UI chỉ hỏi tiêu đề (tuỳ chọn). Trường `subtitle` trong model không có ô nhập ở UI, chỉ dành cho corpus mẫu (Phần 4) khi biên soạn có chủ đích.

## 1. Nhãn chức năng câu (14, key khớp macro LaTeX)

| KEY | Tiếng Việt (nhãn hiển thị) | English gloss |
| --- | --- | --- |
| Prad | Vị ngữ | predicate |
| Subj | Chủ ngữ | subject |
| Akk | Tân ngữ đối cách | direct object (acc.) |
| Dat | Tân ngữ tặng cách | indirect object (dat.) |
| Attr | Định ngữ | attribute |
| PN | Vị ngữ danh từ | predicate nominative |
| Adv | Trạng ngữ | adverbial |
| Inf | Nguyên mẫu | infinitive |
| Neg | Phủ định | negation |
| Part | Tiểu từ | particle |
| AcIS | Chủ ngữ AcI | subject of the Accusativus cum Infinitivo |
| Konj | Liên từ | conjunction |
| App | Đồng vị ngữ | apposition |
| Vok | Hô cách | vocative |

Màu chuẩn (dùng chung cả hai định dạng + UI tool): Prad `#1F5FBF`, Subj `#C0392B`, Akk `#1E8449`, Dat `#16877A`, Attr `#8E44AD`, PN `#D9730D`, Adv `#8A6D1D`, Inf `#B03A6F`, Neg `#000000`, Part `#7F8C8D`, AcIS `#E0457B`, Konj `#5D6D7E`, App `#2E4A9E`, Vok `#4A235A`. Ô chưa gán chức năng: màu trung tính `#777`, nhãn `…`.

## 2. Cấu trúc bản xuất HTML (tự chứa, tĩnh, không `<script>`)

1. `h1` tiêu đề (default "Satzanalyse") + `.sub` mô tả ngắn (default "Phân tích câu tiếng Hy Lạp cổ") + `.focus` dòng mô tả.
2. `.hint.no-print`: hướng dẫn in (Ctrl/Cmd+P → Save as PDF; mỗi câu một trang).
3. Khung **"Văn bản gốc"** (`box`): câu đánh số (1) (2) … giữ nguyên dấu.
4. Khung **"Chú giải"** (đúng scope khung Chú giải của skill bản cập nhật: ba tầng của khối từ + giải thích nhóm + quy tắc Sperrstellung): dải `.chip` 14 chức năng; giải thích ba tầng của khối từ; **giải thích nhóm (grp)**: khung bao AcI hoặc mệnh đề phụ kèm nhãn chức năng (ví dụ: "AcI → tân ngữ đối cách của λέγω"); quy tắc Sperrstellung (sở hữu cách xen giữa mạo từ và danh từ → ba khối liền: mạo từ | cụm sở hữu cách (định ngữ) | danh từ); ghi chú bảng cụm chia mặc định ~4 từ, tự chỉnh theo nhóm nghĩa.
5. `h2` **PHẦN 1 – Phân tích trực quan: từng câu một**; mỗi câu một khung `.satz`:
   - head "Câu n – [câu Hy Lạp]";
   - diagram: mỗi token một `.wb` (fn `…`, word = token, form `(dạng?)`);
   - **bảng `.chunks` "Dịch theo cụm (cách nối nghĩa)"** 3 cột: Cụm từ (Hy Lạp) | English | Tiếng Việt – cột Hy Lạp pre-fill theo cụm ~4 từ, hai cột còn lại để trống;
   - `.vtab` 8 cột (Dạng | Từ điển | Ngôi | Số | Thời | Thức | Thể | Chủ ngữ) + 1 dòng hint "(điền các dạng động từ được chia của câu vào đây)";
   - `ol.steps`: 7 dòng prefilled = prompt gợi nhớ phương pháp (xem §4);
   - dòng "Ghi chú:" để trống;
   - `.ueb`: bản sát nghĩa / bản tự nhiên để trống.
6. Khung **"Bản dịch toàn văn"** để trống.
7. `h2` **PHẦN 2 – Từ vựng và Pattern**:
   - bảng `.vocab` 6 cột (Dạng trong văn bản | Từ điển | Từ loại | Tiếng Việt | English | ★), pre-fill cột Dạng theo thứ tự xuất hiện, không lặp;
   - 3 khung `.pat` rỗng (Ví dụ → Quy tắc → Mẹo nhận diện);
   - bảng đuôi 3 cột (Đuôi | Nhận biết dạng | Ví dụ trong văn bản) + dòng trống.
8. Footer ghi công chuẩn.
9. `@media print`: mỗi `.satz` một trang (`page-break-before:always`), trừ khung đầu.

## 3. Cấu trúc bản xuất .tex (XeLaTeX/Overleaf)

- Preamble lấy **1:1** từ định dạng canvas (fontspec FreeSerif/DejaVu, macro `\w \en \grp \chip`, môi trường `satz vtab steps ueb pat` – không đổi macro). Ngay sau preamble thêm block `\renewcommand{\labKEY}{nhãn tiếng Việt}` cho 14 key ở §1 (macro giữ nguyên, chỉ đổi nội dung nhãn; quy ước portal: không thuật ngữ Đức trong bản publish).
- Thân tài liệu: `center` tiêu đề/mô tả → khung `satz` "Văn bản gốc" (câu đánh số, `{\grt …}`) → khung `satz` "Chú giải" (dải `\chip`, giải thích ba tầng + nhóm `\grp` + Sperrstellung) → `\clearpage` `section*` PHẦN 1 → mỗi câu: `\begin{satz}{Câu n – {\grt …}}` chứa:
  - comment hướng dẫn điền `\w{KEY}{Khối từ}{Dạng}`;
  - dòng phân tích tạm: `{\gr token1 token2 …}`;
  - bảng "Dịch theo cụm (cách nối nghĩa)": `tabular` 3 cột `>{\grt}l l l` (2 `&` mỗi dòng), tiêu đề nhỏ đậm;
  - `\vtab{…}`: 1 dòng hint multicolumn (7 `&` tương đương 8 cột khi điền);
  - `\steps{…}` 7 item prompt;
  - dòng Ghi chú; `\ueb{…}{…}` để trống.
- Sau câu cuối: khung "Bản dịch toàn văn" → `\clearpage` `section*` PHẦN 2:
  - vocab `longtable` 5 cột `>{\grt}l l l l l` (4 `&`): Dạng trong văn bản | Từ điển | Từ loại | Tiếng Việt | English; đánh dấu từ lõi A1–A2 bằng `\textsf{★}` trong cột Tiếng Việt;
  - 3 khung `pat` rỗng;
  - bảng đuôi `tabular` 3 cột (2 `&`).
- `\end{document}`.

### Kiểm tra tĩnh (chạy cho mọi file .tex sinh ra)

- Cân bằng `{}`; cặp `\begin{…}`/`\end{…}` bằng nhau.
- Số `&` mỗi dòng: vtab 7 (8 cột), vocab 4 (5 cột), bảng đuôi 2 (3 cột), bảng cụm 2 (3 cột).
- Không có ký tự ASCII `'` trong chuỗi Hy Lạp (dùng `’ U+2019`); không em dash (chỉ en dash –).

## 4. Bảy bước (prefilled như prompt trong khung, cả hai định dạng)

1. Tìm tất cả dạng động từ được chia (finite). Thiếu vị ngữ → kiểm tra Ellipse (thường là ἐστί(ν)/εἰσί(ν)).
2. Xác định chủ ngữ cho từng động từ. Chủ ngữ không viết ra → nằm trong đuôi động từ (như -ω = ngôi 1 số ít); không đặt hộp chủ ngữ riêng. Danh từ trung tính số nhiều → động từ số ít.
3. Gộp khối từ (Wortblock) qua mạo từ + đuôi. Sở hữu cách xen giữa mạo từ và danh từ (Sperrstellung) → ba khối liền: mạo từ | cụm sở hữu cách (định ngữ) | danh từ.
4. Ghi hình thức kén cách của động từ; giới từ + đúng cách.
5. Tìm nguyên mẫu → kiểm tra AcI; nhiều đối cách trong AcI → tách chủ ngữ/tân ngữ theo ngữ nghĩa, vị trí, mạo từ, bối cảnh.
6. Phủ định (οὐ/οὐκ/οὐχ, μή) → nhắm vào đâu?
7. Dịch: bản sát nghĩa (wörtlich) → bản tự nhiên (natürlich).

## 5. Lộ trình mở rộng đặc tả (thay đổi versioned)

- v1.1 (Phần 2): từ điển pre-fill cột Từ điển/Từ loại/Tiếng Việt/English/★ khi tra thấy; gloss ngắn trong Wortblock; không thấy → để trống + gợi ý đuôi.
- v1.2 (Phần 3): pre-fill ô form của `.wb`/`\w` bằng gợi ý đuôi có nhãn "gợi ý"; bảng đuôi PHẦN 2 sinh tự động từ các đuôi gặp trong văn bản.
- v2 (Phần 4): định dạng data corpus JS (bài phân tích mẫu hoàn chỉnh) + gallery.
