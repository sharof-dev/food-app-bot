import { useState } from "react";
import { Drawer, Button } from "antd";
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

const Profile = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

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
    <div className="p-4 bg-[#191A1F] w-full h-screen relative">
      <button
        onClick={showDrawer}
        className=" rounded-lg bg-[#01040F] text-white w-full h-[2.5rem]"
      >
        Open Profile
      </button>

      {/* sdsds */}

      <Drawer
        placement="right"
        onClose={closeDrawer}
        closeIcon={null}
        visible={drawerVisible}
        width={260}
        className="bg-orange-500 text-white"
        style={{
          background: "#01040F",
          borderRadius: "67px 0px 0px 67px",
        }}
      >
        <div className="flex items-center gap-2 mt-5">
          <img
            className=" w-10 h-10 rounded-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/f08f/f99a/5860f89adadb94ca2770dfda57df5ae3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9pzRhM0dG-jtsh7HI-APelzC-T1h2mK90ScXpTn7pCW4nM8aoqiRdXRYqMlBVq8m2-cV2U~wILQwxoitjWP52~ztXFPm5rHfpOI~cepAu49XZ0hokysqIVuSP1LsGzRyN-kUYW1qPDWR8b5w3X4E-D98Ot11qn6pQrDzA6LzTSXJULKWRH3Lw-Zff8fsLnaKihh9sWXNr~J09Nqb0JBU8yxEMI6XYGVq2tOIn-gDfRvtsNmXWBvkYNkvmIzqpbtKlO0800F2SBZpZS59b1DrHzLZHTNc1X5q9iBEQDO0BAWjnzwAQvOFZi1zyX76lNVd4-F2jYjl4eo~bviLbUhkw__"
            alt="logo"
          />
          <div className="ml-4">
            <p className="text-white text-[18px]">John K Square</p>
            <p className="text-white text-[12px]">Loremipsum@email.com</p>
          </div>
        </div>
        <div className="space-y-4 mt-8">
          <div className="flex items-center space-x-4 cursor-pointer">
            <button className=" bg-[#02C543]  rounded-full w-8 h-8   flex items-center justify-center">
              <RiShoppingBagLine className=" size-4" />{" "}
            </button>
            <span>My Orders</span>
          </div>
          <hr />
          <div className="flex items-center space-x-4 cursor-pointer">
            <button className=" bg-[#02C543]  rounded-full w-8 h-8   flex items-center justify-center">
              <UserOutlined className=" size-4" />
            </button>
            <span>My Profile</span>
          </div>
          <hr />
          <div className="flex items-center space-x-4 cursor-pointer">
            <button className=" bg-[#02C543]  rounded-full w-8 h-8   flex items-center justify-center">
              <FaMapMarkerAlt className=" size-4" />
            </button>
            <span>Delivery Address</span>
          </div>
          <hr />
          <div className="flex items-center space-x-4 cursor-pointer">
            <button className=" bg-[#02C543]  rounded-full w-8 h-8   flex items-center justify-center">
              <MdPayment className=" size-4" />
            </button>
            <span>Payment Methods</span>
          </div>
          <hr />
          <div className="flex items-center space-x-4 cursor-pointer">
            <button className=" bg-[#02C543]  rounded-full w-8 h-8   flex items-center justify-center">
              <PhoneOutlined className=" size-4" />
            </button>
            <span>Contact Us</span>
          </div>
          <hr />
          <div className="flex items-center space-x-4 cursor-pointer">
            <button className=" bg-[#02C543]  rounded-full w-8 h-8   flex items-center justify-center">
              <LuMessageCircleMore className=" size-4" />
            </button>
            <span>Help & FAQs</span>
          </div>
          <hr />
          <div className="flex items-center space-x-4 cursor-pointer">
            <button className=" bg-[#02C543]  rounded-full w-8 h-8   flex items-center justify-center">
              <SettingOutlined className=" size-4" />
            </button>
            <span>Settings</span>
          </div>
          <hr />
        </div>

        <div className="mt-6 relative">
          <button
            onClick={showLogout}
            className="flex items-center justify-center gap-5"
          >
            <TbLogout2 className=" size-6" />
            Log Out
          </button>
        </div>
      </Drawer>
      {logoutVisible && (
        <div
          className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg rounded-t-lg"
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
