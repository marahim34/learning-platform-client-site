import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CoursesSideBar from '../CoursesSideBar/CoursesSideBar';

const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <div className='flex w-full'>
            <div>
                <CoursesSideBar></CoursesSideBar>
            </div>
            <div className='grid grid-cols-2'>
                {
                    allCourses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>

        </div>
    );
};

export default Courses;