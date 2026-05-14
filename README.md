# Korean Interview Coach

This repository contains the portable `korean-interview-coach` Agent Skill, a small landing site for installation guidance, supporting docs, and a separate pitch-deck prototype.

The skill is built for Vietnamese candidates and other foreign workers preparing for interviews with Korean companies.

Languages: [English](README.md) | [Tiếng Việt](README-vi.md) | [한국어](README-ko.md)

## Repository Structure

```text
korean-interview-coach-skill/
├── skill/                  # portable Agent Skill package
│   ├── SKILL.md            # main skill instructions
│   ├── agents/openai.yaml  # agent metadata
│   ├── references/         # research, rubric, question bank, answer patterns
│   └── LICENSE
├── web/                    # Next.js landing site for install/overview content
│   ├── app/
│   ├── DESIGN.md
│   ├── SKILL.md
│   └── package.json
├── docs/                   # implementation plans for landing/usage docs
├── pitch-deck/             # standalone HTML/CSS/JS deck prototype
├── README.md
├── README-vi.md
└── README-ko.md
```

## Main Parts

- `skill/`: the installable skill package. This is the folder to copy or install into a Skills-compatible agent runtime.
- `web/`: a local Next.js app used to present the skill, installation flow, and multilingual landing content.
- `docs/`: plan documents for repo work.
- `pitch-deck/`: presentation prototype kept separately from the main skill and web app.

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
npx skills add https://gitlab.com/toannhu96/korean-interview-coach-skill/-/tree/main/skill
```

Or copy `skill/` into a local skills directory such as:

```text
~/.codex/skills/korean-interview-coach
.agents/skills/korean-interview-coach
```

## Run The Landing Site

```bash
cd web
npm install
npm run dev
```

Other available scripts:

- `npm run build`
- `npm run start`

## Example Prompt

```text
Use $korean-interview-coach to help me prepare for a Samsung interview.
```
