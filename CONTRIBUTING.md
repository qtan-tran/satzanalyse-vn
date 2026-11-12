# Đóng góp cho satzanalyse-vn

Cảm ơn bạn quan tâm! Repo tuân theo triết lý của hệ sinh thái qtan-tran: static, no-build, tự chứa, bền vững.

## Trước khi đóng góp

- Đọc `docs/STYLE-AND-CONVENTIONS.md` (quy ước ngôn ngữ, typography, ký tự Hy Lạp) và `docs/FORMAT-SPEC.md` (đặc tả khung xuất).
- Chính sách nội dung trong `docs/COPYRIGHT.md`: **chỉ public domain + tự biên soạn**; không sao chép nội dung adapted của giáo trình bản quyền.
- Không thêm dependency (không framework, không package manager, không CDN), không thêm bước build.

## Cách đóng góp

1. Fork → tạo nhánh tính năng.
2. Sửa/ thêm nội dung theo quy ước ở trên.
3. QA sweep: không em dash (chỉ en dash –), không ký tự lạ (CJK/Cyrillic/U+FFFD) trong nội dung, apostrophe Hy Lạp = ’ (U+2019), HTML cân bằng thẻ, .tex mẫu cân bằng `{}` và `\begin`/`\end`.
4. Pull request mô tả rõ thay đổi + lý do.

## Quy trình của người bảo trì

Công việc chia Phần theo `docs/ROADMAP.md`; bản nháp được người sở hữu duyệt trước khi push; mọi push được verify qua raw/blob API.
