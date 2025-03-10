import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Payments from "../../pages/payments/Payments";
const Home = lazy(() => import("../../pages/home/Home"))
const OrderForFood = lazy(() => import("../../pages/order-for-food/OrderForFood"))
const GetStarted = lazy(() => import("../../pages/started/GetStarted"))
const EasePayment = lazy(() => import("../../pages/easy-payment/EasePayment"))
const FastDelivery = lazy(() => import("../../pages/fast-delivery/FastDelivery"))
const Wishes = lazy(() => import("../../pages/wishes/Wishes"))
const Basket = lazy(() => import("../../pages/basket/Basket"))
const Profile = lazy(() => import("../../pages/profile/Profile"))
const Orders = lazy(() => import("../../pages/my-order/Orders"))
const MyProfile = lazy(() => import("../../pages/my-profile/MyProfile"))
export const AppRoutes: React.FC = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/order-for-food" element={<OrderForFood />} />
            <Route path="/easy-payment" element={<EasePayment />} />
            <Route path="/fast-delivery" element={<FastDelivery />} />
            <Route element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/wishes" element={<Wishes />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/my-orders" element={<Orders />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/payments-page" element={<Payments />} />
                <Route path="/basket" element={<Basket />} />
            </Route>
        </Routes>
    </Router>
}