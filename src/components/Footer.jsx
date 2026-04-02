import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full mt-auto bg-slate-50 dark:bg-slate-950">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-7xl mx-auto">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">school</span>
                        <span className="text-xl font-bold text-teal-800 dark:text-teal-200">LearnSphere</span>
                    </div>
                    <p className="font-plus-jakarta text-body-sm text-slate-500">
                        © 2024 LearnSphere. The Intellectual Horizon.
                    </p>
                </div>
                
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-teal-900 dark:text-teal-100">Platform</span>
                    <Link to="/courses" className="text-slate-500 hover:text-teal-600 transition-all hover:underline">Courses</Link>
                    <Link to="/about" className="text-slate-500 hover:text-teal-600 transition-all hover:underline">About</Link>
                    <Link to="/contact" className="text-slate-500 hover:text-teal-600 transition-all hover:underline">Contact</Link>
                </div>
                
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-teal-900 dark:text-teal-100">Legal</span>
                    <a href="#" className="text-slate-500 hover:text-teal-600 transition-all hover:underline">Privacy Policy</a>
                    <a href="#" className="text-slate-500 hover:text-teal-600 transition-all hover:underline">Terms of Service</a>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="font-bold text-teal-900 dark:text-teal-100">Contact</span>
                    <p className="text-slate-500">journal@learnsphere.edu</p>
                    <div className="flex gap-4 mt-2">
                        <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">public</span>
                        <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">share</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
