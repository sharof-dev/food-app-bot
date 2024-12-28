import './bottom.css'
import { BiSolidHome } from "react-icons/bi";
import { IoBasket } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from '../icon-button/IconButton';

const BottomNavigator = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const path = pathname.split('/');
    const isVisible = path.includes("search") ? true : path.length <= 2;
    // const activeTab = (href: string) => {
    //     const isActive = href === '/' ? pathname === href : pathname.includes(href)
    //     return !isActive
    // }
    const activeTab = (href: string) => {
        if (href === '/') {
            return pathname === href;
        }
        return pathname.includes(href);
    };

    return (
        <footer
            className={`${isVisible ? "visible" : "hidden"} bottom-0 fixed flex justify-between items-center bg-gray-500 shadow-lg p-5 rounded-bl-[16px] rounded-br-[16px] w-full h-[80px] bgColor l-0 r-0`}
        >
            <div className="flex flex-col items-center">
                <IconButton
                    onClick={() => navigate('/home')}
                    className={`${activeTab('/home') ? "text-green-200" : "text-gray-400"}`}
                    icon={<BiSolidHome className='w-6 h-5' />}
                />
            </div>
            <div className="flex flex-col items-center">
                <IconButton
                    onClick={() => navigate('basket')}
                    className={`${activeTab('/basket') ? "text-green-200" : "text-gray-400"}`}
                    icon={<IoBasket className='w-6 h-5' />}
                />

            </div>
            <div className="flex flex-col items-center">
                <IconButton
                    onClick={() => navigate('/wishes')}
                    className={`${activeTab('/wishes') ? "text-green-200" : "text-gray-400"}`}
                    icon={<FaHeart className='w-6 h-5' />}
                />

            </div>
            <div className="flex flex-col items-center">
                <IconButton
                    onClick={() => navigate('/profile')}
                    className={`${activeTab('/profile') ? "text-green-200" : "text-gray-400"}`}
                    icon={<CgProfile className='w-6 h-5' />}
                />

            </div>
        </footer>
    )
}

export default BottomNavigator
