export const portfolioData = {
  hero: {
    name: '정진화',
    title: 'AI/ML Engineer',
    tagline: 'From abstraction to application, built on strong fundamentals.',
    subtagline: '',
    intro:
      'RAG 시스템, LLM Agent, 모델 경량화 같은 AI/ML 주제를 실제로 설계·구현해왔습니다. 문제를 추상화해 적절한 방법론으로 연결하는 방식으로 일하며, 설계부터 구현과 검증까지 엔드 투 엔드로 수행합니다.',
    email: 'jhjeong796@gmail.com',
    githubUrl: 'https://github.com/jhjeong-lab',
    backgroundImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    badges: ['RAG Systems', 'AI Agents', 'LLM Engineering', 'Model Optimization', 'Research'],
  },
  about: {
    title: '도메인을 이해하고, 방법론을 선택하고, 직접 구현합니다.',
    description:
      'AI/ML 엔지니어로서 LLM Agent, 모델 경량화, RAG 같은 주제를 설계하고 구현해왔습니다. 수학 전공에서 온 구조적 사고와 분석 훈련이 문제 정의와 방법론 선택에 기반이 되어주며, 프로젝트에서는 아키텍처 설계부터 모델·파이프라인 구현, 실험과 검증까지 엔드 투 엔드로 기여합니다.',
    highlights: [
      { label: '관심 분야', value: 'AI Agent Systems, Foundation Models, ML Engineering' },
      { label: '강점', value: '문제 정의부터 모델 구현과 검증까지 엔드 투 엔드로 수행하는 실행력' },
      { label: '지향점', value: '연구의 엄밀함과 제품의 실용성 사이를 잇는 엔지니어링' },
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
    'MATLAB',
    'SQL',
    'PyTorch',
    'Hugging Face',
    'LangChain',
    'FastAPI',
    'vLLM',
    'Vector DB',
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
        'AI 서비스 아키텍처 설계, Vector DB 및 임베딩 파이프라인 설계, RAG + LangChain Agent 기반 이슈 생성 워크플로우 설계, 프롬프트 전략 수립.',
      href: null,
      background: [
        'ESG 공시 의무화 확대로 기업 ESG 경영관리팀의 업무 부담이 증가하고 있습니다.',
        '이슈풀 구성(2~6주)과 보고서 작성(1~2개월)이 매년 반복되는 수작업 프로세스입니다.',
      ],
      problems: [
        'ESG 표준, 뉴스, 내부 문서, 벤치마킹 데이터가 산개되어 있어 이슈 도출을 위한 통합 검색이 불가능했습니다.',
        '이슈 도출 → 설문 → 중대성 평가 → 리포트 작성까지 전 과정이 수동이었습니다.',
        '이슈 생성 근거가 불명확해 보고서 신뢰성에 대한 의문이 존재했습니다.',
      ],
      solutions: [
        'FastAPI 기반 AI 서비스 아키텍처를 설계했습니다.',
        'Qdrant Vector DB 구조를 설계하고 ESG 문서 임베딩 파이프라인을 구축했습니다.',
        'RAG와 LangChain Agent를 결합한 이슈 생성 워크플로우를 설계했습니다.',
        '이슈 출처와 근거 텍스트를 명시하는 프롬프트 전략을 수립해 결과의 설명 가능성을 확보했습니다.',
        'Spring Boot ↔ FastAPI 간 내부 API 연계 구조를 정의했습니다.',
      ],
      results: [
        '이슈풀 생성 프로세스 2~6주 → 5분, 리포트 초안 1~2개월 → 5분으로 단축 (기대효과 기준).',
        'ESG 이슈 도출부터 보고서 생성까지 이어지는 End-to-End AI 파이프라인을 완성했습니다.',
        '이슈별 근거 출처를 명시하는 프롬프트 전략으로 결과의 설명 가능성을 확보했습니다.',
        'RAG 챗봇으로 이해관계자 외부 질의에 즉시 대응 가능한 구조를 마련했습니다.',
      ],
      stack: ['Python', 'FastAPI', 'Qdrant', 'SQL', 'RAG', 'LangChain'],
    },
    {
      name: 'LG Aimers 8기',
      title: '모델 경량화 온라인 해커톤',
      summary:
        'EXAONE-4.0-1.2B 모델을 대상으로 경량화 이후 성능 회복 전략을 실험하고, vLLM 추론 환경의 제약을 고려한 최적화 방향을 탐색했습니다.',
      period: '2026.02.02 - 2026.02.26',
      team: '5인 팀 프로젝트',
      myRole:
        'Recovery Fine-tuning과 Knowledge Distillation 실험 설계 및 수행, vLLM 환경에서의 성능 저하 원인 분석.',
      href: null,
      background: [
        'EXAONE-4.0-1.2B 모델을 대상으로 경량화를 수행하는 해커톤이었습니다.',
      ],
      problems: [
        '원본 모델 대비 크기, 추론 속도, 성능 간의 균형을 고려한 최적화가 필요했습니다.',
        'vLLM 추론 환경에서 실제로 적용 가능한 방법만 활용해야 했습니다.',
        'Quantization, Pruning, Knowledge Distillation, Fine-tuning 등의 기법을 조합해 현실적인 전략을 설계해야 했습니다.',
      ],
      solutions: [
        '경량화 이후 손실된 성능을 복구하기 위한 방법론을 중심으로 실험을 설계했습니다.',
        '다양한 데이터를 활용한 Recovery Fine-tuning을 적용했습니다.',
        'Knowledge Distillation을 적용해 성능 회복 가능성을 비교했습니다.',
      ],
      results: [
        'Recovery Fine-tuning이 Quantization 후 성능 저하 복구에 유효함을 실험으로 확인했습니다.',
        'KD 적용 후 PPL은 개선됐지만 downstream task 성능은 저하되었고, 이를 vLLM 환경의 메모리 효율 감소 관점에서 분석했습니다.',
        '단순 적용이 아닌 추론 환경 제약을 고려한 경량화 전략 설계 경험을 확보했습니다.',
      ],
      stack: ['Python', 'Transformers', 'Hugging Face', 'vLLM'],
    },
    {
      name: '학위논문',
      title: 'A Survey of Topological Methods for Analyzing Dynamic Brain Network',
      summary:
        '시간에 따라 변하는 뇌 네트워크를 위상적 방법으로 분석하기 위해 Persistence Vineyard와 Dynamic TDA의 가능성과 한계를 비교하고, 직접 구현과 통계 검증까지 수행했습니다.',
      period: '2024 - 2025',
      team: '개인 연구',
      myRole:
        'EEG 전처리 및 vineyard 추적 알고리즘 설계·구현, fMRI 기반 dynamic embedding 및 ratio statistic 정의, 순열검정 기반 통계 검증까지 단독 수행.',
      href: null,
      background: [
        'fMRI와 EEG 같은 신경 신호는 본질적으로 시간에 따라 변화하며, 이를 정적으로만 다루면 구조 변화를 포착하기 어렵습니다.',
        '기존 graph theory, SPM, ICA 기반 접근은 정적 표현 또는 단일 스케일 분석에 그쳐 위상적 구조 변화를 포착하기 어려웠습니다.',
      ],
      problems: [
        '시간대별로 생성되는 위상적 특성(persistence diagram)을 어떻게 연결하고 집단 간 차이를 검증할 것인지 정의해야 했습니다.',
        'Persistence Vineyard와 Dynamic TDA의 이론적 가능성과 실제 구현 가능성 사이의 간극을 확인해야 했습니다.',
      ],
      solutions: [
        '[Persistence Vineyard / EEG] 공개 구현체 부재로 Cohen-Steiner et al.(2006) 알고리즘 대신 Hungarian algorithm 기반 heuristic matching을 설계하고 Python으로 구현했습니다.',
        '[Persistence Vineyard / EEG] Notch filter, Butterworth bandpass(0.5~45Hz), ICA artifact removal을 포함한 EEG 전처리 파이프라인을 직접 구성했습니다.',
        '[Persistence Vineyard / EEG] 30초 슬라이딩 윈도우(2초 step) 기반 15×15 distance matrix에서 0D/1D vineyard와 bottleneck distance 시계열을 도출했습니다.',
        '[Persistence Vineyard / EEG] heuristic matching의 구조적 한계(state transition 추적 불가, bottleneck distance의 질적 구분 불가)를 실험적으로 확인하고 분석했습니다.',
        '[Dynamic TDA / fMRI] HCP 데이터(116 ROI, 6,670차원 correlation vector)에 dynamic embedding을 적용했습니다.',
        '[Dynamic TDA / fMRI] birth-death decomposition 기반 Wasserstein distance를 정의하고 20×20 pairwise distance matrix를 구성했습니다.',
        '[Dynamic TDA / fMRI] Wasserstein distance 기반 ratio statistic λ를 정의하고 순열검정 10,000회로 집단 간 위상적 차이를 통계적으로 검증했습니다.',
      ],
      results: [
        '남녀 집단 간 위상적 차이 통계 검증: ratio statistic 1.1610, p-value 0.0401.',
        'Window size 40으로 축소 시 p-value 0.0700으로 상승, 방법론의 window size 민감도 한계를 실험적으로 확인·분석했습니다.',
        'Persistence Vineyard는 이론적으로 강력하지만 구현 난이도가 높고, Dynamic TDA는 통계 검증에 유효하나 파라미터 의존성이 있음을 실증했습니다.',
        '두 접근법의 실용적 한계와 장단점을 비교·정리한 가이드라인을 제시했습니다.',
      ],
      stack: ['Python', 'MATLAB', 'TDA', 'Persistent Homology'],
    },
    {
      name: '2024 Fall Prompt Engineering Final Project',
      title: 'ARKMan (Agentic RAG with Knowledge Management)',
      summary:
        '금융 문서 기반 복합 질의응답을 위해 단순 조회 / 계산 / 다단계 추론을 구분하는 Query Routing과 Multi-step Reasoning Agent를 설계했습니다.',
      period: '2024.11.23 - 2024.12.23',
      team: '3인 팀 프로젝트',
      myRole:
        'Query decomposition 기반 Multi-step Reasoning Agent 설계 및 구현 주도, 금융 수치 계산 전용 Tool 분리 설계.',
      href: null,
      background: [
        '금융 문서 기반 복합 질의응답을 처리하는 LLM Agent 시스템 설계·구현 프로젝트였습니다.',
        '단순 RAG만으로는 계산, 비교, 시간 정렬이 동시에 필요한 복합 재무 질의를 처리하기 어려웠습니다.',
      ],
      problems: [
        '단순 RAG는 복합 재무 질의(계산·비교·시간 정렬)에서 실패했습니다.',
        '모든 질의를 단일 파이프라인으로 처리하면 단순 질의에는 과도한 처리가, 복합 질의에는 처리 부족이 발생했습니다.',
        'LLM의 직접 수치 계산은 반올림 오류와 단위 혼용 등 금융 신뢰도 문제를 일으켰습니다.',
      ],
      solutions: [
        '질의를 단순 조회 / 계산 중심 / 다단계 추론의 세 유형으로 분류하는 Query Routing 전략을 설계했습니다.',
        'Query decomposition 기반 Multi-step Reasoning Agent를 설계하고 구현을 주도했습니다.',
        '복잡한 질의를 순차적 하위 질의로 분해해 각 단계 출력을 Context로 축적하여 다음 단계에 전달하는 구조를 만들었습니다.',
        '각 단계를 독립적으로 검증 가능하도록 설계해 단계별 디버깅 용이성을 확보했습니다.',
        '금융 수치 계산 전용 Tool을 별도 구현해 LLM은 Tool 호출 판단만, 계산은 Tool이 담당하도록 분리했습니다.',
      ],
      results: [
        '복합 재무 질의를 다단계 추론으로 처리하는 LLM Agent 시스템을 완성했습니다.',
        '질의 유형별 라우팅으로 단순 RAG 대비 복합 질의 처리 정확도를 향상시켰습니다.',
        '금융 수치 계산 전용 Tool 분리로 LLM 직접 계산에서 발생하던 오류 문제를 해결했습니다.',
      ],
      stack: ['Python', 'LangChain', 'RAG', 'AI Agent'],
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
