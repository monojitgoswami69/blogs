import { BlogPost } from '../../types/blog';
import { agentrouterBlog } from './agentrouter';
import { xyzdomainBlog } from './xyzdomain';

export { agentrouterBlog } from './agentrouter';
export { xyzdomainBlog } from './xyzdomain';

export const ALL_BLOGS: BlogPost[] = [
  agentrouterBlog,
  xyzdomainBlog,
];
