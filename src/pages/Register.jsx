import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await register(formData);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Registration failed. Please select a different email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <React.Fragment>
            <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-surface py-20 px-6">
                <div className="bg-surface-container-lowest p-10 md:p-14 rounded-2xl shadow-xl border border-outline-variant/10 w-full max-w-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>
                    <div className="mb-10 text-center">
                        <span className="material-symbols-outlined text-5xl text-secondary mb-4">person_add</span>
                        <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">Expand Your Horizon</h2>
                        <p className="text-on-surface-variant mt-2">Join a global community of modern professionals</p>
                    </div>

                    {error && <div className="bg-error/10 text-error p-4 rounded-lg text-sm font-medium mb-6">{error}</div>}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="name">Full Name</label>
                            <input 
                                className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-white transition-all text-on-surface" 
                                id="name" name="name" type="text" required minLength="3"
                                value={formData.name} onChange={handleChange} placeholder="E.g. John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="email">Professional Email</label>
                            <input 
                                className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-white transition-all text-on-surface" 
                                id="email" name="email" type="email" required
                                value={formData.email} onChange={handleChange} placeholder="scholar@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="password">Secure Password</label>
                            <input 
                                className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-secondary focus:bg-white transition-all text-on-surface" 
                                id="password" name="password" type="password" required minLength="6"
                                value={formData.password} onChange={handleChange} placeholder="••••••••"
                            />
                            <p className="text-xs text-on-surface-variant mt-1">Must be at least 6 characters long.</p>
                        </div>

                        <button 
                            className="w-full py-4 bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-70 flex items-center justify-center mt-4" 
                            type="submit" disabled={loading}
                        >
                            {loading ? <span className="material-symbols-outlined animate-spin">progress_activity</span> : 'Create Academic Profile'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-on-surface-variant text-sm border-t border-outline-variant/10 pt-6">
                        Already enrolled in LearnSphere? <Link to="/login" className="text-secondary font-bold hover:underline">Log In</Link>
                    </p>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Register;
