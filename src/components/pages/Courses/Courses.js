import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CoursesSideBar from '../CoursesSideBar/CoursesSideBar';

const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <div className='block md:flex'>
            <div className='items-start'>
                <CoursesSideBar></CoursesSideBar>
            </div>
            <div className='block items-center md:grid lg:grid-cols-2'>
                {
                    allCourses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>

        </div>
    );
};

export default Courses;