import { PropsWithChildren, useState } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { ItemLabel } from "../sidebar/navItems";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { Sidebar } from "../sidebar/Sidebar";

export const Layout = (props: PropsWithChildren) => {
  const [activeItem, setActiveItem] = useState<ItemLabel | null>(null);
  const [expandedCollapsible, setExpandedCollapsible] =
    useState<ItemLabel | null>(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebarExpanded = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  const updateActiveItem = (label: ItemLabel | null) => {
    setActiveItem(label);
  };

  const updateExpandedCollapsible = (label: ItemLabel | null) => {
    setExpandedCollapsible(label);
  };

  return (
    <div>
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
        <nav className="w-full bg-blue-400 outline">
          <div className="flex min-h-16 items-center p-4 pb-2">
            <button
              onClick={toggleSidebarExpanded}
              className="ml-2 mr-4 rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
            >
              {isSidebarExpanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
            <div className={`h-10 w-32 overflow-hidden transition-all`}>
              <div className="flex h-full items-center justify-center bg-gray-500 text-black">
                <span className="">Logo here</span>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex">
          <Sidebar />
          {props.children}
        </div>
      </SidebarContext.Provider>
    </div>
  );
};
