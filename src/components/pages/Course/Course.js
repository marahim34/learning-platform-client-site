import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, institution, title, skills, rating, reviews, applicable_for, certification, duration, photo_URL } = course;
    return (
        <div className='grid grid-cols-3'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl m-4 flex flex-wrap">
                    <figure><img src={photo_URL} height={100} alt="course" /></figure>
                    <div className="card-body">
                        <div className='h-12'>
                            <h2 className="card-title">{title}</h2>
                        </div>
                        <div className='h-36'>
                            <div className='h-12'>
                                <p className='font-semibold'>Course Implemented by: {institution}</p>
                            </div>
                            <div className='flex'>
                                <p className='flex items-center'>Rating: <AiOutlineStar className='text-yellow-400'></AiOutlineStar> {rating}</p>
                                <p> Review: {reviews}</p>
                            </div>
                            <p>Duration: {duration}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/courses/${id}`} >
                                    <button id={id} className="btn btn-primary">Details</button>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;