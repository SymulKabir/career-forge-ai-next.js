export const RESUME_FORMAT = {
  header: {
    fullName: { content: "", placeholder: "Full Name", isVisible: true },
    headline: {
      content: "",
      placeholder: "Professional Title / Headline",
      isVisible: true,
    },
    email: { content: "", placeholder: "Email Address", isVisible: true },
    phone: { content: "", placeholder: "Phone Number", isVisible: true },
    location: {
      content: "",
      placeholder: "Location (e.g. City, Country)",
      isVisible: true,
    },
    website: {
      content: "",
      placeholder: "Portfolio Website URL",
      isVisible: true,
    },
    github: { content: "", placeholder: "GitHub Profile URL", isVisible: true },
    dob: { content: "", placeholder: "Date of Birth", isVisible: true },
    picture: {
      imgContent: "",
      position: { zoom: 1, x: 0, y: 0 },
      isVisible: true,
    },
  },
  professionalExperience: {
    isVisible: true,
    column: 0,
    position: 0,
    sectionLayout: "BulletsCard",
    sectionTitle: {
      content: "",
      placeholder: "Professional Experience",
      isVisible: true,
    },
    items: [
      {
        isVisible: true,
        orgImg: {
          imgContent: "",
          isVisible: true,
          position: { zoom: 1, x: 0, y: 0 },
        },
        title: {
          content: "",
          placeholder: "Job Title (e.g. Senior Developer)",
          isVisible: true,
        },
        subtitle: {
          content: "",
          placeholder: "Company / Organization Name",
          isVisible: true,
        },
        link: {
          content: "",
          placeholder: "Company Website URL",
          isVisible: true,
        },
        duration: {
          content: {
            from: "",
            to: "",
          },
          placeholder: { from: "Start Date", to: "End Date" },
          isVisible: true,
        },
        location: {
          content: "",
          placeholder: "Location",
          isVisible: true,
        },
        description: {
          content: "",
          placeholder: "Short role overview...",
          isVisible: true,
        },
        bullets: {
          content: "",
          placeholder: "List your key achievements and responsibilities...",
          isVisible: true,
        },
      },
    ],
  },
  summary: {
    isVisible: true,
    column: 0,
    position: 1,
    sectionLayout: "DescriptionCard",
    sectionTitle: { content: "", placeholder: "Summary", isVisible: true },
    items: [
      {
        isVisible: true,
        description: {
          content: "",
          placeholder: "Write a short summary about yourself...",
          isVisible: true,
        },
      },
    ],
  },
  skills: {
    isVisible: true,
    column: 1,
    position: 0,
    sectionLayout: "TagCard",
    sectionTitle: { content: "", placeholder: "Skills", isVisible: true },
    items: [
      {
        isVisible: true,
        title: {
          content: "",
          placeholder: "Skill Category (e.g. Frontend)",
          isVisible: true,
        },
        lists: {
          content: [],
          placeholder: ["React", "TypeScript", "Tailwind"],
          isVisible: true,
        },
      },
    ],
  },
  education: {
    isVisible: true,
    column: 1,
    position: 1,
    sectionLayout: "BadgeTitleCard",
    sectionTitle: { content: "", placeholder: "Education", isVisible: true },
    items: [
      {
        isVisible: true,
        orgImg: {
          imgContent: "",
          isVisible: true,
          position: { zoom: 1, x: 0, y: 0 },
        },
        title: {
          content: "",
          placeholder: "Degree / Qualification Title",
          isVisible: true,
        },
        duration: {
          content: {
            from: "",
            to: "",
          },
          placeholder: { from: "Start Year", to: "End Year" },
          isVisible: true,
        },
        description: {
          content: "",
          placeholder: "Description or major achievements...",
          isVisible: true,
        },
      },
    ],
  },
  socialLinks: {
    isVisible: true,
    column: 1,
    position: 2,
    sectionLayout: "LinkCard",
    sectionTitle: {
      content: "",
      placeholder: "Find Me Online",
      isVisible: true,
    },
    items: [
      {
        isVisible: true,
        orgImg: {
          imgContent: "",
          isVisible: true,
          position: { zoom: 1, x: 0, y: 0 },
        },
        title: {
          content: "",
          placeholder: "Platform Name (e.g. LinkedIn)",
          isVisible: true,
        },
        link: {
          content: "",
          placeholder: "Profile URL",
          isVisible: true,
        },
      },
    ],
  },
};
