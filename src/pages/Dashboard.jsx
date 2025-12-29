import StatsCard from "../components/StatsCard";
import UsersTable from "../components/UsersTable";
import RecentActivity from "../components/RecentActivity";
import RecentProducts from "../components/RecentProducts";
import QuickActions from "../components/QuickActions";
import Header from "../components/Header";
import { CheckCircle, Box } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";


export default function Dashboard() {

    const { user, loading } = useAuth();

    if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
        );
    }


    return (
        <main className="p-4 sm:p-6 w-full">
             <div className="bg-primaryColor-600 dark:bg-gray-800 text-white rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="bg-primaryColor-400 dark:bg-gray-700 p-2.5 sm:p-3 rounded-lg flex-shrink-0 w-fit">
                        <Box className="w-5 h-5 sm:w-6 sm:h-6 text-white"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h1 className="text-lg sm:text-2xl font-bold text-white dark:text-white leading-tight">iHUZA INVENTORY - System Overview</h1>
                        <p className="text-sm sm:text-base text-white mt-2 sm:mt-3">Monitor your iHUZA inventory and product assignments in real-time</p>
                        <div className="flex items-center gap-2 mt-2 sm:mt-3">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0"/>
                            <span className="text-white font-light text-xs sm:text-sm">All Systems Operational</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-6">
                <StatsCard/>
                <RecentProducts />
                <UsersTable/>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    <RecentActivity />
                    <QuickActions/>
                </div>
            </div>
        </main>
    );
}
