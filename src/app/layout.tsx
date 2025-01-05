"use client";

import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { SidebarProvider, useSidebar } from "@/contexts/sidebarcontext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider>
        <SidebarProvider>
          <BodyContent>{children}</BodyContent>
        </SidebarProvider>
      </UserProvider>
    </html>
  );
}

function BodyContent({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen } = useSidebar();

  return (
    <body>
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="relative flex h-full top-14">
          <Sidebar />
          <div
            className={`relative transform duration-300 ease-in-out ${
              isSidebarOpen ? "left-64" : "left-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </body>
  );
}
