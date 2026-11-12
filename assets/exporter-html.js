/* Satzanalyse VN – exporter-html.js
 * Sinh bản xuất HTML tĩnh tự chứa (không <script>) theo đặc tả FORMAT-SPEC §2:
 * khung satz, sơ đồ khối từ .wb ba tầng, bảng "Dịch theo cụm", vtab, 7 bước,
 * PHẦN 2 (vocab ★ / pattern / bảng đuôi), CSS in sẵn (mỗi câu một trang).
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

  function wbBlock(token) {
    var e = SA.dictLookup(token);
    var gl = e ? shortGloss(e.vi) : '';
    return '<span class="wb" style="--c:#777"><span class="fn">…</span>' +
      '<span class="word">' + esc(token) + '</span>' +
      (gl ? '<span class="gl">' + esc(gl) + '</span>' : '') +
      '<span class="form">(dạng?)</span></span>';
  }

  function diagram(tokens) {
    return '<div class="diagram">' + tokens.map(wbBlock).join('') + '</div>';
  }

  function chunksTable(tokens) {
    var rows = chunk(tokens).map(function (c) {
      return '<tr><td class="gk">' + esc(c.join(' ')) + '</td><td></td><td></td></tr>';
    }).join('');
    return '<table class="chunks"><caption class="cap">Dịch theo cụm (cách nối nghĩa)</caption>' +
      '<tr><th>Cụm từ (Hy Lạp)</th><th>English</th><th>Tiếng Việt</th></tr>' + rows + '</table>';
  }

  function vtab() {
    return '<table class="vtab">' +
      '<tr><th>Dạng</th><th>Từ điển</th><th>Ngôi</th><th>Số</th><th>Thời</th><th>Thức</th>' +
      '<th>Thể</th><th>Chủ ngữ</th></tr>' +
      '<tr><td colspan="8" class="hintcell">(điền các dạng động từ được chia của câu vào đây)</td></tr>' +
      '</table>';
  }

  function stepsList() {
    return '<ol class="steps">' +
      SA.STEPS.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') +
      '</ol>';
  }

  function uebBox() {
    return '<div class="ueb"><span class="lab">Bản dịch</span><br>' +
      '<em>bản sát nghĩa (wörtlich):</em> <br><em>bản tự nhiên (natürlich):</em> <b></b></div>';
  }

  function satzBlock(s) {
    return '<div class="satz"><div class="head">Câu ' + s.n +
      ' – <span class="gk">' + esc(s.greek) + '</span></div><div class="body">' +
      diagram(s.tokens) + chunksTable(s.tokens) + vtab() + stepsList() +
      '<p class="note">Ghi chú: </p>' + uebBox() + '</div></div>';
  }

  function vocabTable(vocab) {
    var rows = vocab.map(function (t) {
      var e = SA.dictLookup(t);
      return '<tr><td class="gk">' + esc(t) + '</td><td>' +
        (e ? esc(e.lemma) : '') + '</td><td>' + (e ? esc(e.pos) : '') +
        '</td><td>' + (e ? esc(e.vi) : '') + '</td><td>' + (e ? esc(e.en) : '') +
        '</td><td class="star">' + (e ? '★' : '') + '</td></tr>';
    }).join('');
    return '<table class="vocab">' +
      '<tr><th>Dạng trong văn bản</th><th>Từ điển</th><th>Từ loại</th><th>Tiếng Việt</th>' +
      '<th>English</th><th>★</th></tr>' + rows + '</table>' +
      '<p class="note">★ = tra thấy trong từ điển 800 từ (danh sách từ theo Kantharos/Omega). ' +
      'Dòng trống = không tra thấy: bạn tự tra thêm rồi điền. ' +
      'Dạng mơ hồ (khớp nhiều từ khác nhau sau khi bỏ dấu thanh) được cố ý để trống.</p>';
  }

  function patternBox(n) {
    return '<div class="pat"><div class="pt">Pattern ' + n + '</div><div class="pb">' +
      '<b class="q">Ví dụ:</b> <br><b class="q">Quy tắc:</b> <br><b class="q">Mẹo nhận diện:</b> ' +
      '</div></div>';
  }

  function endungenTable() {
    return '<table><tr><th>Đuôi</th><th>Nhận biết dạng</th><th>Ví dụ trong văn bản</th></tr>' +
      '<tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td></tr></table>';
  }

  function build(model) {
    var title = model.title || 'Satzanalyse';
    var sub = model.subtitle || 'Phân tích câu tiếng Hy Lạp cổ';
    var orig = model.sentences.map(function (s) {
      return '(' + s.n + ') <span class="gk">' + esc(s.greek) + '</span>';
    }).join('<br>');

    var satz = model.sentences.map(satzBlock).join('\n');
    var pats = [1, 2, 3].map(patternBox).join('\n');

    return '<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="UTF-8">\n' +
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      '<title>' + esc(title) + '</title>\n<style>\n' + CSS + '\n</style>\n</head>\n<body>\n' +
      '<div class="page">\n' +
      '<div class="hint no-print">In ra PDF: <b>Ctrl/Cmd+P → Save as PDF</b> (CSS in sẵn: mỗi câu một trang). ' +
      'Xuất PDF LaTeX: biên dịch file .tex đi kèm qua XeLaTeX (xem trang Hướng dẫn của Satzanalyse VN).</div>\n' +
      '<h1>' + esc(title) + '</h1>\n<div class="sub">' + esc(sub) + '</div>\n' +
      '<div class="focus">Khung sinh tự động bởi Satzanalyse VN – các ô để trống dành cho bạn tự điền</div>\n' +
      '<div class="box"><div class="bt">Văn bản gốc</div><div class="bb orig">' + orig + '</div></div>\n' +
      '<div class="box"><div class="bt">Chú giải</div><div class="bb">' + chipRow() +
      'Mỗi khối từ có ba tầng: <b>chức năng câu</b> (trên) – <b>từ</b> (giữa) – <b>dạng hình thái</b> (dưới).<br>' +
      'Nhóm khung (grp): khung bao AcI hoặc mệnh đề phụ, kèm nhãn chức năng (ví dụ: "AcI → tân ngữ đối cách của λέγω").<br>' +
      'Từ vựng: gloss tiếng Việt ngay dưới mỗi từ (nếu có) và bảng PHẦN 2 được điền sẵn khi tra thấy trong từ điển 800 từ; ' +
      'không tra thấy thì để trống cho bạn tự điền.<br>' +
      'Sperrstellung (hyphenated attribute position): sở hữu cách xen giữa mạo từ và danh từ ' +
      'tạo ba khối liền nhau: mạo từ | cụm sở hữu cách (định ngữ) | danh từ.<br>' +
      'Bảng "Dịch theo cụm" được chia mặc định ~4 từ/cụm – hãy tự chỉnh lại theo nhóm nghĩa.</div></div>\n' +
      '<h2 class="sec">PHẦN 1 – Phân tích trực quan: từng câu một</h2>\n' +
      satz + '\n' +
      '<div class="box"><div class="bt">Bản dịch toàn văn</div><div class="bb"></div></div>\n' +
      '<h2 class="sec">PHẦN 2 – Từ vựng và Pattern</h2>\n' +
      vocabTable(model.vocab) + '\n' + pats + '\n' +
      '<h3 style="font-family:system-ui,Arial,sans-serif;font-size:15.5px;margin:18px 0 8px">' +
      'Bảng đuôi</h3>\n' + endungenTable() + '\n' +
      '<footer class="cr">Satzanalyse VN · Biên soạn bởi Trần Quốc Tân · Nội dung CC BY-SA 4.0 · Code MIT<br>' +
      'Khi cite hoặc tái sử dụng, ghi công: "Satzanalyse VN – Trần Quốc Tân, ' +
      'https://github.com/qtan-tran/satzanalyse-vn"</footer>\n' +
      '</div>\n</body>\n</html>\n';
  }

  return { build: build, esc: esc };
})();
