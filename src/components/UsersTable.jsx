import { Edit2, User2Icon } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const UsersTable = () => {

//     let users = [
//     { name: 'John Smith', email: 'john.smith@huza.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
//     { name: 'Sarah Johnson', email: 'sarah.johnson@huza.com', role: 'Manager', status: 'Active', lastLogin: '5 hours ago' },
//     { name: 'Michael Brown', email: 'm.brown@huza.com', role: 'Staff', status: 'Active', lastLogin: '1 day ago' },
//     { name: 'Emily Davis', email: 'emily.d@huza.com', role: 'Staff', status: 'Inactive', lastLogin: '3 days ago' },
//     { name: 'David Wilson', email: 'd.wilson@huza.com', role: 'Staff', status: 'Active', lastLogin: '8 hours ago' },
//     { name: 'Lisa Anderson', email: 'lisa.a@huza.com', role: 'Manager', status: 'Active', lastLogin: '30 min ago' },
//     { name: 'Robert Taylor', email: 'r.taylor@huza.com', role: 'Staff', status: 'Active', lastLogin: '2 days ago' },
//     { name: 'Jennifer Miller', email: 'j.miller@huza.com', role: 'Staff', status: 'Active', lastLogin: '4 hours ago' },
//     { name: 'Christopher Lee', email: 'c.lee@huza.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
//     { name: 'Amanda White', email: 'a.white@huza.com', role: 'Staff', status: 'Inactive', lastLogin: '1 week ago' },
//   ];

    const getRoleBadgeColor = (role) => {
    switch (role) {
        case 'admin': return 'bg-purple-100 text-purple-800';
        case 'user': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
    }
  };

 

    const { isAdmin } = useAuth();
    const { user } = useAuth();

    //get stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const users = storedUsers;

    // function to get status badge stored in localStorage
    const getStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case 'active':
                return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>;
            case 'inactive':
                return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Inactive</span>;
            default:
                return <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">{status}</span>;
        }
    }

    
    
 

    

return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            
            <div className="flex justify-between items-center px-6 py-4 ">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Users</h2>
                                {isAdmin && (
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium">Add User</button>
                                )}
            </div>
            
            <div className="overflow-x-auto">
            <table className="w-full min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">USER</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">ROLE</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">STATUS</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">LAST LOGIN</th>
                        <th className="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="py-4 px-4 flex items-center space-x-4">
                                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                                    <User2Icon className='w-4 h-4'/>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                                </div>
                            </td>
                            <td className="py-4 px-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                                    {user.role}
                                </span>
                            </td>

                            <td className="py-4 px-6">
                                <div className="flex items-center">
                                   {getStatusBadge(user.status)}

                                </div>

                            </td>
                            <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">
                                {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : '—'}
                            </td>
                            <td className="py-4 px-6">
                                <div className="flex space-x-2">
                                    <button className="p-1 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors">
                                        < Edit2 className="w-4 h-4" />
                                    </button>
                                    <button className='p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors'>
                                        <Trash2 className="w-4 h-4" />
                                    </button>

                                </div>

                            </td>


                        </tr>
                    ))}
                    
                </tbody>

            </table>
            </div>

        </div>
    );
}
    
export default UsersTable;
    