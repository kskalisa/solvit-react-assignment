import { Package, UserCheck, Wrench, UserPlus, Clock } from "lucide-react";

const RecentActivity = () => {
    const activities = [
        {
            icon: Package,
            iconColor: 'bg-green-100 text-green-600',
            title: 'Product added to Inventory',
            description: 'MacBook Pro 16" (M3 PROD2024:001)',
            time: 'Dec 4, 2024'
        },
        {
            icon: UserCheck,
            iconColor: 'bg-blue-100 text-blue-600',
            title: 'Product assigned to Michael Brown',
            description: 'Apple MacBook Air M2 (PROD2024:003)',
            time: 'Dec 3, 2024',
            
        },
        {
            icon: Wrench,
            iconColor: 'bg-yellow-100 text-yellow-600',
            title: 'Product sent for maintenance',
            description: 'HP Spectre x360 - Screen replacement required',
            time: 'Jan 16, 2024'

        },
        {
            icon: UserPlus,
            iconColor: 'bg-purple-100 text-purple-600',
            title: 'New user registered',
            description: 'Amanda White – Staff Member',
            time: 'Jan 16, 2024'
        },

    ];

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2 sm:gap-0">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Recent Activity</h2>
                 <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm self-start sm:self-auto">
                    View All

                 </button>
            </div>

            <div className= "space-y-3 sm:space-y-4">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <div className={`p-2 rounded-full ${activity.iconColor} flex-shrink-0`}>
                            <activity.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{activity.title}</p>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">{activity.description}</p>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 gap-1">
                                <Clock className="w-3 h-3 flex-shrink-0"/>
                                <span className="truncate">{activity.time}</span>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );

}
export default RecentActivity;