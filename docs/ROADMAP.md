# ROADMAP – satzanalyse-vn

> Quy ước làm việc và lộ trình phát triển. Cập nhật cuối mỗi Phần; mục Lịch sử giữ tối đa 6 mục gần nhất (quy ước rút gọn của graecum-vn, Lần 38).

## Quy ước làm việc với người sở hữu

- Công việc chia **Phần**; mỗi Phần làm xong → **bản nháp trình duyệt → chờ OK → mới push**.
- Sau mỗi push: verify raw.githubusercontent kèm commit-sha (cache ~5 phút; khi stale verify qua blob API).
- QA sweep trước khi đẩy mọi file: không em dash (chỉ en dash –), không CJK/Cyrillic/FFFD lọt text, không Latin/Việt trong span Greek, apostrophe Hy Lạp = ’ (U+2019).
- Tốc độ không quan trọng; ưu tiên sustainable + rationale rõ + extensible. Mọi quyết định thiết kế ghi trong `docs/ARCHITECTURE.md` / `docs/FORMAT-SPEC.md` để dự án không phụ thuộc một người duy nhất.
- Giới hạn đầu vào: **1.500 ký tự** (~15–20 Satz) mỗi lần paste.

## Nguyên tắc bền vững

1. Static, no-build, tự chứa, chạy mở file là được (server chỉ loopback khi cần).
2. URL ổn định: đường dẫn đã publish không đổi.
3. Chỉ PD + tự biên soạn (xem `docs/COPYRIGHT.md`).
4. Tiếng Việt là chính, gloss tiếng Anh ở thuật ngữ; không thuật ngữ Đức trong bản publish.
5. Không bịa phân tích: khung để trống có chủ đích; từ điển tra không thấy → để trống + gợi ý đuôi.
6. License: CC BY-SA 4.0 (nội dung) + MIT (code).

## Trạng thái các Phần

| Phần | Nội dung | Trạng thái |
| --- | --- | --- |
| 1 | Khung repo + docs nền (ARCHITECTURE/ROADMAP/COPYRIGHT/FORMAT-SPEC/STYLE) + trang `index` (tool MVP: paste → khung HTML + .tex, ngưỡng 1.500) + `huong-dan` (tự xuất PDF) + `corpus` (placeholder) | ✅ Draft xong, chờ duyệt + tạo repo |
| 2 | Từ điển client-side `data/dict.js` (TSV nhúng chuỗi; nguồn `vocab/vocab-01-10.tsv` graecum-vn + gloss; lookup, để trống khi không thấy) | ☐ |
| 3 | Engine gợi ý hình thái: pattern đuôi biến cách/chia; pre-fill ô dạng + bảng đuôi tự động | ☐ |
| 4 | Corpus mẫu L1–10: câu dựng từ readings graecum-vn (PD), phân tích đầy đủ làm mẫu; `corpus.html` gallery + data JS | ☐ |
| 5 | Trau chuốt UI + bật GitHub Pages live + cross-link hai chiều với portal graecum-vn và ancient-greek-toolkit | ☐ |

## Bước tiếp theo

1. Người sở hữu duyệt bản nháp Phần 1 + tạo repo `qtan-tran/satzanalyse-vn` (public) → push skeleton theo bản đồ tên phẳng trong Knowledge topic.
2. Phần 2: lấy `vocab/vocab-01-10.tsv` từ repo graecum-vn (curl raw kèm sha) → dựng `data/dict.js` + tích hợp lookup vào engine (hiện nghĩa ở ô từ vựng + gloss ngắn ở Wortblock; không thấy → để trống + gợi ý đuôi).
3. Phần 3: bảng pattern đuôi (mạo từ, chia thứ nhất/thứ hai/thứ ba, đuôi động từ hiện tại/aorist đã học trong L1–L10) → pre-fill có nhãn "gợi ý".

## Lịch sử

- **Duyệt lần 1 – chỉnh theo người sở hữu (chưa push)**: (a) bỏ ô "Trọng tâm ngữ pháp (tuỳ chọn)" khỏi UI tool – người dùng mặc định là người mới học Ancient Greek, mọi điểm ngữ pháp đều quan trọng; UI chỉ hỏi tiêu đề (tuỳ chọn); trường `subtitle` trong model giữ lại cho corpus Phần 4 (FORMAT-SPEC §0); đồng bộ index.html, huong-dan.html, FORMAT-SPEC. (b) Output HTML/.tex bám sát đúng scope khung "Chú giải" của skill bản cập nhật: bổ sung giải thích nhóm (grp – khung bao AcI/mệnh đề phụ kèm nhãn chức năng) vào Chú giải của cả hai định dạng.
- **Phần 1 draft (lần 1)**: dựng toàn bộ khung repo + docs nền + tool MVP trong Knowledge topic (bản nháp, chưa push). Chốt cấu hình sau hỏi đáp người sở hữu: ngưỡng 1.500 ký tự; đa trang index + huong-dan + corpus, style đồng bộ portal; từ điển TSV nhúng chuỗi trong `.js` (không fetch vì CORS file://); Phần 1 = khung + docs + tool MVP. Quyết định thiết kế: nhãn chức năng tiếng Việt + gloss Anh (key macro giữ nguyên); .tex preamble canvas 1:1 + block `\renewcommand` nhãn tiếng Việt; cột vocab thay Deutsch bằng Tiếng Việt; khung MVP để trống có chủ đích (fn "…", form "(dạng?)", steps prefilled 7 prompt gợi nhớ phương pháp); tách câu theo `. · ; !` + xuống dòng; token = ký tự Hy Lạp + apostrophe elision.
