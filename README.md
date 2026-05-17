# Korean Interview Coach

`korean-interview-coach` is an AI skill built for Vietnamese candidates and other foreign workers preparing for interviews with Korean companies.

🌐 **Website:** [Korean Interview Coach](https://korean-interview-coach-skill.vercel.app/)

📺 **Demo Video:**

[![Korean Interview Coach Demo](web/public/video-thumbnail.png)](https://www.youtube.com/watch?v=25POtnE5rvQ)

Languages: [English](README.md) | [Tiếng Việt](README-vi.md) | [한국어](README-ko.md)

## Repository Structure

```text
korean-interview-coach-skill/
├── skill/                  # portable Agent Skill package
│   ├── SKILL.md            # main skill instructions
│   ├── agents/openai.yaml  # agent metadata
│   ├── references/         # research, rubric, question bank, answer patterns
├── README.md
├── README-vi.md
└── README-ko.md
```

## Skill Flow

The core coaching loop is:

```text
kickoff -> company-prep -> practice -> feedback
```

Defaults:

- Vietnamese for coaching and explanation
- English for interview questions and answers
- Korean only for useful etiquette and workplace context

## Install The Skill

Install from the `skill/` folder:

```bash
npx skills add https://github.com/toannhu96/korean-interview-coach-skill/tree/main/skill
```

Or copy `skill/` into a local skills directory such as:

```text
~/.codex/skills/korean-interview-coach
.agents/skills/korean-interview-coach
```

## Example Prompt

```text
$korean-interview-coach /kickoff I want to prepare for a Samsung Software Engineer interview
```
