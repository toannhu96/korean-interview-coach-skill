# Korean Interview Coach

Repo này chứa Agent Skill `korean-interview-coach`, một landing site nhỏ để hướng dẫn cài đặt, một số tài liệu hỗ trợ, và một prototype pitch deck riêng.

Skill này dành cho ứng viên Việt Nam và lao động nước ngoài chuẩn bị phỏng vấn với công ty Hàn.

Ngôn ngữ: [English](README.md) | [Tiếng Việt](README-vi.md) | [한국어](README-ko.md)

## Cấu Trúc Repo

```text
korean-interview-coach-skill/
├── skill/       # gói Agent Skill để cài
├── web/         # site Next.js giới thiệu và hướng dẫn cài đặt
├── docs/        # tài liệu kế hoạch
├── pitch-deck/  # prototype deck HTML/CSS/JS
├── README.md
├── README-vi.md
└── README-ko.md
```

## Phần Chính

- `skill/`: thư mục skill chính để cài vào agent hỗ trợ Skills.
- `web/`: app Next.js local cho landing page và nội dung hướng dẫn.
- `docs/`: các file plan trong repo.
- `pitch-deck/`: deck prototype tách riêng khỏi skill và web app.

## Flow Của Skill

```text
kickoff -> company-prep -> practice -> feedback
```

Mặc định:

- Tiếng Việt cho giải thích và coaching
- Tiếng Anh cho câu hỏi và câu trả lời phỏng vấn
- Tiếng Hàn chỉ dùng khi cần cho etiquette và bối cảnh công ty Hàn

## Cài Đặt Skill

Cài trực tiếp từ thư mục `skill/`:

```bash
npx skills add https://gitlab.com/toannhu96/korean-interview-coach-skill/-/tree/main/skill
```

Hoặc copy `skill/` vào thư mục skills local:

```text
~/.codex/skills/korean-interview-coach
.agents/skills/korean-interview-coach
```

## Chạy Landing Site

```bash
cd web
npm install
npm run dev
```

Script khác:

- `npm run build`
- `npm run start`

## Ví Dụ Prompt

```text
Use $korean-interview-coach to help me prepare for a Samsung interview.
```
