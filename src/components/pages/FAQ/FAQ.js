import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">About this project</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    e-Learning Hero is an online based learning platform offering specialized courses in web development. The project incorporates javascript components to ensurer seamless user experience.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">About this website</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    This project is an outcome of react.js. The following languages have been used to complete the project:
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                    </ul>
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Authentication Provider</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Firebase</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;