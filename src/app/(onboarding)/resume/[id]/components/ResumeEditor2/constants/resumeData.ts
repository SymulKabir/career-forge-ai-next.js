// ==========================================
// 1. TypeScript Interfaces
// ==========================================

export type SectionType =
  | "personal_info"
  | "summary"
  | "experience"
  | "education"
  | "projects"
  | "skills";

export interface ResumeSectionItem {
  id: string;
  title?: string; // e.g., Job Title, Degree Name, Project Name
  subtitle?: string; // e.g., Company Name, Institution, Tech stack summary
  location?: string; // e.g., City, Country or Remote
  startDate?: string; // e.g., Jan 2022
  endDate?: string; // e.g., Present / Dec 2024
  current?: boolean; // To handle "Present" states easily
  description?: string; // Short summary or description
  bulletPoints?: string[]; // Detailed achievements or highlights
  link?: string; // External URL or repository link
  skills?: string[]; // Associated skills for this specific entry
}

export interface ResumeSection {
  id: string;
  name: string; // Display name for the section (e.g., "Work Experience")
  type: SectionType; // Identifier to know how to render it
  isVisible: boolean; // Toggle to show/hide section in editor
  order: number; // Position index for drag-and-drop ordering
  items: ResumeSectionItem[]; // Subsections / individual entries (experience list, education list, etc.)
}

export interface PersonalInfoData {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  avatarUrl?: string;
}

export interface StructuredResumeData {
  personalInfo: PersonalInfoData;
  sections: ResumeSection[];
}

// ==========================================
// 2. Dummy Resume Data Object
// ==========================================
export const DUMMY_STRUCTURED_RESUME = {
  personalInfo: {
    fullName: "Symul Kabir",
    headline: "Junior CTO & Full Stack Developer",
    email: "saimonpranta@gmail.com",
    phone: "+8801881476432",
    location: "Khilkhet, Dhaka",
    website: "https://symulkabir.vercel.app",
  },
  sections: [
    {
      sectionLayout: "MilestoneCard",
      sectionTitle: "Experience", // Section name included here
      items: [
        {
          role: "Junior CTO & Full Stack Developer",
          company: "Micple Company Ltd",
          companyUrl: "https://micple.com/",
          duration: "07/2023 - Present",
          location: "Khilkhet, Dhaka",
          description:
            "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
          highlights: [
            "Lead the development and technical direction of production web applications across frontend, backend, and infrastructure",
            "Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB",
            "Design, configure, and maintain Linux-based production servers, including security, monitoring, performance optimization, and troubleshooting",
            "Manage application deployment pipelines and production releases using Docker, CI/CD practices, cloud infrastructure, and shell scripting",
            "Develop backend APIs, microservices, and real-time communication systems for production applications",
            "Mentor junior developers and contribute to architecture decisions, code quality, and development standards",
          ],
        },
        // You can easily add a new role object here!
        {
          role: "MERN Stack Developer",
          company: "Ameliasoft Ltd",
          companyUrl: "https://ameliasoft.com",
          duration: "09/2022 - 05/2023",
          location: "Sector 12, Uttara, Dhaka",
          description:
            "Developed full-stack web applications and scalable APIs using the MERN stack.",
          highlights: [
            "Developed full-stack web applications using the MERN stack, working across React.js, Express.js, and MongoDB",
            "Developed and integrated REST APIs using Express.js and MongoDB",
          ],
        },
      ],
    },
  ],
};
export const DUMMY_STRUCTURED_RESUME2: StructuredResumeData = {
  personalInfo: {
    fullName: "Alex Morgan",
    headline: "Senior Full-Stack Software Engineer",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    website: "https://alexmorgan.dev",
    linkedin: "https://linkedin.com/in/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
  sections: [
    {
      id: "sec_summary",
      name: "Professional Summary",
      type: "summary",
      isVisible: true,
      order: 1,
      items: [
        {
          id: "sum_1",
          description:
            "Passionate software engineer with over 6 years of experience building scalable web applications, optimizing backend architectures, and crafting intuitive user interfaces using React, TypeScript, and Node.js.",
        },
      ],
    },
    {
      id: "sec_experience",
      name: "Work Experience",
      type: "experience",
      isVisible: true,
      order: 2,
      items: [
        {
          id: "exp_1",
          title: "Senior Frontend Engineer",
          subtitle: "TechFlow Solutions",
          location: "San Francisco, CA",
          startDate: "Jan 2022",
          endDate: "Present",
          current: true,
          bulletPoints: [
            "Led a frontend migration to Next.js and Tailwind CSS, improving core web vitals performance by 40%.",
            "Mentored a team of 5 junior developers on TypeScript best practices and modern React patterns.",
            "Architected a reusable component library cutting down UI development time across 3 squad teams by 30%.",
          ],
        },
        {
          id: "exp_2",
          title: "Full-Stack Developer",
          subtitle: "DataPulse Dynamics",
          location: "Austin, TX",
          startDate: "Mar 2019",
          endDate: "Dec 2021",
          current: false,
          bulletPoints: [
            "Developed RESTful microservices using Node.js and Express, handling over 2M daily active requests.",
            "Optimized PostgreSQL database queries, decreasing average response time by 25% under heavy traffic.",
          ],
        },
      ],
    },
    {
      id: "sec_education",
      name: "Education",
      type: "education",
      isVisible: true,
      order: 3,
      items: [
        {
          id: "edu_1",
          title: "Bachelor of Science in Computer Science",
          subtitle: "University of California, Berkeley",
          location: "Berkeley, CA",
          startDate: "Aug 2015",
          endDate: "May 2019",
          description:
            "Graduated with Honors. Focused on Distributed Systems and Human-Computer Interaction.",
        },
      ],
    },
    {
      id: "sec_projects",
      name: "Projects",
      type: "projects",
      isVisible: true,
      order: 4,
      items: [
        {
          id: "proj_1",
          title: "DevMatrix CLI",
          subtitle: "Open Source Tool",
          startDate: "2025",
          endDate: "Present",
          description:
            "An open-source command-line tool that bootstraps production-ready micro-frontends.",
          link: "https://github.com/alexmorgan/devmatrix",
          skills: ["TypeScript", "Node.js", "Commander.js"],
        },
      ],
    },
    {
      id: "sec_skills",
      name: "Skills",
      type: "skills",
      isVisible: true,
      order: 5,
      items: [
        {
          id: "skill_1",
          title: "Frontend & Languages",
          skills: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
          ],
        },
        {
          id: "skill_2",
          title: "Backend & Database",
          skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
        },
      ],
    },
  ],
};
