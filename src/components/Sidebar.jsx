import React from 'react';
import { NavLink } from 'react-router-dom';

import  {
    Home,
    Users,
    Package,
    Layers,
    ChevronRight,
    ChevronLeft,
    LogOut,
    Box,
    X,
    Menu,
    Moon,
    Sun,


} from "lucide-react";
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Sidebar = ({isCollapsed, toggleSidebar, user, isMobileOpen, isDesktop, closeMobile}) => {

     const { logout } = useAuth();
     const { isDarkMode, toggleTheme } = useTheme();


    // get stored users/products from localStorage to count
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const totalUsers = storedUsers.length;

    // get stored products by its owner user but admin sees all products from localStorage to count 

    const totalProducts = user?.role === 'admin' ?
        JSON.parse(localStorage.getItem('products') || '[]').length
        :
        JSON.parse(localStorage.getItem('products') || '[]').filter(p => p.ownerId === user?.id).length;
    
    // const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    // // const totalProducts = storedProducts.length;

    const navItems = [
        {icon: Home, label: 'Dashboard', active: true, path: '/dashboard'},
         ...(user?.role === 'admin' ? [{ icon: Users, label: 'Users', path: '/users', count: totalUsers}, 
            { icon: Layers, label: 'Assignments', path: '/assignments', count: totalProducts}] : []),
        {icon:Package, label:'Products', path: '/products', count: totalProducts},
        {icon: Layers, label: 'Categories', path: '/categories'},
  
    ];

    

    // determine classes so sidebar is always visible on large screens
    const baseClasses = 'flex flex-col h-screen bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white transition-all duration-300';
    const widthClass = isCollapsed ? 'w-20' : 'w-64';
    // decide visibility: on desktop show as in-flow block; on small screens show overlay when opened
    const mobileVisibility = isDesktop ? 'block' : (isMobileOpen ? 'fixed translate-x-0 inset-y-0 left-0 z-30 block' : 'hidden');

    return (
        <aside className={`${baseClasses} ${widthClass} ${mobileVisibility} ${isDesktop ? 'relative' : ''}`}>
            <div className="p-6">
                <div className="flex items-center space-x-3">
                    <div className="mr-2 bg-primaryColor-400 p-3 rounded-lg">
                    <Box className="w-4 h-4 text-white"/>
                </div>
                              
                                
                    {!isCollapsed && ( <div><h1 className="text-xl font-bold">iHuza</h1><p className="text-xs font-normal text-gray-400">INVENTORY</p></div>)}
                    {isMobileOpen && (
                                    <button onClick={() => closeMobile && closeMobile()} className="lg:hidden ml-auto p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                </div>
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {navItems.map((item) => (
                       <li key={item.path}>

                        {/* <button className={`flex items-center w-full p-3 rounded-lg transition-colors ${item.active ? 'bg-primaryColor-50 text-primaryColor-600 font-semibold' : 'hover:bg-primary-800 text-primary-100'}`}>
                            <item.icon className="w-5 h-5"/>
                            {!isCollapsed && <span className="ml-3">{item.label}</span>}
                        </button> */}
                        
                        <NavLink
                        to={item.path}
                        onClick={() => closeMobile && closeMobile()}
                        className={({ isActive }) => 
                        `flex items-center w-full p-3 rounded-lg transition-colors ${
                            isActive 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`
                        }
                        end={item.path === '/dashboard'}
                    >
                        <item.icon className="w-5 h-5" />
                        {!isCollapsed && (
                            <div className="flex items-center w-full">
                                <span className="ml-3 font-medium">{item.label}</span>
                                {item.count !== undefined && (<span className="ml-auto inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-0.5 rounded-full">{item.count}</span>)}
                            </div>
                    
                        
                        )}
                    </NavLink>
                       </li>
                        
                    ))}

                </ul>
            </nav>

            <div className="p-4 border-t border-gray-300 dark:border-gray-700 space-y-2">
            

            <button
            onClick={logout}
            className="flex items-center w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && (
                <span className="ml-3 font-medium">Logout</span>
            )}
            </button>
        </div>

        {/* Toggle Button (desktop only) */}
        <button
            onClick={toggleSidebar}
            className="hidden lg:block absolute top-6 -right-3 bg-blue-600 text-white p-1.5 rounded-full border-4 border-gray-50 dark:border-gray-900 hover:bg-blue-700 transition-colors z-10"
        >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
    </aside>
    );
};

export default Sidebar;