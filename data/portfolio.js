/*
 * 포트폴리오 내용은 이 파일만 고치면 됩니다.
 * - 프로젝트를 추가하려면 projects 배열에 객체를 하나 더 넣으세요.
 * - 이미지는 assets/images/ 폴더에 넣고 경로를 적으세요.
 * - sections: 상세 보기에서 "협업 / 코어플레이 설계 / 시스템 기획 …" 처럼 항목별로 보여줄 내용
 */
window.PORTFOLIO = {
  profile: {
    name: "성승민",
    role: "Game Designer",
    greeting: "안녕하세요,<br />기획자 성승민입니다.",
    intro:
      "Notion · Asana로 기획과 일정을 관리하고, Godot · Codex로 직접 구현해 검증하며 재미를 설계합니다.",
    photo: "assets/images/profile.jpg",
    about: [
      "플레이어가 반복해서 하는 행동 하나하나가 다음 목표로 자연스럽게 이어지도록 만드는 데 관심이 많은 게임 기획자입니다. 코어 루프와 시스템을 설계할 때는 '이 행동이 왜 재미있는가'에서 출발해 보상과 성장 구조로 연결하는 것을 중요하게 생각합니다.",
      "기획서로 끝내지 않고 Godot와 Codex로 직접 프로토타입을 만들고, 밸런싱 툴과 맵 에디터처럼 팀의 반복 작업을 줄이는 도구도 함께 만듭니다. 베타테스트 데이터와 플레이 테스트 결과를 바탕으로 개선 우선순위를 정하고, Asana로 이슈와 일정을 관리하며 팀이 같은 방향을 보도록 돕습니다.",
      "실용음악을 전공해 배경음악과 효과음 같은 사운드 리소스도 직접 기획하고 제작합니다.",
    ],
    history: [
      { year: "2026", text: "NHN GAME X AI 해커톤 최우수상 수상 — '작은 화랑, 큰 그림'" },
      { year: "2026", text: "인디게임개발팀 '삼인칭' 참여" },
      { year: "2026", text: "AI 기반 덱 편성 게임 'Sketch Kingdom' 기획·운영" },
      { year: "2026", text: "샌드박스 생활 게임 'TypeCraft' 1인 개발" },
      { year: "2026", text: "로그라이트 낚시 게임 '릴 투 리치스' 기획" },
      { year: "2026", text: "모바일 퍼즐 게임 '차곡차곡 스도쿠' 1인 개발 (진행 중)" },
      { year: "학력", text: "백석예술대학교 실용음악과 졸업" },
    ],
  },

  skills: [
    { group: "기획", items: ["시스템 기획", "코어 루프 설계", "전투 · 경제 밸런싱", "미니게임 기획"] },
    { group: "운영 · 협업", items: ["베타테스트 운영", "QA / PM", "데이터 기반 개선", "일정 관리"] },
    { group: "제작", items: ["Godot 프로토타이핑", "툴 · 에디터 제작", "Blender 3D 모델링", "사운드 제작"] },
    { group: "Tools", items: ["Notion", "Asana", "Godot", "Blender", "Codex", "Claude Code", "Git"] },
  ],

  // 분류가 한 가지뿐이면 필터 버튼은 자동으로 숨겨집니다.
  categories: { all: "전체", game: "게임" },

  projects: [
    {
      title: "차곡차곡 스도쿠",
      category: "game",
      genre: "퍼즐 · 방 꾸미기",
      period: "2026.11 – 진행 중",
      team: "1인 개발",
      roles: ["기획", "개발", "3D 오브제", "사운드", "QA · 릴리스"],
      summary: "스도쿠를 풀어 모은 가구로 나만의 작은 방을 완성하는 모바일 퍼즐 게임.",
      description:
        "스도쿠 한 판의 성취가 방을 채우는 보상으로 이어지도록 설계한 세로형 모바일 게임입니다. 10개 지역 · 400문제 · 지역별 보상 가구 20종을 기획부터 제작, Android 실기기 배포까지 혼자 진행하고 있습니다.",
      tech: ["Godot", "GDScript", "Blender", "Codex", "Claude Code", "Git"],
      image: "assets/images/sudoku-room-glass.jpg",
      links: { demo: "https://3rd-person-team.github.io/sudoku-web-demo/" },
      sections: [
        {
          title: "코어 루프 설계",
          points: [
            "'스도쿠 풀기 → 별 획득 → 선물 상자 개봉 → 가구 배치 → 방 완성'의 순환을 설계해, 퍼즐 한 판의 성취가 눈에 보이는 공간 변화로 남도록 했습니다.",
            "처음 3별을 달성한 스테이지만 가구를 지급하고, 결과 화면에서는 닫힌 선물 상자만 보여줘 홈으로 돌아가 여는 기대감을 만들었습니다. 연속 클리어로 보상이 쌓여도 상자는 하나로 모아 한 번에 여러 가구를 받는 순간을 연출했습니다.",
            "1 · 2별일 때만 재도전 버튼을 보여주고 3별이면 숨겨, 더 좋은 기록을 노릴 이유가 있을 때만 재도전을 권하도록 했습니다.",
          ],
          images: ["assets/images/sudoku-title.jpg", "assets/images/sudoku-room-clock.jpg"],
        },
        {
          title: "퍼즐 · 난이도 설계",
          points: [
            "10개 지역에 일반 20문제와 어려움 20문제씩, 총 400문제를 구성했습니다. 모든 문제는 정답이 하나뿐이고, 단일 후보 · 숨은 단일 후보 · 후보 쌍 등 정해진 풀이 기법만으로 끝까지 풀리도록 단서를 남겼습니다.",
            "일반 모드는 쉬운 문제에서 시작해 점진적으로 어려워지고, 별 1개를 대가로 쓰는 단계별 힌트를 제공합니다. 어려움 모드는 힌트 없이 3회 오답 시 실패하되 무료로 재도전할 수 있게 해, 긴장감과 부담 사이의 균형을 잡았습니다.",
            "직전 지역 일반 20문제를 마치면 다음 지역이, 해당 지역 일반 20문제를 마치면 어려움이 열리도록 해금 흐름을 설계했습니다.",
          ],
          images: ["assets/images/sudoku-stages.jpg", "assets/images/sudoku-puzzle.jpg"],
        },
        {
          title: "UI / UX 기획",
          points: [
            "세로 720×1280 화면에서 판과 입력 버튼이 스크롤 없이 한 화면에 들어오도록 퍼즐 화면을 배치하고, 숫자를 먼저 선택한 뒤 확정하는 2단계 입력으로 휴대폰에서의 오입력을 줄였습니다.",
            "방 벽의 스도쿠 종이를 누르면 종이가 확대되며 20개 스테이지가 펼쳐지도록 해, 메뉴 대신 공간 안의 사물로 퍼즐에 진입하게 했습니다.",
            "타이틀은 첫 실행 · 진행 중 · 미완료 판 보유 상태에 따라 '시작하기 / 홈으로 / 이어하기'를 다르게 보여주고, 마지막으로 보던 방과 마지막으로 풀던 퍼즐을 각각 저장해 돌아오는 흐름을 정리했습니다.",
          ],
        },
        {
          title: "콘텐츠 · 오브제 제작",
          points: [
            "숲이 보이는 작은 방부터 카페 · 아틀리에 · 도서실 · 산장 · 시계 수리점 · 유리 공방까지 지역마다 콘셉트를 정하고, 보상 가구 20종씩을 Blender로 모델링했습니다.",
            "가구마다 8가지 배색과 방 테마 8종을 제공해 같은 보상으로도 각자 다른 방을 꾸밀 수 있게 했습니다.",
            "어려움 모드 완료 보상으로 시계 수리점의 투르비용처럼 정교한 기계 구조의 희귀 오브제를 따로 제작하고, 최대 2.6배까지 확대해 감상할 수 있게 해 일반 보상과 구분되는 수집 목표를 만들었습니다.",
          ],
          images: ["assets/images/sudoku-tourbillon.jpg", "assets/images/sudoku-tourbillon-zoom.jpg"],
        },
        {
          title: "AI 협업 제작 파이프라인",
          points: [
            "승인한 기준 이미지로 화풍을 고정하는 도구를 만들어, AI로 생성하는 UI · 타이틀 시안이 기존 화풍에서 벗어나지 않도록 관리했습니다.",
            "Splice 샘플로 사운드를 제작하고, 사용한 소스와 라이선스 근거를 대장으로 기록하는 절차를 만들었습니다.",
            "Codex와 Claude Code 세션을 기능 · 오브제 · 사운드 · 배포 담당으로 나누고, 인계 문서와 작업 범위 기록으로 병렬 작업의 충돌을 줄였습니다.",
          ],
        },
        {
          title: "QA · 릴리스 관리",
          points: [
            "Android 실기기(Z Fold8)에 빌드를 설치해 확인하며, 기존 저장을 읽을 수 없거나 확정된 기능이 빠진 빌드는 설치하지 않는 릴리스 기준을 세웠습니다.",
            "3D 오브제 최대 확대 상태에서 5분 연속 회전 시 평균 57 FPS와 기기 발열을 측정해 성능 기준과 남은 개선 과제를 기록했습니다.",
            "저장 형식이 바뀔 때마다 이전 저장의 이관과 보상 중복 지급 방지를 확인하고, 확정 버전을 태그로 남겨 되돌릴 기준점을 관리했습니다.",
          ],
        },
      ],
    },
    {
      title: "작은 화랑, 큰 그림",
      category: "game",
      genre: "미술관 경영 시뮬레이션",
      period: "2026.09.04 – 09.06",
      team: "3인 개발",
      roles: ["게임 기획", "사운드"],
      award: "NHN GAME X AI 해커톤 최우수상",
      summary: "AI 화가와 그 해의 경험을 전시하는 2D 미술관 경영 시뮬레이션.",
      tech: ["Godot", "Codex", "Asana", "Git"],
      image: "assets/images/gallery-core.jpg",
      links: { demo: "https://3rd-person-team.github.io/nan26-final/" },
      sections: [
        {
          title: "협업",
          points: [
            "시니어 프로그래머 2명에게 기획 의도와 구현 방향을 설명하고, 핵심 경험과 작업 우선순위를 기준으로 업무를 배분하며 개발을 진행했습니다.",
            "이러한 협업을 통해 게임의 완성도를 높였고, 팀은 최우수상을 수상했습니다.",
          ],
          images: ["assets/images/gallery-collab.jpg", "assets/images/gallery-asana.jpg"],
        },
        {
          title: "코어플레이 설계",
          points: [
            "관람객의 취향을 읽고 전시를 개선하는 재미를 위해 '단서 확인 → 작품 의뢰 → 작품 배치 · 가격 설정 → 관람객 반응 확인'의 핵심 순환을 설계했습니다.",
            "감상평과 가격 반응을 구분해, 다음 의뢰와 전시에서 무엇을 바꿀지 판단할 수 있도록 했습니다.",
            "이미지 생성 API의 대기 시간을 게임 진행에 녹이기 위해 화가의 작업 속도에 따라 1~4일의 제작 기간을 설정했습니다. 작품이 제작되는 동안 기존 소장품으로 전시를 운영하고 수익을 다음 의뢰와 화가 고용에 활용하도록 설계해, 생성 대기 중에도 플레이가 이어지게 했습니다.",
          ],
          images: ["assets/images/gallery-core.jpg", "assets/images/gallery-core2.jpg"],
        },
        {
          title: "미니게임 기획 및 제작",
          points: [
            "반복되는 작품 의뢰와 전시 운영 과정에서 지루함을 줄이고 플레이에 변화를 주기 위해 연필 깎기 · 팔레트 닦기 · 화방 도구 정리 미니게임을 기획했습니다.",
            "각 미니게임의 조작 방식 · 완료 조건 · 보상 설계부터 제작과 인게임 적용까지 직접 담당했습니다.",
            "완료 보상을 화가의 스트레스 감소와 다음 작품 의뢰 비용 할인으로 연결해, 미니게임이 화랑 운영에도 도움이 되도록 구성했습니다.",
          ],
          images: ["assets/images/gallery-mini1.jpg", "assets/images/gallery-mini2.jpg", "assets/images/gallery-mini3.jpg"],
        },
        {
          title: "시스템 기획",
          points: [
            "같은 의뢰라도 화가에 따라 다른 결과가 나오도록, 화가의 능력치와 성향이 제작 지시 해석에 영향을 주는 시스템을 기획했습니다.",
            "지시 이해력 · 재료 숙련도 · 독창성 등을 반영해 원하는 작품에 맞는 화가를 선택하는 판단을 만들었습니다.",
            "관람객의 취향과 작품의 감각 특성, 판매 가격을 연결한 평가 · 판매 구조를 설계했습니다. 작품에 대한 감상과 가격 반응을 구분해 보여줌으로써, 판매 결과를 바탕으로 다음 제작 지시와 전시 구성 · 가격을 조정할 수 있도록 했습니다.",
          ],
          images: ["assets/images/gallery-system1.jpg", "assets/images/gallery-system2.jpg"],
        },
      ],
    },
    {
      title: "Sketch Kingdom",
      category: "game",
      genre: "라인 디펜스",
      period: "2026.05 – 2026.07",
      team: "3인 개발",
      roles: ["게임 기획", "사운드", "QA / 운영"],
      summary: "직접 그린 그림이 AI 전투 유닛이 되는 드로잉 라인 디펜스.",
      tech: ["Godot", "Codex", "Asana", "Git"],
      image: "assets/images/sketch-core.jpg",
      links: { demo: "https://sketch-kingdom.up.railway.app" },
      sections: [
        {
          title: "시스템 기획",
          points: [
            "유저의 그림을 실제 전투에서 활용할 수 있도록, AI가 그림의 특징을 분석해 유닛의 전투 속성을 부여하도록 설계했습니다.",
            "그려진 유닛이 일회성 결과물로 끝나지 않도록, 원본의 특징을 유지한 채 AI가 외형을 덧그리는 오브 진화 시스템을 기획해 수집과 성장 동기를 강화했습니다.",
          ],
          images: ["assets/images/sketch-draw.jpg", "assets/images/sketch-system.jpg"],
        },
        {
          title: "코어플레이 설계",
          points: [
            "유닛의 배치와 조합이 전투 결과에 영향을 주도록 스테이지 기반 라인 디펜스 구조를 설계했습니다.",
            "단조로운 유닛 운용을 방지하기 위해 전투 역할을 구분하고, 조합에 따라 강점과 약점이 드러나는 상성 구조를 기획했습니다.",
          ],
          images: ["assets/images/sketch-core.jpg", "assets/images/sketch-core2.jpg"],
        },
        {
          title: "전투 밸런싱",
          points: [
            "특정 유닛에 치우치지 않도록 역할별 강점이 드러나게 유닛과 몬스터의 전투 능력치를 함께 조정했습니다.",
            "반복 테스트와 수치 보정에 걸리는 시간을 줄이기 위해 프로그래머와 밸런싱 에디터를 기획하고, 플레이테스트 결과를 바탕으로 스테이지 난이도를 지속적으로 조절했습니다.",
          ],
          images: ["assets/images/sketch-balance.jpg"],
        },
        {
          title: "베타테스트 운영 기획",
          points: [
            "플레이 경험과 진행 난이도를 실제 사용자 관점에서 검증하기 위해 소규모 베타테스트를 기획 · 운영했습니다.",
            "주관적인 의견만 반영되지 않도록 주요 행동과 진행 상태 등 수집 데이터를 정의하고, 운영 도구와 로그 적재를 프로그래머에게 요청했습니다.",
            "이후 로그와 설문 결과를 바탕으로 개선 우선순위와 후속 개발 계획을 수립했습니다.",
          ],
          images: ["assets/images/sketch-beta.jpg"],
        },
        {
          title: "QA / PM",
          points: [
            "기능 변경 과정에서 발생할 수 있는 진행 불가 상황을 조기에 발견하기 위해 매일 플레이 테스트를 진행하고, 문제를 재현 절차 · 결과 · 우선순위로 이슈화했습니다.",
            "Asana에서 담당자와 진행 상태를 관리해 중요 이슈의 누락을 방지하고, 해결 순서를 팀 제작 일정에 반영했습니다.",
          ],
          images: ["assets/images/sketch-qa.jpg"],
        },
        {
          title: "사운드 기획 및 제작",
          points: [
            "화면 분위기와 플레이 행동에 대한 피드백 전달을 위해 화면 · 상황별 배경음악과 효과음 및 사운드 리소스를 제작했습니다.",
            "구현 누락과 타이밍 오류를 줄이기 위해 재생 조건을 일람으로 프로그래머에게 전달하고 적용 과정을 관리했습니다.",
          ],
          images: ["assets/images/sketch-sound.jpg"],
        },
      ],
    },
    {
      title: "TypeCraft",
      category: "game",
      genre: "샌드박스 시뮬레이션",
      period: "2026.06 – 2026.07",
      team: "1인 개발",
      roles: ["기획", "개발", "콘텐츠 제작", "QA"],
      summary: "타이핑으로 자원을 채집하고 산업 거점을 성장시키는 경영 게임.",
      tech: ["Godot", "Codex", "Git"],
      image: "assets/images/typecraft-system.jpg",
      links: { demo: "https://typecraftgame.com/" },
      sections: [
        {
          title: "시스템 기획",
          points: [
            "타이핑을 월드 행동의 공용 규칙으로 만들어, 대상 앞에서 단어를 입력하면 벌목 · 채광 · 농사 · 제작 · 판매가 실행되도록 설계했습니다.",
            "반복 채집의 지루함을 줄이고 성장 변화의 재미를 주기 위해 숲 · 광산 · 농장 · 공장 · 항구를 하나의 생산망으로 연결하고, 장비 · 시설 · 자동 생산의 해금에 따라 직접 채집에서 산업 운영으로 플레이 방식이 확장되도록 구성했습니다.",
          ],
          images: ["assets/images/typecraft-system.jpg", "assets/images/typecraft-system2.jpg"],
        },
        {
          title: "코어플레이 설계",
          points: [
            "타이핑 채집이 단순 반복으로 끝나지 않고 성장 목표로 이어지도록 '수동 채집 → 판매 · 보존 → 제작 · 시설 강화 → 생산 효율 증가 → 상위 지역 진입'의 구조를 설계했습니다.",
            "자원을 바로 판매할지 성장에 투자할지 선택하게 해, 반복 플레이에 직접 판단의 재미를 더했습니다.",
          ],
          images: ["assets/images/typecraft-core.jpg", "assets/images/typecraft-core2.jpg"],
        },
        {
          title: "성장 · 경제 밸런싱",
          points: [
            "새 지역 해금 후에도 이전 지역 자원의 가치가 유지되도록, 각 지역에서 획득한 자원이 다음 지역의 해금과 시설 건설에 사용되는 성장 구조를 설계했습니다.",
            "자원 활용 방식이 한쪽에 치우치지 않도록 판매 · 제작 · 시설 투자 사이에 선택 관계를 만들고, 보관 한도로 자원 축적과 자동 생산의 성장 속도를 조절했습니다.",
          ],
          images: ["assets/images/typecraft-balance.jpg"],
        },
        {
          title: "인게임 맵 에디터",
          points: [
            "월드 배치를 수정할 때마다 Godot 씬과 데이터를 편집해야 하는 반복 작업을 줄이기 위해, 게임 안에서 건물 · 소품 · 길 · 금지구역을 배치하고 저장하는 맵 에디터를 개발했습니다.",
            "이동 · 회전 · 크기 조절 · 복제 · 충돌 · 그림자 영역 편집을 제작해, 결과를 실제 플레이 화면에서 바로 확인하는 방식으로 월드 제작 시간을 단축했습니다.",
          ],
          images: ["assets/images/typecraft-editor.jpg"],
        },
      ],
    },
  ],

  contact: [
    { label: "Email", value: "ssm041830@naver.com", href: "mailto:ssm041830@naver.com" },
    { label: "GitHub", value: "github.com/Aquanaut-A", href: "https://github.com/Aquanaut-A" },
  ],
};
