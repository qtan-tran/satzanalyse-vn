# satzanalyse-vn

> Platform phân tích câu tiếng Hy Lạp cổ cho người Việt – dán (paste) câu Hy Lạp, nhận khung phân tích trực quan dưới hai định dạng: **HTML tĩnh** và **LaTeX (.tex)**, theo phương pháp Satzanalyse ba tầng (hình thái – cú pháp – ngữ nghĩa) và 7 bước.

This repository is developed and maintained by **Quoc-Tan Tran**, **Postdoctoral Researcher** at the **Institute for Studies of Science, Bielefeld University**.

## Bắt đầu ngay

- **Trực tuyến** (khi GitHub Pages đã bật): https://qtan-tran.github.io/satzanalyse-vn/
- **Ngoại tuyến**: tải repo về máy, mở file `index.html` bằng trình duyệt – mọi thứ chạy cục bộ, không cần cài đặt, không cần internet.

## Luồng sử dụng

1. Dán văn bản Hy Lạp (tối đa **1.500 ký tự** ≈ 15–20 câu mỗi lần) vào ô văn bản.
2. Tool tách câu, tách khối từ, tra **từ điển 800 từ thông dụng nhất** (danh sách từ theo giáo trình Kantharos Neu/Omega; gloss tiếng Việt–English tự biên soạn), đoán **hình thái theo bảng đuôi L1–10** (dạng đóng như mạo từ là chắc chắn; còn lại là gợi ý kèm "?") và sinh **khung phân tích**: mỗi câu một khung gồm sơ đồ khối từ ba tầng (nghĩa ngắn và gợi ý dạng hiện dưới mỗi từ), bảng "Dịch theo cụm (cách nối nghĩa)", bảng động từ, 7 bước phân tích, bản dịch; cuối là PHẦN 2 từ vựng (theo thứ tự xuất hiện, không lặp; cột từ điển/từ loại/nghĩa/dạng gợi ý điền sẵn khi tra thấy), pattern và bảng đuôi tự động.
3. Tải hai file: `satzanalyse.html` (mở và điền bằng bất kỳ trình soạn thảo nào, in ra PDF qua trình duyệt) và `satzanalyse.tex` (biên dịch qua Overleaf/XeLaTeX – xem trang **Hướng dẫn**).
4. Phần để trống là **chủ đích của phương pháp**: tool không bịa phân tích; dạng không tra thấy trong từ điển (hoặc mơ hồ giữa nhiều từ) để trống cho bạn tự tra và tự điền chức năng câu, dạng hình thái, bản dịch.

## Vị trí trong hệ sinh thái

| Repo | Vai trò |
| --- | --- |
| [graecum-vn](https://github.com/qtan-tran/graecum-vn) | Portal bài giảng tiếng Hy Lạp cổ 48 bài + 10 bài ôn tập, tiếng Việt (kèm lớp English) |
| [ancient-greek-toolkit](https://github.com/qtan-tran/ancient-greek-toolkit) | Hub công cụ tra cứu: lexica, văn bản, gõ chữ, luyện tập, tham khảo |
| **satzanalyse-vn** (repo này) | Platform phân tích câu theo phương pháp Satzanalyse |

## Cấu trúc repo

```
index.html            Tool chính
huong-dan.html        Hướng dẫn sử dụng + cách tự xuất PDF
corpus.html           Corpus mẫu L1–10: 10 câu phân tích đầy đủ làm gương (gallery, tải HTML từng câu)
assets/               style.css + engine.js + exporter-html.js + exporter-tex.js
data/                 data/dict.js (Phần 2) – từ điển 800 từ Kantharos/Omega, TSV nhúng client-side
                      data/morph.js (Phần 3) – bảng hình thái L1–10: dạng đóng + bảng đuôi danh từ/động từ
                      data/corpus.js (Phần 4) – 10 câu mẫu L1–10, phân tích làm tay + fill cho exporter
docs/                 ARCHITECTURE · ROADMAP · COPYRIGHT · FORMAT-SPEC · STYLE-AND-CONVENTIONS
```

## Lộ trình

Xem `docs/ROADMAP.md`: Phần 1 khung + tool MVP ✅ → Phần 2 từ điển Hy Lạp–Việt (800 từ theo Kantharos Neu/Omega) ✅ → Phần 3 gợi ý hình thái (đuôi biến cách/chia) ✅ commit `8b4912a` → Phần 4 corpus mẫu từ readings bài 1–10 graecum-vn ✅ commit `111d222` → Phần 5 trau chuốt UI + cross-link hai chiều ✅ commit `b52bdd1`.

## License

- **Code**: MIT (xem `LICENSE`).
- **Nội dung** (docs, khung phân tích, corpus): CC BY-SA 4.0 – https://creativecommons.org/licenses/by-sa/4.0/

Khi cite hoặc tái sử dụng, ghi công: "Satzanalyse VN – Trần Quốc Tân, https://github.com/qtan-tran/satzanalyse-vn, CC BY-SA 4.0 (nội dung) + MIT (code)".
