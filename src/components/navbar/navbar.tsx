'use client'

import Racoon from '../../app/icon.png';
import Image from 'next/image';
import UserProfile from '../profile/profile';

export default function Navbar() {

    return (
        <div className="flex items-center h-14 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <Image src={Racoon} alt="Racoon" width={50} height={50} />
            <h1 className='text-xl font-semibold'>mnbool</h1>
            <div className='mx-auto mr-10'>
                <UserProfile />
            </div>
        </div>
    )
}