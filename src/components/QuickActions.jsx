import { Users, Package, ClipboardList, ArrowRight } from "lucide-react";


export default function QuickActions(){
 const quickActions = [
    {label: 'View Users', Icon: Users, description: 'View all registered users', color: 'bg-blue-100 text-blue-600'},
    {label: 'View Products', Icon: Package, description: 'View all registered products', color: 'bg-green-100 text-green-600'},
    {label: 'View Assignements', Icon: ClipboardList, description: 'View all product assignments', color: 'bg-purple-100 text-purple-600'},
    ];

    return (
        <div className=" w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Quick Actions
            </h2>
            <div className="space-y-4">
                {quickActions.map((action, index) => (
                    <button 
                    key={index} 
                    className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-700 rounded-xl hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-gray-600 transition-all duration-200 group gap-3 sm:gap-0">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`p-3 rounded-lg ${action.color} flex-shrink-0 group-hover:bg-primary-200 transition-colors`}>
                              <action.Icon className="w-5 h-5"/>
                          </div>
                          <div className="text-left">
                              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400">{action.label}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{action.description}</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button className={`${action.label === 'View Users' ? 'bg-blue-800' : action.label === 'View Products' ? 'bg-blue-800' : 'bg-purple-800'} text-white px-4 py-1.5 rounded-sm group-hover:bg-blue-900 transition-colors text-sm w-full sm:w-auto`}>
                            Go
                        </button>
                        </div>
                        
                        
                    </button>
                ))}
            </div>
        </div>
    );
}