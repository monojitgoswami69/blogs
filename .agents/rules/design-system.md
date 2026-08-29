# Design System & Styling Rules

This document outlines the strict visual and UI guidelines for the `blogs` codebase. All future changes and additions must comply with these standards.

---

## 1. Core Philosophy: Minimalist & Content-First

- **Content is King**: The layout exists to present technical instructions, code, and guides clearly.
- **Zero Gimmicks**:
  - ❌ **NO Glassmorphism**, backdrop filters, frosted glass, or blurred cards.
  - ❌ **NO Claymorphism**, floating bubbles, bouncing characters, or confetti.
  - ❌ **NO Gratuitous Emojis** (e.g. 🚀, 🔥, ✨, 🎉, 💡, 🤖). Only use clean, accessible SVG icons where functionally required (e.g., copy icon, checkmark, chevron, external link).
  - ❌ **NO Flashy Animations**, particle effects, or heavy entrance transitions.
- **High Readability**: Crisp text contrast, clean borders, generous line height, and standard responsive typography.

---

## 2. Color Palette & Design Tokens

Use these CSS variables or semantic tokens:

```css
:root {
  --bg-color: #fafafa;         /* Clean off-white background */
  --surface: #ffffff;          /* Pure white for cards/details */
  --surface-subtle: #f5f5f5;   /* Subtle grey for code blocks, badges */
  --text-main: #222222;        /* Dark charcoal for high contrast */
  --text-muted: #666666;       /* Medium grey for descriptions, meta */
  --text-dim: #888888;         /* Light grey for dates, read time */
  --border-color: #e5e5e5;     /* Crisp minimal borders */
  --border-strong: #cccccc;    /* Active tab/focus borders */
  --link-color: #0066cc;       /* Accessible blue for hyperlinks */
  --link-hover: #004499;       /* Darker blue on hover */
  --notice-bg: #eaf1fa;        /* Soft blue background for info notices */
  --notice-border: #9fbceb;    /* Blue accent border for notices */
  --warning-bg: #fff8e6;       /* Soft amber background for warnings */
  --warning-border: #f0c36d;   /* Amber accent border */
  --radius: 6px;               /* Standard subtle border-radius */
}
```

---

## 3. Typography Rules

- **Body Font**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
  - Body text size: `15px` to `16px`.
  - Line height: `1.6` to `1.7`.
- **Code Font**: `JetBrains Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `monospace`.
  - Inline code size: `0.85rem` with `2px 5px` padding and `var(--border-color)` border.
  - Code blocks: Preformatted with scrollbar, line numbers or copy buttons, `14px` size.
- **Headings**:
  - `h1`: `2rem` (32px), `font-weight: 600`, dark `#111`. Only one `h1` per page.
  - `h2`: `1.4rem` (22px), `font-weight: 600`, with a subtle `1px solid var(--border-color)` bottom border.
  - `h3`: `1.15rem` (18px), `font-weight: 600`.

---

## 4. Reusable UI Patterns

1. **Copyable Code Blocks**:
   - Every terminal command or config snippet must include a discreet copy button in the top-right corner.
   - Show a temporary checkmark icon upon successful copying.
2. **Platform Tabs**:
   - When providing multi-OS instructions (e.g. `macOS / Linux` vs `Windows`), provide a tab switcher.
   - Tabs should be minimal pill buttons (`border: 1px solid var(--border-color)`). Active tab has bold text and subtle grey background.
3. **Notices / Callouts**:
   - Use flat callout boxes with a solid `4px` left border.
   - No floating icons or drop shadows.
4. **Collapsible Sections (`<details>` / `<summary>`)**:
   - Used for optional prerequisites, deep dives, or troubleshooting steps.
   - Minimal chevron indicator, subtle hover state.
