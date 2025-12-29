import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAuth } from '../contexts/AuthContext';

const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // track whether viewport is desktop (lg) and whether mobile overlay is open
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const { user } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    // ensure mobile overlay/sidebar is closed when toggling collapse
    setIsMobileOpen(false);
  };

  const toggleMobileSidebar = () => {
    // only open overlay on small screens
    if (!isDesktop) setIsMobileOpen((s) => !s);
  };
  const closeMobileSidebar = () => setIsMobileOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}


      <div className="relative z-20">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          toggleSidebar={toggleSidebar}
          user={user}
          isMobileOpen={isMobileOpen}
          isDesktop={isDesktop}
          closeMobile={closeMobileSidebar}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 transition-all duration-300">
        {/* Header */}
        <Header user={user} onMobileToggle={toggleMobileSidebar} />

        {/* Main Content */}
        <main className="p-4 md:p-6 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;