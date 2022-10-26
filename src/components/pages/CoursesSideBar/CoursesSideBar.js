import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideBarTitle from './SideBarTitle';

const CoursesSideBar = () => {
    const sideBar = useLoaderData();
    return (
        <div>
            {
                sideBar.map(siB => <SideBarTitle key={siB.id} siB={siB}></SideBarTitle>)
            }
        </div>
    );
};

export default CoursesSideBar;