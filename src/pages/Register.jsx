import React, { useState } from 'react';
import {Link, useNavigate, useLocation } from 'react-router-dom';
import {UserPlus, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',

    })
    const newErrors = {};



    if (!formData.name.trim()) {
        newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
        newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
    }

    
    // setErrors({});

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setshowConfirmedPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword){
            setError('Passwords do not match');
            return;
        }
        
        if (formData.password.length < 6){
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);


        const result = register(formData);

        if (result.success){
            navigate('/login')
        }
        else
        {
            setError(result.message);
        }

        setLoading(false);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Create new account</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                         Start managing your inventory today
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
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Full Name
                            </label>
                            <input 
                            id="name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="enter your full name"
                             />
                             {newErrors.name && <p className="text-red-500 text-sm mt-1">{newErrors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email address
                            </label>
                            <input 
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="you@example.com"
                             />
                                {newErrors.email && <p className="text-red-500 text-sm mt-1">{newErrors.email}</p>}
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
                            value={formData.password}
                            onChange={handleChange}
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-10"
                            placeholder="***********"
                             />
                             {newErrors.password && <p className="text-red-500 text-sm mt-1">{newErrors.password}</p>}
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
                        <div>
                            <label htmlFor="confimPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Confirm Password
                            </label>
                            <div className="relative">
                            <input 
                            id="confirmPassword"
                            type={showConfirmedPassword ? "text" : "password"}
                            name="confirmPassword"
                            autoComplete="current-password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-10"
                            placeholder="***********"
                             />
                                {newErrors.confirmPassword && <p className="text-red-500 text-sm mt-1">{newErrors.confirmPassword}</p>}
                             <button
                             type="button"
                             onClick={() => setshowConfirmedPassword(!showConfirmedPassword)}
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
                        
                        
                    </div>

                    <div>
                        <button
                        type="submit"
                        disabled={loading}
                        className="group relative w-full flex flex-justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating account' : 'Create account'}

                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{''}
                            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
                            Sign in
                            </Link>
                        </p>
                    </div>
                </form>

            </div>

        </div>
    );

};

export default Register;