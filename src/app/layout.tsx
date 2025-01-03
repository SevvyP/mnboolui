import Navbar from '@/components/navbar/navbar'
import './globals.css'
import Sidebar from '@/components/sidebar/sidebar'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { SidebarProvider } from '@/contexts/sidebarcontext'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <SidebarProvider>
          <body>
            <div className='flex flex-col h-full'>
              <Navbar />
              <div className='flex h-full'>
                <Sidebar />
                {children}
              </div>
            </div>
          </body>
        </SidebarProvider>
      </UserProvider >
    </html >
  )
}