# satzanalyse-vn

> Platform phân tích câu tiếng Hy Lạp cổ cho người Việt – dán (paste) câu Hy Lạp, nhận khung phân tích trực quan dưới hai định dạng: **HTML tĩnh** và **LaTeX (.tex)**, theo phương pháp Satzanalyse ba tầng (hình thái – cú pháp – ngữ nghĩa) và 7 bước.

This repository is developed and maintained by **Quoc-Tan Tran**, **Postdoctoral Researcher** at the **Institute for Studies of Science, Bielefeld University**.

## Bắt đầu ngay

- **Trực tuyến** (khi GitHub Pages đã bật): https://qtan-tran.github.io/satzanalyse-vn/
- **Ngoại tuyến**: tải repo về máy, mở file `index.html` bằng trình duyệt – mọi thứ chạy cục bộ, không cần cài đặt, không cần internet.

## Luồng sử dụng

1. Dán văn bản Hy Lạp (tối đa **1.500 ký tự** ≈ 15–20 câu mỗi lần) vào ô văn bản.
2. Tool tách câu, tách khối từ và sinh **khung phân tích**: mỗi câu một khung gồm sơ đồ khối từ ba tầng, bảng "Dịch theo cụm (cách nối nghĩa)", bảng động từ, 7 bước phân tích, bản dịch; cuối là PHẦN 2 từ vựng (theo thứ tự xuất hiện, không lặp), pattern và bảng đuôi.
3. Tải hai file: `satzanalyse.html` (mở và điền bằng bất kỳ trình soạn thảo nào, in ra PDF qua trình duyệt) và `satzanalyse.tex` (biên dịch qua Overleaf/XeLaTeX – xem trang **Hướng dẫn**).
4. Phần để trống là **chủ đích của phương pháp**: tool không bịa phân tích; bạn tự điền chức năng câu, dạng hình thái, nghĩa và dịch – từ điển tích hợp (đang xây) sẽ hỗ trợ dần các ô này.

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
corpus.html           Corpus mẫu (đang xây)
assets/               style.css + engine.js + exporter-html.js + exporter-tex.js
data/                 (Phần 2) từ điển Hy Lạp–Việt đóng gói client-side
docs/                 ARCHITECTURE · ROADMAP · COPYRIGHT · FORMAT-SPEC · STYLE-AND-CONVENTIONS
```

## Lộ trình

Xem `docs/ROADMAP.md`: Phần 1 khung + tool MVP ✅ → Phần 2 từ điển Hy Lạp–Việt → Phần 3 gợi ý hình thái (đuôi biến cách/chia) → Phần 4 corpus mẫu từ readings bài 1–10 graecum-vn → Phần 5 Pages + cross-link hai chiều với portal và toolkit.

## License

- **Code**: MIT (xem `LICENSE`).
- **Nội dung** (docs, khung phân tích, corpus): CC BY-SA 4.0 – https://creativecommons.org/licenses/by-sa/4.0/

Khi cite hoặc tái sử dụng, ghi công: "Satzanalyse VN – Trần Quốc Tân, https://github.com/qtan-tran/satzanalyse-vn, CC BY-SA 4.0 (nội dung) + MIT (code)".
