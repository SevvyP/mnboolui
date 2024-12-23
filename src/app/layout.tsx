import Navbar from '@/components/navbar/navbar'
import './globals.css'
import Sidebar from '@/components/sidebar/sidebar'
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <div className='flex flex-col h-full'>
            <Navbar />
            <div className='flex h-full'>
              <Sidebar />
              {children}
            </div>
          </div>
        </body>
      </UserProvider>
    </html>
  )
}