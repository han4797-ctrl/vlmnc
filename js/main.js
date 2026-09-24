const INQUIRY_MAIL = "han4797@gmail.com";
const LANG_KEY = "vl-lang";

const i18n = {
  ko: {
    skip: "본문으로 건너뛰기",
    "brand.tag": "Resources Trading",
    "nav.about": "회사소개",
    "nav.products": "취급품목",
    "nav.briefing": "보고서",
    "nav.network": "해도",
    "prof.sec.eyebrow": "Reports",
    "prof.sec.title": "배포용 보고서",
    "prof.sec.lead": "바이어용 소개서·브리핑과, 제조사에 바로 보낼 1페이지 파트너 브리프를 따로 두었습니다. 제조사 브리프는 한 장 전체를 여기서 볼 수 있습니다.",
    "prof.tab.kind": "요약 · 9p PDF",
    "brief.tab.kind": "요약 · 7p PDF",
    "mfr.tab.kind": "전문 · 1p",
    "prof.toc.kicker": "Contents",
    "prof.toc.t": "PDF 문서 구성 · 9페이지",
    "prof.toc.lead": "조직도·품목 상세·소싱 거점·거래 프로세스는 아래 페이지들에서 더 자세히 다룹니다. 인쇄해서 그대로 전달하셔도 됩니다.",
    "brief.toc.t": "PDF 문서 구성 · 7페이지",
    "brief.market.src": "위 수치는 공개 무역통계를 정리한 참고값이며 인용 시점에 따라 갱신됩니다.",
    "prof.toc.01.t": "회사 개요",
    "prof.toc.01.d": "VL M&amp;C · 자원 무역",
    "prof.toc.02.t": "기업 정보",
    "prof.toc.02.d": "상호·대표·거점·사업 영역·연락처",
    "prof.toc.03.t": "조직과 거점",
    "prof.toc.03.d": "인천 · 서울",
    "prof.toc.04.t": "구간별 책임",
    "prof.toc.04.d": "소싱·검사·서류·통관·납품·클레임 담당 구분",
    "prof.toc.05.t": "운영 원칙",
    "prof.toc.05.d": "규격 확인 · 품질 검수 · 물류 연결",
    "prof.toc.06.t": "취급 품목",
    "prof.toc.06.d": "8품목 설명·대표 HS·공급 포인트",
    "prof.toc.07.t": "글로벌 소싱 네트워크",
    "prof.toc.07.d": "7개 산지의 역할",
    "prof.toc.08.t": "견적부터 인도까지",
    "prof.toc.08.d": "4단계 실행 프로세스",
    "prof.toc.09.t": "연락처",
    "prof.toc.09.d": "한국 연락처와 함께 보면 좋은 자료",
    "brief.toc.01.t": "요약",
    "brief.toc.01.d": "검수 전제·규격 우선·단계적 확대",
    "brief.toc.02.t": "시장 맥락",
    "brief.toc.02.d": "구리 스크랩·우드펠릿·EN590 수요 맥락",
    "brief.toc.03.t": "취급 품목과 계약 포인트",
    "brief.toc.03.d": "품목별로 계약에서 맞추는 것",
    "brief.toc.04.t": "소싱 네트워크",
    "brief.toc.04.d": "필리핀·카자흐스탄·퍼스·칼리만탄·술라웨시·파푸아·DRC/잠비아",
    "brief.toc.05.t": "검수와 인도",
    "brief.toc.05.d": "수요 파악 → 소싱·검수 → 물류 → 사후",
    "brief.toc.06.t": "거래를 시작하는 방법",
    "brief.toc.06.d": "요구사항 정리 → 오퍼 → 시험 선적",
    "brief.toc.07.t": "문의",
    "brief.toc.07.d": "회신을 빠르게 받는 요청 양식",
    "nav.process": "항해",
    "nav.contact": "문의",
    "nav.inquiry": "견적 문의",
    "hero.eyebrow": "VL M&amp;C · Resources Trading",
    "hero.title1": "신대륙을 찾듯",
    "hero.title2": "자원을 찾아 나섭니다",
    "hero.cta1": "취급 품목 보기",
    "hero.cta2": "견적 상담",
    "hero.s1": "자원 산지",
    "hero.s3n": "인천 · 서울",
    "hero.s3": "소싱 · 발주 · 계약 · 검수 · 인도",
    "about.eyebrow": "The Company",
    "about.title": "미지의 산지를 찾아,\n끝까지 책임집니다",
    "about.p1": "VL M&amp;C는 비철금속·정광·슬래그·우드펠릿·EN590·카올린을 소싱하고 인도합니다.",
    "about.p2": "해도에 없는 산지라도 찾아 갑니다. 단순 중개가 아닙니다. 규격·품질·물류를 함께 관리하고, 필요한 사양과 물량, 납기를 기준으로 소싱부터 인도까지 맞춰 드립니다.",
    "about.pr1t": "규격 확인",
    "about.pr1p": "등급·사양·성분 기준으로 조건을 맞춥니다.",
    "about.pr2t": "품질 검수",
    "about.pr2p": "공급 전 물량과 상태를 확인하고 인도합니다.",
    "about.pr3t": "물류 연결",
    "about.pr3p": "산지 선적부터 한국 하역까지 일정을 맞춥니다.",
    "about.cap": "한국 거점에서 자원 물류를 맞춥니다.",
    "about.f1t": "사업",
    "about.f1d": "자원 무역",
    "about.f2t": "품목",
    "about.f2d": "8종",
    "about.f3t": "하역",
    "about.f3d": "울산",
    "about.f4t": "한국",
    "about.f4d": "인천 · 서울",
    "partner.vl.en": "Korea",
    "partner.vl.role": "소싱 · 발주 · 계약 · 검수 · 인도",
    "org.eyebrow": "Organization",
    "org.title": "회사 조직도",
    "org.lead": "한 회사가 세 품목군을 직접 다룹니다.",
    "org.company.kicker": "VL M&C",
    "org.company.base": "자원 무역",
    "org.cargo": "취급 품목",
    "org.desk.kr.t": "인천 · 서울",
    "org.met.en": "Metals",
    "org.met.t": "비철금속",
    "org.met.1": "구리 스크랩 · 구리 정광",
    "org.met.2": "알루미늄 잉곳",
    "org.met.3": "주석 · 니켈 슬래그",
    "org.ene.en": "Energy",
    "org.ene.t": "에너지",
    "org.ene.1": "산업용 우드펠릿",
    "org.ene.2": "EN590 경유",
    "org.ene.3": "울산 하역 기준 문의",
    "org.min.en": "Minerals",
    "org.min.t": "산업광물",
    "org.min.1": "카올린 · 고령토",
    "org.min.2": "벨리퉁 산지",
    "org.min.3": "누들 · 괴상 · 분체",
    "prof.tag": "Company Profile · Resources Trading",
    "prof.cover.title": "산지에서 인도까지",
    "prof.lead": "VL M&amp;C가 자원 무역을 진행합니다. 비철금속 스크랩, 구리 정광, 알루미늄 잉곳, 제련 슬래그, 산업용 우드펠릿, EN590 경유, 카올린을 규격·품질·물류와 함께 맞춥니다.",
    "prof.meta": "2026 · 바이어·파트너 배포용 · 인천 · 서울",
    "prof.about.kicker": "About",
    "prof.about.t": "회사 소개",
    "prof.about.p": "VL M&amp;C는 자원 무역 회사입니다.",
    "prof.about.box": "단순 중개가 아닙니다. 등급·성분·이물을 먼저 맞추고, 검사 결과로 인도합니다.",
    "prof.th.field": "항목",
    "prof.th.value": "내용",
    "prof.field.name": "상호",
    "prof.field.vlbase": "한국",
    "prof.field.scope": "사업 영역",
    "prof.field.scopev": "자원 무역 / B2B 소싱 · 검수 · 수출입 · 납품",
    "prof.field.items": "자원 취급",
    "prof.disc": "본 소개서는 일반 안내입니다. 가격·재고·선적 일정은 문의 시점의 오퍼와 검사 결과에 따릅니다. 품목별 수출입 인허가는 계약 전 관세사 및 현지 규정으로 확인합니다.",
    "div.res.d": "구리 스크랩 · 구리 정광 · 알루미늄 잉곳 · 주석/니켈 슬래그 · 우드펠릿 · EN590 경유 · 카올린",
    "products.eyebrow": "Cargo",
    "products.title": "취급 품목",
    "products.lead": "비철금속·에너지·산업광물 세 품목군입니다. 사진과 핵심 규격을 보고 고르시면, 카탈로그는 문의 후 보내 드립니다.",
    "network.eyebrow": "The Chart",
    "network.title": "신대륙을 여는 해도",
    "network.lead": "구리 정광은 필리핀, 알루미늄은 카자흐스탄과 호주 퍼스, 우드펠릿은 칼리만탄, 니켈은 술라웨시, 구리 스크랩은 파푸아와 DRC·잠비아에서 소싱합니다. EN590 경유는 울산 하역을 기준으로 문의합니다. 항만 거점은 다르에스살람과 자카르타입니다. 한국 본사는 VL M&amp;C입니다.",
    "network.map.alt": "필리핀 구리 정광, 카자흐스탄·퍼스 알루미늄, 칼리만탄 우드펠릿, 술라웨시 니켈, 파푸아·DRC/잠비아 구리, 울산 EN590과 다르에스살람·자카르타·서울 거점을 표시한 세계 지도",
    "network.legend.resource": "자원 공급 거점",
    "network.tag.resourceHub": "자원 거점",
    "network.tag.vlHub": "한국 거점",
    "network.tag.concentrate": "구리 정광",
    "network.tag.aluminum": "알루미늄",
    "network.tag.aluminumHub": "알루미늄 · 거점",
    "network.philippines": "필리핀",
    "network.philippines.country": "필리핀",
    "network.philippines.desc": "필리핀 구리 정광 공급 거점",
    "network.tag.wood": "우드펠릿",
    "network.tag.diesel": "EN590",
    "network.tag.copper": "구리",
    "network.tag.nickel": "니켈",
    "network.kazakhstan": "카자흐스탄",
    "network.kazakhstan.country": "카자흐스탄",
    "network.kazakhstan.desc": "중앙아시아 알루미늄 공급 거점",
    "network.perth": "퍼스",
    "network.perth.country": "호주",
    "network.perth.desc": "서호주 알루미늄 공급 거점",
    "network.kalimantan": "칼리만탄",
    "network.kalimantan.country": "인도네시아",
    "network.kalimantan.desc": "보르네오 우드펠릿 공급 거점",
    "network.sulawesi": "술라웨시",
    "network.sulawesi.country": "인도네시아",
    "network.sulawesi.desc": "술라웨시 니켈 공급 거점",
    "network.papua": "파푸아",
    "network.papua.country": "인도네시아",
    "network.papua.desc": "파푸아 구리 공급 거점",
    "network.drc": "DRC · 잠비아",
    "network.drc.country": "콩고민주공화국 · 잠비아",
    "network.drc.desc": "중부아프리카 구리 공급 거점",
    "network.tanzania": "다르에스살람",
    "network.tanzania.country": "탄자니아",
    "network.tanzania.desc": "아프리카 동부 인도양 항만 자원 공급 거점",
    "network.indonesia": "자카르타",
    "network.indonesia.country": "인도네시아",
    "network.indonesia.desc": "자와섬 항만 자원 공급 거점",
    "network.korea": "인천 · 서울",
    "network.korea.country": "대한민국",
    "network.korea.desc": "VL M&amp;C 본사가 있는 한국 거점입니다.",
    "network.ulsan": "울산",
    "network.ulsan.country": "대한민국",
    "network.ulsan.desc": "한국 경유 하역 거점. 문의 시점 오퍼 기준",
    "network.legend.korea": "한국",
    "track.badge": "시연 · Demo",
    "track.title": "선적 추적",
    "track.lead": "샘플 B/L 번호를 넣으면 가상 항로가 지도에 표시됩니다. 실제 선사 추적과 연결되어 있지 않습니다.",
    "track.label": "B/L 번호",
    "track.ph": "VL-DAR-2608-001",
    "track.go": "추적",
    "track.samples": "샘플 번호",
    "track.note": "본 기능은 홈페이지 시연용입니다. 실제 컨테이너 위치·ETA는 계약 후 선사·포워더 자료로 안내합니다.",
    "track.unknown": "이 번호는 데모 샘플이 아닙니다. 아래 샘플 B/L을 눌러 보세요.",
    "track.hud.bl": "B/L",
    "track.hud.vessel": "선박",
    "track.hud.cargo": "화물",
    "track.hud.route": "구간",
    "track.status.search": "조회 중",
    "track.status.depart": "출항",
    "track.status.transit": "해상 운송 중",
    "track.status.arrive": "입항",
    "track.status.done": "도착",
    "track.cargo.cu": "구리 스크랩",
    "track.cargo.wood": "우드펠릿",
    "track.cargo.en590": "EN590 경유",
    "track.vessel.dar": "MV VL DARWIN",
    "track.vessel.jkt": "MV VL JAVA",
    "track.vessel.usn": "MV VL ULSD",
    "track.route.dar": "다르에스살람 → 자카르타 → 인천",
    "track.route.jkt": "자카르타 → 인천",
    "track.route.usn": "해상 → 울산",
    "hall.res.kicker": "Resources Digital Showroom",
    "spec.form": "형태",
    "spec.grade": "등급",
    "spec.ctrl": "관리",
    "spec.use": "용도",
    "spec.match": "매칭",
    "spec.prio": "우선",
    "spec.type": "구분",
    "spec.basis": "기준",
    "spec.src": "발생",
    "spec.loop": "순환",
    "spec.std": "규격",
    "spec.s": "황",
    "spec.port": "하역",
    "p.catalog": "카탈로그 요청",
    "p.copper.badge.metal": "비철 원료",
    "p.copper.badge.form": "전선 · 파이프",
    "p.copper.badge.grade": "국제 등급",
    "p.copper.badge.use": "전기 · 건설",
    "p.copper.spec.grade.v": "밀베리 · 버치 등",
    "p.copper.spec.use.v": "전기 · 건설 · 제조",
    "p.conc.badge.grade": "기준 품위",
    "p.conc.badge.origin": "필리핀 산지",
    "p.conc.badge.form": "정광",
    "p.conc.badge.term": "한국항 하역",
    "p.conc.spec.term.v": "CIF 한국항 · FOB 문의",
    "p.conc.spec.use.v": "제련소용 원료",
    "spec.origin": "산지",
    "spec.term": "조건",
    "p.alu.badge.metal": "재생 잉곳",
    "p.alu.badge.grade": "주조 규격",
    "p.alu.badge.assay": "성분표 매칭",
    "p.alu.badge.flow": "연속 공급",
    "p.alu.spec.use.v": "다이캐스팅 · 주조",
    "p.alu.spec.prio.v": "성분 안정 · 연속 공급",
    "p.tin.badge.metal": "주석 슬래그",
    "p.tin.badge.form": "제련 부산물",
    "p.tin.badge.assay": "함량 기준",
    "p.tin.badge.use": "유가금속 회수",
    "p.tin.spec.src.v": "주석 제련 과정",
    "p.tin.spec.form.v": "슬래그 · 회수 원료",
    "p.nick.badge.metal": "니켈 슬래그",
    "p.nick.badge.use": "스테인리스 원료",
    "p.nick.badge.alloy": "특수합금 회수",
    "p.nick.badge.loop": "자원 순환",
    "p.nick.spec.src.v": "니켈 제련 슬래그",
    "p.nick.spec.loop.v": "산업 부산물 자원 순환",
    "p.wood.badge.fuel": "바이오매스",
    "p.wood.badge.moi": "함수율 기준",
    "p.wood.badge.cal": "발열량 기준",
    "p.wood.badge.use": "보일러 · 발전",
    "p.wood.spec.ctrl.v": "함수율 · 발열량 · 규격",
    "p.wood.spec.form.v": "산업용 우드펠릿",
    "p.en590.badge.s": "초저유황",
    "p.en590.badge.std": "유럽 규격",
    "p.en590.badge.use": "수송 · 산업",
    "p.en590.badge.port": "한국 하역",
    "p.en590.spec.s.v": "10 ppm 이하",
    "p.en590.spec.port.v": "울산 · 문의 시점 오퍼",
    "p.copper.t": "구리 스크랩",
    "p.copper.d": "전선·밀베리·버치 등 국제 통용 등급의 구리 스크랩을 취급합니다. 산지는 인도네시아 파푸아와 DRC·잠비아 두 곳입니다.",
    "p.copper.1": "전선 / 동파이프 / 부스바",
    "p.copper.2": "등급별 선별 · 수분·이물 관리",
    "p.conc.t": "구리 정광",
    "p.conc.d": "필리핀산 구리 정광을 한국 제련소용으로 취급합니다. 기준 품위 Cu 약 25%, 정광(Concentrate) 기준이며 원광(ROM)은 제외합니다. 가격·재고·Assay는 문의 시점 오퍼에 따릅니다.",
    "p.conc.1": "Cu 약 25% · 정광",
    "p.conc.2": "필리핀",
    "p.alu.t": "알루미늄 잉곳",
    "p.alu.d": "다이캐스팅·주조에 쓰이는 재생 알루미늄 잉곳을 공급합니다. 성분 안정성과 연속 공급을 우선합니다.",
    "p.alu.1": "ADC12 등 주조용 잉곳",
    "p.alu.2": "성분표 기준 매칭",
    "p.tin.t": "주석 슬래그",
    "p.tin.d": "주석 제련 과정에서 발생하는 슬래그를 유통합니다. 주석 및 유가금속 회수 원료로 활용됩니다.",
    "p.tin.1": "Sn 함량 기준 소싱",
    "p.tin.2": "회수·제련 원료 공급",
    "p.nick.t": "니켈 슬래그",
    "p.nick.d": "니켈 제련 슬래그를 취급합니다. 스테인리스·특수합금 원료 회수와 산업 부산물 자원 순환에 쓰입니다.",
    "p.nick.1": "Ni 계열 제련 부산물",
    "p.nick.2": "합금 원료 회수 용도",
    "p.wood.t": "우드펠릿",
    "p.wood.d": "산업용 보일러와 발전에 쓰이는 바이오매스 연료입니다. 함수율·발열량·규격을 기준으로 안정 공급합니다.",
    "p.wood.1": "산업·발전용 고형 연료",
    "p.wood.2": "신재생 에너지 원료",
    "p.en590.t": "EN590 경유",
    "p.en590.d": "유럽 규격 EN 590 초저유황 경유를 취급합니다. 황 함량 10 ppm, 세탄가·밀도·인화점을 계약 조건으로 맞추며, 한국 하역은 울산을 기준으로 문의합니다.",
    "p.en590.1": "EN 590 · ULSD",
    "p.en590.2": "수송 · 산업 · 발전",
    "p.en590.alt": "EN590 경유 탱크 터미널",
    "p.kaolin.t": "카올린",
    "p.kaolin.d": "인도네시아 벨리퉁에서 나오는 산업용 고령토입니다. 도자기·제지·페인트 원료로, 누들·괴상·분체를 백색도와 알루미나 함량 기준으로 맞춰 한국 수요처에 공급합니다.",
    "p.kaolin.showroom": "대표 규격",
    "p.kaolin.badge.al": "Al₂O₃",
    "p.kaolin.badge.bright": "백색도",
    "p.kaolin.badge.origin": "벨리퉁",
    "p.kaolin.badge.form": "공급 형태",
    "p.kaolin.spec.origin.l": "산지",
    "p.kaolin.spec.origin.v": "인도네시아 벨리퉁",
    "p.kaolin.spec.form.l": "형태",
    "p.kaolin.spec.form.v": "누들 · 괴상 · 분체",
    "p.kaolin.spec.al.l": "Al₂O₃",
    "p.kaolin.spec.port.l": "선적항",
    "p.kaolin.spec.port.v": "탄중바투",
    "p.kaolin.note": "대표 시료 기준입니다. 계약 물량은 선적 전 검사 결과에 따릅니다.",
    "p.kaolin.gallery": "카올린 현장 사진",
    "p.kaolin.thumb.noodle": "누들 원료 보기",
    "p.kaolin.thumb.lump": "괴상 원광 보기",
    "p.kaolin.thumb.powder": "분체 보기",
    "p.kaolin.thumb.mine": "채굴 현장 보기",
    "p.kaolin.alt.noodle": "카올린 누들 원료",
    "p.kaolin.alt.lump": "카올린 괴상 원광",
    "p.kaolin.alt.powder": "카올린 분체",
    "p.kaolin.alt.mine": "카올린 노천 채굴 현장",
    "p.doc.profile": "회사 소개서",
    "p.doc.brief": "자원무역 브리핑",
    "p.doc.mfr": "제조사 파트너 브리프",
    "p.ask": "이 품목 문의",
    "brief.tag": "VL M&C · Resources Trading",
    "brief.cover.title": "자원과 현장을 연결하는 공급 브리핑",
    "brief.cover.meta": "VL-RES-BRIEF · Rev. 2026.08 · 바이어·파트너 배포용",
    "brief.intro": "구리 스크랩, 구리 정광, 알루미늄 잉곳, 주석·니켈 슬래그, 우드펠릿, EN590 경유, 카올린을 필리핀·카자흐스탄·호주·인도네시아·DRC·잠비아에서 소싱합니다. EN590은 한국 하역을 울산 기준으로 문의합니다. 가격·재고는 문의 시점의 오퍼와 검사 결과에 따릅니다.",
    "brief.s1": "취급 품목",
    "brief.s2": "자원 산지",
    "brief.s3": "인천 · 서울",
    "brief.s4": "시험 선적 후 확대",
    "brief.market.t": "시장 맥락",
    "brief.cu.t": "구리 스크랩",
    "brief.cu.p": "한국 HS 7404 수입은 2025년 약 32.3만 톤, 2026년 상반기 약 17.6만 톤입니다. 전선·밀베리 등 국제 등급과 수분·이물이 거래의 핵심입니다.",
    "brief.wood.t": "우드펠릿",
    "brief.wood.p": "2025년 한국 수입 약 392.9만 톤. 인도네시아산은 약 90만 톤(23%)으로 주요 원산지입니다. 함수율·발열량·회분을 계약 조건으로 맞춥니다.",
    "brief.en590.t": "EN590 경유",
    "brief.en590.p": "유럽 자동차용 경유 규격 EN 590입니다. 황 10 ppm, 세탄가·밀도·인화점을 계약 조건으로 맞추고, 한국 하역은 울산을 기준으로 문의합니다. 원산지·물량·가격은 문의 시점 오퍼와 검사 결과에 따릅니다.",
    "brief.disclaimer": "공개 브리핑이며 내부 거래 상대·계약 단가는 포함하지 않습니다. 회사 소개서와 함께 전달해도 됩니다.",
    "mfr.tag": "Producer Partner Brief · Resources",
    "mfr.cover.title": "생산 파트너를 위한 협업 안내",
    "mfr.cover.meta": "VL-MFR-BRIEF · Rev. 2026.08 · 제조사 배포용 · 1페이지",
    "mfr.lead": "VL M&amp;C가 자원 소싱과 인도를 진행합니다. 이 한 장은 생산 파트너에게, 견적 전에 협업 구조를 전달하기 위한 자료입니다.",
    "mfr.s1": "자원 취급 품목",
    "mfr.s2": "소싱 산지",
    "mfr.s3": "한국 거점",
    "mfr.s4": "선적 전 검사",
    "mfr.who.t": "거점",
    "mfr.vl.p": "VL M&amp;C 본사가 있는 한국 거점입니다.",
    "mfr.range.t": "취급 범위",
    "mfr.range.res.t": "8개 품목",
    "mfr.range.res.p": "구리 스크랩 · 구리 정광 · 알루미늄 잉곳 · 주석/니켈 슬래그 · 우드펠릿 · EN590 경유 · 카올린",
    "mfr.how.t": "협업 순서",
    "mfr.how.1t": "사양 확정",
    "mfr.how.1p": "등급·성분 또는 BOM을 발주 전에 고정합니다.",
    "mfr.how.2t": "샘플 · 검수",
    "mfr.how.2p": "승인 샘플 또는 지정 검사기관으로 확인합니다.",
    "mfr.how.3t": "시험 선적",
    "mfr.how.3p": "첫 물량으로 품질을 확인한 뒤 확대합니다.",
    "mfr.how.4t": "반복 공급",
    "mfr.how.4p": "선적 일정·포장·사후를 계약에 남깁니다.",
    "mfr.ask.t": "제조사에 요청하는 것  /  우리가 맡는 것",
    "mfr.need.t": "제조사에 요청하는 것",
    "mfr.need.1": "승인 샘플·성적서와 동일한 확정 사양",
    "mfr.need.2": "월 생산능력과 납기",
    "mfr.need.3": "선적 전 검사(PSI) 또는 지정 검사 입회",
    "mfr.need.4": "수출 포장·서류, PI에 Incoterms 명시",
    "mfr.need.5": "자원은 정산 기준과 검사 방법을 계약에 명시",
    "mfr.give.t": "우리가 맡는 것",
    "mfr.give.1": "인천·서울에서 소싱·발주와 계약 관리",
    "mfr.give.3": "규격 확정 후에만 발주",
    "mfr.give.4": "시험 선적 후 반복 물량",
    "mfr.give.5": "대금은 법인 계좌로만 수수",
    "mfr.next.t": "다음 단계",
    "mfr.next.p": "품목·확정 사양·월 생산능력·초도 물량을 보내 주시면, 사양 확정 시트로 회신합니다.",
    "mfr.contact.t": "문의",
    "mfr.disc": "일반 안내입니다. 가격·재고·선적 일정은 문의 시점의 오퍼에 따릅니다. 내부 거래 상대와 계약 단가는 넣지 않았습니다. 바이어용 소개서·브리핑과 별도로 제조사에 보내 주세요.",
    "process.eyebrow": "The Voyage",
    "process.title": "출항부터 인도까지",
    "process.1t": "출항 · 수요",
    "process.1p": "품목과 등급·사양, 물량, 납기를 기준으로 조건을 정리합니다.",
    "process.2t": "항해 · 검수",
    "process.2p": "국내외 공급망에서 규격에 맞는 물량을 확보하고 품질을 확인합니다.",
    "process.3t": "기항 · 인도",
    "process.3p": "선적 서류와 하역 일정을 맞춰 인도합니다.",
    "process.4t": "정박 · 사후",
    "process.4p": "반복 공급은 재고와 선적 일정을 함께 맞춥니다.",
    "contact.eyebrow": "Contact",
    "contact.title": "품목과 수량을\n알려 주세요",
    "contact.lead": "품목·수량·납기를 알려 주시면 취급 가능 여부와 조건을 회신드립니다.",
    "contact.docs": "규격서·카탈로그는 문의 후 보내 드립니다.",
    "contact.email": "이메일",
    "contact.addr": "주소",
    "contact.addr.vl": "인천광역시 서구 청라한내로72번길 7-15",
    "form.kicker": "Inquiry",
    "form.title": "견적 문의",
    "form.name": "성함 / 회사",
    "form.contact": "연락처",
    "form.contact.ph": "전화 또는 이메일",
    "form.item": "관심 품목",
    "form.optRes": "취급 품목 / Products",
    "form.optDocs": "문서 / Documents",
    "form.msg": "문의 내용",
    "form.msg.ph": "사양·등급, 예상 수량, 납기 등을 적어 주세요.",
    "form.submit": "메일로 문의 보내기",
    "form.note": "전송 시 han4797@gmail.com 메일 앱이 열립니다.",
    "form.error": "성함/회사, 연락처, 문의 내용을 모두 입력해 주세요.",
    "form.mail.subject": "[VL M&C] {item} 문의",
    "form.mail.body": "성함/회사: {name}\n연락처: {contact}\n관심 품목: {item}\n\n{message}",
    "form.sample.prefill": "{item} 샘플을 요청합니다. 수량과 납기를 협의하고 싶습니다.",
    "form.catalog.prefill": "{item} 카탈로그·명세서를 요청합니다. 필요 규격과 용도를 알려 주시면 메일로 보내 드리겠습니다.",
    "menu.open": "메뉴 열기",
    "menu.close": "메뉴 닫기",
    "brand.home": "VL M&C 홈",
    "nav.main": "주 메뉴",
    "materials.label": "취급 품목 미리보기",
    "tablist.products": "취급 품목 분류",
    "tablist.docs": "배포용 문서",
    "lang.group": "언어",
    "lang.ko": "한국어",
    "lang.id": "Bahasa Indonesia",
    "lang.en": "English",
    "lang.zh": "중국어",
    "form.item.copper": "구리 스크랩",
    "form.item.conc": "구리 정광",
    "form.item.alu": "알루미늄 잉곳",
    "form.item.tin": "주석 슬래그",
    "form.item.nick": "니켈 슬래그",
    "form.item.wood": "우드펠릿",
    "form.item.en590": "EN590 경유",
    "form.item.kaolin": "카올린",
    "form.item.pick": "품목을 선택하세요",
    "form.item.profile": "회사 소개서",
    "form.item.brief": "자원무역 브리핑",
    "form.item.mfr": "제조사 파트너 브리프",
    "form.item.resdocs": "문서 일괄 (소개서·브리핑)",
    "form.item.other": "기타",
    "footer.blurb": "신대륙을 찾듯 산지를 찾아 나섭니다. VL M&amp;C.",
    "footer.explore": "바로가기",
    "footer.contact": "연락처",
    "footer.top": "맨 위로",
    "strip.met.p": "구리 스크랩 · 구리 정광 · 알루미늄 잉곳 · 주석·니켈 슬래그",
    "strip.ene.p": "산업용 우드펠릿 · EN590 경유",
    "strip.min.p": "카올린 · 고령토",
    "panel.met.lead": "구리 스크랩·정광, 알루미늄 잉곳, 주석·니켈 슬래그. 등급과 성분 기준으로 맞춥니다.",
    "panel.ene.lead": "산업용 우드펠릿과 EN590 경유. 함수율·발열량, 황 함량 기준으로 맞추며 경유는 울산 하역 기준입니다.",
    "panel.min.lead": "인도네시아 벨리퉁산 카올린. 백색도와 알루미나 함량 기준으로 누들·괴상·분체를 공급합니다.",
  },
  en: {
    skip: "Skip to content",
    "brand.tag": "Resources Trading",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.briefing": "Reports",
    "nav.network": "The Chart",
    "prof.sec.eyebrow": "Reports",
    "prof.sec.title": "Documents to share",
    "prof.sec.lead": "A company profile and trade briefing for buyers, plus a separate one-page partner brief for manufacturers. The manufacturer brief is shown in full here.",
    "prof.tab.kind": "Summary · 9p PDF",
    "brief.tab.kind": "Summary · 7p PDF",
    "mfr.tab.kind": "Full · 1p",
    "prof.toc.kicker": "Contents",
    "prof.toc.t": "Inside the PDF · 9 pages",
    "prof.toc.lead": "The organisation chart, item details, sourcing bases and trade process are covered in more depth across these pages. Print it and hand it over as is.",
    "brief.toc.t": "Inside the PDF · 7 pages",
    "brief.market.src": "Figures above summarise public trade statistics and are updated over time.",
    "prof.toc.01.t": "Company overview",
    "prof.toc.01.d": "VL M&C · VL M&amp;C",
    "prof.toc.02.t": "Corporate data",
    "prof.toc.02.d": "Entity, principals, bases, business scope and contacts",
    "prof.toc.03.t": "Organization and locations",
    "prof.toc.03.d": "Incheon · Seoul",
    "prof.toc.04.t": "Responsibility split",
    "prof.toc.04.d": "Who owns sourcing, inspection, documents, customs, delivery and claims",
    "prof.toc.05.t": "Operating principles",
    "prof.toc.05.d": "Specification, inspection and logistics",
    "prof.toc.06.t": "Product range",
    "prof.toc.06.d": "Eight items with descriptions, HS codes and supply points",
    "prof.toc.07.t": "Global sourcing network",
    "prof.toc.07.d": "The role of each of the seven origins",
    "prof.toc.08.t": "How we work",
    "prof.toc.08.d": "The four-step execution process",
    "prof.toc.09.t": "Contact",
    "prof.toc.09.d": "Korea contact channels and related documents",
    "brief.toc.01.t": "Executive summary",
    "brief.toc.01.d": "Inspection-first, specification-led, staged scale-up",
    "brief.toc.02.t": "Market context",
    "brief.toc.02.d": "Demand context for copper scrap, wood pellets, and EN590",
    "brief.toc.03.t": "Items & contract points",
    "brief.toc.03.d": "What each item pins down in the contract",
    "brief.toc.04.t": "Sourcing network",
    "brief.toc.04.d": "Philippines, Kazakhstan, Perth, Kalimantan, Sulawesi, Papua, DRC/Zambia",
    "brief.toc.05.t": "Inspection & delivery",
    "brief.toc.05.d": "Requirements → sourcing and inspection → logistics → aftercare",
    "brief.toc.06.t": "Getting started",
    "brief.toc.06.d": "Define requirements → offer → trial shipment",
    "brief.toc.07.t": "Contact",
    "brief.toc.07.d": "The enquiry format that gets the fastest reply",
    "nav.process": "Voyage",
    "nav.contact": "Contact",
    "nav.inquiry": "Request a quote",
    "hero.eyebrow": "VL M&amp;C · Resources Trading",
    "hero.title1": "Like seeking a new world",
    "hero.title2": "we sail for resources",
    "hero.cta1": "View products",
    "hero.cta2": "Talk to us",
    "hero.s1": "Resource origins",
    "hero.s3n": "Incheon · Seoul",
    "hero.s3": "Sourcing · orders · contract · inspection · delivery",
    "about.eyebrow": "The Company",
    "about.title": "We find uncharted origins\nand see every cargo through",
    "about.p1": "VL M&amp;C sources and delivers non-ferrous metals, concentrate, slag, wood pellets, EN590, and kaolin.",
    "about.p2": "We go after origins that are not yet on the chart. This is not plain brokerage. Specification, quality, and logistics are managed together, from sourcing through delivery.",
    "about.pr1t": "Specification",
    "about.pr1p": "We match grade, spec, and composition first.",
    "about.pr2t": "Inspection",
    "about.pr2p": "Volume and condition are checked before delivery.",
    "about.pr3t": "Logistics",
    "about.pr3p": "Shipment is lined up from origin through discharge in Korea.",
    "about.cap": "Resource logistics are aligned from the Korea desk.",
    "about.f1t": "Business",
    "about.f1d": "Resource trade",
    "about.f2t": "Products",
    "about.f2d": "8 lines",
    "about.f3t": "Discharge",
    "about.f3d": "Ulsan",
    "about.f4t": "Korea",
    "about.f4d": "Incheon · Seoul",
    "partner.vl.en": "Korea",
    "partner.vl.role": "Sourcing · orders · contract · inspection · delivery",
    "org.eyebrow": "Organization",
    "org.title": "Organization",
    "org.lead": "One company, three product groups.",
    "org.company.kicker": "VL M&C",
    "org.company.base": "Resource trade",
    "org.cargo": "Products",
    "org.desk.kr.t": "Incheon · Seoul",
    "org.met.en": "Metals",
    "org.met.t": "Non-ferrous",
    "org.met.1": "Copper scrap · concentrate",
    "org.met.2": "Aluminum ingot",
    "org.met.3": "Tin · nickel slag",
    "org.ene.en": "Energy",
    "org.ene.t": "Energy",
    "org.ene.1": "Industrial wood pellets",
    "org.ene.2": "EN590 diesel",
    "org.ene.3": "Quoted on Ulsan discharge",
    "org.min.en": "Minerals",
    "org.min.t": "Industrial minerals",
    "org.min.1": "Kaolin · china clay",
    "org.min.2": "Belitung origin",
    "org.min.3": "Noodle · lump · powder",
    "prof.tag": "Company Profile · Resources Trading",
    "prof.cover.title": "From origin to delivery",
    "prof.lead": "VL M&amp;C trades resources. We match grade, quality, and logistics for non-ferrous scrap, copper concentrate, aluminum ingot, smelting slag, industrial wood pellets, EN590 diesel, and kaolin.",
    "prof.meta": "2026 · For buyers and partners · Incheon · Seoul",
    "prof.about.kicker": "About",
    "prof.about.t": "The company",
    "prof.about.p": "VL M&amp;C is a resource trading company.",
    "prof.about.box": "This is not plain brokerage. We match grade first, then deliver against inspection.",
    "prof.th.field": "Item",
    "prof.th.value": "Detail",
    "prof.field.name": "Name",
    "prof.field.vlbase": "Korea base",
    "prof.field.scope": "Scope",
    "prof.field.scopev": "Resource trade / B2B sourcing, inspection, import-export, delivery",
    "prof.field.items": "Resources we handle",
    "prof.disc": "This profile is general guidance. Price, stock, and shipment timing follow the offer and inspection at inquiry. Import/export permits are confirmed with a customs broker and local rules before contract.",
    "div.res.d": "Copper scrap · Copper concentrate · Aluminum ingot · Tin/Nickel slag · Wood pellets · EN590 diesel · Kaolin",
    "products.eyebrow": "Cargo",
    "products.title": "What we supply",
    "products.lead": "Three groups: non-ferrous metals, energy, and industrial minerals. Review photos and key specs here; catalogs are sent after inquiry.",
    "network.eyebrow": "The Chart",
    "network.title": "A chart for new origins",
    "network.lead": "Copper concentrate from the Philippines; aluminum from Kazakhstan and Perth; wood pellets from Kalimantan; nickel from Sulawesi; copper scrap from Papua and DRC/Zambia. EN590 diesel is inquired against Ulsan discharge. Port hubs are Dar es Salaam and Jakarta. VL M&amp;C handles sourcing and delivery.",
    "network.map.alt": "World map showing copper concentrate in the Philippines, aluminum in Kazakhstan and Perth, wood pellets in Kalimantan, nickel in Sulawesi, copper in Papua and DRC/Zambia, EN590 at Ulsan, plus hubs in Dar es Salaam, Jakarta, and Seoul",
    "network.legend.resource": "Resource sourcing",
    "network.tag.resourceHub": "Resource hub",
    "network.tag.vlHub": "Korea hub",
    "network.tag.concentrate": "Copper concentrate",
    "network.tag.aluminum": "Aluminum",
    "network.tag.aluminumHub": "Aluminum · hub",
    "network.philippines": "Philippines",
    "network.philippines.country": "Philippines",
    "network.philippines.desc": "Philippine copper concentrate supply hub",
    "network.tag.wood": "Wood pellets",
    "network.tag.diesel": "EN590",
    "network.tag.copper": "Copper",
    "network.tag.nickel": "Nickel",
    "network.kazakhstan": "Kazakhstan",
    "network.kazakhstan.country": "Kazakhstan",
    "network.kazakhstan.desc": "Central Asian aluminum supply hub",
    "network.perth": "Perth",
    "network.perth.country": "Australia",
    "network.perth.desc": "Western Australia aluminum supply hub",
    "network.kalimantan": "Kalimantan",
    "network.kalimantan.country": "Indonesia",
    "network.kalimantan.desc": "Borneo wood-pellet supply hub",
    "network.sulawesi": "Sulawesi",
    "network.sulawesi.country": "Indonesia",
    "network.sulawesi.desc": "Sulawesi nickel supply hub",
    "network.papua": "Papua",
    "network.papua.country": "Indonesia",
    "network.papua.desc": "Papua copper supply hub",
    "network.drc": "DRC · Zambia",
    "network.drc.country": "Democratic Republic of the Congo · Zambia",
    "network.drc.desc": "Central Africa copper supply hub",
    "network.tanzania": "Dar es Salaam",
    "network.tanzania.country": "Tanzania",
    "network.tanzania.desc": "Indian Ocean port hub for African resource supply",
    "network.indonesia": "Jakarta",
    "network.indonesia.country": "Indonesia",
    "network.indonesia.desc": "Java port hub for Southeast Asian resource supply",
    "network.korea": "Incheon · Seoul",
    "network.korea.country": "Korea",
    "network.korea.desc": "Korea base and head office of VL M&amp;C.",
    "network.ulsan": "Ulsan",
    "network.ulsan.country": "Korea",
    "network.ulsan.desc": "Korea diesel discharge hub. Terms follow the offer at inquiry",
    "network.legend.korea": "Korea",
    "track.badge": "Demo",
    "track.title": "Shipment tracking",
    "track.lead": "Enter a sample B/L number to see a simulated route on the map. This is not connected to a live carrier feed.",
    "track.label": "B/L number",
    "track.ph": "VL-DAR-2608-001",
    "track.go": "Track",
    "track.samples": "Sample numbers",
    "track.note": "This is a website demo. Live container position and ETA are shared after contract, from the carrier or forwarder.",
    "track.unknown": "That number is not a demo sample. Tap one of the sample B/Ls below.",
    "track.hud.bl": "B/L",
    "track.hud.vessel": "Vessel",
    "track.hud.cargo": "Cargo",
    "track.hud.route": "Lane",
    "track.status.search": "Looking up",
    "track.status.depart": "Departed",
    "track.status.transit": "At sea",
    "track.status.arrive": "Arriving",
    "track.status.done": "Arrived",
    "track.cargo.cu": "Copper scrap",
    "track.cargo.wood": "Wood pellets",
    "track.cargo.en590": "EN590 diesel",
    "track.vessel.dar": "MV VL DARWIN",
    "track.vessel.jkt": "MV VL JAVA",
    "track.vessel.usn": "MV VL ULSD",
    "track.route.dar": "Dar es Salaam → Jakarta → Incheon",
    "track.route.jkt": "Jakarta → Incheon",
    "track.route.usn": "At sea → Ulsan",
    "hall.res.kicker": "Resources Digital Showroom",
    "spec.form": "Form",
    "spec.grade": "Grade",
    "spec.ctrl": "Control",
    "spec.use": "Use",
    "spec.match": "Match",
    "spec.prio": "Priority",
    "spec.type": "Type",
    "spec.basis": "Basis",
    "spec.src": "Source",
    "spec.loop": "Loop",
    "spec.std": "Standard",
    "spec.s": "Sulphur",
    "spec.port": "Discharge",
    "p.catalog": "Request catalog",
    "p.copper.badge.metal": "Non-ferrous",
    "p.copper.badge.form": "Wire · pipe",
    "p.copper.badge.grade": "Int'l grades",
    "p.copper.badge.use": "Power · build",
    "p.copper.spec.grade.v": "Millberry · birch and others",
    "p.copper.spec.use.v": "Electrical · construction · manufacturing",
    "p.conc.badge.grade": "Target grade",
    "p.conc.badge.origin": "Philippine origin",
    "p.conc.badge.form": "Concentrate",
    "p.conc.badge.term": "Korea discharge",
    "p.conc.spec.term.v": "CIF Korea · FOB on inquiry",
    "p.conc.spec.use.v": "Smelter feedstock",
    "spec.origin": "Origin",
    "spec.term": "Terms",
    "p.alu.badge.metal": "Recycled ingot",
    "p.alu.badge.grade": "Casting grade",
    "p.alu.badge.assay": "Assay match",
    "p.alu.badge.flow": "Steady supply",
    "p.alu.spec.use.v": "Die-casting · foundry",
    "p.alu.spec.prio.v": "Stable assay · continuous supply",
    "p.tin.badge.metal": "Tin slag",
    "p.tin.badge.form": "Smelt by-product",
    "p.tin.badge.assay": "Assay basis",
    "p.tin.badge.use": "Metal recovery",
    "p.tin.spec.src.v": "Tin smelting",
    "p.tin.spec.form.v": "Slag · recovery feed",
    "p.nick.badge.metal": "Nickel slag",
    "p.nick.badge.use": "Stainless feed",
    "p.nick.badge.alloy": "Special alloys",
    "p.nick.badge.loop": "Resource loop",
    "p.nick.spec.src.v": "Nickel smelting slag",
    "p.nick.spec.loop.v": "Industrial by-product loop",
    "p.wood.badge.fuel": "Biomass",
    "p.wood.badge.moi": "Moisture spec",
    "p.wood.badge.cal": "Calorific spec",
    "p.wood.badge.use": "Boiler · power",
    "p.wood.spec.ctrl.v": "Moisture · calorific value · size",
    "p.wood.spec.form.v": "Industrial wood pellets",
    "p.en590.badge.s": "Ultra-low sulphur",
    "p.en590.badge.std": "European spec",
    "p.en590.badge.use": "Transport · industry",
    "p.en590.badge.port": "Korea discharge",
    "p.en590.spec.s.v": "10 ppm max",
    "p.en590.spec.port.v": "Ulsan · offer at inquiry",
    "p.copper.t": "Copper scrap",
    "p.copper.d": "We handle internationally graded copper scrap such as wire, millberry, and birch. Origins are Papua, Indonesia, and DRC/Zambia.",
    "p.copper.1": "Wire / copper pipe / busbar",
    "p.copper.2": "Grade sorting and impurity control",
    "p.conc.t": "Copper concentrate",
    "p.conc.d": "Philippine copper concentrate for Korean smelters. Target grade about Cu 25%, concentrate only — ROM ore excluded. Price, stock, and assay follow the offer at inquiry.",
    "p.conc.1": "About Cu 25% · concentrate",
    "p.conc.2": "Philippines",
    "p.alu.t": "Aluminum ingot",
    "p.alu.d": "Recycled aluminum ingots for die-casting and foundry use, with composition stability and continuous supply as the priority.",
    "p.alu.1": "ADC12 and foundry ingots",
    "p.alu.2": "Matched to spec sheets",
    "p.tin.t": "Tin slag",
    "p.tin.d": "We trade slag from tin smelting, used as feedstock for recovering tin and other valuable metals.",
    "p.tin.1": "Sourced by Sn content",
    "p.tin.2": "Recovery and refining feedstock",
    "p.nick.t": "Nickel slag",
    "p.nick.d": "Nickel smelting slag for recovering stainless and specialty-alloy feedstock, turning industrial by-products back into resources.",
    "p.nick.1": "Ni-bearing smelting by-product",
    "p.nick.2": "Alloy recovery applications",
    "p.wood.t": "Wood pellets",
    "p.wood.d": "Biomass fuel for industrial boilers and power generation, supplied against moisture, calorific value, and size specs.",
    "p.wood.1": "Industrial and power fuel",
    "p.wood.2": "Renewable energy feedstock",
    "p.en590.t": "EN590 diesel",
    "p.en590.d": "We handle EN 590 ultra-low-sulphur diesel. Sulphur at 10 ppm, cetane, density, and flash point become contract terms. Korea discharge is inquired against Ulsan.",
    "p.en590.1": "EN 590 · ULSD",
    "p.en590.2": "Transport · industry · power",
    "p.en590.alt": "EN590 diesel tank terminal",
    "p.kaolin.t": "Kaolin",
    "p.kaolin.d": "Industrial kaolin from Belitung, Indonesia. We match noodle, lump, and powder grades to brightness and alumina for ceramic, paper, and paint buyers in Korea and the region.",
    "p.kaolin.showroom": "Typical spec",
    "p.kaolin.badge.al": "Al₂O₃",
    "p.kaolin.badge.bright": "Brightness",
    "p.kaolin.badge.origin": "Belitung",
    "p.kaolin.badge.form": "Supply form",
    "p.kaolin.spec.origin.l": "Origin",
    "p.kaolin.spec.origin.v": "Belitung, Indonesia",
    "p.kaolin.spec.form.l": "Form",
    "p.kaolin.spec.form.v": "Noodle · lump · powder",
    "p.kaolin.spec.al.l": "Al₂O₃",
    "p.kaolin.spec.port.l": "Loading port",
    "p.kaolin.spec.port.v": "Tanjung Batu",
    "p.kaolin.note": "Figures are from a typical sample. Contract tonnage follows pre-shipment inspection.",
    "p.kaolin.gallery": "Kaolin field photos",
    "p.kaolin.thumb.noodle": "View noodle grade",
    "p.kaolin.thumb.lump": "View lump ore",
    "p.kaolin.thumb.powder": "View powder",
    "p.kaolin.thumb.mine": "View open-pit mine",
    "p.kaolin.alt.noodle": "Kaolin noodle feedstock",
    "p.kaolin.alt.lump": "Kaolin lump ore",
    "p.kaolin.alt.powder": "Kaolin powder",
    "p.kaolin.alt.mine": "Kaolin open-pit mine",
    "p.doc.profile": "Company profile",
    "p.doc.brief": "Resources briefing",
    "p.doc.mfr": "Manufacturer partner brief",
    "p.ask": "Inquire about this item",
    "brief.tag": "VL M&C · Resources Trading",
    "brief.cover.title": "A supply brief that connects resources to the field",
    "brief.cover.meta": "VL-RES-BRIEF · Rev. 2026.08 · For buyers and partners",
    "brief.intro": "We source copper scrap, copper concentrate, aluminum ingot, tin and nickel slag, wood pellets, EN590 diesel, and kaolin from the Philippines, Kazakhstan, Australia, Indonesia, the DRC, and Zambia. EN590 is inquired against Ulsan discharge in Korea. Price and stock follow the offer and inspection at inquiry.",
    "brief.s1": "Items we handle",
    "brief.s2": "Resource origins",
    "brief.s3": "Incheon · Seoul",
    "brief.s4": "Trial lot, then scale",
    "brief.market.t": "Market context",
    "brief.cu.t": "Copper scrap",
    "brief.cu.p": "Korea imported about 323,000 MT of HS 7404 in 2025 and about 176,000 MT in H1 2026. International grades such as wire and millberry, plus moisture and impurity control, sit at the center of the trade.",
    "brief.wood.t": "Wood pellets",
    "brief.wood.p": "Korea imported about 3.93 million MT in 2025. Indonesia supplied about 900,000 MT (23%) and is a core origin. Moisture, calorific value, and ash become contract terms.",
    "brief.en590.t": "EN590 diesel",
    "brief.en590.p": "EN 590 is the European automotive diesel spec. Sulphur at 10 ppm, cetane, density, and flash point become contract terms. Korea discharge is inquired against Ulsan. Origin, volume, and price follow the offer and inspection at inquiry.",
    "brief.disclaimer": "This is a public brief and does not include counterparties or contract prices. It can be forwarded with the company profile.",
    "mfr.tag": "Producer Partner Brief · Resources",
    "mfr.cover.title": "How we work with producers",
    "mfr.cover.meta": "VL-MFR-BRIEF · Rev. 2026.08 · For manufacturers · 1 page",
    "mfr.lead": "VL M&amp;C sources and delivers resources. This page is for producers, before a quotation.",
    "mfr.s1": "Resource items",
    "mfr.s2": "Origins",
    "mfr.s3": "Korea desk",
    "mfr.s4": "Inspect before ship",
    "mfr.who.t": "Locations",
    "mfr.vl.p": "Korea base and head office of VL M&amp;C.",
    "mfr.range.t": "What we source",
    "mfr.range.res.t": "Eight items",
    "mfr.range.res.p": "Copper scrap · Copper concentrate · Aluminium ingot · Tin / nickel slag · Wood pellets · EN590 diesel · Kaolin",
    "mfr.how.t": "How we work together",
    "mfr.how.1t": "Lock spec",
    "mfr.how.1p": "Grade, assay or BOM before any order.",
    "mfr.how.2t": "Sample · inspect",
    "mfr.how.2p": "Approved sample or a nominated inspector.",
    "mfr.how.3t": "Trial shipment",
    "mfr.how.3p": "First lot proves quality, then we scale.",
    "mfr.how.4t": "Repeat supply",
    "mfr.how.4p": "Calendar, packing and aftercare in the contract.",
    "mfr.ask.t": "What we need  /  What we provide",
    "mfr.need.t": "From the manufacturer",
    "mfr.need.1": "Locked spec matching the approved sample or assay",
    "mfr.need.2": "Stated monthly capacity and lead time",
    "mfr.need.3": "Access for PSI or a nominated inspector",
    "mfr.need.4": "Export packing, documents, Incoterms on the PI",
    "mfr.need.5": "State the settlement basis and inspection method in the contract",
    "mfr.give.t": "What we handle",
    "mfr.give.1": "Sourcing, orders, and contracts from Incheon and Seoul",
    "mfr.give.3": "Orders only after specification is locked",
    "mfr.give.4": "Trial shipment, then repeat volume",
    "mfr.give.5": "Payment to company accounts only",
    "mfr.next.t": "Next step",
    "mfr.next.p": "Send item, locked spec, monthly capacity and first-lot quantity. We reply with a specification lock sheet.",
    "mfr.contact.t": "Contact",
    "mfr.disc": "General introduction only. Price, stock and schedule follow the offer at inquiry. This brief excludes internal counterparties and contract unit prices. Send it separately from the buyer profile and trade briefing.",
    "process.eyebrow": "The Voyage",
    "process.title": "From sail to delivery",
    "process.1t": "Sail · Demand",
    "process.1p": "We lock item, grade or spec, volume, and lead time first.",
    "process.2t": "Voyage · Inspect",
    "process.2p": "We secure matching lots from domestic and overseas suppliers and check quality.",
    "process.3t": "Port · Deliver",
    "process.3p": "Shipping documents and discharge timing are aligned for delivery.",
    "process.4t": "Berth · Aftercare",
    "process.4p": "Repeat supply is aligned on inventory and shipment timing.",
    "contact.eyebrow": "Contact",
    "contact.title": "Tell us the item\nand quantity",
    "contact.lead": "Send the item, quantity, and lead time. We reply with availability and outline terms.",
    "contact.docs": "Spec sheets and catalogs are sent after you inquire.",
    "contact.email": "Email",
    "contact.addr": "Address",
    "contact.addr.vl": "7-15, Cheongna Hannae-ro 72beon-gil, Seo-gu, Incheon, Republic of Korea",
    "form.kicker": "Inquiry",
    "form.title": "Request a quote",
    "form.name": "Name / company",
    "form.contact": "Phone or email",
    "form.contact.ph": "Phone or email",
    "form.item": "Item of interest",
    "form.optRes": "Products",
    "form.optDocs": "Documents",
    "form.msg": "Message",
    "form.msg.ph": "Spec or grade, expected quantity, lead time, etc.",
    "form.submit": "Open email inquiry",
    "form.note": "This opens a mail draft to han4797@gmail.com.",
    "form.error": "Please fill in name/company, contact, and message.",
    "form.mail.subject": "[VL M&C] Inquiry — {item}",
    "form.mail.body": "Name / company: {name}\nContact: {contact}\nItem: {item}\n\n{message}",
    "form.sample.prefill": "We would like to request a sample of {item}. Please advise on quantity, lead time, and installation conditions.",
    "form.catalog.prefill": "Please send the catalog and spec sheet for {item}. We will share the required specs and intended use.",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "brand.home": "VL M&C home",
    "nav.main": "Main menu",
    "materials.label": "Product preview",
    "tablist.products": "Product categories",
    "tablist.docs": "Shareable documents",
    "lang.group": "Language",
    "lang.ko": "Korean",
    "lang.id": "Bahasa Indonesia",
    "lang.en": "English",
    "lang.zh": "Chinese",
    "form.item.copper": "Copper scrap",
    "form.item.conc": "Copper concentrate",
    "form.item.alu": "Aluminum ingot",
    "form.item.tin": "Tin slag",
    "form.item.nick": "Nickel slag",
    "form.item.wood": "Wood pellets",
    "form.item.en590": "EN590 diesel",
    "form.item.kaolin": "Kaolin",
    "form.item.pick": "Select an item",
    "form.item.profile": "Company profile",
    "form.item.brief": "Resources trade briefing",
    "form.item.mfr": "Manufacturer partner brief",
    "form.item.resdocs": "All documents (profile and briefing)",
    "form.item.other": "Other",
    "footer.blurb": "We look for origins the way explorers looked for a new world. VL M&amp;C.",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.top": "Back to top",
    "strip.met.p": "Copper scrap · copper concentrate · aluminum ingot · tin and nickel slag",
    "strip.ene.p": "Industrial wood pellets · EN590 diesel",
    "strip.min.p": "Kaolin · china clay",
    "panel.met.lead": "Copper scrap and concentrate, aluminum ingot, and tin and nickel slag, matched on grade and assay.",
    "panel.ene.lead": "Industrial wood pellets and EN590 diesel, matched on moisture, calorific value, and sulphur. Diesel is quoted on Ulsan discharge.",
    "panel.min.lead": "Kaolin from Belitung, Indonesia, supplied as noodle, lump, or powder against brightness and alumina content.",
  },
  id: {
    skip: "Lewati ke isi",
    "brand.tag": "Resources Trading",
    "brand.home": "Beranda VL M&C",
    "nav.about": "Tentang kami",
    "nav.products": "Produk",
    "nav.briefing": "Laporan",
    "nav.network": "Peta",
    "nav.main": "Menu utama",
    "nav.process": "Pelayaran",
    "nav.contact": "Kontak",
    "nav.inquiry": "Minta penawaran",
    "materials.label": "Pratinjau produk",
    "tablist.products": "Kategori produk",
    "tablist.docs": "Dokumen untuk dibagikan",
    "lang.group": "Bahasa",
    "lang.ko": "Korea",
    "lang.id": "Bahasa Indonesia",
    "lang.en": "Inggris",
    "lang.zh": "Tionghoa",
    "prof.sec.eyebrow": "Laporan",
    "prof.sec.title": "Dokumen untuk dibagikan",
    "prof.sec.lead": "Profil dan briefing untuk pembeli, plus brief mitra satu halaman terpisah untuk pabrik. Brief pabrik ditampilkan utuh di sini.",
    "prof.tab.kind": "Ringkasan · PDF 9 hlm",
    "brief.tab.kind": "Ringkasan · PDF 7 hlm",
    "mfr.tab.kind": "Lengkap · 1 hlm",
    "prof.toc.kicker": "Isi",
    "prof.toc.t": "Isi PDF · 9 halaman",
    "prof.toc.lead": "Bagan organisasi, rincian produk, basis pengadaan, dan proses perdagangan diuraikan lebih dalam di halaman-halaman ini. Bisa dicetak dan diserahkan apa adanya.",
    "brief.toc.t": "Isi PDF · 7 halaman",
    "brief.market.src": "Angka di atas merangkum statistik perdagangan publik dan diperbarui dari waktu ke waktu.",
    "prof.toc.01.t": "Ikhtisar perusahaan",
    "prof.toc.01.d": "VL M&C · VL M&amp;C",
    "prof.toc.02.t": "Data perusahaan",
    "prof.toc.02.d": "Badan hukum, pimpinan, basis, lingkup usaha, dan kontak",
    "prof.toc.03.t": "Organisasi dan lokasi",
    "prof.toc.03.d": "Incheon · Seoul",
    "prof.toc.04.t": "Pembagian tanggung jawab",
    "prof.toc.04.d": "Siapa yang menangani pengadaan, inspeksi, dokumen, bea cukai, pengiriman, dan klaim",
    "prof.toc.05.t": "Prinsip operasi",
    "prof.toc.05.d": "Spesifikasi, inspeksi, dan logistik",
    "prof.toc.06.t": "Rangkaian produk",
    "prof.toc.06.d": "Delapan produk beserta uraian, kode HS, dan poin pasokan",
    "prof.toc.07.t": "Jaringan pengadaan global",
    "prof.toc.07.d": "Peran masing-masing dari tujuh asal",
    "prof.toc.08.t": "Cara kami bekerja",
    "prof.toc.08.d": "Proses eksekusi empat tahap",
    "prof.toc.09.t": "Kontak",
    "prof.toc.09.d": "Kanal kontak Korea dan dokumen terkait",
    "brief.toc.01.t": "Ringkasan eksekutif",
    "brief.toc.01.d": "Inspeksi dulu, spesifikasi sebagai acuan, peningkatan bertahap",
    "brief.toc.02.t": "Konteks pasar",
    "brief.toc.02.d": "Konteks permintaan skrap tembaga, pelet kayu, dan EN590",
    "brief.toc.03.t": "Produk &amp; poin kontrak",
    "brief.toc.03.d": "Apa yang dikunci kontrak untuk tiap produk",
    "brief.toc.04.t": "Jaringan pengadaan",
    "brief.toc.04.d": "Philippines, Kazakhstan, Perth, Kalimantan, Sulawesi, Papua, DRC/Zambia",
    "brief.toc.05.t": "Inspeksi &amp; pengiriman",
    "brief.toc.05.d": "Kebutuhan → pengadaan dan inspeksi → logistik → purna jual",
    "brief.toc.06.t": "Memulai transaksi",
    "brief.toc.06.d": "Tentukan kebutuhan → penawaran → pengiriman uji",
    "brief.toc.07.t": "Kontak",
    "brief.toc.07.d": "Format pertanyaan yang paling cepat dijawab",
    "hero.eyebrow": "VL M&amp;C · Resources Trading",
    "hero.title1": "Seperti mencari benua baru",
    "hero.title2": "kami berangkat mencari sumber daya",
    "hero.cta1": "Lihat produk",
    "hero.cta2": "Hubungi kami",
    "hero.s1": "Asal sumber daya",
    "hero.s3n": "Incheon · Seoul",
    "hero.s3": "Pengadaan · order · kontrak · inspeksi · serah",
    "about.eyebrow": "The Company",
    "about.title": "Kami mencari asal yang belum dipetakan\ndan menuntaskan setiap kargo",
    "about.p1": "VL M&amp;C mengadakan dan menyerahkan logam non-ferrous, konsentrat, terak, pelet kayu, EN590, dan kaolin.",
    "about.p2": "Kami mencari asal yang belum ada di peta. Ini bukan perantara biasa. Spesifikasi, mutu, dan logistik dikelola bersama, dari pengadaan sampai penyerahan.",
    "about.pr3t": "Logistik",
    "about.pr3p": "Jadwal dari pengapalan di asal hingga bongkar di Korea kami selaraskan.",
    "about.cap": "Logistik sumber daya diselaraskan dari meja Korea.",
    "about.f1t": "Bisnis",
    "about.f1d": "Perdagangan sumber daya",
    "about.f2t": "Produk",
    "about.f2d": "8 lini",
    "about.f3t": "Bongkar",
    "about.f3d": "Ulsan",
    "about.f4t": "Korea",
    "about.f4d": "Incheon · Seoul",
    "partner.vl.en": "Korea",
    "partner.vl.role": "Pengadaan · order · kontrak · inspeksi · serah",
    "org.eyebrow": "Organization",
    "org.title": "Struktur organisasi",
    "org.lead": "Satu perusahaan, tiga kelompok produk.",
    "org.company.kicker": "VL M&C",
    "org.company.base": "Perdagangan sumber daya",
    "org.cargo": "Produk",
    "org.desk.kr.t": "Incheon · Seoul",
    "org.met.en": "Metals",
    "org.met.t": "Non-ferrous",
    "org.met.1": "Skrap tembaga · konsentrat",
    "org.met.2": "Ingot aluminium",
    "org.met.3": "Terak timah · nikel",
    "org.ene.en": "Energy",
    "org.ene.t": "Energi",
    "org.ene.1": "Pelet kayu industri",
    "org.ene.2": "Solar EN590",
    "org.ene.3": "Penawaran bongkar Ulsan",
    "org.min.en": "Minerals",
    "org.min.t": "Mineral industri",
    "org.min.1": "Kaolin",
    "org.min.2": "Asal Belitung",
    "org.min.3": "Noodle · bongkah · bubuk",
    "about.pr1t": "Spesifikasi",
    "about.pr1p": "Mutu, spek, dan komposisi diselaraskan lebih dulu.",
    "about.pr2t": "Inspeksi",
    "about.pr2p": "Volume dan kondisi diperiksa sebelum pengiriman.",
    "prof.tag": "Profil Perusahaan · Resources Trading",
    "prof.cover.title": "Dari asal hingga serah terima",
    "prof.lead": "VL M&amp;C berdagang sumber daya. Kami menyesuaikan mutu, kualitas, dan logistik untuk skrap non-ferrous, konsentrat tembaga, ingot aluminium, terak peleburan, pelet kayu industri, solar EN590, dan kaolin.",
    "prof.meta": "2026 · Untuk pembeli dan mitra · Incheon · Seoul",
    "prof.about.kicker": "Tentang",
    "prof.about.t": "Perusahaan",
    "prof.about.p": "VL M&amp;C adalah perusahaan perdagangan sumber daya.",
    "prof.about.box": "Bukan sekadar perantara. Mutu diselaraskan lebih dulu, lalu diserahkan sesuai hasil inspeksi.",
    "prof.th.field": "Butir",
    "prof.th.value": "Keterangan",
    "prof.field.name": "Nama",
    "prof.field.vlbase": "Basis Korea",
    "prof.field.scope": "Lingkup",
    "prof.field.scopev": "Perdagangan sumber daya / pengadaan B2B, inspeksi, ekspor-impor, pengiriman",
    "prof.field.items": "Sumber daya yang kami tangani",
    "prof.disc": "Profil ini bersifat acuan umum. Harga, stok, dan jadwal pengapalan mengikuti penawaran serta inspeksi pada saat pertanyaan. Izin ekspor-impor dikonfirmasi dengan PPJK dan aturan setempat sebelum kontrak.",
    "div.res.d": "Skrap tembaga · Konsentrat tembaga · Ingot aluminium · Terak timah/nikel · Pelet kayu · Solar EN590 · Kaolin",
    "products.eyebrow": "Kargo",
    "products.title": "Yang kami pasok",
    "products.lead": "Tiga kelompok: logam non-ferro, energi, dan mineral industri. Lihat foto dan spesifikasi utama di sini; katalog dikirim setelah pertanyaan.",
    "network.eyebrow": "The Chart",
    "network.title": "Peta untuk asal baru",
    "network.lead": "Konsentrat tembaga dari Filipina; aluminium dari Kazakhstan dan Perth; pelet kayu dari Kalimantan; nikel dari Sulawesi; skrap tembaga dari Papua serta DRC/Zambia. Solar EN590 ditanyakan dengan bongkar Ulsan. Hub pelabuhan di Dar es Salaam dan Jakarta. VL M&amp;C menangani pengadaan dan pengiriman.",
    "network.map.alt": "Peta dunia yang menampilkan konsentrat tembaga di Filipina, aluminium di Kazakhstan dan Perth, pelet kayu di Kalimantan, nikel di Sulawesi, tembaga di Papua dan DRC/Zambia, EN590 di Ulsan, serta hub di Dar es Salaam, Jakarta, dan Seoul",
    "network.legend.resource": "Pengadaan sumber daya",
    "network.tag.resourceHub": "Hub sumber daya",
    "network.tag.vlHub": "Hub Korea",
    "network.tag.concentrate": "Konsentrat tembaga",
    "network.tag.aluminum": "Aluminium",
    "network.tag.aluminumHub": "Aluminium · hub",
    "network.philippines": "Filipina",
    "network.philippines.country": "Filipina",
    "network.philippines.desc": "Hub pasokan konsentrat tembaga Filipina",
    "network.tag.wood": "Pelet kayu",
    "network.tag.diesel": "EN590",
    "network.tag.copper": "Tembaga",
    "network.tag.nickel": "Nikel",
    "network.kazakhstan": "Kazakhstan",
    "network.kazakhstan.country": "Kazakhstan",
    "network.kazakhstan.desc": "Hub pasokan aluminium Asia Tengah",
    "network.perth": "Perth",
    "network.perth.country": "Australia",
    "network.perth.desc": "Hub pasokan aluminium Australia Barat",
    "network.kalimantan": "Kalimantan",
    "network.kalimantan.country": "Indonesia",
    "network.kalimantan.desc": "Hub pasokan pelet kayu Kalimantan",
    "network.sulawesi": "Sulawesi",
    "network.sulawesi.country": "Indonesia",
    "network.sulawesi.desc": "Hub pasokan nikel Sulawesi",
    "network.papua": "Papua",
    "network.papua.country": "Indonesia",
    "network.papua.desc": "Hub pasokan tembaga Papua",
    "network.drc": "DRC · Zambia",
    "network.drc.country": "Republik Demokratik Kongo · Zambia",
    "network.drc.desc": "Hub pasokan tembaga Afrika Tengah",
    "network.tanzania": "Dar es Salaam",
    "network.tanzania.country": "Tanzania",
    "network.tanzania.desc": "Hub pelabuhan Samudra Hindia untuk pasokan sumber daya Afrika",
    "network.indonesia": "Jakarta",
    "network.indonesia.country": "Indonesia",
    "network.indonesia.desc": "Hub pelabuhan Jawa untuk pasokan sumber daya Asia Tenggara",
    "network.korea": "Incheon · Seoul",
    "network.korea.country": "Korea",
    "network.korea.desc": "Basis Korea dan kantor pusat VL M&amp;C.",
    "network.ulsan": "Ulsan",
    "network.ulsan.country": "Korea",
    "network.ulsan.desc": "Hub bongkar solar Korea. Syarat mengikuti penawaran saat pertanyaan",
    "network.legend.korea": "Korea",
    "track.badge": "Demo",
    "track.title": "Pelacakan pengapalan",
    "track.lead": "Masukkan nomor B/L sampel untuk melihat rute simulasi di peta. Ini tidak terhubung ke umpan operator langsung.",
    "track.label": "Nomor B/L",
    "track.ph": "VL-DAR-2608-001",
    "track.go": "Lacak",
    "track.samples": "Nomor sampel",
    "track.note": "Ini demo situs. Posisi kontainer dan ETA yang sebenarnya dibagikan setelah kontrak, dari operator atau forwarder.",
    "track.unknown": "Nomor itu bukan sampel demo. Ketuk salah satu B/L sampel di bawah.",
    "track.hud.bl": "B/L",
    "track.hud.vessel": "Kapal",
    "track.hud.cargo": "Muatan",
    "track.hud.route": "Jalur",
    "track.status.search": "Mencari",
    "track.status.depart": "Berangkat",
    "track.status.transit": "Di laut",
    "track.status.arrive": "Tiba",
    "track.status.done": "Sampai",
    "track.cargo.cu": "Skrap tembaga",
    "track.cargo.wood": "Pelet kayu",
    "track.vessel.dar": "MV VL DARWIN",
    "track.vessel.jkt": "MV VL JAVA",
    "track.route.dar": "Dar es Salaam → Jakarta → Incheon",
    "track.route.jkt": "Jakarta → Incheon",
    "hall.res.kicker": "Resources Digital Showroom",
    "spec.form": "Bentuk",
    "spec.grade": "Mutu",
    "spec.ctrl": "Kendali",
    "spec.use": "Guna",
    "spec.match": "Cocokkan",
    "spec.prio": "Prioritas",
    "spec.type": "Jenis",
    "spec.basis": "Dasar",
    "spec.src": "Asal",
    "spec.loop": "Siklus",
    "spec.std": "Standar",
    "spec.s": "Sulfur",
    "spec.port": "Bongkar",
    "p.catalog": "Minta katalog",
    "p.copper.badge.metal": "Non-besi",
    "p.copper.badge.form": "Kawat · pipa",
    "p.copper.badge.grade": "Mutu internasional",
    "p.copper.badge.use": "Listrik · konstruksi",
    "p.copper.spec.grade.v": "Millberry · birch, dan lainnya",
    "p.copper.spec.use.v": "Listrik · konstruksi · manufaktur",
    "p.conc.badge.grade": "Kadar acuan",
    "p.conc.badge.origin": "Asal Filipina",
    "p.conc.badge.form": "Konsentrat",
    "p.conc.badge.term": "Bongkar Korea",
    "p.conc.spec.term.v": "CIF Korea · FOB sesuai inquiry",
    "p.conc.spec.use.v": "Bahan baku smelter",
    "spec.origin": "Asal",
    "spec.term": "Syarat",
    "p.alu.badge.metal": "Ingot daur ulang",
    "p.alu.badge.grade": "Mutu cor",
    "p.alu.badge.assay": "Cocok uji kadar",
    "p.alu.badge.flow": "Pasokan terus",
    "p.alu.spec.use.v": "Die-casting · pengecoran",
    "p.alu.spec.prio.v": "Kadar stabil · pasokan terus",
    "p.tin.badge.metal": "Terak timah",
    "p.tin.badge.form": "Samping peleburan",
    "p.tin.badge.assay": "Dasar kadar",
    "p.tin.badge.use": "Recovery logam",
    "p.tin.spec.src.v": "Peleburan timah",
    "p.tin.spec.form.v": "Terak · bahan recovery",
    "p.nick.badge.metal": "Terak nikel",
    "p.nick.badge.use": "Bahan stainless",
    "p.nick.badge.alloy": "Paduan khusus",
    "p.nick.badge.loop": "Siklus sumber daya",
    "p.nick.spec.src.v": "Terak peleburan nikel",
    "p.nick.spec.loop.v": "Siklus produk samping industri",
    "p.wood.badge.fuel": "Biomassa",
    "p.wood.badge.moi": "Kadar air",
    "p.wood.badge.cal": "Nilai kalor",
    "p.wood.badge.use": "Boiler · listrik",
    "p.wood.spec.ctrl.v": "Kadar air · nilai kalor · ukuran",
    "p.wood.spec.form.v": "Pelet kayu industri",
    "p.en590.badge.s": "Sulfur sangat rendah",
    "p.en590.badge.std": "Spek Eropa",
    "p.en590.badge.use": "Angkutan · industri",
    "p.en590.badge.port": "Bongkar Korea",
    "p.en590.spec.s.v": "Maks. 10 ppm",
    "p.en590.spec.port.v": "Ulsan · penawaran saat pertanyaan",
    "p.copper.t": "Skrap tembaga",
    "p.copper.d": "Kami menangani skrap tembaga bermutu internasional seperti kawat, millberry, dan birch. Asalnya dua: Papua, Indonesia, dan DRC/Zambia.",
    "p.copper.1": "Kawat / pipa tembaga / busbar",
    "p.copper.2": "Sortir mutu dan pengendalian pengotor",
    "p.conc.t": "Konsentrat tembaga",
    "p.conc.d": "Konsentrat tembaga Filipina untuk smelter Korea. Kadar acuan sekitar Cu 25%, hanya konsentrat — bijih ROM dikecualikan. Harga, stok, dan assay mengikuti penawaran saat inquiry.",
    "p.conc.1": "Sekitar Cu 25% · konsentrat",
    "p.conc.2": "Filipina",
    "p.alu.t": "Ingot aluminium",
    "p.alu.d": "Ingot aluminium daur ulang untuk die-casting dan pengecoran, dengan kestabilan komposisi dan pasokan berkesinambungan sebagai prioritas.",
    "p.alu.1": "ADC12 dan ingot pengecoran",
    "p.alu.2": "Diselaraskan dengan lembar spek",
    "p.tin.t": "Terak timah",
    "p.tin.d": "Kami memperdagangkan terak peleburan timah, dipakai sebagai bahan baku pemulihan timah dan logam berharga lain.",
    "p.tin.1": "Diadakan menurut kadar Sn",
    "p.tin.2": "Bahan baku pemulihan dan pemurnian",
    "p.nick.t": "Terak nikel",
    "p.nick.d": "Terak peleburan nikel untuk memulihkan bahan baku stainless dan paduan khusus, mengembalikan produk samping industri menjadi sumber daya.",
    "p.nick.1": "Produk samping peleburan berkadar Ni",
    "p.nick.2": "Aplikasi pemulihan paduan",
    "p.wood.t": "Pelet kayu",
    "p.wood.d": "Bahan bakar biomassa untuk boiler industri dan pembangkit, dipasok sesuai spek kadar air, nilai kalor, dan ukuran.",
    "p.wood.1": "Bahan bakar industri dan pembangkit",
    "p.wood.2": "Bahan baku energi terbarukan",
    "p.en590.t": "Solar EN590",
    "p.en590.d": "Kami menangani solar sulfur sangat rendah EN 590. Sulfur 10 ppm, cetane, densitas, dan titik nyala menjadi syarat kontrak. Bongkar Korea ditanyakan dengan acuan Ulsan.",
    "p.en590.1": "EN 590 · ULSD",
    "p.en590.2": "Angkutan · industri · pembangkit",
    "p.en590.alt": "Terminal tangki solar EN590",
    "p.kaolin.t": "Kaolin",
    "p.kaolin.d": "Kaolin industri dari Belitung, Indonesia. Kami menyesuaikan mutu noodle, bongkah, dan serbuk dengan kecerahan dan alumina untuk pembeli keramik, kertas, dan cat di Korea dan kawasan ini.",
    "p.kaolin.showroom": "Spek khas",
    "p.kaolin.badge.al": "Al₂O₃",
    "p.kaolin.badge.bright": "Kecerahan",
    "p.kaolin.badge.origin": "Belitung",
    "p.kaolin.badge.form": "Bentuk pasokan",
    "p.kaolin.spec.origin.l": "Asal",
    "p.kaolin.spec.origin.v": "Belitung, Indonesia",
    "p.kaolin.spec.form.l": "Bentuk",
    "p.kaolin.spec.form.v": "Noodle · bongkah · serbuk",
    "p.kaolin.spec.al.l": "Al₂O₃",
    "p.kaolin.spec.port.l": "Pelabuhan muat",
    "p.kaolin.spec.port.v": "Tanjung Batu",
    "p.kaolin.note": "Angka berasal dari sampel khas. Tonase kontrak mengikuti inspeksi pra-pengapalan.",
    "p.kaolin.gallery": "Foto lapangan kaolin",
    "p.kaolin.thumb.noodle": "Lihat mutu noodle",
    "p.kaolin.thumb.lump": "Lihat bijih bongkah",
    "p.kaolin.thumb.powder": "Lihat serbuk",
    "p.kaolin.thumb.mine": "Lihat tambang terbuka",
    "p.kaolin.alt.noodle": "Bahan baku kaolin noodle",
    "p.kaolin.alt.lump": "Bijih kaolin bongkah",
    "p.kaolin.alt.powder": "Serbuk kaolin",
    "p.kaolin.alt.mine": "Tambang terbuka kaolin",
    "p.doc.profile": "Profil perusahaan",
    "p.doc.brief": "Briefing sumber daya",
    "p.doc.mfr": "Brief mitra untuk pabrik",
    "p.ask": "Tanyakan produk ini",
    "brief.tag": "VL M&C · Resources Trading",
    "brief.cover.title": "Brief pasokan yang menghubungkan sumber daya ke lapangan",
    "brief.cover.meta": "VL-RES-BRIEF · Rev. 2026.08 · Untuk pembeli dan mitra",
    "brief.intro": "Kami mengadakan skrap tembaga, konsentrat tembaga, ingot aluminium, terak timah dan nikel, pelet kayu, solar EN590, dan kaolin dari Filipina, Kazakhstan, Australia, Indonesia, DRC, dan Zambia. EN590 ditanyakan dengan bongkar Ulsan di Korea. Harga dan stok mengikuti penawaran serta inspeksi pada saat pertanyaan.",
    "brief.s1": "Produk yang kami tangani",
    "brief.s2": "Asal sumber daya",
    "brief.s3": "Incheon · Seoul",
    "brief.s4": "Lot uji, lalu ditingkatkan",
    "brief.market.t": "Konteks pasar",
    "brief.cu.t": "Skrap tembaga",
    "brief.cu.p": "Korea mengimpor sekitar 323.000 MT HS 7404 pada 2025 dan sekitar 176.000 MT di semester I 2026. Mutu internasional seperti kawat dan millberry, plus pengendalian kadar air dan pengotor, menjadi inti perdagangan.",
    "brief.wood.t": "Pelet kayu",
    "brief.wood.p": "Korea mengimpor sekitar 3,93 juta MT pada 2025. Indonesia memasok sekitar 900.000 MT (23%) dan merupakan asal inti. Kadar air, nilai kalor, dan abu menjadi syarat kontrak.",
    "brief.en590.t": "Solar EN590",
    "brief.en590.p": "EN 590 adalah spek solar otomotif Eropa. Sulfur 10 ppm, cetane, densitas, dan titik nyala menjadi syarat kontrak. Bongkar Korea ditanyakan dengan acuan Ulsan. Asal, volume, dan harga mengikuti penawaran serta inspeksi pada saat pertanyaan.",
    "brief.disclaimer": "Ini briefing publik dan tidak memuat mitra dagang atau harga kontrak. Bisa diteruskan bersama profil perusahaan.",
    "mfr.tag": "Producer Partner Brief · Resources",
    "mfr.cover.title": "Cara kerja dengan produsen",
    "mfr.cover.meta": "VL-MFR-BRIEF · Rev. 2026.08 · Untuk pabrik · 1 halaman",
    "mfr.lead": "VL M&amp;C mengadakan dan menyerahkan sumber daya. Halaman ini untuk produsen, sebelum penawaran.",
    "mfr.s1": "Produk sumber daya",
    "mfr.s2": "Asal pasokan",
    "mfr.s3": "Meja Korea",
    "mfr.s4": "Inspeksi sebelum kapal",
    "mfr.who.t": "Lokasi",
    "mfr.vl.p": "Basis Korea dan kantor pusat VL M&amp;C.",
    "mfr.range.t": "Apa yang kami adakan",
    "mfr.range.res.t": "Delapan produk",
    "mfr.range.res.p": "Skrap tembaga · konsentrat tembaga · ingot aluminium · terak timah/nikel · pelet kayu · solar EN590 · kaolin",
    "mfr.how.t": "Cara kami bekerja sama",
    "mfr.how.1t": "Kunci spek",
    "mfr.how.1p": "Mutu, uji lab, atau BOM sebelum pesanan.",
    "mfr.how.2t": "Sampel · inspeksi",
    "mfr.how.2p": "Sampel disetujui atau inspektur yang ditunjuk.",
    "mfr.how.3t": "Pengiriman uji",
    "mfr.how.3p": "Lot pertama membuktikan mutu, lalu ditingkatkan.",
    "mfr.how.4t": "Pasokan berulang",
    "mfr.how.4p": "Kalender, kemasan, dan purna jual di kontrak.",
    "mfr.ask.t": "Yang kami minta  /  Yang kami tanggung",
    "mfr.need.t": "Dari pabrik",
    "mfr.need.1": "Spek terkunci sama dengan sampel atau uji lab yang disetujui",
    "mfr.need.2": "Kapasitas bulanan dan lead time yang dinyatakan",
    "mfr.need.3": "Akses PSI atau inspektur yang ditunjuk",
    "mfr.need.4": "Kemasan ekspor, dokumen, Incoterms di PI",
    "mfr.need.5": "Cantumkan dasar settlement dan metode inspeksi dalam kontrak",
    "mfr.give.t": "Yang kami tangani",
    "mfr.give.1": "Pengadaan, pemesanan, dan kontrak dari Incheon dan Seoul",
    "mfr.give.3": "Pesanan hanya setelah spek terkunci",
    "mfr.give.4": "Pengiriman uji, lalu volume berulang",
    "mfr.give.5": "Pembayaran hanya ke rekening perusahaan",
    "mfr.next.t": "Langkah berikutnya",
    "mfr.next.p": "Kirim produk, spek terkunci, kapasitas bulanan, dan kuantitas lot pertama. Kami membalas dengan lembar kunci spek.",
    "mfr.contact.t": "Kontak",
    "mfr.disc": "Hanya pengantar umum. Harga, stok, dan jadwal mengikuti penawaran saat pertanyaan. Brief ini tidak memuat mitra internal atau harga satuan kontrak. Kirim terpisah dari profil pembeli dan briefing perdagangan.",
    "process.eyebrow": "The Voyage",
    "process.title": "Dari berlayar hingga serah terima",
    "process.1t": "Berlayar · Permintaan",
    "process.1p": "Produk, mutu atau spek, volume, dan lead time dikunci lebih dulu.",
    "process.2t": "Pelayaran · Inspeksi",
    "process.2p": "Kami mengamankan lot yang sesuai dari pemasok dalam dan luar negeri, lalu memeriksa mutu.",
    "process.3t": "Sandar · Kirim",
    "process.3p": "Dokumen pengapalan dan jadwal bongkar diselaraskan untuk pengiriman.",
    "process.4t": "Bongkar · Purna",
    "process.4p": "Pasokan berulang diselaraskan pada stok dan jadwal pengapalan.",
    "contact.eyebrow": "Kontak",
    "contact.title": "Sebutkan produk\ndan kuantitas",
    "contact.lead": "Kirim produk, jumlah, dan lead time. Kami membalas ketersediaan dan kerangka syarat.",
    "contact.docs": "Lembar spek dan katalog dikirim setelah Anda bertanya.",
    "contact.email": "Email",
    "contact.addr": "Alamat",
    "contact.addr.vl": "7-15, Cheongna Hannae-ro 72beon-gil, Seo-gu, Incheon, Republic of Korea",
    "form.kicker": "Pertanyaan",
    "form.title": "Minta penawaran",
    "form.name": "Nama / perusahaan",
    "form.contact": "Telepon atau email",
    "form.contact.ph": "Telepon atau email",
    "form.item": "Produk yang diminati",
    "form.optRes": "Produk",
    "form.optDocs": "Dokumen",
    "form.item.copper": "Skrap tembaga",
    "form.item.conc": "Konsentrat tembaga",
    "form.item.alu": "Ingot aluminium",
    "form.item.tin": "Terak timah",
    "form.item.nick": "Terak nikel",
    "form.item.wood": "Pelet kayu",
    "form.item.en590": "Solar EN590",
    "form.item.kaolin": "Kaolin",
    "form.item.pick": "Pilih item",
    "form.item.profile": "Profil perusahaan",
    "form.item.brief": "Briefing perdagangan sumber daya",
    "form.item.mfr": "Brief mitra untuk pabrik",
    "form.item.resdocs": "Semua dokumen (profil dan briefing)",
    "form.item.other": "Lainnya",
    "form.msg": "Pesan",
    "form.msg.ph": "Spek atau mutu, kuantitas perkiraan, lead time, dan lain-lain.",
    "form.submit": "Buka email pertanyaan",
    "form.note": "Ini membuka draf email ke han4797@gmail.com.",
    "form.error": "Harap isi nama/perusahaan, kontak, dan pesan.",
    "form.mail.subject": "[VL M&C] Pertanyaan — {item}",
    "form.mail.body": "Nama / perusahaan: {name}\nKontak: {contact}\nProduk: {item}\n\n{message}",
    "form.sample.prefill": "Kami ingin meminta sampel {item}. Mohon arahan soal kuantitas, lead time, dan kondisi instalasi.",
    "form.catalog.prefill": "Kami ingin meminta katalog dan lembar spek {item}. Kami akan menyampaikan spek dan tujuan penggunaan.",
    "menu.open": "Buka menu",
    "menu.close": "Tutup menu",
    "footer.blurb": "Kami mencari asal seperti mencari benua baru. VL M&amp;C.",
    "footer.explore": "Jelajahi",
    "footer.contact": "Kontak",
    "footer.top": "Kembali ke atas",
    "strip.met.p": "Skrap tembaga · konsentrat tembaga · ingot aluminium · terak timah dan nikel",
    "strip.ene.p": "Pelet kayu industri · solar EN590",
    "strip.min.p": "Kaolin · tanah liat putih",
    "panel.met.lead": "Skrap dan konsentrat tembaga, ingot aluminium, serta terak timah dan nikel, disesuaikan dengan grade dan kadar.",
    "panel.ene.lead": "Pelet kayu industri dan solar EN590, disesuaikan dengan kadar air, nilai kalor, dan sulfur. Solar ditawarkan dengan bongkar di Ulsan.",
    "panel.min.lead": "Kaolin dari Belitung, Indonesia, dalam bentuk noodle, bongkah, atau bubuk sesuai derajat putih dan kadar alumina.",
    "track.cargo.en590": "Solar EN590",
    "track.vessel.usn": "MV VL ULSD",
    "track.route.usn": "Laut → Ulsan",
  },
  zh: {
    skip: "跳至内容",
    "brand.tag": "Resources Trading",
    "nav.about": "关于我们",
    "nav.products": "产品",
    "nav.briefing": "报告",
    "nav.network": "航线图",
    "prof.sec.eyebrow": "报告",
    "prof.sec.title": "可分享文件",
    "prof.sec.lead": "面向买方的公司简介与贸易简报，以及面向制造商的独立一页合作伙伴简介。制造商简介在此全文展示。",
    "prof.tab.kind": "摘要 · 9页 PDF",
    "brief.tab.kind": "摘要 · 7页 PDF",
    "mfr.tab.kind": "全文 · 1页",
    "prof.toc.kicker": "目录",
    "prof.toc.t": "PDF 内容 · 共 9 页",
    "prof.toc.lead": "组织架构、品项详情、采购基地与贸易流程在各页有更详尽的说明。可直接打印交付。",
    "brief.toc.t": "PDF 内容 · 共 7 页",
    "brief.market.src": "上图数据为公开贸易统计摘要，将定期更新。",
    "prof.toc.01.t": "公司概览",
    "prof.toc.01.d": "VL M&C · VL M&amp;C",
    "prof.toc.02.t": "企业资料",
    "prof.toc.02.d": "主体、负责人、基地、业务范围与联系方式",
    "prof.toc.03.t": "组织与据点",
    "prof.toc.03.d": "仁川 · 首尔",
    "prof.toc.04.t": "职责分工",
    "prof.toc.04.d": "采购、检验、文件、清关、交付与索赔各由谁负责",
    "prof.toc.05.t": "运营原则",
    "prof.toc.05.d": "规格、检验与物流",
    "prof.toc.06.t": "产品范围",
    "prof.toc.06.d": "八类品项，含描述、HS 编码与供应点",
    "prof.toc.07.t": "全球采购网络",
    "prof.toc.07.d": "七大产地各自的角色",
    "prof.toc.08.t": "工作流程",
    "prof.toc.08.d": "四步执行流程",
    "prof.toc.09.t": "联系方式",
    "prof.toc.09.d": "韩国联系渠道及相关文件",
    "brief.toc.01.t": "执行摘要",
    "brief.toc.01.d": "检验先行、规格主导、分阶段扩量",
    "brief.toc.02.t": "市场背景",
    "brief.toc.02.d": "铜废料、木颗粒与 EN590 的需求背景",
    "brief.toc.03.t": "品项与合同要点",
    "brief.toc.03.d": "各品项在合同中锁定的内容",
    "brief.toc.04.t": "采购网络",
    "brief.toc.04.d": "菲律宾、哈萨克斯坦、珀斯、加里曼丹、苏拉威西、巴布亚、刚果（金）/赞比亚",
    "brief.toc.05.t": "检验与交付",
    "brief.toc.05.d": "需求确认 → 采购与检验 → 物流 → 售后",
    "brief.toc.06.t": "如何开始",
    "brief.toc.06.d": "明确需求 → 报价 → 试运",
    "brief.toc.07.t": "联系方式",
    "brief.toc.07.d": "最快回复的询价格式",
    "nav.process": "航程",
    "nav.contact": "联系",
    "nav.inquiry": "索取报价",
    "hero.eyebrow": "VL M&amp;C · Resources Trading",
    "hero.title1": "如同探寻新大陆",
    "hero.title2": "我们为资源扬帆",
    "hero.cta1": "查看产品",
    "hero.cta2": "联系我们",
    "hero.s1": "资源产地",
    "hero.s3n": "仁川 · 首尔",
    "hero.s3": "采购 · 下单 · 合同 · 检验 · 交付",
    "about.eyebrow": "公司",
    "about.title": "寻找未知产地，\n全程负责到底",
    "about.p1": "VL M&amp;C 采购并交付有色金属、精矿、渣料、木颗粒、EN590 与高岭土。",
    "about.p2": "我们寻找尚未标在航线图上的产地。这不是单纯经纪。规格、质量与物流从采购到交付一并管理。",
    "about.pr1t": "规格",
    "about.pr1p": "优先匹配牌号、规格与成分。",
    "about.pr2t": "检验",
    "about.pr2p": "交付前核查数量与状态。",
    "about.pr3t": "物流衔接",
    "about.pr3p": "从产地装船到韩国卸货，统一安排船期。",
    "about.cap": "资源物流由韩国据点衔接。",
    "about.f1t": "业务",
    "about.f1d": "资源贸易",
    "about.f2t": "品项",
    "about.f2d": "8 项",
    "about.f3t": "卸货",
    "about.f3d": "蔚山",
    "about.f4t": "韩国",
    "about.f4d": "仁川 · 首尔",
    "partner.vl.en": "韩国",
    "partner.vl.role": "采购 · 下单 · 合同 · 检验 · 交付",
    "org.eyebrow": "组织",
    "org.title": "组织架构图",
    "org.lead": "一家公司，直接经营三大品类。",
    "org.company.kicker": "VL M&C",
    "org.company.base": "资源贸易",
    "org.cargo": "经营品项",
    "org.desk.kr.t": "仁川 · 首尔",
    "org.met.en": "Metals",
    "org.met.t": "有色金属",
    "org.met.1": "废铜 · 铜精矿",
    "org.met.2": "铝锭",
    "org.met.3": "锡渣 · 镍渣",
    "org.ene.en": "Energy",
    "org.ene.t": "能源",
    "org.ene.1": "工业木颗粒",
    "org.ene.2": "EN590 柴油",
    "org.ene.3": "按蔚山卸货询价",
    "org.min.en": "Minerals",
    "org.min.t": "工业矿物",
    "org.min.1": "高岭土",
    "org.min.2": "勿里洞产地",
    "org.min.3": "面条状 · 块状 · 粉体",
    "prof.tag": "公司简介 · Resources Trading",
    "prof.cover.title": "从产地到交付",
    "prof.lead": "VL M&amp;C 从事资源贸易。我们为有色金属废料、铜精矿、铝锭、冶炼渣、工业木颗粒、EN590 柴油及高岭土匹配牌号、质量与物流。",
    "prof.meta": "2026 · 面向买方与合作伙伴 · 仁川 · 首尔",
    "prof.about.kicker": "关于",
    "prof.about.t": "公司",
    "prof.about.p": "VL M&amp;C 是资源贸易公司。",
    "prof.about.box": "非单纯经纪。我们优先匹配牌号，再按检验结果交付。",
    "prof.th.field": "项目",
    "prof.th.value": "详情",
    "prof.field.name": "名称",
    "prof.field.vlbase": "韩国基地",
    "prof.field.scope": "业务范围",
    "prof.field.scopev": "资源贸易 / B2B 采购、检验、进出口、交付",
    "prof.field.items": "经营资源品项",
    "prof.disc": "本简介为一般性指引。价格、库存与船期以询价时的报价与检验为准。进出口许可在签约前与报关行及当地法规确认。",
    "div.res.d": "铜废料 · 铜精矿 · 铝锭 · 锡/镍渣 · 木颗粒 · EN590 柴油 · 高岭土",
    "products.eyebrow": "货物",
    "products.title": "供应品项",
    "products.lead": "有色金属、能源、工业矿物三大品类。请在此查看图片与核心规格，目录于询价后发送。",
    "network.eyebrow": "航线图",
    "network.title": "探寻新产地的航线图",
    "network.lead": "铜精矿来自菲律宾；铝来自哈萨克斯坦与珀斯；木颗粒来自加里曼丹；镍来自苏拉威西；铜废料来自巴布亚与刚果（金）/赞比亚。EN590 柴油按蔚山卸货询价。港口枢纽为达累斯萨拉姆与雅加达。VL M&amp;C 负责采购与交付。",
    "network.map.alt": "世界地图标注：菲律宾铜精矿、哈萨克斯坦与珀斯的铝、加里曼丹木颗粒、苏拉威西镍、巴布亚与刚果（金）/赞比亚铜、蔚山 EN590，以及达累斯萨拉姆、雅加达与首尔等枢纽",
    "network.legend.resource": "资源采购",
    "network.tag.resourceHub": "资源枢纽",
    "network.tag.vlHub": "韩国枢纽",
    "network.tag.concentrate": "铜精矿",
    "network.tag.aluminum": "铝",
    "network.tag.aluminumHub": "铝 · 枢纽",
    "network.philippines": "菲律宾",
    "network.philippines.country": "菲律宾",
    "network.philippines.desc": "菲律宾铜精矿供应枢纽",
    "network.tag.wood": "木颗粒",
    "network.tag.diesel": "EN590",
    "network.tag.copper": "铜",
    "network.tag.nickel": "镍",
    "network.kazakhstan": "哈萨克斯坦",
    "network.kazakhstan.country": "哈萨克斯坦",
    "network.kazakhstan.desc": "中亚铝供应枢纽",
    "network.perth": "珀斯",
    "network.perth.country": "澳大利亚",
    "network.perth.desc": "西澳大利亚铝供应枢纽",
    "network.kalimantan": "加里曼丹",
    "network.kalimantan.country": "印尼",
    "network.kalimantan.desc": "婆罗洲木颗粒供应枢纽",
    "network.sulawesi": "苏拉威西",
    "network.sulawesi.country": "印尼",
    "network.sulawesi.desc": "苏拉威西镍供应枢纽",
    "network.papua": "巴布亚",
    "network.papua.country": "印尼",
    "network.papua.desc": "巴布亚铜供应枢纽",
    "network.drc": "刚果（金） · 赞比亚",
    "network.drc.country": "刚果民主共和国 · 赞比亚",
    "network.drc.desc": "中非铜供应枢纽",
    "network.tanzania": "达累斯萨拉姆",
    "network.tanzania.country": "坦桑尼亚",
    "network.tanzania.desc": "非洲资源供应的印度洋港口枢纽",
    "network.indonesia": "雅加达",
    "network.indonesia.country": "印尼",
    "network.indonesia.desc": "东南亚资源供应的爪哇港口枢纽",
    "network.korea": "仁川 · 首尔",
    "network.korea.country": "韩国",
    "network.korea.desc": "VL M&amp;C 韩国总部。",
    "network.ulsan": "蔚山",
    "network.ulsan.country": "韩国",
    "network.ulsan.desc": "韩国柴油卸货枢纽。条款以询价时报价为准",
    "network.legend.korea": "韩国",
    "track.badge": "演示",
    "track.title": "货运追踪",
    "track.lead": "输入示例提单号，在地图上查看模拟航线。未连接实时船公司数据。",
    "track.label": "提单号",
    "track.ph": "VL-DAR-2608-001",
    "track.go": "追踪",
    "track.samples": "示例编号",
    "track.note": "此为网站演示。实时集装箱位置与 ETA 在签约后由船公司或货代提供。",
    "track.unknown": "该编号非演示样本。请点击下方示例提单号。",
    "track.hud.bl": "提单",
    "track.hud.vessel": "船舶",
    "track.hud.cargo": "货物",
    "track.hud.route": "航线",
    "track.status.search": "查询中",
    "track.status.depart": "已离港",
    "track.status.transit": "在途",
    "track.status.arrive": "即将到港",
    "track.status.done": "已到港",
    "track.cargo.cu": "铜废料",
    "track.cargo.wood": "木颗粒",
    "track.vessel.dar": "MV VL DARWIN",
    "track.vessel.jkt": "MV VL JAVA",
    "track.route.dar": "达累斯萨拉姆 → 雅加达 → 仁川",
    "track.route.jkt": "雅加达 → 仁川",
    "hall.res.kicker": "资源数字展厅",
    "spec.form": "形态",
    "spec.grade": "牌号",
    "spec.ctrl": "控制",
    "spec.use": "用途",
    "spec.match": "匹配",
    "spec.prio": "优先级",
    "spec.type": "类型",
    "spec.basis": "基准",
    "spec.src": "来源",
    "spec.loop": "循环",
    "spec.std": "标准",
    "spec.s": "硫",
    "spec.port": "卸货",
    "p.catalog": "索取目录",
    "p.copper.badge.metal": "有色金属",
    "p.copper.badge.form": "线材 · 管材",
    "p.copper.badge.grade": "国际牌号",
    "p.copper.badge.use": "电力 · 建筑",
    "p.copper.spec.grade.v": "Millberry · Birch 等",
    "p.copper.spec.use.v": "电气 · 建筑 · 制造",
    "p.conc.badge.grade": "基准品位",
    "p.conc.badge.origin": "菲律宾产地",
    "p.conc.badge.form": "精矿",
    "p.conc.badge.term": "韩国港卸货",
    "p.conc.spec.term.v": "CIF 韩国港 · FOB 询价",
    "p.conc.spec.use.v": "冶炼厂原料",
    "spec.origin": "产地",
    "spec.term": "条件",
    "p.alu.badge.metal": "再生锭",
    "p.alu.badge.grade": "铸造级",
    "p.alu.badge.assay": "化验匹配",
    "p.alu.badge.flow": "稳定供应",
    "p.alu.spec.use.v": "压铸 · 铸造",
    "p.alu.spec.prio.v": "稳定化验 · 连续供应",
    "p.tin.badge.metal": "锡渣",
    "p.tin.badge.form": "冶炼副产品",
    "p.tin.badge.assay": "化验基准",
    "p.tin.badge.use": "金属回收",
    "p.tin.spec.src.v": "锡冶炼",
    "p.tin.spec.form.v": "渣料 · 回收原料",
    "p.nick.badge.metal": "镍渣",
    "p.nick.badge.use": "不锈钢原料",
    "p.nick.badge.alloy": "特种合金",
    "p.nick.badge.loop": "资源循环",
    "p.nick.spec.src.v": "镍冶炼渣",
    "p.nick.spec.loop.v": "工业副产品循环",
    "p.wood.badge.fuel": "生物质",
    "p.wood.badge.moi": "水分规格",
    "p.wood.badge.cal": "热值规格",
    "p.wood.badge.use": "锅炉 · 发电",
    "p.wood.spec.ctrl.v": "水分 · 热值 · 粒径",
    "p.wood.spec.form.v": "工业木颗粒",
    "p.en590.badge.s": "超低硫",
    "p.en590.badge.std": "欧洲规格",
    "p.en590.badge.use": "交通 · 工业",
    "p.en590.badge.port": "韩国卸货",
    "p.en590.spec.s.v": "10 ppm 上限",
    "p.en590.spec.port.v": "蔚山 · 询价时报价",
    "p.copper.t": "铜废料",
    "p.copper.d": "经营国际牌号铜废料，如线材、Millberry、Birch 等。产地为巴布亚、印尼与刚果（金）/赞比亚。",
    "p.copper.1": "线材 / 铜管 / 母线",
    "p.copper.2": "牌号分拣与杂质控制",
    "p.conc.t": "铜精矿",
    "p.conc.d": "面向韩国冶炼厂的菲律宾铜精矿。基准品位约 Cu 25%，仅精矿——不含原矿（ROM）。价格、库存与化验以询价时报价为准。",
    "p.conc.1": "约 Cu 25% · 精矿",
    "p.conc.2": "菲律宾",
    "p.alu.t": "铝锭",
    "p.alu.d": "面向压铸与铸造的再生铝锭，以成分稳定与连续供应为优先。",
    "p.alu.1": "ADC12 及铸造锭",
    "p.alu.2": "按规格表匹配",
    "p.tin.t": "锡渣",
    "p.tin.d": "经营锡冶炼渣料，用作回收锡及其他有价金属的原料。",
    "p.tin.1": "按 Sn 含量采购",
    "p.tin.2": "回收与精炼原料",
    "p.nick.t": "镍渣",
    "p.nick.d": "镍冶炼渣，用于回收不锈钢与特种合金原料，将工业副产品重新转化为资源。",
    "p.nick.1": "含 Ni 冶炼副产品",
    "p.nick.2": "合金回收应用",
    "p.wood.t": "木颗粒",
    "p.wood.d": "面向工业锅炉与发电的生物质燃料，按水分、热值与粒径规格供应。",
    "p.wood.1": "工业与发电燃料",
    "p.wood.2": "可再生能源原料",
    "p.en590.t": "EN590 柴油",
    "p.en590.d": "经营 EN 590 超低硫柴油。硫含量 10 ppm、十六烷值、密度与闪点纳入合同条款。韩国卸货按蔚山询价。",
    "p.en590.1": "EN 590 · ULSD",
    "p.en590.2": "交通 · 工业 · 发电",
    "p.en590.alt": "EN590 柴油储罐码头",
    "p.kaolin.t": "高岭土",
    "p.kaolin.d": "来自印尼勿里洞岛的工业高岭土。按白度与氧化铝为韩国及区域陶瓷、造纸与涂料买方匹配面条、块矿与粉体等级。",
    "p.kaolin.showroom": "典型规格",
    "p.kaolin.badge.al": "Al₂O₃",
    "p.kaolin.badge.bright": "白度",
    "p.kaolin.badge.origin": "勿里洞",
    "p.kaolin.badge.form": "供应形态",
    "p.kaolin.spec.origin.l": "产地",
    "p.kaolin.spec.origin.v": "印尼勿里洞",
    "p.kaolin.spec.form.l": "形态",
    "p.kaolin.spec.form.v": "面条 · 块矿 · 粉体",
    "p.kaolin.spec.al.l": "Al₂O₃",
    "p.kaolin.spec.port.l": "装货港",
    "p.kaolin.spec.port.v": "Tanjung Batu",
    "p.kaolin.note": "数据来自典型样品。合同吨位以装船前检验为准。",
    "p.kaolin.gallery": "高岭土现场照片",
    "p.kaolin.thumb.noodle": "查看面条级",
    "p.kaolin.thumb.lump": "查看块矿",
    "p.kaolin.thumb.powder": "查看粉体",
    "p.kaolin.thumb.mine": "查看露天矿",
    "p.kaolin.alt.noodle": "高岭土面条原料",
    "p.kaolin.alt.lump": "高岭土块矿",
    "p.kaolin.alt.powder": "高岭土粉体",
    "p.kaolin.alt.mine": "高岭土露天矿",
    "p.doc.profile": "公司简介",
    "p.doc.brief": "资源贸易简报",
    "p.doc.mfr": "制造商合作伙伴简介",
    "p.ask": "咨询此品项",
    "brief.tag": "VL M&C · Resources Trading",
    "brief.cover.title": "连接资源与一线的供应简报",
    "brief.cover.meta": "VL-RES-BRIEF · Rev. 2026.08 · 面向买方与合作伙伴",
    "brief.intro": "我们从菲律宾、哈萨克斯坦、澳大利亚、印尼、刚果（金）与赞比亚采购铜废料、铜精矿、铝锭、锡渣与镍渣、木颗粒、EN590 柴油及高岭土。EN590 按韩国蔚山卸货询价。价格与库存以询价时的报价与检验为准。",
    "brief.s1": "经营品项",
    "brief.s2": "资源产地",
    "brief.s3": "Incheon · Seoul",
    "brief.s4": "试运后扩量",
    "brief.market.t": "市场背景",
    "brief.cu.t": "铜废料",
    "brief.cu.p": "韩国 2025 年进口 HS 7404 约 323,000 MT，2026 年上半年约 176,000 MT。国际牌号如线材与 Millberry，以及水分与杂质控制，是贸易核心。",
    "brief.wood.t": "木颗粒",
    "brief.wood.p": "韩国 2025 年进口约 393 万 MT。印尼供应约 90 万 MT（23%），为核心产地。水分、热值与灰分纳入合同条款。",
    "brief.en590.t": "EN590 柴油",
    "brief.en590.p": "EN 590 为欧洲车用柴油规格。硫含量 10 ppm、十六烷值、密度与闪点纳入合同条款。韩国卸货按蔚山询价。产地、数量与价格以询价时的报价与检验为准。",
    "brief.disclaimer": "此为公开简报，不含交易对手与合同价格。可与公司简介一并转发。",
    "mfr.tag": "Producer Partner Brief · Resources",
    "mfr.cover.title": "面向生产伙伴的协作说明",
    "mfr.cover.meta": "VL-MFR-BRIEF · Rev. 2026.08 · 面向制造商 · 1 页",
    "mfr.lead": "VL M&amp;C 采购并交付资源。本页面向生产伙伴，在报价前使用。",
    "mfr.s1": "资源品项",
    "mfr.s2": "采购产地",
    "mfr.s3": "韩国据点",
    "mfr.s4": "装船前检验",
    "mfr.who.t": "据点",
    "mfr.vl.p": "VL M&amp;C 韩国总部。",
    "mfr.range.t": "采购范围",
    "mfr.range.res.t": "八类产品",
    "mfr.range.res.p": "铜废料 · 铜精矿 · 铝锭 · 锡/镍渣 · 木颗粒 · EN590 柴油 · 高岭土",
    "mfr.how.t": "合作方式",
    "mfr.how.1t": "锁定规格",
    "mfr.how.1p": "下单前锁定牌号、化验或 BOM。",
    "mfr.how.2t": "样品 · 检验",
    "mfr.how.2p": "确认样品或指定检验方。",
    "mfr.how.3t": "试运",
    "mfr.how.3p": "首批验证质量后扩量。",
    "mfr.how.4t": "重复供应",
    "mfr.how.4p": "合同内约定排期、包装与售后。",
    "mfr.ask.t": "我们需要什么 / 我们提供什么",
    "mfr.need.t": "来自制造商",
    "mfr.need.1": "与确认样品或化验一致的锁定规格",
    "mfr.need.2": "明确的月产能与交期",
    "mfr.need.3": "PSI 或指定检验方进场权限",
    "mfr.need.4": "出口包装、文件、PI 上的 Incoterms",
    "mfr.need.5": "在合同中写明结算依据与检验方法",
    "mfr.give.t": "我们负责的部分",
    "mfr.give.1": "在仁川与首尔负责采购、下单与合同",
    "mfr.give.3": "规格锁定后方下单",
    "mfr.give.4": "试运后重复批量",
    "mfr.give.5": "仅向公司账户付款",
    "mfr.next.t": "下一步",
    "mfr.next.p": "发送品项、锁定规格、月产能与首批数量。我们将回复规格锁定表。",
    "mfr.contact.t": "联系方式",
    "mfr.disc": "仅为一般介绍。价格、库存与船期以询价时报价为准。本简介不含内部交易对手与合同单价。请与买方简介及贸易简报分开发送。",
    "process.eyebrow": "航程",
    "process.title": "从扬帆到交付",
    "process.1t": "扬帆 · 需求",
    "process.1p": "优先锁定品项、牌号或规格、数量与交期。",
    "process.2t": "航行 · 检验",
    "process.2p": "从国内外供应商锁定匹配批次并检验质量。",
    "process.3t": "港口 · 交付",
    "process.3p": "对齐装运单证与卸货时间后交付。",
    "process.4t": "靠泊 · 售后",
    "process.4p": "重复供应按库存与船期衔接。",
    "contact.eyebrow": "联系",
    "contact.title": "告知品项\n与数量",
    "contact.lead": "请告知品项、数量与交期。我们回复可供情况并概述条款。",
    "contact.docs": "规格表与目录于询价后发送。",
    "contact.email": "邮箱",
    "contact.addr": "地址",
    "contact.addr.vl": "7-15, Cheongna Hannae-ro 72beon-gil, Seo-gu, Incheon, Republic of Korea",
    "form.kicker": "询价",
    "form.title": "索取报价",
    "form.name": "姓名 / 公司",
    "form.contact": "电话或邮箱",
    "form.contact.ph": "电话或邮箱",
    "form.item": "意向品项",
    "form.optRes": "产品",
    "form.optDocs": "文件",
    "form.msg": "留言",
    "form.msg.ph": "规格或牌号、预计数量、交期等",
    "form.submit": "打开邮件询价",
    "form.note": "将打开发送至 han4797@gmail.com 的邮件草稿。",
    "form.error": "请填写姓名/公司、联系方式与留言。",
    "form.mail.subject": "[VL M&C] 询价 — {item}",
    "form.mail.body": "姓名 / 公司：{name}\n联系方式：{contact}\n品项：{item}\n\n{message}",
    "form.sample.prefill": "我们希望申请 {item} 样品。请告知数量、交期与安装条件。",
    "form.catalog.prefill": "请发送 {item} 的目录与规格表。我们将提供所需规格与用途。",
    "menu.open": "打开菜单",
    "menu.close": "关闭菜单",
    "brand.home": "VL M&C 首页",
    "nav.main": "主菜单",
    "materials.label": "产品预览",
    "tablist.products": "产品分类",
    "tablist.docs": "可分享文件",
    "lang.group": "语言",
    "lang.ko": "韩语",
    "lang.id": "印尼语",
    "lang.en": "English",
    "form.item.copper": "铜废料",
    "form.item.conc": "铜精矿",
    "form.item.alu": "铝锭",
    "form.item.tin": "锡渣",
    "form.item.nick": "镍渣",
    "form.item.wood": "木颗粒",
    "form.item.en590": "EN590 柴油",
    "form.item.kaolin": "高岭土",
    "form.item.pick": "请选择品类",
    "form.item.profile": "公司简介",
    "form.item.brief": "资源贸易简报",
    "form.item.mfr": "制造商合作伙伴简介",
    "form.item.resdocs": "全部资料（简介与简报）",
    "form.item.other": "其他",
    "footer.blurb": "我们追寻产地，如同探险家追寻新大陆。VL M&amp;C。",
    "footer.explore": "探索",
    "footer.contact": "联系",
    "footer.top": "返回顶部",
    "lang.zh": "中文",
    "strip.met.p": "铜废料 · 铜精矿 · 铝锭 · 锡渣与镍渣",
    "strip.ene.p": "工业木颗粒 · EN590 柴油",
    "strip.min.p": "高岭土",
    "panel.met.lead": "铜废料与铜精矿、铝锭、锡渣与镍渣，按等级与成分匹配。",
    "panel.ene.lead": "工业木颗粒与 EN590 柴油，按含水率、热值与硫含量匹配。柴油按蔚山卸货报价。",
    "panel.min.lead": "印尼勿里洞高岭土，按白度与氧化铝含量供应条状、块状或粉状。",
    "track.cargo.en590": "EN590 柴油",
    "track.vessel.usn": "MV VL ULSD",
    "track.route.usn": "海上 → 蔚山",
  }
};

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const overlay = document.getElementById("navOverlay");
const menuBtn = document.getElementById("menuBtn");
const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
const year = document.getElementById("year");
const form = document.getElementById("inquiryForm");
const formNote = document.getElementById("formNote");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = {
  metals: document.getElementById("panel-metals"),
  energy: document.getElementById("panel-energy"),
  minerals: document.getElementById("panel-minerals")
};
const itemPart = {
  copper: "metals",
  concentrate: "metals",
  aluminum: "metals",
  tin: "metals",
  nickel: "metals",
  wood: "energy",
  en590: "energy",
  kaolin: "minerals"
};

const LANGS = ["ko", "id", "en", "zh"];
const HTML_LANG = { ko: "ko", id: "id", en: "en", zh: "zh-CN" };

function queryLang() {
  const q = String(new URLSearchParams(location.search).get("lang") || "").toLowerCase();
  return LANGS.includes(q) ? q : "";
}

function detectLang() {
  const fromQuery = queryLang();
  if (fromQuery) return fromQuery;
  const saved = localStorage.getItem(LANG_KEY);
  if (LANGS.includes(saved)) return saved;
  const navLang = String(navigator.language || "").toLowerCase();
  if (navLang.startsWith("id")) return "id";
  if (navLang.startsWith("en")) return "en";
  if (navLang.startsWith("zh")) return "zh";
  if (navLang.startsWith("ko")) return "ko";
  return "ko";
}

let lang = detectLang();
let menuOpen = false;

if (year) year.textContent = String(new Date().getFullYear());

/* ---------- Sticky header ---------- */
function syncHeader() {
  const y = window.scrollY;
  header.classList.toggle("is-scrolled", y > 12);
  header.classList.toggle("is-compact", y > 80);
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

/* ---------- Reveal (Intersection Observer) ---------- */
function revealNow(root) {
  const scope = root || document;
  if (scope.classList && scope.classList.contains("reveal")) {
    scope.classList.add("is-visible");
  }
  scope.querySelectorAll(".reveal").forEach((el) => {
    el.classList.add("is-visible");
  });
}

function initReveal() {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNow(document);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px -24px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.closest(".tab-panel[hidden], .profile-sheet[hidden]")) return;
    io.observe(el);
  });
}

initReveal();

/* ---------- Mobile menu ---------- */
function setMenu(open) {
  menuOpen = open;
  nav.classList.toggle("is-open", open);
  menuBtn.classList.toggle("is-open", open);
  header.classList.toggle("is-open", open);
  document.body.classList.toggle("is-menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", dict()[open ? "menu.close" : "menu.open"]);
  if (overlay) {
    if (open) overlay.hidden = false;
    overlay.classList.toggle("is-open", open);
    if (!open) {
      overlay.addEventListener("transitionend", () => {
        if (!menuOpen) overlay.hidden = true;
      }, { once: true });
    }
  }
}

menuBtn.addEventListener("click", () => setMenu(!menuOpen));
if (overlay) overlay.addEventListener("click", () => setMenu(false));

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuOpen) setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && menuOpen) setMenu(false);
});

/* ---------- Smooth in-page scroll ---------- */
function scrollToHash(hash) {
  const id = String(hash || "").replace("#", "");
  if (!id) return;
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

document.querySelectorAll('a[href^="#"]:not([data-goto])').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    setMenu(false);
    history.replaceState(null, "", href);
    goToItem(href);
  });
});

/* ---------- Active nav ---------- */
const sectionIds = ["about", "profile", "products", "network", "process", "contact"];

function syncActiveNav() {
  const marker = window.scrollY + header.offsetHeight + 48;
  let current = "";
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= marker) current = id;
  });
  nav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("is-current", href === `#${current}`);
  });
}

window.addEventListener("scroll", syncActiveNav, { passive: true });

/* ---------- Product tabs ---------- */
function activateTab(name, { focusTab = false } = {}) {
  if (!panels[name]) return;

  tabs.forEach((tab) => {
    const on = tab.dataset.tab === name;
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", String(on));
    tab.tabIndex = on ? 0 : -1;
    if (on && focusTab) tab.focus();
  });

  Object.keys(panels).forEach((key) => {
    const panel = panels[key];
    if (!panel) return;
    panel.hidden = key !== name;
  });

  revealNow(panels[name]);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + step + tabs.length) % tabs.length];
    activateTab(next.dataset.tab, { focusTab: true });
  });
});

/* ---------- Company profile / briefing sheets ---------- */
const sheetTabs = Array.from(document.querySelectorAll(".sheet-tab"));
const sheets = {
  profile: document.getElementById("sheet-profile"),
  briefing: document.getElementById("sheet-briefing"),
  mfr: document.getElementById("sheet-mfr")
};

function activateSheet(name, { focusTab = false } = {}) {
  if (!sheets[name]) return;

  sheetTabs.forEach((tab) => {
    const on = tab.dataset.sheet === name;
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", String(on));
    tab.tabIndex = on ? 0 : -1;
    if (on && focusTab) tab.focus();
  });

  Object.keys(sheets).forEach((key) => {
    const sheet = sheets[key];
    if (!sheet) return;
    sheet.hidden = key !== name;
  });

  revealNow(sheets[name]);
}

sheetTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateSheet(tab.dataset.sheet));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = sheetTabs[(index + step + sheetTabs.length) % sheetTabs.length];
    activateSheet(next.dataset.sheet, { focusTab: true });
  });
});

function goToItem(hash) {
  const id = String(hash || "").replace("#", "");
  if (!id) return;
  if (id === "library") {
    history.replaceState(null, "", "#products");
    requestAnimationFrame(() => scrollToHash("products"));
    return;
  }
  if (id === "briefing") {
    activateSheet("briefing");
    requestAnimationFrame(() => scrollToHash("profile"));
    return;
  }
  if (id === "mfr" || id === "manufacturer") {
    activateSheet("mfr");
    requestAnimationFrame(() => scrollToHash("profile"));
    return;
  }
  if (id === "profile") activateSheet("profile");
  if (itemPart[id]) activateTab(itemPart[id]);
  requestAnimationFrame(() => scrollToHash(id === "briefing" ? "profile" : id));
}

document.querySelectorAll("[data-goto]").forEach((el) => {
  el.addEventListener("click", (event) => {
    activateTab(el.dataset.goto);
    const href = el.getAttribute("href") || "";
    if (!href.startsWith("#")) return;
    event.preventDefault();
    setMenu(false);
    history.replaceState(null, "", href);
    requestAnimationFrame(() => goToItem(href));
  });
});

window.addEventListener("hashchange", () => goToItem(location.hash));

if (location.hash === "#briefing") {
  activateSheet("briefing");
  requestAnimationFrame(() => scrollToHash("profile"));
} else if (location.hash === "#mfr" || location.hash === "#manufacturer") {
  activateSheet("mfr");
  requestAnimationFrame(() => scrollToHash("profile"));
} else if (location.hash === "#library") {
  history.replaceState(null, "", "#products");
  requestAnimationFrame(() => scrollToHash("products"));
} else if (location.hash && itemPart[location.hash.replace("#", "")]) {
  activateTab(itemPart[location.hash.replace("#", "")]);
  requestAnimationFrame(() => goToItem(location.hash));
}

/* ---------- i18n ---------- */
function dict() {
  return i18n[lang] || i18n.ko;
}

const SITE_ORIGIN = "https://vlmnc.net/";

/* Keeps rel=canonical pointing at the URL that actually serves this language,
   so the hreflang alternates in <head> stay reciprocal. */
function syncCanonical() {
  const link = document.getElementById("canonicalLink");
  if (!link) return;
  link.setAttribute("href", queryLang() ? `${SITE_ORIGIN}?lang=${lang}` : SITE_ORIGIN);
}

function applyLang(next) {
  lang = LANGS.includes(next) ? next : "ko";
  const copy = dict();
  document.documentElement.lang = HTML_LANG[lang] || "ko";
  syncCanonical();
  langButtons.forEach((btn) => {
    const on = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", String(on));
  });
  menuBtn.setAttribute("aria-label", copy[menuOpen ? "menu.close" : "menu.open"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n")];
    if (!value) return;
    if (el.tagName === "OPTION") {
      el.textContent = value;
      return;
    }
    el.innerHTML = value.replace(/\n/g, "<br>");
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n-ph")];
    if (value) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n-alt")];
    if (value) el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = copy[el.getAttribute("data-i18n-aria")];
    if (value) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const active = gallery.querySelector("[data-gallery-src].is-active");
    const main = gallery.querySelector("[data-gallery-main]");
    const key = active?.getAttribute("data-i18n-gallery-alt");
    if (main && key && copy[key]) main.setAttribute("alt", copy[key]);
  });

  const optRes = document.getElementById("optgResource");
  const optDocs = document.getElementById("optgDocs");
  if (optRes && copy["form.optRes"]) optRes.label = copy["form.optRes"];
  if (optDocs && copy["form.optDocs"]) optDocs.label = copy["form.optDocs"];
  refreshTrackCopy();
}

/* ---------- Shipment tracking demo (mock) ---------- */
const TRACK_MAP = { w: 2000, h: 980 };
const trackSamplesEl = document.getElementById("trackSamples");

function pctToVb(x, y) {
  return [x / 100 * TRACK_MAP.w, y / 100 * TRACK_MAP.h];
}

function curvePath(pts) {
  const vb = (pts || []).map(([x, y]) => pctToVb(x, y));
  if (vb.length < 2) return "";
  const fmt = (p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`;
  if (vb.length === 2) return `M ${fmt(vb[0])} L ${fmt(vb[1])}`;
  let d = `M ${fmt(vb[0])}`;
  for (let i = 0; i < vb.length - 1; i += 1) {
    const p0 = vb[Math.max(0, i - 1)];
    const p1 = vb[i];
    const p2 = vb[i + 1];
    const p3 = vb[Math.min(vb.length - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${fmt(c1)} ${fmt(c2)} ${fmt(p2)}`;
  }
  return d;
}

const TRACK_SAMPLES = {
  "VL-DAR-2608-001": {
    vessel: "track.vessel.dar",
    cargo: "track.cargo.cu",
    route: "track.route.dar",
    pins: ["dar", "jkt", "icn"],
    duration: 9000,
    points: [
      [60.91, 64.86],
      [66.4, 72.2],
      [72.8, 69.4],
      [77.6, 65.6],
      [79.68, 64.43],
      [81.5, 57.2],
      [83.1, 49.4],
      [84.4, 41.2],
      [85.2, 33.25]
    ]
  },
  "VL-JKT-2608-014": {
    vessel: "track.vessel.jkt",
    cargo: "track.cargo.wood",
    route: "track.route.jkt",
    pins: ["jkt", "icn"],
    duration: 6500,
    points: [
      [79.68, 64.43],
      [81.6, 57.0],
      [83.2, 48.8],
      [84.5, 40.4],
      [85.2, 33.25]
    ]
  },
  "VL-USN-2608-021": {
    vessel: "track.vessel.usn",
    cargo: "track.cargo.en590",
    route: "track.route.usn",
    pins: ["uls"],
    duration: 5200,
    points: [
      [78.0, 52.0],
      [82.4, 44.0],
      [84.6, 38.2],
      [85.62, 34.35]
    ]
  }
};

const trackForm = document.getElementById("trackForm");
const blInput = document.getElementById("blInput");
const trackMsg = document.getElementById("trackMsg");
const trackHud = document.getElementById("trackHud");
const trackMap = document.querySelector(".network-map");
const trackRoute = document.getElementById("trackRoute");
const trackRouteBg = document.getElementById("trackRouteBg");
const trackShip = document.getElementById("trackShip");
const trackBar = document.getElementById("trackBar");
const trackStatus = document.getElementById("trackStatus");
let trackRaf = 0;
let trackActive = null;
let trackProgress = 0;

function statusKeyForProgress(p) {
  if (p < 0.08) return "track.status.search";
  if (p < 0.18) return "track.status.depart";
  if (p < 0.86) return "track.status.transit";
  if (p < 1) return "track.status.arrive";
  return "track.status.done";
}

function refreshTrackCopy() {
  if (!trackActive || !trackHud || trackHud.hidden) return;
  const copy = dict();
  const sample = TRACK_SAMPLES[trackActive];
  if (!sample) return;
  const bl = document.getElementById("trackBlVal");
  const vessel = document.getElementById("trackVesselVal");
  const cargo = document.getElementById("trackCargoVal");
  const route = document.getElementById("trackRouteVal");
  if (bl) bl.textContent = trackActive;
  if (vessel) vessel.textContent = copy[sample.vessel] || sample.vessel;
  if (cargo) cargo.textContent = copy[sample.cargo] || sample.cargo;
  if (route) route.textContent = copy[sample.route] || sample.route;
  if (trackStatus) trackStatus.textContent = copy[statusKeyForProgress(trackProgress)] || "";
}

function setTrackPins(names) {
  document.querySelectorAll(".map-pin").forEach((pin) => pin.classList.remove("is-on-route"));
  (names || []).forEach((key) => {
    document.querySelector(`.map-pin[data-pin="${key}"]`)?.classList.add("is-on-route");
  });
}

function placeShip(path, len, t) {
  if (!trackShip || !path || len <= 0) return;
  const d = Math.min(len, Math.max(0, len * t));
  const p = path.getPointAtLength(d);
  const p2 = path.getPointAtLength(Math.min(len, d + 12));
  const ang = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI + 90;
  trackShip.removeAttribute("hidden");
  trackShip.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${ang})`);
}

function stopTrackAnim() {
  if (trackRaf) cancelAnimationFrame(trackRaf);
  trackRaf = 0;
}

function runTrack(bl) {
  const sample = TRACK_SAMPLES[bl];
  if (!sample || !trackRoute || !trackRouteBg) return;

  stopTrackAnim();
  trackActive = bl;
  trackProgress = 0;
  trackMap?.classList.add("is-tracking");
  trackSamplesEl?.classList.remove("is-hint");
  if (trackHud) trackHud.hidden = false;
  if (trackMsg) {
    trackMsg.hidden = true;
    trackMsg.textContent = "";
  }
  blInput?.classList.remove("is-invalid");
  document.querySelectorAll(".track-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.bl === bl);
  });
  setTrackPins(sample.pins);

  const d = curvePath(sample.points);
  trackRouteBg.setAttribute("d", d);
  trackRoute.setAttribute("d", d);
  const len = trackRoute.getTotalLength();
  trackRoute.style.strokeDasharray = String(len);
  trackRoute.style.strokeDashoffset = String(len);
  refreshTrackCopy();

  const duration = reduceMotion ? 1 : sample.duration;
  const start = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const ease = 1 - (1 - t) ** 3;
    trackProgress = ease;
    trackRoute.style.strokeDashoffset = String(len * (1 - ease));
    if (trackBar) trackBar.style.width = `${Math.round(ease * 100)}%`;
    placeShip(trackRoute, len, ease);
    if (trackStatus) trackStatus.textContent = dict()[statusKeyForProgress(ease)] || "";
    if (t < 1) {
      trackRaf = requestAnimationFrame(frame);
    } else {
      trackRaf = 0;
      trackProgress = 1;
      refreshTrackCopy();
    }
  }

  if (reduceMotion) {
    trackProgress = 1;
    trackRoute.style.strokeDashoffset = "0";
    if (trackBar) trackBar.style.width = "100%";
    placeShip(trackRoute, len, 1);
    refreshTrackCopy();
    return;
  }

  trackRaf = requestAnimationFrame(frame);
}

function normalizeBl(value) {
  return String(value || "").trim().toUpperCase().replace(/\s+/g, "");
}

if (trackForm && blInput) {
  trackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const bl = normalizeBl(blInput.value);
    blInput.value = bl;
    if (TRACK_SAMPLES[bl]) {
      runTrack(bl);
      return;
    }
    stopTrackAnim();
    trackActive = null;
    trackProgress = 0;
    trackMap?.classList.remove("is-tracking");
    setTrackPins([]);
    if (trackHud) trackHud.hidden = true;
    if (trackShip) trackShip.setAttribute("hidden", "");
    if (trackRoute) trackRoute.setAttribute("d", "");
    if (trackRouteBg) trackRouteBg.setAttribute("d", "");
    blInput.classList.add("is-invalid");
    trackSamplesEl?.classList.add("is-hint");
    if (trackMsg) {
      trackMsg.hidden = false;
      trackMsg.textContent = dict()["track.unknown"] || "";
    }
    document.querySelectorAll(".track-chip").forEach((chip) => chip.classList.remove("is-active"));
  });

  document.querySelectorAll(".track-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      blInput.value = chip.dataset.bl || "";
      trackForm.requestSubmit();
    });
  });
}

applyLang(lang);

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const next = btn.getAttribute("data-lang");
    if (!LANGS.includes(next) || next === lang) return;
    localStorage.setItem(LANG_KEY, next);
    const url = new URL(location.href);
    url.searchParams.set("lang", next);
    history.replaceState(null, "", url);
    applyLang(next);
  });
});

/* ---------- Inquiry form (mailto) ---------- */
function fillTemplate(template, data) {
  return template.replace(/\{(\w+)\}/g, (_, key) => data[key] ?? "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const contact = String(data.get("contact") || "").trim();
  const itemRaw = String(data.get("item") || "").trim();
  const message = String(data.get("message") || "").trim();
  const copy = dict();
  const item = itemRaw || copy["form.item.other"];

  const nameInput = form.elements.namedItem("name");
  const contactInput = form.elements.namedItem("contact");
  const messageInput = form.elements.namedItem("message");

  [nameInput, contactInput, messageInput].forEach((field) => {
    if (field && field.classList) field.classList.remove("is-invalid");
  });

  const missing = [];
  if (!name) missing.push(nameInput);
  if (!contact) missing.push(contactInput);
  if (!message) missing.push(messageInput);

  if (missing.length) {
    missing.forEach((field) => field && field.classList.add("is-invalid"));
    if (formNote) {
      formNote.textContent = copy["form.error"];
      formNote.classList.add("is-error");
    }
    missing[0]?.focus();
    return;
  }

  if (formNote) {
    formNote.textContent = copy["form.note"];
    formNote.classList.remove("is-error");
  }

  const subject = encodeURIComponent(fillTemplate(copy["form.mail.subject"], { item }));
  const body = encodeURIComponent(fillTemplate(copy["form.mail.body"], { name, contact, item, message }));
  window.location.href = `mailto:${INQUIRY_MAIL}?subject=${subject}&body=${body}`;
});

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const main = gallery.querySelector("[data-gallery-main]");
  gallery.querySelectorAll("[data-gallery-src]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!main) return;
      main.src = btn.getAttribute("data-gallery-src");
      const picture = main.parentElement;
      if (picture && picture.tagName === "PICTURE") {
        const source = picture.querySelector("source");
        const set = btn.getAttribute("data-gallery-srcset");
        if (source && set) source.srcset = set;
      }
      const key = btn.getAttribute("data-i18n-gallery-alt");
      const alt = key ? dict()[key] : "";
      if (alt) main.setAttribute("alt", alt);
      gallery.querySelectorAll("[data-gallery-src]").forEach((other) => {
        other.classList.toggle("is-active", other === btn);
      });
    });
  });
});

document.querySelectorAll("[data-item]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const select = document.getElementById("itemSelect");
    if (select) select.value = btn.dataset.item;
    const message = form?.elements.namedItem("message");
    if (message && !String(message.value || "").trim()) {
      if (btn.dataset.intent === "sample") {
        message.value = fillTemplate(dict()["form.sample.prefill"] || "", {
          item: btn.dataset.item
        });
      } else if (btn.dataset.intent === "catalog") {
        message.value = fillTemplate(dict()["form.catalog.prefill"] || "", {
          item: btn.dataset.item
        });
      }
    }
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth"
    });
    form.elements.namedItem("name")?.focus();
  });
});

(function initPrintLayout() {
  const wantPrint = /(?:^|[?&])print=1(?:&|$)/.test(location.search);

  function expandForPrint() {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    document.querySelectorAll("img[loading='lazy']").forEach((img) => {
      img.loading = "eager";
    });
    document.querySelectorAll(".tab-panel, .profile-sheet").forEach((el) => {
      if (el.hasAttribute("hidden")) {
        el.dataset.printWasHidden = "1";
        el.hidden = false;
      }
    });
  }

  function restoreAfterPrint() {
    if (wantPrint) return;
    document.querySelectorAll("[data-print-was-hidden]").forEach((el) => {
      el.hidden = true;
      delete el.dataset.printWasHidden;
    });
  }

  window.addEventListener("beforeprint", expandForPrint);
  window.addEventListener("afterprint", restoreAfterPrint);
  if (wantPrint) expandForPrint();
})();
