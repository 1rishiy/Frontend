import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex bg-surface min-h-screen">
            {/* Sidebar inside Dashboard for typical LMS feel */}
            <aside className="hidden md:flex flex-col w-[280px] h-[calc(100vh-5rem)] border-r border-outline-variant/10 bg-surface-container-lowest sticky top-20">
                <nav className="flex-1 px-4 py-8 space-y-2">
                    <Link to="/dashboard" className="flex items-center gap-4 px-4 py-3 rounded-lg bg-primary-fixed text-on-primary-fixed-variant group">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="font-bold">Dashboard</span>
                    </Link>
                    <Link to="/courses" className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-transform duration-200 hover:translate-x-1 group">
                        <span className="material-symbols-outlined">school</span>
                        <span>My Learning</span>
                    </Link>
                    <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-transform duration-200 hover:translate-x-1 group" href="#">
                        <span className="material-symbols-outlined">workspace_premium</span>
                        <span>Certificates</span>
                    </a>
                    <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-transform duration-200 hover:translate-x-1 group" href="#">
                        <span className="material-symbols-outlined">person</span>
                        <span>Profile</span>
                    </a>
                </nav>
                <div className="px-4 pb-8 mt-auto">
                    <div className="p-4 rounded-xl bg-primary-container/20 space-y-3">
                        <p className="text-sm font-semibold text-primary">Upgrade to Pro</p>
                        <p className="text-xs text-on-surface-variant">Get unlimited access to premium courses.</p>
                        <button className="w-full py-2 bg-gradient-to-r from-primary-container to-primary text-white rounded text-xs font-bold hover:scale-[1.02] transition-all">Go Premium</button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-screen relative p-8 lg:p-12">
                <div className="space-y-16 max-w-6xl mx-auto">
                    {/* Welcome Section */}
                    <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="space-y-2">
                            <h2 className="text-5xl font-black text-on-surface tracking-tight">Hi, {user?.name || 'Student'}!</h2>
                            <p className="text-xl text-on-surface-variant max-w-xl font-light">Your intellectual horizon has expanded by 12% this week. Ready to continue your journey?</p>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-primary min-w-[200px]">
                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Daily Streak</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-black text-on-surface">14 Days</span>
                                <span className="material-symbols-outlined text-secondary">local_fire_department</span>
                            </div>
                        </div>
                    </section>

                    {/* Learning Statistics */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:shadow-xl group">
                            <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white">schedule</span>
                            </div>
                            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Hours Learned</h3>
                            <p className="text-4xl font-black text-on-surface">128.5</p>
                            <p className="text-sm text-primary mt-4 flex items-center gap-1 font-semibold">
                                <span className="material-symbols-outlined text-sm">trending_up</span> +8.2% from last month
                            </p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:shadow-xl group">
                            <div className="w-12 h-12 bg-secondary-fixed rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                                <span className="material-symbols-outlined text-secondary group-hover:text-white">menu_book</span>
                            </div>
                            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Courses Completed</h3>
                            <p className="text-4xl font-black text-on-surface">2</p>
                            <p className="text-sm text-secondary mt-4 flex items-center gap-1 font-semibold">
                                <span className="material-symbols-outlined text-sm">check_circle</span> 1 in progress
                            </p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:shadow-xl group">
                            <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-6 group-hover:bg-tertiary transition-colors">
                                <span className="material-symbols-outlined text-tertiary group-hover:text-white">workspace_premium</span>
                            </div>
                            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Certificates</h3>
                            <p className="text-4xl font-black text-on-surface">0</p>
                            <p className="text-sm text-tertiary mt-4 font-semibold">Verified by LearnSphere</p>
                        </div>
                    </section>

                    {/* Active Courses */}
                    <section className="space-y-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">Active Courses</h3>
                            <Link className="text-sm font-bold text-primary hover:text-teal-700 transition-colors" to="/courses">View All</Link>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col md:flex-row gap-6 group hover:bg-surface-container-high transition-all">
                                <img alt="Digital Strategy" className="w-full md:w-32 h-40 md:h-32 rounded-lg object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5e0NY4Jkpxc9CqL-qFs9YhcxI_HV6w5NPncuTgvJpsHCeOGQ6iYuw9Wf0toj8D9eVRgBPljTFw7W6HEtOUcR0qRHMf3J0VQFfwu4Nx7vtOHbNH4jNu2Xih1QnvlhE1za1VerAWq2bQ-DDsZ6nVVPiczzrvc74YqXO_j4TDj8Y1-jTTYWM8fpUxZwYLrBpQYpg7La2mkMGZsGwRvaOXrndCYkEDX5_cH4QrvnZ3kNh93VGWCAauiN18Y-crHdSWsCg6hM4chJlVYg" />
                                <div className="flex-1 flex flex-col justify-center space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-[10px] font-black text-primary uppercase tracking-widest">Business & Leadership</p>
                                            <h4 className="text-lg font-bold text-on-surface">Mastering Digital Strategy for 2024</h4>
                                        </div>
                                        <span className="text-xs font-bold text-on-surface-variant">75% Complete</span>
                                    </div>
                                    <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                                        <div className="w-3/4 h-full bg-primary rounded-full transition-all duration-500"></div>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">play_circle</span> 15/20 Lessons</span>
                                        <Link to="/player/1" className="text-primary font-bold hover:underline">Resume Course</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
