import { useState } from "react";
import {
  UserOutlined,
  SettingOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import "./profil.css"; // CSS faylini import qilish

const Profile = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);

  const showLogout = () => {
    setLogoutVisible(true);
  };

  const closeLogout = () => {
    setLogoutVisible(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setLogoutVisible(false);
  };

  return (
    <div className="relative bg-[#191A1F] p-4 w-full h-screen">
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
      <div className="space-y-4 custom-scrollbar mt-8 p-1 h-[323px] overflow-y-scroll">
        <div className="flex items-center gap-4 bg-[#01040F] p-3 rounded-[1.125rem] text-white cursor-pointer ps-5">
          <RiShoppingBagLine className="size-4" />
          <span>My Orders</span>
        </div>

        <div className="flex items-center gap-4 bg-[#01040F] p-3 rounded-[1.125rem] text-white cursor-pointer ps-5">
          <UserOutlined className="size-4" />
          <span>My Profile</span>
        </div>

        <div className="flex items-center gap-4 bg-[#01040F] p-3 rounded-[1.125rem] text-white cursor-pointer ps-5">
          <FaMapMarkerAlt className="size-4" />
          <span>Delivery Address</span>
        </div>

        <div className="flex items-center gap-4 bg-[#01040F] p-3 rounded-[1.125rem] text-white cursor-pointer ps-5">
          <MdPayment className="size-4" />
          <span>Payment Methods</span>
        </div>

        <div className="flex items-center gap-4 bg-[#01040F] p-3 rounded-[1.125rem] text-white cursor-pointer ps-5">
          <PhoneOutlined className="size-4" />
          <span>Contact Us</span>
        </div>

        <div className="flex items-center gap-4 bg-[#01040F] p-3 rounded-[1.125rem] text-white cursor-pointer ps-5">
          <LuMessageCircleMore className="size-4" />
          <span>Help & FAQs</span>
        </div>

        <div className="flex items-center gap-4 bg-[#01040F] p-3 rounded-[1.125rem] text-white cursor-pointer ps-5">
          <SettingOutlined className="size-4" />
          <span>Settings</span>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="relative mt-8">
        <button
          onClick={showLogout}
          className="flex justify-between items-center w-full text-white"
        >
          Log Out
          <TbLogout2 className="size-6" />
        </button>
      </div>

      {logoutVisible && (
        <div
          className="bottom-0 left-0 fixed bg-white shadow-lg p-4 rounded-t-lg w-full"
          style={{
            zIndex: 1050, // Ensure it's above the Drawer
          }}
        >
          <p className="text-center">Are you sure you want to log out?</p>
          <div className="flex justify-center gap-8 mt-4">
            <Button onClick={closeLogout}>Cancel</Button>
            <Button type="primary" danger onClick={handleLogout}>
              Yes, logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
