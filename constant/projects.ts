export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  links: {
    live?: string;
    github?: string;
  };
}

export const selected_works: Project[] = [
  {
    name: "Splitr – AI Expense Splitting Platform",
    description:
      "Built a real-time expense-splitting platform with dynamic splits, settlements, and detailed summaries, tested across 10+ user groups processing 100+ expenses. Engineered real-time balance sync with Convex (<500ms latency), integrated Clerk auth and Gemini AI for automated expense categorization, containerized with Docker to reduce setup time from 8 to 3 minutes.",
    image: "/images/projects/splitr.png",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "ShadCN",
      "Convex",
      "Clerk",
      "Inngest",
      "Google Gemini AI",
      "Docker",
    ],
    links: {
      live: "https://splitr-main.vercel.app/",
      github: "https://github.com/shikhu5804/Splitr-main",
    },
  },
  {
    name: "BingeBox – Movie Streaming Site",
    description:
      "Built a movie discovery platform using the TMDB API, surfacing 1.4M+ titles through genre filtering, advanced search, categorized browsing, movie details, and recommendations. Reduced redundant API calls by 80% through debounced search and optimized Axios handling, containerized with Docker and deployed on Vercel with sub-15s build times.",
    image: "/images/projects/bingebox.png",
    technologies: [
      "React",
      "Redux",
      "TailwindCSS",
      "Axios",
      "Docker",
      "Vercel",
    ],
    links: {
      live: "https://bingebox-gamma.vercel.app/",
      github: "https://github.com/shikhu5804/Movie-WebApp",
    },
  },
  {
    name: "Chatty – Real-Time Chat App",
    description:
      "Developed a full-stack real-time chat application powered by Socket.IO and MongoDB, supporting 10+ concurrent users with persistent message history and live presence tracking. Managed global state with Zustand for consistent UI updates, achieving <200ms average message delivery latency.",
    image: "/images/projects/chatty.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Zustand",
      "TailwindCSS",
    ],
    links: {
      live: "https://chat-app-steel-psi-31.vercel.app/",
      github: "https://github.com/shikhu5804/Chat-app",
    },
  },
];

export const works: Project[] = selected_works;
