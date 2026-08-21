export interface ExperienceDate {
  dd: number;
  mm: string;
  yyyy: number;
}

export interface BaseExperience {
  role: string;
  startDate: ExperienceDate;
  description: string[];
  company: string;
  companySite: string;
  technologies: string[];
}

export type Experience =
  | (BaseExperience & {
      current: true;
      // endDate?: never;
    })
  | (BaseExperience & {
      current?: false;
      endDate: ExperienceDate;
    });

export const experience: Experience[] = [
  {
    role: "Frontend Web Intern",
    startDate: {
      dd: 1,
      mm: "May",
      yyyy: 2025,
    },
    endDate: {
      dd: 31,
      mm: "August",
      yyyy: 2025,
    },
    current: false,
    description: [
      "Built Email Automation UI using React.js, Next.js, and Tailwind CSS with focus on clean architecture and responsive design.",
      "Integrated Google Apps Script to automate form data storage in Google Sheets, streamlining data collection workflows.",
      "Contributed to key frontend features and layout improvements to enhance usability, consistency, and user experience.",
      "Collaborated with backend systems using TypeScript and Firestore, ensuring smooth data flow and efficient state handling.",
      "Refactored components into reusable modules and redesigned onboarding to improve maintainability and adoption.",
    ],
    company: "ReachFast.ai",
    companySite: "https://reachfast.ai/",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Google Apps Script",
      "TypeScript",
      "Firestore",
    ],
  },
];
