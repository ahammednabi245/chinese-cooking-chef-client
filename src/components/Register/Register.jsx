import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    useTitle('Register')

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setSuccess('');
        setError('');

        if (password.length < 6) {

            setError(' Your password is less than 6 characters. Please add at least 6 characters in your password !')
            return;
        }
        else if (password !== confirm) {
            setError('Your password did not match')
            return
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                event.target.reset();
                setSuccess('Your account has been created successfully! Now you can go to Home or Login page');

                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <h1 className='text-center text-3xl font-normal text-red-500 mt-4'>Register</h1>

                        <form onSubmit={handleRegister} className="card-body">
                            <div className='card-body'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                    <label className="label">
                                        <p> Already Have an Account? <Link to="/login" className=' link  text-red-500 hover:text-red-800'>Login</Link></p>
                                    </label>
                                </div>
                                <p className='text-red-400 '>{error}</p>
                                <p className='text-green-500'>{success}</p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none">Register</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;