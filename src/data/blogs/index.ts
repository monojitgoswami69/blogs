import { BlogPost } from '../../types/blog';
import { agentrouterBlog } from './agentrouter';
import { xyzdomainBlog } from './xyzdomain';
import { modelscopeBlog } from './modelscope';

export { agentrouterBlog } from './agentrouter';
export { xyzdomainBlog } from './xyzdomain';
export { modelscopeBlog } from './modelscope';

export const ALL_BLOGS: BlogPost[] = [
  agentrouterBlog,
  xyzdomainBlog,
  modelscopeBlog,
];

