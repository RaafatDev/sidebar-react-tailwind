import { createContext } from "react";
import { ItemLabel } from "../components/sidebar/navItems";

interface SidebarContextType {
  isSidebarExpanded: boolean;
  toggleSidebarExpanded: () => void;
  activeItem: ItemLabel | null;
  updateActiveItem: (label: ItemLabel | null) => void;
  expandedCollapsible: ItemLabel | null;
  updateExpandedCollapsible: (label: ItemLabel | null) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  isSidebarExpanded: true,
  toggleSidebarExpanded: () => {},
  activeItem: null,
  updateActiveItem: () => {},
  expandedCollapsible: null,
  updateExpandedCollapsible: () => {},
});
