/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendMoneyIcon } from "../../assets/icons/SendMoneyIcon";
import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";
import { DashboardIcon } from "../../assets/icons/DashboardIcon";

import {
  // MoreVertical,
  // ChevronLast,
  // ChevronFirst,
  CreditCard,
  // LayoutDashboard,
} from "lucide-react";
// import { useContext, createContext, useState, PropsWithChildren } from "react";
import {
  //   BarChart3,
  Boxes,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  // ArrowBigRight,
  //   UserCircle,
  Landmark,
} from "lucide-react";

// type NavItemLabel =

export type NavItemRecord = {
  icon: JSX.Element;
  path: string;
  label: string;
  nested?: { icon: JSX.Element; label: string; path: string }[];
};

export const navItemsTop: NavItemRecord[] = [
  {
    icon: <DashboardIcon size={20} />,
    label: "Dashboard",
    path: "/dashboard",
    nested: [],
  },
  {
    icon: <SendMoneyIcon size={24} />,
    label: "Collapsible item 1",
    path: "",
    nested: [
      {
        icon: <ArrowRightIcon size={14} />,
        label: "Nested-item 1",
        path: "/nested-item/page-1",
      },
      {
        icon: <ArrowRightIcon size={14} />,
        label: "Nested-item 2",
        path: "/nested-item/page-2",
      },
      {
        icon: <ArrowRightIcon size={14} />,
        label: "Nested-item 3",
        path: "/nested-item/page-3",
      },
    ],
  },
  {
    icon: <Landmark size={24} />,
    label: "Collapsible item 22",
    path: "",
    nested: [
      {
        icon: <ArrowRightIcon size={14} />,
        label: "Nested-item-22 1",
        path: "/nested-item-22/page-1",
      },
      {
        icon: <ArrowRightIcon size={14} />,
        label: "Nested-item-22 2",
        path: "/nested-item-22/page-1",
      },
    ],
  },
  {
    icon: <CreditCard size={20} />,
    label: "Item 3",
    path: "/item-3",
    nested: [],
  },
  {
    icon: <Boxes size={20} />,
    label: "Item-4",
    path: "/item-4",
    nested: [],
  },
  {
    icon: <Package size={20} />,
    label: "Item-5",
    path: "/item-5",
    nested: [],
  },
  {
    icon: <Receipt size={20} />,
    label: "Item-6",
    path: "/item-6",
    nested: [],
  },
];

export const navItemsBottom: NavItemRecord[] = [
  {
    icon: <Settings size={20} />,
    label: "Settings",
    path: "/settings",
    nested: [],
  },
  {
    icon: <LifeBuoy size={20} />,
    label: "FAQ",
    path: "/faq",
    nested: [],
  },
];
