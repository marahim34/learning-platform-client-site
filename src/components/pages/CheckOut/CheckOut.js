import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CheckOut = ({ children }) => {
    const checkOutData = useLoaderData();
    const { photo_URL, title, price } = checkOutData;
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const toastMessage = () => {
        return (<div className="alert alert-info">
            <div>
                <p>You have successfully enrolled for ${title}. <span>Welcome to e-Learning Platfrom</span> </p>
            </div>
        </div>)
    }

    const handleCheckOut = () => {
        setLoading(true);
        toast(toastMessage)
        navigate('/')
    }

    return (
        <div>
            <div className="mt-20">
                <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
                    e-Learning Hero Order Check Out
                </h1>
            </div>
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">Your Details
                        </h2>
                        <form className="justify-center w-full mx-auto" method="post" action>
                            <div className="">
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                            Name</label>
                                        <input name="firstName" type="text" placeholder="First Name"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                            Name</label>
                                        <input name="Last Name" type="text" placeholder="Last Name"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label for="Email"
                                            className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                        <input name="Last Name" type="text" placeholder="Email"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label for="Address"
                                            className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                        <textarea
                                            className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label for="city"
                                            className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                        <input name="city" type="text" placeholder="City"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label for="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                            Postcode</label>
                                        <input name="postcode" type="text" placeholder="Post Code"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="flex items-center text-sm group text-heading">
                                        <input type="checkbox"
                                            className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                        <span className="ml-2">Save this information for next time</span></label>
                                </div>
                                <div className="relative pt-3 xl:pt-6"><label for="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                        className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        rows="4" placeholder="Notes for delivery"></textarea>
                                </div>
                                <div className="mt-4">
                                    <button onClick={handleCheckOut}
                                        className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold">Order Summary
                            </h2>
                            <div className="mt-8">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src={photo_URL} alt="image"
                                                className="w-60" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">{title}</h2>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                            <span className="text-red-600">Price</span> ${price}
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span className="ml-2">${price}</span>
                            </div>

                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span className="ml-2">${price}</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                As a premium member you are getting ${price} discount for this course. You will enjoy discount until further declaration.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CheckOut;