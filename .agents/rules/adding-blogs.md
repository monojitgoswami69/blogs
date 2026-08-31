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

1. **Create a Dedicated Post File**:
   Create a new file under `src/data/blogs/<slug>.ts` (e.g. `src/data/blogs/my-guide.ts`) exporting a typed `BlogPost` object:
   ```typescript
   import { BlogPost } from '../../types/blog';

   export const myGuideBlog: BlogPost = {
     slug: 'my-guide',
     title: 'My Technical Guide',
     description: 'Short summary for card and SEO description.',
     publishedAt: '2026-08-31',
     readingTime: '4 min read',
     tags: ['CLI', 'Guide'],
     author: {
       name: 'Monojit Goswami',
       url: 'https://mgbuilds.in',
     },
     sections: [
       // structured sections
     ],
   };
   ```
2. **Register in `src/lib/blogs.ts`**:
   Import your post object and add it to `BLOGS_DATA`:
   ```typescript
   import { myGuideBlog } from '../data/blogs/my-guide';

   export const BLOGS_DATA: BlogPost[] = [
     agentrouterBlog,
     xyzdomainBlog,
     myGuideBlog,
   ];
   ```
3. **Verify Route & Build**:
   ```bash
   npm run lint
   npm run build
   ```
   Ensure static generation compiles the new path `/[slug]` without errors.

