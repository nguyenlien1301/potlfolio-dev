export interface Project {
  id: number;
  title: string;
  heading?: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  date: string;
  description: string;
  icon?: string;
}

export interface Award {
  id: number;
  title: string;
  date: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  label: string;
  date: string;
  summary: string;
  readMoreLink: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

// New interfaces for blog data
export interface BaseBlogPost {
  id: number;
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  authorImage?: string;
  image: string;
  category: string;
  tags?: string[];
  relatedPosts?: number[];
}

export interface HtmlBlogPost extends BaseBlogPost {
  htmlSpecificField?: string;
}

export interface CssBlogPost extends BaseBlogPost {
  cssSpecificField?: string;
}