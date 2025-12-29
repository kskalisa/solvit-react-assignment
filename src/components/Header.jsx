import { Search, Bell, User, Settings, Moon, Sun, Menu } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Header({ onMobileToggle }) {
    const { user } = useAuth();
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="px-3 sm:px-6 py-3 sm:py-4">
                {/* Top Row - Logo/Title and Mobile Menu */}
                <div className="flex items-center justify-between mb-3 sm:mb-0">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                        <button
                            onClick={onMobileToggle}
                            className="p-2 lg:hidden rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex-shrink-0"
                            aria-label="Open menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>

                        <div className="min-w-0 flex-1">
                            <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">Dashboard</h1>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                                Welcome, {user?.name || user?.email || 'User'}
                            </p>
                        </div>
                    </div>

                    {/* Right Side Icons - Always Visible */}
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                            onClick={toggleTheme}
                            className="p-1.5 sm:p-2 text-gray-400 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-lg"
                        >
                           {isDarkMode ? (
                                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                            )}
                        </button>

                        <button className="p-1.5 sm:p-2 text-gray-400 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-lg relative">
                            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <button className="p-2 text-gray-400 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-lg flex-shrink-0">
                        <Settings className="w-5 h-5" />
                    </button>

                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 ml-1">
                            <User className="w-4 h-4" />
                        </div>
                        <div className="hidden md:block text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{user?.email || '—'}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Role: {user?.role || 'guest'}</p>
                    </div>
                    </div>
                </div>

                {/* Bottom Row - Search and Controls (Responsive) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hidden sm:flex">
                    

                    
                </div>
            </div>
        </header>
    );
}