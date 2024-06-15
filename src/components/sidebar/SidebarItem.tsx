import { useContext } from "react";

import { NavItemRecord } from "./navItems";
import { SidebarContext } from "../../context/SidebarContext";
import { ItemButton } from "./ItemButton";

interface Props {
  alert?: boolean;
  item: NavItemRecord;
}

export const SidebarItem = ({ item, alert }: Props) => {
  const {
    isSidebarExpanded,
    toggleSidebarExpanded,
    activeItem,
    updateActiveItem,
    expandedCollapsible,
    updateExpandedCollapsible,
  } = useContext(SidebarContext);

  const isCollapsibleOpen = expandedCollapsible === item.label;

  const isCollapsibleExpanded = isCollapsibleOpen && isSidebarExpanded;

  const active = activeItem === item.label;
  const isCollapsible = item.nested && item.nested.length > 0;
  const hasNestedItemActive =
    isCollapsible && item.nested?.some((x) => x.label === activeItem);
  //
  // const isCollapsibleOpen = (active || isNestedItemActive) && isSidebarExpanded;
  // const isCollapsible = hasNestedMenu

  return (
    <li
      className={`${isCollapsibleExpanded ? "outline outline-[var(--sidebar-collapsible-outline-color)]" : ""} `}
    >
      <ItemButton
        isCollapsible={isCollapsible}
        isCollapsibleExpanded={isCollapsibleExpanded}
        item={item}
        alert={alert}
        isActive={active && !isCollapsible}
        hasNestedItemActive={hasNestedItemActive}
        onClick={() => {
          if (isCollapsible) {
            if (isSidebarExpanded) {
              // setIsCollapsibleOpen((prev) => !prev);
              updateExpandedCollapsible(isCollapsibleOpen ? "" : item.label);
            }
            if (!isSidebarExpanded) {
              toggleSidebarExpanded();
              // setIsCollapsibleOpen(true);
              updateExpandedCollapsible(item.label);
            }
          } else {
            const value =
              (active || isCollapsibleOpen) && isCollapsible ? "" : item.label;

            updateActiveItem(value);
          }
        }}
      />

      {isCollapsible ? (
        <div
          className={`grid ${isCollapsibleExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500`}
        >
          <ul className="overflow-hidden">
            {item.nested?.map((nestedItem) => {
              const isNestedItemActive = activeItem === nestedItem.label;

              return (
                <li key={nestedItem.label}>
                  <ItemButton
                    item={nestedItem}
                    isActive={isNestedItemActive}
                    onClick={() => updateActiveItem(nestedItem.label)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </li>
  );
};
