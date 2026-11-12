# STYLE-AND-CONVENTIONS – satzanalyse-vn

> Quy ước biên soạn mọi trang + docs của repo, kế thừa quy ước portal graecum-vn (`docs/STYLE-AND-CONVENTIONS.md` trong repo đó). Vi phạm quy ước dưới đây = lỗi phải sửa trước khi push.

## 1. Ngôn ngữ

- **Tiếng Việt là chính** trong mọi giải thích, nhãn UI, hướng dẫn.
- **Thuật ngữ: gloss tiếng Anh ở lần xuất hiện đầu mỗi trang** (ví dụ: Sperrstellung (hyphenated attribute position), Ellipse (ellipsis), AcI (accusativus cum infinitivo)). **Không dùng thuật ngữ Đức** trong bản publish (trừ tên riêng của định dạng như "Satzanalyse" – tên sản phẩm).
- Bộ tên cách chuẩn: **chủ cách (Nom.), sở hữu cách (Gen.), tặng cách (Dat.), đối cách (Acc.), hô cách (Voc.)**.
- Bản .tex giữ marker "wörtlich/natürlich" do macro canvas định sẵn; trang Hướng dẫn giải thích rõ hai marker này (= bản sát nghĩa / bản tự nhiên).

## 2. Typography & ký tự

- **Chỉ en dash (–), cấm em dash (U+2014)** trong mọi nội dung publish.
- Apostrophe/elision trong văn Hy Lạp: **’ (U+2019)** hoặc ʼ (U+02BC), không dùng ASCII `'` trong nội dung Hy Lạp (ASCII ' chỉ dùng trong JS code).
- Không để chữ Latin/tiếng Việt lọt vào phần Hy Lạp hiển thị bằng font Hy Lạp (span `.gk` trong HTML, `{\grt …}` trong .tex); chú thích dạng `(chủ cách)` đặt ngoài phần Greek.
- CJK/Cyrillic/Ký tự thay thế U+FFFD: không được xuất hiện trong nội dung (trích dẫn lịch sử bug trong ROADMAP thì giữ nguyên theo tiền lệ graecum-vn).

## 3. Văn Hy Lạp

- **Giữ nguyên văn 100%** mọi thứ người dùng paste: dấu, viết hoa/thường, apostrophe, sóng dấu câu.
- Không "sửa" văn bản nguồn; nếu corpus tự biên soạn thì soạn theo pipeline graecum-vn (verify nguồn PD, không bịa quote).

## 4. Cấu trúc trang web

- Mọi trang: header brand "Satzanalyse VN" + điều hướng (Công cụ · Hướng dẫn · Corpus), nội dung, footer ghi công chuẩn (xem `docs/COPYRIGHT.md` §3).
- Style đồng bộ portal: font serif thân trang (Palatino/times), heading sans (system-ui), palette xanh canvas `#1F5FBF`, viền khung `#9db8e0`, nền khung `#e3ecf8`.
- File HTML người dùng tải về phải **tự chứa 100%** (CSS inline, không script) – để in/mở ở bất kỳ đâu không mất định dạng.

## 5. Quy ước code

- JS thuần ES5-compatible (var, function), không module, không framework; nạp data qua biến toàn cục (`window.SA_DICT`).
- Comment code bằng tiếng Việt, đề cập đúng thuật ngữ quy ước §1.
- Không fetch() data local (CORS file://) – xem ARCHITECTURE §3.
- Mọi file JS trong repo phải qua kiểm tra: cặp ngoặc cân bằng, mỗi dòng chuỗi có số dấu nháy ASCII chẵn.

## 6. QA trước khi push (sweep bắt buộc)

1. Grep em dash, CJK, Cyrillic, U+FFFD, ASCII ' trong nội dung Greek.
2. Balance thẻ HTML (`<div/` vs `</div>`…) và `{}`/`\begin`–`\end` trong .tex mẫu.
3. Số `&` mỗi dòng theo FORMAT-SPEC §3 (vtab 7, vocab 4, đuôi 2, cụm 2).
4. Verify nội dung đã push bằng raw.githubusercontent kèm commit-sha (stale → blob API).
