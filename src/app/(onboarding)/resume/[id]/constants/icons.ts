import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AvailableIcon = {
  name: string;
  icon: LucideIcon;
};

export const AVAILABLE_ICONS: AvailableIcon[] = Object.entries(
  LucideIcons
)
  .filter(([name, icon]) => {
    return (
      name !== "createLucideIcon" &&
      name !== "Icon" &&
      name !== "icons" &&
      typeof icon === "object"
    );
  })
  .map(([name, icon]) => ({
    name,
    icon: icon as LucideIcon,
  }));