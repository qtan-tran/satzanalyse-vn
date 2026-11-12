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
5. Không bịa phân tích: khung để trống có chủ đích; từ điển tra không thấy hoặc mơ hồ → để trống (gợi ý đuôi thuộc Phần 3).
6. License: CC BY-SA 4.0 (nội dung) + MIT (code).

## Trạng thái các Phần

| Phần | Nội dung | Trạng thái |
| --- | --- | --- |
| 1 | Khung repo + docs nền (ARCHITECTURE/ROADMAP/COPYRIGHT/FORMAT-SPEC/STYLE) + trang `index` (tool MVP: paste → khung HTML + .tex, ngưỡng 1.500) + `huong-dan` (tự xuất PDF) + `corpus` (placeholder) | ✅ Push xong (commit `efe392c`, 16 file, verify PASS); chờ bật Pages |
| 2 | Từ điển client-side `data/dict.js`: TSV nhúng chuỗi, 812 mục = 800 từ thông dụng nhất theo Kantharos Neu (Omega – Ulrich Gebhardt, CC BY-NC-SA 4.0; gloss tiếng Việt/English tự biên soạn); lookup 3 tầng + 4 mức claim (FORMAT-SPEC §5), không thấy/mơ hồ → để trống | ✅ Push xong (commit `6db6c74`, 11 file, verify PASS) |
| 3 | Gợi ý hình thái `data/morph.js`: bảng dạng đóng (mạo từ, đại từ quan hệ, εἰμί, đại từ thường gặp – conf 2, chắc chắn) + bảng đuôi L1–10 (danh từ ch 1/2/3, động từ hiện tại/quá khứ/aorist/tương lai, TD/BN, nguyên mẫu – conf 1, gắn "?"); pre-fill ô dạng trong sơ đồ, cột "Dạng (gợi ý)" trong bảng vocab, bảng đuôi tự động (FORMAT-SPEC §6) | 🔄 Draft xong, chờ duyệt |
| 4 | Corpus mẫu L1–10: câu dựng từ readings graecum-vn (PD), phân tích đầy đủ làm mẫu; `corpus.html` gallery + data JS | ☐ |
| 5 | Trau chuốt UI + bật GitHub Pages live + cross-link hai chiều với portal graecum-vn và ancient-greek-toolkit | ☐ |

## Bước tiếp theo

1. ~~Duyệt + push Phần 2~~ Đã xong: người sở hữu duyệt qua 2 canvas (source + demo) → push 11 file (commit `6db6c74`: `data/dict.js` mới + engine + 2 exporter + `index.html`, `huong-dan.html`, `README.md` + 4 docs), verify blob API kèm sha PASS (dict.js đúng 98.617 bytes, index nạp dict trước engine, engine có dictLookup 3 tầng).
2. Người sở hữu bật GitHub Pages (Settings → Pages → Deploy from branch `main` / `/root`) → site sống tại https://qtan-tran.github.io/satzanalyse-vn/ (lưu ý: quota Actions tháng có thể hết → build startup_failure vô hại, deploy lại sau).
3. Phần 3 draft xong, chờ duyệt qua 2 canvas (source + demo). Sau khi duyệt: push `data/morph.js` (mới) + engine + 2 exporter + `index.html`, `huong-dan.html`, `README.md` + 4 docs → verify blob API kèm sha. Tiếp theo Phần 4: corpus mẫu L1–10.

## Lịch sử

- **Phần 3 draft (gợi ý hình thái L1–10)**: dựng `data/morph.js` (mới): exact map dạng đóng (mạo từ 17 dạng, đại từ quan hệ, εἰμί đủ 3 thời + biến thể grave/acute, αὐτός, đại từ ngôi, οὗτος, đại từ nghi vấn) + bảng đuôi noun (ch 1/2/3, đuôi mơ hồ tối đa 2 khả năng, cao nhất đứng đầu – chốt sau góp ý của người sở hữu) + verb (hiện tại/quá khứ/aorist/tương lai, chủ động + TD/BN, nguyên mẫu, biến thể ν di động σεν/εν/ουσιν/σιν). Engine `SA.morphLookup(token, entry)`: exact tra key0 + hoán đổi grave/acute của dấu âm cuối (τὸν/τόν, ἐστὶν/ἐστίν); gate theo từ loại tra được (danh từ/tính từ/đại từ/số từ → bảng noun, động từ → bảng verb, tiểu từ/trạng từ/liên từ/giới từ → null); không có entry → thử bảng noun trước, không khớp mới thử verb, tối đa 2 khả năng/cao nhất đứng đầu (chốt sau góp ý của người sở hữu: không rối não người học); iota dưới cuối từ (ῃ/ᾳ/ῳ) = Dat. Sg. hoặc 2 Sg. TD/BN; conf 2 ghi thẳng, conf 1 gắn "?" (nguyên tắc không bịa). Exporter: ô form `.wb` pre-fill, cột "Dạng (gợi ý)" (HTML 7 cột / longtable 6 cột), bảng đuôi tự động (max 12 dòng, ví dụ ≤ 3 từ), comment `% Gợi ý hình thái` trong .tex, Chú giải thêm bộ viết tắt chuẩn. Docs: FORMAT-SPEC v1.2 (§6 mới + §7 QA + §8 lộ trình), ARCHITECTURE (diagram + §5), COPYRIGHT §4 (morph tự biên soạn), README/index/huong-dan. QA: 52 test thực thi PASS; John 1:1 gợi ý 7/10 (miss = ἐν/καὶ/πρὸς theo gate, đúng chủ đích); Δαρείος → "Nom. Sg. m. (ch 2) ?" (đúng và có dấu hỏi). Chờ duyệt.

- **Phần 2 draft (Kantharos/Omega 800 từ)**: người sở hữu đổi nguồn từ điển từ vocab-01-10.tsv (186 từ) sang 800 từ thông dụng nhất theo Kantharos Neu (file Omega đính kèm, Ulrich Gebhardt, CC BY-NC-SA 4.0). Parse 28 trang OCR → 812 mục (bỏ 1 trùng `ποτέ`; phục nguyên OCR: ἤ "hoặc/hơn", ᾗ "ở đâu/bằng cách nào", τούτωνδε của ὅδε, dấu hút các trang 12+). Tích hợp engine: `SA.dictLookup` với 3 tầng khoá (chính xác NFC → bỏ dấu hút giữ dấu thanh+iota dưới → bỏ dấu thanh, chỉ từ ≥ 2 ký tự cơ bản) + 4 mức claim (lemma > keys biên tập > forms một từ > weak từ cụm nhiều từ; bằng cấp → mơ hồ → `null`); cùng lemma nhiều nghĩa gộp gloss (ἄρα, ἤ); bỏ claim gây hiểu nhầm của 11 entry "cụm" (ἦ δ' ὅς, εἰ γάρ, ἐν ᾧ, ἐξ οὗ, ὡς τάχιστα...). Exporter: gloss ngắn trong Wortblock (`.gl`), bảng vocab điền sẵn lemma/pos/vi/en + ★ khi tra thấy, comment `% Gợi ý từ điển` + longtable điền sẵn trong .tex. pos Đức → tiếng Việt toàn bộ (Konj.→liên từ v.v.). QA: 69 test thực thi PASS (hit/miss/mơ hồ/elision/tier/gộp nghĩa), smoke test Xenophon 6/11 + John 1:1 9/10 (miss = từ không có trong danh sách), sweep 0 CJK/Cyrillic/FFFD/em dash. Người sở hữu duyệt qua 2 canvas (source + demo) → push 11 file commit `6db6c74`, verify PASS.

- **Phần 1 push xong (commit `efe392c`)**: người sở hữu duyệt vòng 2 → push 16 file skeleton vào repo `qtan-tran/satzanalyse-vn` (nhánh `main`, tách tiền tố `root__`/`assets__`/`docs__` thành thư mục). Verify PASS: cây repo đủ 16 file (7 root + 4 assets + 5 docs), index.html qua raw kèm sha (doctype + `</html>` + không còn ô trọng tâm), exporter-tex.js còn block `\\renewcommand` + chú giải grp; sweep 0 em dash/FFFD. Chờ bật Pages.
- **Duyệt lần 1 – chỉnh theo người sở hữu (chưa push)**: (a) bỏ ô "Trọng tâm ngữ pháp (tuỳ chọn)" khỏi UI tool – người dùng mặc định là người mới học Ancient Greek, mọi điểm ngữ pháp đều quan trọng; UI chỉ hỏi tiêu đề (tuỳ chọn); trường `subtitle` trong model giữ lại cho corpus Phần 4 (FORMAT-SPEC §0); đồng bộ index.html, huong-dan.html, FORMAT-SPEC. (b) Output HTML/.tex bám sát đúng scope khung "Chú giải" của skill bản cập nhật: bổ sung giải thích nhóm (grp – khung bao AcI/mệnh đề phụ kèm nhãn chức năng) vào Chú giải của cả hai định dạng.
- **Phần 1 draft (lần 1)**: dựng toàn bộ khung repo + docs nền + tool MVP trong Knowledge topic (bản nháp, chưa push). Chốt cấu hình sau hỏi đáp người sở hữu: ngưỡng 1.500 ký tự; đa trang index + huong-dan + corpus, style đồng bộ portal; từ điển TSV nhúng chuỗi trong `.js` (không fetch vì CORS file://); Phần 1 = khung + docs + tool MVP. Quyết định thiết kế: nhãn chức năng tiếng Việt + gloss Anh (key macro giữ nguyên); .tex preamble canvas 1:1 + block `\renewcommand` nhãn tiếng Việt; cột vocab thay Deutsch bằng Tiếng Việt; khung MVP để trống có chủ đích (fn "…", form "(dạng?)", steps prefilled 7 prompt gợi nhớ phương pháp); tách câu theo `. · ; !` + xuống dòng; token = ký tự Hy Lạp + apostrophe elision.
