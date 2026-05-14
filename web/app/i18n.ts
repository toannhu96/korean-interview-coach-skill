export const locales = ["ko", "en", "vi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  vi: "Tiếng Việt",
};

export const localeFlags: Record<Locale, string> = {
  ko: "🇰🇷",
  en: "🇺🇸",
  vi: "🇻🇳",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type IconName =
  | "kickoff"
  | "building"
  | "practice"
  | "feedback"
  | "shield"
  | "team"
  | "ownership"
  | "person"
  | "chat"
  | "mic"
  | "checklist";

type LandingCopy = {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    homeLabel: string;
    navLabel: string;
    nav: { href: string; label: string }[];
    languageLabel: string;
  };
  hero: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    support: string;
  };
  preview: {
    ariaLabel: string;
    brandLines: [string, string, string];
    sidebar: { icon: IconName; label: string }[];
    sessionTitle: string;
    sessionId: string;
    progress: { label: string; detail: string }[];
    nextStepLabel: string;
    nextStepTitle: string;
    nextStepBody: string;
    continueCta: string;
    companyBriefTitle: string;
    companyBriefItems: string[];
    logoTile: string;
    tipLabel: string;
    tipBody: string;
  };
  fit: {
    title: string;
    body: string;
    signals: { title: string; text: string; icon: IconName }[];
  };
  workflow: {
    title: string;
    body: string;
    steps: {
      step: string;
      title: string;
      label: string;
      items: string[];
      icon: IconName;
    }[];
  };
  install: {
    title: string;
    body: string;
    badges: string[];
    commandLabel: string;
    command: string;
    copyLabel: string;
    copiedLabel: string;
    footnote: string;
    guideTitle: string;
    guideBody: string;
    steps: {
      title: string;
      text: string;
      commandLabel: string;
      command: string;
      exampleLabel: string;
      example: string;
    }[];
  };
  rubric: {
    title: string;
    body: string;
    scorecardLabel: string;
    metrics: [string, string, number][];
    beforeLabel: string;
    beforeAnswer: string;
    improvementLabel: string;
    improvementPoints: string[];
    afterLabel: string;
    afterAnswer: string;
    feedbackLabel: string;
    chips: string[];
  };
  companyPrep: {
    title: string;
    body: string;
    items: { term: string; description: string }[];
  };
  closing: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    proof: { value: string; label: string }[];
  };
  footer: {
    line1: string;
    contactsLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    copyright: string;
  };
};

export const dictionary: Record<Locale, LandingCopy> = {
  ko: {
    metadata: {
      title: "Korean Interview Coach",
      description: "한국 기업에 지원하는 외국인 후보자를 위한 AI 인터뷰 준비.",
    },
    header: {
      homeLabel: "Korean Interview Coach 홈",
      navLabel: "주요 내비게이션",
      nav: [
        { href: "#install", label: "설치" },
        { href: "#how-to-use", label: "워크플로우" },
      ],
      languageLabel: "언어 선택",
    },
    hero: {
      title: "한국 기업이 원하는 인재로, 인터뷰에서 증명하세요.",
      body: "외국인·베트남 지원자를 위한 AI 인터뷰 코치. 한국 기업의 평가 기준에 맞춘 준비로 합격 가능성을 높입니다.",
      primaryCta: "지금 설치",
      secondaryCta: "코칭 흐름 보기",
      support: "한국어 · English · Tiếng Việt 지원",
    },
    preview: {
      ariaLabel: "인터뷰 코칭 제품 미리보기",
      brandLines: ["Korea", "Interview", "Coach"],
      sidebar: [
        { icon: "kickoff", label: "킥오프" },
        { icon: "building", label: "회사 준비" },
        { icon: "practice", label: "연습" },
        { icon: "feedback", label: "피드백" },
      ],
      sessionTitle: "인터뷰 세션",
      sessionId: "세션 ID 240512-001",
      progress: [
        { label: "Kickoff", detail: "목표 설정" },
        { label: "Company Prep", detail: "기업·직무 분석" },
        { label: "Practice", detail: "실전 연습" },
        { label: "Feedback", detail: "피드백 및 개선" },
      ],
      nextStepLabel: "다음 단계",
      nextStepTitle: "Company Prep",
      nextStepBody: "지원 기업과 직무를 분석하고 예상 질문을 준비해 보세요.",
      continueCta: "계속하기",
      companyBriefTitle: "현대자동차 · SE Engineer",
      companyBriefItems: ["기업 분석", "직무 분석", "핵심 역량", "예상 질문"],
      logoTile: "H",
      tipLabel: "TIP",
      tipBody: "한국 기업의 평가 포인트를 이해하면, 답변의 방향이 달라집니다.",
    },
    fit: {
      title: "한국 기업이 중요하게 보는 것",
      body: "AI 코치가 한국 기업의 평가 기준에 맞춰 당신의 강점을 연결해 드립니다.",
      signals: [
        {
          title: "신뢰성",
          text: "약속을 지키고 책임 있게 끝까지 완수하는 태도.",
          icon: "shield",
        },
        {
          title: "팀워크",
          text: "다양한 사람과 협력하며 함께 성과를 만드는 태도.",
          icon: "team",
        },
        {
          title: "겸손한 주인의식",
          text: "스스로 문제를 찾고 개선하며 성과로 증명합니다.",
          icon: "person",
        },
        {
          title: "명확한 소통",
          text: "구조적으로 말하고 상대가 이해하기 쉽게 전달합니다.",
          icon: "chat",
        },
      ],
    },
    workflow: {
      title: "AI 코칭 워크플로우",
      body: "4단계로 완성하는 인터뷰 준비. 베트남어 코칭, 영어 실전 연습, 한국형 보정을 함께 지원합니다.",
      steps: [
        {
          step: "01",
          title: "Kickoff",
          label: "목표 설정",
          items: ["기업/직무 선택", "강점 정리", "준비 계획 수립"],
          icon: "chat",
        },
        {
          step: "02",
          title: "Company Prep",
          label: "기업·직무 분석",
          items: ["문화와 최신 신호", "직무 요구사항", "예상 Q&A"],
          icon: "building",
        },
        {
          step: "03",
          title: "Practice",
          label: "실전 연습 (English)",
          items: ["영어 모의 면접", "실시간 피드백", "자신감 있게 반복"],
          icon: "mic",
        },
        {
          step: "04",
          title: "Feedback",
          label: "피드백 & 보정",
          items: ["한국 기업 기준 적용", "수정 포인트 확인", "전달력 강화"],
          icon: "checklist",
        },
      ],
    },
    install: {
      title: "에이전트 바로 연동",
      body: "이 Skill은 Claude, Codex, Cursor, OpenClaw, Hermes 등 여러 에이전트 런타임에 바로 통합해 인터뷰 코칭 파이프라인을 붙일 수 있습니다.",
      badges: [
        "Claude",
        "Codex",
        "Cursor",
        "OpenClaw",
        "Hermes",
        "추가 에이전트",
      ],
      commandLabel: "설치 명령",
      command:
        "npx skills add https://gitlab.com/toannhu96/korean-interview-coach-skill/-/tree/main/skill",
      copyLabel: "복사",
      copiedLabel: "복사됨",
      footnote: "터미널에서 붙여넣고 실행해 바로 스킬을 등록하세요.",
      guideTitle: "이 Skill 사용 방법",
      guideBody:
        "각 단계에서 필요한 Skill 명령을 선택하고, 바로 복사할 수 있는 예시 프롬프트로 시작하세요.",
      steps: [
        {
          title: "Kickoff",
          text: "목표 회사, 역할, 면접 단계, 영어 자신감을 정리합니다.",
          commandLabel: "사용할 명령",
          command: "/kickoff",
          exampleLabel: "예시 프롬프트",
          example:
            "/kickoff\nI am Vietnamese, applying for a software engineer role at a Korean company, and I want to practice in English.",
        },
        {
          title: "Company Prep",
          text: "회사와 직무를 분석하고 예상 질문과 전략을 만듭니다.",
          commandLabel: "사용할 명령",
          command: "/company-prep",
          exampleLabel: "예시 프롬프트",
          example:
            "/company-prep Samsung backend engineer\nFocus on role fit, likely questions, etiquette, and risks for a Vietnamese candidate.",
        },
        {
          title: "Practice",
          text: "영어 모의 면접 질문을 하나씩 받고 답변을 연습합니다.",
          commandLabel: "사용할 명령",
          command: "/practice",
          exampleLabel: "예시 프롬프트",
          example:
            "/practice\nAsk me one English interview question for a Korean-company software role.",
        },
        {
          title: "Feedback",
          text: "영어 답변을 한국 기업 면접 기준으로 진단하고 개선합니다.",
          commandLabel: "사용할 명령",
          command: "/feedback",
          exampleLabel: "예시 프롬프트",
          example:
            "/feedback\nHere is my answer: In my last project, I worked on a backend API and fixed many bugs before launch.",
        },
      ],
    },
    rubric: {
      title: "답변 피드백으로 더 나은 답변을 만드세요",
      body: "한국 기업의 평가 루브릭으로 답변을 분석하고 실제적인 개선 방향을 제안합니다.",
      scorecardLabel: "Scorecard",
      metrics: [
        ["구조화 (Structure)", "18 / 20", 88],
        ["논리성 (Logic)", "17 / 20", 82],
        ["전문성 (Expertise)", "18 / 20", 90],
        ["커뮤니케이션 (Communication)", "17 / 20", 84],
        ["한국 기업 적합성 (Fit)", "17 / 20", 86],
      ],
      beforeLabel: "개선 전 (Your Answer)",
      beforeAnswer:
        "In my last project, I worked on developing a feature. It was difficult because we had many issues and changes. But I tried my best and finally finished it.",
      improvementLabel: "개선 포인트",
      improvementPoints: ["구체성 부족", "성과/영향 미흡", "구조화 필요"],
      afterLabel: "개선 후 (Improved Answer)",
      afterAnswer:
        "In my last project, I led the development of a new feature used by 1,000+ users. I coordinated with designers and QA to resolve 27 issues within 2 weeks, which improved stability by 35%. Through this, I learned the importance of proactive communication and ownership.",
      feedbackLabel: "피드백",
      chips: ["구조화된 답변", "구체적 성과", "한국 기업형 표현"],
    },
    companyPrep: {
      title: "지원 회사에 맞춘 준비가 신뢰를 만듭니다.",
      body: "회사 리서치, 직무 역량, 예상 질문, 예절 포인트를 하나의 준비 브리프로 정리합니다.",
      items: [
        { term: "Verified", description: "공식 채널과 채용 공고 기반 사실" },
        { term: "Likely", description: "일반적인 한국 기업 면접 패턴" },
        {
          term: "Needs verification",
          description: "확인되지 않은 내용은 별도로 표시",
        },
      ],
    },
    footer: {
      line1:
        "Korean Interview Coach는 Agent Skill 표준에 맞춰 설계된 한국 기업 인터뷰 준비 스킬입니다.",
      contactsLabel: "연락처",
      emailLabel: "이메일",
      linkedinLabel: "링크드인",
      githubLabel: "깃허브",
      copyright:
        "© 2026 Korean Interview Coach Skill. All rights are reserved.",
    },
    closing: {
      title: "지금, 합격을 위한 진짜 준비를 시작하세요.",
      body: "AI 코치가 끝까지 함께합니다.",
      primaryCta: "지금 설치",
      secondaryCta: "코칭 흐름 보기",
      proof: [
        { value: "1,000+", label: "글로벌 사용자 준비 중" },
        { value: "200+", label: "한국 기업 맞춤 코칭 지원" },
      ],
    },
  },
  en: {
    metadata: {
      title: "Korean Interview Coach",
      description:
        "AI interview preparation for foreign candidates applying to Korean companies.",
    },
    header: {
      homeLabel: "Korean Interview Coach home",
      navLabel: "Primary navigation",
      nav: [
        { href: "#install", label: "Install" },
        { href: "#how-to-use", label: "Workflow" },
      ],
      languageLabel: "Choose language",
    },
    hero: {
      title: "Prove you fit Korean-company interviews.",
      body: "An AI interview coach for foreign and Vietnamese candidates. Prepare with Korean-company expectations in mind.",
      primaryCta: "Install Skill",
      secondaryCta: "View flow",
      support: "Korean · English · Vietnamese supported",
    },
    preview: {
      ariaLabel: "Interview coaching product preview",
      brandLines: ["Korea", "Interview", "Coach"],
      sidebar: [
        { icon: "kickoff", label: "Kickoff" },
        { icon: "building", label: "Company Prep" },
        { icon: "practice", label: "Practice" },
        { icon: "feedback", label: "Feedback" },
      ],
      sessionTitle: "Interview Session",
      sessionId: "Session ID 240512-001",
      progress: [
        { label: "Kickoff", detail: "Set goals" },
        { label: "Company Prep", detail: "Analyze role" },
        { label: "Practice", detail: "Mock interview" },
        { label: "Feedback", detail: "Improve answer" },
      ],
      nextStepLabel: "Next Step",
      nextStepTitle: "Company Prep",
      nextStepBody:
        "Analyze the company and role, then prepare likely questions.",
      continueCta: "Continue",
      companyBriefTitle: "Hyundai Motor · SE Engineer",
      companyBriefItems: [
        "Company facts",
        "Role fit",
        "Core strengths",
        "Likely questions",
      ],
      logoTile: "H",
      tipLabel: "TIP",
      tipBody: "Know the evaluation signals first, then shape your answer.",
    },
    fit: {
      title: "What Korean companies value",
      body: "The AI coach connects your strengths to Korean-company evaluation signals.",
      signals: [
        {
          title: "Reliability",
          text: "Keep promises and finish work with ownership.",
          icon: "shield",
        },
        {
          title: "Teamwork",
          text: "Work well with others and build shared results.",
          icon: "team",
        },
        {
          title: "Humble ownership",
          text: "Find problems, improve them, and show outcomes.",
          icon: "ownership",
        },
        {
          title: "Clear communication",
          text: "Speak with structure so the interviewer can follow.",
          icon: "chat",
        },
      ],
    },
    workflow: {
      title: "AI coaching workflow",
      body: "A focused 4-step flow: Vietnamese coaching, English practice, and Korean-market calibration.",
      steps: [
        {
          step: "01",
          title: "Kickoff",
          label: "Set direction",
          items: ["Pick company & role", "Map strengths", "Build prep plan"],
          icon: "chat",
        },
        {
          step: "02",
          title: "Company Prep",
          label: "Research the role",
          items: ["Culture signals", "Role needs", "Likely Q&A"],
          icon: "building",
        },
        {
          step: "03",
          title: "Practice",
          label: "Mock interview",
          items: [
            "English simulation",
            "Live answer feedback",
            "Repeat with confidence",
          ],
          icon: "mic",
        },
        {
          step: "04",
          title: "Feedback",
          label: "Tune your answer",
          items: [
            "Korean-company rubric",
            "Clear next fixes",
            "Sharper delivery",
          ],
          icon: "checklist",
        },
      ],
    },
    install: {
      title: "Agent Skill Integration",
      body: "This skill is designed for direct integration with multiple agent runtimes such as Claude, Codex, Cursor, OpenClaw, and Hermes.",
      badges: ["Claude", "Codex", "Cursor", "OpenClaw", "Hermes", "More"],
      commandLabel: "Install command",
      command:
        "npx skills add https://gitlab.com/toannhu96/korean-interview-coach-skill/-/tree/main/skill",
      copyLabel: "Copy",
      copiedLabel: "Copied",
      footnote: "Run this in terminal to register the skill immediately.",
      guideTitle: "How to use this skill",
      guideBody:
        "Pick the step you need, copy the matching skill command, then paste the example into your agent.",
      steps: [
        {
          title: "Kickoff",
          text: "Set the candidate profile, target company, interview stage, and English concern.",
          commandLabel: "Skill command",
          command: "/kickoff",
          exampleLabel: "Example prompt",
          example:
            "/kickoff\nI am Vietnamese, applying for a software engineer role at a Korean company, and I want to practice in English.",
        },
        {
          title: "Company Prep",
          text: "Build company research, interview strategy, likely questions, and etiquette notes.",
          commandLabel: "Skill command",
          command: "/company-prep",
          exampleLabel: "Example prompt",
          example:
            "/company-prep Samsung backend engineer\nFocus on role fit, likely questions, etiquette, and risks for a Vietnamese candidate.",
        },
        {
          title: "Practice",
          text: "Start one English mock interview question and answer it before feedback.",
          commandLabel: "Skill command",
          command: "/practice",
          exampleLabel: "Example prompt",
          example:
            "/practice\nAsk me one English interview question for a Korean-company software role.",
        },
        {
          title: "Feedback",
          text: "Review an English answer against Korean-company interview expectations.",
          commandLabel: "Skill command",
          command: "/feedback",
          exampleLabel: "Example prompt",
          example:
            "/feedback\nHere is my answer: In my last project, I worked on a backend API and fixed many bugs before launch.",
        },
      ],
    },
    rubric: {
      title: "Turn answer feedback into stronger answers",
      body: "Use a Korean-company interview rubric to analyze answers and improve them practically.",
      scorecardLabel: "Scorecard",
      metrics: [
        ["Structure", "18 / 20", 88],
        ["Logic", "17 / 20", 82],
        ["Expertise", "18 / 20", 90],
        ["Communication", "17 / 20", 84],
        ["Korean-company fit", "17 / 20", 86],
      ],
      beforeLabel: "Before (Your Answer)",
      beforeAnswer:
        "In my last project, I worked on developing a feature. It was difficult because we had many issues and changes. But I tried my best and finally finished it.",
      improvementLabel: "Improve",
      improvementPoints: [
        "Too general",
        "Impact is unclear",
        "Needs structure",
      ],
      afterLabel: "After (Improved Answer)",
      afterAnswer:
        "In my last project, I led the development of a new feature used by 1,000+ users. I coordinated with designers and QA to resolve 27 issues within 2 weeks, which improved stability by 35%. Through this, I learned the importance of proactive communication and ownership.",
      feedbackLabel: "Feedback",
      chips: ["Structured", "Specific impact", "Korean-company fit"],
    },
    companyPrep: {
      title: "Company-specific prep builds trust.",
      body: "Turn company research, role needs, likely questions, and etiquette into one practical prep brief.",
      items: [
        {
          term: "Verified",
          description: "Facts from official channels and job posts",
        },
        {
          term: "Likely",
          description: "Common Korean-company interview patterns",
        },
        {
          term: "Needs verification",
          description: "Points that need more company-specific confirmation",
        },
      ],
    },
    footer: {
      line1:
        "Korean Interview Coach is a portable Agent Skill for Korean-company interview preparation.",
      contactsLabel: "Contacts",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      copyright:
        "© 2026 Korean Interview Coach Skill. All rights are reserved.",
    },
    closing: {
      title: "Start preparing for the interview that matters.",
      body: "The AI coach stays with you through the process.",
      primaryCta: "Install Skill",
      secondaryCta: "View flow",
      proof: [
        { value: "1,000+", label: "global users preparing" },
        { value: "200+", label: "Korean-company coaching cases" },
      ],
    },
  },
  vi: {
    metadata: {
      title: "Korean Interview Coach",
      description:
        "AI giúp ứng viên nước ngoài chuẩn bị phỏng vấn công ty Hàn.",
    },
    header: {
      homeLabel: "Trang chủ Korean Interview Coach",
      navLabel: "Điều hướng chính",
      nav: [
        { href: "#install", label: "Cài đặt" },
        { href: "#how-to-use", label: "Quy trình" },
      ],
      languageLabel: "Chọn ngôn ngữ",
    },
    hero: {
      title: "Chứng minh bạn phù hợp với công ty Hàn.",
      body: "AI coach cho ứng viên Việt Nam và người nước ngoài. Luyện phỏng vấn theo đúng kỳ vọng của công ty Hàn.",
      primaryCta: "Cài đặt ngay",
      secondaryCta: "Xem quy trình",
      support: "Hỗ trợ tiếng Hàn · English · Tiếng Việt",
    },
    preview: {
      ariaLabel: "Xem trước sản phẩm coaching phỏng vấn",
      brandLines: ["Korea", "Interview", "Coach"],
      sidebar: [
        { icon: "kickoff", label: "Khởi động" },
        { icon: "building", label: "Chuẩn bị công ty" },
        { icon: "practice", label: "Luyện tập" },
        { icon: "feedback", label: "Feedback" },
      ],
      sessionTitle: "Buổi luyện phỏng vấn",
      sessionId: "Session ID 240512-001",
      progress: [
        { label: "Kickoff", detail: "Chốt mục tiêu" },
        { label: "Company Prep", detail: "Phân tích vai trò" },
        { label: "Practice", detail: "Mock interview" },
        { label: "Feedback", detail: "Sửa câu trả lời" },
      ],
      nextStepLabel: "Bước tiếp theo",
      nextStepTitle: "Company Prep",
      nextStepBody:
        "Phân tích công ty, vị trí và chuẩn bị câu hỏi có khả năng gặp.",
      continueCta: "Tiếp tục",
      companyBriefTitle: "Hyundai Motor · SE Engineer",
      companyBriefItems: [
        "Thông tin công ty",
        "Fit với vai trò",
        "Điểm mạnh chính",
        "Câu hỏi dự kiến",
      ],
      logoTile: "H",
      tipLabel: "TIP",
      tipBody: "Hiểu tiêu chí đánh giá trước, rồi mới chỉnh hướng trả lời.",
    },
    fit: {
      title: "Công ty Hàn đánh giá điều gì",
      body: "AI coach kết nối điểm mạnh của bạn với tín hiệu nhà tuyển dụng Hàn thường tìm.",
      signals: [
        {
          title: "Đáng tin cậy",
          text: "Giữ cam kết và hoàn thành việc đến cuối.",
          icon: "shield",
        },
        {
          title: "Teamwork",
          text: "Phối hợp tốt và tạo kết quả chung.",
          icon: "team",
        },
        {
          title: "Chủ động khiêm tốn",
          text: "Tìm vấn đề, cải thiện và chứng minh bằng kết quả.",
          icon: "person",
        },
        {
          title: "Giao tiếp rõ",
          text: "Nói có cấu trúc để interviewer dễ theo dõi.",
          icon: "chat",
        },
      ],
    },
    workflow: {
      title: "Quy trình AI coaching",
      body: "4 bước gọn: coach bằng tiếng Việt, luyện phỏng vấn English, chỉnh theo kỳ vọng công ty Hàn.",
      steps: [
        {
          step: "01",
          title: "Kickoff",
          label: "Chốt mục tiêu",
          items: ["Chọn công ty/role", "Map điểm mạnh", "Lập kế hoạch luyện"],
          icon: "chat",
        },
        {
          step: "02",
          title: "Company Prep",
          label: "Nghiên cứu role",
          items: ["Văn hóa và tín hiệu", "Yêu cầu vị trí", "Q&A dự kiến"],
          icon: "building",
        },
        {
          step: "03",
          title: "Practice",
          label: "Mock interview",
          items: [
            "Phỏng vấn English",
            "Feedback trực tiếp",
            "Lặp lại tự tin hơn",
          ],
          icon: "mic",
        },
        {
          step: "04",
          title: "Feedback",
          label: "Chỉnh câu trả lời",
          items: ["Rubric công ty Hàn", "Điểm cần sửa", "Nói sắc gọn hơn"],
          icon: "checklist",
        },
      ],
    },
    install: {
      title: "Tích hợp Agent Skill",
      body: "Skill này được thiết kế để tích hợp trực tiếp với nhiều agent runtime như Claude, Codex, Cursor, OpenClaw, Hermes.",
      badges: [
        "Claude",
        "Codex",
        "Cursor",
        "OpenClaw",
        "Hermes",
        "Nhiều agent",
      ],
      commandLabel: "Lệnh cài",
      command:
        "npx skills add https://gitlab.com/toannhu96/korean-interview-coach-skill/-/tree/main/skill",
      copyLabel: "Sao chép",
      copiedLabel: "Đã sao chép",
      footnote: "Chạy lệnh trong terminal để đăng ký skill ngay.",
      guideTitle: "Cách dùng skill này",
      guideBody:
        "Chọn bước bạn cần, copy đúng command của skill, rồi dùng example tương ứng trong agent.",
      steps: [
        {
          title: "Kickoff",
          text: "Tạo hồ sơ luyện: công ty, role, vòng phỏng vấn và điểm yếu tiếng Anh.",
          commandLabel: "Command skill",
          command: "/kickoff",
          exampleLabel: "Example prompt",
          example:
            "/kickoff\nI am Vietnamese, applying for a software engineer role at a Korean company, and I want to practice in English.",
        },
        {
          title: "Company Prep",
          text: "Chuẩn bị research công ty, strategy, câu hỏi dễ gặp và etiquette.",
          commandLabel: "Command skill",
          command: "/company-prep",
          exampleLabel: "Example prompt",
          example:
            "/company-prep Samsung backend engineer\nFocus on role fit, likely questions, etiquette, and risks for a Vietnamese candidate.",
        },
        {
          title: "Practice",
          text: "Nhận từng câu hỏi phỏng vấn bằng tiếng Anh và trả lời trước khi nhận feedback.",
          commandLabel: "Command skill",
          command: "/practice",
          exampleLabel: "Example prompt",
          example:
            "/practice\nAsk me one English interview question for a Korean-company software role.",
        },
        {
          title: "Feedback",
          text: "Chấm và sửa câu trả lời tiếng Anh theo tiêu chuẩn phỏng vấn công ty Hàn.",
          commandLabel: "Command skill",
          command: "/feedback",
          exampleLabel: "Example prompt",
          example:
            "/feedback\nHere is my answer: In my last project, I worked on a backend API and fixed many bugs before launch.",
        },
      ],
    },
    rubric: {
      title: "Biến feedback thành câu trả lời tốt hơn",
      body: "Dùng rubric phỏng vấn công ty Hàn để phân tích và sửa câu trả lời thực tế.",
      scorecardLabel: "Scorecard",
      metrics: [
        ["Cấu trúc", "18 / 20", 88],
        ["Logic", "17 / 20", 82],
        ["Chuyên môn", "18 / 20", 90],
        ["Giao tiếp", "17 / 20", 84],
        ["Fit công ty Hàn", "17 / 20", 86],
      ],
      beforeLabel: "Trước khi sửa (Your Answer)",
      beforeAnswer:
        "In my last project, I worked on developing a feature. It was difficult because we had many issues and changes. But I tried my best and finally finished it.",
      improvementLabel: "Cần cải thiện",
      improvementPoints: ["Quá chung", "Chưa rõ impact", "Cần cấu trúc"],
      afterLabel: "Sau khi sửa (Improved Answer)",
      afterAnswer:
        "In my last project, I led the development of a new feature used by 1,000+ users. I coordinated with designers and QA to resolve 27 issues within 2 weeks, which improved stability by 35%. Through this, I learned the importance of proactive communication and ownership.",
      feedbackLabel: "Feedback",
      chips: ["Có cấu trúc", "Impact cụ thể", "Fit công ty Hàn"],
    },
    companyPrep: {
      title: "Chuẩn bị theo từng công ty giúp tạo niềm tin.",
      body: "Gộp research công ty, yêu cầu role, câu hỏi dự kiến và etiquette vào một prep brief dễ dùng.",
      items: [
        { term: "Verified", description: "Sự thật từ kênh chính thức và JD" },
        {
          term: "Likely",
          description: "Pattern phỏng vấn phổ biến ở công ty Hàn",
        },
        {
          term: "Cần xác minh",
          description: "Những điểm chưa xác minh sẽ được ghi rõ",
        },
      ],
    },
    footer: {
      line1:
        "Korean Interview Coach là một Agent Skill gọn nhẹ cho chuẩn bị phỏng vấn công ty Hàn.",
      contactsLabel: "Liên hệ",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      copyright:
        "© 2026 Korean Interview Coach Skill. All rights are reserved.",
    },
    closing: {
      title: "Bắt đầu chuẩn bị cho buổi phỏng vấn quan trọng.",
      body: "AI coach đồng hành đến cuối quá trình.",
      primaryCta: "Cài đặt ngay",
      secondaryCta: "Xem quy trình",
      proof: [
        { value: "1,000+", label: "người dùng đang chuẩn bị" },
        { value: "200+", label: "case coaching công ty Hàn" },
      ],
    },
  },
};
