import { useState } from "react";

import { navItemsBottom, navItemsTop } from "./navItems";
import { SidebarItem } from "./SidebarItem";
import { SidebarContainer } from "./SidebarContainer";
import { SidebarContext } from "../../context/SidebarContext";

type ItemLabel = (typeof navItemsTop)[number]["label"] | "Settings" | "Help";

export const SideBar = () => {
  const [activeItem, setActiveItem] = useState<ItemLabel>("");
  const [expandedCollapsible, setExpandedCollapsible] = useState<ItemLabel>("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebarExpanded = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  const updateActiveItem = (label: string) => {
    setActiveItem(label);
  };

  const updateExpandedCollapsible = (label: string) => {
    setExpandedCollapsible(label);
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarExpanded,
        toggleSidebarExpanded,
        activeItem,
        updateActiveItem,
        expandedCollapsible,
        updateExpandedCollapsible,
      }}
    >
      <SidebarContainer>
        {navItemsTop.map((item) => {
          return <SidebarItem key={item.label} item={item} />;
        })}

        <hr className="my-3" />

        {navItemsBottom.map((item) => {
          return <SidebarItem key={item.label} item={item} />;
        })}
      </SidebarContainer>
    </SidebarContext.Provider>
  );
};
