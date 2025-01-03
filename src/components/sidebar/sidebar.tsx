"use client";

import { useSidebar } from "@/contexts/sidebarcontext";

const Items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Groups",
    link: "/groups",
  },
  {
    name: "Settings",
    link: "/settings",
  },
];

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`flex-col w-64 shrink-0 bg-gray-50 dark:bg-gray-800 transform duration-300 ease-in-out ${
        isSidebarOpen ? "ml-0" : "-ml-64"
      }`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
        <div className="space-y-2 font-medium">
          {Items.map((item, index) => (
            <h1
              key={index}
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-white dark:hover:bg-gray-700 select-none cursor-pointer"
              onClick={() => (window.location.href = item.link)}
            >
              {item.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
