import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { ItemButton } from "./ItemButton";
import { NavItemRecordWithNested } from "./navItems";

interface Props {
  alert?: boolean;
  item: NavItemRecordWithNested;
}

export const SidebarItem = ({ item, alert }: Props) => {
  const {
    activeItem,
    updateActiveItem,
    expandedCollapsible,
    updateExpandedCollapsible,
  } = useContext(SidebarContext);

  const isCollapsibleOpen = expandedCollapsible === item.label;

  const active = activeItem === item.label;
  const isCollapsible = item.nested && item.nested.length > 0;
  const hasNestedItemActive =
    isCollapsible && item.nested?.some((x) => x.label === activeItem);

  return (
    <li
      className={`${isCollapsibleOpen ? "outline outline-[var(--sidebar-collapsible-outline-color)]" : ""} `}
    >
      <ItemButton
        isCollapsible={isCollapsible}
        isCollapsibleExpanded={isCollapsibleOpen}
        item={item}
        alert={alert}
        isActive={active && !isCollapsible}
        hasNestedItemActive={hasNestedItemActive}
        onClick={() => {
          if (isCollapsible) {
            updateExpandedCollapsible(isCollapsibleOpen ? null : item.label);
          } else {
            const value =
              (active || isCollapsibleOpen) && isCollapsible
                ? null
                : item.label;

            updateActiveItem(value);
          }
        }}
      />

      {isCollapsible ? (
        <div
          className={`grid ${isCollapsibleOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500`}
        >
          <ul className="overflow-hidden">
            {item.nested?.map((nestedItem) => {
              const isNestedItemActive = activeItem === nestedItem.label;

              return (
                <li key={nestedItem.label}>
                  <ItemButton
                    isNestedItem
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
