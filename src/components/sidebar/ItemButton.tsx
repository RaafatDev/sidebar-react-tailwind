/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from "react";

import { NavItemRecord } from "./navItems";
import { SidebarContext } from "../../context/SidebarContext";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

interface Props {
  isActive: boolean;
  item: NavItemRecord;
  hasNestedItemActive?: boolean;
  alert?: boolean;
  isCollapsible?: boolean;
  isCollapsibleExpanded?: boolean;
  onClick: () => void;
}

export const ItemButton = ({
  isActive,
  item,
  alert,
  hasNestedItemActive,
  isCollapsible,
  isCollapsibleExpanded,
  onClick,
}: Props) => {
  const { isSidebarExpanded } = useContext(SidebarContext);
  const isCollapsibleHeaderActive = !isSidebarExpanded && hasNestedItemActive;

  return (
    <button
      onClick={onClick}
      className={`group relative mt-2 flex w-full cursor-pointer items-center rounded-sm border-l-4 px-3 py-3 font-medium transition-colors ${
        // isCollapsibleExpanded
        //   ? "border-transparent bg-gray-600 text-white"
        //   :

        isActive || isCollapsibleHeaderActive
          ? "border-primary bg-gray-700 text-primary-200"
          : "border-transparent hover:bg-gray-600 hover:text-gray-100"
      } ${isCollapsibleExpanded ? "outline outline-[var(--sidebar-collapsible-outline-color)]" : ""} `}
    >
      {item.icon}
      <span
        className={`flex min-h-6 items-center overflow-hidden text-start text-sm ${
          isSidebarExpanded
            ? "ml-3 w-[var(--sidebar-label-width)] flex-1 opacity-100"
            : "w-0 whitespace-nowrap opacity-0"
        } ${isActive ? "font-bold" : ""}`}
      >
        {item.label}
      </span>

      {isCollapsible && isSidebarExpanded ? (
        <div
          className={`transition-transform ${isCollapsibleExpanded ? "-rotate-90" : "rotate-90"}`}
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

      {!isSidebarExpanded && (
        <div className="invisible absolute left-full ml-6 -translate-x-3 whitespace-nowrap rounded-md bg-primary-100 px-2 py-1 text-sm text-primary-700 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
          {item.label}
        </div>
      )}
    </button>
  );
};
