# FORMAT-SPEC – đặc tả khung phân tích (v1.3, Phần 1–4)

> Đặc tả cấu trúc hai định dạng xuất song song từ cùng một model dữ liệu, theo đúng cấu trúc canvas Satzanalyse hiện tại + quy ước bổ sung (bảng "Dịch theo cụm" sau mỗi diagram, gloss nghĩa trong Wortblöcke, từ điển tích hợp Phần 2 – xem §5; gợi ý hình thái Phần 3 – xem §6; corpus mẫu Phần 4 – xem §9). Không render PDF trong tool; người dùng tự xuất (xem `huong-dan.html`).

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
   - diagram: mỗi token một `.wb` (fn `…`, word = token, gl = gloss tiếng Việt ngắn khi tra thấy trong từ điển – xem §5, form = gợi ý hình thái – xem §6: dạng đóng ghi thẳng, đoán theo đuôi kèm " ?", không đoán được thì `(dạng?)`);
   - **bảng `.chunks` "Dịch theo cụm (cách nối nghĩa)"** 3 cột: Cụm từ (Hy Lạp) | English | Tiếng Việt – cột Hy Lạp pre-fill theo cụm ~4 từ, hai cột còn lại để trống;
   - `.vtab` 8 cột (Dạng | Từ điển | Ngôi | Số | Thời | Thức | Thể | Chủ ngữ) + 1 dòng hint "(điền các dạng động từ được chia của câu vào đây)";
   - `ol.steps`: 7 dòng prefilled = prompt gợi nhớ phương pháp (xem §4);
   - dòng "Ghi chú:" để trống;
   - `.ueb`: bản sát nghĩa / bản tự nhiên để trống.
6. Khung **"Bản dịch toàn văn"** để trống.
7. `h2` **PHẦN 2 – Từ vựng và Pattern**:
   - bảng `.vocab` 7 cột (Dạng trong văn bản | Từ điển | Từ loại | Dạng (gợi ý) | Tiếng Việt | English | ★), pre-fill cột Dạng theo thứ tự xuất hiện, không lặp; khi tra thấy trong từ điển (§5) các cột Từ điển/Từ loại/Tiếng Việt/English được điền sẵn và cột ★ đánh dấu `★`; cột Dạng (gợi ý) điền theo §6; không tra thấy → các ô để trống cho người học tự điền; chú thích dưới bảng giải thích điều này;
   - 3 khung `.pat` rỗng (Ví dụ → Quy tắc → Mẹo nhận diện);
   - bảng đuôi 3 cột (Đuôi | Nhận biết dạng | Ví dụ trong văn bản) sinh **tự động** từ gợi ý hình thái (§6): mỗi đuôi nhận diện được một dòng, ví dụ tối đa 3 từ, tối đa 12 dòng (phần dư ghi chú "còn N đuôi"); dạng đóng không có đuôi nên không vào bảng; chú thích dưới bảng: mọi dòng là gợi ý cần kiểm chứng.
8. Footer ghi công chuẩn.
9. `@media print`: mỗi `.satz` một trang (`page-break-before:always`), trừ khung đầu.

## 3. Cấu trúc bản xuất .tex (XeLaTeX/Overleaf)

- Preamble lấy **1:1** từ định dạng canvas (fontspec FreeSerif/DejaVu, macro `\w \en \grp \chip`, môi trường `satz vtab steps ueb pat` – không đổi macro). Ngay sau preamble thêm block `\renewcommand{\labKEY}{nhãn tiếng Việt}` cho 14 key ở §1 (macro giữ nguyên, chỉ đổi nội dung nhãn; quy ước portal: không thuật ngữ Đức trong bản publish).
- Thân tài liệu: `center` tiêu đề/mô tả → khung `satz` "Văn bản gốc" (câu đánh số, `{\grt …}`) → khung `satz` "Chú giải" (dải `\chip`, giải thích ba tầng + nhóm `\grp` + Sperrstellung) → `\clearpage` `section*` PHẦN 1 → mỗi câu: `\begin{satz}{Câu n – {\grt …}}` chứa:
  - comment hướng dẫn điền `\w{KEY}{Khối từ}{Dạng}`;
  - comment `% Gợi ý từ điển …` liệt kê gloss các token tra thấy trong từ điển (§5; không có token nào tra thấy thì không có dòng này);
  - comment `% Gợi ý hình thái …` liệt kê dạng đoán được của các token (§6; không token nào thì không có dòng này);
  - dòng phân tích tạm: `{\gr token1 token2 …}`;
  - bảng "Dịch theo cụm (cách nối nghĩa)": `tabular` 3 cột `>{\grt}l l l` (2 `&` mỗi dòng), tiêu đề nhỏ đậm;
  - `\vtab{…}`: 1 dòng hint multicolumn (7 `&` tương đương 8 cột khi điền);
  - `\steps{…}` 7 item prompt;
  - dòng Ghi chú; `\ueb{…}{…}` để trống.
- Sau câu cuối: khung "Bản dịch toàn văn" → `\clearpage` `section*` PHẦN 2:
  - vocab `longtable` 6 cột `>{\grt}l l l l l l` (5 `&`): Dạng trong văn bản | Từ điển | Từ loại | Dạng (gợi ý) | Tiếng Việt | English; cột Từ điển/Từ loại/Tiếng Việt/English pre-fill khi tra thấy (lemma trong `{\grt …}`), cột Dạng (gợi ý) pre-fill theo §6, không thấy → ô trống; dòng chú thích sau bảng giải thích ô trống = tự tra thêm;
  - 3 khung `pat` rỗng;
  - bảng đuôi `tabular` 3 cột (2 `&`, cột Ví dụ `>{\grt}l`), sinh tự động như §2.7.
- `\end{document}`.

### Kiểm tra tĩnh (chạy cho mọi file .tex sinh ra)

- Cân bằng `{}`; cặp `\begin{…}`/`\end{…}` bằng nhau.
- Số `&` mỗi dòng: vtab 7 (8 cột), vocab 5 (6 cột), bảng đuôi 2 (3 cột), bảng cụm 2 (3 cột).
- Không có ký tự ASCII `'` trong chuỗi Hy Lạp (dùng `’ U+2019`); không em dash (chỉ en dash –).

## 4. Bảy bước (prefilled như prompt trong khung, cả hai định dạng)

1. Tìm tất cả dạng động từ được chia (finite). Thiếu vị ngữ → kiểm tra Ellipse (thường là ἐστί(ν)/εἰσί(ν)).
2. Xác định chủ ngữ cho từng động từ. Chủ ngữ không viết ra → nằm trong đuôi động từ (như -ω = ngôi 1 số ít); không đặt hộp chủ ngữ riêng. Danh từ trung tính số nhiều → động từ số ít.
3. Gộp khối từ (Wortblock) qua mạo từ + đuôi. Sở hữu cách xen giữa mạo từ và danh từ (Sperrstellung) → ba khối liền: mạo từ | cụm sở hữu cách (định ngữ) | danh từ.
4. Ghi hình thức kén cách của động từ; giới từ + đúng cách.
5. Tìm nguyên mẫu → kiểm tra AcI; nhiều đối cách trong AcI → tách chủ ngữ/tân ngữ theo ngữ nghĩa, vị trí, mạo từ, bối cảnh.
6. Phủ định (οὐ/οὐκ/οὐχ, μή) → nhắm vào đâu?
7. Dịch: bản sát nghĩa (wörtlich) → bản tự nhiên (natürlich).

## 5. Từ điển tích hợp (v1.1, Phần 2)

**Data file**: `data/dict.js` gán `window.SA_DICT = { version, source, cols, tsv }`; nạp qua `<script src="data/dict.js">` đặt **trước** `assets/engine.js`. TSV nhúng trong template literal, **không fetch** (CORS file://). Engine chạy đầy đủ khi thiếu file này; API `SA.dictLookup(token)` trả entry hoặc `null`.

**TSV 6 cột** (tab thật, mỗi dòng một mục, bỏ dòng trống):

| Cột | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| lemma | từ đầu mục, có thể chứa ` / ` chính tả thay thế, `(…)` biến thể | `λόγος` |
| forms | các dạng chính, tách `,` `/` `;`; ghi chú Latin (Impf., Inf.) miễn có khoảng trắng trong mảnh | `λόγος λόγου, ὁ` |
| pos | từ loại tiếng Việt | `danh từ` |
| vi | nghĩa tiếng Việt, nhiều nghĩa phân tách `;` | `lời nói, bài nói; lý lẽ` |
| en | nghĩa English | `word, speech` |
| keys (tuỳ chọn) | dạng/dạng elision biên tập thêm (kind mạnh, không lấy từ forms) | `δ` (cho δέ) |

**Quy tắc tra 3 tầng, dừng ở tầng đầu cho kết quả (hit hoặc mơ hồ đều dừng):**

1. **tier 0** – chính xác: lowercase + NFC, chỉ bỏ apostrophe elision cuối từ.
2. **tier 1** – bỏ dấu hút (smooth/rough), giữ dấu thanh + iota dưới; chỉ dùng khi tier 0 không có key.
3. **tier 2** – bỏ mọi dấu thanh (biến thể dấu giữa các bản in, ví dụ τὸν/τόν); chỉ dùng khi key còn ≥ 2 ký tự cơ bản (từ 1 âm tiết như ἦ/ἡ phân biệt bằng dấu hút – bỏ dấu sẽ bịa).

**Mức claim khi dựng index** (xung đột key: mức cao thắng, bằng cấp → **mơ hồ** → tra ra `null`):

3. lemma nguyên văn → 2. keys biên tập / chính tả thay thế → 1. mảnh một từ trong forms → 0. **weak**: mảnh rút từ cụm nhiều từ (như công thức `ἦ δ' ὅς` rút ra `ἦ`) – luôn nhường cho claim mạnh hơn.

Cùng lemma gặp ở nhiều mục nghĩa (ἄρα, ἤ) → **gộp gloss** bằng ` / ` (vi) và `; ` (en). Mạo từ trần (ὁ ἡ τό οᱱ αἱ τά) trong forms/keys của entry khác mạo từ bị bỏ (chỉ là dấu nghĩa). Dạng mơ hồ thật sự (πείσομαι = tương lai của πείθομαι và πάσχω) cố ý tra ra `null` – **nguyên tắc không bịa**.

**Xuất**: gloss ngắn (nghĩa đầu trước `;`/` / `, cắt ~24 ký tự) hiển thị trong `.wb` (HTML) và comment `% Gợi ý từ điển` (.tex); bảng vocab PHẦN 2 điền sẵn như §2.7/§3.

**Nguồn danh sách từ**: 800 từ thông dụng nhất theo giáo trình Kantharos Neu (Omega – Ulrich Gebhardt, CC BY-NC-SA 4.0; xem `docs/COPYRIGHT.md`). Gloss tiếng Việt/English tự biên soạn cho Satzanalyse VN.

## 6. Gợi ý hình thái (v1.2, Phần 3)

**Data file**: `data/morph.js` gán `window.SA_MORPH = { version, exact, noun, verb }`; nạp qua `<script src="data/morph.js">` **sau** `data/dict.js`, **trước** `assets/engine.js`. Engine chạy đầy đủ khi thiếu file; API `SA.morphLookup(token, entry)` trả `{ cat, a, e, conf }` hoặc `null` (entry = kết quả `dictLookup`, tuỳ chọn).

**exact – dạng đóng (conf 2)**: mạo từ đủ 17 dạng, đại từ quan hệ, εἰμί (hiện tại/quá khứ/tương lai, đủ biến thể grave/acute), αὐτός, đại từ ngôi (ἐγώ/σύ/ἡμεῖς/ὑμεῖς + các cách), οὗτος, đại từ nghi vấn. Tra bằng key0 + hai biến thể grave↔acute của dấu ở âm cuối (hình thức biến thiên theo vị trí: τὸν/τόν, ἐστὶν/ἐστίν). Nhận dạng đóng → ghi thẳng, **không** dấu "?".

**Bảng đuôi (conf 1)**: `noun` – đuôi danh từ/tính từ/đại từ, ch 1/2/3 (đuôi mơ hồ ghi **tối đa 2 khả năng** tách " / ", khả năng cao nhất đứng đầu – quy ước chốt để không rối não người học; ví dụ -ας = Gen. Sg. f. / Acc. Pl. f.); `verb` – hiện tại/quá khứ/aorist/tương lai, chủ động + TD/BN, nguyên mẫu, gồm biến thể ν di động (σεν, ουσιν, σιν, εν). Khớp đuôi dài → ngắn trên chuỗi đã bỏ mọi dấu thanh + iota dưới; gốc phải còn ≥ 2 ký tự cơ bản. Mọi kết quả theo đuôi **là gợi ý**, xuất kèm "?".

**Gate theo từ loại** (dùng entry): pos chứa danh từ/tính từ/đại từ/số từ → bảng noun; chứa động từ → bảng verb; tiểu từ/trạng từ/liên từ/giới từ/mạo từ/công thức dẫn thoại → `null` (không đoán). Không có entry (không tra thấy) → thử bảng noun trước (danh từ gặp nhiều hơn), không khớp mới thử bảng verb; mọi kết quả **tối đa 2 khả năng**, khả năng cao nhất đứng đầu – không gộp dàn trải làm rối người học.

**Iota dưới sau nguyên âm cuối (ῃ/ᾳ/ῳ)**: Dat. Sg. (ch 1/2) hoặc 2 Sg. hiện tại TD/BN – cùng hình thức; gate quyết định liệt kê cái nào, không entry thì liệt kê cả hai.

**Xuất**: ô form của `.wb` (HTML), comment `% Gợi ý hình thái` mỗi câu (.tex), cột "Dạng (gợi ý)" của bảng vocab (HTML 7 cột / longtable 6 cột), bảng đuôi PHẦN 2 tự động (khóa = đuôi + phân tích, ví dụ tối đa 3 từ, tối đa 12 dòng). Viết tắt chuẩn: Sg./Pl., m./f./n., Nom./Gen./Dat./Acc., ch 1/2/3, TD/BN – định nghĩa trong Chú giải của cả hai định dạng.

**Phạm vi**: L1–10 (chỉ định hiện tại/quá khứ/aorist/tương lai + nguyên mẫu). Chưa phủ: mệnh lệnh, phân từ, hoàn thành, kép đôi, cách giả định; động từ -μι chỉ nhận diện qua exact/dict, không đoán đuôi.

## 7. Kiểm tra tĩnh từ điển & hình thái (chạy cho mọi lần build data)

- Mỗi dòng 5–6 cột tab; không ô trống trong 5 cột đầu; không ASCII `'` trong nội dung; không em dash.
- `node --check data/dict.js`; test thực thi lookup (hit/miss/mơ hồ/elision/gộp nghĩa) – xem work dir trong Knowledge topic.
- `node --check data/morph.js`; test thực thi morphLookup (dạng đóng/grave–acute/iota dưới/gate từ loại/gộp khả năng/ν di động/exporter).
- Smoke test bằng đoạn văn thật (Xenophon/NT): miss phải là từ điển không có (để trống), không có hit sai; gợi ý hình thái sai dạng thì phải có "?" (đuôi mơ hồ: tối đa 2 khả năng, cao nhất đứng đầu), không được ghi đơn nghĩa sai.

## 8. Lộ trình mở rộng đặc tả (thay đổi versioned)

- v1.1 (Phần 2): từ điển tích hợp `data/dict.js` (chi tiết quy tắc ở §5): pre-fill cột Từ điển/Từ loại/Tiếng Việt/English/★ khi tra thấy; gloss ngắn trong Wortblock; không thấy/mơ hồ → để trống.
- v1.2 (Phần 3): gợi ý hình thái `data/morph.js` (chi tiết ở §6): dạng đóng conf 2 ghi thẳng, đoán theo đuôi conf 1 kèm "?"; cột "Dạng (gợi ý)" trong bảng vocab (HTML 7 cột / longtable 6 cột); bảng đuôi sinh tự động; comment `% Gợi ý hình thái` trong .tex.
- v1.3 (Phần 4, hiện hành): corpus mẫu `data/corpus.js` + fill API của exporter HTML (chi tiết ở §9): 10 câu mẫu L1–10 biên soạn tay (kèm 3 ô Pattern/câu), gallery `corpus.html`, xuất HTML pre-fill qua `{hint, vi, sentences[], patterns[]}`; .tex fill là lộ trình (chưa làm).

## 9. Corpus mẫu L1–10 (v1.3, Phần 4)

**Data file**: `data/corpus.js` gán `window.SA_CORPUS = { version, items[] }`; nạp sau `data/morph.js`, trước `assets/engine.js`. Mỗi item: `{ lesson, title, subtitle, focus, source, greek, vi, patterns, sentences[] }` – `greek` là toàn văn bản (1–2 câu), `vi` bản dịch toàn khối, `patterns` là 3 ô Pattern `{vi, rule, tip}` (Ví dụ/Quy tắc/Mẹo nhận diện) làm gương phương pháp, `sentences[]` là fill của exporter (truyền thẳng vào `SA_HTML.build(model, fill)`).

**Mỗi phần tử sentences (fill 1 câu)**: `{ fn, form, gl, chunks, vtab, woertlich, vi, note }` – `fn`/`form`/`gl` là map token → giá trị pre-fill (chức năng câu, dạng, gloss); `chunks` bảng khối từ 3 cột; `vtab` bảng 8 ô (thời/khóc/cách/ngôi... theo cấu trúc PHẦN 1, rỗng → hiển thị hint kiểm tra ellipse); `woertlich` bản dịch từng từ; `vi` dịch câu; `note` ghi chú điểm ngữ pháp (tuỳ chọn).

**Quy ước khóa #n**: token đầu tiên trong câu dùng nguyên token làm khóa; lần gặp thứ n (n ≥ 2) dùng `token#n` (ví dụ `ὁ#2`, `ἦν#3`). Khóa phải khớp accent thực tế trong `greek` (grave ↔ acute theo vị trí) – test tự động bắt lỗi bằng cách token hóa lại `greek` và đối chiếu thứ tự.

**Nguyên tắc biên soạn**: 1 câu/bài L1–10, bám cấu trúc + từ vựng bài đọc graecum-vn (L8 theo Plutarch Lykourgos, L9 theo Xenophon Agesilaos – câu dựng mới theo tinh thần bài đọc, không copy; L6 dùng John 1:1 nguyên văn, public domain). Mọi phân tích làm tay, không tự sinh; lemma chính nằm trong từ điển 800 từ (tra được); từ ngoài danh sách ghi gloss trực tiếp trong fill. Vocab hiển thị dạng chốt (không "?") vì phân tích do tác giả duyệt; gloss tác giả ghi đè khi từ điển trống.

**Fill API (exporter HTML)**: `SA_HTML.build(model, fill)` với fill `{ hint, vi, sentences[], patterns[] }`. Không có fill (hoặc fill thiếu ô) → khung để trống/prompt rỗng như Phần 3; vtab rỗng → hint kiểm tra ellipse; `vocabTable(vocab, tf)` nhận dạng chốt (không "?") + gloss tác giả khi từ điển trống; `patterns[]` điền sẵn 3 ô Pattern, thiếu thì render prompt rỗng cho người học.

**Gallery `corpus.html`**: nạp dict → morph → corpus → engine → exporter-html; nhóm theo bài; render lười (khung phân tích đầy đủ trong iframe `srcdoc` chỉ khi bấm xem); nút tải HTML từng câu (Blob). Exporter HTML giữ tương thích ngược: `build(model)` không fill vẫn hoạt động như Phần 3.
