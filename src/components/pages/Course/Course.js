import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'

const Course = ({ course }) => {
    const { id, institution, title, skills, rating, reviews, applicable_for, certification, duration, photo_URL } = course;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure><img src={photo_URL} height={100} alt="course" /></figure>
                <div className="card-body h-98">
                    <div><h2 className="card-title">{title}</h2></div>
                    <div>
                        <div>
                            <p className='font-semibold'>Course Implemented by: {institution}</p>
                            <p>Skills developed: {skills.slice(0, 50)}....</p>
                        </div>
                        <div className='flex'>
                            <p className='flex items-center'>Rating: <AiOutlineStar className='text-yellow-400'></AiOutlineStar> {rating}</p>
                            <p> Review: {reviews}</p>
                        </div>
                        <div>
                            <p>Suitable for: {applicable_for}</p>
                            <p>Certification Type: {certification}</p>
                            <p>Duration: {duration}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;