import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await login(credentials);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <React.Fragment>
            <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-surface py-20 px-6">
                <div className="bg-surface-container-lowest p-10 md:p-14 rounded-2xl shadow-xl border border-outline-variant/10 w-full max-w-md relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                    <div className="mb-10 text-center">
                        <span className="material-symbols-outlined text-5xl text-primary mb-4">vpn_key</span>
                        <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">Welcome Back</h2>
                        <p className="text-on-surface-variant mt-2">Access your intellectual pursuits</p>
                    </div>

                    {error && <div className="bg-error/10 text-error p-4 rounded-lg text-sm font-medium mb-6">{error}</div>}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="email">Email Address</label>
                            <input 
                                className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface" 
                                id="email" name="email" type="email" required
                                value={credentials.email} onChange={handleChange} placeholder="scholar@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold tracking-tight text-on-surface-variant" htmlFor="password">Password</label>
                                <a href="#" className="text-sm text-primary font-bold hover:underline">Forgot?</a>
                            </div>
                            <input 
                                className="w-full px-4 py-3.5 bg-surface-variant border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface" 
                                id="password" name="password" type="password" required
                                value={credentials.password} onChange={handleChange} placeholder="••••••••"
                            />
                        </div>

                        <button 
                            className="w-full py-4 bg-gradient-to-r from-primary-container to-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-70 flex justify-center items-center" 
                            type="submit" disabled={loading}
                        >
                            {loading ? <span className="material-symbols-outlined animate-spin">progress_activity</span> : 'Authenticate'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-on-surface-variant text-sm">
                        Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Begin Journey</Link>
                    </p>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Login;
