# Korean Interview Coach

이 저장소에는 `korean-interview-coach` Agent Skill, 설치 안내용 소규모 랜딩 사이트, 보조 문서, 그리고 별도의 피치덱 프로토타입이 포함되어 있습니다.

이 스킬은 한국 기업 면접을 준비하는 베트남 지원자와 외국인 구직자를 위한 것입니다.

언어: [English](README.md) | [Tiếng Việt](README-vi.md) | [한국어](README-ko.md)

## 저장소 구조

```text
korean-interview-coach-skill/
├── skill/       # 설치 가능한 Agent Skill 패키지
├── web/         # 설치 안내용 Next.js 랜딩 사이트
├── docs/        # 계획 문서
├── pitch-deck/  # HTML/CSS/JS 기반 피치덱 프로토타입
├── README.md
├── README-vi.md
└── README-ko.md
```

## 주요 구성

- `skill/`: Skills 호환 에이전트에 설치하는 핵심 스킬 폴더입니다.
- `web/`: 랜딩 페이지와 설치 안내를 위한 로컬 Next.js 앱입니다.
- `docs/`: 저장소 작업 계획 문서입니다.
- `pitch-deck/`: 스킬과 웹 앱에서 분리된 발표용 프로토타입입니다.

## 스킬 흐름

```text
kickoff -> company-prep -> practice -> feedback
```

기본값:

- 베트남어로 설명과 코칭
- 영어로 면접 질문과 답변 연습
- 한국어는 예절과 회사 맥락이 필요할 때만 사용

## 스킬 설치

`skill/` 폴더에서 직접 설치합니다.

```bash
npx skills add https://github.com/toannhu96/korean-interview-coach-skill/tree/main/skill
```

또는 `skill/` 폴더를 로컬 skills 디렉터리에 복사합니다.

```text
~/.codex/skills/korean-interview-coach
.agents/skills/korean-interview-coach
```

## 랜딩 사이트 실행

```bash
cd web
npm install
npm run dev
```

다른 스크립트:

- `npm run build`
- `npm run start`

## 예시 프롬프트

```text
Use $korean-interview-coach to help me prepare for a Samsung interview.
```
