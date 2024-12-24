'use client'

import { useSidebar } from '@/contexts/sidebarcontext';

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`flex-col w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full -ml-64'}`}>
      <h1>Home</h1>
      <h1>Profile</h1>
      <h1>Settings</h1>
    </div>
  )
}