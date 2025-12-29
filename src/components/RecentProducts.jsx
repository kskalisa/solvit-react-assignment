import { Briefcase } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductContext";

// const products = [
//     {name: "MacBook Pro 16", status: "In Stock", category: "Laptops", date: "Dec 10, 2025"},
//     {name: "Dell XPS 13", status: "In Stock",  category: "Laptops", date: "Dec 9, 2025"},
//     {name: "iPhone 15 Pro", status: "Low Stock", category: "Phones", date: "Dec 12, 2025"},
//     {name: "iPad Air", status: "In Stock", category: "Tablets", date: "Dec 12, 2025"},
//     {name: "Surface Pro 9", status: "Out of Stock", category: "Tablets", date: "Dec 12, 2025"},
// ];



export default function RecentProducts(){
    const { user } = useAuth();
    const { products } = useProducts();
    // get user's own products from localStorage if not admin
    const recentProducts = user?.role === 'admin' ? products
        : products.filter(p => p.ownerId === user?.id);
        
    // sort by date descending and take top 6
    const productsSorted = recentProducts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);

    // get category names for each product
    const productCategoryNames = productsSorted.map(p => {
        const storedCategories = JSON.parse(localStorage.getItem('categories') || '[]');
        return storedCategories.find(c => c.id === p.category);
    });

    // Change date format to more readable
    productsSorted.forEach(p => {
        const date = new Date(p.createdAt);
        p.createdAt = date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    });

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Added Products</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {productsSorted.map((p) => (
                    <div key={p.name} className="border border-gray-100 dark:border-gray-700 dark:bg-gray-700 rounded-lg p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0 flex-1">
                                <h3 className="font-medium text-gray-900 dark:text-white truncate text-sm sm:text-base">{p.name}</h3>
                                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <p className="truncate">{productCategoryNames[productsSorted.indexOf(p)]?.name}</p>
                                    <p>{p.createdAt}</p>
                                </div>
                            </div>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 ${
                            p.status === 'out of stock' ? 'bg-red-100 text-red-800' : 
                            p.status === 'low-stock' ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'}`}>
                           
                        {p.status}
                    </span>
                        </div>
                        

                    </div>
                ))}
            </div>
        </div>
    );
}