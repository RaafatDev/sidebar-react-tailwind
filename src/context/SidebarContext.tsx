import { createContext } from "react";

interface SidebarContextType {
  isSidebarExpanded: boolean;
  toggleSidebarExpanded: () => void;
  activeItem: string;
  updateActiveItem: (label: string) => void;
  expandedCollapsible: string;
  updateExpandedCollapsible: (label: string) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  isSidebarExpanded: true,
  toggleSidebarExpanded: () => {},
  activeItem: "",
  updateActiveItem: () => {},
  expandedCollapsible: "",
  updateExpandedCollapsible: () => {},
});
