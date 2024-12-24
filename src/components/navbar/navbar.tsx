'use client'

import Racoon from '@/app/icon.png';
import Image from 'next/image';
import UserProfile from '@/components/userprofile/userprofile';
import { useSidebar } from '@/contexts/sidebarcontext';

export default function Navbar() {

    const { toggleSidebar } = useSidebar();

    return (
        <div className="flex items-center h-14 w-full bg-white border-b bg-gray-50 border-gray-200">
            <div className='ml-2 pointer-events-auto hover:bg-slate-200' onClick={toggleSidebar}>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </div>
            <Image src={Racoon} alt="Racoon" width={50} height={50} />
            <h1 className='text-xl font-semibold'>mnbool</h1>
            <div className='mx-auto mr-10'>
                <UserProfile />
            </div>
        </div>
    )
}