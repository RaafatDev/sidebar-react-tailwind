import { SendMoneyIcon } from "../icons/SendMoneyIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { DashboardIcon } from "../icons/DashboardIcon";

import { CreditCard } from "lucide-react";
import {
  Boxes,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  Landmark,
} from "lucide-react";

type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;

// type ItemRecord = { icon: JSX.Element; path: string; label: unknown };
// type NavItemRecord = ItemRecord & { nested?: ItemRecord[] };

type RawNavItemRecord = { icon: JSX.Element; path: string; label: unknown };
type RawNavItemRecordWithNested = RawNavItemRecord & {
  nested: RawNavItemRecord[];
};

export type ItemLabel =
  | (typeof navItemsTop)[number]["label"]
  | (typeof navItemsTop)[number]["nested"][number]["label"]
  | (typeof navItemsBottom)[number]["label"]
  | (typeof navItemsBottom)[number]["nested"][number]["label"];

export type NavItemRecord = Prettify<
  Omit<RawNavItemRecord, "label"> & { label: ItemLabel }
>;

export type NavItemRecordWithNested = NavItemRecord & {
  nested: NavItemRecord[];
};

export const navItemsTop = [
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
        label: "Nested-item 1 xxx xxx 111 2222",
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
] as const satisfies RawNavItemRecordWithNested[];

export const navItemsBottom = [
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
] as const satisfies RawNavItemRecordWithNested[];
