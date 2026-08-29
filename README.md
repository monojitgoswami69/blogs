# blogs.mgbuilds.in

A personal minimalist blog engine built with Next.js 16 (App Router) and TypeScript for writing technical guides, development notes, and tool setups.

## Overview

- **Domain**: [blogs.mgbuilds.in](https://blogs.mgbuilds.in)
- **Author**: [Monojit Goswami](https://mgbuilds.in)
- **Design Philosophy**: Minimalist, fast, zero-clutter, and fully responsive across all devices.

## Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Lint codebase
npm run lint

# Build static production bundle (SSG)
npm run build
```

## Adding a Blog Post

Add a new post entry to `src/lib/blogs.ts`. The route `blogs.mgbuilds.in/<slug>` and the main index card are generated automatically.
