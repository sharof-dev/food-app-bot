import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../../pages/home/Home"))
const GetStarted = lazy(() => import("../../pages/home/started/GetStarted"))
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <GetStarted />
    },
    {
        path: "/home",
        element: <Home />
    }
])