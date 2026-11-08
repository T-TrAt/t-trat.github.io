import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ziyang Wang",
  DESCRIPTION: "T-TrAt 的个人博客，分享一些技术笔记。",
  EMAIL: "wangziyang06@126.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "T-TrAt 的个人博客，分享技术经验和感兴趣的事物。",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "技术笔记、教程与学习记录。",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "个人项目与课程设计。",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/T-TrAt",
  },
];
