/* Satzanalyse VN – exporter-html.js
 * Sinh bản xuất HTML tĩnh tự chứa (không <script>) theo đặc tả FORMAT-SPEC §2:
 * khung satz, sơ đồ khối từ .wb ba tầng, bảng "Dịch theo cụm", vtab, 7 bước,
 * PHẦN 2 (vocab ★ / pattern / bảng đuôi), CSS in sẵn (mỗi câu một trang).
 * Corpus mẫu (Phần 4, FORMAT-SPEC §9): build(model, fill) nhận fill tuỳ chọn
 * {hint, vi, sentences[], patterns[]} điền sẵn chức năng/dạng/gloss/bảng/
 * bản dịch/ô Pattern cho câu mẫu; không có fill thì sinh khung để trống như cũ.
 * Code: MIT License. ES5, không dependency. */
var SA_HTML = (function () {
  'use strict';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* Chia cụm mặc định ~4 từ (người học tự chỉnh theo nhóm nghĩa). */
  function chunk(tokens, size) {
    var out = [], i;
    size = size || 4;
    for (i = 0; i < tokens.length; i += size) out.push(tokens.slice(i, i + size));
    return out;
  }

  var CSS = [
    ':root{--Prad:#1F5FBF;--Subj:#C0392B;--Akk:#1E8449;--Dat:#16877A;--Attr:#8E44AD;',
    '--PN:#D9730D;--Adv:#8A6D1D;--Inf:#B03A6F;--Neg:#000;--Part:#7F8C8D;',
    '--AcIS:#E0457B;--Konj:#5D6D7E;--App:#2E4A9E;--Vok:#4A235A;--ink:#1a1a1a;}',
    '*{box-sizing:border-box}',
    'body{font-family:\'Palatino Linotype\',\'Book Antiqua\',Palatino,\'Times New Roman\',serif;',
    '     color:var(--ink);background:#eef1f5;margin:0}',
    '.page{max-width:860px;margin:0 auto;background:#fff;padding:34px 40px 60px;',
    '      box-shadow:0 0 14px rgba(0,0,0,.15)}',
    'h1{font-size:24px;text-align:center;margin:6px 0 4px}',
    '.sub{text-align:center;font-size:16px;font-weight:bold;margin:2px 0}',
    '.focus{text-align:center;font-size:13.5px;font-style:italic;margin:2px 0 14px}',
    'h2.sec{font-family:system-ui,Arial,sans-serif;font-size:19px;',
    '      border-bottom:2px solid var(--Prad);padding-bottom:3px;margin:26px 0 12px}',
    '.box{border:1px solid #9db8e0;border-radius:7px;margin:12px 0;background:#fff;overflow:hidden}',
    '.box>.bt{background:#e3ecf8;font:700 13px/1.3 system-ui,Arial,sans-serif;padding:7px 12px;',
    '      border-bottom:1px solid #c5d5ee}',
    '.box>.bb{padding:10px 14px;font-size:15.5px;line-height:1.55}',
    '.orig{line-height:1.75;font-size:17px}',
    '.wb{display:inline-flex;flex-direction:column;align-items:center;vertical-align:top;',
    '    margin:2px 9px 4px 0;text-align:center}',
    '.wb .fn{font:700 10px/1.25 system-ui,Arial,sans-serif;color:var(--c);letter-spacing:.2px}',
    '.wb .word{font-size:21px;line-height:1.25;color:var(--c);white-space:nowrap}',
    '.wb .word u{text-decoration:none;border-bottom:2.5px solid currentColor;font-weight:700}',
    '.wb .form{font:9.5px/1.2 system-ui,Arial,sans-serif;color:#666}',
    '.wb .gl{font:italic 10px/1.25 Georgia,\'Times New Roman\',serif;color:#555;',
    '    max-width:74px;white-space:normal}',
    '.chips{margin:8px 0 4px;line-height:2}',
    '.chip{font:700 12px system-ui,Arial,sans-serif;margin-right:10px;white-space:nowrap}',
    '.star{color:#b8860b}',
    '.satz{border:1px solid #9db8e0;border-radius:7px;margin:16px 0;background:#fff;overflow:hidden}',
    '.satz .head{background:#e3ecf8;font:700 13.5px/1.4 system-ui,Arial,sans-serif;',
    '      padding:8px 12px;border-bottom:1px solid #c5d5ee}',
    '.satz .head .gk{font-family:\'Palatino Linotype\',\'Book Antiqua\',Palatino,serif;font-size:15.5px}',
    '.satz .body{padding:12px 14px 10px}',
    '.diagram{line-height:1.1;margin:4px 0 10px}',
    'table{border-collapse:collapse;width:100%;font-size:13.5px}',
    'th{font-family:system-ui,Arial,sans-serif;font-size:12px;background:#f0f3f8;text-align:left}',
    'th,td{border:1px solid #ccd4e0;padding:4px 7px;vertical-align:top}',
    '.vtab .gk,.vocab .gk,.chunks .gk{font-size:14.5px}',
    '.chunks{margin:6px 0 12px}',
    '.chunks .cap{font:700 13px/1.3 system-ui,Arial,sans-serif;margin:0 0 4px}',
    '.hintcell{color:#777;font-style:italic}',
    '.ueb{background:#f6f8fb;border:1px solid #d7dfeb;border-radius:5px;padding:8px 12px;',
    '     margin-top:10px;font-size:14.5px}',
    '.ueb .lab{font:700 12px system-ui,Arial,sans-serif}',
    '.note{font-size:13px;color:#444;margin-top:8px}',
    'ol.steps{margin:6px 0 2px;padding-left:20px;font-size:13.8px;line-height:1.5}',
    'ol.steps li{margin-bottom:2px}',
    '.vocab td{font-size:12.8px}',
    '.pat{border:1px solid #d3a0bf;border-radius:7px;margin:12px 0;background:#fdf5fa;overflow:hidden}',
    '.pat .pt{background:#f8e3f0;font:700 13px/1.35 system-ui,Arial,sans-serif;padding:6px 12px;',
    '      border-bottom:1px solid #e6c3d8}',
    '.pat .pb{padding:8px 13px;font-size:14.2px;line-height:1.5}',
    '.pat b.q{font-family:system-ui,Arial,sans-serif;font-size:12.8px}',
    '.hint{background:#fff8dc;border:1px solid #e8d9a0;border-radius:6px;padding:8px 12px;',
    '      font-size:13.5px;margin:0 0 14px}',
    'footer.cr{margin-top:30px;border-top:1px solid #ccd4e0;padding-top:10px;font-size:12px;',
    '      color:#444;line-height:1.6;text-align:center}',
    '@media print{',
    '  body{background:#fff}',
    '  .page{box-shadow:none;max-width:none;padding:0}',
    '  .no-print{display:none}',
    '  .satz{page-break-before:always;page-break-inside:avoid}',
    '  .satz:first-of-type{page-break-before:auto}',
    '  .wb{page-break-inside:avoid}',
    '}'
  ].join('\n');

  function chipRow() {
    return SA.FN.map(function (f) {
      return '<span class="chip" style="color:' + SA.COLORS[f.k] + '">' +
        f.vi + ' (' + f.en + ')</span>';
    }).join('') + '<br>';
  }

  /* Gloss ngắn cho Wortblock: nghĩa đầu tiên (trước ";"), cắt còn ~24 ký tự. */
  function shortGloss(vi) {
    var g = String(vi).split(';')[0].split(' / ')[0].trim();
    if (g.length > 24) g = g.slice(0, 24).replace(/\s+\S*$/, '') + '…';
    return g;
  }

  /* Ô dạng hình thái: dạng đóng đoán chắc thì ghi thẳng; đoán theo đuôi
   * gắn "?" để kiểm chứng; không đoán được thì giữ "(dạng?)". */
  function formText(m) {
    if (!m) return '(dạng?)';
    return esc(m.a) + (m.conf < 2 ? ' ?' : '');
  }

  /* Khối từ cho corpus mẫu (Phần 4, FORMAT-SPEC §9): sf = fill của câu,
   * có thể điền sẵn fn (chức năng), form (dạng chính xác, không "?"),
   * gl (gloss tiếng Việt). Token xuất hiện lần thứ n (n >= 2) trong câu
   * được tra bằng khóa "token#n", lần đầu bằng nguyên token. */
  function fnByKey(k) {
    for (var i = 0; i < SA.FN.length; i++) if (SA.FN[i].k === k) return SA.FN[i];
    return null;
  }

  function wbBlock(token, sf, counts) {
    counts[token] = (counts[token] || 0) + 1;
    var key = counts[token] === 1 ? token : token + '#' + counts[token];
    var e = SA.dictLookup(token);
    var m = SA.morphLookup(token, e);
    var fnRec = sf && sf.fn ? fnByKey(sf.fn[key]) : null;
    var color = fnRec ? SA.COLORS[fnRec.k] : '#777';
    var gl = sf && sf.gl && sf.gl[key] !== undefined ? String(sf.gl[key]) :
      (e ? shortGloss(e.vi) : '');
    var formTx = sf && sf.form && sf.form[key] !== undefined ?
      esc(sf.form[key]) : formText(m);
    return '<span class="wb" style="--c:' + color + '">' +
      '<span class="fn">' + (fnRec ? esc(fnRec.vi) : '…') + '</span>' +
      '<span class="word">' + esc(token) + '</span>' +
      (gl ? '<span class="gl">' + esc(gl) + '</span>' : '') +
      '<span class="form">' + formTx + '</span></span>';
  }

  function diagram(tokens, sf) {
    var counts = Object.create(null);
    return '<div class="diagram">' + tokens.map(function (t) {
      return wbBlock(t, sf, counts);
    }).join('') + '</div>';
  }

  function chunksTable(tokens, sf) {
    var rows;
    if (sf && sf.chunks) {
      rows = sf.chunks.map(function (c) {
        return '<tr><td class="gk">' + esc(c[0]) + '</td><td>' + esc(c[1]) +
          '</td><td>' + esc(c[2]) + '</td></tr>';
      }).join('');
    } else {
      rows = chunk(tokens).map(function (c) {
        return '<tr><td class="gk">' + esc(c.join(' ')) + '</td><td></td><td></td></tr>';
      }).join('');
    }
    return '<table class="chunks"><caption class="cap">Dịch theo cụm (cách nối nghĩa)</caption>' +
      '<tr><th>Cụm từ (Hy Lạp)</th><th>English</th><th>Tiếng Việt</th></tr>' + rows + '</table>';
  }

  function vtab(sf) {
    var rows, hint;
    if (sf && sf.vtab && sf.vtab.length) {
      rows = sf.vtab.map(function (r) {
        return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
      }).join('');
    } else if (sf && sf.vtab) {
      rows = '<tr><td colspan="8" class="hintcell">(câu không có dạng động từ được chia – kiểm tra ellipse)</td></tr>';
    } else {
      rows = '<tr><td colspan="8" class="hintcell">(điền các dạng động từ được chia của câu vào đây)</td></tr>';
    }
    return '<table class="vtab">' +
      '<tr><th>Dạng</th><th>Từ điển</th><th>Ngôi</th><th>Số</th><th>Thời</th><th>Thức</th>' +
      '<th>Thể</th><th>Chủ ngữ</th></tr>' + rows +
      '</table>';
  }

  function stepsList() {
    return '<ol class="steps">' +
      SA.STEPS.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') +
      '</ol>';
  }

  function uebBox(sf) {
    var w = sf && sf.woertlich !== undefined ? esc(sf.woertlich) : '';
    var n = sf && sf.vi !== undefined ? esc(sf.vi) : '';
    return '<div class="ueb"><span class="lab">Bản dịch</span><br>' +
      '<em>bản sát nghĩa (wörtlich):</em> ' + w + ' <br><em>bản tự nhiên (natürlich):</em> <b>' + n + '</b></div>';
  }

  function satzBlock(s, sf) {
    return '<div class="satz"><div class="head">Câu ' + s.n +
      ' – <span class="gk">' + esc(s.greek) + '</span></div><div class="body">' +
      diagram(s.tokens, sf) + chunksTable(s.tokens, sf) + vtab(sf) + stepsList() +
      '<p class="note">Ghi chú: ' + (sf && sf.note ? esc(sf.note) : '') + '</p>' +
      uebBox(sf) + '</div></div>';
  }

  /* Bảng từ vựng; với corpus mẫu (tf = dạng + gloss tác giả theo token
   * lần đầu xuất hiện) cột "Dạng (gợi ý)" được chốt theo phân tích mẫu
   * (không "?"), gloss tiếng Việt lấy từ tác giả khi từ điển không tra thấy. */
  function vocabTable(vocab, tf) {
    var rows = vocab.map(function (t) {
      var e = SA.dictLookup(t);
      var m = SA.morphLookup(t, e);
      var formTx = tf && tf.form[t] !== undefined ? esc(tf.form[t]) : formText(m);
      var viTx = e ? esc(e.vi) : (tf && tf.gl[t] !== undefined ? esc(tf.gl[t]) : '');
      return '<tr><td class="gk">' + esc(t) + '</td><td>' +
        (e ? esc(e.lemma) + (e.derived ? ' (bóc đuôi)' : '') : '') + '</td><td>' + (e ? esc(e.pos) : '') +
        '</td><td>' + formTx +
        '</td><td>' + viTx + '</td><td>' + (e ? esc(e.en) : '') +
        '</td><td class="star">' + (e ? '★' : '') + '</td></tr>';
    }).join('');
    return '<table class="vocab">' +
      '<tr><th>Dạng trong văn bản</th><th>Từ điển</th><th>Từ loại</th>' +
      '<th>Dạng (gợi ý)</th><th>Tiếng Việt</th><th>English</th><th>★</th></tr>' + rows + '</table>' +
      '<p class="note">★ = tra thấy trong từ điển 800 từ. Dòng trống = không tra thấy: bạn tự tra rồi điền. ' +
      '"(bóc đuôi)" = đoán ngược về từ điển – kiểm chứng. "?" = đoán theo bảng đuôi – kiểm chứng.</p>';
  }

  /* Pattern box: không có fill → ô bài tập (prompt rỗng cho người học);
   * có fill (corpus mẫu) → điền sẵn Ví dụ/Quy tắc/Mẹo nhận diện. */
  function patternBox(n, p) {
    if (p) {
      return '<div class="pat"><div class="pt">Pattern ' + n + '</div><div class="pb">' +
      '<b class="q">Ví dụ:</b> ' + esc(p.vi || '') + '<br>' +
      '<b class="q">Quy tắc:</b> ' + esc(p.rule || '') + '<br>' +
      '<b class="q">Mẹo nhận diện:</b> ' + esc(p.tip || '') +
      '</div></div>';
    }
    return '<div class="pat"><div class="pt">Pattern ' + n + '</div><div class="pb">' +
      '<b class="q">Ví dụ:</b> <br><b class="q">Quy tắc:</b> <br><b class="q">Mẹo nhận diện:</b> ' +
      '</div></div>';
  }

  /* Bảng đuôi tự động: mỗi đuôi nhận diện được một dòng (đuôi, cách nhận
   * biết, ví dụ). Dạng đóng (mạo từ, đại từ quen thuộc, εἰμί) không có đuôi
   * nên không vào đây; tối đa 12 dòng, phần còn lại tự ghi thêm. */
  function endungenTable(vocab) {
    var seen = Object.create(null), keys = [];
    vocab.forEach(function (t) {
      var e = SA.dictLookup(t);
      var m = SA.morphLookup(t, e);
      if (!m || !m.e) return;
      var k = m.e + '|' + m.a;
      if (!seen[k]) { seen[k] = { e: m.e, a: m.a, ex: [] }; keys.push(k); }
      var ex = seen[k].ex;
      if (ex.indexOf(t) < 0 && ex.length < 3) ex.push(t);
    });
    var rows = keys.slice(0, 12).map(function (k) {
      var r = seen[k];
      return '<tr><td>-' + esc(r.e) + '</td><td>' + esc(r.a) +
        ' ?</td><td class="gk">' + esc(r.ex.join(', ')) + '</td></tr>';
    }).join('');
    var tail = '';
    if (keys.length === 0) {
      tail = '<tr><td colspan="3" class="hintcell">(chưa nhận diện được đuôi nào – tự ghi lại đuôi bạn gặp)</td></tr>';
    } else if (keys.length > 12) {
      tail = '<tr><td colspan="3" class="hintcell">… còn ' + (keys.length - 12) +
        ' đuôi nữa – tự ghi thêm theo mẫu trên</td></tr>';
    }
    return '<table><tr><th>Đuôi</th><th>Nhận biết dạng</th><th>Ví dụ trong văn bản</th></tr>' +
      rows + tail + '</table>' +
      '<p class="note">Mọi dòng là gợi ý – hãy kiểm chứng. Dạng đóng và từ bất biến không có đuôi nên không vào bảng này.</p>';
  }

  /* build(model, fill): fill tuỳ chọn của corpus mẫu (Phần 4, FORMAT-SPEC §9):
   * { hint, vi, sentences: [sf mỗi câu theo thứ tự] }. Không có fill → khung
   * để trống cho người học tự điền, như đặc tả §2. */
  function build(model, fill) {
    var title = model.title || 'Satzanalyse';
    var sub = model.subtitle || 'Phân tích câu tiếng Hy Lạp cổ';
    var orig = model.sentences.map(function (s) {
      return '(' + s.n + ') <span class="gk">' + esc(s.greek) + '</span>';
    }).join('<br>');

    var satz = model.sentences.map(function (s, i) {
      return satzBlock(s, fill && fill.sentences ? fill.sentences[i] : null);
    }).join('\n');
    var fillPats = fill && fill.patterns ? fill.patterns : [];
    var pats = [0, 1, 2].map(function (i) {
      return patternBox(i + 1, fillPats[i]);
    }).join('\n');
    var focus = fill && fill.hint ? esc(fill.hint) :
      'Khung sinh tự động bởi Satzanalyse VN – các ô để trống dành cho bạn tự điền';
    var fullVi = fill && fill.vi ? esc(fill.vi) : '';

    /* tf: dạng + gloss tác giả cho lần đầu xuất hiện mỗi token (bảng vocab). */
    var tf = null;
    if (fill && fill.sentences) {
      tf = { form: Object.create(null), gl: Object.create(null) };
      model.sentences.forEach(function (s, i) {
        var sf = fill.sentences[i];
        if (!sf) return;
        s.tokens.forEach(function (t) {
          if (tf.form[t] === undefined && sf.form && sf.form[t] !== undefined) {
            tf.form[t] = sf.form[t];
          }
          if (tf.gl[t] === undefined && sf.gl && sf.gl[t] !== undefined) {
            tf.gl[t] = sf.gl[t];
          }
        });
      });
    }

    return '<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="UTF-8">\n' +
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      '<title>' + esc(title) + '</title>\n<style>\n' + CSS + '\n</style>\n</head>\n<body>\n' +
      '<div class="page">\n' +
      '<div class="hint no-print">In ra PDF: <b>Ctrl/Cmd+P → Save as PDF</b> (mỗi câu một trang). Bản .tex đi kèm: biên dịch qua XeLaTeX (xem trang Hướng dẫn).</div>\n' +
      '<h1>' + esc(title) + '</h1>\n<div class="sub">' + esc(sub) + '</div>\n' +
      '<div class="focus">' + focus + '</div>\n' +
      '<div class="box"><div class="bt">Văn bản gốc</div><div class="bb orig">' + orig + '</div></div>\n' +
      '<div class="box"><div class="bt">Chú giải</div><div class="bb">' + chipRow() +
      'Mỗi khối từ có ba tầng: <b>chức năng câu</b> (trên) – <b>từ</b> (giữa) – <b>dạng hình thái</b> (dưới).<br>' +
      'Ô trống = bạn tự điền – tool không bịa phân tích. "?" = đoán theo đuôi, hãy kiểm chứng; ' +
      '"bất biến" = tiểu từ/liên từ/giới từ/trạng từ không biến cách.<br>' +
      'Sperrstellung: sở hữu cách xen giữa mạo từ và danh từ → ba khối liền nhau (mạo từ | định ngữ | danh từ).<br>' +
      'Viết tắt: Sg./Pl. = số ít/số nhiều; m./f./n. = đực/cái/trung; Nom./Gen./Dat./Acc. = chủ/sở hữu/tặng/đối cách; ' +
      'ch 1/2/3 = biến cách thứ nhất/hai/ba; TD/BN = thể trung/bị động.<br>' +
      'Chi tiết phương pháp: trang Hướng dẫn của Satzanalyse VN.</div></div>\n' +
      '<h2 class="sec">PHẦN 1 – Phân tích trực quan: từng câu một</h2>\n' +
      satz + '\n' +
      '<div class="box"><div class="bt">Bản dịch toàn văn</div><div class="bb">' + fullVi + '</div></div>\n' +
      '<h2 class="sec">PHẦN 2 – Từ vựng và Pattern</h2>\n' +
      vocabTable(model.vocab, tf) + '\n' + pats + '\n' +
      '<h3 style="font-family:system-ui,Arial,sans-serif;font-size:15.5px;margin:18px 0 8px">' +
      'Bảng đuôi</h3>\n' + endungenTable(model.vocab) + '\n' +
      '<footer class="cr">Satzanalyse VN · Biên soạn bởi Trần Quốc Tân · Nội dung CC BY-SA 4.0 · Code MIT<br>' +
      'Khi cite hoặc tái sử dụng, ghi công: "Satzanalyse VN – Trần Quốc Tân, ' +
      'https://github.com/qtan-tran/satzanalyse-vn"</footer>\n' +
      '</div>\n</body>\n</html>\n';
  }

  return { build: build, esc: esc };
})();
