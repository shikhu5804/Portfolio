import type { IconType } from "react-icons";

import {
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaSquareJs,
  FaDocker,
  FaAws,
} from "react-icons/fa6";

import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiRender,
  SiGooglecloud,
  SiGreensock,
  SiRedis,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";
import { MdApi, MdCode } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: IconType;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Programming Languages",
    data: [
      { title: "C++", logoComponent: SiCplusplus, color: "#00599C" },
      { title: "C", logoComponent: SiC, color: "#A8B9CC" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "SQL", logoComponent: BiLogoPostgresql, color: "#4169E1" },
      { title: "NoSQL", logoComponent: SiMongodb, color: "#47A248" },
      { title: "HTML/CSS", logoComponent: FaHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#FFFFFF" },
      { title: "Node.js", logoComponent: FaNodeJs, color: "#339933" },
      { title: "Express.js", logoComponent: SiExpress, color: "#FFFFFF" },
      { title: "Redux Toolkit", logoComponent: SiRedux, color: "#764ABC" },
      { title: "Zustand", logoComponent: SiTypescript, color: "#453831" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
      { title: "ShadCN", logoComponent: SiTailwindcss, color: "#FFFFFF" },
      { title: "GSAP", logoComponent: SiGreensock, color: "#88CE02" },
    ],
  },
  {
    title: "Database Technologies",
    data: [
      { title: "PostgreSQL", logoComponent: BiLogoPostgresql, color: "#4169E1" },
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "Redis", logoComponent: SiRedis, color: "#DC382D" },
      { title: "Firebase", logoComponent: SiFirebase, color: "#FFCA28" },
      { title: "Convex", logoComponent: MdApi, color: "#EE342F" },
      { title: "Mongoose", logoComponent: SiMongodb, color: "#880000" },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#FFFFFF" },
      { title: "Docker", logoComponent: FaDocker, color: "#2496ED" },
      { title: "Vercel", logoComponent: SiVercel, color: "#FFFFFF" },
      { title: "Render", logoComponent: SiRender, color: "#46E3B7" },
      { title: "AWS (S3, EC2)", logoComponent: FaAws, color: "#FF9900" },
      { title: "Google Cloud Platform", logoComponent: SiGooglecloud, color: "#4285F4" },
      { title: "Inngest", logoComponent: MdApi, color: "#326CE5" },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
      { title: "VS Code", logoComponent: MdCode, color: "#007ACC" },
    ],
  },
];
