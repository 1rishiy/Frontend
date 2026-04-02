import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
            <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-full mx-auto">
                <Link to="/" className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl">school</span>
                    <span className="text-2xl font-bold text-teal-800 dark:text-teal-300">LearnSphere</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 font-plus-jakarta-sans tracking-tight text-body-lg">
                    <Link to="/courses" className="text-on-surface-variant hover:text-teal-600 transition-all duration-200">Courses</Link>
                    <Link to="/about" className="text-on-surface-variant hover:text-teal-600 transition-all duration-200">About</Link>
                    <Link to="/contact" className="text-on-surface-variant hover:text-teal-600 transition-all duration-200">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="text-slate-600 dark:text-slate-400 hover:opacity-80 transition-all duration-300 font-medium">
                                Dashboard
                            </Link>
                            <button onClick={handleLogout} className="px-5 py-2 text-error font-semibold hover:opacity-80 transition-all">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="px-5 py-2 text-primary font-semibold hover:opacity-80 transition-all">
                                Sign In
                            </Link>
                            <Link to="/register" className="bg-primary-container text-white px-6 py-2.5 rounded hover:opacity-90 transition-all duration-300 font-semibold scale-95 duration-200 ease-in-out">
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
