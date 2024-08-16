import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Container/Navbar";
import CardContainer from "./Container/CardContainer"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Offers from "./Container/Offers";
import Home from "./Container/Home";
import ShimmerContainer from "./Container/ShimmerContainer";

const Body = () => {
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
            
        </>
    );

};

const ram=createBrowserRouter([
    {
    path :"/",
    element:<Body/>,
    children:[
        {
            path:'/',
            element:<CardContainer/>
        },
        {
            path:"/offers",
            element:<Offers/>
        },
        
        
    ]}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ram}/>);
