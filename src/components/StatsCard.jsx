import { Users,Box,CheckCircle, TriangleAlert } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductContext";



const getIconColor = (icon) => {
    switch(icon) {
        case Users:
            return "text-blue-500 bg-blue-100 ";
        case Box:
            return "text-blue-500 bg-blue-100";
        case CheckCircle:
            return "text-green-500 bg-green-100";
        case TriangleAlert:
            return "text-yellow-500 bg-yellow-100";
        default:
            return "text-gray-500";
    }
}

export default function StatsCard() {
    const { user } = useAuth();
  const { products } = useProducts();

  const statsBase =
    user?.role === "admin"
      ? [
          {
            icon: Users,
            label: "Total Users",
            value: "0",
          },
          {
            icon: Box,
            label: "Total Products",
            value: "0",
          },
          
          {
            icon: CheckCircle,
            label: "Assigned Products",
            value: "0",
          },
          {
            icon: TriangleAlert,
            label: "Unassigned Products",
            value: "0",
          },
        ]
      : [
          {
            icon: Box,
            label: "Total Products",
            value: "0",
          },
          {
            icon: CheckCircle,
            label: "Assigned Products",
            value: "0",
          },
          {
            icon: TriangleAlert,
            label: "Unassigned Products",
            value: "0",
          },
        ];

    // const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    // const totalProducts = storedProducts.length;

    // const totalProducts = user?.role === 'admin' ?
    //     JSON.parse(localStorage.getItem('products') || '[]').length
    //     :
    //     JSON.parse(localStorage.getItem('products') || '[]').filter(p => p.ownerId === user?.id).length;

    const totalProducts = user?.role === 'admin' ?
        JSON.parse(localStorage.getItem('products') || '[]').length :
        JSON.parse(localStorage.getItem('products') || '[]').filter(p => p.ownerId === user?.id).length;
     

    // get users list from localStorage (AuthContext doesn't expose full users list)
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const totalUsers = storedUsers.length;

    const stats = statsBase.slice();
    stats[0] = { ...stats[0], value: totalUsers.toString() };
    stats[ user?.role === 'admin' ? 1 : 0 ] = { ...stats[ user?.role === 'admin' ? 1 : 0 ], value: totalProducts.toString() };

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {stats.map((item) => (
                <div key = {item.label} className="p-4 sm:p-5 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div>
                            <div className={`p-3 rounded-lg ${getIconColor(item.icon)}`}>
                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6"/>
                            </div>
                        </div>
                    <div className="min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-white">{item.value}</h2>
                    <p className="text-xs sm:text-sm text-primaryColor-600 dark:text-gray-400 truncate">{item.label}</p>
                    </div>
                    </div>
                    
                    
                    

                </div>
            ))}
        </div>
    );
}