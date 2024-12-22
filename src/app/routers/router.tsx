import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../../pages/home/Home"))
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
        // element: <Loading />
    }
])