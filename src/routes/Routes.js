import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../components/pages/Blogs/Blogs';
import Courses from '../components/pages/Courses/Courses';
import FAQ from '../components/pages/FAQ/FAQ';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login/Login';
import Register from '../components/pages/Login/Register/Register';
import Main from '../layout/Main';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
