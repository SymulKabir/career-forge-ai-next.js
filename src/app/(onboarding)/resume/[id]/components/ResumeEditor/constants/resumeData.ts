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
    github: { content: "https://symulkabir.vercel.app", isVisible: true },
    dob: { content: "07 May 1999", isVisible: true },
    picture: { imgContent: "", position: {zoom: 1, x: 0, y: 0 }, isVisible: true },
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
              y: 0
            }
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
              y: 0
            }
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
  ],
};
 
