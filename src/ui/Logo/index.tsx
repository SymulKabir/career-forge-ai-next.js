import Link from "next/link";

const Index = ({
    logoSize = "w-9 h-9",
    iconSize = "w-1/2 h-1/2",
    logoFontSize = "text-lg",
    mode = "full",
    href = "/",
}:any) => {
    return (
        <Link href={href} className="flex items-center gap-2.5 h-full">
            {/* LOGO ICON */}
            <div
                className={`
          aspect-square
          rounded-xl
          bg-gradient-to-br from-violet-600 to-indigo-600
          flex items-center justify-center
          text-white
          shadow-lg shadow-violet-500/20
          ${logoSize}
        `}
            >
                <svg
                    className={iconSize}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M12 3v18" />
                    <path d="M5 8h14" />
                    <path d="M7 8l-4 7h8L7 8Z" />
                    <path d="M17 8l-4 7h8l-4-7Z" />
                </svg>
            </div>

            {/* LOGO TEXT */}
            {mode !== "half" && (
                <span
                    className={`
            font-bold
            tracking-tight
            text-slate-900
            ${logoFontSize}
          `}
                >
                    Career
                    <span className="text-violet-600"> Forge </span>

                    <span className="text-[10px] text-cyan-600 align-top ml-0.5">
                        AI
                    </span>
                </span>
            )}
        </Link>
    );
}


export default Index