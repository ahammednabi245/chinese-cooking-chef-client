import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="form-control mt-6">
                                <button className="btn btn-outline my-3 text-black ">Google</button>
                                <button className="btn btn-outline text-black  ">GitHub</button>
                            </div>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                <p> Don't Have an Account? <Link to="/register" className='link text-red-500 hover:text-red-800'>Register</Link></p>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;