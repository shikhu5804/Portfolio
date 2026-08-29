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
      "Built an Email Automation UI using React.js, Next.js, and Tailwind CSS across 4+ product features and workflows.",
      "Integrated Google Apps Script with Google Sheets to automate form data collection across 2+ workflows efficiently.",
      "Worked with TypeScript and Firestore alongside backend engineers, exploring AWS SES for reliable email delivery.",
      "Refactored components and redesigned onboarding, improving maintainability and UX across the application.",
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
      "AWS SES",
    ],
  },
];
