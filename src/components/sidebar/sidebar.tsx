'use client'

import { useSidebar } from '@/contexts/sidebarcontext';

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`flex-col w-64 bg-gray-50 dark:bg-gray-800 transform duration-300 ease-in-out ${isSidebarOpen ? 'ml-0' : '-ml-64'}`}>
      <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 '>
        <div className='space-y-2 font-medium'>
          <h1 className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-white dark:hover:bg-gray-700'
            onClick={() => window.location.href = '/'}>Home</h1>
          <h1 className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-white dark:hover:bg-gray-700'
            onClick={() => window.location.href = '/groups'}>Groups</h1>
          <h1 className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-white dark:hover:bg-gray-700'
            onClick={() => window.location.href = '/profile'}>Profile</h1>
        </div>
      </div>
    </div>
  )
}