import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = ({ children }) => {
    const { createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(fullName, email, password, confirm);

        if (password.length < 6) {
            setError('Password length should be at least 6 characters')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password should include one UPPERCASE and one SPECIAL character.')
            return;
        }
        if (password !== confirm) {
            setError('Password did not match')
            return;
        }

        setError('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification();
                toast('Please verify your email and continue the registration process.')
            })
            .catch(error => console.error(error))
            .finally(() => {
                navigate('/login')
            })

        const handleEmailVerification = () => {
            verifyEmail()
                .then(() => { })
                .catch(error => console.error(error))
        }

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL,
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error))
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Register now!</h1>
                    <p className="py-6">Be a PRESTIGIOUS member and get access to a number of premium benefits such as discounts, free courses, exceptional offers and so on and so forth..</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Your Full Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register Now</button>
                        </div>
                        <div>
                            <p className="text-red-600">
                                {error}
                            </p>
                        </div>
                        <div>
                            <p>Already have an account? <Link to='/login' className="link link-primary">Login here</Link> </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;