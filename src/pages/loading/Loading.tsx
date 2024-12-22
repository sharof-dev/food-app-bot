import RightSvg from "../../assets/icon/right.svg"
import LoadingCss from "./Loading.module.css"
const Loading = () => {
  return (
    <div className={`h-screen w-full bg-cover text-white relative ${LoadingCss.loading_bg_img}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-50">
        <div className="flex flex-col justify-end h-screen">
          <div className="px-5">
            <h1 className="font-bold text-[#02C543] text-[50px] text-center">Welcome to foodnies!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <button className={`flex bg-green-500 hover:bg-green-600 shadow-lg mt-6 mb-6 py-2  ${LoadingCss.btn}  w-[275px] text-[20px] text-center text-lg text-white self-end`}>
           <img src={RightSvg} alt="" /> Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Loading
