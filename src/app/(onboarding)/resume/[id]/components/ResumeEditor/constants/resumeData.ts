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
  header: PersonalInfoData;
  sections: ResumeSection[];
}

// ==========================================
// 2. Dummy Resume Data Object
// ==========================================

export const DUMMY_STRUCTURED_RESUME = {
  header: {
    fullName: { content: "Symul Kabir", isVisible: true },
    headline: { content: "Junior CTO & Full Stack Developer", isVisible: true },
    email: { content: "saimonpranta@gmail.com", isVisible: true },
    phone: { content: "+8801881476432", isVisible: true },
    location: { content: "Khilkhet, Dhaka", isVisible: true },
    website: { content: "https://symulkabir.vercel.app", isVisible: true },
    github: { content: "https://github.com/saimonpranta", isVisible: true },
    dob: { content: "07 May 1999", isVisible: true },
    picture: {
      imgContent: "",
      position: { zoom: 1, x: 0, y: 0 },
      isVisible: true,
    },
  },
  sections: [
    {
      column: 0,
      position: 0,
      isVisible: true,
      sectionLayout: "BulletsCard",
      format:"professionalExperience",
      sectionTitle: { content: "Professional Experience", isVisible: true },
      items: [
        {
          isVisible: true,
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "Junior CTO & Full Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Micple Company Ltd",
            isVisible: true,
          },
          link: {
            content: "https://micple.com/",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Khilkhet, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Leading overall technical strategy, architectural decisions, and infrastructure scaling for enterprise-grade web applications.",
            isVisible: true,
          },
          bullets: {
            content: `
              <ul>
                <li>Spearheaded the technical direction and cross-platform architecture of high-availability production web applications.</li>
                <li>Engineered scalable microservices and full-stack solutions utilizing React.js, Next.js, FastAPI, Express.js, and MongoDB.</li>
                <li>Architected and managed robust Linux-based production server environments with automated SSL and security hardeners.</li>
                <li>Optimized deployment lifecycles by designing streamlined Docker containers and continuous integration/continuous deployment (CI/CD) pipelines.</li>
              </ul>
            `,
            isVisible: true,
          },
        },
        {
          isVisible: true,
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "MERN Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Ameliasoft Ltd",
            isVisible: true,
          },
          link: {
            content: "https://ameliasoft.com",
            isVisible: true,
          },
          duration: {
            content: {
              from: "01/2022",
              to: "06/2023",
            },
            isVisible: true,
          },
          location: {
            content: "Uttara, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Built responsive user interfaces and high-performance backend micro-APIs for digital commerce solutions.",
            isVisible: true,
          },
          bullets: {
            content: `
              <ul>
                <li>Developed modular frontend components with React, TypeScript, and Tailwind CSS ensuring lightning-fast load times.</li>
                <li>Constructed secure RESTful APIs and optimized complex MongoDB database schemas for high-frequency transactional data.</li>
                <li>Integrated third-party payment gateways, real-time notification hooks, and secure JWT-based authentication mechanisms.</li>
              </ul>
            `,
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 0,
      position: 1,
      isVisible: true,
      sectionLayout: "summary",
      format:"professionalExperience",
      sectionTitle: { content: "Summary", isVisible: true },
      items: [
        {
          isVisible: true,
          description: {
            content:
              "Driven Full Stack Software Engineer and technical lead with deep expertise in modern web frameworks, cloud containerization, and artificial intelligence integration. Adept at transforming complex business requirements into high-performing, secure, and scalable software solutions.",
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 1,
      position: 0,
      isVisible: true,
      sectionLayout: "TagCard",
      format:"skills",
      sectionTitle: { content: "Technical Skills", isVisible: true },
      items: [
        {
          isVisible: true,
          title: {
            content: "Frontend & Web",
            isVisible: true,
          },
          lists: {
            content: [
              "React.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "SCSS",
              "Micro Frontend",
            ],
            isVisible: true,
          },
        },
        {
          isVisible: true,
          title: {
            content: "Backend & Databases",
            isVisible: true,
          },
          lists: {
            content: [
              "Node.js",
              "Express.js",
              "FastAPI",
              "Flask",
              "MongoDB",
              "MySQL",
              "Weaviate",
            ],
            isVisible: true,
          },
        },
        {
          isVisible: true,
          title: {
            content: "AI & Cloud DevOps",
            isVisible: true,
          },
          lists: {
            content: [
              "Docker",
              "Nginx",
              "CI/CD Pipelines",
              "LangChain",
              "RAG Systems",
              "OpenCV",
            ],
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 1,
      position: 1,
      isVisible: true,
      sectionLayout: "BadgeTitleCard",
      format:"education",
      sectionTitle: { content: "Education & Qualifications", isVisible: true },
      items: [
        {
          isVisible: true,
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "Post-Graduate Diploma in Information Technology",
            isVisible: true,
          },
          duration: {
            content: {
              from: "2021",
              to: "2022",
            },
            isVisible: true,
          },
          description: {
            content:
              "Specialized in advanced database systems, software engineering principles, and enterprise network setups.",
            isVisible: true,
          },
        },
        {
          isVisible: true,
          title: {
            content: "Bachelor of Science",
            isVisible: true,
          },
          duration: {
            content: {
              from: "2017",
              to: "2021",
            },
            isVisible: true,
          },
          description: {
            content:
              "Focused on core computing mechanics, algorithm design, and structured programming paradigms.",
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 1,
      position: 2,
      isVisible: true,
      sectionLayout: "LinkCard",
      format:"socialLinks",
      sectionTitle: { content: "Find Me Online", isVisible: true },
      items: [
        {
          isVisible: true,
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "LinkedIn",
            isVisible: true,
          },
          link: {
            content: "https://linkedin.com/in/saimonpranta",
            isVisible: true,
          },
        },
        {
          isVisible: true,
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "GitHub",
            isVisible: true,
          },
          link: {
            content: "https://github.com/saimonpranta",
            isVisible: true,
          },
        },
        {
          isVisible: true,
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "Portfolio",
            isVisible: true,
          },
          link: {
            content: "https://symulkabir.vercel.app",
            isVisible: true,
          },
        },
      ],
    },
  ],
};

export const DUMMY_STRUCTURED_RESUME2 = {
  header: {
    fullName: { content: "Symul Kabir", isVisible: true },
    headline: { content: "Junior CTO & Full Stack Developer", isVisible: true },
    email: { content: "saimonpranta@gmail.com", isVisible: true },
    phone: { content: "+8801881476432", isVisible: true },
    location: { content: "Khilkhet, Dhaka", isVisible: true },
    website: { content: "https://symulkabir.vercel.app", isVisible: true },
    github: { content: "https://symulkabir.vercel.app", isVisible: true },
    dob: { content: "07 May 1999", isVisible: true },
    picture: {
      imgContent: "",
      position: { zoom: 1, x: 0, y: 0 },
      isVisible: true,
    },
  },
  sections: [
    {
      column: 0,
      position: 0,
      sectionLayout: "BulletsCard",
      sectionTitle: { content: "Experience", isVisible: true },
      items: [
        {
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: {
              zoom: 1,
              x: 0,
              y: 0,
            },
          },
          title: {
            content: "1 Junior CTO & Full Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Micple Company Ltd",
            isVisible: true,
          },
          link: {
            content: "https://micple.com/",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Khilkhet, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
          bullets: {
            content: `
              <ul>
                <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
                <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
                <li>Design, configure, and maintain Linux-based production servers.</li>
                <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
                  <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
                <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
                <li>Design, configure, and maintain Linux-based production servers.</li>
                <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
                  <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
                <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
                <li>Design, configure, and maintain Linux-based production servers.</li>
              </ul>
            `,
            isVisible: true,
          },
        },
        {
          title: {
            content: "2 MERN Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Ameliasoft Ltd",
            isVisible: true,
          },
          link: {
            content: "https://ameliasoft.com",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Sector 12, Uttara, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
          bullets: {
            content: `
    <ul>
      <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
      <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
      <li>Design, configure, and maintain Linux-based production servers.</li>
      <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
    </ul>
  `,
            isVisible: true,
          },
        },
        {
          title: {
            content: "3 MERN Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Ameliasoft Ltd",
            isVisible: true,
          },
          link: {
            content: "https://ameliasoft.com",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Sector 12, Uttara, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
          bullets: {
            content: `
    <ul>
      <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
      <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
      <li>Design, configure, and maintain Linux-based production servers.</li>
      <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
    </ul>
  `,
            isVisible: true,
          },
        },
        {
          title: {
            content: "4 MERN Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Ameliasoft Ltd",
            isVisible: true,
          },
          link: {
            content: "https://ameliasoft.com",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Sector 12, Uttara, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
          bullets: {
            content: `
    <ul>
      <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
      <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
      <li>Design, configure, and maintain Linux-based production servers.</li>
      <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
    </ul>
  `,
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 0,
      sectionLayout: "DescriptionCard",
      sectionTitle: { content: "Summary", isVisible: true },
      items: [
        {
          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
        },
        {
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 0,
      sectionLayout: "DescriptionCard",
      sectionTitle: { content: "Summary", isVisible: true },
      items: [
        {
          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
        },
        {
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 1,
      sectionLayout: "BulletsCard",
      sectionTitle: { content: "Experience", isVisible: true },
      items: [
        {
          title: {
            content: "Junior CTO & Full Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Micple Company Ltd",
            isVisible: true,
          },
          link: {
            content: "https://micple.com/",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Khilkhet, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
          bullets: {
            content: `
      <ul>
        <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
        <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
        <li>Design, configure, and maintain Linux-based production servers.</li>
        <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
      </ul>
    `,
            isVisible: true,
          },
        },
        {
          title: {
            content: "MERN Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Ameliasoft Ltd",
            isVisible: true,
          },
          link: {
            content: "https://ameliasoft.com",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Sector 12, Uttara, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
          bullets: {
            content: `
      <ul>
        <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
        <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
        <li>Design, configure, and maintain Linux-based production servers.</li>
        <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
      </ul>
    `,
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 0,
      sectionLayout: "BulletsCard",
      sectionTitle: { content: "Experience 44", isVisible: true },
      items: [
        {
          title: {
            content: "Junior CTO & Full Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Micple Company Ltd",
            isVisible: true,
          },
          link: {
            content: "https://micple.com/",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Khilkhet, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
          bullets: {
            content: `
      <ul>
        <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
        <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
        <li>Design, configure, and maintain Linux-based production servers.</li>
        <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
      </ul>
    `,
            isVisible: true,
          },
        },
        {
          title: {
            content: "MERN Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Ameliasoft Ltd",
            isVisible: true,
          },
          link: {
            content: "https://ameliasoft.com",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Sector 12, Uttara, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
          bullets: {
            content: `
      <ul>
        <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
        <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
        <li>Design, configure, and maintain Linux-based production servers.</li>
        <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
      </ul>
    `,
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 1,
      sectionLayout: "DescriptionCard",
      sectionTitle: { content: "Summary", isVisible: true },
      items: [
        {
          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
        },
        {
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 0,
      sectionLayout: "DescriptionCard",
      sectionTitle: { content: "Summary", isVisible: true },
      items: [
        {
          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
        },
        {
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 1,
      sectionLayout: "BulletsCard",
      sectionTitle: { content: "Experience", isVisible: true },
      items: [
        {
          title: {
            content: "Junior CTO & Full Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Micple Company Ltd",
            isVisible: true,
          },
          link: {
            content: "https://micple.com/",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Khilkhet, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
          bullets: {
            content: `
      <ul>
        <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
        <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
        <li>Design, configure, and maintain Linux-based production servers.</li>
        <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
      </ul>
    `,
            isVisible: true,
          },
        },
        {
          title: {
            content: "MERN Stack Developer",
            isVisible: true,
          },
          subtitle: {
            content: "Ameliasoft Ltd",
            isVisible: true,
          },
          link: {
            content: "https://ameliasoft.com",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          location: {
            content: "Sector 12, Uttara, Dhaka",
            isVisible: true,
          },
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
          bullets: {
            content: `
      <ul>
        <li>Lead the development and technical direction of production web applications across frontend, backend, and infrastructure.</li>
        <li>Develop scalable applications using React.js, Micro Frontend, Flask, FastAPI, Express.js, and MongoDB.</li>
        <li>Design, configure, and maintain Linux-based production servers.</li>
        <li>Manage application deployment pipelines and production releases using Docker and CI/CD.</li>
      </ul>
    `,
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 1,
      sectionLayout: "TagCard",
      sectionTitle: { content: "Skills", isVisible: true },
      items: [
        {
          title: {
            content: "AI & Machine Learning",
            isVisible: true,
          },
          lists: {
            content: [
              "LangChain",
              "RAG",
              "LLM Integration",
              "Agentic AI",
              "OpenCV",
              "Face Recognition",
            ],
            isVisible: true,
          },
        },
        {
          title: {
            content: "DevOps & Cloud",
            isVisible: true,
          },
          lists: {
            content: [
              "Docker",
              "Kubernetes",
              "Jenkins",
              "Terraform",
              "Ansible",
              "AWS",
              "Nginx",
            ],
            isVisible: true,
          },
        },
        {
          title: {
            content: "Backend",
            isVisible: true,
          },
          lists: {
            content: [
              "Node.js",
              "Express.js",
              "FastAPI",
              "Flask",
              "ASP.NET Core",
              "Microservices",
            ],
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 0,
      position: 0,
      sectionLayout: "BadgeTitleCard",
      sectionTitle: { content: "BadgeTitleCard Data", isVisible: true },
      items: [
        {
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: {
              zoom: 1,
              x: 0,
              y: 0,
            },
          },
          title: {
            content: "1 Junior CTO & Full Stack Developer",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },

          description: {
            content:
              "Lead the technical strategy and execution of modern web applications, scaling infrastructure, and mentoring cross-functional engineering teams.",
            isVisible: true,
          },
        },
        {
          title: {
            content: "2 MERN Stack Developer",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
        },
        {
          title: {
            content: "3 MERN Stack Developer",
            isVisible: true,
          },
          duration: {
            content: {
              from: "07/2023",
              to: "Present",
            },
            isVisible: true,
          },
          description: {
            content:
              "Developed full-stack web applications and scalable APIs using the MERN stack.",
            isVisible: true,
          },
        },
      ],
    },
    {
      column: 1,
      position: 0,
      sectionLayout: "LinkCard",
      sectionTitle: { content: "Find Me Online", isVisible: true },
      items: [
        {
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: {
              zoom: 1,
              x: 0,
              y: 0,
            },
          },
          title: {
            content: "Linkendin",
            isVisible: true,
          },
          link: {
            content: "https://linkedin.com/saimonpranta",
            isVisible: true,
          },
        },
        {
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: {
              zoom: 1,
              x: 0,
              y: 0,
            },
          },
          title: {
            content: "Facebook",
            isVisible: true,
          },
          link: {
            content: "https://facebook.com/saimonpranta",
            isVisible: true,
          },
        },
        {
          orgImg: {
            imgContent: "",
            isVisible: true,
            position: {
              zoom: 1,
              x: 0,
              y: 0,
            },
          },
          title: {
            content: "Github",
            isVisible: true,
          },
          link: {
            content: "https://github.com/saimonpranta",
            isVisible: true,
          },
        },
      ],
    },
  ],
};
