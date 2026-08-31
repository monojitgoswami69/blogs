export interface StepItem {
  title?: string;
  description?: string;
  command?: string;
  code?: {
    language?: string;
    filename?: string;
    content: string;
  };
  note?: string;
  collapsible?: {
    title: string;
    content?: string;
    code?: string;
    list?: string[];
    orderedList?: string[];
  };
}

export interface PlatformContent {
  id: string;
  label: string;
  steps: StepItem[];
}

export interface ClientGuide {
  id: string;
  title: string;
  lead?: string;
  collapsiblePrerequisites?: {
    title: string;
    content?: string;
    code?: string;
    list?: string[];
    orderedList?: string[];
  };
  platforms: PlatformContent[];
}

export interface BlogSection {
  id?: string;
  title: string;
  lead?: string;
  content?: string[];
  notice?: {
    type: 'info' | 'warning' | 'tip';
    title?: string;
    content: string;
  };
  orderedList?: string[];
  unorderedList?: string[];
  codeBlock?: {
    language?: string;
    filename?: string;
    content: string;
  };
  collapsible?: {
    title: string;
    content?: string;
    code?: string;
    list?: string[];
    orderedList?: string[];
  };
  platformTabs?: PlatformContent[];
  clientGuides?: ClientGuide[];
  actionButton?: {
    text: string;
    url: string;
  };
  subsections?: {
    id: string;
    title: string;
    description?: string;
    notice?: {
      type: 'info' | 'warning' | 'tip';
      content: string;
    };
    codeBlock?: {
      language?: string;
      filename?: string;
      content: string;
    };
    command?: string;
    collapsible?: {
      title: string;
      content?: string;
      code?: string;
      list?: string[];
      orderedList?: string[];
    };
    platformTabs?: PlatformContent[];
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  tags: string[];
  author: {
    name: string;
    url?: string;
  };
  notice?: {
    type: 'info' | 'warning' | 'tip';
    title?: string;
    content: string;
  };
  sections: BlogSection[];
}
