/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  // CreditCard,
} from "lucide-react";
import { PropsWithChildren, useContext } from "react";

import { SidebarContext } from "../../context/SidebarContext";

export const SidebarContainer = ({ children }: PropsWithChildren) => {
  const { isSidebarExpanded, toggleSidebarExpanded } =
    useContext(SidebarContext);

  return (
    <aside className="min-h-screen text-gray-400">
      <nav className="flex h-full flex-col border-r bg-gray-800 shadow-sm">
        <div className="flex min-h-16 items-center justify-between p-4 pb-2">
          <div
            className={`h-10 overflow-hidden transition-all ${
              isSidebarExpanded ? "w-32" : "w-0"
            }`}
          >
            <div className="flex h-full items-center justify-center bg-gray-500 text-black">
              <span className="">Logo here</span>
            </div>
          </div>
          <button
            onClick={toggleSidebarExpanded}
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            {isSidebarExpanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="flex border-l-4 border-t border-l-transparent p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-400">
            <span className="text-2xl font-bold text-gray-300">JS</span>
          </div>
          <div
            className={`flex items-center justify-between overflow-hidden transition-all ${isSidebarExpanded ? "ml-3 w-[var(--sidebar-label-width)]" : "w-0"} `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Smith</h4>
              <span className="text-xs">johnsmith@example.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};
