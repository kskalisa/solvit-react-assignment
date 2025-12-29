import React, { useState } from 'react';
import {Link, useNavigate, useLocation } from 'react-router-dom';
import {LogIn, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';

const Login = () => {
    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const { showToast } = useToast();

    const from = location.state?.from?.pathname || '/dashboard';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = login(email, password);

        if (result.success){
            showToast('Login successful', 'success');
            navigate(from, {replace: true})
        }
        else
        {
            showToast(result.message, 'error');
            setError(result.message);
        }

        setLoading(false);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to iHuzo Inventory</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Manage your inventory effeciently
                    </p>
                </div>
                <form action="" className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email address
                            </label>
                            <input 
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="you@example.com"
                             />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>
                            <div className="relative">
                            <input 
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-10"
                            placeholder="***********"
                             />
                             <button
                             type="button"
                             onClick={() => setShowPassword(!showPassword)}
                             className="absolute inset-y-0 right-0 pr-3 flex items-center"
                             >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400"/>
                                ):
                                <Eye className="h-5 w-5 text-gray-400"/>
                            }

                             </button>
                             </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        
                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">Forgot your password?</a>

                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        disabled={loading}
                        className="group relative w-full flex flex-justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Singin in...' : 'Sign in'}

                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account?{''}
                            <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
                            Create one now
                            </Link>
                        </p>
                    </div>
                </form>

            </div>

        </div>
    );

};

export default Login;