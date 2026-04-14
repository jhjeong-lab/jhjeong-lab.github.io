export const portfolioData = {
  hero: {
    name: '정진화',
    title: 'AI/ML Engineer',
    tagline: 'From abstraction to application, built on strong fundamentals.',
    subtagline: "",
    intro:
      '수학적 기반 위에서 문제를 추상화하고, AI Agent, RAG, Machine Learning을 실제 시스템으로 연결합니다.',
    email: 'jhjeong796@gmail.com',
    githubUrl: 'https://github.com/jhjeong-lab',
    backgroundImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    badges: ['Math', 'RAG Systems', 'AI Agents', 'Machine Learning', 'Deep Learning'],
  },
  about: {
    title: '데이터를 이해하고, 의미 있는 정보를 이끌어냅니다.',
    description:
      '저는 특정 도메인의 데이터에 수학적 방법론을 적용하여 데이터의 구조를 해석하고, 그로부터 의미 있는 정보를 추출하는 데 관심이 있습니다. 이러한 분석적 기반 위에서 RAG, AI Agent, 모델 최적화 같은 시스템을 설계하고 구현해왔습니다.',
    highlights: [
      { label: '관심 분야', value: 'Applied Math, AI Agent, Machine Learning, 모델 최적화' },
      { label: '강점', value: '도메인 데이터를 해석하고 시스템으로 연결하는 구조화 역량' },
      { label: '지향점', value: '분석적 기반 위에서 실용적인 AI를 구현하는 엔지니어링' },
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
    'FastAPI',
    'LangChain',
    'RAG',
    'VectorDB',
    'SQL',
    'Transformers',
    'Hugging Face',
    'vLLM',
    'MATLAB',
    'Persistent Homology',
    'Git',
  ],
  projects: [
    {
      name: 'SKALA Final Project',
      title: 'ESG 중대성 평가를 위한 이슈 풀 구성 AI 시스템',
      summary:
        'ESG 경영관리팀의 반복적인 이슈 도출과 리포트 작성 과정을 단축하기 위해 문서 검색, 이슈 생성, 보고서 초안 작성까지 연결되는 End-to-End AI 파이프라인을 설계했습니다.',
      period: '2025.11 - 2025.12',
      team: '6인 팀 프로젝트',
      href: null,
      background: [
        'ESG 공시 의무화 확대로 기업 ESG 경영관리팀의 업무 부담이 증가했습니다.',
        '이슈풀 구성은 2~6주, 보고서 작성은 1~2개월이 걸리는 수작업 프로세스로 반복되고 있었습니다.',
      ],
      problems: [
        'ESG 표준, 뉴스, 내부문서, 벤치마킹 데이터가 산개되어 통합 검색이 어려웠습니다.',
        '이슈 도출부터 설문, 중대성 평가, 리포트 작성까지 전 과정이 수동이었습니다.',
        '이슈 생성 근거가 명확하지 않아 보고서 신뢰성 문제가 존재했습니다.',
      ],
      solutions: [
        'FastAPI 기반 AI 서비스 아키텍처를 설계했습니다.',
        'Qdrant Vector DB 구조와 ESG 문서 임베딩 파이프라인을 구축했습니다.',
        'RAG와 AI 기반 이슈 생성 워크플로우를 설계했습니다.',
        '이슈 출처와 근거 텍스트를 명시하는 프롬프트 전략으로 설명 가능성을 확보했습니다.',
        'Spring Boot와 FastAPI 간 내부 API 연계 구조를 정의했습니다.',
      ],
      results: [
        '이슈풀 생성 프로세스를 2~6주에서 5분 수준으로 단축하는 구조를 설계했습니다.',
        '리포트 초안 생성을 1~2개월에서 5분 수준으로 줄일 수 있는 End-to-End 파이프라인을 완성했습니다.',
        '이슈별 근거 출처를 명시해 보고서 신뢰성을 높였습니다.',
        'RAG 기반 챗봇으로 이해관계자 외부 질의에 즉시 대응 가능한 구조를 마련했습니다.',
      ],
      stack: ['Python', 'FastAPI', 'VectorDB', 'SQL', 'RAG', 'LangChain'],
    },
    {
      name: 'LG Aimers 8기',
      title: '모델 경량화 온라인 해커톤',
      summary:
        'EXAONE-4.0-1.2B 모델을 대상으로 경량화 이후 성능 회복 전략을 실험하고, vLLM 추론 환경 제약을 고려한 최적화 방향을 탐색했습니다.',
      period: '2026.02.02 - 2026.02.26',
      team: '5인 팀 프로젝트',
      href: null,
      background: ['EXAONE-4.0-1.2B 모델을 대상으로 경량화 실험을 수행했습니다.'],
      problems: [
        '원본 모델 대비 크기, 추론 속도, 성능 간의 균형을 고려한 최적화가 필요했습니다.',
        'vLLM 추론 환경 안에서 실제로 적용 가능한 방법만 사용할 수 있었습니다.',
        'Quantization, Pruning, Knowledge Distillation, Fine-tuning 등 다양한 기법의 현실적인 조합을 검토해야 했습니다.',
      ],
      solutions: [
        '경량화 이후 손실된 성능을 복구하기 위한 방법론을 중심으로 실험을 설계했습니다.',
        '다양한 데이터를 활용한 Recovery Fine-tuning을 적용했습니다.',
        'Knowledge Distillation을 적용해 성능 회복 가능성을 비교했습니다.',
      ],
      results: [
        'Recovery Fine-tuning이 Quantization 후 성능 저하 복구에 유효함을 확인했습니다.',
        'KD 적용 후 PPL은 개선됐지만 downstream task 성능 저하가 발생함을 확인했습니다.',
        '해당 원인을 vLLM 환경에서의 메모리 효율 감소 관점에서 분석했습니다.',
        '추론 환경 제약을 고려한 경량화 전략 설계 경험을 확보했습니다.',
      ],
      stack: ['Python', 'Transformers', 'Hugging Face', 'vLLM'],
    },
    {
      name: '학위논문',
      title: 'A Survey of Topological Methods for Analyzing Dynamic Brain Network',
      summary:
        '동적으로 변하는 뇌 네트워크를 위상적 방법으로 분석하기 위해 Persistence Vineyard와 Dynamic TDA의 가능성과 한계를 비교하고, 실제 구현과 통계 검증까지 수행했습니다.',
      period: '2024 - 2025',
      team: '개인 연구',
      href: null,
      background: [
        'fMRI와 EEG 같은 신경 신호는 시간에 따라 변화하며, 이를 정적으로만 다루면 구조 변화 포착에 한계가 있습니다.',
        '기존 graph theory, SPM, ICA 기반 접근은 단일 스케일 또는 정적 표현에 의존하는 경우가 많았습니다.',
      ],
      problems: [
        '시간대별 persistence diagram을 어떻게 연결하고 집단 간 차이를 검증할지 정의해야 했습니다.',
        'Persistence Vineyard와 Dynamic TDA의 이론적 가능성과 구현 난이도 사이의 간극을 확인해야 했습니다.',
      ],
      solutions: [
        'EEG 적용에서는 Hungarian algorithm 기반 heuristic matching을 설계해 vineyard 추적을 Python으로 구현했습니다.',
        'Notch filter, bandpass, ICA artifact removal을 포함한 EEG 전처리 파이프라인을 직접 구성했습니다.',
        'Sliding window 기반 0D/1D vineyard와 bottleneck distance 시계열을 도출했습니다.',
        'fMRI 적용에서는 HCP 데이터에 dynamic embedding과 Wasserstein distance 기반 ratio statistic을 정의했습니다.',
        '순열검정 10,000회로 집단 간 위상적 차이를 통계적으로 검증했습니다.',
      ],
      results: [
        '남녀 집단 간 위상적 차이에 대해 ratio statistic 1.1610, p-value 0.0401을 확인했습니다.',
        'Window size 40에서는 p-value가 0.0700으로 상승해 파라미터 민감도를 확인했습니다.',
        'Persistence Vineyard의 구현 난이도와 Dynamic TDA의 파라미터 의존성을 실증적으로 비교했습니다.',
        '두 접근법의 실용적 한계와 장단점을 정리한 가이드라인을 제시했습니다.',
      ],
      stack: ['Python', 'MATLAB', 'TDA', 'Persistent Homology'],
    },
    {
      name: 'Special Topics in Data Science',
      title: 'ARKMan (Agentic RAG with Knowledge Management)',
      summary:
        '금융 문서 기반 복합 질의응답을 위해 단순 조회, 계산, 다단계 추론을 구분하는 Query Routing과 Multi-step Reasoning Agent를 설계했습니다.',
      period: '2024.11.23 - 2024.12.23',
      team: '3인 팀 프로젝트',
      href: null,
      background: [
        '금융 문서 기반 복합 질의응답을 처리하는 LLM Agent 시스템 설계 및 구현 프로젝트였습니다.',
        '단순 RAG만으로는 계산, 비교, 시간 정렬이 동시에 필요한 재무 질의를 안정적으로 처리하기 어려웠습니다.',
      ],
      problems: [
        '복합 재무 질의에서 단순 RAG는 계산과 비교, 시간 흐름을 함께 다루는 데 한계가 있었습니다.',
        '모든 질의를 단일 파이프라인으로 처리하면 단순 질의에는 과도하고 복합 질의에는 부족했습니다.',
        'LLM의 직접 수치 계산은 반올림 오류와 단위 혼용 등 신뢰성 문제가 있었습니다.',
      ],
      solutions: [
        '질의를 단순 조회, 계산 중심, 다단계 추론의 세 유형으로 분류하는 Query Routing 전략을 설계했습니다.',
        '복합 질의를 순차적 하위 질의로 분해하는 Query decomposition 기반 Multi-step Reasoning Agent를 구현 주도했습니다.',
        '각 단계 출력을 다음 단계의 컨텍스트로 축적해 단계별 검증과 디버깅이 가능하도록 설계했습니다.',
        '금융 수치 계산 전용 Tool을 별도 구현해 계산은 Tool이 담당하도록 분리했습니다.',
      ],
      results: [
        '복합 재무 질의를 다단계 추론으로 처리하는 LLM Agent 시스템을 완성했습니다.',
        '질의 유형별 라우팅으로 단순 RAG 대비 복합 질의 처리 정확도를 높였습니다.',
        '금융 계산 전용 Tool 분리로 LLM 직접 계산에서 발생하는 오류를 줄였습니다.',
      ],
      stack: ['Python', 'LangChain', 'RAG', 'AI Agent'],
    },
  ],
  contact: {
    title: '제품과 연구 사이를 잇는 문제를 함께 풀고 싶습니다.',
    description:
      'RAG System, AI Agent, ML Engineering, Research Engineering과 관련된 역할과 협업에 열려 있습니다.',
    email: 'jhjeong796@gmail.com',
    links: [{ label: 'GitHub', href: 'https://github.com/jhjeong-lab' }],
  },
};
