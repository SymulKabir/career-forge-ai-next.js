import type { ResumeLayoutItem, ToolItem } from "../types";

export const RESUME_CONSTANTS = {
  headerHeight: "65px",
  headerHeight2: "605px",
  toolBarHeight: "45px",

  editorShell: {
    leftSectionWidth: "900px",
    middleSectionWidth: "900px",
  },
} as const;

export const TOOL_ITEMS: ToolItem[] = [
  {
    title: "AI Assistant",
    iconClass: "bg-white/15",
    buttonClass:
      "text-slate-600 hover:bg-slate-50 hover:text-violet-600",
    actionGroup: "ToolBox",
    childId: "aiAssistant",
    badge: "",
    icon: "ai-assistant",
  },

  {
    title: "Fix Resume",
    iconClass: "bg-emerald-50 text-emerald-600",
    buttonClass:
      "text-slate-600 hover:bg-slate-50 hover:text-violet-600",
    actionGroup: "ToolBox",
    childId: "fixResumePanel",
    badge: "B-",
    icon: "fix-resume",
  },

  {
    title: "Check & Tailor",
    iconClass: "bg-blue-50 text-blue-600",
    buttonClass:
      "text-slate-600 hover:bg-slate-50 hover:text-violet-600",
    actionGroup: "ToolBox",
    childId: "checkTailorPanel",
    badge: "",
    icon: "check-tailor",
  },

  {
    title: "Rearrange",
    iconClass: "bg-orange-50 text-orange-500",
    buttonClass:
      "text-slate-600 hover:bg-slate-50 hover:text-violet-600",
    actionGroup: "Rearrange",
    childId: "",
    badge: "",
    icon: "rearrange",
  },

  {
    title: "Templates",
    iconClass: "bg-pink-50 text-pink-500",
    buttonClass:
      "text-slate-600 hover:bg-slate-50 hover:text-violet-600",
    actionGroup: "ToolBox",
    childId: "templatesView",
    badge: "",
    icon: "templates",
  },

  {
    title: "Design & Font",
    iconClass: "bg-indigo-50 text-indigo-600",
    buttonClass:
      "text-slate-600 hover:bg-slate-50 hover:text-violet-600",
    actionGroup: "ToolBox",
    childId: "designFontPanel",
    badge: "",
    icon: "design-font",
  },
];

export const DEFAULT_RESUME_LAYOUT: ResumeLayoutItem[] = [
  {
    id: "header",
    title: "Header",
    section: "personal",
    page: 1,
    column: "full",
    order: 0,
    locked: true,
  },

  {
    id: "summary",
    title: "Summary",
    section: "summary",
    page: 1,
    column: "left",
    order: 0,
  },

  {
    id: "experience",
    title: "Experience",
    section: "experience",
    page: 1,
    column: "left",
    order: 1,
  },

  {
    id: "projects",
    title: "Projects",
    section: "projects",
    page: 1,
    column: "left",
    order: 2,
  },

  {
    id: "skills",
    title: "Skills",
    section: "skills",
    page: 1,
    column: "right",
    order: 0,
  },

  {
    id: "achievements",
    title: "Key Achievements",
    shortTitle: "Key Achievements",
    section: "achievements",
    page: 1,
    column: "right",
    order: 1,
  },

  {
    id: "projects-2",
    title: "Projects",
    section: "projects",
    page: 2,
    column: "left",
    order: 0,
  },

  {
    id: "achievements-2",
    title: "Key Achievements",
    shortTitle: "Key Achievements",
    section: "achievements",
    page: 2,
    column: "right",
    order: 0,
  },

  {
    id: "education",
    title: "Education",
    section: "education",
    page: 2,
    column: "right",
    order: 1,
  },

  {
    id: "training",
    title: "Training / Courses",
    shortTitle: "Training / Courses",
    section: "training",
    page: 2,
    column: "right",
    order: 2,
  },

  {
    id: "languages",
    title: "Languages",
    section: "languages",
    page: 2,
    column: "right",
    order: 3,
  },

  {
    id: "strengths",
    title: "Strengths",
    section: "strengths",
    page: 2,
    column: "right",
    order: 4,
  },

  {
    id: "online",
    title: "Find Me Online",
    section: "online",
    page: 2,
    column: "right",
    order: 5,
  },
];