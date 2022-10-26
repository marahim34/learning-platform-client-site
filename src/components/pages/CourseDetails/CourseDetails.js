import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const coursePage = useLoaderData();
    const { id, title, } = coursePage;
    return (
        <div>
            <h3>Course Details {title}</h3>
        </div>
    );
};

export default CourseDetails;