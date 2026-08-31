"use client";

const ResumeLayoutCard = ({ item }: any) => {
  const isLocked = item.locked;

  return (
    <div
      className="
        layout-card
        group
        relative
        mb-1.5
        flex
        min-h-[48px]
        cursor-grab
        select-none
        items-center
        rounded-md
        border
        border-transparent
        bg-slate-100
        px-2
        py-2
        text-center
        transition-all
        duration-150
        hover:border-violet-200
        hover:bg-violet-50
        active:cursor-grabbing
        sm:min-h-[52px]
      "
      data-id={item.id}
      data-section={item.section}
      data-title={item.title}
      draggable={!isLocked}
    >
      {/* Drag handle */}

      <div
        className="
          absolute
          left-1.5
          top-1.5
          flex
          flex-col
          gap-[2px]
          opacity-50
        "
      >
        <span className="h-[2px] w-[2px] rounded-full bg-slate-500" />
        <span className="h-[2px] w-[2px] rounded-full bg-slate-500" />
        <span className="h-[2px] w-[2px] rounded-full bg-slate-500" />
      </div>

      {/* Content */}

      <div className="w-full px-2">
        <div
          className="
            truncate
            text-[9px]
            font-semibold
            text-slate-700
            sm:text-[10px]
          "
        >
          {item.shortTitle || item.title}
        </div>

        {isLocked && (
          <div
            className="
              mt-0.5
              text-[7px]
              font-medium
              text-slate-400
            "
          >
            Locked
          </div>
        )}
      </div>

      {/* Lock */}

      {isLocked && (
        <div
          className="
            absolute
            right-1.5
            top-1.5
            text-slate-400
          "
          title="This section cannot be moved"
        >
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="
                M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2
                0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2
                0 0 0 2-2v-9a2 2 0 0 0-2-2Zm-7-2a2
                2 0 0 1 4 0v2h-4V6Zm5 11H9v-5h6v5Z
              "
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ResumeLayoutCard;
