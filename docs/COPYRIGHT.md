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

`data/dict.js` (Phần 2) dùng **danh sách 800 từ thông dụng nhất theo giáo trình Kantharos Neu**, xuất bản trong tài liệu *Omega* của **Ulrich Gebhardt** (Freiburg, CC BY-NC-SA 4.0). Về bản quyền:

- **Danh sách từ** (từ nào + dạng chính) là dữ liệu sự thật, không phải tác phẩm sáng tạo; được tham chiếu để chọn mục từ. Không sao chép gloss tiếng Đức hay trình bày của tài liệu gốc.
- **Gloss tiếng Việt/English** cho cả 812 mục do người sở hữu **tự biên soạn** từ kiến thức ngôn ngữ chung; do đó nội dung của `data/dict.js` là tác phẩm của Satzanalyse VN, publish kèm repo theo **CC BY-SA 4.0** (giữ nhất quán với lớp nội dung).
- **Ghi công nguồn danh sách từ** trong header comment của `data/dict.js` và trong `docs/FORMAT-SPEC.md` §5: danh sách từ theo Omega (Ulrich Gebhardt), Kantharos Neu – CC BY-NC-SA 4.0. Ghi công này là điều kiện tốt đẹp (good faith) chứ không phải thuộc tính bắt buộc của license NC, vì repo này phân phối lại danh sách từ (dữ liệu sự thật) chứ không phân phối lại nội dung gốc.
- Khi mở rộng bằng nguồn ngoài khác: chỉ dùng từ điển PD hoặc tự biên soạn; ghi nguồn trong header comment của data file.
- `data/morph.js` (Phần 3): bảng dạng đóng và bảng đuôi **tự biên soạn hoàn toàn** từ ngữ pháp Hy Lạp chuẩn (danh sách đuôi biến cách/chia là ngữ pháp sự thật, không sao chép trình bày nguồn nào); nội dung thuộc Satzanalyse VN, publish theo **CC BY-SA 4.0** cùng lớp nội dung, không phụ thuộc nguồn ngoài.
- `data/corpus.js` (Phần 4): 10 câu mẫu + toàn bộ phân tích làm tay **tự biên soạn**. L6 dùng John 1:1 nguyên văn (public domain); L8/L9 dựng câu mới theo tinh thần bài đọc Plutarch (Lykourgos) và Xenophon (Agesilaos), không sao chép văn bản adapted của giáo trình nào; các câu còn lại dựng mới cho khung ngữ pháp L1–10. Nội dung thuộc Satzanalyse VN, publish theo **CC BY-SA 4.0** cùng lớp nội dung.

Ghi chú: quy tắc chung ở §2 ("không để lộ tên giáo trình") áp dụng cho nội dung publish thông thường (khung phân tích, pattern, corpus); danh sách từ Phần 2 là ngoại lệ có chủ đích, được ghi công minh bạch như trên.
