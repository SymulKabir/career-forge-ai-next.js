import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function AiAssistantIcon(props: IconProps) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function FixResumeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function CheckTailorIcon(props: IconProps) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="6" />
      <path strokeLinecap="round" d="m16 16 4 4" />
      <path strokeLinecap="round" d="M8.5 11h5M11 8.5v5" />
    </svg>
  );
}

export function RearrangeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        d="M8 7h12M4 7h.01M4 12h.01M8 12h12M4 17h.01M8 17h12"
      />
    </svg>
  );
}

export function TemplatesIcon(props: IconProps) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M8 4v16M8 9h13" />
    </svg>
  );
}

export function DesignFontIcon(props: IconProps) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
      <path
        strokeLinecap="round"
        d="m6 16 9.5-9.5a2.12 2.12 0 0 1 3 3L9 19H6v-3Z"
      />
      <path strokeLinecap="round" d="M14 8l2 2" />
    </svg>
  );
}

export const TOOL_ICONS: any = {
  "ai-assistant": AiAssistantIcon,
  "fix-resume": FixResumeIcon,
  "check-tailor": CheckTailorIcon,
  rearrange: RearrangeIcon,
  templates: TemplatesIcon,
  "design-font": DesignFontIcon,
};
