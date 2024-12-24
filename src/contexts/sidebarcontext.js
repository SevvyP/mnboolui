'use client'

import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
    return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Toggle the sidebar open/close
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    // Close the sidebar
    const closeSidebar = () => setIsSidebarOpen(false);

    // Open the sidebar
    const openSidebar = () => setIsSidebarOpen(true);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, closeSidebar, openSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};
