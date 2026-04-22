export const portfolioData = {
  hero: {
    name: '정진화',
    title: 'AI/ML 엔지니어',
    tagline: 'From abstraction to application, built on strong fundamentals.',
    subtagline: '',
    intro:
      'RAG 시스템, LLM Agent, 모델 경량화 같은 AI/ML 주제를 실제로 설계·구현해왔습니다. 문제를 추상화해 적절한 방법론으로 연결하는 방식으로 일하며, 설계부터 구현과 검증까지 엔드 투 엔드로 수행합니다.',
    email: 'jhjeong796@gmail.com',
    githubUrl: 'https://github.com/jhjeong-lab',
    backgroundImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    badges: ['AI 시스템 설계', 'AI Agent', 'LLM', 'Research Engineering'],
  },
  about: {
    title: '도메인을 이해하고, 방법론을 선택하고, 설계·구현합니다.',
    description:
      'AI/ML 엔지니어로서 LLM Agent, 모델 경량화, RAG 같은 주제를 설계하고 구현해왔습니다. 수학 전공에서 온 구조적 사고와 분석 훈련이 문제 정의와 방법론 선택에 기반이 되어주며, 프로젝트에서는 아키텍처 설계부터 모델·파이프라인 구현, 실험과 검증까지 엔드 투 엔드로 기여합니다.',
    highlights: [
      {
        label: '관심 분야',
        value: 'AI Agent Systems, Foundation Models, ML Engineering',
      },
      {
        label: '강점',
        value: '문제의 핵심을 빠르게 파악하고, 적절한 방식으로 끝까지 구현',
      },
      {
        label: '지향점',
        value: '연구의 엄밀함과 제품의 실용성 사이를 잇는 엔지니어링',
      },
    ],
    education: [
      {
        degree: '수리과학 이학석사',
        school: '서울대학교',
        major: '수리과학',
        period: '서울 | 2025년 8월 졸업',
      },
      {
        degree: '수학 이학사',
        school: '성균관대학교',
        major: '수학',
        period: '수원 | 2023년 2월 졸업',
      },
    ],
  },
  skills: [
    'Python',
    'Pytorch',
    'MATLAB',
    'SQL',
    'Transformers',
    'Hugging Face',
    'LangChain',
    'FastAPI',
    'Vector DB',
    'RAG',
    'vLLM',
    'TDA',
  ],
  projects: [
    {
      name: 'SKALA Final Project',
      title: 'ESG 중대성 평가를 위한 이슈 풀 구성 AI 시스템',
      summary:
        'ESG 경영관리팀의 반복적인 이슈 도출과 리포트 작성을 줄이기 위해, 문서 검색부터 이슈 생성과 보고서 초안 작성까지 이어지는 End-to-End AI 파이프라인을 설계했습니다.',
      period: '2025.11 - 2025.12',
      team: '6인 팀 프로젝트',
      myRole:
        'AI 서비스 아키텍처 설계, Vector DB 및 임베딩 파이프라인 설계, RAG 파이프라인 구현, 프롬프트 전략 수립, Data, API 흐름 정리.',
      href: null,
      background: [
        'ESG 공시 의무화 확대로 기업 ESG 경영관리팀의 업무 부담이 증가하고 있습니다.',
        '이슈풀 구성(2~6주)과 보고서 작성(1~2개월)이 매년 반복되는 수작업 프로세스입니다.',
      ],
      problems: [
        'ESG 표준, 뉴스, 내부 문서, 벤치마킹 데이터가 산개되어 있어 이슈 도출을 위한 통합 검색이 불가능했습니다.',
        '이슈 도출 → 설문 → 중대성 평가 → 리포트 작성까지 전 과정이 수동이었습니다.',
        '결과에 어떤 문서가 근거가 되었는지 남지 않으면 실무 신뢰성이 떨어졌습니다.',
        'Frontend, Spring Boot, AI 서비스가 병렬로 개발되는 상황에서 호출 순서와 데이터 형식이 어긋날 위험이 컸습니다.',
      ],
      solutions: [
        'FastAPI 기반 AI 서비스 아키텍처를 설계했습니다.',
        'ESG 문서 유형별 Qdrant 컬렉션 분리 설계와 메타데이터 구조를 구성했습니다.',
        '이슈 생성, 보고서 초안, 챗봇에 공통으로 쓰이는 RAG 파이프라인을 구현했습니다.',
        '데이터 흐름과 API 명세를 정리해 팀 간 인터페이스를 같은 흐름으로 맞췄습니다.',
        '근거 텍스트와 출처가 함께 남도록 프롬프트 형식을 설계했습니다.',
      ],
      results: [
        '이슈풀 생성 프로세스 2~6주 → 5분, 리포트 초안 1~2개월 → 5분으로 단축 (기대효과 기준).',
        'ESG 이슈 도출부터 보고서 생성까지 이어지는 End-to-End AI 파이프라인을 완성했습니다.',
        '이슈별 근거 텍스트와 출처를 함께 남기는 구조를 설계했습니다.',
        'RAG 챗봇으로 이해관계자 외부 질의에 즉시 대응 가능한 구조를 마련했습니다.',
        '단일 기능 추가보다 서비스 흐름과 시스템 경계를 먼저 맞추는 것이 실무 AI 시스템에서 중요하다는 점을 확인했습니다.',
      ],
      stack: ['Python', 'FastAPI', 'Qdrant', 'SQL', 'RAG', 'LangChain'],
    },
    {
      name: '학위논문',
      title: 'A Survey of Topological Methods for Analyzing Dynamic Brain Network',
      summary:
        '동적으로 변하는 뇌 네트워크라는 도메인 문제에 TDA 방법론을 적용해, Persistence Vineyard와 Dynamic TDA를 각각 실험하고 실제 데이터에서 설명력과 한계를 확인한 연구 프로젝트입니다.',
      period: '2024 - 2025',
      team: '개인 연구',
      myRole: '설계 및 구현, 방법론 적용 및 해석.',
      href: null,
      background: [
        'fMRI와 EEG는 시간에 따라 구조가 바뀌는 데이터라 정적 분석만으로는 변화를 설명하기 어렵습니다.',
        '핵심 질문은 동적 뇌 네트워크라는 도메인 문제를 TDA 방법론으로 실제로 설명할 수 있는가였습니다.',
      ],
      problems: [
        '동적 특성을 다룰 수 있는 TDA 방법론이 실제 데이터에서 무엇을 설명할 수 있는지 직접 확인해야 했습니다.',
        '시간에 따른 구조 변화 추적과 집단 간 차이 검증을 각각 어떤 방식으로 해석할지 정리해야 했습니다.',
        '방법론의 수학적 정의를 실제 데이터 파이프라인과 검증 절차로 연결해야 했습니다.',
      ],
      solutions: [
        'Persistence Vineyard와 Dynamic TDA를 각각 구현하고 실제 EEG, fMRI 데이터에 적용했습니다.',
        'EEG에서는 시간에 따른 위상 구조 변화 추적 가능성을, fMRI에서는 집단 간 위상 차이 설명 가능성을 확인했습니다.',
        'Dynamic TDA / fMRI에는 순열검정 기반 통계 검증을 설계해 결과를 해석했습니다.',
        '두 방법론을 각각 실험한 뒤 실제 데이터에서 드러난 설명력과 한계를 비교했습니다.',
      ],
      results: [
        'Dynamic TDA / fMRI 실험에서 λ = 1.1610, p-value = 0.0401을 확인했습니다.',
        'Window size 변화에 따라 결과가 달라지는 점을 통해 방법론의 민감도와 적용 조건을 해석했습니다.',
        'Persistence Vineyard와 Dynamic TDA 모두 동적성을 다룰 수 있지만, 실제 설명력과 한계는 다르게 나타남을 확인했습니다.',
        '구현 자체보다 방법론을 도메인 데이터에 적용해 해석 가능한 결과로 연결하는 일이 핵심임을 정리했습니다.',
      ],
      stack: ['Python', 'MATLAB', 'TDA', 'Persistent Homology'],
    },
    {
      name: 'LG Aimers 8기',
      title: '모델 경량화 온라인 해커톤',
      summary:
        'EXAONE-4.0-1.2B 모델을 대상으로 경량화 이후 성능 회복 전략을 실험하고, vLLM 추론 환경을 고려한 최적화 방향을 탐색했습니다.',
      period: '2026.02.02 - 2026.02.26',
      team: '5인 팀 프로젝트',
      myRole: 'Recovery Fine-tuning 실험 설계 및 수행, Knowledge Distillation 비교 실험, 성능 불일치 분석.',
      href: null,
      background: ['EXAONE-4.0-1.2B 모델을 대상으로 경량화를 수행하는 해커톤이었습니다.'],
      problems: [
        '원본 모델 대비 크기, 속도, 성능 사이의 균형을 고려해야 했습니다.',
        '특정 추론 환경 안에서 실제로 적용 가능한 방법만 검토해야 했습니다.',
        'Quantization 이후 손실된 성능을 어떤 방식으로 회복할지 비교가 필요했습니다.',
      ],
      solutions: [
        '경량화 이후 손실된 성능을 복구하기 위한 방법론을 중심으로 실험을 설계했습니다',
        '다양한 데이터 기반 Recovery Fine-tuning을 적용했습니다.',
        'Knowledge Distillation을 함께 비교해 회복 전략의 차이를 검토했습니다.',
        'PPL과 downstream task 성능을 분리해서 해석했습니다.',
      ],
      results: [
        'Recovery Fine-tuning이 경량화 이후 성능 저하 복구에 유효함을 확인했습니다.',
        'Knowledge Distillation은 PPL 개선에도 downstream task 성능이 저하될 수 있음을 확인했습니다.',
        '제출 과정에서 라이브러리와 패키지 제약, 모델 config 호환성 문제를 겪으며 경량화 전략은 지표뿐 아니라 실제 추론 환경과 함께 해석해야 함을 배웠습니다.',
      ],
      stack: ['Python', 'Transformers', 'Hugging Face', 'vLLM'],
    },
    {
      name: '2024 Fall Prompt Engineering Final Project',
      title: 'ARKMan (Agentic RAG with Knowledge Management)',
      summary:
        '금융 문서 기반 복합 질의응답을 위해 단순 조회 / 계산 / 다단계 추론을 구분하는 Query Routing과 Multi-step Reasoning Agent를 설계했습니다.',
      period: '2024.11.23 - 2024.12.23',
      team: '3인 팀 프로젝트',
      myRole:
        'Vector DB 및 임베딩 파이프라인 설계, 테이블 자연어 변환 로직 설계, Query Routing 전략 설계, Multi-step Reasoning Agent 구현 주도, 금융 계산 Tool 구현.',
      href: null,
      background: [
        '금융 문서 기반 복합 질의응답을 처리하는 Agentic RAG 시스템 설계·구현 프로젝트였습니다.',
        '계산, 비교, 시간 정렬이 함께 필요한 질의는 단순 검색-생성으로 처리하기 어려웠습니다.',
      ],
      problems: [
        '청킹, 임베딩, Top-K를 조정해도 단순 RAG는 복합 재무 질의에서 계속 실패했습니다.',
        '모든 질의를 하나의 파이프라인으로 처리하면 단순 질의에는 과도하고 복합 질의에는 구조적으로 부족했습니다.',
        '재무 정보의 핵심이 테이블에 있어, 표 형태 그대로는 검색 품질이 충분히 나오지 않았습니다.',
        '금융 질의는 중간값을 먼저 찾고 계산한 뒤 최종 지표로 이어지는 단계적 구조를 가져 LLM 직접 계산만으로는 신뢰성이 낮았습니다.',
      ],
      solutions: [
        '질의를 단순 조회, 계산 중심, 다단계 추론으로 나누는 Query Routing 전략을 설계했습니다.',
        'Query decomposition 기반 Multi-step Reasoning Agent를 구현해 단계별 출력을 다음 컨텍스트로 누적했습니다.',
        '재무 테이블을 자연어 문장으로 변환해 검색 가능한 형태로 다시 구성했습니다.',
        '회사명, 회계연도 등 메타데이터 필터와 시맨틱 검색을 함께 사용했습니다.',
        '계산은 금융 계산 Tool이 맡고, LLM은 어떤 정보를 먼저 구하고 어떤 Tool을 호출할지 판단하도록 역할을 분리했습니다.',
      ],
      results: [
        '복합 재무 질의를 다단계 추론으로 처리하는 Agentic RAG 구조를 구현했습니다.',
        '질의 유형별 라우팅과 Tool 분리로 단순 조회와 복합 질의를 서로 다른 경로로 안정적으로 처리할 수 있게 했습니다.',
        '중간값 계산과 최종 계산을 분리해 금융 질의의 계산 경로를 추적 가능한 형태로 만들었습니다.',
        '테이블 자연어 변환과 메타데이터 기반 검색으로 재무 문서 검색 가능성을 높였습니다.',
      ],
      stack: ['Python', 'LangChain', 'RAG', 'AI Agent', 'VectorDB'],
    },
  ],
  trainings: [
    {
      name: 'SKALA 2기',
      title: 'SK AX 주관 AI 서비스 개발 과정',
      period: '2025.07.21 - 2025.12.24',
      description:
        'SK AX가 주관하는 AI 서비스 개발 실무 과정을 수료했습니다. 팀 단위의 실제 과제를 중심으로 AI 서비스 설계와 구현을 경험했습니다.',
    },
  ],
};
