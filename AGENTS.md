# AGENTS.md — Guidelines for AI Coding Agents

Welcome to the **`blogs`** codebase. This repository powers the official blog and technical guides platform for **`blogs.mgbuilds.in`**.

All coding agents (Gemini, Claude Code, Cursor, Codex, etc.) modifying or adding features to this directory **must strictly follow these rules**.

---

## 1. Project Overview & Architecture

- **Framework**: Next.js 16 (App Router) + TypeScript + ESLint.
- **Styling**: Minimalist CSS / Tailwind utilities adhering to a zero-gimmick design token standard.
- **Routing**:
  - `blogs.mgbuilds.in/` -> Main Blog Index ([src/app/page.tsx](file:///Users/monojitgoswami/projects/misc/blogs/src/app/page.tsx))
  - `blogs.mgbuilds.in/[slug]` -> Dynamic Blog Post route ([src/app/[slug]/page.tsx](file:///Users/monojitgoswami/projects/misc/blogs/src/app/[slug]/page.tsx))
  - Example: `blogs.mgbuilds.in/agentrouter` renders the AgentRouter AI setup guide.
- **Data Source**: Modular blog registry in [src/lib/blogs.ts](file:///Users/monojitgoswami/projects/misc/blogs/src/lib/blogs.ts) with full type definitions in [src/types/blog.ts](file:///Users/monojitgoswami/projects/misc/blogs/src/types/blog.ts).

---

## 2. Mandatory Design Standards

> [!IMPORTANT]
> The design must remain strictly minimal, clean, and distraction-free.

- ❌ **NO Glassmorphism**, blurred backdrop-filter cards, or glowing neon gradients.
- ❌ **NO Gratuitous Emojis** (🚀, 🔥, ✨, 🎉, 💡). Only use functional SVG icons (copy, check, chevron, terminal).
- ❌ **NO Flashy Animations**, floating background blobs, claymorphism, or confetti.
- ✅ **Clean Neutral Theme**:
  - Background: `#fafafa`
  - Cards & Content Surface: `#ffffff`
  - High-contrast text: `#222222` (primary), `#666666` (muted)
  - Subtle borders: `#e5e5e5`
  - Accessible link blue: `#0066cc`
- ✅ **Typography**: `Inter` for prose and `JetBrains Mono` for code snippets, configs, and commands.

Refer to [.agents/rules/design-system.md](file:///Users/monojitgoswami/projects/misc/blogs/.agents/rules/design-system.md) for full design token details.

---

## 3. Editorial & Writing Rules

- Write in a direct, technical, human voice.
- Be concise and up to the point.
- Avoid generic AI buzzwords ("In today's fast-paced world", "Let's dive in", "A game changer", "Look no further").
- For step-by-step technical guides, provide numbered steps, copyable snippets, and platform tabs (`macOS / Linux` vs `Windows`).

Refer to [.agents/rules/writing-style.md](file:///Users/monojitgoswami/projects/misc/blogs/.agents/rules/writing-style.md) for editorial guidelines.

---

## 4. How to Add a New Blog Post

1. Create a dedicated post file under `src/data/blogs/<slug>.ts` (e.g. `src/data/blogs/my-new-guide.ts`) conforming to `BlogPost`.
2. Register the post in [src/lib/blogs.ts](file:///Users/monojitgoswami/projects/blogs/src/lib/blogs.ts) by importing it and adding it to `BLOGS_DATA`.
3. Run `npm run lint` and `npm run build` to verify static route generation.

Refer to [.agents/rules/adding-blogs.md](file:///Users/monojitgoswami/projects/blogs/.agents/rules/adding-blogs.md) for complete details.

---

## 5. Development & Verification Commands

```bash
# Run local dev server
npm run dev

# Run ESLint checks
npm run lint

# Compile production build and verify typechecking & static generation
npm run build
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
