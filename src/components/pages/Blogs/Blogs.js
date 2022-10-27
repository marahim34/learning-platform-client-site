import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-center font-semibold text-2xl mt-10'>Welcome to <span className='text-purple-800'>e-Learning Hero!</span> Blog page </h3>
            <h4 className='text-center'>Web designing is brainpower made visible.</h4>
            <div className=' items-start align-top ml-12 md:flex'>
                <div className="card w-96 bg-base-100 shadow-xl mt-10 mr-3">
                    <div className="card-body">
                        <h2 className="card-title">Cross-Origin Resource Sharing (CORS)</h2>
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. </p>
                        <br />
                        <p>   An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.</p>
                        <br />
                        <p>For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-10 mr-3">
                    <div className="card-body flex flex-col align-top justify-start items-start">
                        <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p> Firebase is a set of hosting services for any type of application. Firebase Authentication allow users to sign in to a web application app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in, GitHub Sign-in and Facebook Login. </p>
                        <br />
                        <h4 className='text-2xl'>Alternatives </h4>
                        <img src="https://blog.back4app.com/wp-content/uploads/2018/01/parse-firebase-alternative.png" alt="" />
                        <p> Parse is a mobile and web application development platform acquired by Facebook in 2013. The project was open-sourced in 2016 and has enjoyed the support of a robust developer ecosystem since then. </p>
                        <img src="https://blog.back4app.com/wp-content/uploads/2018/01/back4app-firebase-alternative.png" alt="" />
                        <p> Back4app is an open-source, relational, low-code backend platform. It provides a fully managed backend featuring automated provisioning and scaling of applications, backup and recovery, 24/7 monitoring and alerting, web-based management tools, technical support, and much more. </p>
                        <img src="https://blog.back4app.com/wp-content/uploads/2018/01/backendless-firebase-alternative.png" alt="" />
                        <p> Backendless is a highly scalable mobile Backend-as-a-Service (MBaaS) platform providing multiple valuable features such as visual development, user authentication, live audio, and video streaming. </p>
                        <br />
                        <p>Other alternatives are: <strong>Kuzzle, PubNub, Kumulos, Appwrite, NHost</strong> etc. </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-10 mr-3">
                    <div className="card-body flex flex-col align-top justify-start items-start">
                        <h2 className="card-title">How does the private route work?</h2>
                        <p> Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route/page. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application. </p>
                        <br />
                        <p> Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login. The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login. </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-10">
                    <div className="card-body flex flex-col align-top justify-start items-start">
                        <h2 className="card-title">What is Node? How does Node work?</h2>
                        <p> The Node.js run-time environment includes everything you need to execute a program written in JavaScript. </p>
                        <img src="https://www.freecodecamp.org/news/content/images/2019/06/1_sYPllpcAZLHmpuQSRPuO0Q.png" alt="" />
                        <caption><small>Analogy of how node works</small></caption>
                        <br />
                        <p> Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node. </p>
                        <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept
                        </p>
                        <ul>
                            <li>a. Asynchronous</li>
                            <li>b. Non-blocking I/O</li></ul>
                    </div>
                </div>

                <div>

                    <div className="card-body">
                    </div>                    <p>

                        <br />
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Blogs;