import React from 'react';
import { Link } from 'react-router-dom';

const SideBarTitle = ({ siB }) => {
    const { id, title } = siB;
    return (
        <div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li> <Link to={`/courses/${id}`} >
                        {title}
                    </Link></li>
                </ul>

            </div>


        </div>
    );
};

export default SideBarTitle;