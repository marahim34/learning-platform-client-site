import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='grid grid-cols-3'>
            {
                allCourses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;