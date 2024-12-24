'use client'

import { useSidebar } from '@/contexts/sidebarcontext';

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`flex-col w-64 bg-gray-50 transform duration-300 ease-in-out ${isSidebarOpen ? 'ml-0' : '-ml-64'}`}>
      <h1>Home</h1>
      <h1>Profile</h1>
      <h1>Settings</h1>
    </div>
  )
}