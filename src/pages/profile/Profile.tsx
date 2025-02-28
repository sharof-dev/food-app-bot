import {
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import "./profil.css"; 
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate()
  return (
    <div className="relative bg-[#191A1F] p-4 w-full min-h-screen">
      <div className="mb-20">
        <div className="flex flex-col items-center gap-2 mt-5">
          <img
            className="rounded-full w-10 h-10 object-cover"
            src="https://picsum.photos/40/40?random=2"
            alt="logo"
          />
          <div className="ml-4">
            <p className="text-[18px] text-white">John K Square</p>
            <p className="text-[12px] text-white">Loremipsum@email.com</p>
          </div>
        </div>
        <div className="space-y-4 mt-8 p-1">
          <button onClick={() => navigate("/my-orders")} className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] w-full text-white cursor-pointer">
            <RiShoppingBagLine className="size-4" />
            <span>My Orders</span>
          </button>

          <button onClick={() => navigate("/my-profile")} className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] w-full text-white cursor-pointer">
            <UserOutlined className="size-4" />
            <span>My Profile</span>
          </button>

          <button onClick={() => navigate('/payments-page')} className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] w-full text-white cursor-pointer">
            <MdPayment className="size-4" />
            <span>Mening Kartarim</span>
          </button>

          <div className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] text-white cursor-pointer">
            <PhoneOutlined className="size-4" />
            <span>Contact Us</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
