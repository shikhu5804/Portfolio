import { socials } from "./social";

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
}

export interface ConstructMetadataOptions {
  title?: string;
  useTitleTemplate?: boolean;
  description?: string;
  keywords?: string[];
  image?: string | null;
  path?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  authors?: { name: string; url?: string }[];
  noIndex?: boolean;
}

const xSocial = socials.find((s) => s.name === "X");
const githubSocial = socials.find((s) => s.name === "GitHub");

function resolveSiteUrl() {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  return `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`;
}

export const SITE_SEO = {
  siteName: "Shikhar Verma",
  siteTitle: "Shikhar Verma - Frontend Web Intern & Full-Stack Developer",
  siteUrl: resolveSiteUrl(),
  titleTemplate: "%s | Shikhar Verma",
  defaultDescription:
    "Personal portfolio, projects, and CV of Shikhar Verma — Frontend Web Intern & Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web applications.",
  defaultKeywords: [
    "Shikhar Verma",
    "Shikhar Verma Portfolio",
    "Frontend Web Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Software Engineer Portfolio",
    "IIIT Ranchi Student Developer",
    "Web Developer India",
  ],
  author: {
    name: "Shikhar Verma",
    url: resolveSiteUrl(),
    email: "vrmashikhar@gmail.com",
    handle: `@${githubSocial?.handle || "shikhu5804"}`,
  },
  creator: "Shikhar Verma",
  publisher: "Shikhar Verma",
  defaultOgImage: "/images/thumbnail.png",
  twitterHandle: `@${githubSocial?.handle || "shikhu5804"}`,
  socialLinks: socials.map((s) => s.url),
  locale: "en_US",
  themeColor: "#000000",
  robotsDefault: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} as const;

export const PAGE_SEO: Record<
  "home" | "projects" | "blogs" | "resume" | "license",
  PageSeoConfig
> = {
  home: {
    title: "Shikhar Verma - Frontend Web Intern & Full-Stack Developer",
    description:
      "Welcome to the official portfolio of Shikhar Verma. Discover web applications, frontend projects, technical experience, and achievements.",
    keywords: [
      "Shikhar Verma",
      "Shikhar Verma Portfolio",
      "Frontend Developer",
      "Full Stack Developer",
      "Next.js Portfolio",
      "React Engineer",
    ],
    path: "/",
    type: "website",
  },
  projects: {
    title: "Projects & Works",
    description:
      "Explore full-stack web applications, frontend platforms, and open-source GitHub repositories created by Shikhar Verma.",
    keywords: [
      "Shikhar Verma Projects",
      "Full Stack Applications",
      "Movie Streaming Site",
      "Expense Splitting App",
      "Real Time Chat App",
      "Next.js Projects",
      "React Projects",
      "Developer Portfolio",
    ],
    path: "/projects",
    type: "website",
  },
  blogs: {
    title: "Blog & Technical Articles",
    description:
      "Explore technical articles, tutorials, and insights on frontend web development, React, Next.js, and web application design by Shikhar Verma.",
    keywords: [
      "Shikhar Verma Blog",
      "Web Development Articles",
      "Next.js Tutorials",
      "React Blog",
      "Frontend Engineering",
      "Developer Blog",
    ],
    path: "/blogs",
    type: "website",
  },
  resume: {
    title: "Resume & CV",
    description:
      "Curriculum vitae and professional experience of Shikhar Verma - Frontend Web Intern & Full-Stack Developer specializing in React, Next.js, and TypeScript.",
    keywords: [
      "Shikhar Verma Resume",
      "Shikhar Verma CV",
      "Frontend Developer Resume",
      "Software Developer Resume",
      "Full Stack Developer CV",
      "Next.js Developer Resume",
      "React Engineer",
    ],
    path: "/resume",
    type: "profile",
  },
  license: {
    title: "License & Terms of Usage",
    description:
      "Official software license, usage permissions, restrictions, and copyright terms for Shikhar Verma's portfolio source code and design system.",
    keywords: [
      "Shikhar Verma",
      "Portfolio License",
      "Software License",
      "Open Source License",
      "Usage Rights",
      "Code Copyright",
      "Terms of Use",
    ],
    path: "/license",
    type: "website",
  },
};
