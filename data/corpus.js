/* Satzanalyse VN – data/corpus.js (Phần 4)
 * Corpus mẫu L1–10: câu mẫu có phân tích đầy đủ (khung đã điền hoàn chỉnh).
 * Mỗi câu đi kèm: chức năng câu (fn), dạng hình thái chính xác (form),
 * gloss tiếng Việt (gl), bảng "Dịch theo cụm" (chunks), bảng động từ (vtab),
 * bản dịch sát nghĩa + tự nhiên, ghi chú ngữ pháp, và 3 ô Pattern
 * (patterns: {vi, rule, tip} = Ví dụ / Quy tắc / Mẹo nhận diện).
 * Nguồn câu: tự biên soạn theo khuôn ngữ pháp bài 1–10 graecum-vn, hoặc
 * dựng mới từ tinh thần bài đọc (văn bản gốc public domain: NT, Plutarch,
 * Xenophon); KHÔNG sao chép nội dung adapted của giáo trình bản quyền.
 * Từ khóa hình thức: lần xuất hiện thứ n (n >= 2) của một token trong câu
 * được ghi "token#n" (theo thứ tự xuất hiện); lần đầu ghi nguyên token.
 * Corpus chỉ render qua exporter-html (fill API, FORMAT-SPEC §9);
 * .tex fill là lộ trình (§8).
 * Code: MIT License. Nội dung câu mẫu + phân tích: CC BY-SA 4.0. ES5. */
window.SA_CORPUS = {
  version: 1,

  /* Mô tả bộ corpus, hiển thị trên corpus.html. */
  desc: 'Mỗi câu mẫu đi kèm khung phân tích đầy đủ: chức năng câu, dạng hình thái (không còn dấu "?"), gloss, bảng "Dịch theo cụm", bảng động từ, bản dịch, ghi chú ngữ pháp và 3 ô Pattern (Ví dụ / Quy tắc / Mẹo nhận diện). Cách học: dán câu vào trang Công cụ, tự điền khung, rồi mở bản mẫu để đối chiếu.',

  items: [

    /* ---- Bài 1: hiện tại chủ động + khối mạo từ–danh từ (ch 2) ---------- */
    {
      lesson: 1,
      title: 'L1 – Hiện tại chủ động + mạo từ',
      subtitle: 'Corpus mẫu · Satzanalyse VN',
      focus: 'hiện tại chủ động; khối từ mạo từ + danh từ; ch 2',
      source: 'câu tự biên soạn theo khuôn L1',
      greek: 'ὁ ἄνθρωπος τὸν λόγον γράφει.',
      vi: 'Con người viết ra lời nói.',
      patterns: [
        { vi: 'ὁ ἄνθρωπος γράφει (người viết)',
          rule: 'Khối "mạo từ + danh từ" là một đơn vị: mạo từ gánh cách + số cho cả khối (ὁ = Nom. Sg. m., τὸν = Acc. Sg. n.).',
          tip: 'Đọc mạo từ TRƯỚC danh từ: thấy τὸν là chắc chắn Acc., bất kể đuôi danh từ là gì.' },
        { vi: 'γράφει (3 Sg.) / γράφουσι(ν) (3 Pl.)',
          rule: 'Hiện tại chủ động: đuôi -ει = chủ ngữ số ít, -ουσι(ν) = chủ ngữ số nhiều.',
          tip: 'Đếm chủ ngữ qua mạo từ (ὁ vs οἱ) rồi kiểm tra đuôi động từ khớp số.' },
        { vi: 'ὁ ἄνθρωπος τὸν λόγον γράφει (con người viết ra lời nói)',
          rule: 'Trật tự cơ bản: chủ ngữ – tân ngữ – động từ (S–O–V); động từ thường đứng cuối câu.',
          tip: 'Quét từ cuối câu tìm động từ trước, rồi gán vai cho các khối danh từ theo mạo từ.' },
      ],
      sentences: [
        {
          fn: { 'ὁ': 'Subj', 'ἄνθρωπος': 'Subj', 'τὸν': 'Akk', 'λόγον': 'Akk', 'γράφει': 'Prad' },
          form: {
            'ὁ': 'Nom. Sg. m. (mạo từ)',
            'ἄνθρωπος': 'Nom. Sg. m. (ch 2)',
            'τὸν': 'Acc. Sg. m. (mạo từ)',
            'λόγον': 'Acc. Sg. m. (ch 2)',
            'γράφει': '3 Sg. hiện tại, chủ động'
          },
          gl: {
            'ὁ': 'mạo từ (đực)',
            'ἄνθρωπος': 'con người',
            'τὸν': 'mạo từ (đực, đối cách)',
            'λόγον': 'lời nói, bài nói',
            'γράφει': 'viết'
          },
          chunks: [
            ['ὁ ἄνθρωπος', 'the man', 'con người'],
            ['τὸν λόγον', 'the word', 'lời nói'],
            ['γράφει', 'writes', 'viết']
          ],
          vtab: [
            ['γράφει', 'γράφω', '3', 'Sg.', 'hiện tại', 'chỉ định', 'chủ động', 'ὁ ἄνθρωπος']
          ],
          woertlich: 'Con người lời-nói viết.',
          vi: 'Con người viết ra lời nói.',
          note: 'Hai khối từ: [ὁ ἄνθρωπος] là một khối Subj (mạo từ + danh từ cùng chức năng), [τὸν λόγον] là khối Akk. Đuôi ch 2: -ος (Nom.) / -ον (Acc.); mạo từ và danh từ luôn đối chiếu giống–cách–số. Động từ đứng cuối, ngôi 3 số ít khớp chủ ngữ số ít.'
        }
      ]
    },

    /* ---- Bài 2: chủ ngữ trung tính số nhiều + động từ số ít ------------- */
    {
      lesson: 2,
      title: 'L2 – Trung tính số nhiều + động từ số ít',
      subtitle: 'Corpus mẫu · Satzanalyse VN',
      focus: 'chủ ngữ trung tính số nhiều; ch 3 nhóm -μα và -ωρ',
      source: 'câu tự biên soạn theo khuôn L2',
      greek: 'τὰ ζῷα τὸ ὕδωρ πίνει.',
      vi: 'Các con vật uống nước.',
      patterns: [
        { vi: 'τὰ ζῷα πίνει (các con vật uống)',
          rule: 'Chủ ngữ trung tính số nhiều đi với động từ số ít: τὰ ζῷα + πίνει, không phải πίνουσι.',
          tip: 'Trung tính Pl. là ngoại lệ; đếm chủ ngữ bằng mạo từ (τὸ vs τά) rồi mới kiểm tra đuôi động từ.' },
        { vi: 'τὸ ὕδωρ (nước)',
          rule: 'Danh từ ch 3 trung tính (ὕδωρ, σῶμα): Sg. Nom. = Acc., không có đuôi Acc. riêng.',
          tip: 'Mạo từ phân biệt vai: τὸ = Nom./Acc. Sg., τά = Nom./Acc. Pl.; đuôi danh từ không giúp được.' },
        { vi: 'πίνει (uống)',
          rule: 'Động từ chia theo chủ ngữ, không theo tân ngữ: τὸ ὕδωρ là Sg. nhưng đuôi πίνει là do τὰ ζῷα.',
          tip: 'Hỏi "ai/cái gì làm?" trước khi chia; tân ngữ Acc. không bao giờ ảnh hưởng đuôi động từ.' },
      ],
      sentences: [
        {
          fn: { 'τὰ': 'Subj', 'ζῷα': 'Subj', 'τὸ': 'Akk', 'ὕδωρ': 'Akk', 'πίνει': 'Prad' },
          form: {
            'τὰ': 'Nom. Pl. n. (mạo từ)',
            'ζῷα': 'Nom. Pl. n. (ch 3, Gen. ζῴου)',
            'τὸ': 'Acc. Sg. n. (mạo từ)',
            'ὕδωρ': 'Acc. Sg. n. (ch 3, Gen. ὕδατος)',
            'πίνει': '3 Sg. hiện tại, chủ động'
          },
          gl: {
            'τὰ': 'mạo từ (trung, số nhiều)',
            'ζῷα': 'sinh vật, con vật',
            'τὸ': 'mạo từ (trung)',
            'ὕδωρ': 'nước',
            'πίνει': 'uống'
          },
          chunks: [
            ['τὰ ζῷα', 'the animals', 'các con vật'],
            ['τὸ ὕδωρ', 'the water', '(ngụm) nước'],
            ['πίνει', 'drinks', 'uống']
          ],
          vtab: [
            ['πίνει', 'πίνω', '3', 'Sg.', 'hiện tại', 'chỉ định', 'chủ động', 'τὰ ζῷα']
          ],
          woertlich: 'Các con-vật nước uống.',
          vi: 'Các con vật uống nước.',
          note: 'Bẫy số nhiều trung tính: chủ ngữ τὰ ζῷα (Nom. Pl. n.) nhưng động từ dẫn số ÍT (πίνει, không phải πίνουσι). Đối chiếu: τὸ ὕδωρ chỉ một tân ngữ số ít. ζῷον và ὕδωρ đều ch 3: Gen. ζῴου / ὕδατος.'
        }
      ]
    },

    /* ---- Bài 3: ellipse + trạng từ hỏi/trả lời --------------------------- */
    {
      lesson: 3,
      title: 'L3 – Ellipse + trạng từ',
      subtitle: 'Corpus mẫu · Satzanalyse VN',
      focus: 'ellipse trong câu đáp; πῶς / εὖ',
      source: 'câu hỏi–đáp thông dụng theo khuôn L3',
      greek: '– πῶς ἔχεις; – εὖ.',
      vi: '– Bạn thế nào? – Khỏe.',
      patterns: [
        { vi: 'πῶς ἔχεις; (bạn thế nào?)',
          rule: 'Câu hỏi hội thoại thường lược chủ ngữ: đuôi động từ đủ chỉ ngôi; ἔχεις = 2 Sg. → "bạn".',
          tip: 'Suy chủ ngữ từ đuôi: -εις = 2 Sg., -ει = 3 Sg.; chỉ thêm đại từ khi cần nhấn.' },
        { vi: '– εὖ. (khỏe.)',
          rule: 'Câu trả lời có thể lược mọi yếu tố đã rõ từ câu hỏi: εὖ thay cho cả mệnh đề (ἔχω) εὖ.',
          tip: 'Câu không có động từ hình thức → phân tích là ellipse, ghi chú thay vì cố dò bảng động từ.' },
        { vi: 'εὖ (khỏe, trạng từ)',
          rule: 'Trạng từ không biến cách, không nhận chức năng cú pháp của danh từ – chỉ làm trạng ngữ.',
          tip: 'Từ đứng một mình mà vẫn "hoàn chỉnh" nghĩa → chắc chắn ellipse + trạng từ.' },
      ],
      sentences: [
        {
          fn: { 'πῶς': 'Adv', 'ἔχεις': 'Prad' },
          form: { 'πῶς': 'trạng từ (câu hỏi)', 'ἔχεις': '2 Sg. hiện tại, chủ động' },
          gl: { 'πῶς': 'thế nào?', 'ἔχεις': 'có, (sức khỏe) thế nào' },
          chunks: [
            ['πῶς', 'how?', 'thế nào?'],
            ['ἔχεις', 'do you fare?', 'bạn (khỏe) thế nào?']
          ],
          vtab: [
            ['ἔχεις', 'ἔχω', '2', 'Sg.', 'hiện tại', 'chỉ định', 'chủ động', '(trong đuôi: bạn)']
          ],
          woertlich: 'Bạn giữ-thế-nào?',
          vi: 'Bạn thế nào?',
          note: 'ἔχω ở nghĩa "khỏe mạnh, ổn": πῶς ἔχεις; = câu hỏi thăm thông dụng. Chủ ngữ "bạn" nằm trong đuôi động từ, không đặt hộp chủ ngữ riêng.'
        },
        {
          fn: { 'εὖ': 'Adv' },
          form: { 'εὖ': 'trạng từ' },
          gl: { 'εὖ': 'tốt, khỏe' },
          chunks: [
            ['εὖ', 'well', 'khỏe / tốt']
          ],
          vtab: [],
          woertlich: '(Được:) tốt.',
          vi: 'Khỏe.',
          note: 'Ellipse: câu đáp εὖ lược bỏ toàn bộ vị ngữ (hiểu ἔχει ἐμέ / ἔχεις εὖ theo câu hỏi trước đó) – chỉ còn trạng ngữ. Câu không có dạng động từ được chia: bảng động từ để trống.'
        }
      ]
    },

    /* ---- Bài 4: tặng cách (người nghe) + AcI ----------------------------- */
    {
      lesson: 4,
      title: 'L4 – Tặng cách + AcI',
      subtitle: 'Corpus mẫu · Satzanalyse VN',
      focus: 'tặng cách người nghe; AcI đủ ba thành phần',
      source: 'câu tự biên soạn theo khuôn L4',
      greek: 'λέγω σοι τὸν λόγον. νομίζω τὸν θεὸν ἀγαθὸν εἶναι.',
      vi: 'Tôi nói với bạn lời này. Tôi cho rằng thần là tốt lành.',
      patterns: [
        { vi: 'λέγω σοι (tôi nói với bạn)',
          rule: 'Nhóm động từ nói/cho/tỏ + tân ngữ Dat. không cần giới từ: Dat. = người nghe/người nhận.',
          tip: 'Gặp Dat. trần ngay sau động từ → dịch "với/cho ai", đừng thêm "ở" hay "của".' },
        { vi: 'νομίζω τὸν θεὸν ἀγαθὸν εἶναι (tôi cho rằng thần là tốt)',
          rule: 'AcI: động từ nghĩ/cho rằng + [Acc. + nguyên mẫu] = mệnh đề "rằng ..."; Acc. đồng thời là chủ ngữ của nguyên mẫu.',
          tip: 'Dò: V nghĩa "nghĩ/cho rằng" + một Acc. + một nguyên mẫu đứng cạnh → dán nhãn AcI cho cả khối.' },
        { vi: 'εἶναι (nguyên mẫu của εἰμί)',
          rule: 'Nguyên mẫu không chia theo ngôi/thời → bảng động từ ghi "nguyên mẫu"; nhận diện bằng từ điển/dạng đóng.',
          tip: 'Đuôi -ναι luôn là nguyên mẫu; đừng nhầm với đuôi chia của động từ xác định.' },
      ],
      sentences: [
        {
          fn: { 'λέγω': 'Prad', 'σοι': 'Dat', 'τὸν': 'Akk', 'λόγον': 'Akk' },
          form: {
            'λέγω': '1 Sg. hiện tại, chủ động',
            'σοι': 'Dat. Sg. (đại từ ngôi 2)',
            'τὸν': 'Acc. Sg. m. (mạo từ)',
            'λόγον': 'Acc. Sg. m. (ch 2)'
          },
          gl: {
            'λέγω': 'nói',
            'σοι': 'cho bạn (tặng cách)',
            'τὸν': 'mạo từ',
            'λόγον': 'lời nói'
          },
          chunks: [
            ['λέγω', 'I speak', 'tôi nói'],
            ['σοι', 'to you', 'với bạn'],
            ['τὸν λόγον', 'the word', 'lời nói']
          ],
          vtab: [
            ['λέγω', 'λέγω', '1', 'Sg.', 'hiện tại', 'chỉ định', 'chủ động', '(trong đuôi: tôi)']
          ],
          woertlich: 'Tôi nói cho-bạn lời-nói.',
          vi: 'Tôi nói với bạn lời này.',
          note: 'σοι = tặng cách của đại từ ngôi 2 (enclitic, không mang dấu): người nghe hưởng lợi từ hành động. Πρω đề 1: Sg. nằm trong đuôi λέγω, không đặt hộp chủ ngữ.'
        },
        {
          fn: { 'νομίζω': 'Prad', 'τὸν': 'AcIS', 'θεὸν': 'AcIS', 'ἀγαθὸν': 'PN', 'εἶναι': 'Inf' },
          form: {
            'νομίζω': '1 Sg. hiện tại, chủ động',
            'τὸν': 'Acc. Sg. m. (mạo từ)',
            'θεὸν': 'Acc. Sg. m. (ch 2)',
            'ἀγαθὸν': 'Acc. Sg. n. (tính từ, hợp giống–cách–số với AcIS)',
            'εἶναι': 'nguyên mẫu (εἰμί)'
          },
          gl: {
            'νομίζω': 'cho rằng, tin',
            'τὸν': 'mạo từ',
            'θεὸν': 'thần',
            'ἀγαθὸν': 'tốt lành',
            'εἶναι': 'là'
          },
          chunks: [
            ['νομίζω', 'I believe', 'tôi cho rằng'],
            ['τὸν θεὸν', 'god (acc.)', 'thần (đối cách)'],
            ['ἀγαθὸν', 'good', 'tốt lành'],
            ['εἶναι', 'to be', 'là']
          ],
          vtab: [
            ['νομίζω', 'νομίζω', '1', 'Sg.', 'hiện tại', 'chỉ định', 'chủ động', '(trong đuôi: tôi)']
          ],
          woertlich: 'Tôi cho-rằng thần tốt-lành là.',
          vi: 'Tôi cho rằng thần là tốt lành.',
          note: 'AcI đủ ba thành phần: τὸν θεόν = chủ ngữ đối cách của nguyên mẫu (AcIS), ἀγαθόν = vị ngữ danh từ (PN) hợp giống–cách–số với AcIS, εἶναι = nguyên mẫu (Inf). Dịch vế AcI như một mệnh đề "rằng ...".'
        }
      ]
    },

    /* ---- Bài 5: tính từ danh từ hóa + hiện tại bị động -------------------- */
    {
      lesson: 5,
      title: 'L5 – Danh từ hóa + bị động',
      subtitle: 'Corpus mẫu · Satzanalyse VN',
      focus: 'tính từ danh từ hóa; hiện tại bị động',
      source: 'câu châm ngôn tự biên soạn theo khuôn L5',
      greek: 'τὸ ἀληθὲς ἀεὶ ζητεῖται.',
      vi: 'Chân lý luôn được tìm kiếm.',
      patterns: [
        { vi: 'τὸ ἀληθὲς (chân lý, "cái thật")',
          rule: 'Danh từ hóa: mạo từ τὸ + trung tính Sg. của tính từ → khái niệm trừu tượng ("cái ...").',
          tip: 'Thấy τὸ + tính từ (tra từ điển theo lemma tính từ, ở đây ἀληθής) → dịch "cái ...".' },
        { vi: 'ζητεῖται (được tìm kiếm)',
          rule: 'Đuôi -ται = 3 Sg. hiện tại TD/BN → nghĩa bị động; chủ ngữ là người/vật chịu tác động.',
          tip: 'Đối chiếu cặp chủ động/bị động: -ει (làm) vs -ται (được làm); gloss từ điển chủ động không cản nghĩa bị động của câu.' },
        { vi: 'ἀεί (luôn)',
          rule: 'Trạng từ như ἀεί không biến cách, không nhận chức năng cú pháp của danh từ – chỉ làm trạng ngữ.',
          tip: 'Từ không khớp bảng đuôi + đứng chỗ trạng ngữ → tra từ điển xem pos: trạng từ thì khỏi đoán hình thái.' },
      ],
      sentences: [
        {
          fn: { 'τὸ': 'Subj', 'ἀληθὲς': 'Subj', 'ἀεὶ': 'Adv', 'ζητεῖται': 'Prad' },
          form: {
            'τὸ': 'Nom. Sg. n. (mạo từ)',
            'ἀληθὲς': 'Nom. Sg. n. (tính từ hai đuôi ἀληθής, -ές)',
            'ἀεὶ': 'trạng từ',
            'ζητεῖται': '3 Sg. hiện tại, bị động'
          },
          gl: {
            'τὸ': 'mạo từ (danh từ hóa)',
            'ἀληθὲς': 'điều thật, chân lý',
            'ἀεὶ': 'luôn luôn',
            'ζητεῖται': 'được tìm kiếm'
          },
          chunks: [
            ['τὸ ἀληθὲς', 'the truth', 'chân lý'],
            ['ἀεὶ', 'always', 'luôn luôn'],
            ['ζητεῖται', 'is being sought', 'được tìm kiếm']
          ],
          vtab: [
            ['ζητεῖται', 'ζητέω', '3', 'Sg.', 'hiện tại', 'chỉ định', 'bị động', 'τὸ ἀληθές']
          ],
          woertlich: 'Điều-thật luôn được-tìm.',
          vi: 'Chân lý luôn được tìm kiếm.',
          note: 'Tính từ danh từ hóa: τὸ ἀληθές = "chân lý" (mạo từ + trung tính của tính từ hai đuôi ἀληθής, -ές). ζητεῖται bị động: chủ ngữ τὸ ἀληθές chịu tác động của hành động ("được tìm").'
        }
      ]
    },

    /* ---- Bài 6: εἰμί + mệnh đề danh ngữ (John 1:1) ------------------------ */
    {
      lesson: 6,
      title: 'L6 – εἰμί + mệnh đề danh ngữ (John 1:1)',
      subtitle: 'Corpus mẫu · John 1:1, văn bản gốc public domain',
      focus: 'εἰμί quá khứ; mệnh đề danh ngữ; giới từ + cách',
      source: 'John 1:1 (Tin Lành, văn bản gốc public domain)',
      greek: 'ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.',
      vi: 'Khởi đầu đã có Lời; Lời ở cùng thần; và Lời chính là thần.',
      patterns: [
        { vi: 'ἐν ἀρχῇ (trong khởi đầu); πρὸς τὸν θεόν (cùng với thần)',
          rule: 'Giới từ quyết định cách của danh từ theo sau: ἐν + Dat., πρὸς + Acc., διά + Gen.',
          tip: 'Học giới từ kèm cách đi kèm như một khối (ἐν + Dat.), đừng học nghĩa trần.' },
        { vi: 'θεὸς ἦν ὁ λόγος (Lời chính là thần)',
          rule: 'Trong câu εἰμί: khối có mạo từ là chủ ngữ (ὁ λόγος), danh ngữ không mạo từ là vị ngữ (θεός).',
          tip: 'Thiếu mạo từ → khả năng cao là vị ngữ; đứng đầu câu còn là nhấn mạnh (không đảo nghĩa).' },
        { vi: 'ἦν (3 Sg. quá khứ của εἰμί)',
          rule: 'Mọi dạng của εἰμί (ἐστίν, ἦν, ἔσται...) là dạng đóng: nhận diện ngay trong exact map.',
          tip: 'Động từ quen thuộc nhất nên khỏi đoán đuôi; mệnh đề danh ngữ không tả hành động, chỉ "gán định danh".' },
      ],
      sentences: [
        {
          fn: {
            'ἐν': 'Adv', 'ἀρχῇ': 'Adv', 'ἦν': 'Prad', 'ὁ': 'Subj', 'λόγος': 'Subj',
            'καὶ': 'Konj', 'ὁ#2': 'Subj', 'λόγος#2': 'Subj', 'ἦν#2': 'Prad',
            'πρὸς': 'Adv', 'τὸν': 'Adv', 'θεόν': 'Adv',
            'καὶ#2': 'Konj', 'θεὸς': 'PN', 'ἦν#3': 'Prad', 'ὁ#3': 'Subj', 'λόγος#3': 'Subj'
          },
          form: {
            'ἐν': 'giới từ + Dat.',
            'ἀρχῇ': 'Dat. Sg. f. (ch 1)',
            'ἦν': '3 Sg. quá khứ (εἰμί)',
            'ἦν#2': '3 Sg. quá khứ (εἰμί)',
            'ἦν#3': '3 Sg. quá khứ (εἰμί)',
            'ὁ': 'Nom. Sg. m. (mạo từ)',
            'ὁ#2': 'Nom. Sg. m. (mạo từ)',
            'ὁ#3': 'Nom. Sg. m. (mạo từ)',
            'λόγος': 'Nom. Sg. m. (ch 2)',
            'λόγος#2': 'Nom. Sg. m. (ch 2)',
            'λόγος#3': 'Nom. Sg. m. (ch 2)',
            'καὶ': 'liên từ',
            'καὶ#2': 'liên từ',
            'πρὸς': 'giới từ + Acc.',
            'τὸν': 'Acc. Sg. m. (mạo từ)',
            'θεόν': 'Acc. Sg. m. (ch 2)',
            'θεὸς': 'Nom. Sg. m. (ch 2)'
          },
          gl: {
            'ἐν': 'ở trong',
            'ἀρχῇ': 'khởi đầu',
            'ἦν': 'đã là, đã hiện hữu',
            'ἦν#2': 'đã là, đã hiện hữu',
            'ἦν#3': 'đã là, đã hiện hữu',
            'ὁ': 'mạo từ',
            'ὁ#2': 'mạo từ',
            'ὁ#3': 'mạo từ',
            'λόγος': 'Lời',
            'λόγος#2': 'Lời',
            'λόγος#3': 'Lời',
            'καὶ': 'và',
            'καὶ#2': 'và',
            'πρὸς': 'ở cùng, hướng về',
            'τὸν': 'mạo từ',
            'θεόν': 'thần',
            'θεὸς': 'thần'
          },
          chunks: [
            ['ἐν ἀρχῇ', 'in the beginning', 'ở khởi đầu'],
            ['ἦν ὁ λόγος', 'was the Word', 'Lời đã hiện hữu'],
            ['καὶ ὁ λόγος ἦν πρὸς τὸν θεόν', 'and the Word was with God', 'và Lời ở cùng thần'],
            ['καὶ θεὸς ἦν ὁ λόγος', 'and the Word was God', 'và Lời chính là thần']
          ],
          vtab: [
            ['ἦν', 'εἰμί', '3', 'Sg.', 'quá khứ', 'chỉ định', 'chủ động', 'ὁ λόγος'],
            ['ἦν', 'εἰμί', '3', 'Sg.', 'quá khứ', 'chỉ định', 'chủ động', 'ὁ λόγος'],
            ['ἦν', 'εἰμί', '3', 'Sg.', 'quá khứ', 'chỉ định', 'chủ động', 'ὁ λόγος']
          ],
          woertlich: 'Ở khởi-đầu Lời đã-là, và Lời đã-là ở-cùng thần, và thần Lời đã-là.',
          vi: 'Khởi đầu đã có Lời; Lời ở cùng thần; và Lời chính là thần.',
          note: 'Ba mệnh đề danh ngữ với εἰμί quá khứ ἦν. Mệnh đề 3: θεὸς không có mạo từ nên là VỊ NGỮ danh từ (đứng đầu câu cho nhấn); chủ ngữ là ὁ λόγος (có mạo từ). Mạo từ quyết định vai trò: dịch "Lời chính là thần", không phải "một vị thần nào là Lời". ἐν + Dat. = nơi chốn/trạng ngữ; πρὸς + Acc. = "ở cùng" (quan hệ gần gũi).'
        }
      ]
    },

    /* ---- Bài 7: ch 3 + mệnh lệnh ngôi 3 + deponent ----------------------- */
    {
      lesson: 7,
      title: 'L7 – Ch 3 + mệnh lệnh ngôi 3',
      subtitle: 'Corpus mẫu · Satzanalyse VN',
      focus: 'ch 3 (πατήρ, παῖς); mệnh lệnh ngôi 3; deponent φοβέομαι',
      source: 'câu tự biên soạn theo khuôn L7',
      greek: 'ὁ πατὴρ τὸν παῖδα παιδεύει. μὴ φοβείσθω ὁ παῖς.',
      vi: 'Người cha dạy dỗ đứa trẻ. Đứa trẻ chớ sợ.',
      patterns: [
        { vi: 'ὁ πατήρ, τοῦ πατρός; ὁ παῖς, τοῦ παιδός',
          rule: 'Ch 3 (cha, con): Nom. Sg. không có đuôi chuẩn, Gen. Sg. -ος; phải nhớ cặp Nom.–Gen. của từng từ.',
          tip: 'Đuôi -os có 2 khả năng (Nom. Sg. m. ch 2 / Gen. Sg. m.n. ch 3) – mạo từ ὁ vs τοῦ là chìa khóa.' },
        { vi: 'μὴ φοβείσθω ὁ παῖς (đứa trẻ chớ sợ)',
          rule: 'Mệnh lệnh ngôi 3 (TD/BN): đuôi -έσθω/-σθω; phủ định mệnh lệnh dùng μὴ, không dùng οὐ.',
          tip: 'Thấy -σθω = mệnh lệnh cho người thứ ba; ngôi 2 sẽ là -ου/-σον; μὴ luôn đi với mệnh lệnh.' },
        { vi: 'φοβείσθω ← φοβέομαι (deponent)',
          rule: 'Deponent: hình thức trung/bị động nhưng nghĩa chủ động; từ điển ghi gốc -ομαι kèm gloss chủ động.',
          tip: 'Tra thấy gloss chủ động mà dạng có đuôi trung/bị động → ghi chú deponent, đừng dịch bị động.' },
      ],
      sentences: [
        {
          fn: { 'ὁ': 'Subj', 'πατὴρ': 'Subj', 'τὸν': 'Akk', 'παῖδα': 'Akk', 'παιδεύει': 'Prad' },
          form: {
            'ὁ': 'Nom. Sg. m. (mạo từ)',
            'πατὴρ': 'Nom. Sg. m. (ch 3, Gen. πατρός)',
            'τὸν': 'Acc. Sg. m. (mạo từ)',
            'παῖδα': 'Acc. Sg. m. (ch 3, Gen. παιδός)',
            'παιδεύει': '3 Sg. hiện tại, chủ động'
          },
          gl: {
            'ὁ': 'mạo từ',
            'πατὴρ': 'cha',
            'τὸν': 'mạo từ',
            'παῖδα': 'đứa trẻ',
            'παιδεύει': 'giáo dục, rèn luyện'
          },
          chunks: [
            ['ὁ πατὴρ', 'the father', 'người cha'],
            ['τὸν παῖδα', 'the child', 'đứa trẻ'],
            ['παιδεύει', 'educates', 'dạy dỗ']
          ],
          vtab: [
            ['παιδεύει', 'παιδεύω', '3', 'Sg.', 'hiện tại', 'chỉ định', 'chủ động', 'ὁ πατήρ']
          ],
          woertlich: 'Người cha đứa-trẻ giáo-dục.',
          vi: 'Người cha dạy dỗ đứa trẻ.',
          note: 'Hai danh từ ch 3: πατήρ (Gen. πατρός) và παῖς (Gen. παιδός) – thân từ thay đổi, tra từ điển theo Gen.'
        },
        {
          fn: { 'μὴ': 'Neg', 'φοβείσθω': 'Prad', 'ὁ': 'Subj', 'παῖς': 'Subj' },
          form: {
            'μὴ': 'tiểu từ phủ định (mệnh lệnh / giả định)',
            'φοβείσθω': 'Mệnh lệnh 3 Sg. hiện tại, TD/BN (deponent φοβέομαι)',
            'ὁ': 'Nom. Sg. m. (mạo từ)',
            'παῖς': 'Nom. Sg. m. (ch 3, Gen. παιδός)'
          },
          gl: {
            'μὴ': 'đừng (phủ định)',
            'φοβείσθω': 'chớ sợ',
            'ὁ': 'mạo từ',
            'παῖς': 'đứa trẻ'
          },
          chunks: [
            ['μὴ φοβείσθω', 'let (him) not fear', 'chớ sợ'],
            ['ὁ παῖς', 'the child', 'đứa trẻ']
          ],
          vtab: [
            ['φοβείσθω', 'φοβέομαι', '3', 'Sg.', 'hiện tại', 'mệnh lệnh', 'TD/BN (deponent)', 'ὁ παῖς']
          ],
          woertlich: 'Đừng-sợ đứa-trẻ.',
          vi: 'Đứa trẻ chớ sợ.',
          note: 'Mệnh lệnh ngôi 3 (-έσθω): khuyên/cấm cho người THỨ BA (ὁ παῖς), không nhắm người nghe. μὴ (không phải οὐ) phủ định mệnh lệnh. φοβέομαι = deponent: hình thức trung/bị động nhưng nghĩa chủ động "sợ"; dạng mệnh lệnh nằm ngoài bảng đuôi L1–10 – nhận diện theo nguyên mẫu từ điển.'
        }
      ]
    },

    /* ---- Bài 8: ch 3 (πόλις) + aorist + tặng cách lợi ích ----------------- */
    {
      lesson: 8,
      title: 'L8 – Ch 3 + aorist + tặng cách',
      subtitle: 'Corpus mẫu · theo bài đọc L8 graecum-vn: Plutarch, Lykourgos',
      focus: 'ch 3 πόλις (Dat. πόλει); aorist; tặng cách lợi ích',
      source: 'theo bài đọc L8 graecum-vn: Plutarch, Lykourgos (simplified)',
      greek: 'ὁ Λυκοῦργος τοὺς νόμους τῇ πόλει ἔδωκεν.',
      vi: 'Lykourgos đã ban bộ luật cho thành bang.',
      patterns: [
        { vi: 'ἔδωκεν (đã ban)',
          rule: 'Aorist chủ động: augment ἐ- đầu từ + đuôi -σε(ν) = hành động đơn lẻ trong quá khứ ("đã ... một lần").',
          tip: 'Chữ ἐ- lạ đầu từ (không có ở lemma từ điển) là cờ augment → tìm tiếp đuôi aorist -σε.' },
        { vi: 'τῇ πόλει (cho thành bang)',
          rule: 'Dat. lợi ích: sau động từ trao/ban (δίδωμι), Dat. trần = người nhận lợi ích, không cần giới từ.',
          tip: 'Câu "ai cho ai cái gì": người nhận = Dat., vật trao = Acc.; đừng thêm giới từ khi dịch.' },
        { vi: 'ὁ Λυκοῦργος (tên riêng)',
          rule: 'Tên riêng đoán hình thái như danh từ thường: -ος = Nom. Sg. m. hoặc Gen. Sg. m./n. ch 3 (2 khả năng).',
          tip: 'Mạo từ quyết định: ὁ Λυκοῦργος → Nom.; đoán mà không có mạo từ thì phải kèm "?" theo quy tắc conf 1.' },
      ],
      sentences: [
        {
          fn: {
            'ὁ': 'Subj', 'Λυκοῦργος': 'Subj', 'τοὺς': 'Akk', 'νόμους': 'Akk',
            'τῇ': 'Dat', 'πόλει': 'Dat', 'ἔδωκεν': 'Prad'
          },
          form: {
            'ὁ': 'Nom. Sg. m. (mạo từ)',
            'Λυκοῦργος': 'Nom. Sg. m. (tên riêng, ch 2)',
            'τοὺς': 'Acc. Pl. m. (mạo từ)',
            'νόμους': 'Acc. Pl. m. (ch 2)',
            'τῇ': 'Dat. Sg. f. (mạo từ)',
            'πόλει': 'Dat. Sg. f. (ch 3, Gen. πόλεως)',
            'ἔδωκεν': '3 Sg. aorist, chủ động (δίδωμι; ν di động)'
          },
          gl: {
            'ὁ': 'mạo từ',
            'Λυκοῦργος': 'Lykourgos (nhà lập pháp Sparta)',
            'τοὺς': 'mạo từ (số nhiều)',
            'νόμους': 'luật pháp',
            'τῇ': 'mạo từ',
            'πόλει': 'thành bang',
            'ἔδωκεν': 'đã ban, đã cho'
          },
          chunks: [
            ['ὁ Λυκοῦργος', 'Lykourgos', 'Lykourgos'],
            ['τοὺς νόμους', 'the laws', 'bộ luật'],
            ['τῇ πόλει', 'to the city', 'cho thành bang'],
            ['ἔδωκεν', 'gave', 'đã ban']
          ],
          vtab: [
            ['ἔδωκεν', 'δίδωμι', '3', 'Sg.', 'aorist', 'chỉ định', 'chủ động', 'ὁ Λυκοῦργος']
          ],
          woertlich: 'Lykourgos các-luật cho-thành-bang đã-ban.',
          vi: 'Lykourgos đã ban bộ luật cho thành bang.',
          note: 'Aorist ἔδωκεν (δίδωμι): sự việc trọn vẹn MỘT LẦN trong quá khứ ("đã ban"), đối lập với quá khứ kéo dài. πόλις ch 3: Dat. Sg. πόλει, Gen. πόλεως; τῇ πόλει = tặng cách lợi ích ("cho ai"). Λυκοῦργος là tên riêng, không nằm trong từ điển 800 từ – tự tra thêm.'
        }
      ]
    },

    /* ---- Bài 9: tính từ vị ngữ + cách chỉ phương diện + μέν...δέ ---------- */
    {
      lesson: 9,
      title: 'L9 – Tính từ vị ngữ + μέν...δέ',
      subtitle: 'Corpus mẫu · theo bài đọc L9 graecum-vn: Xenophon, Agesilaos',
      focus: 'tính từ vị ngữ; đối/tặng cách chỉ phương diện; μέν...δέ',
      source: 'theo bài đọc L9 graecum-vn: Xenophon, Agesilaos (simplified)',
      greek: 'ὁ Ἀγησίλαος μικρὸς μὲν τὸ σῶμα, μέγας δὲ τῇ ψυχῇ ἦν.',
      vi: 'Agesilaos nhỏ bé về thân hình nhưng vĩ đại về tâm hồn.',
      patterns: [
        { vi: 'μικρὸν τὸ σῶμα (nhỏ về thân hình)',
          rule: 'Cách chỉ phương diện (Acc. of respect): tính từ + Acc. trần = "về phương diện nào", không phải tân ngữ của động từ.',
          tip: 'Acc. không có mạo từ riêng và không phải tân ngữ trực tiếp → thử dịch "về ..." trước.' },
        { vi: 'μὲν ... δέ (mặc dù ... nhưng)',
          rule: 'Cặp tiểu từ μέν...δέ nối hai mệnh đề tương phản: "về cái này thì..., nhưng về cái kia thì...".',
          tip: 'Thấy μέν → chắc chắn còn một δέ sau đó; hai mệnh đề thường cân đối cấu trúc.' },
        { vi: 'μέγας δὲ τῇ ψυχῇ ἦν (vĩ đại về tâm hồn)',
          rule: 'Tính từ vị ngữ giống hệt chủ ngữ về cách/giống/số: μέγας là Nom. Sg. m. vì chủ ngữ ὁ Ἀγησίλαος.',
          tip: 'Đối chiếu giống/số của tính từ với chủ ngữ, không với danh ngữ Dat. đứng sau (τῇ ψυχῇ chỉ phương diện).' },
      ],
      sentences: [
        {
          fn: {
            'ὁ': 'Subj', 'Ἀγησίλαος': 'Subj', 'μικρὸς': 'PN', 'μὲν': 'Part',
            'τὸ': 'Adv', 'σῶμα': 'Adv', 'μέγας': 'PN', 'δὲ': 'Part',
            'τῇ': 'Adv', 'ψυχῇ': 'Adv', 'ἦν': 'Prad'
          },
          form: {
            'ὁ': 'Nom. Sg. m. (mạo từ)',
            'Ἀγησίλαος': 'Nom. Sg. m. (tên riêng, ch 2)',
            'μικρὸς': 'Nom. Sg. m. (tính từ ba đuôi)',
            'μὲν': 'tiểu từ đối chiếu (μέν...δέ)',
            'τὸ': 'Acc. Sg. n. (mạo từ)',
            'σῶμα': 'Acc. Sg. n. (ch 3, Gen. σώματος) – đối cách chỉ phương diện',
            'μέγας': 'Nom. Sg. m. (tính từ ba đuôi)',
            'δὲ': 'tiểu từ (đứng vị trí 2)',
            'τῇ': 'Dat. Sg. f. (mạo từ)',
            'ψυχῇ': 'Dat. Sg. f. (ch 1) – tặng cách chỉ phương diện',
            'ἦν': '3 Sg. quá khứ (εἰμί)'
          },
          gl: {
            'ὁ': 'mạo từ',
            'Ἀγησίλαος': 'Agesilaos (vua Sparta)',
            'μικρὸς': 'nhỏ bé',
            'μὲν': 'thì (vế 1)',
            'τὸ': 'mạo từ',
            'σῶμα': 'thân thể',
            'μέγας': 'vĩ đại',
            'δὲ': 'còn (vế 2)',
            'τῇ': 'mạo từ',
            'ψυχῇ': 'tâm hồn',
            'ἦν': 'đã là'
          },
          chunks: [
            ['ὁ Ἀγησίλαος', 'Agesilaos', 'vua Agesilaos'],
            ['μικρὸς μὲν τὸ σῶμα', 'small as to his body', 'nhỏ bé về thân hình'],
            ['μέγας δὲ τῇ ψυχῇ', 'great as to his soul', 'vĩ đại về tâm hồn'],
            ['ἦν', 'was', '(đã) là']
          ],
          vtab: [
            ['ἦν', 'εἰμί', '3', 'Sg.', 'quá khứ', 'chỉ định', 'chủ động', 'ὁ Ἀγησίλαος']
          ],
          woertlich: 'Agesilaos nhỏ thì thân-thể, to thì tâm-hồn đã-là.',
          vi: 'Agesilaos nhỏ bé về thân hình nhưng vĩ đại về tâm hồn.',
          note: 'Bộ đối chiếu μέν...δέ tách hai vế tương phản. μικρός / μέγας là tính từ VỊ NGỮ (đứng trước, không ghép với mạo từ danh từ), chủ ngữ là ὁ Ἀγησίλαος. "Về phương diện nào?": τὸ σῶμα (đối cách) và τῇ ψυχῇ (tặng cách) chỉ phương diện – câu hỏi kiểm chứng: "nhỏ/to về cái gì?". Ἀγησίλαος là tên riêng, tự tra thêm.'
        }
      ]
    },

    /* ---- Bài 10: thể trung/bị động vs chủ động + deponent ------------------ */
    {
      lesson: 10,
      title: 'L10 – Thể trung/bị động + deponent',
      subtitle: 'Corpus mẫu · Satzanalyse VN',
      focus: 'chủ động vs trung/bị động; deponent πείθομαι',
      source: 'câu tự biên soạn theo khuôn L10 (bối cảnh quân đội)',
      greek: 'ὁ στρατηγὸς τοῖς στρατιώταις βοηθεῖ. οἱ στρατιῶται τῷ στρατηγῷ πείθονται.',
      vi: 'Vị tướng cứu giúp những người lính. Những người lính vâng lời vị tướng.',
      patterns: [
        { vi: 'βοηθεῖ + Dat. τοῖς στρατιώταις (giúp những người lính)',
          rule: 'Nhóm động từ trị cách Dat.: βοηθέω (giúp), πείθομαι (vâng lời) + Dat. = đối tượng, không cần giới từ.',
          tip: 'Ghi động từ kèm cách nó trị ("βοηθέω + Dat.") ngay trong sổ từ vựng, đừng học động từ trần.' },
        { vi: 'πείθω (thuyết phục) vs πείθομαι (vâng lời)',
          rule: 'Đổi nghĩa theo thể: cùng gốc πείθ-, chủ động là "thuyết phục ai", trung/bị động là "tin rồi vâng lời ai".',
          tip: 'Gặp đuôi trung/bị động (-εται/-ονται) → hỏi "nghĩa có đổi khi đổi thể không?" và tra từ điển cả hai đầu.' },
        { vi: 'πείθονται (3 Pl. hiện tại TD/BN)',
          rule: 'Đuôi cặp hiện tại TD/BN: -ται (3 Sg.) / -ονται (3 Pl.) đối xứng với -ει / -ουσι(ν) của chủ động.',
          tip: 'Đuôi nguyên âm dài + ι (-ται/-ταις/-σθαι...) là dấu trung/bị động.' },
      ],
      sentences: [
        {
          fn: { 'ὁ': 'Subj', 'στρατηγὸς': 'Subj', 'τοῖς': 'Dat', 'στρατιώταις': 'Dat', 'βοηθεῖ': 'Prad' },
          form: {
            'ὁ': 'Nom. Sg. m. (mạo từ)',
            'στρατηγὸς': 'Nom. Sg. m. (ch 2)',
            'τοῖς': 'Dat. Pl. m. (mạo từ)',
            'στρατιώταις': 'Dat. Pl. m. (ch 1, -ης → -αις)',
            'βοηθεῖ': '3 Sg. hiện tại, chủ động'
          },
          gl: {
            'ὁ': 'mạo từ',
            'στρατηγὸς': 'vị tướng',
            'τοῖς': 'mạo từ (số nhiều)',
            'στρατιώταις': 'những người lính',
            'βοηθεῖ': 'cứu giúp, ứng cứu'
          },
          chunks: [
            ['ὁ στρατηγὸς', 'the general', 'vị tướng'],
            ['τοῖς στρατιώταις', 'the soldiers (dat.)', 'những người lính'],
            ['βοηθεῖ', 'helps', 'cứu giúp']
          ],
          vtab: [
            ['βοηθεῖ', 'βοηθέω', '3', 'Sg.', 'hiện tại', 'chỉ định', 'chủ động', 'ὁ στρατηγός']
          ],
          woertlich: 'Vị-tướng các-lính cứu-giúp.',
          vi: 'Vị tướng cứu giúp những người lính.',
          note: 'βοηθεῖ chủ động: vị tướng là người thực hiện hành động; người được cứu (τοῖς στρατιώταις) ở tặng cách.'
        },
        {
          fn: { 'οἱ': 'Subj', 'στρατιῶται': 'Subj', 'τῷ': 'Dat', 'στρατηγῷ': 'Dat', 'πείθονται': 'Prad' },
          form: {
            'οἱ': 'Nom. Pl. m. (mạo từ)',
            'στρατιῶται': 'Nom. Pl. m. (ch 1, -ης → -αι)',
            'τῷ': 'Dat. Sg. m. (mạo từ)',
            'στρατηγῷ': 'Dat. Sg. m. (ch 2)',
            'πείθονται': '3 Pl. hiện tại, TD/BN (deponent πείθομαι)'
          },
          gl: {
            'οἱ': 'mạo từ (số nhiều)',
            'στρατιῶται': 'những người lính',
            'τῷ': 'mạo từ',
            'στρατηγῷ': 'vị tướng',
            'πείθονται': 'vâng lời, tuân theo'
          },
          chunks: [
            ['οἱ στρατιῶται', 'the soldiers', 'những người lính'],
            ['τῷ στρατηγῷ', 'the general (dat.)', 'vị tướng'],
            ['πείθονται', 'obey', 'vâng lời']
          ],
          vtab: [
            ['πείθονται', 'πείθομαι', '3', 'Pl.', 'hiện tại', 'chỉ định', 'TD/BN (deponent)', 'οἱ στρατιῶται']
          ],
          woertlich: 'Các-lính vị-tướng vâng-lời.',
          vi: 'Những người lính vâng lời vị tướng.',
          note: 'Đổi thể, đổi nghĩa: πείθω chủ động = "thuyết phục", nhưng πείθομαι trung = "vâng lời" (deponent: hình thức trung/bị động, nghĩa chủ động). Cả hai động từ ở đây đều kén tặng cách (người được giúp / người được vâng lời).'
        }
      ]
    }

  ]
};
