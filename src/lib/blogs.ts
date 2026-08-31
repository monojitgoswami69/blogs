import { BlogPost } from '../types/blog';
import { agentrouterBlog } from '../data/blogs/agentrouter';
import { xyzdomainBlog } from '../data/blogs/xyzdomain';

export const BLOGS_DATA: BlogPost[] = [
  agentrouterBlog,
  xyzdomainBlog,
];

export function getAllBlogs(): BlogPost[] {
  return BLOGS_DATA.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS_DATA.find((blog) => blog.slug === slug);
}
