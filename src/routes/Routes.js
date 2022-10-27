import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../components/pages/Blogs/Blogs';
import CheckOut from '../components/pages/CheckOut/CheckOut';
import CourseDetails from '../components/pages/CourseDetails/CourseDetails';
import Courses from '../components/pages/Courses/Courses';
import CoursesSideBar from '../components/pages/CoursesSideBar/CoursesSideBar';
import Error from '../components/pages/Error/Error';
import FAQ from '../components/pages/FAQ/FAQ';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login/Login';
import Register from '../components/pages/Login/Register/Register';
import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://e-learning-hero-server-marahim34.vercel.app/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('https://e-learning-hero-server-marahim34.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://e-learning-hero-server-marahim34.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
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
            },
            {
                path: '/sidebar',
                loader: () => fetch('https://e-learning-hero-server-marahim34.vercel.app/courses'),
                element: <CoursesSideBar></CoursesSideBar>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://e-learning-hero-server-marahim34.vercel.app/checkout/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])
