import { useEffect, useState } from "react";
import RightSvg from "../../../assets/icon/RightSvg.tsx"
import "./loading.module.css"
import Loading from "../../loading/Loading.tsx";
import bgImg from "@/assets/image/bgImg.png";
import { useNavigate } from "react-router-dom";
const GetStarted = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative bg-cover w-full h-screen text-white loading_bg_img"
      style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-50">
        <div className="flex flex-col justify-end h-screen">
          <div className="px-5">
            <h1 className="font-bold text-[#02C543] text-[50px] text-center">Welcome to foodnies!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <button
            className={`flex bg-green-500 hover:bg-green-600 shadow-lg mt-6 mb-6 rounded-tl-full rounded-bl-full w-[275px] h-[60px] text-[20px] text-center items-center text-lg text-white self-end`}
            onClick={() => navigate('/home')}>
            <RightSvg /> <span className="ml-5">Get Started...!</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
