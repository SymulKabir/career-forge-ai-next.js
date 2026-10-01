export const RESUME_SECTION_SETTING = {
  background: "#FFF",
  image: {
    enabled: true,
    size: 40,
    backgroundColor: "#f3f4f6",
    borderColor: "#e5e7eb",
    borderWidth: 1,
    borderRadius: 6,
    padding: 4,
  },

  icons: {
    enabled: true,
    size: 16,
    color: "#4b5563",
    backgroundColor: "#f3f4f6",
    borderColor: "#e5e7eb",
    borderWidth: 1,
    borderRadius: 6,
  },

  sectionTitle: {
    enabled: true,
    fontSize: 18,
    fontWeight: 700,
    fontColor: "#1a202c",
    lineHeight: 1.2,
    letterSpacing: 0,
    textTransform: "uppercase",
    gap: 0,
    sectionGap: 12,

    border: {
      enabled: true,
      width: 2,
      style: "solid",
      color: "#1a202c",
      position: "bottom",
      radius: 0,
      spacing: 6,
    },
  },

  subSectionTitle: {
    enabled: true,
    fontSize: 14,
    fontWeight: 700,
    fontColor: "#1a202c",
    lineHeight: 1.4,
    letterSpacing: 0,
    textTransform: "none",
    gap: 4,
    sectionGap: 8,
  },

  organizationTitle: {
    enabled: true,
    fontSize: 14,
    fontWeight: 600,
    fontColor: "#2563eb",
    lineHeight: 1.4,
    letterSpacing: 0,
    textTransform: "none",
    gap: 4,
    sectionGap: 6,
  },

  metadata: {
    enabled: true,
    fontSize: 13,
    fontWeight: 400,
    fontColor: "#6b7280",
    lineHeight: 1.4,
    letterSpacing: 0,
    textTransform: "none",
    gap: 2,
    sectionGap: 10,
  },
};
export const RESUME_SETTING = {
  resumePageHeight: 1330,
  resumePageWidth: 940,
  margin: {
    x: 30,
    y: 50,
  },
  sectionGap: 20,
  font: {
    family: "Inter, sans-serif",
  }, 
  headerStyle: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: "30px",
  },
  sectionStyle: {
    display: "grid",
    gridTemplateColumns: "6fr 4fr",
    gap: "30px",
  },
  header: {
    layout: "split",
    background: "#FFF",

    nameSize: 36,
    nameWeight: 800,
    nameColor: "#000000",

    titleSize: 20,
    titleWeight: 600,
    titleColor: "#0084ff",

    metaTextSize: 14,
    metaTextColor: "#4b5563",

    imageSize: 130,
    imageRadius: "50%",

    alignment: "space-between",
    gap: 20,
    paddingBottom: 20,
  },
  sections: [],
};

export const TOOLBAR = {
  collapse: {
    marginFont: false,
    header: true,
    section: true,
    stylingLayout: true,
  },
};
