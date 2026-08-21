export interface Project {
  name: string;
  description: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export const selected_works: Project[] = [
  {
    name: "Splitr – AI Expense Splitting Platform",
    description:
      "A real-time expense splitting platform with dynamic splits, settlements, and summaries, tested across 10+ groups. Built real-time sync using Convex for instant balance updates, integrated Clerk authentication, and Google Gemini AI with email notifications.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "ShadCN",
      "Convex",
      "Clerk",
      "Inngest",
      "Google Gemini AI",
    ],
    links: {
      github: "https://github.com/shikhu5804/splitr",
    },
  },
  {
    name: "BingeBox – Movie Streaming Site",
    description:
      "A clean, scalable movie and web series streaming platform using TMDB API with 1.4M+ titles, genre filtering, and intuitive categorization. Features Redux state management, Axios API handling, and Vite deployment on Vercel.",
    technologies: [
      "React",
      "Redux",
      "TailwindCSS",
      "Axios",
      "TMDB API",
      "Vite",
      "Vercel",
    ],
    links: {
      github: "https://github.com/shikhu5804/bingebox",
    },
  },
  {
    name: "Chatty – Real Time Chat App",
    description:
      "A full-stack real-time chat application using Socket.IO and MongoDB for instant messaging, message storage, and user presence awareness. Uses Zustand for global state management and secure JWT-based authentication.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Zustand",
      "TailwindCSS",
      "JWT",
    ],
    links: {
      github: "https://github.com/shikhu5804/chatty",
    },
  },
];

export const works: Project[] = selected_works;
