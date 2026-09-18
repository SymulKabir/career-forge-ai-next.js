 
// ==========================================
// 2. Dummy Resume Data Object
// ==========================================

export const DUMMY_STRUCTURED_RESUME = {
  header: {
    fullName: { content: "", isVisible: true },
    headline: { content: "", isVisible: true },
    email: { content: "", isVisible: true },
    phone: { content: "", isVisible: true },
    location: { content: "", isVisible: true },
    website: { content: "", isVisible: true },
    github: { content: "", isVisible: true },
    dob: { content: "", isVisible: true },
    picture: {
      imgContent: "",
      position: { zoom: 1, x: 0, y: 0 },
      isVisible: true,
    },
  },
  sections: [
    {
      column: 0,
      position: 1,
      isVisible: true,
      sectionLayout: "DescriptionCard",
      format: "professionalExperience",
      sectionTitle: { content: "Summary", isVisible: true },
      items: [
        {
          isVisible: true,
          description: {
            content: "",
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
      format: "education",
      sectionTitle: { content: "Education & Qualifications", isVisible: true },
      items: [
        {
          isVisible: true,
          orgIcon: {
            iconContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "",
            isVisible: true,
          },
          duration: {
            content: {
              from: "",
              to: "",
            },
            isVisible: true,
          },
          description: {
            content: "",
            isVisible: true,
          },
        },
        {
          isVisible: true,
          orgIcon: {
            iconContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "",
            isVisible: true,
          },
          duration: {
            content: {
              from: "",
              to: "",
            },
            isVisible: true,
          },
          description: {
            content: "",
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
      format: "professionalExperience",
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
              from: "Jul 2023",
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
              from: "Jan 2022",
              to: "Jun 2023",
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
      sectionLayout: "DescriptionCard",
      format: "professionalExperience",
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
      tagStyle: "full-border-style", // full-border-style, bottom-border-style, list-style, bullet-style
      format: "skills",
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
      format: "education",
      sectionTitle: { content: "Education & Qualifications", isVisible: true },
      items: [
        {
          isVisible: true,
          orgIcon: {
            iconContent: "",
            isVisible: true,
            position: { zoom: 1, x: 0, y: 0 },
          },
          title: {
            content: "Post-Graduate Diploma in Information Technology",
            isVisible: true,
          },
          duration: {
            content: {
              from: "Jan 2021",
              to: "Jan 2022",
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
              from: "May 2017",
              to: "May 2021",
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
      format: "socialLinks",
      sectionTitle: { content: "Find Me Online", isVisible: true },
      items: [
        {
          isVisible: true,
          orgIcon: {
            iconContent: "",
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
          orgIcon: {
            iconContent: "",
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
          orgIcon: {
            iconContent: "",
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
