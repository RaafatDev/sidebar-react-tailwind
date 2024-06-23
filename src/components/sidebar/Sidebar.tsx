import { useContext } from "react";
import { MoreVertical } from "lucide-react";

import { SidebarContext } from "../../context/SidebarContext";
import { navItemsBottom, navItemsTop } from "./navItems";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  const { isSidebarExpanded } = useContext(SidebarContext);
  return (
    <aside
      className={`${isSidebarExpanded ? "" : "min-w-[76px]"} group relative flex h-[calc(100dvh-64px)] flex-col text-gray-400`}
    >
      <nav
        className={`relative flex h-full w-auto flex-1 flex-col border-r shadow-sm`}
      >
        <div
          className={`${isSidebarExpanded ? "" : "absolute left-0 top-0 z-10"} flex h-full flex-1 flex-col self-start overflow-y-scroll border-r shadow-sm`}
        >
          <ul className="flex-1 bg-gray-800 px-3 pb-3">
            {navItemsTop.map((item) => {
              return <SidebarItem key={item.label} item={item} />;
            })}

            <hr className="my-3" />

            {navItemsBottom.map((item) => {
              return <SidebarItem key={item.label} item={item} />;
            })}
          </ul>

          <div className="flex border-l-4 border-t border-l-transparent bg-gray-800 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-400">
              <span className="text-2xl font-bold text-gray-300">JS</span>
            </div>
            <div
              // className={`flex items-center justify-between overflow-hidden transition-all ${isSidebarExpanded ? "ml-3 w-[var(--sidebar-label-width)]" : "w-0"} `}
              className={`flex items-center justify-between overflow-hidden ${isSidebarExpanded ? "ml-3 min-w-32" : "ml-0 w-0 group-hover:ml-3 group-hover:w-32 group-hover:flex-1"} `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">John Smith</h4>
                <span className="text-xs">johnsmith@example.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
