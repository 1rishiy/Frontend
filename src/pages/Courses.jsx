import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const mockCourses = [
        {
            id: 1,
            title: 'Advanced React Architecture: Scalable Apps',
            description: 'Master the core principles of React design patterns, performance optimization, and global state management.',
            instructor_name: 'Alex Rivera',
            price: '129.99',
            category: 'Tech',
            rating: '4.9',
            image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8XbNpm4arr4wwnixdJfRyJIBNC9e605bIa5NCzWEjT56dhPpeqMTi4Qs2aremybc8Moaj3d7KKnU_JFvK4mWWMxFRu_oqEucQHmHGvVm7C0rjYDIVDoDIE84SvpN3mV80BnxbAnmNLVyfzQMWYopgTOSC3zWivJk2aLpJzLOk6iU-wJMvfSa6b4vodSbiaOMmkSU5-iFJG_qC5YzLoyAQjBXCZlwJn4uZ5DxnQrPIspEDxVHQqBdXPvAgdQDpECmMOomd5a-9ADk'
        },
        {
            id: 2,
            title: 'UI/UX Editorial: The Art of Space',
            description: 'Learn to design breathtaking editorial-style user interfaces that prioritize readability and luxury aesthetic.',
            instructor_name: 'Elena Soros',
            price: '89.00',
            category: 'Design',
            rating: '4.8',
            image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0xCQgZ9fgQI6gb6FmudiB7BN5awIT7zGlpmGCDhtmWkIasKOKYb5nbaV4rFXzo8ZB09uXBPAY-0elpRPlKoA7DwIi_CnQwZWxK7LXkjsENEWp-Xy7sPAwLZE06kXGI27w2A9dJKSYOelbVolR8qHod6zx8kLOgY4qyUNAPlYVggvzle6kNnUZKUe2rVL7I1sFra9TvCATi5mjWJ15z7fcENVFlBvJNhA_mPLTXi4wc0Tczv7byiI3-9wMnG-kuzMIbS6W-J3W1i4'
        },
        {
            id: 3,
            title: 'Data-Driven Strategy for Entrepreneurs',
            description: 'Convert complex market data into actionable business intelligence using modern analytical tools.',
            instructor_name: 'Marcus Thorne',
            price: '149.50',
            category: 'Business',
            rating: '4.7',
            image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvR98WWJcjoKCzZ6qMK1R5KRTHOvIkwY5xruzMgbEtQJ1dsiZongpC9acFTz7_iGmFHrUFqiAT9JYzkODRiAbRlTeb8Bre4_pDVczL5d_OY46-qW-GB7r3bkJyqyP21nRqvWDzdp-rUvgc8ZO2QeXRKZS38NoCn2VhqGKmvejGWdw9UIy21-d6HpDDq7K9kl2LqcfpKJvpXgrsgT3BcF0INSy2Bga5vIiqZNDtXl-ZfhREVh90IOeSPNtHS3Lr_G1MBcg6KBRl9ok'
        }
    ];

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await api.get('/courses');
                // Use DB courses if any, otherwise fallback to mock so it looks good empty
                setCourses(res.data.length > 0 ? res.data : mockCourses);
            } catch (err) {
                console.error("Failed to fetch courses, using mock data.", err);
                setCourses(mockCourses);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const getCategoryStyles = (cat) => {
        switch(cat?.toLowerCase()) {
            case 'design': return 'bg-secondary-fixed text-on-secondary-fixed-variant';
            case 'business': return 'bg-tertiary-fixed text-on-tertiary-fixed-variant';
            default: return 'bg-primary-fixed text-on-primary-fixed-variant';
        }
    };

    return (
        <main className="min-h-screen flex">
            {/* Sidebar Filters */}
            <aside className="w-[320px] bg-surface-container-low/90 backdrop-blur-xl border-r border-outline-variant/10 hidden md:block p-8 pt-12">
                <div className="space-y-10">
                    <div>
                        <h3 className="font-headline font-bold text-teal-800 mb-6 text-xl tracking-tight">Categories</h3>
                        <div className="space-y-3">
                            {['Tech & Development', 'Design & Creative', 'Business & Marketing', 'Science & Math'].map((cat, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" defaultChecked={i===0} className="rounded border-outline-variant text-teal-700 focus:ring-teal-500 w-5 h-5 shadow-sm" />
                                    <span className="text-on-surface-variant group-hover:text-teal-700 transition-colors">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-headline font-bold text-teal-800 mb-6 text-xl tracking-tight">Expertise Level</h3>
                        <div className="space-y-3">
                            {['Beginner', 'Intermediate', 'Advanced'].map((level, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="level" defaultChecked={i===1} className="text-teal-700 focus:ring-teal-500 w-5 h-5" />
                                    <span className="text-on-surface-variant group-hover:text-teal-700 transition-colors">{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-headline font-bold text-teal-800 mb-6 text-xl tracking-tight">Price Range</h3>
                        <input type="range" min="0" max="500" className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-teal-700" />
                        <div className="flex justify-between mt-4 text-on-surface-variant text-sm font-medium">
                            <span>Free</span>
                            <span>$500+</span>
                        </div>
                    </div>
                    <div className="pt-6">
                        <button className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm">Apply Filters</button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <section className="flex-1 p-8 lg:p-12 pt-12">
                <div className="max-w-7xl mx-auto mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="flex-1">
                            <h1 className="text-5xl font-extrabold text-on-background tracking-tighter mb-4">Discover Your Next Horizon</h1>
                            <p className="text-body-lg text-on-surface-variant max-w-xl">Join over 2 million students worldwide and master the skills that define the future of the digital industry.</p>
                        </div>
                        <div className="w-full lg:w-[480px]">
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
                                <input type="text" placeholder="Search for courses, instructors, or skills..." className="w-full bg-surface-variant border-none rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-background shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20"><span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span></div>
                ) : (
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:bg-surface-container-highest transition-all duration-300 hover:shadow-xl flex flex-col">
                                <div className="h-48 overflow-hidden">
                                    <img src={course.image_url} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8 space-y-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getCategoryStyles(course.category)}`}>
                                            {course.category}
                                        </span>
                                        <div className="flex items-center text-teal-700">
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="ml-1 font-bold">{course.rating || '4.5'}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-on-surface tracking-tight leading-tight">{course.title}</h3>
                                    <p className="text-on-surface-variant line-clamp-2 flex-grow">{course.description}</p>
                                    
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden">
                                            <span className="material-symbols-outlined text-sm text-outline">person</span>
                                        </div>
                                        <span className="text-sm font-medium text-on-surface">{course.instructor_name}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4">
                                        <span className="text-2xl font-black text-teal-800">${course.price}</span>
                                        <Link to={`/player/${course.id}`} className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
                                            Enroll
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default Courses;
