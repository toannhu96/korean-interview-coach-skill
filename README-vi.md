# Korean Interview Coach

`korean-interview-coach` là một AI skill được xây dựng dành cho ứng viên Việt Nam và các lao động nước ngoài khác đang chuẩn bị phỏng vấn với các công ty Hàn Quốc.

🌐 **Website:** [Korean Interview Coach](https://korean-interview-coach-skill.vercel.app/)

📺 **Video Demo:**

[![Korean Interview Coach Demo](web/public/video-thumbnail.png)](https://www.youtube.com/watch?v=25POtnE5rvQ)

Ngôn ngữ: [English](README.md) | [Tiếng Việt](README-vi.md) | [한국어](README-ko.md)

## Cấu Trúc Repo

```text
korean-interview-coach-skill/
├── skill/                  # gói Agent Skill
│   ├── SKILL.md            # hướng dẫn chính của skill
│   ├── agents/openai.yaml  # metadata của agent
│   ├── references/         # tài liệu nghiên cứu, tiêu chí đánh giá, bộ câu hỏi, mẫu câu trả lời
├── README.md
├── README-vi.md
└── README-ko.md
```

## Flow Của Skill

Vòng lặp coaching cốt lõi là:

```text
kickoff -> company-prep -> practice -> feedback
```

Mặc định:

- Tiếng Việt dùng để giải thích và coaching
- Tiếng Anh dùng cho các câu hỏi và câu trả lời phỏng vấn
- Tiếng Hàn chỉ dùng cho các nghi thức hữu ích và bối cảnh công sở

## Cài Đặt Skill

Cài đặt từ thư mục `skill/`:

```bash
npx skills add https://github.com/toannhu96/korean-interview-coach-skill/tree/main/skill
```

Hoặc copy `skill/` vào thư mục skills local, ví dụ như:

```text
~/.codex/skills/korean-interview-coach
.agents/skills/korean-interview-coach
```

## Ví Dụ Prompt

```text
$korean-interview-coach /kickoff I want to prepare for a Samsung Software Engineer interview
```
