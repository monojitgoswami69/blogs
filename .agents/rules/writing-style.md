# Editorial Writing Style Guidelines

This document sets the writing standards for all articles, tutorials, and guides published on `blogs.mgbuilds.in`.

---

## 1. Tone & Voice

- **Direct & Authoritative**: Write as an experienced engineer communicating with other engineers or technical users.
- **Up to the Point**: Explain the objective, provide the exact steps, and highlight edge cases or gotchas.
- **Factual & Plain**: Avoid hyperbole, marketing buzzwords, and fluff.

---

## 2. Banned "AI Slop" Phrases & Habits

Never use boilerplate AI expressions or generic transitional phrases:

- ❌ "In today's fast-paced digital world..."
- ❌ "Let's dive right in!" or "Let's delve into..."
- ❌ "Without further ado..."
- ❌ "A game changer for developers..."
- ❌ "Look no further..."
- ❌ "In conclusion, whether you are a beginner or a pro..."
- ❌ Excessive rhetorical questions at the beginning of paragraphs.
- ❌ Random emojis sprinkled across headings (e.g. `### Step 1: Install Node.js 🚀`).
- ❌ Em dashes (`—`). Use clean punctuation (periods, commas, semicolons, or regular hyphens) instead.

Instead, start directly with the problem statement or context:
- ✅ *"This guide covers setting up Freemodel AI with Claude Code and OpenAI Codex CLI clients."*
- ✅ *"Prerequisites: Node.js 18 or higher."*
- ✅ *"Step 1: Install the CLI."*

---

## 3. Formatting Standards

1. **Step-by-Step Numbering**: Use `<ol>` or numbered headings (`2. Client Installation`, `Step 1: Install CLI`) for sequential procedures.
2. **Inline Code**: Surround all CLI commands, package names, environment variables, and file paths with backticks (e.g. `~/.claude/settings.json`, `npm install -g ...`).
3. **Copyable Snippets**: Full configuration files should be enclosed in code blocks with clear instructions on which placeholders need replacing (e.g. `YOUR_API_KEY`).
4. **Prerequisites & Troubleshooting**: Place non-essential or troubleshooting steps inside collapsible disclosure blocks so the main reading flow remains clean.
