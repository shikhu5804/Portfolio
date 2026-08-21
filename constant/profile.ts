interface Name {
  full: string;
  first: string;
  last: string;
}

interface Work {
  title: string;
  company: string;
}

interface Location {
  city: string;
  state: string;
}

interface Education {
  uni: string;
  degree: string;
  major: string;
  batch: string;
  location: Location;
}

interface DOB {
  dd: number;
  mm: number;
  yyyy: number;
}

interface Titles {
  constant_word: string;
  rotating_words: string[];
}

interface Profile {
  name: Name;
  email: string;
  work: Work;
  education: Education;
  DOB: DOB;
  curr_location: Location;
  about: string[];
  hero_titles: Titles;
  quote: string;
}

export const profile: Profile = {
  name: {
    full: "Shikhar Verma",
    first: "Shikhar",
    last: "Verma",
  },

  email: "vrmashikhar@gmail.com",

  work: {
    title: "Frontend Web Intern",
    company: "ReachFast.ai",
  },

  education: {
    uni: "Indian Institute of Information Technology, Ranchi",
    degree: "B. Tech",
    major: "Electronics and Communication Engineering",
    batch: "2023 - 2027",
    location: {
      city: "Ranchi",
      state: "Jharkhand",
    },
  },

  DOB: {
    dd: 5,
    mm: 8,
    yyyy: 2004,
  },

  curr_location: {
    city: "Kanpur",
    state: "Uttar Pradesh",
  },

  about: [
    "Frontend Web Intern at ReachFast.ai with experience building high-performance web applications, email automation systems, and scalable UI components using React, Next.js, and TypeScript.",
    "Passionate about building responsive, user-friendly digital experiences with modern web technologies including Next.js, Redux, Socket.IO, Tailwind CSS, and cloud databases.",
    "Smart India Hackathon (SIH-2023) internal round selection, top 5% JEE aspirant, and active problem solver with 300+ DSA problems solved across coding platforms.",
    "Driven by continuous learning, clean architecture, reusable UI component design, and building impactful full-stack & frontend web applications.",
  ],

  hero_titles: {
    constant_word: "Build",
    rotating_words: [
      "Frontend UIs 🚀",
      "Full-Stack Apps 💻",
      "Web Experiences 🎨",
      "Real-Time Platforms ⚡",
      "Modern Web Apps 🔥",
    ],
  },

  quote: "Build with passion. Solve with precision. 🚀",
};
