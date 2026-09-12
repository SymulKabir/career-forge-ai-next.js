"use client";

import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  X,
  Search,
  Briefcase,
} from "lucide-react";
import { useResume } from "../../../hooks";
import { useResumeContext } from "../../../context/resume-editor-context";
import { AVAILABLE_ICONS } from "../../../constants/icons";

type IconPreviewProps = {
  rootPath: string;
  placeholder?: string;
  hide?: {
    visible?: boolean;
  };
};

const ICONS_PER_PAGE = 50;

const IconPreview: React.FC<IconPreviewProps> = ({
  rootPath,
}) => {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [visibleCount, setVisibleCount] =
    useState(ICONS_PER_PAGE);

  const iconGridRef =
    useRef<HTMLDivElement | null>(null);

  const {
    getResumeValue,
    updateResume,
  } = useResume();

  const { setting } =
    useResumeContext();

  /*
   * =========================================
   * GLOBAL ICON SETTINGS
   * =========================================
   */

  const iconSettings =
    setting?.sections?.icons;

  const iconEnabled =
    iconSettings?.enabled ?? true;

  const iconSize =
    iconSettings?.size ?? 16;

  const iconColor =
    iconSettings?.color ??
    "#4b5563";

  const iconBackgroundColor =
    iconSettings?.backgroundColor ??
    "#f3f4f6";

  const iconBorderColor =
    iconSettings?.borderColor ??
    "#e5e7eb";

  const iconBorderWidth =
    iconSettings?.borderWidth ?? 1;

  const iconBorderRadius =
    iconSettings?.borderRadius ?? 6;

  /*
   * =========================================
   * ICON NAME PATH
   * =========================================
   */

  const iconNamePath =
    `${rootPath}.iconName`;

  /*
   * =========================================
   * SELECTED ICON
   * =========================================
   */

  const selectedIconName =
    getResumeValue(iconNamePath) ||
    "Briefcase";

  /*
   * Find selected icon dynamically
   */

  const SelectedIconComponent =
    useMemo(() => {
      return (
        AVAILABLE_ICONS.find(
          (item) =>
            item.name ===
            selectedIconName
        )?.icon || Briefcase
      );
    }, [selectedIconName]);

  /*
   * =========================================
   * FILTER ICONS
   * =========================================
   */

  const filteredIcons = useMemo(() => {
    const query =
      searchQuery
        .trim()
        .toLowerCase();

    if (!query) {
      return AVAILABLE_ICONS;
    }

    return AVAILABLE_ICONS.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(query)
    );
  }, [searchQuery]);

  /*
   * =========================================
   * VISIBLE ICONS
   * =========================================
   */

  const visibleIcons = useMemo(() => {
    return filteredIcons.slice(
      0,
      visibleCount
    );
  }, [
    filteredIcons,
    visibleCount,
  ]);

  /*
   * =========================================
   * CHECK MORE ICONS
   * =========================================
   */

  const hasMoreIcons =
    visibleCount <
    filteredIcons.length;

  /*
   * =========================================
   * RESET PAGINATION WHEN SEARCH CHANGES
   * =========================================
   */

  useEffect(() => {
    setVisibleCount(
      ICONS_PER_PAGE
    );

    if (iconGridRef.current) {
      iconGridRef.current.scrollTop = 0;
    }
  }, [searchQuery]);

  /*
   * =========================================
   * LOAD MORE ICONS
   * =========================================
   */

  const loadMoreIcons =
    useCallback(() => {
      if (!hasMoreIcons) {
        return;
      }

      setVisibleCount(
        (previousCount) =>
          Math.min(
            previousCount +
              ICONS_PER_PAGE,
            filteredIcons.length
          )
      );
    }, [
      hasMoreIcons,
      filteredIcons.length,
    ]);

  /*
   * =========================================
   * HANDLE GRID SCROLL
   * =========================================
   */

  const handleGridScroll =
    useCallback(() => {
      const element =
        iconGridRef.current;

      if (
        !element ||
        !hasMoreIcons
      ) {
        return;
      }

      const {
        scrollTop,
        clientHeight,
        scrollHeight,
      } = element;

      const isNearBottom =
        scrollTop +
          clientHeight >=
        scrollHeight - 100;

      if (isNearBottom) {
        loadMoreIcons();
      }
    }, [
      hasMoreIcons,
      loadMoreIcons,
    ]);

  /*
   * =========================================
   * SELECT ICON
   * =========================================
   */

  const handleSelectIcon = (
    iconName: string
  ) => {
    updateResume({
      propertyPath:
        iconNamePath,
      value: iconName,
    });

    setIsModalOpen(false);

    setSearchQuery("");

    setVisibleCount(
      ICONS_PER_PAGE
    );
  };

  /*
   * =========================================
   * OPEN MODAL
   * =========================================
   */

  const handleOpenModal = () => {
    setIsModalOpen(true);

    setSearchQuery("");

    setVisibleCount(
      ICONS_PER_PAGE
    );
  };

  /*
   * =========================================
   * CLOSE MODAL
   * =========================================
   */

  const handleCloseModal = () => {
    setIsModalOpen(false);

    setSearchQuery("");

    setVisibleCount(
      ICONS_PER_PAGE
    );
  };

  /*
   * =========================================
   * HIDE ICON IF DISABLED
   * =========================================
   */

  if (!iconEnabled) {
    return null;
  }

  return (
    <>
      <style>{`
        .preview-icon-container {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }

        .preview-icon-container
        .icon-inner-container {
          flex-shrink: 0;
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;

          box-sizing: border-box;

          transition:
            border-color 0.15s ease,
            background-color 0.15s ease,
            color 0.15s ease,
            transform 0.15s ease;
        }

        .preview-icon-container:hover
        .icon-inner-container {
          transform: scale(1.03);
        }

        /*
         * =====================================
         * MODAL OVERLAY
         * =====================================
         */

        .modal-overlay {
          position: fixed;
          inset: 0;

          width: 100vw;
          height: 100vh;

          background: rgba(
            0,
            0,
            0,
            0.6
          );

          display: flex;
          align-items: center;
          justify-content: center;

          z-index: 1000;

          padding: 16px;

          box-sizing: border-box;
        }

        /*
         * =====================================
         * MODAL
         * =====================================
         */

        .modal-content {
          background: #ffffff;

          padding: 24px;

          border-radius: 12px;

          width: 500px;

          max-width: 100%;

          box-sizing: border-box;

          text-align: center;

          box-shadow:
            0 10px 25px
            rgba(0, 0, 0, 0.2);

          animation:
            iconModalIn
            0.15s
            ease-out;
        }

        @keyframes iconModalIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /*
         * =====================================
         * MODAL HEADER
         * =====================================
         */

        .modal-header {
          display: flex;

          justify-content:
            space-between;

          align-items: center;

          margin-bottom: 16px;
        }

        .modal-header h3 {
          margin: 0;

          font-size: 16px;

          font-weight: 700;

          color: #111827;
        }

        .close-modal-btn {
          width: 32px;

          height: 32px;

          background: transparent;

          border: none;

          border-radius: 6px;

          cursor: pointer;

          color: #6b7280;

          display: flex;

          align-items: center;

          justify-content: center;

          transition:
            background-color 0.15s ease,
            color 0.15s ease;
        }

        .close-modal-btn:hover {
          background-color: #f3f4f6;

          color: #111827;
        }

        /*
         * =====================================
         * SEARCH
         * =====================================
         */

        .icon-search-wrapper {
          position: relative;

          width: 100%;

          margin-bottom: 10px;
        }

        .icon-search-input {
          box-sizing: border-box;

          width: 100%;

          height: 38px;

          padding:
            0
            12px
            0
            34px;

          border:
            1px solid #e5e7eb;

          border-radius: 6px;

          font-size: 12px;

          outline: none;

          color: #333;

          background: #fff;

          transition:
            border-color 0.15s ease,
            box-shadow 0.15s ease;
        }

        .icon-search-input:focus {
          border-color: #7c3aed;

          box-shadow:
            0 0 0 2px
            rgba(
              124,
              58,
              237,
              0.08
            );
        }

        .icon-search-icon {
          position: absolute;

          left: 10px;

          top: 11px;

          color: #9ca3af;

          pointer-events: none;
        }

        /*
         * =====================================
         * RESULT COUNT
         * =====================================
         */

        .icon-result-count {
          text-align: left;

          font-size: 11px;

          color: #6b7280;

          margin-bottom: 8px;
        }

        /*
         * =====================================
         * ICON GRID
         * =====================================
         */

        .icon-grid {
          display: grid;

          grid-template-columns:
            repeat(
              5,
              minmax(0, 1fr)
            );

          gap: 8px;

          height: 400px;

          max-height: 400px;

          overflow-y: auto;

          overflow-x: hidden;

          padding: 4px;

          box-sizing: border-box;

          scrollbar-width: thin;

          scrollbar-color:
            #d1d5db
            #f3f4f6;
        }

        .icon-grid::-webkit-scrollbar {
          width: 6px;
        }

        .icon-grid::-webkit-scrollbar-track {
          background: #f3f4f6;

          border-radius: 10px;
        }

        .icon-grid::-webkit-scrollbar-thumb {
          background: #d1d5db;

          border-radius: 10px;
        }

        .icon-grid::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }

        /*
         * =====================================
         * ICON ITEM
         * =====================================
         */

        .icon-grid-item {
          position: relative;

          width: 100%;

          height: 72px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid #e5e7eb;

          border-radius: 8px;

          background: #ffffff;

          cursor: pointer;

          color: #4b5563;

          box-sizing: border-box;

          transition:
            border-color 0.15s ease,
            background-color 0.15s ease,
            color 0.15s ease,
            box-shadow 0.15s ease;
        }

        .icon-grid-item:hover {
          border-color: #7c3aed;

          background-color: #f5f3ff;

          color: #7c3aed;
        }

        .icon-grid-item.selected {
          border-color: #7c3aed;

          background-color: #f5f3ff;

          color: #7c3aed;

          box-shadow:
            0 0 0 1px
            #7c3aed;
        }

        /*
         * =====================================
         * ICON NAME TOOLTIP
         * =====================================
         */

        .icon-name-tooltip {
          position: absolute;

          left: 50%;

          bottom: -34px;

          transform:
            translateX(-50%)
            translateY(-4px);

          z-index: 100;

          max-width: 180px;

          padding:
            5px
            8px;

          background: #111827;

          color: #ffffff;

          border-radius: 5px;

          font-size: 10px;

          font-weight: 500;

          line-height: 1.2;

          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;

          pointer-events: none;

          opacity: 0;

          visibility: hidden;

          transition:
            opacity 0.15s ease,
            transform 0.15s ease,
            visibility 0.15s ease;
        }

        .icon-name-tooltip::before {
          content: "";

          position: absolute;

          top: -4px;

          left: 50%;

          transform:
            translateX(-50%)
            rotate(45deg);

          width: 8px;

          height: 8px;

          background: #111827;
        }

        .icon-grid-item:hover
        .icon-name-tooltip {
          opacity: 1;

          visibility: visible;

          transform:
            translateX(-50%)
            translateY(0);
        }

        /*
         * =====================================
         * LOADING
         * =====================================
         */

        .icon-loading {
          display: flex;

          align-items: center;

          justify-content: center;

          height: 32px;

          font-size: 11px;

          color: #6b7280;
        }

        /*
         * =====================================
         * EMPTY
         * =====================================
         */

        .icon-empty-state {
          grid-column: 1 / -1;

          height: 200px;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 12px;

          color: #9ca3af;
        }

        /*
         * =====================================
         * MOBILE
         * =====================================
         */

        @media (max-width: 500px) {
          .modal-content {
            width: 100%;

            padding: 16px;
          }

          .icon-grid {
            grid-template-columns:
              repeat(
                4,
                minmax(0, 1fr)
              );

            height: 350px;

            max-height: 350px;
          }
        }
      `}</style>

      {/* =========================================
          ICON PREVIEW
      ========================================= */}

      <div
        className="preview-icon-container"
        onClick={handleOpenModal}
      >
        <div
          className="icon-inner-container"
          style={{
            width:
              `${iconSize + 20}px`,

            height:
              `${iconSize + 20}px`,

            backgroundColor:
              iconBackgroundColor,

            border:
              `${iconBorderWidth}px solid ${iconBorderColor}`,

            borderRadius:
              `${iconBorderRadius}px`,

            color:
              iconColor,
          }}
        >
          <SelectedIconComponent
            size={iconSize}
            color={iconColor}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* =========================================
          ICON MODAL
      ========================================= */}

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={
            handleCloseModal
          }
        >
          <div
            className="modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* HEADER */}

            <div className="modal-header">
              <h3>
                Select an Icon
              </h3>

              <button
                type="button"
                className="close-modal-btn"
                onClick={
                  handleCloseModal
                }
                aria-label="Close icon picker"
              >
                <X size={18} />
              </button>
            </div>

            {/* SEARCH */}

            <div className="icon-search-wrapper">
              <Search
                size={14}
                className="icon-search-icon"
              />

              <input
                type="text"
                placeholder="Search icons..."
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                className="icon-search-input"
                autoFocus
              />
            </div>

            {/* RESULT COUNT */}

            <div className="icon-result-count">
              Showing{" "}
              <strong>
                {
                  visibleIcons.length
                }
              </strong>{" "}
              of{" "}
              <strong>
                {
                  filteredIcons.length
                }
              </strong>{" "}
              icons
            </div>

            {/* ICON GRID */}

            <div
              ref={iconGridRef}
              className="icon-grid"
              onScroll={
                handleGridScroll
              }
            >
              {visibleIcons.length ===
              0 ? (
                <div className="icon-empty-state">
                  No icons found
                </div>
              ) : (
                visibleIcons.map(
                  ({
                    name,
                    icon: IconComponent,
                  }) => {
                    const isSelected =
                      selectedIconName ===
                      name;

                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() =>
                          handleSelectIcon(
                            name
                          )
                        }
                        className={`icon-grid-item ${
                          isSelected
                            ? "selected"
                            : ""
                        }`}
                        aria-label={name}
                      >
                        <IconComponent
                          size={22}
                          color={
                            isSelected
                              ? iconColor
                              : "#4b5563"
                          }
                        />

                        <span className="icon-name-tooltip">
                          {name}
                        </span>
                      </button>
                    );
                  }
                )
              )}
            </div>

            {/* STATUS */}

            <div className="icon-loading">
              {hasMoreIcons
                ? "Scroll to load more"
                : filteredIcons.length >
                    0
                  ? "All icons loaded"
                  : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IconPreview;