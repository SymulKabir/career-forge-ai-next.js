export const SECTION_LIST = [
    {
        sectionData: {
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
                }
            ],
        }
    },
    {
        sectionData: {
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
        }
    },
    {
        sectionData: {
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
                } 
            ],
        }
    },
    {
        sectionData: {
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
                } 
            ],
        }
    },
    {
        sectionData: {
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
                } 
            ],
        }
    }
]