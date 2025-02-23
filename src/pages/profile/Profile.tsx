import {
  UserOutlined,
  SettingOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
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
            src="https://s3-alpha-sig.figma.com/img/f08f/f99a/5860f89adadb94ca2770dfda57df5ae3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9pzRhM0dG-jtsh7HI-APelzC-T1h2mK90ScXpTn7pCW4nM8aoqiRdXRYqMlBVq8m2-cV2U~wILQwxoitjWP52~ztXFPm5rHfpOI~cepAu49XZ0hokysqIVuSP1LsGzRyN-kUYW1qPDWR8b5w3X4E-D98Ot11qn6pQrDzA6LzTSXJULKWRH3Lw-Zff8fsLnaKihh9sWXNr~J09Nqb0JBU8yxEMI6XYGVq2tOIn-gDfRvtsNmXWBvkYNkvmIzqpbtKlO0800F2SBZpZS59b1DrHzLZHTNc1X5q9iBEQDO0BAWjnzwAQvOFZi1zyX76lNVd4-F2jYjl4eo~bviLbUhkw__"
            alt="logo"
          />
          <div className="ml-4">
            <p className="text-[18px] text-white">John K Square</p>
            <p className="text-[12px] text-white">Loremipsum@email.com</p>
          </div>
        </div>
        <div className="space-y-4 mt-8 p-1">
          <button onClick={() => navigate("/my-orders")} className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] text-white cursor-pointer">
            <RiShoppingBagLine className="size-4" />
            <span>My Orders</span>
          </button>

          <button onClick={() => navigate("/my-profile")} className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] text-white cursor-pointer">
            <UserOutlined className="size-4" />
            <span>My Profile</span>
          </button>

          <div className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] text-white cursor-pointer">
            <FaMapMarkerAlt className="size-4" />
            <span>Delivery Address</span>
          </div>

          <div className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] text-white cursor-pointer">
            <MdPayment className="size-4" />
            <span>Payment Methods</span>
          </div>

          <div className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] text-white cursor-pointer">
            <PhoneOutlined className="size-4" />
            <span>Contact Us</span>
          </div>

          <div className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] text-white cursor-pointer">
            <LuMessageCircleMore className="size-4" />
            <span>Help & FAQs</span>
          </div>

          <div className="flex items-center gap-4 bg-[#01040F] p-3 ps-5 rounded-[1.125rem] text-white cursor-pointer">
            <SettingOutlined className="size-4" />
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
