import React from 'react';

const Contact = () => {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <header className="pt-20 pb-20 px-6 md:px-12 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block px-4 py-1.5 mb-6 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-sm font-bold tracking-wider uppercase">Support & Guidance</div>
                    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-primary leading-none mb-8">
                        Connect with our <span className="text-secondary italic">Curators</span>
                    </h1>
                    <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                        Whether you're seeking technical guidance or academic partnerships, our intellectual facilitators are here to bridge the horizon between curiosity and mastery.
                    </p>
                </div>
            </header>

            {/* Main Content: Two-Column Layout */}
            <main className="px-6 md:px-12 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
                
                {/* Left Column: Contact Details */}
                <section className="md:col-span-5 space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-on-surface">The Academic Hub</h2>
                        <p className="text-on-surface-variant">Our central coordination office is nestled within the historic scholarly district of Cambridge.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Office Address</h4>
                                <p className="text-on-surface-variant leading-relaxed">12 Scholar's Row, Knowledge Square<br/>Cambridge, CB2 1TQ, United Kingdom</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Inquiry Line</h4>
                                <p className="text-on-surface-variant">+44 (0) 1223 987 654</p>
                                <p className="text-sm text-slate-400 mt-1">Mon - Fri, 9:00 - 18:00 GMT</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Digital Correspondence</h4>
                                <p className="text-on-surface-variant">curators@learnsphere.edu</p>
                                <p className="text-on-surface-variant">partnerships@learnsphere.edu</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-6">Connect Digitally</h4>
                        <div className="flex gap-4">
                            {[
                                "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                                "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            ].map((path, index) => (
                                <a key={index} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface hover:bg-secondary hover:text-white transition-all" href="#">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={path}></path></svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Right Column: Contact Form */}
                <section className="md:col-span-7">
                    <div className="bg-surface-container-lowest p-10 md:p-14 rounded-xl shadow-sm border border-outline-variant/10">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-primary mb-2">Send a Message</h3>
                            <p className="text-on-surface-variant">Complete the form below and an academic curator will respond within 24 hours.</p>
                        </div>
                        <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="name">Full Name</label>
                                    <input className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface" id="name" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="email">Email Address</label>
                                    <input className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface" id="email" placeholder="john@example.edu" type="email" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="subject">Inquiry Subject</label>
                                <select className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface" id="subject">
                                    <option>Course Admissions</option>
                                    <option>Technical Support</option>
                                    <option>Partnership Inquiry</option>
                                    <option>General Feedback</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="message">Your Message</label>
                                <textarea className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface" id="message" placeholder="How can we assist your intellectual journey?" rows="5"></textarea>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-primary-container to-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300" type="submit">
                                Dispatch Message
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            {/* Map Section */}
            <section className="mt-20 relative h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-200">
                    <img className="w-full h-full object-cover grayscale opacity-60" alt="Campus Location Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq5_EEq0mkW_SDs_wTsnW5xmppLHg77AyqIR7KPSzyo4RD3oTzybcqvomP5TSpJV_YSEfcdckeUGwjALtC6K3OQjwItea0fOaBWEHOqwJFdE1JIYDluAZAz8wyVu6EfNegsPr792vh6FfbiB8yNYN34USQj65l7eGr4H6ogHljvc6iR5FTOOGEvygEGPXPQdWMrZcj4v8axkm-RuWEeh09-qEjiyP9XPJADPELhinW76fyn22K-2iVPvJUUZwXC-gRx0GKoV8Ci3M" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="bg-primary text-white p-4 rounded-full shadow-2xl mb-4 inline-block animate-bounce">
                        <span className="material-symbols-outlined text-3xl">school</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-xl border border-outline-variant/30 text-on-surface">
                        <h4 className="font-bold text-xl mb-1">LearnSphere Cambridge</h4>
                        <p className="text-sm text-on-surface-variant">The Heart of Learning</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Contact;
