# Developer Guide: Adding & Modifying Blogs

This guide explains how to add new blog posts or modify existing ones within the `blogs` repository.

---

## 1. Domain & Routing Architecture

- **Domain**: The blog engine is deployed under `blogs.mgbuilds.in`.
- **Index Page**: `https://blogs.mgbuilds.in/` renders `src/app/page.tsx`, listing all articles.
- **Dynamic Blog Post**: `https://blogs.mgbuilds.in/[slug]` resolves via `src/app/[slug]/page.tsx` using `getBlogBySlug(slug)` from `src/lib/blogs.ts` (e.g. `blogs.mgbuilds.in/agentrouter`).

---

## 2. Blog Schema Structure

All blogs are typed via `BlogPost` in `src/types/blog.ts`:

```typescript
export interface BlogPost {
  slug: string;              // e.g. "freemodel" -> blogs.mgbuilds.in/freemodel
  title: string;             // e.g. "Freemodel AI Setup Guide"
  subtitle?: string;         // Short secondary title
  description: string;       // SEO description & card summary
  publishedAt: string;       // ISO date string: YYYY-MM-DD
  updatedAt?: string;        // Optional update date
  readingTime: string;       // e.g. "4 min read"
  tags: string[];            // e.g. ["AI", "CLI", "Guide", "Claude Code"]
  author: {
    name: string;
    url?: string;
  };
  notice?: {
    type: 'info' | 'warning' | 'tip';
    title?: string;
    content: string;
  };
  // Content sections or structured body
  sections: BlogSection[];
}
```

---

## 3. Step-by-Step: Adding a New Blog Post

1. **Open `src/lib/blogs.ts`**:
   Add a new blog post entry to the `BLOGS_DATA` array.
2. **Define Metadata**:
   Ensure `slug` is unique, URL-safe (lowercase, hyphen-separated), and matches the intended trailing path (e.g. `blogs.mgbuilds.in/docker-cheat-sheet`).
3. **Structure Sections**:
   Use structured sections or markdown body blocks. Use components like `CodeBlock`, `PlatformTabs`, `Collapsible`, and `Notice` for clean, modular rendering.
4. **Verify Route & Build**:
   ```bash
   npm run lint
   npm run build
   ```
   Ensure static generation compiles the new path `/[slug]` without errors.
