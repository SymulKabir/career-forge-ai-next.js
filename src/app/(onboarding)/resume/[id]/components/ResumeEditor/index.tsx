"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  defaultResumeData,
  ResumeData,
  ResumeEducationItem,
  ResumeExperienceItem,
  ResumeProjectItem,
  ResumeSection,
  ResumeSectionType,
} from "./data/defaultResume";

import "./styles.scss";

const STORAGE_KEY = "careerforge-resume";

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

const cloneData = <T,>(data: T): T =>
  structuredClone(data);


/* =========================================================
   COMPONENT
========================================================= */

export default function ResumeEditor() {
  const [resume, setResume] = useState<ResumeData>(() =>
    cloneData(defaultResumeData)
  );

  const [selectedSectionId, setSelectedSectionId] =
    useState<string | null>(null);

  const [editorOpen, setEditorOpen] =
    useState(false);

  const [history, setHistory] =
    useState<ResumeData[]>([]);

  const [historyIndex, setHistoryIndex] =
    useState(-1);

  const [pages, setPages] =
    useState<string[][]>([]);

  const initialized = useRef(false);

  const measurementRef =
    useRef<HTMLDivElement | null>(null);

  const paginationFrame =
    useRef<number | null>(null);


  /* =========================================================
     LOAD STORAGE
  ========================================================= */

  useEffect(() => {
    if (initialized.current) return;

    initialized.current = true;

    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      const initial =
        cloneData(defaultResumeData);

      setResume(initial);
      setHistory([initial]);
      setHistoryIndex(0);

      return;
    }

    try {
      const parsed =
        JSON.parse(saved) as ResumeData;

      setResume(parsed);
      setHistory([cloneData(parsed)]);
      setHistoryIndex(0);
    } catch (error) {
      console.error(
        "Failed to load resume",
        error
      );

      const initial =
        cloneData(defaultResumeData);

      setResume(initial);
      setHistory([initial]);
      setHistoryIndex(0);
    }
  }, []);


  /* =========================================================
     SAVE STORAGE
  ========================================================= */

  useEffect(() => {
    if (!initialized.current) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(resume)
    );
  }, [resume]);


  /* =========================================================
     HISTORY
  ========================================================= */

  const saveHistory = useCallback(
    (data: ResumeData) => {
      setHistory((previous) => {
        const next = [
          ...previous.slice(
            0,
            historyIndex + 1
          ),
          cloneData(data),
        ];

        if (next.length > 50) {
          next.shift();
        }

        return next;
      });

      setHistoryIndex((previous) => {
        const maxIndex = 49;

        return Math.min(
          previous + 1,
          maxIndex
        );
      });
    },
    [historyIndex]
  );


  /* =========================================================
     UPDATE RESUME
  ========================================================= */

  const updateResume = useCallback(
    (
      updater: (draft: ResumeData) => void,
      addToHistory = true
    ) => {
      setResume((previous) => {
        const next =
          cloneData(previous);

        updater(next);

        if (addToHistory) {
          saveHistory(next);
        }

        return next;
      });
    },
    [saveHistory]
  );


  /* =========================================================
     PERSONAL
  ========================================================= */

  const updatePersonal = (
    field: "name" | "role",
    value: string
  ) => {
    updateResume((draft) => {
      draft.personal[field] = value;
    });
  };


  /* =========================================================
     SECTION FIELD
  ========================================================= */

  const updateSectionField = (
    sectionId: string,
    field: string,
    value: string
  ) => {
    updateResume((draft) => {
      const section =
        draft.sections.find(
          (item) =>
            item.id === sectionId
        );

      if (!section) return;

      if (!section.content) {
        section.content = {};
      }

      (
        section.content as Record<
          string,
          unknown
        >
      )[field] = value;
    });
  };


  /* =========================================================
     GET SECTION
  ========================================================= */

  const getSection = (
    id: string | null
  ) =>
    resume.sections.find(
      (section) =>
        section.id === id
    );


  /* =========================================================
     ADD SECTION
  ========================================================= */

  const addSection = () => {
    const section: ResumeSection = {
      id: `custom-${Date.now()}`,
      type: "custom",
      title: "New Section",
      visible: true,
      locked: false,
      content: {
        text:
          "Click here to edit this section.",
      },
    };

    updateResume((draft) => {
      draft.sections.push(section);
    });

    setSelectedSectionId(
      section.id
    );

    setEditorOpen(true);
  };


  /* =========================================================
     DELETE SECTION
  ========================================================= */

  const deleteSection = (
    id: string
  ) => {
    const section =
      getSection(id);

    if (
      !section ||
      section.locked
    ) {
      return;
    }

    if (
      !window.confirm(
        `Delete "${section.title}" section?`
      )
    ) {
      return;
    }

    updateResume((draft) => {
      draft.sections =
        draft.sections.filter(
          (item) =>
            item.id !== id
        );
    });

    if (
      selectedSectionId === id
    ) {
      setSelectedSectionId(null);
      setEditorOpen(false);
    }
  };


  /* =========================================================
     SAVE SECTION
  ========================================================= */

  const saveSection = (
    id: string,
    title: string,
    type: ResumeSectionType,
    visible: boolean
  ) => {
    updateResume((draft) => {
      const section =
        draft.sections.find(
          (item) =>
            item.id === id
        );

      if (!section) return;

      section.title =
        title || "Untitled Section";

      section.type = type;

      section.visible =
        visible;
    });

    setEditorOpen(false);
  };


  /* =========================================================
     ADD ITEM
  ========================================================= */

  const addItem = (
    sectionId: string
  ) => {
    updateResume((draft) => {
      const section =
        draft.sections.find(
          (item) =>
            item.id === sectionId
        );

      if (!section) return;

      if (!section.items) {
        section.items = [];
      }

      switch (section.type) {
        case "experience":
          (
            section.items as ResumeExperienceItem[]
          ).push({
            id: `exp-${Date.now()}`,
            position:
              "New Position",
            company:
              "Company",
            location: "",
            startDate: "2026",
            endDate: "Present",
            description: [
              "Describe your achievement.",
            ],
          });

          break;

        case "education":
          (
            section.items as ResumeEducationItem[]
          ).push({
            id: `edu-${Date.now()}`,
            degree: "Degree",
            institution:
              "Institution",
            location: "",
            startDate: "2022",
            endDate: "2026",
          });

          break;

        case "skills":
          (
            section.items as string[]
          ).push("New Skill");

          break;

        case "projects":
          (
            section.items as ResumeProjectItem[]
          ).push({
            id:
              `project-${Date.now()}`,
            name: "New Project",
            description:
              "Project description.",
          });

          break;
      }
    });
  };


  /* =========================================================
     EXPERIENCE UPDATE
  ========================================================= */

  const updateExperienceItem = (
    sectionId: string,
    itemId: string,
    field:
      | "position"
      | "company"
      | "location"
      | "startDate"
      | "endDate",
    value: string
  ) => {
    updateResume((draft) => {
      const section =
        draft.sections.find(
          (item) =>
            item.id === sectionId
        );

      if (
        !section ||
        section.type !==
          "experience"
      ) {
        return;
      }

      const item =
        (
          section.items as ResumeExperienceItem[]
        ).find(
          (item) =>
            item.id === itemId
        );

      if (!item) return;

      item[field] = value;
    });
  };


  /* =========================================================
     EXPERIENCE DESCRIPTION
  ========================================================= */

  const updateExperienceDescription =
    (
      sectionId: string,
      itemId: string,
      index: number,
      value: string
    ) => {
      updateResume((draft) => {
        const section =
          draft.sections.find(
            (item) =>
              item.id ===
              sectionId
          );

        if (
          !section ||
          section.type !==
            "experience"
        ) {
          return;
        }

        const item =
          (
            section.items as ResumeExperienceItem[]
          ).find(
            (item) =>
              item.id === itemId
          );

        if (!item) return;

        item.description[
          index
        ] = value;
      });
    };


  /* =========================================================
     EDUCATION UPDATE
  ========================================================= */

  const updateEducationItem = (
    sectionId: string,
    itemId: string,
    field:
      | "degree"
      | "institution"
      | "location"
      | "startDate"
      | "endDate",
    value: string
  ) => {
    updateResume((draft) => {
      const section =
        draft.sections.find(
          (item) =>
            item.id === sectionId
        );

      if (
        !section ||
        section.type !==
          "education"
      ) {
        return;
      }

      const item =
        (
          section.items as ResumeEducationItem[]
        ).find(
          (item) =>
            item.id === itemId
        );

      if (!item) return;

      item[field] = value;
    });
  };


  /* =========================================================
     SKILL UPDATE
  ========================================================= */

  const updateSkill = (
    sectionId: string,
    index: number,
    value: string
  ) => {
    updateResume((draft) => {
      const section =
        draft.sections.find(
          (item) =>
            item.id === sectionId
        );

      if (
        !section ||
        section.type !== "skills"
      ) {
        return;
      }

      (
        section.items as string[]
      )[index] = value;
    });
  };


  /* =========================================================
     PROJECT UPDATE
  ========================================================= */

  const updateProjectItem = (
    sectionId: string,
    itemId: string,
    field:
      | "name"
      | "description",
    value: string
  ) => {
    updateResume((draft) => {
      const section =
        draft.sections.find(
          (item) =>
            item.id === sectionId
        );

      if (
        !section ||
        section.type !== "projects"
      ) {
        return;
      }

      const item =
        (
          section.items as ResumeProjectItem[]
        ).find(
          (item) =>
            item.id === itemId
        );

      if (!item) return;

      item[field] = value;
    });
  };


  /* =========================================================
     DRAG START
  ========================================================= */

  const handleDragStart = (
    event: React.DragEvent<HTMLElement>,
    id: string
  ) => {
    event.dataTransfer.setData(
      "sectionId",
      id
    );

    event.dataTransfer.effectAllowed =
      "move";
  };


  /* =========================================================
     DRAG OVER
  ========================================================= */

  const handleDragOver = (
    event: React.DragEvent<HTMLElement>
  ) => {
    event.preventDefault();

    event.dataTransfer.dropEffect =
      "move";
  };


  /* =========================================================
     DROP
  ========================================================= */

  const handleDrop = (
    event: React.DragEvent<HTMLElement>,
    targetId: string
  ) => {
    event.preventDefault();

    const draggedId =
      event.dataTransfer.getData(
        "sectionId"
      );

    if (
      !draggedId ||
      draggedId === targetId
    ) {
      return;
    }

    updateResume((draft) => {
      const fromIndex =
        draft.sections.findIndex(
          (item) =>
            item.id === draggedId
        );

      const toIndex =
        draft.sections.findIndex(
          (item) =>
            item.id === targetId
        );

      if (
        fromIndex === -1 ||
        toIndex === -1
      ) {
        return;
      }

      const [section] =
        draft.sections.splice(
          fromIndex,
          1
        );

      draft.sections.splice(
        toIndex,
        0,
        section
      );
    });
  };


  /* =========================================================
     ZOOM
  ========================================================= */

  const updateZoom = (
    amount: number
  ) => {
    setResume((previous) => {
      const next =
        cloneData(previous);

      next.meta.zoom =
        Math.max(
          40,
          Math.min(
            150,
            next.meta.zoom +
              amount
          )
        );

      return next;
    });
  };


  /* =========================================================
     UNDO
  ========================================================= */

  const undo = useCallback(() => {
    if (historyIndex <= 0)
      return;

    const newIndex =
      historyIndex - 1;

    const data =
      history[newIndex];

    if (!data) return;

    setHistoryIndex(
      newIndex
    );

    setResume(
      cloneData(data)
    );
  }, [
    history,
    historyIndex,
  ]);


  /* =========================================================
     REDO
  ========================================================= */

  const redo = useCallback(() => {
    if (
      historyIndex >=
      history.length - 1
    ) {
      return;
    }

    const newIndex =
      historyIndex + 1;

    const data =
      history[newIndex];

    if (!data) return;

    setHistoryIndex(
      newIndex
    );

    setResume(
      cloneData(data)
    );
  }, [
    history,
    historyIndex,
  ]);


  /* =========================================================
     KEYBOARD SHORTCUTS
  ========================================================= */

  useEffect(() => {
    const handler = (
      event: KeyboardEvent
    ) => {
      if (
        (event.ctrlKey ||
          event.metaKey) &&
        event.key.toLowerCase() ===
          "z"
      ) {
        event.preventDefault();
        undo();
      }

      if (
        (event.ctrlKey ||
          event.metaKey) &&
        event.key.toLowerCase() ===
          "y"
      ) {
        event.preventDefault();
        redo();
      }
    };

    document.addEventListener(
      "keydown",
      handler
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handler
      );
    };
  }, [undo, redo]);


  /* =========================================================
     EDITABLE PROPS
  ========================================================= */

  const editableProps = (
    _value: string,
    onBlur: (
      value: string
    ) => void
  ) => ({
    contentEditable: true,

    suppressContentEditableWarning:
      true,

    onFocus: (
      event: React.FocusEvent<HTMLElement>
    ) => {
      event.currentTarget.classList.add(
        "resume-editing"
      );
    },

    onBlur: (
      event: React.FocusEvent<HTMLElement>
    ) => {
      event.currentTarget.classList.remove(
        "resume-editing"
      );

      onBlur(
        event.currentTarget.innerText.trim()
      );
    },

    onKeyDown: (
      event: React.KeyboardEvent<HTMLElement>
    ) => {
      if (
        event.key === "Enter" &&
        !event.shiftKey &&
        event.currentTarget.tagName !==
          "LI"
      ) {
        event.preventDefault();

        event.currentTarget.blur();
      }
    },
  });


  /* =========================================================
     SECTION CONTENT
  ========================================================= */

  const renderSectionContent = (
    section: ResumeSection
  ) => {
    switch (section.type) {
      /* -----------------------------------------------------
         SUMMARY
      ----------------------------------------------------- */

      case "summary":
        return (
          <p
            className="resume-editable text-[10.5px] leading-5 text-slate-600"
            {...editableProps(
              section.content
                ?.text || "",
              (value) =>
                updateSectionField(
                  section.id,
                  "text",
                  value
                )
            )}
          >
            {section.content
              ?.text || ""}
          </p>
        );


      /* -----------------------------------------------------
         EXPERIENCE
      ----------------------------------------------------- */

      case "experience":
        return (
          <div className="section-content mt-3">
            {(
              section.items as ResumeExperienceItem[]
            ).map((item) => (
              <div
                key={item.id}
                className="resume-item"
              >
                <div className="flex justify-between gap-4">
                  <div className="min-w-0">
                    <div
                      className="resume-editable text-[11px] font-bold"
                      {...editableProps(
                        item.position,
                        (value) =>
                          updateExperienceItem(
                            section.id,
                            item.id,
                            "position",
                            value
                          )
                      )}
                    >
                      {item.position}
                    </div>

                    <div
                      className="resume-editable text-[9px] text-slate-500"
                      {...editableProps(
                        `${item.company}${
                          item.location
                            ? ` · ${item.location}`
                            : ""
                        }`,
                        (value) => {
                          const parts =
                            value.split(
                              "·"
                            );

                          updateExperienceItem(
                            section.id,
                            item.id,
                            "company",
                            parts[0]?.trim() ||
                              ""
                          );

                          updateExperienceItem(
                            section.id,
                            item.id,
                            "location",
                            parts[1]?.trim() ||
                              ""
                          );
                        }
                      )}
                    >
                      {item.company}

                      {item.location
                        ? ` · ${item.location}`
                        : ""}
                    </div>
                  </div>

                  <div
                    className="resume-editable shrink-0 text-[9px] text-slate-400"
                    {...editableProps(
                      `${item.startDate} — ${item.endDate}`,
                      (value) => {
                        const parts =
                          value.split(
                            "—"
                          );

                        updateExperienceItem(
                          section.id,
                          item.id,
                          "startDate",
                          parts[0]?.trim() ||
                            ""
                        );

                        updateExperienceItem(
                          section.id,
                          item.id,
                          "endDate",
                          parts[1]?.trim() ||
                            ""
                        );
                      }
                    )}
                  >
                    {item.startDate}
                    {" — "}
                    {item.endDate}
                  </div>
                </div>

                <ul className="mt-2 list-disc space-y-1 pl-4 text-[9.5px] leading-4 text-slate-600">
                  {item.description.map(
                    (
                      description,
                      index
                    ) => (
                      <li
                        key={index}
                        className="resume-editable"
                        {...editableProps(
                          description,
                          (value) =>
                            updateExperienceDescription(
                              section.id,
                              item.id,
                              index,
                              value
                            )
                        )}
                      >
                        {description}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}

            <AddItemButton
              onClick={() =>
                addItem(section.id)
              }
            />
          </div>
        );


      /* -----------------------------------------------------
         EDUCATION
      ----------------------------------------------------- */

      case "education":
        return (
          <div className="section-content mt-3">
            {(
              section.items as ResumeEducationItem[]
            ).map((item) => (
              <div
                key={item.id}
                className="resume-item"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <div
                      className="resume-editable text-[11px] font-bold"
                      {...editableProps(
                        item.degree,
                        (value) =>
                          updateEducationItem(
                            section.id,
                            item.id,
                            "degree",
                            value
                          )
                      )}
                    >
                      {item.degree}
                    </div>

                    <div
                      className="resume-editable text-[9px] text-slate-500"
                      {...editableProps(
                        item.institution,
                        (value) =>
                          updateEducationItem(
                            section.id,
                            item.id,
                            "institution",
                            value
                          )
                      )}
                    >
                      {item.institution}
                    </div>
                  </div>

                  <div
                    className="resume-editable shrink-0 text-[9px] text-slate-400"
                    {...editableProps(
                      `${item.startDate} — ${item.endDate}`,
                      (value) => {
                        const parts =
                          value.split(
                            "—"
                          );

                        updateEducationItem(
                          section.id,
                          item.id,
                          "startDate",
                          parts[0]?.trim() ||
                            ""
                        );

                        updateEducationItem(
                          section.id,
                          item.id,
                          "endDate",
                          parts[1]?.trim() ||
                            ""
                        );
                      }
                    )}
                  >
                    {item.startDate}
                    {" — "}
                    {item.endDate}
                  </div>
                </div>
              </div>
            ))}

            <AddItemButton
              onClick={() =>
                addItem(section.id)
              }
            />
          </div>
        );


      /* -----------------------------------------------------
         SKILLS
      ----------------------------------------------------- */

      case "skills":
        return (
          <div className="section-content mt-3 flex flex-wrap gap-1.5">
            {(
              section.items as string[]
            ).map(
              (
                skill,
                index
              ) => (
                <span
                  key={index}
                  className="resume-skill rounded bg-violet-50 px-2 py-1 text-[8.5px] font-semibold"
                  style={{
                    color:
                      "var(--accent)",
                  }}
                  contentEditable
                  suppressContentEditableWarning
                  onFocus={(event) =>
                    event.currentTarget.classList.add(
                      "resume-editing"
                    )
                  }
                  onBlur={(event) => {
                    event.currentTarget.classList.remove(
                      "resume-editing"
                    );

                    updateSkill(
                      section.id,
                      index,
                      event.currentTarget.innerText.trim()
                    );
                  }}
                >
                  {skill}
                </span>
              )
            )}

            <AddItemButton
              onClick={() =>
                addItem(section.id)
              }
            />
          </div>
        );


      /* -----------------------------------------------------
         PROJECTS
      ----------------------------------------------------- */

      case "projects":
        return (
          <div className="section-content mt-3">
            {(
              section.items as ResumeProjectItem[]
            ).map((item) => (
              <div
                key={item.id}
                className="resume-item"
              >
                <div
                  className="resume-editable text-[10px] font-bold"
                  {...editableProps(
                    item.name,
                    (value) =>
                      updateProjectItem(
                        section.id,
                        item.id,
                        "name",
                        value
                      )
                  )}
                >
                  {item.name}
                </div>

                <p
                  className="resume-editable text-[9px] leading-4 text-slate-600"
                  {...editableProps(
                    item.description,
                    (value) =>
                      updateProjectItem(
                        section.id,
                        item.id,
                        "description",
                        value
                      )
                  )}
                >
                  {item.description}
                </p>
              </div>
            ))}

            <AddItemButton
              onClick={() =>
                addItem(section.id)
              }
            />
          </div>
        );


      /* -----------------------------------------------------
         CUSTOM
      ----------------------------------------------------- */

      case "custom":
      default:
        return (
          <div
            className="resume-editable text-[10px] leading-5 text-slate-600"
            {...editableProps(
              section.content
                ?.text || "",
              (value) =>
                updateSectionField(
                  section.id,
                  "text",
                  value
                )
            )}
          >
            {section.content
              ?.text || ""}
          </div>
        );
    }
  };


  /* =========================================================
     PAGE SETTINGS
  ========================================================= */

  const pageMargin =
    resume.settings.pageMargin ??
    40;

  const sectionGap =
    resume.settings.sectionGap ??
    28;

  const itemGap =
    resume.settings.itemGap ??
    16;


  /* =========================================================
     PAGINATION
  ========================================================= */

  const paginate = useCallback(() => {
    const measurement =
      measurementRef.current;

    if (!measurement) return;

    const elements =
      Array.from(
        measurement.querySelectorAll<HTMLElement>(
          "[data-pagination-section]"
        )
      );

    if (!elements.length) {
      setPages([]);
      return;
    }

    const result: string[][] = [];

    let currentPage: string[] = [];

    /*
     * Usable page height:
     *
     * A4 height
     * minus top margin
     * minus bottom margin
     */

    const usableHeight =
      A4_HEIGHT -
      pageMargin * 2;

    let currentHeight = 0;


    elements.forEach(
      (element) => {
        const sectionId =
          element.dataset
            .paginationSection;

        if (!sectionId)
          return;

        const height =
          element.offsetHeight;

        const marginTop =
          parseFloat(
            getComputedStyle(
              element
            ).marginTop || "0"
          );

        const totalHeight =
          height + marginTop;


        /*
         * First section on a page
         */

        if (
          currentPage.length === 0
        ) {
          currentPage.push(
            sectionId
          );

          currentHeight =
            totalHeight;

          return;
        }


        /*
         * Section fits
         */

        if (
          currentHeight +
            totalHeight <=
          usableHeight
        ) {
          currentPage.push(
            sectionId
          );

          currentHeight +=
            totalHeight;

          return;
        }


        /*
         * Section doesn't fit.
         *
         * Start another page.
         */

        result.push(
          currentPage
        );

        currentPage = [
          sectionId,
        ];

        currentHeight =
          height;
      }
    );


    if (currentPage.length) {
      result.push(
        currentPage
      );
    }


    /*
     * Make sure at least one page
     * always exists.
     */

    if (!result.length) {
      result.push([]);
    }

    setPages(result);
  }, [pageMargin]);


  /* =========================================================
     RUN PAGINATION AFTER DOM LAYOUT
  ========================================================= */

  useLayoutEffect(() => {
    if (!initialized.current)
      return;

    if (paginationFrame.current) {
      cancelAnimationFrame(
        paginationFrame.current
      );
    }

    paginationFrame.current =
      requestAnimationFrame(() => {
        paginate();
      });

    return () => {
      if (
        paginationFrame.current
      ) {
        cancelAnimationFrame(
          paginationFrame.current
        );
      }
    };
  }, [
    resume,
    paginate,
    sectionGap,
    itemGap,
    pageMargin,
  ]);


  /* =========================================================
     SECTION MAP
  ========================================================= */

  const visibleSections =
    resume.sections.filter(
      (section) =>
        section.visible !== false
    );


  /* =========================================================
     ZOOM
  ========================================================= */

  const zoomScale =
    resume.meta.zoom / 100;


  /* =========================================================
     PAGE SECTION LOOKUP
  ========================================================= */

  const sectionMap =
    new Map(
      visibleSections.map(
        (section) => [
          section.id,
          section,
        ]
      )
    );


  /* =========================================================
     RENDER SECTION
  ========================================================= */

  const renderSection = (
    section: ResumeSection
  ) => {
    return (
      <section
        key={section.id}
        className="resume-section cv-section relative"
        data-section-id={
          section.id
        }
        draggable={
          !section.locked
        }
        onDragStart={(event) =>
          handleDragStart(
            event,
            section.id
          )
        }
        onDragOver={
          handleDragOver
        }
        onDrop={(event) =>
          handleDrop(
            event,
            section.id
          )
        }
      >
        {/* Controls */}

        <div className="section-controls">
          <button
            type="button"
            title="Edit section"
            className="section-edit"
            onClick={() => {
              setSelectedSectionId(
                section.id
              );

              setEditorOpen(true);
            }}
          >
            ✎
          </button>

          <button
            type="button"
            title="Drag section"
            className="section-drag"
          >
            ⠿
          </button>

          <button
            type="button"
            title="Delete section"
            className="section-delete"
            onClick={() =>
              deleteSection(
                section.id
              )
            }
          >
            ×
          </button>
        </div>


        {/* Title */}

        <div className="flex items-center justify-between">
          <h3 className="section-title text-[11px] font-extrabold uppercase tracking-[.16em]">
            {section.title}
          </h3>
        </div>


        {/* Content */}

        {renderSectionContent(
          section
        )}
      </section>
    );
  };


  /* =========================================================
     PAGE
  ========================================================= */

  const renderPage = (
    pageSections: ResumeSection[],
    pageIndex: number
  ) => {
    return (
      <article
        key={pageIndex}
        className="resume-page"
        data-page-index={
          pageIndex
        }
        style={{
          "--page-width": `${A4_WIDTH}px`,
          "--page-height": `${A4_HEIGHT}px`,
          "--page-margin": `${pageMargin}px`,
          "--section-gap": `${sectionGap}px`,
          "--item-gap": `${itemGap}px`,
          "--accent":
            resume.settings
              .accent,
          "--cv-font-size": `${resume.settings.fontSize}px`,
          "--cv-line-height":
            resume.settings
              .lineHeight,
          fontFamily:
            resume.settings
              .fontFamily,
          boxShadow:
            resume.settings
              .showPageShadow
              ? undefined
              : "none",
        } as React.CSSProperties}
      >
        <div className="resume-page-content">
          {/* Header only on first page */}

          {pageIndex === 0 && (
            <header className="resume-header pb-5">
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <h1
                    className="resume-editable text-[32px] font-extrabold tracking-tight"
                    {...editableProps(
                      resume.personal
                        .name,
                      (value) =>
                        updatePersonal(
                          "name",
                          value
                        )
                    )}
                  >
                    {
                      resume.personal
                        .name
                    }
                  </h1>

                  <p
                    className="resume-editable mt-1 text-sm font-semibold"
                    style={{
                      color:
                        "var(--accent)",
                    }}
                    {...editableProps(
                      resume.personal
                        .role,
                      (value) =>
                        updatePersonal(
                          "role",
                          value
                        )
                    )}
                  >
                    {
                      resume.personal
                        .role
                    }
                  </p>
                </div>


                <div className="contact-light max-w-[220px] shrink-0 text-right text-[10px] leading-5 text-slate-500">
                  {[
                    resume.personal
                      .contact
                      .email,

                    resume.personal
                      .contact
                      .phone,

                    resume.personal
                      .contact
                      .location,

                    resume.personal
                      .contact
                      .linkedin,

                    resume.personal
                      .contact
                      .website,

                    resume.personal
                      .contact
                      .github,
                  ]
                    .filter(Boolean)
                    .map(
                      (
                        contact,
                        index
                      ) => (
                        <div
                          key={
                            index
                          }
                        >
                          {
                            contact
                          }
                        </div>
                      )
                    )}
                </div>
              </div>


              <div
                className="mt-5 h-1 rounded-full"
                style={{
                  background:
                    "var(--accent)",
                }}
              />
            </header>
          )}


          {/* Sections */}

          {pageSections.map(
            (section) =>
              renderSection(
                section
              )
          )}
        </div>
      </article>
    );
  };


  /* =========================================================
     JSX
  ========================================================= */

  return (
    <>
      <section
        id="previewPanel"
        className="canvas min-h-0 overflow-auto overscroll-contain bg-slate-100/80 p-4 sm:p-7 lg:p-10"
      >
        {/* =====================================================
            TOOLBAR
        ===================================================== */}

        <div className="sticky top-0 z-30 mx-auto mb-5 flex max-w-[794px] items-center justify-between gap-3 pb-1">
          <div className="flex items-center gap-2">
            <div className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-slate-500 shadow-sm backdrop-blur">
              A4 · 210 × 297 mm
            </div>

            <button
              type="button"
              onClick={addSection}
              className="rounded-lg bg-violet-600 px-3 py-1.5 text-[10px] font-bold text-white hover:bg-violet-700"
            >
              + Section
            </button>
          </div>


          {/* Zoom */}

          <div className="flex items-center gap-1 rounded-xl border border-slate-200/80 bg-white/90 p-1 shadow-sm backdrop-blur">
            <button
              type="button"
              title="Zoom out"
              onClick={() =>
                updateZoom(-5)
              }
              className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-100 hover:text-violet-600"
            >
              −
            </button>

            <span className="w-10 text-center text-[10px] font-bold text-slate-600">
              {
                resume.meta
                  .zoom
              }
              %
            </span>

            <button
              type="button"
              title="Zoom in"
              onClick={() =>
                updateZoom(5)
              }
              className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-100 hover:text-violet-600"
            >
              +
            </button>
          </div>
        </div>


        {/* =====================================================
            PAGES
        ===================================================== */}

        <div
          id="paperWrap"
          className="mx-auto origin-top transition-transform duration-200"
          style={{
            width: "min(100%, 794px)",
            transform:
              `scale(${zoomScale})`,
            transformOrigin:
              "top center",
          }}
        >
          <div
            id="resumePages"
            className="resume-pages"
          >
            {pages.map(
              (
                page,
                pageIndex
              ) => {
                const pageSections =
                  page
                    .map(
                      (
                        id
                      ) =>
                        sectionMap.get(
                          id
                        )
                    )
                    .filter(
                      (
                        section
                      ): section is ResumeSection =>
                        Boolean(
                          section
                        )
                    );

                return renderPage(
                  pageSections,
                  pageIndex
                );
              }
            )}
          </div>
        </div>


        {/* =====================================================
            MEASUREMENT DOM
        ===================================================== */}

        <div
          ref={
            measurementRef
          }
          className="resume-pagination-measure"
          aria-hidden="true"
          style={{
            "--page-width": `${A4_WIDTH}px`,
            "--page-height": `${A4_HEIGHT}px`,
            "--page-margin": `${pageMargin}px`,
            "--section-gap": `${sectionGap}px`,
            "--item-gap": `${itemGap}px`,
            "--accent":
              resume.settings
                .accent,
            "--cv-font-size": `${resume.settings.fontSize}px`,
            "--cv-line-height":
              resume.settings
                .lineHeight,
            fontFamily:
              resume.settings
                .fontFamily,
          } as React.CSSProperties}
        >
          <div className="resume-page-content">
            <header className="resume-header pb-5">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h1 className="text-[32px] font-extrabold tracking-tight">
                    {
                      resume.personal
                        .name
                    }
                  </h1>

                  <p
                    className="mt-1 text-sm font-semibold"
                    style={{
                      color:
                        "var(--accent)",
                    }}
                  >
                    {
                      resume.personal
                        .role
                    }
                  </p>
                </div>

                <div className="max-w-[220px] text-right text-[10px] leading-5 text-slate-500">
                  {[
                    resume.personal
                      .contact
                      .email,

                    resume.personal
                      .contact
                      .phone,

                    resume.personal
                      .contact
                      .location,

                    resume.personal
                      .contact
                      .linkedin,

                    resume.personal
                      .contact
                      .website,

                    resume.personal
                      .contact
                      .github,
                  ]
                    .filter(Boolean)
                    .map(
                      (
                        contact,
                        index
                      ) => (
                        <div
                          key={
                            index
                          }
                        >
                          {
                            contact
                          }
                        </div>
                      )
                    )}
                </div>
              </div>

              <div
                className="mt-5 h-1 rounded-full"
                style={{
                  background:
                    "var(--accent)",
                }}
              />
            </header>


            {visibleSections.map(
              (section) => (
                <div
                  key={
                    section.id
                  }
                  data-pagination-section={
                    section.id
                  }
                  className="resume-section cv-section"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="section-title text-[11px] font-extrabold uppercase tracking-[.16em]">
                      {
                        section.title
                      }
                    </h3>
                  </div>

                  {renderMeasurementContent(
                    section
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION EDITOR
      ===================================================== */}

      {editorOpen &&
        selectedSectionId && (
          <SectionEditor
            section={getSection(
              selectedSectionId
            )}
            onClose={() =>
              setEditorOpen(
                false
              )
            }
            onSave={
              saveSection
            }
          />
        )}
    </>
  );
}


/* =========================================================
   MEASUREMENT CONTENT
========================================================= */

function renderMeasurementContent(
  section: ResumeSection
) {
  switch (section.type) {
    case "summary":
      return (
        <p className="mt-3 text-[10.5px] leading-5 text-slate-600">
          {
            section.content
              ?.text
          }
        </p>
      );


    case "experience":
      return (
        <div className="section-content mt-3">
          {(
            section.items as ResumeExperienceItem[]
          ).map((item) => (
            <div
              key={item.id}
              className="resume-item"
            >
              <div className="flex justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold">
                    {
                      item.position
                    }
                  </div>

                  <div className="text-[9px] text-slate-500">
                    {
                      item.company
                    }

                    {item.location
                      ? ` · ${item.location}`
                      : ""}
                  </div>
                </div>

                <div className="text-[9px] text-slate-400">
                  {
                    item.startDate
                  }
                  {" — "}
                  {
                    item.endDate
                  }
                </div>
              </div>

              <ul className="mt-2 list-disc space-y-1 pl-4 text-[9.5px] leading-4 text-slate-600">
                {item.description.map(
                  (
                    description,
                    index
                  ) => (
                    <li
                      key={
                        index
                      }
                    >
                      {
                        description
                      }
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      );


    case "education":
      return (
        <div className="section-content mt-3">
          {(
            section.items as ResumeEducationItem[]
          ).map((item) => (
            <div
              key={item.id}
              className="resume-item"
            >
              <div className="flex justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold">
                    {
                      item.degree
                    }
                  </div>

                  <div className="text-[9px] text-slate-500">
                    {
                      item.institution
                    }
                  </div>
                </div>

                <div className="text-[9px] text-slate-400">
                  {
                    item.startDate
                  }
                  {" — "}
                  {
                    item.endDate
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      );


    case "skills":
      return (
        <div className="section-content mt-3 flex flex-wrap gap-1.5">
          {(
            section.items as string[]
          ).map(
            (
              skill,
              index
            ) => (
              <span
                key={index}
                className="rounded bg-violet-50 px-2 py-1 text-[8.5px] font-semibold"
                style={{
                  color:
                    "var(--accent)",
                }}
              >
                {skill}
              </span>
            )
          )}
        </div>
      );


    case "projects":
      return (
        <div className="section-content mt-3">
          {(
            section.items as ResumeProjectItem[]
          ).map((item) => (
            <div
              key={item.id}
              className="resume-item"
            >
              <div className="text-[10px] font-bold">
                {
                  item.name
                }
              </div>

              <p className="text-[9px] leading-4 text-slate-600">
                {
                  item.description
                }
              </p>
            </div>
          ))}
        </div>
      );


    case "custom":
    default:
      return (
        <div className="mt-3 text-[10px] leading-5 text-slate-600">
          {
            section.content
              ?.text
          }
        </div>
      );
  }
}


/* =========================================================
   ADD ITEM BUTTON
========================================================= */

function AddItemButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="add-item mt-2 rounded-md border border-dashed border-slate-300 px-2 py-1 text-[9px] text-slate-400 hover:border-violet-400 hover:text-violet-600"
    >
      + Add
    </button>
  );
}


/* =========================================================
   SECTION EDITOR
========================================================= */

interface SectionEditorProps {
  section?: ResumeSection;

  onClose: () => void;

  onSave: (
    id: string,
    title: string,
    type: ResumeSectionType,
    visible: boolean
  ) => void;
}


function SectionEditor({
  section,
  onClose,
  onSave,
}: SectionEditorProps) {
  const [title, setTitle] =
    useState(
      section?.title || ""
    );

  const [type, setType] =
    useState<ResumeSectionType>(
      section?.type ||
        "custom"
    );

  const [visible, setVisible] =
    useState(
      section?.visible ??
        true
    );


  /*
   * Important:
   *
   * When a different section is
   * selected, refresh local editor
   * state.
   */

  useEffect(() => {
    setTitle(
      section?.title || ""
    );

    setType(
      section?.type || "custom"
    );

    setVisible(
      section?.visible ?? true
    );
  }, [section]);


  if (!section)
    return null;


  return (
    <div
      id="sectionEditor"
      className="fixed right-5 top-20 z-[100] w-[340px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800">
          Edit Section
        </h3>

        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700"
        >
          ×
        </button>
      </div>


      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600">
            Section title
          </label>

          <input
            value={title}
            onChange={(
              event
            ) =>
              setTitle(
                event.target
                  .value
              )
            }
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-violet-500"
          />
        </div>


        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600">
            Section type
          </label>

          <select
            value={type}
            onChange={(
              event
            ) =>
              setType(
                event.target
                  .value as ResumeSectionType
              )
            }
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            <option value="summary">
              Summary
            </option>

            <option value="experience">
              Experience
            </option>

            <option value="education">
              Education
            </option>

            <option value="skills">
              Skills
            </option>

            <option value="projects">
              Projects
            </option>

            <option value="custom">
              Custom
            </option>
          </select>
        </div>


        <label className="flex items-center gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            checked={visible}
            onChange={(
              event
            ) =>
              setVisible(
                event.target
                  .checked
              )
            }
          />

          Show section
        </label>


        <button
          type="button"
          onClick={() =>
            onSave(
              section.id,
              title.trim(),
              type,
              visible
            )
          }
          className="w-full rounded-lg bg-violet-600 px-4 py-2 text-sm font-bold text-white hover:bg-violet-700"
        >
          Save Section
        </button>
      </div>
    </div>
  );
}