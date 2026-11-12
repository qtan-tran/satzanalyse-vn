# COPYRIGHT & LICENSE – satzanalyse-vn

## 1. Cấu trúc license hai lớp (theo quy ước org qtan-tran)

- **Code** (HTML/JS/CSS của tool, exporter, engine): **MIT License** – xem file `LICENSE`.
- **Nội dung** (docs, đặc tả, khung phân tích, corpus mẫu, các bảng minh họa): **Creative Commons BY-SA 4.0** – https://creativecommons.org/licenses/by-sa/4.0/

## 2. Chính sách nội dung (điều kiện tồn tại của repo)

Chỉ dùng một trong hai nguồn:

1. **Public domain**: văn bản tác giả cổ Hy Lạp (Perseus/Scaife/PHI/Theoi/ancientlibrary…), ngữ pháp PD (Smyth), danh mục sự thật ngữ pháp.
2. **Tự biên soạn**: mọi khung phân tích, pattern box, bảng đuôi, hướng dẫn do người sở hữu biên soạn.

Không bao giờ: sao chép text adapted, bài tập, dịch hoặc phân tích của bất kỳ giáo trình bản quyền nào; không host scans; không để lộ nguồn biên soạn (tên giáo trình/trường/giảng viên) trong nội dung publish. Corpus mẫu (Phần 4) chỉ dựng câu từ readings của graecum-vn (nội dung PD) hoặc câu tự biên soạn.

## 3. Ghi công (bắt buộc khi cite hoặc tái sử dụng)

Đủ ba phần: **tên tác giả** / **tên project + link repo** / **license**.

> Khi cite hoặc tái sử dụng, ghi công: "Satzanalyse VN – Trần Quốc Tân, https://github.com/qtan-tran/satzanalyse-vn, CC BY-SA 4.0 (nội dung) + MIT (code)".

Dòng affiliation chuẩn trong README:

> This repository is developed and maintained by **Quoc-Tan Tran**, **Postdoctoral Researcher** at the **Institute for Studies of Science, Bielefeld University**.

Footer chuẩn mọi trang web của repo:

```
Satzanalyse VN · Biên soạn bởi Trần Quốc Tân · Nội dung CC BY-SA 4.0 · Code MIT
Khi cite hoặc tái sử dụng, ghi công: "Satzanalyse VN – Trần Quốc Tân, https://github.com/qtan-tran/satzanalyse-vn"
```

## 4. Từ điển và dữ liệu đóng gói

Từ điển `data/dict.js` khởi nguồn từ vocabulary của graecum-vn (do chính người sở hữu biên soạn, đã publish CC BY-SA 4.0) + gloss tự biên soạn. Khi mở rộng bằng nguồn ngoài, chỉ dùng từ điển PD hoặc tự biên soạn; ghi nguồn trong phần header comment của data file.
