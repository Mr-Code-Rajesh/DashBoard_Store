import { Sun, Moon, Bell, User } from "lucide-react";

export const utilitiesConfig = [
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,   // store component, not JSX
  },
  {
    id: "themeToggle",
    label: "Theme Toggle",
    icon: Moon,
  },
  {
    id: "roleBasedView",
    label: "Role View",
    icon: User,
  },
];
