/* Satzanalyse VN – exporter-tex.js
 * Sinh bản xuất .tex (XeLaTeX/Overleaf) theo đặc tả FORMAT-SPEC §3:
 * preamble canvas Satzanalyse 1:1 (macro \w \en \grp \chip, môi trường satz vtab steps
 * ueb pat – không đổi macro) + block \renewcommand nhãn tiếng Việt theo quy ước portal.
 * Code: MIT License. ES5, không dependency. */
var SA_TEX = (function () {
  'use strict';

  /* Preamble 1:1 từ định dạng canvas (latex-rahmen). KHÔNG đổi macro. */
  var PREAMBLE = String.raw`\documentclass[12pt]{article}
\usepackage{fontspec}
\setmainfont{DejaVu Serif}[Scale=0.95]
\setsansfont{DejaVu Sans}[Scale=0.93]
\newfontfamily\gr{FreeSerif}[Scale=1.25]   % dòng phân tích
\newfontfamily\grt{FreeSerif}[Scale=1.12]  % chữ Hy Lạp trong câu/bảng: {\grt ...}
\usepackage{xcolor,tabularx,booktabs,array,longtable}
\usepackage[a4paper,margin=2.2cm]{geometry}
\usepackage[most]{tcolorbox}
\setlength{\parindent}{0pt}\setlength{\parskip}{8pt}

% Màu theo chức năng câu (Satzglied)
\definecolor{cPrad}{HTML}{1F5FBF} \definecolor{cSubj}{HTML}{C0392B}
\definecolor{cAkk}{HTML}{1E8449}  \definecolor{cDat}{HTML}{16877A}
\definecolor{cAttr}{HTML}{8E44AD} \definecolor{cPN}{HTML}{D9730D}
\definecolor{cAdv}{HTML}{8A6D1D}  \definecolor{cInf}{HTML}{B03A6F}
\definecolor{cNeg}{HTML}{000000}  \definecolor{cPart}{HTML}{7F8C8D}
\definecolor{cAcIS}{HTML}{E0457B} \definecolor{cApp}{HTML}{2E4A9E}
\definecolor{cKonj}{HTML}{5D6D7E} \definecolor{cVok}{HTML}{4A235A}
\newcommand{\labPrad}{Prädikat}\newcommand{\labSubj}{Subjekt}
\newcommand{\labAkk}{Akk.-Objekt}\newcommand{\labDat}{Dat.-Objekt}
\newcommand{\labAttr}{Attribut}\newcommand{\labPN}{Prädikatsnomen}
\newcommand{\labAdv}{Adverbiale}\newcommand{\labInf}{Infinitiv}
\newcommand{\labNeg}{Negation}\newcommand{\labPart}{Partikel}
\newcommand{\labAcIS}{AcI-Subjekt}\newcommand{\labApp}{Apposition}
\newcommand{\labKonj}{Konjunktion}\newcommand{\labVok}{Vokativ}

% \w{KEY}{Wortblock}{Formbestimmung}: trên = chức năng, giữa = từ, dưới = hình thái
\newcommand{\w}[3]{\begin{tabular}[t]{@{}c@{}}%
{\scriptsize\sffamily\bfseries\color{c#1}\csname lab#1\endcsname}\\[-2pt]%
{\gr\color{c#1}#2}\\[-3pt]%
{\scriptsize\sffamily\color{black!65}#3}\end{tabular}\hspace{0.35em}\allowbreak}
% \en{gốc}{đuôi}: đuôi in đậm + gạch chân
\newcommand{\en}[2]{#1\textbf{\underline{#2}}}
% \grp{màu}{nhãn nhóm}{các \w}: khung bao AcI (cInf) hoặc Nebensatz (cKonj)
\newcommand{\grp}[3]{\par\vspace{-2pt}\tcbox[on line,colback=#1!5,colframe=#1!55,boxrule=0.5pt,arc=2pt,
  left=3pt,right=1pt,top=1pt,bottom=2pt,boxsep=1pt]{\begin{tabular}[t]{@{}l@{}}%
  {\scriptsize\sffamily\itshape\color{#1}#2}\\[-1pt]#3\end{tabular}}\hspace{0.45em}\allowbreak}
\newcommand{\chip}[1]{\textcolor{c#1}{\textbf{\textsf{\small\csname lab#1\endcsname}}}}

% Khung câu, bảng động từ, 7 bước, bản dịch
\newtcolorbox{satz}[1]{breakable,enhanced,colback=white,colframe=cPrad!45,boxrule=0.6pt,arc=2pt,
  left=8pt,right=8pt,top=6pt,bottom=6pt,title={#1},coltitle=black,colbacktitle=cPrad!10,
  fonttitle=\bfseries\sffamily}
\newcommand{\vtab}[1]{{\small\renewcommand{\arraystretch}{1.25}%
\begin{tabularx}{\linewidth}{@{}>{\grt}l l c c c c c >{\raggedright\arraybackslash}X@{}}\toprule
\textrm{\textbf{Form}} & \textbf{Lemma} & \textbf{Pers.} & \textbf{Num.} & \textbf{Tempus} & \textbf{Modus} & \textbf{Gen.v.} & \textbf{Subjekt}\\
\midrule
#1\\\bottomrule\end{tabularx}}}
\newcommand{\steps}[1]{{\small\begin{enumerate}\setlength{\itemsep}{1pt}\setlength{\parskip}{0pt}#1\end{enumerate}}}
\newcommand{\ueb}[2]{\textsf{\small\bfseries Übersetzung}\par
\textit{wörtlich:} #1\par \textit{natürlich:} \textbf{#2}}
\newtcolorbox{pat}[1]{colback=cInf!4,colframe=cInf!45,boxrule=0.5pt,arc=2pt,title={#1},coltitle=black,
  colbacktitle=cInf!10,fonttitle=\bfseries\sffamily\small,left=6pt,right=6pt}`;

  /* Nhãn chức năng tiếng Việt (quy ước portal: không thuật ngữ Đức trong bản publish).
   * Macro giữ nguyên, chỉ đổi nội dung nhãn bằng \renewcommand. */
  var LABEL_RENEW = String.raw`% ---- Nhãn chức năng câu: tiếng Việt (Satzanalyse VN) ----
\renewcommand{\labPrad}{Vị ngữ}
\renewcommand{\labSubj}{Chủ ngữ}
\renewcommand{\labAkk}{Tân ngữ đối cách}
\renewcommand{\labDat}{Tân ngữ tặng cách}
\renewcommand{\labAttr}{Định ngữ}
\renewcommand{\labPN}{Vị ngữ danh từ}
\renewcommand{\labAdv}{Trạng ngữ}
\renewcommand{\labInf}{Nguyên mẫu}
\renewcommand{\labNeg}{Phủ định}
\renewcommand{\labPart}{Tiểu từ}
\renewcommand{\labAcIS}{Chủ ngữ AcI}
\renewcommand{\labApp}{Đồng vị ngữ}
\renewcommand{\labKonj}{Liên từ}
\renewcommand{\labVok}{Hô cách}`;

  function esc(s) {
    return String(s).replace(/\\/g, '\\textbackslash{}')
      .replace(/([&%$#_{}])/g, '\\$1')
      .replace(/~/g, '\\textasciitilde{}')
      .replace(/\^/g, '\\textasciicircum{}');
  }

  /* Chia cụm ~4 từ, khớp exporter HTML. */
  function chunk(tokens, size) {
    var out = [], i;
    size = size || 4;
    for (i = 0; i < tokens.length; i += size) out.push(tokens.slice(i, i + size));
    return out;
  }

  function chipsLine() {
    return SA.FN.map(function (f) { return '\\chip{' + f.k + '}'; }).join(' ');
  }

  function origBox(model) {
    var lines = model.sentences.map(function (s) {
      return '(1) '.replace('1', s.n) + '{\\grt ' + esc(s.greek) + '}';
    }).join('\\\\[2pt]\n');
    return '\\begin{satz}{Văn bản gốc}\n' + lines + '\n\\end{satz}\n';
  }

  function legendBox() {
    return '\\begin{satz}{Chú giải}\n' + chipsLine() + '\\\\[4pt]\n' +
      'Mỗi khối từ (\\w) có ba tầng: chức năng câu (trên) – từ (giữa) – dạng hình thái (dưới).\\\\\n' +
      'Nhóm khung (\\grp): khung bao AcI (cInf) hoặc mệnh đề phụ (cKonj) kèm nhãn chức năng.\\\\\n' +
      'Sperrstellung (hyphenated attribute position): sở hữu cách xen giữa mạo từ và danh từ ' +
      'tạo ba khối liền nhau: mạo từ | cụm sở hữu cách (định ngữ) | danh từ.\\\\\n' +
      'Gợi ý hình thái (Phần 3): "?" = đoán theo đuôi – kiểm chứng; điểm dễ nhầm thì 2 khả năng (tách " / "), khả năng cao nhất đứng đầu. Viết tắt: Sg./Pl. = số ít/số nhiều; m./f./n. = đực/cái/trung; Nom./Gen./Dat./Acc. = chủ/sở hữu/tặng/đối cách; ch 1/2/3 = biến cách thứ nhất/hai/ba; TD/BN = thể trung/bị động.\\\\\n' +
      'Bảng "Dịch theo cụm" chia mặc định $\\sim$4 từ/cụm – hãy tự chỉnh lại theo nhóm nghĩa.\n' +
      '\\end{satz}\n';
  }

  function chunksTable(tokens) {
    var rows = chunk(tokens).map(function (c) {
      return esc(c.join(' ')) + ' & & \\\\';
    }).join('\n');
    return '{\\small\\textbf{Dịch theo cụm (cách nối nghĩa)}}\\par\\smallskip\n' +
      '{\\small\\begin{tabular}{>{\\grt}l l l}\n' + rows + '\n\\end{tabular}}\\par\\medskip\n';
  }

  function vtabHint() {
    return '% (điền các dạng động từ được chia vào bảng: ngôi, số, thời, thức, thể, chủ ngữ)\n' +
      '\\vtab{ & & & & & & & \\\\}\n';
  }

  function stepsEnv() {
    var items = SA.STEPS.map(function (s) { return '\\item ' + esc(s); }).join('\n');
    return '\\steps{\n' + items + '\n}\n';
  }

  /* Gợi ý từ điển cho mỗi câu (comment trong .tex, không ảnh hưởng macro). */
  function dictHintLine(tokens) {
    var hits = [], seen = Object.create(null);
    tokens.forEach(function (t) {
      var e = SA.dictLookup(t);
      if (e && !seen[t]) {
        seen[t] = 1;
        hits.push(t + ' = ' + e.vi.split(';')[0].split(' / ')[0].trim() +
          ' (' + e.lemma + ')');
      }
    });
    if (!hits.length) return '';
    return '% Gợi ý từ điển (800 từ theo Kantharos/Omega; không thấy = tự tra thêm): ' +
      hits.join('; ') + '\n';
  }

  /* Gợi ý hình thái cho mỗi câu (comment trong .tex, không ảnh hưởng macro). */
  function morphHintLine(tokens) {
    var hits = [], seen = Object.create(null);
    tokens.forEach(function (t) {
      var e = SA.dictLookup(t);
      var m = SA.morphLookup(t, e);
      if (m && !seen[t] && hits.length < 10) {
        seen[t] = 1;
        hits.push(t + ' = ' + m.a + (m.conf < 2 ? ' (gợi ý, kiểm chứng)' : ''));
      }
    });
    if (!hits.length) return '';
    return '% Gợi ý hình thái (bảng đuôi L1–10; dạng đóng chắc chắn, còn lại đoán theo đuôi): ' +
      hits.join('; ') + '\n';
  }

  function satzBlock(s) {
    var line = '{\\gr ' + s.tokens.map(esc).join(' ') + '}';
    return '\\begin{satz}{Câu ' + s.n + ' – {\\grt ' + esc(s.greek) + '}}\n' +
      '% Sơ đồ phân tích: điền \\w{KEY}{Khối từ}{Dạng} cho từng khối từ.\n' +
      '% KEY trong {Prad, Subj, Akk, Dat, Attr, PN, Adv, Inf, Neg, Part, AcIS, Konj, App, Vok};\n' +
      '% nhóm AcI/mệnh đề phụ bọc bằng \\grp{cInf}{nhãn}{...} hoặc \\grp{cKonj}{nhãn}{...};\n' +
      '% đuôi biến cách gạch chân bằng \\en{gốc}{đuôi}.\n' +
      dictHintLine(s.tokens) +
      morphHintLine(s.tokens) +
      line + '\\par\\medskip\n' +
      chunksTable(s.tokens) +
      vtabHint() +
      stepsEnv() +
      '{\\small Ghi chú:}\\par\\smallskip\n' +
      '\\ueb{(điền bản sát nghĩa)}{(điền bản tự nhiên)}\n' +
      '\\end{satz}\n';
  }

  function vocabLongtable(vocab) {
    var rows = vocab.map(function (t) {
      var e = SA.dictLookup(t);
      var m = SA.morphLookup(t, e);
      return '{\\grt ' + esc(t) + '} & ' + (e ? '{\\grt ' + esc(e.lemma) + '}' : '') +
        ' & ' + (e ? esc(e.pos) : '') +
        ' & ' + (m ? esc(m.a) + (m.conf < 2 ? ' ?' : '') : '') +
        ' & ' + (e ? esc(e.vi) : '') + ' & ' + (e ? esc(e.en) : '') + ' \\\\';
    }).join('\n');
    return '% Từ điển 800 từ (danh sách từ theo Kantharos/Omega): cột được điền sẵn khi tra thấy.\n' +
      '\\begin{longtable}{>{\\grt}l l l l l l}\n' +
      '\\textbf{Dạng trong văn bản} & \\textbf{Từ điển} & \\textbf{Từ loại} & ' +
      '\\textbf{Dạng (gợi ý)} & \\textbf{Tiếng Việt} & \\textbf{English}\\\\\n\\midrule\n' +
      rows + '\n\\end{longtable}\n' +
      '{\\small Ô trống: không tra thấy trong từ điển 800 từ – tự tra thêm rồi điền. ' +
      'Dạng mơ hồ (khớp nhiều từ khác nhau sau khi bỏ dấu thanh) cố ý để trống. ' +
      'Cột "Dạng (gợi ý)": đoán theo bảng đuôi L1–10; dấu "?" = kiểm chứng.}\n';
  }

  function patternBoxes() {
    var out = [], i;
    for (i = 1; i <= 3; i++) {
      out.push('\\begin{pat}{Pattern ' + i + '}\n' +
        '\\textbf{Ví dụ:} \\par\n\\textbf{Quy tắc:} \\par\n\\textbf{Mẹo nhận diện:}\n' +
        '\\end{pat}\n');
    }
    return out.join('\n');
  }

  /* Bảng đuôi tự động (từ gợi ý hình thái L1–10; dạng đóng không có đuôi). */
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
      return '-' + esc(r.e) + ' & ' + esc(r.a) + ' ? & {\\grt ' + esc(r.ex.join(', ')) + '} \\\\';
    }).join('\n');
    var tail = '';
    if (keys.length === 0) {
      tail = '\\multicolumn{3}{l}{\\small (chưa nhận diện được đuôi nào – tự ghi lại đuôi bạn gặp)} \\\\';
    } else if (keys.length > 12) {
      tail = '\\multicolumn{3}{l}{\\small … còn ' + (keys.length - 12) + ' đuôi nữa – tự ghi thêm} \\\\';
    }
    return '% Bảng đuôi tự động: mọi dòng là gợi ý – kiểm chứng.\n' +
      '\\begin{tabular}{l l >{\\grt}l}\n' +
      '\\textbf{Đuôi} & \\textbf{Nhận biết dạng} & \\textbf{Ví dụ trong văn bản}\\\\\n\\midrule\n' +
      rows + '\n' + tail + '\n\\end{tabular}\n';
  }

  function build(model) {
    var title = model.title || 'Satzanalyse';
    var sub = model.subtitle || 'Phân tích câu tiếng Hy Lạp cổ';
    var satzBlocks = model.sentences.map(satzBlock).join('\n');

    return PREAMBLE + '\n\n' + LABEL_RENEW + '\n\n' +
      '\\begin{document}\n' +
      '\\begin{center}{\\LARGE ' + esc(title) + '}\\\\{\\large ' + esc(sub) + '}\\end{center}\n\n' +
      '% Khung sinh tự động bởi Satzanalyse VN – các ô để trống dành cho người học tự điền.\n\n' +
      origBox(model) + '\n' + legendBox() + '\n' +
      '\\clearpage\n\\section*{PHẦN 1 – Phân tích trực quan: từng câu một}\n\n' +
      satzBlocks + '\n' +
      '\\begin{satz}{Bản dịch toàn văn}\n(điền bản dịch trọn văn bản)\n\\end{satz}\n\n' +
      '\\clearpage\n\\section*{PHẦN 2 – Từ vựng và Pattern}\n\n' +
      vocabLongtable(model.vocab) + '\n\n' + patternBoxes() + '\n\n' +
      endungenTable(model.vocab) + '\n' +
      '\\end{document}\n';
  }

  return { build: build, esc: esc };
})();
