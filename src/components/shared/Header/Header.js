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
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" width={150} className='mr-6' /></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {/* <li><Link to='/login'>Log In</Link></li> */}
                        {/* <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theme</button> */}

                        {
                            user?.uid ?
                                <>
                                    {/* <button onClick={handleLogOut} type="submit"></button> */}
                                    {/* <Button onClick={handleLogOut} variant="light" type="submit">Log Out</Button> */}

                                    <div className="dropdown dropdown-close">
                                        <label tabIndex={0} className="btn">
                                            <img src={user.photoURL} style={{ height: '30px', width: "30px" }}
                                                className='rounded-full' roundedCircle width={100} alt="" />
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
                        <li><button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theme</button></li>
                        <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theme</button>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;