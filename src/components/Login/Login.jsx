import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';


const Login = () => {

    useTitle('Login')

    const { signInWithGoogle, signInWithGithub, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

     // email sign in part

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

     // google sign in part

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(() => {
            console.log('User signed in with Google');
            navigate(from, { replace: true })
        }).catch(error => {
            console.log('Error signing in with Google:', error);
        });
    }

    // github sign in part

    const handleGithubSignIn = () => {
        signInWithGithub().then(() => {
            console.log('User signed in with Github');
            navigate(from, { replace: true })
        }).catch(error => {
            console.log('Error signing in with Github:', error);
        });
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                        <h1 className='text-center text-5xl font-normal text-red-500'>Log in</h1>
                        <div className="form-control mt-6 ">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline my-3 text-black ">Google</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline my-3 text-black ">Github</button>
                        </div>

                        <form onSubmit={handleLogin} className="card-body" >
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
                            <p className='text-red-400 '>{error}</p>
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