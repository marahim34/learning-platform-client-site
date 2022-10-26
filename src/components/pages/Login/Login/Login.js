import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai'
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {
    const { logIn, setLoading } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                setError('');
                form.reset();
                if (user.emailVerified) {
                    navigate('/')
                }
                else {
                    toast('Your email is not verified. Please verify')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
            .finally(
                setLoading(false)
            )

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please ensure that you use the same email account and password that you used when signing in.</p>
                    <br />
                    <button className="btn btn-primary mb-4"><FcGoogle></FcGoogle> Continue with Google</button>
                    <br />
                    <button className="btn btn-primary"><AiFillGithub></AiFillGithub> Continue with Github</button>
                    <br />
                    <p className="text-3xl font-bold mt-3">Don't have an account?</p>
                    <p><Link to='/register' className="link link-primary">Register here</Link></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;