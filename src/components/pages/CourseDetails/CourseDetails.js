import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GoCalendar } from 'react-icons/go';
import { FaCertificate, FaRegClock, FaLanguage, FaStar } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';
import { GiNetworkBars } from 'react-icons/gi';
import ReactDOM from 'react-dom';
import Pdf from 'react-to-pdf';

// import "./styles.css";

const CourseDetails = () => {
    const coursePage = useLoaderData();
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [13, 8]
    };
    const { id, institution, title, skills, rating, reviews, applicable_for, duration, price, about } = coursePage;
    return (
        <div>
            <div>
                <div>
                    <Pdf targetRef={ref} filename={`course details ${title}`} options={options}>
                        {({ toPdf }) => <button className="btn btn-primary ml-5 mt-3" onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
                <div ref={ref} className="hero min-h-screen bg-base-400">

                    <div className="hero-content flex-col lg:flex-row items-start">
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2 mr-3'>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200 mt-5">

                                    <div className="stat">
                                        <div className="stat-title ">Rating:</div>
                                        <div className="stat-value flex items-center text-2xl font-semibold">{rating} <FaStar /></div>
                                        <div className="stat-desc">↗︎ Since its inception</div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title ">Reviews:</div>
                                        <div className="stat-value flex items-center text-2xl font-semibold">{reviews}</div>
                                        <div className="stat-desc">↗︎ Since its inception</div>
                                    </div>
                                </div>

                                <div className='mt-3 mb-3'>
                                    <h4>Offered by</h4>
                                    <h3 className='text-3xl mt-1'>{institution}</h3>
                                </div>

                                <div className='mt-3 mb-3'>
                                    <h3 className='text-3xl font-semibold'>About this Course</h3>
                                    <hr />
                                    <p>{about}</p>
                                    <br />
                                    <p><span className='font-semibold'>Skills you will gain:</span> {skills} </p>
                                </div>
                                <div className="stat pl-0">
                                    <div className="stat-title font-semibold">Price:</div>
                                    <div className="stat-value flex items-center text-2xl font-semibold">${price}</div>
                                </div>
                                <div className='mt-3 mb-3'>
                                    <div>
                                        <h4 className='text-2xl'>Start Learning Today</h4>
                                        <p>Free Enrollment</p>
                                        <Link to={`/checkout/${id}`} >
                                            <button id={id} className="btn btn-primary">Get Premium Access</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <div className='mr-3 mb-3 mt-3'>
                                        <GoCalendar className='text-3xl'></GoCalendar>
                                    </div>
                                    <div>
                                        <h3>Flexible deadlines</h3>
                                        <p>Reset deadlines in accordance to your schedule.</p>
                                    </div>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <div className='mr-3 mb-3 mt-3'>
                                        <FaCertificate
                                            className='text-3xl text-white'></FaCertificate>
                                    </div>
                                    <div>
                                        <h3>Shareable Certificate</h3>
                                        <p>Earn a Certificate upon completion.</p>
                                    </div>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <div className='mr-3 mb-3 mt-3'>
                                        <HiStatusOnline className='text-3xl'></HiStatusOnline>
                                    </div>
                                    <div>
                                        <h3>100% Online</h3>
                                        <p>Start instantly and learn at your own schedule.</p>
                                    </div>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <div className='mr-3 mb-3 mt-3'>
                                        <GiNetworkBars className='text-3xl'></GiNetworkBars>
                                    </div>
                                    <div>
                                        <h3>Welcome {applicable_for}</h3>
                                    </div>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <div className='mr-3 mb-3 mt-3'>
                                        <FaRegClock className='text-3xl'></FaRegClock>
                                    </div>
                                    <div>
                                        <p>Approximate {duration} required</p>
                                    </div>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <div className='mr-3 mb-3 mt-3'>
                                        <FaLanguage className='text-3xl'></FaLanguage>
                                    </div>
                                    <div>
                                        <h3>English</h3>
                                        <p>Subtitles: Arabic, Bengali, English, Spanish</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;