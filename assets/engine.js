/* Satzanalyse VN – engine.js
 * Phân tách văn bản Hy Lạp cổ: tách Satz (câu) + token hóa khối từ (Wortblock).
 * Triết lý: KHÔNG bịa phân tích – tool chỉ sinh khung định sẵn;
 * phần không xác định được để trống cho người học tự điền.
 * Từ điển 800 từ (Phần 2, data/dict.js): tra thấy thì điền sẵn nghĩa,
 * không thấy thì để trống; dạng mơ hồ (khớp nhiều entry sau khi bỏ dấu)
 * cũng để trống – đúng nguyên tắc không bịa.
 * Gợi ý hình thái (Phần 3, data/morph.js): dạng đóng nhận chắc chắn;
 * đuôi biến cách/chia chỉ là gợi ý (gắn "?") để người học kiểm chứng.
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

  /* ---- Từ điển 800 từ (Phần 2) -------------------------------------------
   * Nạp tuỳ chọn từ data/dict.js qua window.SA_DICT (thẻ <script> đặt TRƯỚC
   * engine.js). Engine vẫn chạy đầy đủ khi không có từ điển; dictLookup
   * chỉ trả về entry khi tra chắc chắn. */
  var IDX0 = null, IDX1 = null, IDX2 = null, LOOKUP_CACHE = Object.create(null);
  var AMB = { ambiguous: true };
  var GREEK_RUN = /[\u0370-\u03FF\u1F00-\u1FFF\u2019\u02BC']+/g;
  var APOS_TAIL = /[\u2019\u02BC']+$/;
  /* Mạo từ trần: là dấu nghĩa trong cột forms/keys, không phải dạng của entry. */
  var ARTICLES = { 'ὁ': 1, 'ἡ': 1, 'τό': 1, 'οἱ': 1, 'αἱ': 1, 'τά': 1 };
  /* Mức claim của một key (càng cao càng chắc chắn):
   * 3 = chính là lemma nguyên văn; 2 = keys biên tập/chính tả thay thế;
   * 1 = dạng trong cột forms (mảnh một từ); 0 = weak: mảnh rút ra từ cụm
   * nhiều từ (ví dụ công thức "ἦ δ' ὅς" rút ra "ἦ" – phải nhường cho lemma thật). */
  var KIND_LEMMA = 3, KIND_KEYS = 2, KIND_FORM = 1, KIND_WEAK = 0;

  /* Ba tầng khoá tra:
   * tier 0 – chính xác (chỉ bỏ apostrophe elision cuối từ);
   * tier 1 – bỏ dấu hút + iota dưới, GIỮ dấu thanh (ἥ/ἤ phân biệt được ở tier 0);
   * tier 2 – bỏ mọi dấu thanh (fallback biến thể dấu giữa các bản in, τὸν/τόν).
   * Tra theo thứ tự; dừng ở tầng đầu tiên KHÔNG SỬA: tra thấy thì trả, chạm AMB
   * (khớp nhiều từ khác nhau) thì trả null – nguyên tắc không bịa. */
  function key0(s) {
    return String(s).toLowerCase().normalize('NFC').replace(APOS_TAIL, '');
  }
  function key1(s) {
    return String(s).toLowerCase().normalize('NFD')
      .replace(/[\u0313\u0314]/g, '').replace(APOS_TAIL, '');
  }
  function key2(s) {
    return String(s).toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').replace(APOS_TAIL, '');
  }

  function addKey(idx, k, e, kind) {
    if (!k) return;
    var cur = idx[k];
    if (cur === undefined) { idx[k] = { e: e, k: kind }; return; }
    if (cur === AMB) return;
    if (cur.e === e) { if (kind > cur.k) cur.k = kind; return; }
    if (cur.e.lemma === e.lemma) {
      /* Cùng lemma, nhiều nghĩa (ἄρα, ἦ): gộp gloss, không mất mục. */
      if (cur.e.vi.indexOf(e.vi) < 0) cur.e.vi = cur.e.vi + ' / ' + e.vi;
      if (cur.e.en.indexOf(e.en) < 0) cur.e.en = cur.e.en + '; ' + e.en;
      if (kind > cur.k) cur.k = kind;
      return;
    }
    if (kind > cur.k) { idx[k] = { e: e, k: kind }; return; }
    if (kind < cur.k) return; /* claim yếu hơn key đã có → nhường */
    idx[k] = AMB; /* bằng cấp, hai từ khác nhau → mơ hồ, không tự điền */
  }

  /* Dạng Hy Lạp trong cột forms: mảnh một từ = claim mạnh;
   * mảnh nhiều từ (có khoảng trắng, kể cả ghi chú Latin như Impf.) = weak. */
  function formClaims(forms) {
    var out = [], pieces = String(forms).split(/[,\/;]/), i, j, m, p, strong;
    for (i = 0; i < pieces.length; i++) {
      p = pieces[i].trim();
      if (!p) continue;
      m = p.match(GREEK_RUN);
      if (!m) continue;
      strong = p.indexOf(' ') < 0;
      for (j = 0; j < m.length; j++) {
        out.push({ w: m[j], kind: strong ? KIND_FORM : KIND_WEAK });
      }
    }
    return out;
  }

  function buildDictIndex() {
    IDX0 = Object.create(null); IDX1 = Object.create(null); IDX2 = Object.create(null);
    var lines = window.SA_DICT.tsv.split('\n'), i, j, c, e, parts, claims, w;
    for (i = 0; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      c = lines[i].split('\t');
      if (c.length < 5) continue;
      e = { lemma: c[0], forms: c[1], pos: c[2], vi: c[3], en: c[4] };
      claims = [];
      if (e.lemma.indexOf('/') >= 0) {
        /* lemma có " / ": mỗi phần một từ là chính tả thay thế (σεαυτοῦ / σαυτοῦ);
         * phần nhiều từ (công thức ἦ δ' ὅς) không claim gì cả. */
        parts = e.lemma.split('/');
        for (j = 0; j < parts.length; j++) {
          if (parts[j].trim() && parts[j].trim().indexOf(' ') < 0) {
            claims.push({ w: parts[j].trim(), kind: KIND_KEYS });
          }
        }
      } else {
        claims.push({ w: e.lemma, kind: KIND_LEMMA });
      }
      claims.push.apply(claims, formClaims(e.forms));
      if (c[5]) {
        parts = c[5].trim().split(/\s+/);
        for (j = 0; j < parts.length; j++) claims.push({ w: parts[j], kind: KIND_KEYS });
      }
      for (j = 0; j < claims.length; j++) {
        w = claims[j].w;
        if (ARTICLES[w] && e.pos !== 'mạo từ') continue;
        addKey(IDX0, key0(w), e, claims[j].kind);
        addKey(IDX1, key1(w), e, claims[j].kind);
        addKey(IDX2, key2(w), e, claims[j].kind);
      }
    }
  }

  /* Tra một token trong văn bản. Trả về entry hoặc null (không thấy/mơ hồ). */
  function dictLookup(token) {
    if (!window.SA_DICT || !window.SA_DICT.tsv) return null;
    if (!IDX0) buildDictIndex();
    if (Object.prototype.hasOwnProperty.call(LOOKUP_CACHE, token)) {
      return LOOKUP_CACHE[token];
    }
    var hit = IDX0[key0(token)];
    if (hit === undefined) hit = IDX1[key1(token)];
    if (hit === undefined) {
      /* Tier 2 chỉ dùng cho từ ≥ 2 ký tự cơ bản: từ 1 âm tiết (ἦ/ἡ, ὁ/ὅ)
       * phân biệt nhau chủ yếu bằng dấu hút – bỏ dấu sẽ bịa kết quả. */
      var k2 = key2(token);
      if (k2.length >= 2) hit = IDX2[k2];
    }
    var e = (hit && hit !== AMB) ? hit.e : null;
    LOOKUP_CACHE[token] = e;
    return e;
  }

  /* ---- Gợi ý hình thái (Phần 3, data/morph.js) ---------------------------
   * Bảng dạng đóng (mạo từ, đại từ, εἰμί) + bảng đuôi L1–10. Kết quả
   * conf 1 (đoán theo đuôi) là GỢI Ý – exporter gắn "?" để người học kiểm
   * chứng; từ loại tra được từ từ điển (entry) quyết định chọn bảng đuôi
   * danh từ hay động từ. Không đoán được loại → thử bảng danh từ trước
   * (danh từ gặp nhiều hơn), không khớp mới thử bảng động từ; mọi kết quả
   * tối đa 2 khả năng, khả năng cao nhất đứng đầu. */
  var MORPH_NOUN = null, MORPH_VERB = null, MORPH_CACHE = Object.create(null);

  /* Đổi dấu của âm cuối: acute (0301) ↔ grave (0300) – hình thức biến thiên
   * theo vị trí trong câu (τὸν/τόν, ἐστὶν/ἐστίν) nên phải tra cả hai chiều. */
  function swapLastAccent(s, from, to) {
    var d = s.normalize('NFD'), i = d.length - 1;
    while (i >= 0) {
      if (d.charAt(i) === from) {
        return (d.slice(0, i) + to + d.slice(i + 1)).normalize('NFC');
      }
      i--;
    }
    return s;
  }

  function morphInit() {
    var M = window.SA_MORPH;
    if (!M) return false;
    var byLen = function (a, b) { return b[0].length - a[0].length; };
    MORPH_NOUN = M.noun.slice().sort(byLen);
    MORPH_VERB = M.verb.slice().sort(byLen);
    return true;
  }

  /* Khớp đuôi trên chuỗi đã bỏ dấu; gốc phải còn >= 2 ký tự (tránh đoán
   * nhầm từ quá ngắn). Trả về [đuôi, phân tích] hoặc null. */
  function morphMatch(list, bare) {
    var i, e;
    for (i = 0; i < list.length; i++) {
      e = list[i][0];
      if (bare.length >= e.length + 2 && bare.slice(-e.length) === e) return list[i];
    }
    return null;
  }

  function posIsNounLike(pos) {
    return /danh từ|tính từ|đại từ|số từ/.test(pos);
  }

  /* Cắt kết quả còn tối đa 2 khả năng (khả năng cao nhất đứng đầu). */
  function cap2(a) {
    var parts = String(a).split(' / ');
    return parts.length > 2 ? parts.slice(0, 2).join(' / ') : a;
  }

  /* Nguyên âm cuối kèm iota dưới (ῃ/ᾳ/ῳ): Dat. Sg. (danh từ) hoặc
   * 2 Sg. hiện tại TD/BN (động từ) – cùng hình thức, khác loại từ. */
  function lastBaseIota(s) {
    var i = s.length - 1, c, j, m;
    while (i >= 0) {
      c = s.charAt(i);
      if (c >= '\u0300' && c <= '\u036f') { i--; continue; }
      for (j = i + 1; j < s.length; j++) {
        m = s.charAt(j);
        if (m >= '\u0300' && m <= '\u036f') {
          if (m === '\u0345') return { b: c, iota: true };
        } else break;
      }
      return { b: c, iota: false };
    }
    return null;
  }

  function morphRun(token, entry) {
    var M = window.SA_MORPH;
    if (!M) return null;
    if (!MORPH_NOUN) morphInit();
    var k = key0(token);
    var ex = M.exact[k] ||
      M.exact[swapLastAccent(k, '\u0301', '\u0300')] ||
      M.exact[swapLastAccent(k, '\u0300', '\u0301')];
    if (ex) return { cat: ex[0], a: ex[1], e: null, conf: 2 };
    var pos = entry ? entry.pos : '';
    var posN = posIsNounLike(pos), posV = pos.indexOf('động từ') >= 0;
    /* Từ loại tra được nhưng không thuộc bảng nào (tiểu từ, trạng từ, liên
     * từ, giới từ...) → không đoán hình thái. */
    if (entry && !posN && !posV) return null;
    var bare = key2(token);
    if (bare.length < 3) return null;
    var bi = lastBaseIota(token.toLowerCase().normalize('NFD').replace(APOS_TAIL, ''));
    if (bi && bi.iota && (bi.b === '\u03c9' || bi.b === '\u03b7' || bi.b === '\u03b1')) {
      var opts = [];
      if (bi.b === '\u03c9') {
        opts.push('Dat. Sg. m./n. (ch 2)');
      } else {
        if (posN || !entry) opts.push('Dat. Sg. f. (ch 1)');
        if (posV || !entry) opts.push('2 Sg. hiện tại, TD/BN (động từ)');
      }
      if (opts.length) {
        return { cat: 'danh từ/động từ', a: opts.join(' / '), e: bi.b + '\u0345', conf: 1 };
      }
      return null;
    }
    /* Quy ước không rối não người học (chốt của người sở hữu): mỗi kết quả
     * tối đa 2 khả năng, khả năng cao nhất đứng đầu. Từ không tra thấy:
     * thử bảng danh từ trước (danh từ gặp nhiều hơn), không khớp mới thử
     * bảng động từ – không gộp dàn trải hai bảng. */
    var n = (posN || !entry) ? morphMatch(MORPH_NOUN, bare) : null;
    if (n) return { cat: 'danh từ', a: cap2(n[1]), e: n[0], conf: 1 };
    var v = (posV || !entry) ? morphMatch(MORPH_VERB, bare) : null;
    if (v) return { cat: 'động từ', a: cap2(v[1]), e: v[0], conf: 1 };
    return null;
  }

  /* Gợi ý hình thái cho một token; entry = kết quả tra từ điển (tuỳ chọn),
   * dùng để chọn bảng đuôi phù hợp. Trả về {cat, a, e, conf} hoặc null. */
  function morphLookup(token, entry) {
    if (!window.SA_MORPH) return null;
    var ck = token + '||' + (entry ? entry.lemma : '');
    if (Object.prototype.hasOwnProperty.call(MORPH_CACHE, ck)) return MORPH_CACHE[ck];
    var r = morphRun(token, entry);
    MORPH_CACHE[ck] = r;
    return r;
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
    analyze: analyze, splitSentences: splitSentences, tokenize: tokenize,
    dictLookup: dictLookup, morphLookup: morphLookup
  };
})();
