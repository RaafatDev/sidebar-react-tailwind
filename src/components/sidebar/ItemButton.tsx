import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { NavItemRecord } from "./navItems";

interface Props {
  isActive: boolean;
  item: NavItemRecord;
  hasNestedItemActive?: boolean;
  alert?: boolean;
  isCollapsible?: boolean;
  isCollapsibleExpanded?: boolean;
  isNestedItem?: boolean;
  onClick: () => void;
}

export const ItemButton = ({
  isActive,
  item,
  hasNestedItemActive,
  alert,
  isCollapsible,
  isCollapsibleExpanded,
  isNestedItem,
  onClick,
}: Props) => {
  const { isSidebarExpanded } = useContext(SidebarContext);

  const isCollapsibleHeaderActive =
    isCollapsible && !isCollapsibleExpanded && hasNestedItemActive;

  return (
    <button
      onClick={onClick}
      className={`relative mt-2 flex w-full cursor-pointer items-center rounded-sm border-l-4 px-3 py-3 ${isNestedItem ? "pl-4" : ""} font-medium transition-colors ${
        isActive || isCollapsibleHeaderActive
          ? "border-primary bg-gray-700 text-primary-200"
          : "border-transparent hover:bg-gray-600 hover:text-gray-100"
      } ${isCollapsibleExpanded ? "outline outline-[var(--sidebar-collapsible-outline-color)]" : ""} `}
    >
      {item.icon}
      <span
        // className={`w-32 flex-1 items-start text-start text-sm group-hover/button:whitespace-break-spaces ${
        className={`w-32 flex-1 items-start text-start text-sm ${
          isSidebarExpanded
            ? "ml-3 inline-block"
            : "ml-0 hidden group-hover:ml-3 group-hover:inline-block"
        } ${isActive ? "font-bold" : ""} `}
      >
        {item.label}
      </span>

      {isCollapsible ? (
        <div
          className={`ml-2 transition-transform ${isSidebarExpanded ? "block" : "hidden group-hover:block"} ${isCollapsibleExpanded ? "-rotate-90" : "rotate-90"}`}
        >
          <ArrowRightIcon size={14} />
        </div>
      ) : null}

      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-primary-400 ${
            isSidebarExpanded ? "" : "top-2"
          }`}
        />
      )}

      {/* {!isSidebarExpanded && (
        <div className="invisible absolute left-full ml-6 -translate-x-3 whitespace-nowrap rounded-md bg-primary-100 px-2 py-1 text-sm text-primary-700 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
          {item.label}
        </div>
      )} */}
    </button>
  );
};
