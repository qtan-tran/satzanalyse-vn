/* Satzanalyse VN – data/dict.js
 * Từ điển 800 từ thông dụng nhất theo giáo trình Kantharos Neu (Omega – Ulrich Gebhardt).
 * Nạp qua <script> (không fetch, để tránh CORS khi mở trực tiếp file://).
 * Code: MIT License. ES5, không dependency. Xem docs/COPYRIGHT.md về nguồn và license.
 */
window.SA_DICT = {
  version: 3.1,
  source: 'Danh sách từ theo Omega (Ulrich Gebhardt), Kantharos Neu – CC BY-NC-SA 4.0',
  cols: ["lemma", "forms", "pos", "vi", "en", "keys"],
  tsv: `
ἄγω	ἄγω, ἄξω, ἤγαγον, ἦχα, ἤγμαι, ἤχθην	động từ	dẫn dắt, đưa đi; kéo đi, hành quân	lead, drive
ἀεί	ἀεί	trạng từ	luôn luôn, mãi mãi; mỗi lần	ever, always
βαίνω	βαίνω, βήσομαι, ἔβην, βέβηκα	động từ	đi, bước, tiến lên	go, walk, step
γάρ	γάρ	tiểu từ	vì, bởi vì (đứng thứ hai trong câu)	for, because	γ
δεῖ	δεῖ, δεήσει, Impf. ἔδει	động từ bất định nhân xưng	cần phải, là điều tất yếu (phủ định: không được)	it is necessary, one must
εἰμί	εἰμί, ἔσομαι, Impf. ἦν, Inf. εἶναι	động từ	là, tồn tại (ἔστιν: có, có thể)	be, exist	εἰμί εἶ ἐστὶν ἐστὶ ἐσμὲν ἐστὲ εἰσὶν εἰσίν ἐσμέν ἐστὲ ἦν ἦς ἦμεν ἦτε ἦσαν ἔσομαι ἐσόμεθα ἔσεσθε ἔσονται ἔσται εἶναι ὢν οὖσα ὄν ὄντος οὔσης ὄντι ὄντα ὄντες
εἰς (ἐς)	εἰς (ἐς)	giới từ	+Đối: vào, đến; chống, về phía	into, to (+acc)
ἐκ, ἐξ	ἐκ, ἐξ	giới từ	+Sở: từ, ra khỏi; kể từ; do, vì	out of, from (+gen)
ἐκεῖ	ἐκεῖ	trạng từ	ở đó, đó	there
ἐλαύνω	ἐλαύνω, ἐλῶ, ἤλασα, ἐλήλακα, ἐλήλαμαι, ἤλαθον	động từ	đuổi, xua đuổi; kéo đi, hành quân	drive, march
ἐν	ἐν	giới từ	+Tặng: trong, ở, tại; trong thời gian	in, at (+dat)
ἕξ	ἕξ	số từ	sáu	six
ἔχω	ἔχω (Impf. εἶχον), ἕξω / σχήσω, ἔσχον, ἔσχηκα	động từ	có, giữ; có thể, biết (εὖ ἔχω: ổn, tốt)	have, hold; can
θεός	θεός θεοῦ, ὁ/ἡ	danh từ	thần, nữ thần	god, goddess
καί	καί	liên từ	và; cũng, ngay cả (καὶ... καὶ: cả... lẫn)	and; also, even
λέγω	λέγω, ἐρῶ, εἶπον, εἴρηκα, εἴρημαι, ἐλέχθην / ἐρρήθην	động từ	nói, phát biểu; cho rằng; kể	say, speak
λείπω	λείπω, λείψω, ἔλιπον, λέλοιπα, λέλειμμαι, ἐλείφθην	động từ	để lại; rời bỏ, bỏ lại; còn sót	leave, abandon
ὁ	ὁ, ἡ, τό	mạo từ	mạo từ xác định: (người/việc) đó	the (article)	ὁ ἡ τό τοῦ τῆς τῷ τῇ τόν τήν οἱ αἱ τῶν τοῖς ταῖς τοὺς τὰς τὰ
ὅμως	ὅμως	trạng từ	tuy vậy, dù sao	nevertheless, nonetheless
οὐρανός	οὐρανός οὐρανοῦ, ὁ	danh từ	bầu trời, trời	heaven, sky
παρά	παρά	giới từ	+Sở: từ, từ phía; +Tặng: ở bên, tại nhà; +Đối: đến, chống lại	from (+gen), at (+dat), against (+acc)	παρ
πόνος	πόνος πόνου, ὁ	danh từ	sự vất vả, khó nhọc	toil, hardship
σύν	σύν	giới từ	+Tặng: cùng với	together with (+dat)
χρυσός (χρυσίον)	χρυσός χρυσοῦ, ὁ (χρυσίον χρυσίου, τό)	danh từ	vàng	gold
ἀδελφός	ἀδελφός ἀδελφοῦ, ὁ	danh từ	anh trai, người anh	brother
ἄνθρωπος	ἄνθρωπος ἀνθρώπου, ὁ	danh từ	con người	human being, man
βάλλω	βάλλω, βαλῶ, ἔβαλον, βέβληκα, βέβλημαι, ἐβλήθην	động từ	ném; trúng đánh	throw, hit
δέ	δέ	tiểu từ	còn, nhưng; và (tiếp nối)	but, and	δ
ἕκαστος	ἕκαστος, ἑκάστη, ἕκαστον	đại từ/tính từ	mỗi (người/việc), từng mỗi	each, every
θάνατος	θάνατος θανάτου, ὁ	danh từ	cái chết	death
θεραπεύω	θεραπεύω	động từ	tôn thờ; chăm sóc, phục vụ	worship; care for, serve
θύω	θύω, θύσω, ἔθυσα, τέθυκα, τέθυμαι, ἐτύθην	động từ	tế lễ, dâng lễ	sacrifice
κόσμος	κόσμος κόσμου, ὁ	danh từ	trật tự; sự trang sức; vũ trụ, thế giới	order; adornment; world
μέν...δέ	μέν...δέ	tiểu từ	thì... còn (đối chiếu hai vế)	on the one hand... on the other
μένω	μένω, μενῶ, ἔμεινα, μεμένηκα	động từ	ở lại, đứng lại; chờ đợi	remain, stay; await
μετά	μετά	giới từ	+Sở: cùng với; +Đối: sau (thời gian)	with (+gen), after (+acc)	μετ
οὕτως / οὕτω / οὕτωσί	οὕτως / οὕτω / οὕτωσί	trạng từ	như vậy, theo cách này	thus, in this way
παρέχω	παρέχω (Impf. παρεῖχον), παρέξω / παρασχήσω, παρέσχον, παρέσχηκα	động từ	đem lại, ban cho, cung cấp	offer, provide, give
ποιέω	ποιέω, ποιήσω, ἐποίησα, πεποίηκα, πεποίημαι, ἐποιήθην	động từ	làm, tạo ra; sáng tác	make, do; compose
ποταμός	ποταμός ποταμοῦ, ὁ	danh từ	dòng sông	river
υἱός	υἱός υἱοῦ, ὁ	danh từ	con trai	son
φόβος	φόβος φόβου, ὁ	danh từ	sự sợ hãi, nỗi khiếp đảm	fear
ἀκούω	ἀκούω, ἀκούσομαι, ἤκουσα, ἀκήκοα, ἠκούσθην	động từ	nghe (nghe ai +Sở; nghe việc gì +Đối)	hear
ἀλλά	ἀλλά	liên từ	nhưng; mà đúng hơn là	but, rather	ἀλλ
ἄλλος	ἄλλος, ἄλλη, ἄλλο	tính từ/đại từ	khác, một khác, người/việc khác	other, another
ἄρα	ἄρα	tiểu từ	vậy thì, do đó	then, therefore
ἄρα	ἄρα	tiểu từ	tiểu từ mở đầu câu hỏi (thường không dịch)	question particle
γιγνώσκω	γιγνώσκω, γνώσομαι, ἔγνων, ἔγνωκα, ἔγνωσμαι, ἐγνώσθην	động từ	nhận ra, biết, hiểu biết	know, recognize
γράφω	γράφω, γράψω, ἔγραψα, γέγραφα, γέγραμμαι, ἐγράφη	động từ	viết	write
διδάσκω	διδάσκω, διδάξω, ἐδίδαξα, δεδίδαχα, δεδίδαγμαι, ἐδιδάχθην	động từ	dạy, hướng dẫn	teach, instruct
ἤ	ἤ	liên từ	hoặc (ἤ...ἤ: hoặc...hoặc); hơn (sau so sánh hơn)	or; than (after comparative)
ἥλιος	ἥλιος ἡλίου, ὁ	danh từ	mặt trời	sun
κατηγορέω	κατηγορέω, κατηγορήσω, κατηγόρησα, κατηγόρηκα, κατηγόρημαι, κατηγορήθην	động từ	tố cáo, buộc tội	accuse
λίθος	λίθος λίθου, ὁ	danh từ	hòn đá	stone
νομίζω	νομίζω, νομιῶ, ἐνόμισα, νενόμικα, νενόμισμαι, ἐνομίσθην	động từ	cho rằng, tin; coi như; theo tục	believe, consider; be customary
ὅτι	ὅτι	liên từ	rằng; bởi vì	that; because
οὐ, οὐκ, οὐχ	οὐ, οὐκ, οὐχ	trạng từ	không (phủ định điều có thật)	not
οὐδέ	οὐδέ	liên từ	và không, cũng không; ngay cả... cũng không	and not, not even
τίς	τίς, τί	đại từ	ai? cái gì? người/việc nào?	who? what? which?	τίνα τίνι τίνος τίνες τίνας
ὡς	ὡς	liên từ	như, rằng; với tư cách là; khi; để mà	as, that; when
βασιλεύς	βασιλεύς βασιλέως, ὁ	danh từ	vua	king
δεινός	δεινός, δεινή, δεινόν	tính từ	ghê gớm, đáng sợ; tài giỏi, xuất sắc	terrible; clever, able
ἐθέλω (θέλω)	ἐθέλω (θέλω), ἐθελήσω, ἠθέλησα, ἠθέληκα	động từ	muốn, sẵn lòng	want, wish
εἶτα	εἶτα	trạng từ	rồi, sau đó; tiếp nữa	then, next
κελεύω	κελεύω, κελεύσω, ἐκέλευσα, κεκέλευκα, κεκέλευσμαι, ἐκελεύσθην	động từ	ra lệnh, sai bảo	order, command
οὐδαμῶς	οὐδαμῶς	trạng từ	tuyệt nhiên không, không thể nào	by no means
οὖν	οὖν	tiểu từ	vậy thì; do đó; thật sự	then, therefore
πέμπω	πέμπω, πέμψω, ἔπεμψα, πέπομψα, πέπεμμαι, ἐπέμφθην	động từ	gửi, phái đi	send
ποῦ	ποῦ	trạng từ	ở đâu?	where?
σύνειμι	σύνειμι (Impf. συνῆν), συνέσομαι, συνεγενόμην	động từ	ở cùng với (+Tặng)	be together with
τίκτω	τίκτω, τέξω / τέξομαι, ἔτεκον, τέτοκα, τέτεγμαι, ἐτέχθην	động từ	sinh, đẻ, sinh ra	give birth to, beget
χαίρω	χαίρω, χαιρήσω, κεχάρηκα, κεχάρημαι, ἐχάρην	động từ	vui mừng (χαῖρε: xin chào!)	rejoice; greetings!
ἀρετή	ἀρετή ἀρετῆς, ἡ	danh từ	đức hạnh, sự hoàn thiện; lòng dũng cảm; năng lực	virtue, excellence
ἀριθμός	ἀριθμός ἀριθμοῦ, ὁ	danh từ	con số, số lượng	number
δίκαιος	δίκαιος, δικαία, δίκαιον	tính từ	công bằng, chính trực, đúng đắn	just, right
δικαιοσύνη	δικαιοσύνη δικαιοσύνης, ἡ	danh từ	sự công bằng, công lý	justice
εἰ	εἰ	liên từ	nếu, giả sử; liệu (câu hỏi gián tiếp)	if; whether
ἐπιστήμη	ἐπιστήμη ἐπιστήμης, ἡ	danh từ	tri thức, khoa học, sự hiểu biết	knowledge, science
ἰατρική	ἰατρική ἰατρικῆς, ἡ	danh từ	nghề y, y thuật	art of healing
ἰατρός	ἰατρός ἰατροῦ, ὁ	danh từ	thầy thuốc	physician
λόγος	λόγος λόγου, ὁ	danh từ	lời nói, bài nói; lý lẽ, luận cứ; câu chuyện	word, speech; reason, account
ὀρθός	ὀρθός, ὀρθή, ὀρθόν	tính từ	thẳng, đứng thẳng; đúng, chính đáng	straight; right, correct
περί	περί	giới từ	+Sở: về, quanh; +Đối: quanh, chống lại; liên quan đến	about, concerning (+gen); around (+acc)	περ
πολιτικός	πολιτικός, πολιτική, πολιτικόν	tính từ	thuộc thành bang; chính trị	political, civic
σοφία	σοφία σοφίας, ἡ	danh từ	sự khôn ngoan, trí tuệ; tri thức	wisdom
τε	τε	tiểu từ	và (τε... καί: cả... lẫn)	and (both... and)
φιλοσοφία	φιλοσοφία φιλοσοφίας, ἡ	danh từ	triết học	philosophy
φιλόσοφος	φιλόσοφος φιλοσόφου, ὁ	danh từ	nhà triết học (adj.: thuộc triết học)	philosopher
χρόνος	χρόνος χρόνου, ὁ	danh từ	thời gian	time
ψυχή	ψυχή ψυχῆς, ἡ	danh từ	tâm hồn; sự sống	soul, life
ἀπό	ἀπό	giới từ	+Sở: từ, kể từ; do	from, away from (+gen)	ἀπ
ἄστρον	ἄστρον ἄστρου, τό	danh từ	ngôi sao	star
βιβλίον (βίβλος)	βιβλίον βιβλίου, τό (βίβλος βίβλου, ἡ)	danh từ	quyển sách	book
γῆ (γαῖα)	γῆ γῆς, ἡ (γαῖα γαίης, ἡ)	danh từ	đất; vùng đất, xứ	earth, land
πίπτω	πίπτω, πεσοῦμαι, ἔπεσον, πέπτωκα	động từ	ngã, rơi xuống	fall
ὑπό	ὑπό	giới từ	+Sở: dưới; bởi (câu bị động), do; +Tặng: dưới (chỗ nào); +Đối: xuống dưới	under (+dat); by (+gen, passive)	ὑπ
ἀνδρεία	ἀνδρεία ἀνδρείας, ἡ	danh từ	lòng dũng cảm	courage, bravery
δῆμος	δῆμος δήμου, ὁ	danh từ	cộng đồng dân cư; dân chúng	community, the people
διό	διό	trạng từ	vì thế, do đó	therefore
δόξα	δόξα δόξης, ἡ	danh từ	ý kiến; danh vọng; vẻ ngoài	opinion; reputation; appearance
ἐγώ	ἐγώ, ἐμοῦ	đại từ	tôi, ta	I	ἐγὼ ἐμοῦ ἐμοὶ ἐμὲ με
ἐλπίζω	ἐλπίζω	động từ	hy vọng, trông mong	hope, expect
ἐπί	ἐπί	giới từ	+Sở: trên, vào thời của; +Tặng: tại, dựa trên, nhằm; +Đối: đến, chống	on, at, over; against (+acc)	ἐπ
εὐδαιμονία	εὐδαιμονία εὐδαιμονίας, ἡ	danh từ	hạnh phúc, phúc lành; sự thịnh vượng	happiness, prosperity
ἥκω	ἥκω, ἥξω, Perf. ἥκα	động từ	đến, đã đến, có mặt	come, be present
ἡμεῖς	ἡμεῖς, ἡμῶν, ἡμῖν, ἡμᾶς	đại từ	chúng ta, chúng tôi	we	ἡμεῖς ἡμῶν ἡμῖν ἡμᾶς
κατασκευάζω	κατασκευάζω, κατασκευάσω, κατεσκεύασα	động từ	dựng lên, thiết lập; chuẩn bị	construct, establish; prepare
μή	μή	trạng từ	không (phủ định điều hình dung, mong muốn); để không	not (with subjunctive etc.)
νῦν, νυνί	νῦν, νυνί	trạng từ	bây giờ, giờ đây	now
ὀλίγος	ὀλίγος, ὀλίγη, ὀλίγον	tính từ	ít, nhỏ bé	little, few
παιδεία	παιδεία παιδείας, ἡ	danh từ	sự giáo dục, rèn luyện	education, upbringing
παιδεύω	παιδεύω	động từ	giáo dục, rèn luyện	educate, train
παρασκευάζω	παρασκευάζω, παρασκευάσω, παρεσκεύασα	động từ	chuẩn bị; cung cấp, kiếm cho	prepare, provide
πολύς	πολύς, πολλή, πολύ	đại từ/tính từ	nhiều, đông	much, many	πολὺς πολλὴ πολλοῦ πολλῆς πολλῷ πολλῇ πολὺν πολλὴν πολλοὶ πολλαὶ πολλοὺς πολλὰς πολλὰ πολλῶν πολλοῖς πολλαῖς
πρός	πρός	giới từ	+Sở: từ phía; +Tặng: thêm vào, bên cạnh; +Đối: đến, chống, đối với	toward, to (+acc); at (+dat)
σύ	σύ, σοῦ, σοί, σέ	đại từ	anh, chị, ngươi (đại từ ngôi 2)	you (sg.)	σὺ σοῦ σού σοὶ σοι σὲ σε
τύχη	τύχη τύχης, ἡ	danh từ	may rủi, số phận; vận may	fortune, chance
ἀρχή	ἀρχή ἀρχῆς, ἡ	danh từ	khởi đầu; quyền thống trị, triều đại; chức vụ	beginning; rule, office
βίος	βίος βίου, ὁ	danh từ	đời sống; sinh kế	life, livelihood
δή	δή	tiểu từ	vậy, thật vậy (nhấn mạnh)	indeed, in fact
ἡδονή	ἡδονή ἡδονῆς, ἡ	danh từ	niềm vui thú	pleasure
ἴσως	ἴσως	trạng từ	có lẽ, chắc là	perhaps, probably
οἶνος	οἶνος οἴνου, ὁ	danh từ	rượu	wine
σοφός	σοφός, σοφή, σοφόν	tính từ	khôn ngoan, thông thái; tài giỏi	wise, skilled
ὑμεῖς	ὑμεῖς, ὑμῶν, ὑμῖν, ὑμᾶς	đại từ	các anh, các chị, các ngươi (ngôi 2 số nhiều)	you (pl.)	ὑμεῖς ὑμῶν ὑμῖν ὑμᾶς
φέρω	φέρω, οἴσω, ἤνεγκον, ἐνήνοχα, ἐνήνεγμαι, ἠνέχθην	động từ	mang, đem; chịu đựng; (φέρε: thôi nào, nào!)	bear, bring
ἀναγκάζω	ἀναγκάζω	động từ	ép buộc	force, compel
αὐτός	αὐτός, αὐτή, αὐτό	đại từ/tính từ	chính (người/việc) đó; (ὁ αὐτός: cùng một); đại từ ngôi 3	self; the same; he/she/it	αὐτὸς αὐτὴ αὐτὸ αὐτοῦ αὐτῆς αὐτῷ αὐτῇ αὐτὸν αὐτὴν αὐτοὶ αὐταὶ αὐτῶν αὐτοῖς αὐταῖς αὐτοὺς αὐτὰς αὐτὰ
βιάζομαι	βιάζομαι	động từ	ép buộc, áp đặt; bạo lực	use force, compel
βλάπτω	βλάπτω, βλάψω, ἔβλαψα, βέβλαφα, βέβλαμαι, ἐβλάβην	động từ	gây hại, làm tổn hại	harm, damage
γίγνομαι	γίγνομαι, γενήσομαι, ἐγενόμην, γέγονα, ἐγενήθην	động từ	trở thành; phát sinh, ra đời; xảy ra	become; happen, occur
ἔξεστι	ἔξεστι, ἐξέσται, Impf. ἐξῆν	động từ bất định nhân xưng	được phép, có thể	it is permitted, one may
κοινός	κοινός, κοινή, κοινόν	tính từ	chung, thuộc về cộng đồng (κοινῇ: công cộng)	common, public
κωλύω	κωλύω, κωλύσω, ἐκώλυσα, κεκώλυκα, κεκώλυμαι, ἐκωλύθην	động từ	cản trở, ngăn cản	hinder, prevent
μόνος	μόνος, μόνη, μόνον	tính từ	duy nhất, chỉ một (οὐ μόνον... ἀλλὰ καὶ: không những... mà còn)	only, alone
οὔτε...οὔτε	οὔτε...οὔτε	liên từ	không... cũng không	neither... nor
πράττω	πράττω, πράξω, ἔπραξα, πέπραχα, πέπραγμαι, ἐπράχθην	động từ	làm, hành động (εὖ πράττω: làm tốt, ổn)	do, fare
τις	τις, τι	đại từ	(ai/cái) nào đó, một (người/việc) nào đó	someone, something; a certain	τινός τινί τινά τι τινές τινάς
φαῦλος	φαῦλος, φαῦλον	tính từ	tệ, kém cỏi	bad, paltry
φιλία	φιλία φιλίας, ἡ	danh từ	tình bạn, tình thân	friendship, affection
ἀποθνήσκω	ἀποθνήσκω, ἀποθανοῦμαι, ἀπέθανον, τέθνηκα	động từ	chết (hoàn thành: đã chết, đã khuất)	die; (perf.) be dead
βούλομαι	βούλομαι, βουλήσομαι, βεβούλημαι, ἐβουλήθην	động từ	muốn, ước muốn	want, wish
διά	διά	giới từ	+Sở: qua, bằng; +Đối: vì, do	through (+gen); because of (+acc)	δι
δύναμαι	δύναμαι, δυνήσομαι, ἐδυνήθην, δεδύνημαι	động từ	có thể, có khả năng; nghĩa là	be able, can
ἐκεῖνος	ἐκεῖνος, ἐκείνη, ἐκεῖνο	đại từ	người/việc kia	that, that one	ἐκεῖνος ἐκείνη ἐκεῖνο ἐκείνου ἐκείνης ἐκείνῳ ἐκείνῃ ἐκεῖνον ἐκείνην ἐκεῖνοι ἐκεῖναι ἐκείνων ἐκείνοις ἐκείναις ἐκείνους ἐκείνας ἐκεῖνα
ἐπιθυμέω	ἐπιθυμέω	động từ	khao khát, mong muốn	desire, long for
εὔχομαι	εὔχομαι	động từ	cầu nguyện; khấn nguyện	pray, vow
μανθάνω	μανθάνω, μαθήσομαι, ἔμαθον, μεμάθηκα	động từ	học; hiểu, nắm được	learn; understand
οὐδείς	οὐδείς, οὐδεμία, οὐδέν	đại từ	không ai, chẳng ai, không gì	nobody, no one, nothing	οὐδεὶς οὐδεμία οὐδὲν οὐδενὸς οὐδεμιᾶς οὐδενὶ οὐδεμίᾳ οὐδένα οὐδεμίαν
φοβέομαι	φοβέομαι, φοβήσομαι, ἐφοβήθην, πεφόβημαι	động từ	sợ, khiếp sợ	fear, be afraid
ἀγαθός	ἀγαθός, ἀγαθή, ἀγαθόν	tính từ	tốt, tốt lành (so sánh: ἀμείνων/κρείττων/βελτίων)	good, noble
ἀποκρίνομαι	ἀποκρίνομαι, ἀποκρινοῦμαι, ἀπεκρινάμην, ἀπεκρίθην	động từ	đáp, trả lời	answer, reply
γενναῖος	γενναῖος, γενναία, γενναῖον	tính từ	cao quý; tài giỏi; thật thà	noble, excellent
ἐπεί	ἐπεί	liên từ	khi, sau khi; vì, bởi vì	when, after; since, because
ἐπειδή	ἐπειδή	liên từ	khi, sau khi; bởi vì	when, after; since
ἡμέτερος	ἡμέτερος, ἡμέτερα, ἡμέτερον	đại từ sở hữu	của chúng ta, của chúng tôi	our
θυγάτηρ	θυγάτηρ θυγατρός, ἡ	danh từ	con gái	daughter
κακός	κακός, κακή, κακόν	tính từ	xấu, tệ, ác (so sánh: κακίων/χείρων)	bad, evil
καλός	καλός, καλή, καλόν	tính từ	đẹp, tốt đẹp	beautiful, fine, good
κίνδυνος	κίνδυνος κινδύνου, ὁ	danh từ	sự nguy hiểm, cảnh hiểm	danger, risk
νέμω (διανέμω)	νέμω (διανέμω), νεμῶ, ἔνειμα, νενέμηκα, νενέμημαι, ἐνεμήθην	động từ	phân phát; chăn thả; nắm giữ; M.: chiếm, sử dụng	distribute; pasture; possess
ξένος	ξένος ξένου, ὁ	danh từ	người lạ, khách; bạn đường; lính đánh thuê	stranger, guest, friend; mercenary
ὅδε	ὅδε, ἥδε, τόδε	đại từ	người/việc này, sau đây	this (here)	ὅδε ἥδε τόδε τοῦδε τῆσδε τῷδε τῇδε τόδε τήνδε οἵδε αἵδε τούτωνδε τοῖσδε ταῖσδε τούσδε τάσδε τάδε
ὀνομάζω	ὀνομάζω, ὀνομάσω, ὠνόμασα, ὠνόμακα, ὠνόμασμαι, ὠνομάσθην	động từ	đặt tên, gọi tên	name, call
που	που	trạng từ	đâu đó, có lẽ	partic somewhere, I suppose
σῴζω (διασῴζω)	σῴζω, σώσω, ἔσωσα, σέσωκα, ἐσώθην (διασῴζω)	động từ	giải cứu; giữ gìn	save, preserve
φίλος	φίλος, φίλη, φίλον	tính từ/danh từ	thân thương; bạn	friend (adj.: dear)
χρή	χρή (Impf. χρῆν, Inf. χρῆναι)	động từ bất định nhân xưng	cần phải, tất phải	it is necessary, one must
βουλεύω	βουλεύω, βουλεύσω, ἐβούλευσα, βεβούλευκα, βεβούλευμαι, ἐβουλεύθην	động từ	hỏi ý kiến; bàn tính; nghị quyết	consult; deliberate; resolve
γε	γε	tiểu từ	thì phải, ít nhất (nhấn từ trước)	indeed, at least
δαίμων	δαίμων δαίμονος, ὁ/ἡ	danh từ	vị thần; ý trời, số trời	deity, divine power
ἕνεκα	ἕνεκα	giới từ	+Sở: vì, vì lợi ích của	for the sake of (+gen)
ἔτι	ἔτι	trạng từ	còn nữa, vẫn	still, yet
ἤδη	ἤδη	trạng từ	đã, rồi đó	already, now
μακρός	μακρός, μακρά, μακρόν	tính từ	dài, xa	long, tall
μέντοι	μέντοι	tiểu từ	dĩ nhiên, tuy nhiên	however, to be sure
νέος	νέος, νέα, νέον	tính từ	mới; trẻ	new; young
οἰκία	οἰκία οἰκίας, ἡ	danh từ	ngôi nhà, toà nhà	house, building
οἶκος	οἶκος οἴκου, ὁ	danh từ	nhà; gia đình	house; family, household
οἴομαι / οἶμαι	οἴομαι (Impf. ᾠμην), οἰήσομαι, ᾠήθην	động từ	cho rằng, tưởng	believe, think
οὐκέτι	οὐκέτι	trạng từ	không còn nữa	no longer, no more
πατήρ	πατήρ πατρός, ὁ	danh từ	cha	father
πείθομαι	πείθομαι, πείσομαι, ἐπείσθην, πέπεισμαι	động từ	vâng lời, tuân theo	obey
πειθώ	πειθώ πειθοῦς, ἡ	danh từ	sự thuyết phục; tài thuyết phục	persuasion
φαίνομαι	φαίνομαι, φανοῦμαι / φανήσομαι, ἐφάνην, πέφηνα	động từ	xuất hiện; có vẻ như, dường như	appear, seem
φαίνω	φαίνω, φανῶ, ἔφηνα, πέφηνα, πέφασμαι, ἐφάνην	động từ	cho thấy, biểu lộ; soi sáng	show, reveal; bring to light
χώρα	χώρα χώρας, ἡ	danh từ	đất đai, vùng; nơi	country, region, place
ἡσυχία	ἡσυχία ἡσυχίας, ἡ	danh từ	sự êm ải, thanh bình; bình tĩnh	peace, quiet
μᾶλλον	μᾶλλον	trạng từ	hơn, thà... hơn	more, rather
ὅλος	ὅλος, ὅλη, ὅλον	tính từ	toàn vẹn, cả thảy (καθ’ ὅλου: nhìn chung)	whole, entire
ὀργίζομαι	ὀργίζομαι	động từ	nổi giận, giận dữ	be angry
πρῶτος	πρῶτος, πρώτη, πρῶτον	tính từ	thứ nhất, đầu tiên (πρῶτον: trước hết)	first
πυνθάνομαι	πυνθάνομαι, πεύσομαι, ἐπυθόμην, πέπυσμαι	động từ	hỏi han, dọ hỏi, nghe ngóng	inquire, learn
σχεδόν	σχεδόν	trạng từ	gần như, ước chừng	almost, approximately
τρέπω	τρέπω, τρέψω, ἔτρεψα, τέτροφα, ἐτράπην	động từ	quay, xoay; đánh bật lui	turn; put to flight
ἀλλήλων	ἀλλήλων, ἀλλήλοις, ἀλλήλους	đại từ	lẫn nhau, với nhau	each other, one another	ἀλλήλων ἀλλήλοις ἀλλήλους ἀλλήλας
ἅμα	ἅμα	trạng từ	cùng lúc; cùng với (+Tặng)	at the same time; together with
αὖ, αὖθις	αὖ, αὖθις	trạng từ	lại, một lần nữa	again, once more
καλέω	καλέω, καλῶ, ἐκάλεσα, κέκληκα, κέκλημαι, ἐκλήθην	động từ	gọi; đặt tên (ὁ καλούμενος: gọi là)	call; name
λύπη	λύπη λύπης, ἡ	danh từ	nỗi đau, nỗi buồn	pain, grief
μιμνήσκω	μιμνήσκω	động từ	nhắc ai nhớ; M.: tự nhớ tới	remind; remember
ὁπότε	ὁπότε	liên từ	khi, mỗi khi	when
παύομαι	παύομαι, παύσομαι, ἐπαυσάμην, πέπαυμαι	động từ	ngừng, thôi (ngừng việc gì +Sở; ngừng làm gì: +phân từ)	cease, stop
παύω	παύω, παύσω, ἔπαυσα, πέπαυκα, πέπαυμαι, ἐπαύθην	động từ	chấm dứt, làm cho ngừng	stop, put an end to
πότε	πότε	trạng từ	khi nào?	when?
σῶμα	σῶμα σώματος, τό	danh từ	thân thể	body
τότε	τότε	trạng từ	bấy giờ, bấy chừ, rồi thì	then, at that time
ὥρα	ὥρα ὥρας, ἡ	danh từ	mùa; thời điểm; giờ giấc	season; hour, right time
ἐσθίω	ἐσθίω	động từ	ăn	eat
ἰσχυρός	ἰσχυρός, ἰσχυρά, ἰσχυρόν	tính từ	mạnh mẽ, hùng mạnh	strong, mighty
κύριος	κύριος κυρίου, ὁ	danh từ	ông chủ; vị chúa	lord, master
μάλιστα	μάλιστα	trạng từ	nhất là, đặc biệt	especially, most of all
νίκη	νίκη νίκης, ἡ	danh từ	chiến thắng, thắng lợi	victory
ὅς	ὅς, ἥ, ὅ	đại từ quan hệ	người mà, cái mà (đại từ quan hệ); (ὅς ἄν: bất kỳ ai)	who, which (relative)	ὃς ἥ ὅ οὗ ἧς ᾧ ᾗ ὃν ἥν οἵ αἵ ὅ οἵς αἷς οὓς ἃς ἅ
παιδίον	παιδίον παιδίου, τό	danh từ	đứa trẻ	child (small)
παίζω	παίζω	động từ	đùa, chơi đùa	play, jest
τρέφω	τρέφω, θρέψω, ἔθρεψα, τέθραμαι, ἐτράφην	động từ	nuôi dưỡng, nuôi dạy	nourish, bring up
χρεία	χρεία χρείας, ἡ	danh từ	nhu cầu, sự cần; công dụng, ích	need, want; use
ἀπαλλάττω	ἀπαλλάττω, ἀπαλλάξω, ἀπήλλαξα, ἀπήλλαχα, ἀπήλλαγμαι, ἀπηλλάγην	động từ	tách khỏi, giải thoát (khỏi việc gì +Sở)	remove, set free from
γεωργός	γεωργός γεωργοῦ, ὁ	danh từ	người làm ruộng	farmer
ἥδομαι	ἥδομαι	động từ	vui sướng, khoan khoái	be pleased, enjoy
θύρα	θύρα θύρας, ἡ	danh từ	cửa, cổng	door, gate
λύω	λύω, λύσω, ἔλυσα, λέλυκα, λέλυμαι, ἐλύθην	động từ	cởi, tháo; giải; tan rã; giải tán, hủy diệt	loosen, release; dissolve, destroy
πίνω	πίνω, πίομαι, ἔπιον, πέπωκα, πέπομαι, ἐπόθην	động từ	uống	drink
πρό	πρό	giới từ	+Sở: trước, trước đây	before (+gen)
στρέφω	στρέφω, στρέψω, ἔστρεψα, ἔστροφα, ἔστραμμαι, ἐστράφην	động từ	xoay, quay, đảo	turn, twist
φιλέω	φιλέω	động từ	yêu quý, quý mến	love, be fond of
ἀδικία	ἀδικία ἀδικίας, ἡ	danh từ	sự bất công, điều sai trái	injustice, wrong
δυνατός	δυνατός, δυνατή, δυνατόν	tính từ	có khả năng; quyền thế; khả dĩ	able, powerful; possible
ἐχθρός	ἐχθρός, ἐχθρά, ἐχθρόν	tính từ/danh từ	gian ác, thù địch (ὁ ἐχθρός: kẻ thù)	hostile; enemy
θεῖος	θεῖος, θεία, θεῖον	tính từ	thuộc về thần linh, thiêng liêng (τὰ θεῖα: giới thần linh)	divine
ἱερός	ἱερός, ἱερά, ἱερόν	tính từ	thiêng, dâng cho thần	holy, sacred
λαμβάνω	λαμβάνω, λήψομαι, ἔλαβον, εἴληφα, εἴλημμαι, ἐλήφθην	động từ	lấy, cầm, nhận, chiếm	take, receive, get
πιστός	πιστός, πιστή, πιστόν	tính từ	trung thành, đáng tin	trustworthy, faithful, believing
σέβομαι	σέβομαι	động từ	tôn thờ, kính sợ	worship, revere
σύμμαχος	σύμμαχος, ον	danh từ/tính từ	đồng minh (cùng với +Tặng)	ally (adj.: allied)
ὥστε	ὥστε	liên từ	nên, đến nỗi; do đó	so that; therefore
ὠφέλιμος	ὠφέλιμος, ον	tính từ	có ích, bổ ích	useful, beneficial
βέβαιος	βέβαιος, βεβαία, βέβαιον	tính từ	vững chắc, chắc chắn; tin cậy	firm, steady, reliable
δειλός	δειλός, δειλή, δειλόν	tính từ	hèn nhát; tệ hại	cowardly; wretched
ἡμέρα	ἡμέρα ἡμέρας, ἡ	danh từ	ngày, ban ngày	day
καθεύδω	καθεύδω	động từ	ngủ, say giấc	sleep
μήτηρ	μήτηρ μητρός, ἡ	danh từ	mẹ	mother
τέκνον	τέκνον τέκνου, τό	danh từ	đứa con	child, son/daughter
χωρίς	χωρίς	giới từ	+Sở: tách khỏi, không	cut off from, without (+gen)
δέομαι	δέομαι, δεήσομαι, ἐδεήθην	động từ	cần đến (+Sở); cầu xin (ai +Sở, việc gì +Đối)	need; beseech
ἐναντίος	ἐναντίος, ἐναντία, ἐναντίον	tính từ	đối lập, ngược (ὁ ἐναντίος: đối thủ)	opposite, opposed
ἔργον	ἔργον ἔργου, τό	danh từ	công việc, việc làm; việc đã làm	work, deed
οἰκεῖος	οἰκεῖος, οἰκεία, οἰκεῖον	tính từ	thuộc nhà; ruột thịt; thân thuộc	belonging to the house; kindred
πάνυ	πάνυ	trạng từ	rất, hết sức	very, exceedingly
ποῖος	ποῖος, ποία, ποῖον	đại từ	như thế nào? loại nào?	what kind of?
σκοπέω (ἐπισκοπέω / σκέπτομαι)	σκοπέω (ἐπισκοπέω / σκέπτομαι), σκέψομαι, ἐσκεψάμην, ἔσκεμμαι	động từ	nhìn xét, suy đoán, cân nhắc	look at, examine, consider
φύλαξ	φύλαξ φύλακος, ὁ	danh từ	người canh gác	guard, watchman
χαλεπός	χαλεπός, χαλεπή, χαλεπόν	tính từ	khó khăn, gay go; khó chịu	hard, difficult, troublesome
ἄφρων	ἄφρων, ἄφρον	tính từ	thiếu suy xét, dại dột	foolish, senseless
δήπου	δήπου	trạng từ	chắc là, phải chăng	then surely, I suppose
εὐδαίμων	εὐδαίμων, ον	tính từ	hạnh phúc, may mắn; khá giả	happy, blessed; prosperous
ζῷον	ζῷον ζῴου, τό	danh từ	sinh vật; con vật	living being, animal
ἱκανός	ἱκανός, ἱκανή, ἱκανόν	tính từ	đủ dùng; xứng đáng, thích hợp	sufficient; capable, fit
σίτος (σιτίον)	σίτος σίτου, ὁ (σιτίον σιτίου, τό)	danh từ	lúa, ngũ cốc; đồ ăn	grain, food
σωφροσύνη	σωφροσύνη σωφροσύνης, ἡ	danh từ	sự chừng mực, tự chủ	moderation, self-control
σώφρων	σώφρων, σώφρον	tính từ	chừng mực, sáng suốt	moderate, sensible
χείρ	χείρ χειρός, ἡ	danh từ	bàn tay	hand
ἀθάνατος	ἀθάνατος, ον	tính từ	bất tử	immortal
ἀνθρώπειος / ἀνθρώπινος	ἀνθρώπειος, α, ον / ἀνθρώπινος, η, ον	tính từ	thuộc loài người	human
ἀποφαίνω / ἀποφαίνομαι	ἀποφαίνομαι, ἀποφανοῦμαι, ἀπεφηνάμην, ἀποπέφασμαι	động từ	cho thấy, trình bày; M.: phát biểu	show, demonstrate; declare
ἄρχομαι	ἄρχομαι, ἄρξομαι, ἠρξάμην	động từ	bắt đầu (việc gì +Sở; làm gì: +nguyên mẫu)	begin
ἄρχω	ἄρχω, ἄρξω, ἦρξα, ἦργμαι, ἦρχθην	động từ	cầm quyền, thống trị (ai/cái gì +Sở); mở đầu	rule, govern (+gen)
γνώμη	γνώμη γνώμης, ἡ	danh từ	trí tuệ, sáng suốt; quan điểm, ý kiến	mind, judgment; opinion
δοκέω	δοκέω, δόξω, ἔδοξα	động từ	dường như; cho rằng (δοκεῖ μοι: tôi thấy phải, tôi quyết)	seem; think, resolve
ἐάω	ἐάω, ἐάσω, εἶον / εἴασα	động từ	cho phép, để cho; để mặc, buông tha; thôi, ngừng	allow, let; leave alone; cease
ἕτερος	ἕτερος, ἑτέρα, ἕτερον	đại từ/tính từ	(ai/cái) khác (trong hai)	the other (of two), different	ἕτερος ἑτέρα ἕτερον ἑτέρου ἑτέρας ἑτέρῳ ἑτέρᾳ ἕτερον ἑτέραν
κύκλος	κύκλος κύκλου, ὁ	danh từ	vòng tròn	circle
μάθημα	μάθημα μαθήματος, τό	danh từ	môn học, điều học được; tri thức	lesson, subject of learning
πάθος	πάθος πάθους, τό (πάθημα πάθηματος, τό)	danh từ	trải nghiệm; nỗi đau đớn; xúc động	experience; suffering; emotion
πρᾶγμα	πρᾶγμα πράγματος, τό	danh từ	hành vi, sự việc; việc, tình thế	deed, fact; matter, affair
στρατός	στρατός στρατοῦ, ὁ	danh từ	quân đội, đạo quân	army, host
τοίοσδε	τοίοσδε, τοιάδε, τοιόνδε	tính từ	như thế, thuộc loại đó	such (as follows)
ἄξιος	ἄξιος, ἀξία, ἄξιον	tính từ	xứng đáng, đáng giá; thích đáng	worthy, deserving; fitting
γράμμα	γράμμα γράμματος, τό	danh từ	chữ cái; nét chữ (τὰ γράμματα: văn chương, học vấn)	letter (of alphabet); learning
διαλέγομαι	διαλέγομαι, διαλέξομαι, διελέχθην, διελέγμαι	động từ	đối thoại, trò chuyện với (ai +Tặng)	talk, converse with
εἰρήνη	εἰρήνη εἰρήνης, ἡ	danh từ	hòa bình	peace
ἐπιστολή	ἐπιστολή ἐπιστολῆς, ἡ	danh từ	bức thư	letter, epistle
νόμος	νόμος νόμου, ὁ	danh từ	luật pháp; tục lệ, phép	law; custom
πόλεμος	πόλεμος πολέμου, ὁ	danh từ	chiến tranh	war
ῥᾴδιος	ῥᾴδιος, ῥᾱδία, ῥᾴδιον	tính từ	dễ dàng, nhẹ nhàng (so sánh ῥᾶον, cao cấp ῥᾱστός)	easy
χρήσιμος / χρηστός	χρήσιμος, η, ον / χρηστός, ή, όν	tính từ	có ích; tốt, lành	useful; good, honest
ἀποκτείνω (κτείνω)	ἀποκτείνω (κτείνω), ἀποκτενῶ, ἀπέκτεινα, ἀπέκτονα	động từ	giết, hạ	kill, slay
ἄριστος	ἄριστος, ἀρίστη, ἄριστον	tính từ	tốt nhất, giỏi nhất (chuỗi so sánh của ἀγαθός)	best, most excellent
δῶρον	δῶρον δώρου, τό	danh từ	món quà	gift, present
ἔνθα	ἔνθα	trạng từ	ở đó, đó; nơi mà	there, where
ἔνιοι	ἔνιοι, αἱ, α	đại từ	một số, vài (người/việc)	some, a few
ἔπειτα	ἔπειτα	trạng từ	rồi, sau đó; tiếp nữa	then, next
ἔρχομαι	ἔρχομαι, εἶμι, ἦλθον, ἐλήλυθα	động từ	đi, đến, đi tới	come, go
ἡλικία	ἡλικία ἡλικίας, ἡ	danh từ	độ tuổi; tuổi trưởng thành	age, maturity
θεάομαι	θεάομαι, θεάσομαι, ἐθεασάμην, τεθέαμαι	động từ	ngắm nhìn, xem; chứng kiến	look at, behold; watch
καίπερ	καίπερ	tiểu từ	+danh động từ: tuy, mặc dù	although (with participle)
ὁμολογέω	ὁμολογέω, ὁμολογήσω, ὡμολόγησα, ὡμολόγηκα, ὡμολόγημαι, ὡμολογήθην	động từ	đồng ý (với ai +Tặng); công nhận; hứa	agree with; admit; promise
ὅτε	ὅτε	liên từ	khi, lúc	that when
παῖς	παῖς παιδός, ὁ/ἡ	danh từ	đứa trẻ; đứa trẻ em, tôi tớ	child; slave
πᾶς	πᾶς, πᾶσα, πᾶν	tính từ/đại từ	tất cả, mọi, toàn thể	all, every, whole	πᾶς πᾶσα πᾶν παντὸς πάσης παντὶ πάσᾳ πάντα πάντες πᾶσαι πάντων πᾶσι πάσαις πάντας πάσας
πρέπει	πρέπει	động từ bất định nhân xưng	là điều đứng đắn, hợp lẽ	it is fitting, proper
τιμάω	τιμάω, τιμήσω, ἐτίμησα, τετίμηκα, τετίμημαι, ἐτιμήθην	động từ	tôn trọng, kính trọng	honour, value
ἀγών	ἀγών ἀγῶνος, ὁ	danh từ	cuộc thi đấu; cuộc đấu; phiên toà	contest, struggle; trial
ᾄδω	ᾄδω	động từ	hát, ngâm ca	sing
αἰσχρός	αἰσχρός, αἰσχρά, αἰσχρόν	tính từ	xấu xí; ô nhục, đê tiện	ugly; shameful, base
ἀσκέω	ἀσκέω	động từ	luyện tập; theo đuổi	practise, exercise
γάμος	γάμος γάμου, ὁ	danh từ	đám cưới; hôn nhân	wedding, marriage
γυμνός	γυμνός, γυμνή, γυμνόν	tính từ	trần trụi; tay không, không vũ khí	naked; unarmed
ἐθίζω	ἐθίζω	động từ	làm cho quen, rèn quen	accustom, train
κόρη	κόρη κόρης, ἡ	danh từ	cô gái, con gái	girl, maiden, daughter
ὥσπερ	ὥσπερ	liên từ	như thể, đúng như	as, just as
ἄνευ	ἄνευ	giới từ	+Sở: không có, thiếu	without (+gen)
ἀπορία	ἀπορία ἀπορίας, ἡ	danh từ	sự bí lối, lúng túng; sự thiếu hụt	perplexity; want, shortage
ἐπίσταμαι	ἐπίσταμαι (Impf. ἠπιστάμην)	động từ	hiểu, biết, thông thạo	understand, know, be versed in
ἐπιτήδειος	ἐπιτήδειος, ον	tính từ	thích hợp, vừa dùng; thân thuộc (τὰ ἐπιτήδεια: lương thực)	suitable, fit; intimate; provisions
εὖ	εὖ	trạng từ	tốt, hay (so sánh ἄμεινον/βέλτιον, cao cấp ἄριστα)	well
ὁδός	ὁδός ὁδοῦ, ἡ	danh từ	con đường; cuộc hành trình	road, way; journey
αἴρω	αἴρω, ἀρῶ, ἦρα, ἦρκα, ἦρμαι, ἤρθην	động từ	nhấc lên, dựng lên; nhổ neo, khởi hành	lift, raise; set sail
ἀμφότεροι	ἀμφότεροι, ἀμφότεραι, ἀμφότερα	số từ/đại từ	cả hai	both	ἀμφοτέρων ἀμφοτέροις ἀμφοτέρας ἀμφοτέραις
ἀνά	ἀνά	giới từ	+Đối: lên trên; suốt trong (thời gian)	up, throughout (+acc)
διαφέρω	διαφέρω, διοίσω, διήνεγκον, διενήνοχα, διενήνεγμαι	động từ	khác nhau; (bất định nhân xưng) διαφέρει: có khác biệt; M.: bất đồng, tranh cãi	differ; be worth
ἔθος	ἔθος ἔθους, τό	danh từ	tục lệ, thói quen	custom, habit
ἱστορία	ἱστορία ἱστορίας, ἡ	danh từ	sự khảo cứu; sử học; bộ sử	inquiry; history
κάθημαι	κάθημαι, καθήσομαι (Impf. ἐκαθήμην)	động từ	ngồi	sit
κατά	κατά	giới từ	+Sở: từ trên xuống, chống lại; +Đối: theo, khắp, trong (κατὰ φύσιν: theo tự nhiên)	down from (+gen); according to, along (+acc)	κατ
μέσος	μέσος, μέση, μέσον	tính từ	ở giữa, giữa	middle, in the midst
μικρός (σμικρός)	μικρός, μικρά, μικρόν (σμικρός)	tính từ	nhỏ, ít (so sánh ἐλάττων, cao cấp ἐλάχιστος)	small, little
ξύλον	ξύλον ξύλου, τό	danh từ	gỗ; khúc gỗ, cây gậy	wood; club
πλοῦτος	πλοῦτος πλούτου, ὁ	danh từ	sự giàu có, của cải	wealth
στοά	στοά στοᾶς, ἡ	danh từ	hành lang có cột	stoa, colonnade
τέμνω	τέμνω, τεμῶ, ἔτεμον, τέτμηκα, τέτμημαι, ἐτμήθην	động từ	cắt, chặt; tàn phá	cut
τίθημι	τίθημι, θήσω, ἔθηκα, τέθηκα, τέθειμαι, ἐτέθην	động từ	đặt, để; làm cho thành (kèm 2 đối cách)	put, place; make
φημί	φημί (Inf. φάναι), φήσω, ἔφησα / ἔφην	động từ	nói, khẳng định (οὐ φημί: phủ nhận rằng)	say, assert
βοῦς	βοῦς βοός, ὁ/ἡ	danh từ	con bò	ox, cow
ἔθνος	ἔθνος ἔθνους, τό	danh từ	dân tộc, tộc người	nation, people
θαυμάζω	θαυμάζω, θαυμάσομαι, ἐθαύμασα, τεθαύμακα, τεθαυμάσμαι, ἐθαυμάσθην	động từ	kinh ngạc; thán phục	wonder at, admire
ὄνομα	ὄνομα ὀνόματος, τό	danh từ	tên; tiếng tăm	name
πορεύομαι	πορεύομαι, πορεύσομαι, ἐπορεύθην, πεπόρευμαι	động từ	đi, di chuyển; hành trình	go, march, travel
χάρις	χάρις χάριτος, ἡ	danh từ	ân huệ, sự biết ơn; duyên dáng (χάριν +Sở: vì)	grace, favour, thanks
ἀνάγκη	ἀνάγκη ἀνάγκης, ἡ	danh từ	sự tất yếu; sức ép	necessity, compulsion
ἀνήρ	ἀνήρ ἀνδρός, ὁ	danh từ	người đàn ông, đấng mày râu	man, male
γυνή	γυνή γυναικός, ἡ	danh từ	người đàn bà; vợ	woman, wife
δῆτα	δῆτα	tiểu từ	chắc là, thực sự (nhấn từ trước nó)	indeed, to be sure
εἴπερ	εἴπερ	liên từ	nếu thật, nếu quả	if indeed, if
εἴτε...εἴτε	εἴτε...εἴτε	liên từ	hoặc là... hoặc là; liệu... hay	whether... or
μέλλω	μέλλω, μελλήσω, ἐμέλλησα	động từ	sắp, định (làm gì +nguyên mẫu); chần chừ	be about to, intend; delay
οἰκέω	οἰκέω, οἰκήσω, ᾤκησα, ᾤκηκα, ᾤκήθην	động từ	cư ngụ, ở	inhabit, dwell
ὅμοιος	ὅμοιος, ὁμοία, ὅμοιον	tính từ	giống nhau, như (+Tặng)	like, similar, equal
οὐκοῦν	οὐκοῦν	tiểu từ	vậy thì, do đó (οὐκουν: vậy không)	therefore, then
πόλις	πόλις πόλεως, ἡ	danh từ	thành bang; nhà nước	city, city-state
πότερος	πότερος, ποτέρα, πότερον	đại từ	ai/cái nào (trong hai)? (πότερον... ἦ:... hay)	which (of two)?
πρέσβυς	πρέσβυς πρέσβεως, ὁ	danh từ	người già (πρεσβύτερος: người lớn tuổi hơn; οἱ πρέσβεις: đoàn sứ giả)	old man; ambassadors
πώς	πώς	trạng từ	bằng cách nào? (đứng sau: đôi khi)	how? (somehow)
τρόπος	τρόπος τρόπου, ὁ	danh từ	cách thức; tính cách (số nhiều)	way, manner; character
ὑγίεια	ὑγίεια ὑγιείας, ἡ	danh từ	sức khỏe	health
διώκω	διώκω, διώξομαι, ἐδίωξα, δεδίωχα, δεδίωγμαι, ἐδιώχθην	động từ	rượt đuổi; khởi kiện	pursue, chase; prosecute
καίω (κάω)	καίω (κάω)	động từ	đốt, thiêu	burn, kindle
μάχη	μάχη μάχης, ἡ	danh từ	trận đánh, cuộc chiến đấu	battle, fight
παλαιός	παλαιός, παλαιά, παλαιόν	tính từ	cũ, xưa	old, ancient
πῦρ	πῦρ πυρός, τό	danh từ	lửa	fire
φεύγω	φεύγω, φεύξομαι, ἔφυγον, πέφευγα	động từ	chạy trốn, lánh; bị khởi kiện; bị lưu đày	flee; be banished
ἀγνοέω	ἀγνοέω	động từ	không biết, không hay	not know, be ignorant of
ἐπαινέω	ἐπαινέω	động từ	khen ngợi	praise, commend
ἐπιστήμων	ἐπιστήμων, ον	tính từ	sáng suốt, am hiểu	wise, versed
ἠγέομαι	ἠγέομαι, ἠγήσομαι, ἠγήσάμην	động từ	dẫn dắt; coi là, cho rằng	lead; consider, esteem
πονηρός	πονηρός, πονηρά, πονηρόν	tính từ	xấu, tồi tệ, ác	bad, wicked
ἀναγκαῖος	ἀναγκαῖος, α, ον	tính từ	cần thiết, tất yếu	necessary
δαιμόνιος	δαιμόνιος, α, ον	tính từ	thuộc thần linh; lạ thường, khó lường	divine; strange, uncanny
διδάσκαλος	διδάσκαλος διδασκάλου, ὁ	danh từ	thầy giáo	teacher
εὑρίσκω	εὑρίσκω, εὑρήσω, ηὗρον / εὗρον, ηὕρηκα, εὕρημαι, εὑρέθην	động từ	tìm thấy, phát hiện	find, discover
ζητέω	ζητέω, ζητήσω, ἐζήτησα, ἐζήτηκα	động từ	tìm kiếm; khảo cứu; trông đợi	seek; inquire; miss
μαθητής	μαθητής μαθητοῦ, ὁ	danh từ	học trò, đệ tử	pupil, disciple
οἶδα	οἶδα, Fut. εἴσομαι, Impf. ἤδη / ἤδειν	động từ	biết (hoàn thành mang nghĩa hiện tại; Inf. εἰδέναι)	know (perfect with present meaning)	οἶδα οἶσθα οἶδε οἶδεν ἴσμεν ἴστε ἴσασι εἰδέναι εἰδὼς εἰδυῖα εἰδὸς ἴσθι ἴστε εἰδότα εἰδότας
πολλάκις	πολλάκις	trạng từ	thường xuyên, hay	often, frequently
πῶς	πῶς	trạng từ	như thế nào? làm sao?	how? how so?
σοφιστής	σοφιστής σοφιστοῦ, ὁ	danh từ	nhà hùng biện, nhà biện thuyết; bậc hiền triết	sophist
συγγίγνομαι	συγγίγνομαι	động từ	sum họp, gặp gỡ	come together, meet
φανερός	φανερός, φανερά, φανερόν	tính từ	rõ ràng, hiện rõ; nổi tiếng (φανερός εἰμι: công khai làm gì)	visible, manifest; famous
ἀργύριον (ἄργυρος)	ἀργύριον ἀργυρίου, τό (ἄργυρος ἀργύρου, ὁ)	danh từ	bạc; tiền	silver, money
ἀφικνέομαι	ἀφικνέομαι, ἀφίξομαι, ἀφικόμην, ἀφίγμαι	động từ	đến, tới	arrive
ἐπιχειρέω	ἐπιχειρέω	động từ	toan làm, thử; tấn công (ai/cái gì +Tặng)	attempt, undertake; attack
ἐρωτάω	ἐρωτάω, ἐρήσομαι, ἠρόμην	động từ	hỏi	ask, question
κτάομαι	κτάομαι, κτήσομαι, ἐκτησάμην, κέκτημαι	động từ	kiếm được, mua; sở hữu	acquire, possess
πειράομαι	πειράομαι, πειράσομαι, ἐπειράθην, πεπείραμαι	động từ	thử, toan thử	attempt, try
πολίτης	πολίτης πολίτου, ὁ	danh từ	công dân	citizen
ῥητορική	ῥητορική ῥητορικῆς, ἡ	danh từ	thuật hùng biện, nghề hùng biện	rhetoric, art of speech
ῥήτωρ	ῥήτωρ ῥήτορος, ὁ	danh từ	nhà hùng biện	orator, public speaker
τελέω	τελέω	động từ	hoàn tất; trả (tiền)	complete, fulfil; pay
τέχνη	τέχνη τέχνης, ἡ	danh từ	nghề thủ công; kỹ năng; môn kỹ thuật	art, craft, skill
ὑπισχνέομαι	ὑπισχνέομαι, ὑφέξομαι, ὑπεσχόμην	động từ	hứa, thề hẹn	promise
χράομαι / χρήομαι	χράομαι, χρήσομαι, ἐχρησάμην, κέχρημαι, ἐχρήσθην	động từ	sử dụng; giao thiệp với (+Tặng)	use; have dealings with
δένδρον	δένδρον δένδρου, τό	danh từ	cây, thân cây	tree
κινδυνεύω	κινδυνεύω	động từ	ở trong cảnh hiểm; có vẻ	be in danger; be likely
μηχανή	μηχανή μηχανῆς, ἡ	danh từ	mưu chước, phương kế; máy móc	device, contrivance; machine
ὁράω	ὁράω (Impf. ἑώρων), ὄψομαι, εἶδον, ἑώρακα, ὤφθην, ὀφθήσομαι	động từ	thấy, nhìn; hiểu	see; (pf. pass.) appear
παρακαλέω	παρακαλέω	động từ	triệu đến; khuyên nhủ, an ủi	summon; encourage, comfort
πλανάομαι	πλανάομαι, πλανήσομαι, ἐπλανήθην, πεπλάνημαι	động từ	đi lạc, lang thang	go astray, wander
φυλάττω	φυλάττω, φυλάξω, ἐφύλαξα, πεφύλαχα, πεφύλαγμαι, ἐφυλάχθην	động từ	giữ gìn, canh giữ; M.: đề phòng	guard, watch; beware of
φωνή	φωνή φωνῆς, ἡ	danh từ	tiếng, âm thanh	voice, sound
ἀδικέω	ἀδικέω, ἀδικήσω, ἠδίκησα, ἠδίκηκα, ἠδίκημαι, ἠδικήθην	động từ	làm điều sai trái, hại người	do wrong, injure
αἰτέω	αἰτέω, αἰτήσω, ᾔτησα, ᾔτηκα, ᾔτημαι, ᾔτηθην	động từ	đòi, xin, yêu cầu	ask, request, demand
βοηθέω	βοηθέω, βοηθήσω, ἐβοήθησα, βεβοήθηκα	động từ	cứu giúp, ứng cứu	help, come to aid
δίδωμι	δίδωμι, δώσω, ἔδωκα, δέδωκα, δέδομαι, ἐδόθην	động từ	cho, trao; ban (δίκην δίδωμι: chịu phạt)	give, grant
ἐμός	ἐμός, ἐμή, ἐμόν	đại từ sở hữu	của tôi	my, mine
ἡγεμών	ἡγεμών ἡγεμόνος, ὁ	danh từ	người dẫn đầu, vị chỉ huy	leader, commander, guide
λοιπός	λοιπός, λοιπή, λοιπόν	tính từ	còn lại (τὸ λοιπόν: về sau; τοῦ λοιποῦ: từ nay)	remaining; for the future
σός	σός, σή, σόν	đại từ sở hữu	của anh/chị, của ngươi	your (sg.)
στρατεύω	στρατεύω	động từ	ra trận, chinh chiến (cả M.)	go on a campaign, serve as soldier
τιμωρέω	τιμωρέω	động từ	trả thù (cho ai +Tặng, với ai +Đối); trừng phạt	avenge; punish
ὑμέτερος	ὑμέτερος, ὑμέτερα, ὑμέτερον	đại từ sở hữu	của các anh/chị, của các ngươi	your (pl.)
χρῆμα	χρῆμα χρήματος, τό	danh từ	việc, sự vật; số nhiều: tiền của, tài sản	thing; (pl.) money, property
ζήω	ζήω (Inf. ζῆν), ζήσω, ἔζησα, ἔζηκα	động từ	sống	live
συγχωρέω	συγχωρέω	động từ	nhượng bộ, công nhận; bằng lòng	withdraw, concede; agree
ὑπέρ	ὑπέρ	giới từ	+Sở: trên; cho, vì lợi ích của; +Đối: vượt quá	above, on behalf of (+gen); beyond (+acc)
κεῖμαι	κεῖμαι, κείσομαι (Impf. ἐκείμην)	động từ	nằm; bị đặt, được để (hoàn thành bị động của τίθημι)	lie; be placed
κρύπτω	κρύπτω, κρύψω, ἔκρυψα, κέκρυφα, κέκρυμμαι, ἐκρύφθην	động từ	giấu, che giấu	hide, conceal
μάχομαι	μάχομαι, μαχοῦμαι, ἐμαχεσάμην, μεμάχημαι	động từ	chiến đấu (chống ai +Tặng; cùng ai: σύν +Tặng / μετά +Sở)	fight (with)
ὁρμάω	ὁρμάω, ὀρμήσω, ὥρμησα, ὥρμηκα, ὥρμημαι, ὥρμήθην	động từ	xúc tiến, khởi hành; kích động	rouse, set in motion; rush
πρίν	πρίν	liên từ	trước khi (khi chưa +đại từ chỉ định); trước đó	before, until
φονεύω	φονεύω	động từ	giết, mưu sát	murder, slay
ἄπτομαι	ἄπτομαι, ἄψομαι, ἠψάμην, ἦμαι, ἤφθην	động từ	chạm vào; bận tâm đến (+Sở)	touch; take hold of
ἰκετεύω	ἰκετεύω	động từ	van xin, khẩn cầu	supplicate, beseech
μειράκιον	μειράκιον μειρακίου, τό	danh từ	thanh niên, chàng trai	youth, young man
πάρειμι	πάρειμι (Impf. παρῆν), παρέσομαι, παρεγενόμην	động từ	có mặt, hiện diện; (+Tặng) thuộc về quyền	be present; it is open to
ταχύς	ταχύς, ταχεῖα, ταχύ	tính từ	nhanh (so sánh θάττων, cao cấp τάχιστος; τάχα: sớm, có lẽ)	swift, quick
ἀκολουθέω	ἀκολουθέω	động từ	đi theo, theo đuổi (ai +Tặng)	follow
ἑταῖρος	ἑταῖρος ἑταίρου, ὁ	danh từ	bạn đồng hành, chiến hữu	companion, comrade
μηδέ	μηδέ	liên từ	và không, cũng không, nhưng không; ngay cả... cũng không	and not, nor; not even
νικάω	νικάω, νικήσω, ἐνίκησα, νενίκηκα, νενίκημαι, ἐνικήθην	động từ	thắng, đánh bại	win, conquer
πρότερος	πρότερος, προτέρα, πρότερον	tính từ	sớm hơn, trước (πρότερον: trước đây, trước đó)	former, earlier
στέφανος	στέφανος στεφάνου, ὁ	danh từ	vòng nguyệt quế, vinh quang	wreath, crown
φρόνιμος	φρόνιμος, ον	tính từ	sáng suốt, khôn khéo	wise, prudent
δικαστής	δικαστής δικαστοῦ, ὁ	danh từ	thẩm phán, bồi thẩm	judge, juror
μισέω	μισέω	động từ	ghét, thù ghét	hate
πάλιν	πάλιν	trạng từ	lại, lần nữa; trở lại	again, back
ἀγανακτέω	ἀγανακτέω	động từ	bực tức, bất bình	be vexed, be indignant
δεσπότης	δεσπότης δεσπότου, ὁ	danh từ	ông chủ, người nắm quyền	master, lord
χωρέω	χωρέω	động từ	nhường chỗ; đi, tiến	yield, give way; go
δέχομαι	δέχομαι, δέξομαι, ἐδεξάμην, δέδεγμαι, ἐδέχθην	động từ	nhận, tiếp nhận; đón tiếp	receive, accept, welcome
ἐπιλανθάνομαι	ἐπιλανθάνομαι, ἐπιλήσομαι, ἐπελαθόμην, ἐπιλέλησμαι	động từ	qên (việc gì +Sở)	forget
θέατρον	θέατρον θεάτρου, τό	danh từ	rạp hát; nơi đứng xem	theatre, spectacle
θεωρέω	θεωρέω	động từ	quan sát, xem; dự	look at, watch; attend
νύξ	νύξ νυκτός, ἡ	danh từ	đêm	night
σκηνή	σκηνή σκηνῆς, ἡ	danh từ	trại, lều; sân khấu	tent; stage
σπουδή	σπουδή σπουδῆς, ἡ	danh từ	sự chuyên cần, nghiêm túc; cấp bách	earnestness, zeal; haste
ἄδικος	ἄδικος, άδικον	tính từ	bất công, sai trái	unjust, wrong
γελάω	γελάω, γελάσομαι, ἐγέλασα	động từ	cười; chế nhạo	laugh, laugh at
κεφαλή	κεφαλή κεφαλῆς, ἡ	danh từ	đầu	head
δράω	δράω, δράσω, ἔδρασα, δέδρακα, δέδραμαι, ἐδράσθην	động từ	làm, hành động	do, act
θαρρέω (θαρσέω)	θαρρέω (θαρσέω)	động từ	dũng cảm, tự tin	be confident, take heart
ὄργανον	ὄργανον ὀργάνου, τό	danh từ	dụng cụ; nhạc cụ; cơ quan	tool, instrument; organ
ἀρχαῖος	ἀρχαῖος, α, ον	tính từ	cổ, xưa	ancient, old
κρείττων	κρείττων, κρεῖττον	tính từ	mạnh hơn, hơn (so sánh của ἀγαθός; cao cấp κράτιστος)	stronger, better
κρίνω	κρίνω, κρινῶ, ἔκρινα, κέκρικα, κέκριμαι, ἐκρίθην	động từ	phân biệt; quyết định, xét xử, kết án	separate, judge, decide
πατρίς	πατρίς πατρίδος, ἡ	danh từ	quê cha đất tổ, quê hương	fatherland, native city
στρατηγός	στρατηγός στρατηγοῦ, ὁ	danh từ	vị tướng, người thống lĩnh quân	general, commander
στρατιώτης	στρατιώτης στρατιώτου, ὁ	danh từ	người lính, quân nhân	soldier
συμβουλεύω	συμβουλεύω	động từ	khuyên bảo, hiến kế	advise, counsel
ἀλήθεια	ἀλήθεια ἀληθείας, ἡ	danh từ	sự thật, chân lý	truth
βάρβαρος	βάρβαρος, ον	danh từ/tính từ	người ngoại tộc; không phải Hy Lạp	barbarian, non-Greek
κτῆμα	κτῆμα κτήματος, τό	danh từ	tài sản, của cải	possession, property
τελευτάω	τελευτάω, τελευτήσω, ἐτελεύτησα, τετελεύτηκα, τετελεύτημαι, ἐτελεύτηθην	động từ	kết thúc; mất, qua đời	complete, end; die
δύναμις	δύναμις δυνάμεως, ἡ	danh từ	sức mạnh, quyền năng; khả năng	power, capability
ναῦς	ναῦς νεώς, ἡ	danh từ	con tàu, chiến thuyền	ship
ὀπλίτης	ὀπλίτης ὀπλίτου, ὁ	danh từ	lính nặng giáp, lính hoplite	hoplite, heavy-armed soldier
εἰκών	εἰκών εἰκόνος, ἡ	danh từ	hình ảnh; tượng	image, statue
ἴδιος	ἴδιος, ἰδία, ἴδιον	tính từ	riêng tư (ἰδίᾳ: cách riêng, cá nhân)	own, private, personal
ἵστημι	ἵστημι, στήσω, ἔστησα // ἵσταμαι, στήσομαι, ἔστην, ἔστηκα	động từ	đặt, dựng; M.: đứng lại, đứng	stand; set up, place
αἰσθάνομαι	αἰσθάνομαι, αἰσθήσομαι, ἠσθόμην, ἤσθημαι	động từ	cảm nhận, nhận thấy	perceive, notice
δοῦλος	δοῦλος δούλου, ὁ	danh từ	nô lệ, kẻ tôi tớ	slave, servant
ἕτοιμος	ἕτοιμος, η, ον	tính từ	sẵn sàng, sẵn có	ready, prepared
παραδίδωμι	παραδίδωμι, παραδώσω, παρέδωκα, παραδέδωκα, παραδέδομαι, παρεδόθην	động từ	trao; truyền lại; phản nộp	hand over, deliver; betray
πίστις	πίστις πίστεως, ἡ	danh từ	lòng trung thành, sự tín nhiệm	trust, faith, loyalty
τρεῖς	τρεῖς, τρία	số từ	ba	three
αἱρέω	αἱρέω, αἱρήσω, εἶλον, ἤρηκα, ἤρημαι, ἤρεθην	động từ	lấy, nắm; hạ gục; M.: chọn lấy	take, capture; (mid.) choose
ἑαυτοῦ	ἑαυτοῦ, ἑαυτῆς, ἑαυτοῦ	đại từ	của/chính mình (đại từ phản thân ngôi 3)	himself, herself, itself	ἑαυτοῦ ἑαυτῆς ἑαυτῷ ἑαυτῇ ἑαυτὸν ἑαυτὴν ἑαυτῶν ἑαυτοῖς ἑαυτὰς ἑαυτούς
ἥττων, ἤττον	ἥττων, ἤττον	tính từ	kém hơn, yếu hơn (ἤττον: ít hơn; οὐδὲν ἤττον: không chút nào kém)	inferior, worse, less
θάπτω	θάπτω	động từ	mai táng	bury, entomb
λανθάνω	λανθάνω, λήσω, ἔλαθον, λέληθα	động từ	lẫn tránh chú ý (ai +Đối); làm việc gì mà không ai hay	escape notice, do unnoticed
νεκρός	νεκρός, νεκρά, νεκρόν	tính từ/danh từ	chết; (ὁ νεκρός: xác chết)	dead; corpse
οὗτος	οὗτος, αὕτη, τοῦτο; τούτου, ταύτης, τούτου	đại từ	người/việc này, đây	this (here)	οὗτος αὕτη τοῦτο τοῦτον τοῦτο ταύτην τούτου ταύτης τούτῳ ταύτῃ τούτων τούτοις ταύταις τούτους ταύτας ταῦτα
εὐθύς / εὐθύ	εὐθύς / εὐθύ	trạng từ	thẳng, ngay lập tức	straight, immediately
μῦθος	μῦθος μύθου, ὁ	danh từ	lời kể; chuyện kể	word; tale, story
ἐκών	ἐκών, ἐκοῦσα, ἐκόν	tính từ	tự nguyện	willing, voluntary
θνητός	θνητός, ή, όν	tính từ	phải chết, hữu hạn	mortal
κομίζω	κομίζω, κομιῶ, ἐκόμισα, κεκόμικα, κεκόμισμαι, ἐκομίσθην	động từ	đem, chuyên chở	bring, carry, convey
μήτε...μήτε	μήτε...μήτε	liên từ	không... cũng không	neither... nor
μοῖρα	μοῖρα μοίρας, ἡ	danh từ	phần chia, số phận	portion, fate
παραγίγνομαι	παραγίγνομαι	động từ	đến, có mặt	arrive, be present
φθόνος	φθόνος φθόνου, ὁ	danh từ	sự đố kỵ	envy, jealousy
δικάζω	δικάζω	động từ	xử án, xét xử; M.: kiện tụng (chống ai +Tặng)	give judgment; go to law
ἔρις	ἔρις ἔριδος, ἡ	danh từ	sự tranh chấp; cuộc ganh đua	strife, quarrel; rivalry
θυμός	θυμός θυμοῦ, ὁ	danh từ	lòng dũng cảm, cơn thịnh nộ; tấm lòng, tình cảm	courage, anger; heart, temper
μαρτυρέω	μαρτυρέω	động từ	làm chứng, xác nhận	bear witness, testify
μάρτυς	μάρτυς μάρτυρος, ὁ/ἡ	danh từ	nhân chứng	witness
πλήττω	πλήττω, πλήξω, ἐπλήξα, πέπληγα, πέπληγμαι, ἐπλήγην	động từ	đánh, đập	strike, hit
τιμή	τιμή τιμῆς, ἡ	danh từ	danh dự; giá trị	honour; value, price
ἀδύνατος	ἀδύνατος, ον	tính từ	không có khả năng; bất khả	impossible; powerless
ἀρκέω	ἀρκέω	động từ	đủ sức, thỏa mãn	suffice, be enough
δεύτερος	δεύτερος, α, ον	số từ	thứ hai	second
δημιουργός	δημιουργός δημιουργοῦ, ὁ	danh từ	thợ thủ công; đấng sáng tạo	craftsman; creator
μήν	μήν	tiểu từ	(tiểu từ nhấn mạnh từ đứng trước nó)	emphatic particle
παντάπασι(ν)	παντάπασι(ν)	trạng từ	hoàn toàn, tuyệt nhiên	wholly, entirely
τοιοῦτος	τοιοῦτος, τοιαύτη, τοιοῦτο	tính từ	như thế, thuộc loại đó	such (as this)
τόπος	τόπος τόπου, ὁ	danh từ	nơi, chỗ, vị trí	place, position
τοσοῦτος	τοσοῦτος, τοσαύτη, τοσοῦτο	tính từ	bao nhiêu là thế, lớn đến thế	so great, so much
ἀντί	ἀντί	giới từ	+Sở: thay cho, đối lại với	instead of, against (+gen)
ἐνταῦθα	ἐνταῦθα	trạng từ	ở đây; ở đó	here; there
ἐπιμελέομαι	ἐπιμελέομαι, ἐπιμελήσομαι, ἐπεμελήθην	động từ	chăm lo (việc gì +Sở)	care for, attend to
μάλα	μάλα	trạng từ	rất, cực (μᾶλλον: hơn; μάλιστα: nhất)	very, greatly
ἄν	ἄν	tiểu từ	(tiểu từ đánh dấu khả năng/giả định: với optative, quá khứ chỉ định, huyền hoặc hiện tại/tương lai)	particle of potentiality/irreality
γέρων	γέρων γέροντος, ὁ	danh từ	ông lão	old man
μέμφομαι	μέμφομαι	động từ	trách móc, bắt lỗi	blame, find fault with
διαφθείρω	διαφθείρω, διαφθερῶ, διέφθειρα, διέφθαρκα, διέφθαρμαι, διεφθάρην	động từ	làm hư, tàn phá, tiêu diệt	corrupt, destroy
πολιτεία	πολιτεία πολιτείας, ἡ	danh từ	hiến pháp, thể chế; nhà nước	constitution, state
ἀμφισβητέω	ἀμφισβητέω	động từ	tranh chấp, bác bỏ; khẳng định	dispute; contest
βελτίων	βελτίων, βέλτιον	tính từ	hơn, tốt hơn (so sánh của ἀγαθός; cao cấp βέλτιστος)	better
δηλόω	δηλόω, δηλώσω, ἐδήλωσα, δεδήλωκα, ἐδηλώθην	động từ	làm rõ, chứng tỏ	make clear, show
ἐλάττων	ἐλάττων, ἔλαττον	tính từ	nhỏ hơn, ít hơn (so sánh của μικρός/ὀλίγος; cao cấp ἐλάχιστος)	less, smaller
ὅσπερ	ὅσπερ, ἥπερ, ὅπερ	đại từ	chính người mà, chính cái mà (quan hệ nhấn mạnh)	who/which very (emphatic relative)
ὅστις	ὅστις, ἥτις, ὅ τι; ὅτου, ἥστινος, ὅτινος	đại từ	bất kỳ ai mà, ai; gì (quan hệ khái quát; hỏi gián tiếp)	whoever, anyone who; who?	ὅστις ἥτις ὅτι ὅτου ἥστινος ὅτινος ὅτῳ ᾗτινι ὅντινα ὅστινες αἵτινες ὅσων ὅτισιν αἵτισιν οὕστινας ἅστινας
ποιητής	ποιητής ποιητοῦ, ὁ	danh từ	nhà thơ; đấng sáng tạo	poet; maker
φύσις	φύσις φύσεως, ἡ	danh từ	bản tính, tự nhiên (φύσει: theo tự nhiên)	nature
χείρων	χείρων, χεῖρον	tính từ	tệ hơn (so sánh của κακός; cao cấp χείριστος)	worse
ᾠδή	ᾠδή ᾠδῆς, ἡ	danh từ	bài hát, khúc ca	song, ode
ἀλίσκομαι	ἀλίσκομαι, ἀλώσομαι, ἐάλων, ἐάλωκα	động từ	bị bắt, bị hạ; bị kết án	caught, convicted
ἐλευθερία	ἐλευθερία ἐλευθερίας, ἡ	danh từ	tự do, sự tự do	freedom, liberty
ἐλεύθερος	ἐλεύθερος, ἐλευθέρα, ἐλεύθερον	tính từ	tự do	free
πρᾶξις	πρᾶξις πράξεως, ἡ	danh từ	hành động, sự thực hiện	action, doing
αἰσχύνομαι	αἰσχύνομαι, αἰσχυνοῦμαι, ἠσχύνθην, ἤσχυμαι	động từ	điều hổ thẹn (trước ai +Đối); kính trọng	be ashamed; respect
ἀμελέω	ἀμελέω	động từ	xem nhẹ, lơ đãng (việc gì +Sở)	neglect, be careless of
βουλή	βουλή βουλῆς, ἡ	danh từ	kế tính, nghị quyết; hội đồng	counsel, plan; council
γυμνάζω	γυμνάζω	động từ	luyện tập, rèn luyện	exercise, train
εἷς	εἷς, μία, ἕν (ἑνός, μιᾶς, ἑνός)	số từ	một, duy nhất	one	εἷς μία ἓν ἑνὸς μιᾶς ἑνὶ μιᾷ ἕνα μίαν
ἔπαινος	ἔπαινος ἐπαίνου, ὁ	danh từ	lời khen	praise, commendation
ἔπομαι	ἔπομαι, ἐψόμαι, ἐσπόμην	động từ	đi theo, bám theo (ai +Tặng)	follow, attend
μέλει (μοί τινος)	μέλει (μοί τινος), μελήσει, ἐμέλησε, μεμέληκε	động từ bất định nhân xưng	(biết chăm sóc) bận tâm, lo lắng; quan tâm	it concerns me, I care for
μηδείς	μηδείς, μηδεμία, μηδέν	đại từ	không ai, không gì (phủ định điều hình dung)	nobody, nothing (with μή)	μηδεὶς μηδεμία μηδὲν μηδενὸς μηδεμιᾶς μηδενὶ μηδεμίᾳ μηδένα μηδεμίαν
ναί	ναί	trạng từ	vâng, phải	yes
νοῦς (νόος)	νοῦς (νόος) νοῦ (νόου), ὁ	danh từ	tri giác, trí tuệ, tâm trí	mind, intellect, understanding
οἷος	οἷος, οἵα, οἷον	đại từ	thuộc loại nào, như thế nào; (οἷόν τε: có thể)	of what sort; such as
προσέχω	προσέχω	động từ	hướng về; (τὸν νοῦν προσέχω: chú tâm đến)	turn towards; pay attention to
αἰτία	αἰτία αἰτίας, ἡ	danh từ	nguyên nhân; lỗi lầm, tội	cause; blame, fault
διαβάλλω	διαβάλλω	động từ	vu khống	slander
ἐμαυτοῦ	ἐμαυτοῦ, ἐμαυτῆς, ἐμαυτοῦ	đại từ	của/tự chính tôi (phản thân ngôi 1)	myself	ἐμαυτῷ ἐμαυτὴν ἐμαυτὸν
πώποτε	πώποτε	trạng từ	từng bao giờ (với οὔ/μή: chưa bao giờ)	ever (in negative: never)
σεαυτοῦ / σαυτοῦ	σεαυτοῦ, σεαυτῆς / σαυτοῦ, σαυτῆς	đại từ	của/tự chính anh/chị (phản thân ngôi 2)	yourself	σεαυτῷ σεαυτὴν σεαυτὸν
φθονέω	φθονέω	động từ	ganh ghét, đố kỵ	envy, begrudge
δεῦρο	δεῦρο	trạng từ	đến đây, qua đây	hither, come here
ζωή	ζωή ζωῆς, ἡ	danh từ	sự sống, đời sống	life
θησαυρός	θησαυρός θησαυροῦ, ὁ	danh từ	kho tàng	treasure, treasury
ἵνα	ἵνα	liên từ	để (kèm huyền hoặc); nơi mà (kèm chỉ định)	in order that (+subj); where
κλέπτω	κλέπτω, κλέψω / κλέψομαι, ἔκλεψα, κέκλοφα, κέκλεμμαι, ἐκλάπην	động từ	trộm, ăn cắp	steal
λυπέω	λυπέω	động từ	làm đau lòng, làm phiền	grieve, annoy
ὁσιότης	ὁσιότης ὁσιότητος, ἡ	danh từ	lòng mộ đạo	piety, holiness
ψεύδω	ψεύδω, ψεύσω, ἔψευσα, ἔψευκα, ἔψευσμαι, ἐψεύσθην	động từ	lừa dối; M.: nói dối; P.: lầm	tell lies; deceive
προστάττω	προστάττω	động từ	ra lệnh, chỉ định	command, order
συμφέρω	συμφέρω, συμβήσω, Aor. συνήνεγκα	động từ	có lợi (τὸ συμφέρον: lợi ích)	be expedient, be of use
σπεύδω	σπεύδω	động từ	vội vàng, nôn nao	hasten, be eager
σφοδρός (adv. σφόδρα)	σφοδρός, σφοδρά, σφοδρόν (adv. σφόδρα)	tính từ	mạnh mẽ, dữ dội (trạng từ: rất)	violent, intense; (adv.) very
ἅπας	ἅπας, ἅπασα, ἅπαν	tính từ	tất cả, toàn thể (tổng có)	all, the whole	ἅπας ἅπασα ἅπαν ἅπαντος ἅπασης ἅπαντι ἅπασᾳ ἅπαντα ἅπαντες ἅπασαι ἅπαντων ἅπασι πάσαις ἅπαντας πάσας ἅπαντα
ὄρνις	ὄρνις ὄρνιθος, ὁ/ἡ	danh từ	chim	bird
ἀσθενής	ἀσθενής, ἀσθενές	tính từ	yếu đuối; đau ốm	weak, sick
δοξάζω	δοξάζω	động từ	cho rằng; tưởng tượng	opine, imagine
μέλος	μέλος μέλους, τό	danh từ	chi thể; khúc nhạc	limb; song
ὀφθαλμός	ὀφθαλμός ὀφθαλμοῦ, ὁ	danh từ	con mắt	eye
πάσχω	πάσχω, πείσομαι, ἔπαθον, πέπονθα	động từ	trải qua, chịu đựng	suffer, experience
πούς	πούς ποδός, ὁ	danh từ	bàn chân; thước đo chân (khoảng 30 cm)	foot
ἀληθής	ἀληθής, ἀληθές	tính từ	thật, chân thật	true, truthful
κερδαίνω	κερδαίνω	động từ	kiếm được, thu lợi	gain, win
σαφής	σαφής, σαφές	tính từ	rõ ràng, minh bạch	clear, distinct
ἄρχων	ἄρχων ἄρχοντος, ὁ	danh từ	vị cầm quyền; quan tổng trấn (archon)	ruler, magistrate; archon
δήλος	δήλος, δήλη, δήλον	tính từ	hiện rõ, rõ ràng	clear, manifest
κινέω	κινέω, κινήσω, ἐκίνησα, κεκίνηκα, κεκίνημαι, ἐκινήθην	động từ	xoay chuyển, khuấy động; thúc đẩy	move, stir; rouse
τείχος	τείχος τείχους, τό	danh từ	tường thành	wall
δείκνυμι (ἐνδείκνυμι)	δείκνυμι, δείξω, ἔδειξα, δέδειχα, δέδειγμαι, ἐδείχθην	động từ	chỉ cho thấy; chứng minh	show, point out; prove
εἶδος	εἶδος εἴδους, τό	danh từ	hình dạng, diện mạo; ý niệm	shape, form; idea
ἐντυγχάνω	ἐντυγχάνω, ἐντεύξομαι, ἐνέτυχον, ἐντετύχηκα	động từ	gặp gỡ (ai +Tặng); gặp phải	come upon, meet with
ἡδύς	ἡδύς, ἡδεῖα, ἡδύ	tính từ	ngọt ngào, dễ chịu (adv. ἡδέως: vui lòng)	sweet, pleasant
φιλοσοφέω	φιλοσοφέω	động từ	theo đuổi triết học, bàn triết	philosophize
ἀγορά	ἀγορά ἀγορᾶς, ἡ	danh từ	chợ; quảng trường	assembly, marketplace
δέον	δέον	danh từ	điều cần (τό δέον: điều phải làm; τὰ δέοντα: việc cần)	what is needful, duty
ἐάν (< εἰ ἄν) / ἤν / ἄν		liên từ	nếu; mỗi khi	if; whenever	ἐάν ἤν ἄν
ἐπείδάν	ἐπείδάν	liên từ	khi, mỗi khi	whenever, when
μετέχω	μετέχω	động từ	cùng dự phần (trong +Sở)	partake, share in (+gen)
μέτρον	μέτρον μέτρου, τό	danh từ	thước đo; mức độ vừa phải	measure, due measure
ὅταν (ὅτε ἄν)		liên từ	khi, mỗi khi	whenever, when	ὅταν
συμβαίνω	συμβαίνω, συμβήσομαι, συνέβην, συμβέβηκα	động từ	xảy ra, xảy đến	happen, come to pass
τοι	τοι	tiểu từ	chắc vậy, thật thế	indeed, surely
τοίνυν (τοί νυν)		tiểu từ	vậy thì, do đó	then, therefore	τοίνυν
τυγχάνω	τυγχάνω, τεύξομαι, ἔτυχον, τετύχηκα	động từ	đạt được (ai/cái gì +Sở); tình cờ (làm gì: +phân từ)	hit the mark; happen to
ἑκάτερος	ἑκάτερος, ἑκατέρα, ἑκάτερον	đại từ	mỗi (trong hai)	each of two, both
θάλαττα	θάλαττα θαλάττης, ἡ	danh từ	biển	sea
αἰδέομαι	αἰδέομαι (Impf. ᾐδέσθην)	động từ	e ngại, kính sợ; giữ phép	venerate, feel awe; respect
ἄκων	ἄκων, ἄκουσα, ἄκον	tính từ	bất đắc dĩ, miễn cưỡng	unwilling, reluctant
ἀπόλλυμι	ἀπόλλυμι, ἀπολῶ, ἀπώλεσα (M. ἀπωλόμην, Perf. ἀπολώλεκα / ἀπόλωλα)	động từ	hủy diệt; M.: đánh mất	destroy; (mid.) lose, perish
ἤ	ἤ	tiểu từ	chắc hẳn, phải chăng	indeed, surely
ὕδωρ	ὕδωρ ὕδατος, τό	danh từ	nước	water
ἄγγελος	ἄγγελος ἀγγέλου, ὁ	danh từ	vị sứ giả	messenger, angel
κοσμέω	κοσμέω	động từ	sắp đặt, làm cho đẹp; trang sức	order, adorn
ὠφελέω	ὠφελέω	động từ	có ích, giúp đỡ (ai +Đối)	benefit, help
ἐκπλήττω	ἐκπλήττω	động từ	làm kinh ngạc; P.: hoảng hốt	astonish; be thunderstruck
ἐράω	ἐράω (auch: ἔραμαι)	động từ	yêu, khao khát	love, desire, yearn for
κρίσις	κρίσις κρίσεως, ἡ	danh từ	sự phân định; bản án, phán quyết	decision, judgment
μαίνομαι	μαίνομαι	động từ	mê man, cuồng nộ	rave, be furious
ὅσιος	ὅσιος, α, ον	tính từ	thiêng liêng, hợp lễ; mộ đạo	holy, pious
ἐκκλησία	ἐκκλησία ἐκκλησίας, ἡ	danh từ	hội đồng dân; (Kitô giáo:) nhà hội, giáo hội	assembly, church
εὐδοκιμέω	εὐδοκιμέω	động từ	có danh thơm; được trọng vọng	be well reputed, distinguished
ἀπολογέομαι	ἀπολογέομαι	động từ	bào chữa, tự biện hộ	defend oneself, apologize
δικαστήριον	δικαστήριον δικαστηρίου, τό	danh từ	tòa án	court of justice, tribunal
ὑγιεινός	ὑγιεινός, ή, όν	tính từ	lành mạnh, tốt cho sức khỏe	healthy, wholesome
ἀκριβής	ἀκριβής, ἀκριβές	tính từ	chu đáo, chính xác	accurate, exact, careful
δίκη	δίκη δίκης, ἡ	danh từ	công lý; phiên tòa, hình phạt (δίκην δίδωμι: chịu phạt)	justice; trial, punishment
εἶθε	εἶθε	tiểu từ	ước gì (+optative), mong là	if only, would that
ἐξετάζω	ἐξετάζω	động từ	soi xét, kiểm tra	examine, question
ἐπιβουλεύω	ἐπιβουλεύω	động từ	mưu hại (chống ai +Tặng)	plot against
εὐχή	εὐχή εὐχῆς, ἡ	danh từ	lời nguyện, lời khấn	prayer, vow
ποικίλος	ποικίλος, η, ον	tính từ	nhiều màu; tinh xảo	variegated, intricate
αὐτίκα	αὐτίκα	trạng từ	ngay tức khắc, lập tức	instantly, immediately
ἔτος	ἔτος ἔτους, τό	danh từ	năm	year
ὄψις	ὄψις ὄψεως, ἡ	danh từ	thị lực; diện mạo	sight; appearance
αἰδώς	αἰδώς αἰδοῦς, ἡ	danh từ	sự e ngại, tôn kính	shame, reverence
ἅτε	ἅτε	tiểu từ	(phân từ chỉ lý do khách quan) vì, do	truly (marking cause, with participle)
γένος	γένος γένους, τό	danh từ	nòi giống, dòng họi; loại, giới	stock, family; kind, race
δέδοικα / δέδια	δέδοικα / δέδια, δείσομαι, ἔδεισα (Präs. δείδω)	động từ	sợ (hoàn thành mang nghĩa hiện tại)	fear (perfect with present meaning)	δέδοικα δέδια δεισόμεθα δείσει
μέρος	μέρος μέρους, τό	danh từ	phần, bộ phận	part, share, portion
νόσος	νόσος νόσου, ἡ	danh từ	bệnh tật	illness, disease
οὔπω	οὔπω	trạng từ	chưa, chưa từng	not yet
ἔμπροσθεν (= πρόσθεν)		trạng từ	phía trước; trước đây	in front; formerly	ἔμπροσθεν
ἔπος	ἔπος ἔπους, τό	danh từ	lời nói, tiếng nói	word
θρόνος	θρόνος θρόνου, ὁ	danh từ	ghế ngồi; ngai	throne, chair
μιμέομαι	μιμέομαι	động từ	bắt chước, mô phỏng	imitate
τάττω	τάττω, τάξω, ἔταξα, τέταχα, τέταγμαι, ἐτάχθην	động từ	bố trí, sắp đặt; chỉ định	draw up, post; command
ζήτησις	ζήτησις ζητήσεως, ἡ	danh từ	sự khảo cứu, câu hỏi	investigation, inquiry
ἀξιόω	ἀξιόω, ἀξιώσω, ἠξίωσα, ἠξίωκα, ἠξίωμαι, ἠξιώθην	động từ	đòi hỏi, đòi công nhận; cho xứng	claim, require; consider worthy
ἐπιμέλεια	ἐπιμέλεια ἐπιμελείας, ἡ	danh từ	sự chăm lo, quan tâm	care, attention
δεῖπνον	δεῖπνον δείπνου, τό	danh từ	bữa ăn chiều, yến	dinner, banquet
δέω	δέω	động từ	trói, buộc	bind, tie
εἶμι	εἶμι (Inf. ἰέναι, Part. ἰών, ἰοῦσα, ἰόν, Impf. ἦα)	động từ	đi (tương lai của ἔρχομαι)	go (fut. of ἔρχομαι)
ἦ δ’ ὅς / ἦν δ’ ἐγώ		công thức dẫn thoại	người kia nói / tôi nói (công thức Homer)	he/she said / I said (Homeric formula)
ὅπως	ὅπως	liên từ	như thế nào; rằng; để	how; that; in order that
ἀμύνω	ἀμύνω, ἀμυνῶ, ἥμυνα	động từ	đẩy lui, chống giữ; (+Tặng) cứu ai; M.: tự vệ	ward off, defend
ἄθλιος	ἄθλιος, α, ον	tính từ	khốn khổ, tội nghiệp	miserable, wretched
ἄθλος	ἄθλος ἄθλου, ὁ	danh từ	cuộc tranh tài; nỗi nhọc	contest; toil
αἴτιος	αἴτιος, α, ον	tính từ	có lỗi (trong việc gì +Sở); thủ phạm	guilty; responsible, author
ἀκοή	ἀκοή ἀκοῆς, ἡ	danh từ	thính lực; đồn đãng, tin tức	hearing; report, rumour
ἀμαθής	ἀμαθής, ἀμαθές	tính từ	thiếu học, dốt nát	ignorant, unlearned
ἁμαρτάνω	ἁμαρτάνω, ἁμαρτήσομαι, ἡμάρτησα, ἡμάρτον	động từ	trượt, làm sai; phạm tội	miss the mark, err, sin
ἁμαρτία	ἁμαρτία ἁμαρτίας, ἡ (ἁμάρτημα ἁμαρτήματος, τό)	danh từ	lỗi lầm, điều sai trái	sin, fault
ἀμφί	ἀμφί	giới từ	+Đối: quanh, quanh về	around, about (+acc)
ἀναγιγνώσκω	ἀναγιγνώσκω	động từ	đọc, đọc lên	read, read aloud
ἀναλαμβάνω	ἀναλαμβάνω	động từ	nhấc lên, tiếp nhận	take up, recover
ἀναμνήσκω	ἀναμνήσκω	động từ	nhắc ai nhớ; M.: tự nhớ lại	remind; remember
ἀνδρεῖος	ἀνδρεῖος, α, ον	tính từ	dũng cảm	brave, courageous
ἀνίημι	ἀνίημι	động từ	thả lỏng; giảm bớt	loose, let go; relax
ἀνίστημι	ἀνίστημι	động từ	dứng dậy, chỗi dậy; đánh thức	raise, rise up
ἀνόητος	ἀνόητος, ον	tính từ	dại dột, thiếu suy xét	thoughtless, foolish
ἀνόσιος	ἀνόσιος, α, ον	tính từ	báng thần, bất nghĩa	impious, unholy
ἄπειμι	ἄπειμι (Inf. ἀπιέναι)	động từ	rời đi	go away, depart
ἀπιστέω	ἀπιστέω	động từ	không tin, nghi ngờ	disbelieve, distrust
ἀποδείκνυμι	ἀποδείκνυμι	động từ	chứng tỏ, cho thấy; (+2 đối cách) làm thành	show, demonstrate, prove
ἀποδέχομαι	ἀποδέχομαι	động từ	chấp nhận, tán đồng; tiếp đón	approve, accept, welcome
ἀποδιδράσκω	ἀποδιδράσκω	động từ	bỏ chạy, lẩn trốn	run away, escape
ἀπόκρισις	ἀπόκρισις ἀποκρίσεως, ἡ	danh từ	lời đáp	answer, reply
ἄτοπος	ἄτοπος, ον	tính từ	không đúng chỗ, kỳ cục, vô lý	out of place, strange, absurd
αὐτοῦ (αὐτόθι)		trạng từ	ngay tại đó, cùng chỗ	on the spot, just there
ἀφαιρέω	ἀφαιρέω, ἀφαιρήσω, ἀφείλον, ἀφήρηκα, ἀφήρημαι, ἀφηρέθην	động từ	lấy đi, tước đoạt	take away, remove
ἀφίημι	ἀφίημι, ἀφήσω, ἀφήκα, ἀφεῖκα, ἀφεῖμαι, ἀφείθην	động từ	đem đi; thả, buông; tha	send away; let go, release
ἄχθομαι	ἄχθομαι	động từ	bực bội, khó chịu	be vexed, annoyed
βιόω (ζήω)	βιόω (ζήω), βιώσομαι, Impf. ἐβίων, βεβίωκα	động từ	sống (βιωτός: đáng sống)	live
βροτός	βροτός, ή, όν	tính từ	phải chết, mong manh	mortal
γλυκύς	γλυκύς, γλυκεῖα, γλυκύ	tính từ	ngọt, êm ái	sweet, pleasant
γλῶττα	γλῶττα γλώττης, ἡ	danh từ	lưỡi; ngôn ngữ	tongue; language
γοῦν	γοῦν	tiểu từ	thì ít nhất, dẫu vậy	at least, at any rate
δαιμόνιον	δαιμόνιον δαιμονίου, τό	danh từ	vị thần; tiếng thần linh, điềm	divine sign, divinity
δέκα	δέκα	số từ	mười	ten
διανοέομαι	διανοέομαι	động từ	suy nghĩ, để tâm	think, intend, reflect
διέρχομαι	διέρχομαι	động từ	băng qua, xuyên qua; bàn kỹ	go through, traverse
δικαιόω	δικαιόω	động từ	cho là phải, biện minh	consider right, justify
εἰ γάρ		tiểu từ	ước gì (+optative)	if only, would that
εἴδωλον	εἴδωλον εἰδώλου, τό	danh từ	hình bóng; tượng thần	image, phantom, idol
εἶεν	εἶεν	tiểu từ	thôi vậy, được rồi (chấp nhận trong đối thoại)	be it so, very well
εἰκός	εἰκός εἰκότος, τό	danh từ	điều hợp lý, có vẻ thế	likelihood, probability (→ ἔοικα)
εἴωθα	εἴωθα	động từ	quen thói, hay làm (hoàn thành mang nghĩa hiện tại)	be accustomed (perfect with present meaning)
ἐκάστοτε	ἐκάστοτε	trạng từ	mỗi lần, luôn luôn	every time, always
ἑκατόν	ἑκατόν	số từ	một trăm	hundred
ἐκβάλλω	ἐκβάλλω, ἐκβαλῶ, ἐξέβαλον, ἐκβέβληκα, ἐκβέβλημαι, ἐξεβλήθην	động từ	quăng ra, trục xuất, lưu đày	throw out, expel, banish
ἐλέγχω / ἐξελέγχω	ἐλέγχω / ἐξελέγχω	động từ	soi xét, vạch trần; bác bỏ	cross-examine, refute
ἐλπίς	ἐλπίς ἐλπίδος, ἡ	danh từ	hy vọng; sự trông đợi	hope, expectation
ἔμπειρος	ἔμπειρος, ον	tính từ	có kinh nghiệm, thạo	experienced, versed
ἐμπίπτω	ἐμπίπτω	động từ	fall into, befall	fall into, befall
ἐν ᾧ		liên từ	trong lúc, trong khi	while, in which
ἐναντιόομαι	ἐναντιόομαι, ἐναντιώσομαι, ἠναντιώθην, ἠναντίωμαι	động từ	chống đối, kháng cự	oppose, withstand
ἐνθάδε	ἐνθάδε	trạng từ	đến đây, ở đây	hither, here
ἐνθυμέομαι	ἐνθυμέομαι	động từ	suy ngẫm, cân nhắc	consider, ponder
ἐνίοτε	ἐνίοτε	trạng từ	đôi khi, thỉnh thoảng	sometimes, at times
ἐννοέω	ἐννοέω	động từ	suy nghĩ, thấu hiểu	think; understand
ἐξ οὗ		liên từ	kể từ khi	since, from which
ἔοικα	ἔοικα (Part. ἐοικώς / εἰκώς)	động từ	dường như; giống như (hoàn thành mang nghĩa hiện tại)	seem; be like (perf. with present meaning)
ἐπαγγέλλομαι	ἐπαγγέλλομαι	động từ	hứa hẹn; nhận làm	profess, promise, engage
ἐπεὶ πρῶτον / ἐπεὶ τάχιστα		liên từ	ngay khi, vừa khi	as soon as
ἔπειμι	ἔπειμι	động từ	đến tận, áp sát	go to, come up to; attack
ἐπιδείκνυμι	ἐπιδείκνυμι	động từ	trình diễn, phô trương	show off, display, exhibit
ἐπιθυμία	ἐπιθυμία ἐπιθυμίας, ἡ	danh từ	lòng ham muốn, dục vọng	desire, appetite, lust
ἐπιτίθημι	ἐπιτίθημι	động từ	đặt lên; gây cho; M.: công kích	lay upon; inflict; attack
ἔρημος	ἔρημος, η, ον	tính từ	vắng vẻ, hoang vắng	desolate, lonely; without (+gen)
ἔρως	ἔρως ἔρωτος, ὁ	danh từ	tình yêu, lòng khao khát	love, desire
ἐσπέρα	ἐσπέρα ἐσπέρας, ἡ	danh từ	buổi chiều, chiều tối	evening, west
ἔσχατος	ἔσχατος, η, ον	tính từ	cuối cùng, tột đỉnh	last, utmost, extreme
εὐδαιμονέω	εὐδαιμονέω	động từ	sống hạnh phúc, được phúc lành	be happy, prosper
ἐφίστημι	ἐφίστημι	động từ	đặt lên đầu, đứng ra; đem đến	place upon; set over, come upon
Ζεύς	Ζεύς Διός, Διί, Δία	danh từ	thần Zeus (νὴ Δία: thề là phải; μὰ Δία: thề là không)	Zeus
ζηλόω	ζηλόω	động từ	ganh tị, khao khát; theo đuổi, ngưỡng mộ	emulate, envy; admire
ζημία	ζημία ζημίας, ἡ	danh từ	hình phạt; thiệt hại	penalty, punishment; loss
ᾗ	ᾗ	trạng từ	ở đâu; bằng cách nào (trạng từ quan hệ từ ὅς)	where; in which way
ἦθος	ἦθος ἤθους, τό	danh từ	tính tình, bản chất; thói quen	character; habit
ἥρως	ἥρως ἥρωος, ὁ	danh từ	anh hùng, bậc phi thường	hero, demigod
θερμός	θερμός, θερμή, θερμόν	tính từ	ấm, nóng	warm, hot
θηράω (θηρεύω)	θηράω (θηρεύω)	động từ	đi săn, săn đuổi	hunt
ἰδιώτης	ἰδιώτης ἰδιώτου, ὁ	danh từ	thường dân, người ngoài nghề	private person, layman
ἴημι	ἴημι, ἵω, εἶκα, εἶμαι, εἴθην	động từ	xúc động; M.: lao tới	set in motion; rush
ἵππος	ἵππος ἵππου, ὁ	danh từ	con ngựa	horse
ἴσος	ἴσος, ίση, ἴσον	tính từ	bằng nhau; công bằng	equal; just
καιρός	καιρός καιροῦ, ὁ	danh từ	thời điểm thích hợp, cơ hội	the right moment, opportunity
καίτοι	καίτοι	tiểu từ	nhưng mà; và thật	and yet; and in fact
καρδία	καρδία καρδίας, ἡ	danh từ	trái tim, tấm lòng	heart
κατανοέω	κατανοέω	động từ	quan sát, thấu hiểu	observe, notice, understand
καταφρονέω	καταφρονέω	động từ	khinh thường, coi rẻ	despise, look down on
καταψηφίζομαι	καταψηφίζομαι	động từ	kết án (ai +Sở về việc gì +Đối)	condemn, vote guilty
κατέχω	κατέχω (Impf. κατεῖχον), καθέξω / κατασχήσω, κατέσχον	động từ	nén giữ, chiếm giữ	hold down, occupy, possess
κέρδος	κέρδος κέρδους, τό	danh từ	lời, lợi	gain, profit
κολάζω	κολάζω	động từ	trừng phạt; chế ngự	punish; curb, chasten
κρατέω	κρατέω, κρατήσω, ἐκράτησα, κεκράτηκα, κεκράτημαι, ἐκρατήθην	động từ	mạnh hơn (ai +Sở), lấn át; thắng (ai +Đối)	be stronger than, rule; defeat
κράτος	κράτος κράτους, τό	danh từ	sức mạnh, quyền lực	might, power
λογίζομαι	λογίζομαι, ἐλογισάμην, λελόγισμαι, ἐλογίσθην	động từ	tính toán, suy tính	reckon, calculate; consider
μακάριος (μάκαρ)	μακάριος, α, ον (μάκαρ)	tính từ	phúc lành, hạnh phúc	blessed, happy
μάντις	μάντις μάντεως, ὁ	danh từ	thầy bói, người tiên tri	seer, prophet
μέγεθος	μέγεθος μεγέθους, τό	danh từ	độ lớn, tầm vóc	size, magnitude, stature
μνήμη	μνήμη μνήμης, ἡ	danh từ	ký ức, sự ghi nhớ	memory, remembrance
μύριοι	μύριοι, αι, α	số từ	mười nghìn; vô số	ten thousand, countless
νῆσος	νῆσος νήσου, ἡ	danh từ	hòn đảo	island
νοέω	νοέω	động từ	suy nghĩ, nhận thức; có ý định	think, perceive; intend
νόμιμος	νόμιμος, η, ον	tính từ	theo luật, hợp pháp	lawful, according to custom
οἴχομαι	οἴχομαι (Impf. ὤχόμην), οἰχήσομαι, ὤχημαι	động từ	đi khỏi, biến mất; (+phân từ) mất tích; chết	go away, vanish; die
ὅπη	ὅπη	trạng từ	đâu, nơi nào; theo cách nào	where, how
ὁποῖος	ὁποῖος, α, ον	đại từ	thuộc loại nào, như thế nào	of what sort
ὀργή	ὀργή ὀργῆς, ἡ	danh từ	bản năng; cơn thịnh nộ	temper, anger, wrath
ὀρίζω	ὀρίζω	động từ	định ranh, xác định, định nghĩa	define, mark off
ὅσος	ὅσος, ὅση, ὅσον	đại từ	bao nhiêu là thế; tất cả những ai	how much/how many; all who	ὅσος ὅση ὅσον ὅσου ὅσῃ ὅσῳ ὅσον ὅσην ὅσοι ὅσαι ὅσα ὅσων ὅσοις ὅσαις ὅσους ὅσας
οὐδέποτε	οὐδέποτε	trạng từ	chưa bao giờ, không bao giờ	never
οὐδέτερος	οὐδέτερος, α, ον	đại từ	không (một) nào (trong hai)	neither (of two)
ὀφείλω	ὀφείλω, ὀφειλήσω, ὤφελον	động từ	nợ; phải, nên	owe; ought, must
πάντως	πάντως	trạng từ	hoàn toàn; chắc chắn	entirely; by all means, surely
παραπλήσιος	παραπλήσιος, ον	tính từ	giống như, tương tự	similar, like
πείθω	πείθω, πείσω, ἔπεισα, πέποιθα, πέπεισμαι, ἐπείσθην	động từ	thuyết phục (πέποιθα: tin tưởng)	persuade; (perf.) trust, believe
πέτρα / πέτρος	πέτρα πέτρᾱς, ἡ / πέτρος πέτρου, ὁ	danh từ	đá tảng, vách đá	rock, cliff
πιστεύω	πιστεύω, πιστεύσω, ἐπίστευσα, πεπίστευκα, πεπίστευμαι, ἐπιστεύθην	động từ	tin, tin tưởng	believe, trust
πλήθος	πλήθος πλήθους, τό	danh từ	số đông, khối lượng	multitude, mass, quantity
ποίησις	ποίησις ποιήσεως, ἡ	danh từ	sáng tác, thi ca	poetry, poetic art
προθυμέομαι	προθυμέομαι, προθυμήσομαι, προεθυμήθην	động từ	sẵn lòng, hăng hái	be eager, willing
προσήκω	προσήκω, προσήξω	động từ	thuộc về, hợp với (+Tặng); προσήκει: là điều đứng đắn	belong to; it is fitting
προστίθημι	προστίθημι, προθήσω, προσεθήκα, προτέθηκα, προτέθειμαι, προσετέθην	động từ	thêm vào; M.: theo cùng, gia nhập	add to; join
πρόσωπον	πρόσωπον προσώπου, τό	danh từ	khuôn mặt; nhân vật	face; person, character
ῥέω	ῥέω	động từ	chảy	flow, stream
σημαίνω	σημαίνω	động từ	báo hiệu, chỉ rõ; truyền lệnh	signal, signify; command
σπουδάζω	σπουδάζω	động từ	chăm chú, nôn nao; nỗ lực	hasten, be eager; be serious
στάσις	στάσις στάσεως, ἡ	danh từ	sự nổi dậy, biến loạn; phe phái	revolt, faction; standing
σύμφημι	σύμφημι	động từ	đồng ý, tán thành	agree with, assent
συνίημι	συνίημι	động từ	hiểu, lĩnh hội; nghe thấy	understand, comprehend; hear
σχῆμα	σχῆμα σχήματος, τό	danh từ	dáng vẻ, tư thế, hình thức	figure, posture, form
σχολή	σχολή σχολῆς, ἡ	danh từ	thì giờ rảnh; nơi học, trường	leisure; school
σωτήρ	σωτήρ σωτῆρος, ὁ	danh từ	vị cứu tinh	saviour, deliverer
σωφρονέω	σωφρονέω	động từ	sống chừng mực, sáng suốt	be sensible, be moderate
τεκμήριον	τεκμήριον τεκμηρίου, τό	danh từ	dấu chứng, bằng chứng	indication, proof, token
τέτταρες	τέτταρες, τέτταρα	số từ	bốn	four
τίνω	τίνω, τείσω, ἔτεισα	động từ	trả; đền tội; M.: trừng phạt, trả thù	pay, pay penalty
τολμάω	τολμάω, τολμήσω, ἐτόλμησα, τετόλμηκα, τετόλμημαι, ἐτολμήθην	động từ	dám, liều lĩnh	dare, venture
ποτέ	ποτέ	trạng từ	một lúc nào đó; từng	sometime, ever
τύπτω	τύπτω	động từ	đánh, quất	strike, beat
τύραννος	τύραννος τυράννου, ὁ	danh từ	bạo chúa; vua	tyrant, absolute ruler
ὕβρις	ὕβρις ὕβρεως, ἡ	danh từ	lối kiêu căng, điều sỉ nhục, bạo ngược	wantonness, insolence, assault
ὑγιής	ὑγιής, ὑγιές	tính từ	lành mạnh	healthy, sound
ὕπνος	ὕπνος ὕπνου, ὁ	danh từ	giấc ngủ	sleep
ὑπολαμβάνω	ὑπολαμβάνω, ὑπολήψομαι, ὑπέλαβον	động từ	đoán; cướp lời, đáp lại	suppose; take up, reply
φάρμακον	φάρμακον φαρμάκου, τό	danh từ	thuốc; chất độc	drug, remedy; poison
φάσκω	φάσκω	động từ	cho là, khẳng định	assert, claim
φράζω	φράζω, φράσω, ἔφρασα, πέφρακα, πέφρασμαι, ἐφράσθην	động từ	nói, trình bày; chỉ dạy	tell, explain; show
φρονέω	φρονέω	động từ	nghĩ, để tâm; có tâm trí (εὖ φρονεῖν: tốt bụng)	think; be minded
φροντίζω	φροντίζω	động từ	lo lắng, chú tâm (đến ai +Sở)	care for, be concerned
φύομαι	φύομαι, φύσομαι, ἔφυν, πέφυκα	động từ	lớn lên, phát sinh (πέφυκα: vốn dĩ là)	grow, spring up; (perf.) be by nature
φύω	φύω, φύσω, ἔφυσα	động từ	sinh sôi, trồng; đâm chồi	produce, beget; grow
φῶς	φῶς φωτός, τό	danh từ	ánh sáng, luồng sáng	light
χέω	χέω	động từ	đổ, rót	pour, pour out
χορός	χορός χοροῦ, ὁ	danh từ	điệu múa, vũ đoàn	dance, chorus; band of dancers
χρῶμα	χρῶμα χρώματος, τό	danh từ	màu sắc	colour
ψυχρός	ψυχρός, ά, όν	tính từ	lạnh, giá lạnh	cold, chill
ὥδε	ὥδε	trạng từ	như thế, như sau	thus, as follows
ὡς τάχιστα		trạng từ	ngay khi, chóng vánh	as soon as possible
ὡσαύτως	ὡσαύτως	trạng từ	cũng thế, tương tự	likewise, in like manner
ἀγρός	ἀγρός ἀγροῦ, ὁ	danh từ	cánh đồng, ruộng	field
βλέπω	βλέπω, βλέψομαι, ἔβλεψα	động từ	nhìn, ngắm nhìn	look, see
δημόσιος	δημόσιος, α, ον	tính từ	thuộc nhà nước, công (δημοσίᾳ: công khai; trái: ἰδίᾳ)	public, official
δύο	δύο	số từ	hai	two
ἐπιτρέπω	ἐπιτρέπω	động từ	trao phó; cho phép, thuận	entrust; permit
ἐργάζομαι	ἐργάζομαι, ἐργάσομαι, εἰργασάμην, εἰργασμαι	động từ	làm việc, thực hiện; làm ra	work, do; produce
θαυμάσιος (θαυμαστός)	θαυμάσιος, α, ον (θαυμαστός)	tính từ	kỳ diệu, đáng kinh ngạc	wonderful, marvellous
μέγας	μέγας, μεγάλη, μέγα	tính từ	to lớn, vĩ đại (so sánh μείζων, cao cấp μέγιστος)	large, great
ναός (νεώς)	ναός (νεώς), ναοῦ (νεώ), ὁ	danh từ	đền thờ	temple
τέλος	τέλος τέλους, τό	danh từ	điểm kết thúc; mục đích ((τὸ) τέλος adv: cuối cùng)	end; goal, purpose
ὑπάρχω	ὑπάρχω, ὑπάρξω, ὕπηρξα, ὕπηργμαι, ὕπηρχθην	động từ	vốn có, sẵn có; khởi đầu	exist, be available; begin
ἄγγέλλω	ἄγγελλω, ἀγγελῶ, ἤγγειλα, ἤγγελκα, ἤγγελμαι, ἤγγέλθην	động từ	báo tin, truyền tin	announce, report
`
};
