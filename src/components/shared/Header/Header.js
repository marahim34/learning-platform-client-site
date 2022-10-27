import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png'
import './Header.css'
import { themeChange } from 'theme-change';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/courses'>Courses</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                <li><Link to='/blogs'>Blogs</Link></li>
                                {
                                    user?.uid ?
                                        <>
                                            <div className="dropdown dropdown-close">
                                                <label tabIndex={0} className="btn">
                                                    <img src={user?.photoURL} style={{ height: '30px', width: "30px" }}
                                                        className='rounded-full' width={100} alt="" />
                                                </label>
                                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><p>{user?.displayName}</p></li>
                                                    <li><button onClick={handleLogOut}>Log Out</button></li>
                                                </ul>
                                            </div>
                                        </>
                                        :
                                        <li><Link to='/login'>Log In</Link></li>
                                }
                            </ul>
                        </div>

                        <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" width={100} className='w-100 mr-6' /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {
                                user?.uid ?
                                    <>
                                        <div className="dropdown dropdown-close">
                                            <label tabIndex={0} className="btn">
                                                <img src={user?.photoURL} style={{ height: '30px', width: "30px" }}
                                                    className='rounded-full' width={100} alt="" />
                                            </label>
                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><p>{user?.displayName}</p></li>
                                                <li><button onClick={handleLogOut}>Log Out</button></li>
                                            </ul>
                                        </div>
                                    </>
                                    :
                                    <li><Link to='/login'>Log In</Link></li>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn"><button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theme</button></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;