// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../../pages/loading/Loading";
// const Home = lazy(() => import("../../pages/home/Home"))
export const routes = createBrowserRouter([
    {
        path: "/",
        // element: <Home />
        element: <Loading />
    }
])