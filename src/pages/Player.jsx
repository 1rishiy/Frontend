import React from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
    const { courseId } = useParams();

    return (
        <main className="h-[calc(100vh-5rem)] flex overflow-hidden">
            {/* Left: Video Player & Tabs (70%) */}
            <section className="w-full md:w-[70%] flex flex-col overflow-y-auto bg-surface">
                {/* Player Canvas */}
                <div className="aspect-video w-full bg-slate-900 relative group">
                    <img className="w-full h-full object-cover opacity-80" alt="Video Placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzu3f8eUihmYDsnl-Yp1YWO_nAig8g6GXE-pfIMi_j-FVehLQ5oLxtg38u46e5AJr0HVGltLmfqdL6uqCI_HzqqCvENHfhlAoi8z1VjtnTVfJvmnR9N5T8zPj77rd_Xxts4owwaO6Tv1aW6-gx1OChX977kDEGJKgG3cCXGxN509HlZJGVbxGi1JV6xHLvip3sXZZDV7m5qf3dVlAfbup0GZ2nrDpnrSMce-j1u7RY5jK9qxMti_3hbiikEcRYQ-rqk51NpwIwi_w" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center hover:scale-[1.05] shadow-xl transition-all">
                            <span className="material-symbols-outlined text-4xl">play_arrow</span>
                        </button>
                    </div>
                    {/* Bottom Controls Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-4">
                        <div className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer relative">
                            <div className="absolute top-0 left-0 h-full w-[45%] bg-primary rounded-full"></div>
                            <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-white"></div>
                        </div>
                        <div className="flex justify-between items-center text-white">
                            <div className="flex items-center gap-4 md:gap-6">
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed">skip_previous</span>
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed">play_arrow</span>
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed">skip_next</span>
                                <span className="text-xs md:text-sm font-medium">12:45 / 24:00</span>
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed hidden md:block">volume_up</span>
                            </div>
                            <div className="flex items-center gap-4 md:gap-6">
                                <span className="text-xs md:text-sm font-medium bg-white/10 px-2 py-1 rounded">1.5x</span>
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed">closed_caption</span>
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed">settings</span>
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed">fullscreen</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area Below Video */}
                <div className="px-6 md:px-8 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold text-on-surface tracking-tight mb-2">Introduction to Advanced UI Architectures</h1>
                            <p className="text-on-surface-variant flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">folder_open</span>
                                Advanced Design Systems • Module 2 • Lesson 3
                            </p>
                        </div>
                        <button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:brightness-110 transition-all">
                            <span className="material-symbols-outlined">download</span>
                            Resources
                        </button>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex overflow-x-auto border-b border-surface-container-high mb-8 no-scrollbar">
                        <button className="px-8 py-4 text-teal-700 dark:text-teal-400 font-bold border-b-2 border-teal-700 relative -mb-[2px] whitespace-nowrap">Overview</button>
                        <button className="px-8 py-4 text-on-surface-variant font-medium hover:text-teal-600 transition-colors whitespace-nowrap">Notes</button>
                        <button className="px-8 py-4 text-on-surface-variant font-medium hover:text-teal-600 transition-colors whitespace-nowrap">Comments (12)</button>
                    </div>

                    {/* Tab Content: Overview */}
                    <div className="max-w-4xl space-y-6">
                        <h3 className="text-xl font-bold text-on-surface">About this Lesson</h3>
                        <p className="text-on-surface-variant leading-relaxed text-body-lg">
                            In this session, we dive deep into the philosophy of "The Intellectual Horizon." We'll explore why tonal layering outperforms traditional border-heavy designs and how to implement a wide-canvas layout that respects user cognitive load. By the end of this video, you will understand how to orchestrate multi-column dashboard grids that feel editorial and authoritative.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            <div className="bg-surface-container-low p-6 rounded-xl">
                                <span className="material-symbols-outlined text-secondary mb-3">task_alt</span>
                                <h4 className="font-bold mb-2">Learning Objectives</h4>
                                <ul className="text-sm text-on-surface-variant space-y-2">
                                    <li>Master tonal hierarchy over line borders</li>
                                    <li>Understand glassmorphism implementation</li>
                                    <li>Design asymmetric desktop layouts</li>
                                </ul>
                            </div>
                            <div className="bg-surface-container-low p-6 rounded-xl">
                                <span className="material-symbols-outlined text-primary mb-3">attachment</span>
                                <h4 className="font-bold mb-2">Project Files</h4>
                                <p className="text-sm text-on-surface-variant mb-4">Architecture-Spec-v2.fig (14.2 MB)</p>
                                <button className="text-primary font-bold text-sm hover:underline">Download Documentation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Right: Curriculum List (30%) */}
            <aside className="hidden md:flex w-[30%] bg-surface-container-low border-l border-outline-variant/10 flex-col pb-8">
                <div className="p-6 border-b border-surface-container-high bg-surface-container-low/50 backdrop-blur-md sticky top-0 z-10">
                    <h2 className="text-xl font-black text-on-surface tracking-tight uppercase text-xs opacity-60 mb-2">Course Content</h2>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-2xl font-bold text-teal-800">45% Complete</p>
                            <p className="text-sm text-on-surface-variant">12 of 24 lessons finished</p>
                        </div>
                        <div className="w-16 h-16 relative flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle className="text-surface-container-highest" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="5"></circle>
                                <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" strokeDashoffset="96.25" strokeWidth="5"></circle>
                            </svg>
                            <span className="absolute text-[10px] font-bold">45%</span>
                        </div>
                    </div>
                </div>

                {/* Scrollable List */}
                <div className="flex-1 overflow-y-auto pt-2">
                    <div className="mb-2">
                        <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-high transition-colors text-left group">
                            <span className="text-sm font-extrabold text-on-surface-variant uppercase tracking-widest">Module 1: Foundations</span>
                            <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
                        </button>
                        <div className="space-y-px">
                            <div className="flex items-center gap-4 px-6 py-4 bg-surface-container-lowest/50 border-l-4 border-primary">
                                <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xs">check</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-on-surface">1.1 Welcome to the Horizon</p>
                                    <p className="text-xs text-on-surface-variant">4:12</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 px-6 py-4 hover:bg-surface-container-high transition-colors border-l-4 border-transparent">
                                <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xs">check</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-on-surface">1.2 History of EdTech UI</p>
                                    <p className="text-xs text-on-surface-variant">15:45</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-container-high transition-colors text-left">
                            <span className="text-sm font-extrabold text-on-surface-variant uppercase tracking-widest">Module 2: Advanced Design</span>
                            <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
                        </button>
                        <div className="space-y-px">
                            <div className="flex items-center gap-4 px-6 py-4 bg-secondary-fixed text-on-secondary-fixed border-l-4 border-secondary">
                                <div className="w-6 h-6 rounded border-2 border-secondary flex items-center justify-center bg-white/20">
                                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold">2.3 Introduction to Architectures</p>
                                    <p className="text-xs opacity-70">24:00 • Playing Now</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 px-6 py-4 hover:bg-surface-container-high transition-colors border-l-4 border-transparent">
                                <div className="w-6 h-6 rounded border-2 border-outline-variant flex items-center justify-center"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-on-surface">2.4 Tonal Layering Principles</p>
                                    <p className="text-xs text-on-surface-variant">18:30</p>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant text-sm">lock</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </main>
    );
};

export default Player;
