import { FC, lazy } from "react";
import {  HashRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../../pages/home/Home"))
const GetStarted = lazy(() => import("../../pages/home/started/GetStarted"))
export const AppRoutes: React.FC = () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </HashRouter>
}