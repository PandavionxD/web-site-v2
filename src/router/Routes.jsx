import { createBrowserRouter } from "react-router-dom";
import {  AboutPage, ContactPage, ErrorPage, HomePage, PortfolioPage } from "../pages";
import { LayoutPublic } from "../Layout/LayoutPublic";
import { ServicePage } from "../pages/ServicePage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPublic />,
        errorElement: <ErrorPage/>,
        children:[
            {
                index:true,
                element: <HomePage />
            },
            {
                path:'/about',
                element:<AboutPage />
            },
            {
                path:'/contact',
                element:<ContactPage />
            },
            {
                path:'/services',
                element:<ServicePage />
            },
            {
                path:'/portfolio',
                element:<PortfolioPage />
            },
        ]
    }
])