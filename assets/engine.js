/* Satzanalyse VN – engine.js
 * Phân tách văn bản Hy Lạp cổ: tách Satz (câu) + token hóa khối từ (Wortblock).
 * Triết lý: KHÔNG bịa phân tích – tool chỉ sinh khung định sẵn;
 * phần không xác định được để trống cho người học tự điền.
 * Code: MIT License. ES5, không dependency, chạy hoàn toàn client-side. */
var SA = (function () {
  'use strict';

  /* Ngưỡng ký tự một lần paste (chốt bởi người sở hữu, ghi trong UI + docs). */
  var LIMIT = 1500;

  /* 14 chức năng câu: key khớp macro LaTeX (\labKEY), nhãn tiếng Việt + gloss Anh.
   * Màu chuẩn dùng chung cho UI tool, bản HTML xuất và đối chiếu màu canvas .tex. */
  var FN = [
    { k: 'Prad', vi: 'Vị ngữ', en: 'predicate' },
    { k: 'Subj', vi: 'Chủ ngữ', en: 'subject' },
    { k: 'Akk', vi: 'Tân ngữ đối cách', en: 'direct object (acc.)' },
    { k: 'Dat', vi: 'Tân ngữ tặng cách', en: 'indirect object (dat.)' },
    { k: 'Attr', vi: 'Định ngữ', en: 'attribute' },
    { k: 'PN', vi: 'Vị ngữ danh từ', en: 'predicate nominative' },
    { k: 'Adv', vi: 'Trạng ngữ', en: 'adverbial' },
    { k: 'Inf', vi: 'Nguyên mẫu', en: 'infinitive' },
    { k: 'Neg', vi: 'Phủ định', en: 'negation' },
    { k: 'Part', vi: 'Tiểu từ', en: 'particle' },
    { k: 'AcIS', vi: 'Chủ ngữ AcI', en: 'subject of the accusativus cum infinitivo' },
    { k: 'Konj', vi: 'Liên từ', en: 'conjunction' },
    { k: 'App', vi: 'Đồng vị ngữ', en: 'apposition' },
    { k: 'Vok', vi: 'Hô cách', en: 'vocative' }
  ];
  var COLORS = {
    Prad: '#1F5FBF', Subj: '#C0392B', Akk: '#1E8449', Dat: '#16877A',
    Attr: '#8E44AD', PN: '#D9730D', Adv: '#8A6D1D', Inf: '#B03A6F',
    Neg: '#000000', Part: '#7F8C7D', AcIS: '#E0457B', Konj: '#5D6D7E',
    App: '#2E4A9E', Vok: '#4A235A'
  };

  /* Bảy bước phân tích – prefilled làm prompt gợi nhớ phương pháp (đặc tả FORMAT-SPEC §4). */
  var STEPS = [
    'Tìm tất cả dạng động từ được chia (finite). Thiếu vị ngữ → kiểm tra Ellipse (thường là ἐστί(ν)/εἰσί(ν)).',
    'Xác định chủ ngữ cho từng động từ. Chủ ngữ không viết ra → nằm trong đuôi động từ (như -ω = ngôi 1 số ít); không đặt hộp chủ ngữ riêng. Danh từ trung tính số nhiều → động từ số ít.',
    'Gộp khối từ (Wortblock) qua mạo từ + đuôi. Sở hữu cách xen giữa mạo từ và danh từ (Sperrstellung) → ba khối liền: mạo từ | cụm sở hữu cách (định ngữ) | danh từ.',
    'Ghi hình thức kén cách của động từ; giới từ + đúng cách.',
    'Tìm nguyên mẫu → kiểm tra AcI; nhiều đối cách trong AcI → tách chủ ngữ/tân ngữ theo ngữ nghĩa, vị trí, mạo từ, bối cảnh.',
    'Phủ định (οὐ/οὐκ/οὐχ, μή) → nhắm vào đâu?',
    'Dịch: bản sát nghĩa (wörtlich) → bản tự nhiên (natürlich).'
  ];

  var GREEK_CHAR = /[\u0370-\u03FF\u1F00-\u1FFF]/;
  /* Token = chuỗi ký tự Hy Lạp + apostrophe elision (’ U+2019, ʼ U+02BC, ASCII '),
   * phải chứa ít nhất một ký tự Hy Lạp. */
  var RAW_RE = /[\u0370-\u03FF\u1F00-\u1FFF\u2019\u02BC']+/g;

  /* Tách câu: cắt sau . · ; ! và xuống dòng, chỉ khi ký tự kế tiếp là khoảng trắng hoặc hết văn bản.
   * (; = dấu hỏi Hy Lạp, · = dấu chấm câu Hy Lạp.) */
  function splitSentences(text) {
    var out = [], buf = '', i, n = text.length, ch, nxt;
    for (i = 0; i < n; i++) {
      ch = text.charAt(i);
      buf += ch;
      if (ch === '.' || ch === '·' || ch === ';' || ch === '!' || ch === '\n') {
        nxt = i + 1 < n ? text.charAt(i + 1) : '';
        if (nxt === '' || /\s/.test(nxt)) { out.push(buf); buf = ''; }
      }
    }
    if (buf.trim()) out.push(buf);
    return out;
  }

  /* Token hóa một câu thành các khối từ ứng viên. */
  function tokenize(sentence) {
    var toks = [], words = sentence.split(/\s+/), w, m, j;
    for (w = 0; w < words.length; w++) {
      RAW_RE.lastIndex = 0;
      m = words[w].match(RAW_RE);
      if (!m) continue;
      for (j = 0; j < m.length; j++) {
        if (m[j] && GREEK_CHAR.test(m[j])) toks.push(m[j]);
      }
    }
    return toks;
  }

  /* Phân tích bản thị: trả về model cho hai exporter, hoặc mã lỗi thân thiện. */
  function analyze(raw, opts) {
    opts = opts || {};
    var text = String(raw || '').replace(/\r\n?/g, '\n');
    var trimmed = text.trim();
    var chars = Array.from(trimmed).length;
    if (chars === 0) return { ok: false, code: 'empty' };
    if (chars > LIMIT) return { ok: false, code: 'limit', chars: chars, limit: LIMIT };

    var sentences = [];
    splitSentences(trimmed).forEach(function (s) {
      var t = tokenize(s);
      if (t.length > 0) sentences.push({ greek: s.replace(/\s+/g, ' ').trim(), tokens: t });
    });
    if (sentences.length === 0) return { ok: false, code: 'nogreek' };

    var seen = Object.create(null), vocab = [];
    sentences.forEach(function (s, i) {
      s.n = i + 1;
      s.tokens.forEach(function (t) {
        var key = t.toLowerCase();
        if (!seen[key]) { seen[key] = 1; vocab.push(t); }
      });
    });

    return {
      ok: true, chars: chars,
      title: String(opts.title || '').trim(),
      subtitle: String(opts.subtitle || '').trim(),
      sentences: sentences,
      vocab: vocab
    };
  }

  return {
    LIMIT: LIMIT, FN: FN, COLORS: COLORS, STEPS: STEPS,
    analyze: analyze, splitSentences: splitSentences, tokenize: tokenize
  };
})();
