import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                    <img className="w-full h-full object-cover opacity-30" alt="high-end editorial background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhU_QyJ2YlK4HrL_BGSJIAR_FPoXoRg8hsIpnoErxwGoCWcZ2RlthTyjv0PCGa-9fz5537IuZOHL7wn8ncoWuK-46HuH5klblbQSl9dDznrGXpGnSmwqayWwLB-VJwj-AhXix9DSyL6MB8W8Tv5E8KMR04JE7hUAX5lNNTrWsb1GAhVf_DD3-clmzYoQrf9XyQ6fDUpXfTs_Hcq21xDm7NOB_wgUqdXh41HK5X7l6VQzVXnxvnn9zdF15HITGCWfbsmPqfWIGtuug" />
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-sm font-bold tracking-wider mb-6">INTELLECTUAL HORIZON</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-8">
                            Master Your Skills, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Shape Your Future</span>
                        </h1>
                        <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
                            Access world-class education from anywhere. Our platform bridges the gap between potential and achievement with curated pathways designed for the modern professional.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/courses" className="px-8 py-4 bg-gradient-to-r from-primary-container to-primary text-white rounded font-bold text-lg hover:brightness-110 transition-all duration-300">
                                Explore Courses
                            </Link>
                            <button className="px-8 py-4 bg-surface-container-high text-on-surface rounded font-bold text-lg hover:bg-surface-container-highest transition-all duration-300">
                                View Roadmap
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img className="w-full h-[500px] object-cover" alt="professional woman in a modern minimalist home office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCudLNYsragWHD2X0gczEzkRD_F2LdcTD5Qwt9fDvh_YvPvt8cHj-UFkU-AwxUQqx9mpXNMELHXYjtqgS3NCJ2in9rgoKBXCEc1NZdSQzpL-QPAoiAXtD06otJ5qL-Ie2Y-hPq9rRWsMRcKS_4tHtScT7NVifccCJVZ6-BskK9hbrn-tijbbpZLwmwOUdlVfyOJK5fVwQVKbpveW0ZpDnJ8nbX5AGY-hI2SGzsLeSW3OqZWNYVehV6vbStDhvFRij8bBk1eVInHbFI" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-lg z-20 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-on-surface">15k+ Students</p>
                                <p className="text-xs text-on-surface-variant">Active this month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Overview Grid */}
            <section className="py-32 bg-surface">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-bold text-on-surface tracking-tight mb-4">Why Choose LearnSphere</h2>
                            <p className="text-on-surface-variant text-lg">We've reimagined the learning experience to be as expansive and authoritative as your ambitions.</p>
                        </div>
                        <div className="h-[2px] flex-grow mx-12 bg-outline-variant/15 hidden md:block"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-all duration-300">
                            <div className="w-14 h-14 bg-primary-fixed rounded-lg flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">flex_direction</span>
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-4">Flexible Learning</h3>
                            <p className="text-on-surface-variant leading-relaxed">Study at your own pace with lifetime access to materials. Seamlessly transition between desktop and mobile environments.</p>
                        </div>
                        <div className="p-10 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-all duration-300">
                            <div className="w-14 h-14 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">person_check</span>
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-4">Expert Instructors</h3>
                            <p className="text-on-surface-variant leading-relaxed">Learn from industry leaders and academic pioneers who bring real-world experience directly to your digital classroom.</p>
                        </div>
                        <div className="p-10 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-all duration-300">
                            <div className="w-14 h-14 bg-tertiary-fixed rounded-lg flex items-center justify-center text-tertiary mb-8 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <h3 className="text-2xl font-bold text-on-surface mb-4">Certification</h3>
                            <p className="text-on-surface-variant leading-relaxed">Earn verified credentials that are recognized globally by top-tier employers and academic institutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Section */}
            <section className="py-32 bg-surface-container-low">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center mb-16">
                        <h2 className="text-4xl font-bold text-on-surface tracking-tight">Popular Courses</h2>
                        <Link className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" to="/courses">
                            View All Courses <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Mock Course Card */}
                        {[
                            { title: 'Advanced Machine Learning & Neural Networks', price: '$89.99', cat: 'Data Science', rating: '4.9', tag: 'BESTSELLER', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV_nsIR4vzLJBbCeRrTIgFn7zHJtE6kEKn5vC-JaxK7-jRUr_yY2QlHX0MBQacM2lRz1AVhIO28ip983-BThjieT5XrYZbaAf0LjvJX-xtFODbKeDKZiZCDTwhfYUTBPK22Q1Ikib99QUir08-VXuFIKRbN193xWyYcdpBWIorML_Vt3ys_kMfqfEOXLBGfayDubL4DVHgsI0zZYNuz6YFKsIUi11pUsO1qMEQmZ1sweMRlsYaRFGnZVTsaP5_KKpOMW2Aak1LjYw' },
                            { title: 'Mastering Minimalist UI/UX Frameworks', price: '$74.99', cat: 'Design', rating: '4.8', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkqQSACSk9tawCrRLv629GE_oNpVJWNeImxhu9OfdFhiWUFknp9iils4Tm59jii8PQ-zbKGLrPmmdy_PZ_BMAnfaVDE6FbalQ7ISjCrZ3sXn9UHwNFoC0JQi-ebwbHheGPBcfkr07cLxdVLtWbmHEgq8lNKVGv-W6qjfNkjfxY61fkYGX4pwTIMW9JAtKBms7iItlBVJr1LdrG6OEbcV4hRlg6mG17dlYqRo7yhls9aHgg0QKGtU1GCh45i9vlKcT2UF-OQcxdr0U' },
                            { title: 'Strategic Leadership in the Digital Era', price: '$99.99', cat: 'Business', rating: '4.7', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwP6lATfPZCxBdpBaybYOgbjnvQub0yoVznkfZTalyRrVYrPqQ1_V0v0oQZoCsSEdFNXmsd_y8J0DKtGPt9MrNzjOYdwg0pLEvVPWuan5n4vX3Z6KSIQYR6SEIw1qUdBc6uKKxkoGHlTwIIARLfzoIZq2SDiJGnWTryVFSe5y5kSpub_HGlqeHZK2TIWO5CF02d6mI3czYkEIRGdCnhNNiMAJ2g-HSwP3GArRhoxP3GNxx83osIEgWuMEuwr_ULJETiEDbtWgLTyw' },
                            { title: 'Full-Stack Architecture with Next.js & GraphQL', price: '$119.99', cat: 'Development', rating: '5.0', tag: 'NEW', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx5MUY0nF0pKo-k6jqClJnb6Fx6j38vWa7R1qs4HzCjZ1ocTVXEhCQW4bvdbxExuxcZyqF7rfhQCDcstyfUncrYzvSV-L8dtiP_FigJf-G3uzptbsE7Wrju2X6SioP_VGRZ2iuh9RlJt7hYb3FGgRmzkBF5lfNyBcK6khoJg2oUkHNs1K2OFFi9xOvSyS-RNFtVpHkSeyBbyr9zoAc8qlqrJSkUZPMn8vAfGFvrYJxTVsTRgUIncsvQddKUypPTP9gYV0Fr6fNvK0' },
                        ].map((course, i) => (
                            <div key={i} className="bg-surface-container-lowest rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-300 group flex flex-col">
                                <div className="h-48 relative overflow-hidden">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={course.title} src={course.img} />
                                    {course.tag && <div className={`absolute top-4 left-4 px-3 py-1 ${course.tag==='NEW'?'bg-secondary':'bg-primary'} text-white text-xs font-bold rounded`}>{course.tag}</div>}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold text-secondary uppercase tracking-widest">{course.cat}</span>
                                        <div className="flex items-center gap-1 text-on-surface">
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            <span className="text-xs font-bold">{course.rating}</span>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-on-surface mb-4 leading-tight flex-grow">{course.title}</h4>
                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-2xl font-black text-on-surface">{course.price}</span>
                                        <Link to={`/player/${i+1}`} className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-on-surface mb-6 tracking-tight">Ready to expand your horizon?</h2>
                        <p className="text-on-surface-variant text-lg mb-10">Join 50,000+ learners today. Get notified about new courses and exclusive industry insights.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input className="px-6 py-4 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-primary w-full sm:w-96 text-on-surface" placeholder="Enter your professional email" type="email" />
                            <button className="px-8 py-4 bg-secondary text-white rounded font-bold hover:brightness-110 transition-all">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;
