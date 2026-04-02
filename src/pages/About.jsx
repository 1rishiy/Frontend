import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <section className="relative h-[716px] flex items-center overflow-hidden bg-primary overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img className="w-full h-full object-cover" alt="grand classical library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGUKvRlhUv4z3AE5z1Eh7OAUTyQ4ZeCldi7ZlWGfSTOqUK8ZKyrRGKGNp_J8geP34Ap-gtxJ2ProsOoMrpmV2tq5I-WMaeLQWvwTfcG6bmWKzA_xAdwsubgWASs6s_1sGgfFUFO0lOPD0EtlUwGyJ5ADkWnpjS1Dlrd7By37C3XuXbIwlDx9l7ctLhQaoh1RSIqT2JYL7CvRsvCtgeLP5IYZTtcv3ZY8Mp_tOVCyJx7xrCUj-0qNB6o9iJb_Mdw-NeI5_HFRuTGHE" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-sm font-bold tracking-widest uppercase mb-6">Our Mission</span>
                        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
                            Expanding the <br/> Intellectual Horizon.
                        </h1>
                        <p className="text-xl text-primary-fixed-dim max-w-xl leading-relaxed">
                            Redefining the boundaries of digital education through editorial excellence, scholarly depth, and an unwavering commitment to the learner's journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-32 bg-surface">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">Our Story</h2>
                            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                                <p>
                                    Founded in 2024, LearnSphere emerged from a singular observation: the digital learning landscape had become a repository of information rather than a sanctuary for knowledge. 
                                </p>
                                <p>
                                    We envisioned a platform where education feels like an editorial experience—curated, authoritative, and visually expansive. By blending cutting-edge pedagogical research with high-end design principles, we created a space that respects the learner's intellect.
                                </p>
                                <p>
                                    Today, we serve a global community of scholars, professionals, and lifelong learners who seek more than just "skills"—they seek mastery and perspective.
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary-fixed/20 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                            <img className="relative rounded-xl shadow-2xl w-full aspect-[4/5] object-cover" alt="minimalist academic workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1WCe9kCLX44RzAvovZnKzCJmzdBcyYxn8HxITtYdONwcCPMWLlXghnpd3o_lkCp3ktMl5t6eEmbWj5hsgLzzNu4rt3Le8-aarvI6JmGMQf0DnArdaAaQU6VdszKP5R8nlIXZqRv___648BqTtpDr2FZETTsNdFZTIR4FUW9flnxov35Qb_GNegDIiotlLugn62L5dULB60FA3Lv4lEE8FRe3W6cpISn2XQhJXBV79z1BtH5YlQzQACqqmaZxFcpzMKVRicTJ3tQ4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Values Section */}
            <section className="py-32 bg-surface-container-low">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-4">Vision & Values</h2>
                        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">The pillars that uphold our commitment to academic excellence and technological innovation.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                        <div className="bg-surface-container-lowest p-12 hover:bg-primary-fixed transition-colors duration-500 group">
                            <span className="material-symbols-outlined text-4xl text-primary mb-8 group-hover:scale-110 transition-transform">auto_stories</span>
                            <h3 className="text-2xl font-bold mb-4">Scholarly Depth</h3>
                            <p className="text-on-surface-variant group-hover:text-on-primary-fixed-variant leading-relaxed">We prioritize rigorous, well-researched content over superficial tutorials, ensuring every course provides lasting intellectual value.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-12 hover:bg-primary-fixed transition-colors duration-500 group">
                            <span className="material-symbols-outlined text-4xl text-primary mb-8 group-hover:scale-110 transition-transform">palette</span>
                            <h3 className="text-2xl font-bold mb-4">Editorial Clarity</h3>
                            <p className="text-on-surface-variant group-hover:text-on-primary-fixed-variant leading-relaxed">Design is not decoration; it is functional clarity. Our interface is crafted to reduce cognitive load and enhance focus.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-12 hover:bg-primary-fixed transition-colors duration-500 group">
                            <span className="material-symbols-outlined text-4xl text-primary mb-8 group-hover:scale-110 transition-transform">all_inclusive</span>
                            <h3 className="text-2xl font-bold mb-4">Radical Access</h3>
                            <p className="text-on-surface-variant group-hover:text-on-primary-fixed-variant leading-relaxed">Removing barriers to high-tier knowledge by leveraging global connectivity and intuitive platform architecture.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Scholarly Minds (Leadership Team) */}
            <section className="py-32 bg-surface">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-16 text-center">The Scholarly Minds</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { name: 'Dr. Julian Vance', title: 'Chief Executive Officer', desc: 'Former Dean of Digital Arts & Sciences, Oxford Graduate.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO397rtpUmD9D5kr_1mLOLu6-C7KXlorGvoWljtn7qMZs2674bas0MzLxmv6GLI0ovnYeH_aI0gH-6b1tsVpWSvzqp6Q3VQhn3gVTKfkdVZ1bNQar5UGd-qpvJafwdi2EECr7kQVT-kVsu4lDCVjYKiw_vNlmvrwcQKI0ginacf-tRw_3MKQ1G_T7jWfBwShOq4ZKhkW6EweVNoLoy9HX2c0PqBJjlPu1J_GI46bJqYQYw8Yhui7fMvFaoM5jeWVHQnD23PI46Z84' },
                            { name: 'Elena Rodriguez', title: 'Head of Curriculum', desc: 'Specialist in Cognitive Pedagogy with 15 years in EdTech innovation.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaD4BJkyXxuFkjfQGad5SvF5VZ7xHMhOyqsqVsjO1VJo2ptbujZvO5cNN70Pmrwwc_CQ7j-X1jpEzZjjYVwuwpaBewO3BqEeqaRs1bQXbzgguHpj1NJfyIruM9lahwV_UY60pgbDFE0uxZofKHEUHC82ADN_KlcalESheQ5dU3N-qVshW7LhXc_b011Hd0-ZY29i7qkPDeDVb_X7JES6RlYTGY9VrfKWQ35kCyh1IJM1X6k9zgv1hWUMAu1SESsV1aSXzoYjkaLrk' },
                            { name: 'Marcus Thorne', title: 'Chief Design Officer', desc: 'Award-winning editorial designer focusing on information architecture.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe2X9pA2tXirLAvGoT2Ewpjwda73M1eFs9kLM0KUCTeMkkeZmycu99gxglqUuwEEsZXuzfK1MtZv_AOdhu_z4NtU_RpY60ZZBv_pgKi37uMyBskktKrGYuFefHvB3jkee5Z_C3VEzoyA-IQvbF-69N5yJHU3KiZSf9B0t97moiHpdDamTV-5K54bVIhckJmI5xtTERH1UCYhe4bRLONq0HU5wvjC6AGbxOtuY35tEClvBVIPR7H_AwH-PrZ5vakbYKEjCCz8M38VY' },
                            { name: 'Sarah Chen', title: 'VP of Engineering', desc: 'Expert in distributed systems and AI-enhanced learning environments.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEZHOi76Sn9sIT1RPKi_A4dsIKBkZxQ8Coh19uTyHE4raTZPPn_QWJ674EjCF9JVEcCv4c-JE_ViailN6qHZG-mrCOfgA2QrLFoSUkimM_RmwDZGjy_Ke20ud9uANObHi4yfj4IoC-8pJD5cJfKjYp6qBdZI6C6G3fu_Lj4PILphBuK8mmyjcNyvvnQYjC_1OdtMG6BW5NyMbZGxAYVgGkGRkn-bNeL9MrnDqern-0tQ_X29Q3mnLNrLHVXoElq-dQRHckjWZaKlE' }
                        ].map((member, i) => (
                            <div key={i} className="group">
                                <div className="aspect-square mb-6 overflow-hidden bg-surface-container-high rounded-xl">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" alt={member.name} src={member.img} />
                                </div>
                                <h4 className="text-xl font-bold text-on-surface">{member.name}</h4>
                                <p className="text-primary font-medium mb-2">{member.title}</p>
                                <p className="text-sm text-on-surface-variant">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="bg-primary-container rounded-3xl p-16 md:p-24 relative overflow-hidden text-center text-white">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">Join Our Journey</h2>
                            <p className="text-xl text-primary-fixed-dim mb-12 leading-relaxed">
                                We are always looking for visionary educators and brilliant engineers to help us redefine the intellectual horizon.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="bg-secondary text-white px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all text-lg">Explore Careers</button>
                                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-lg font-bold hover:bg-white/20 transition-all text-lg">Subscribe to Journal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About;
