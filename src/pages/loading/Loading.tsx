import { Circles } from "react-loader-spinner"
import LoadingLogo from "../../assets/icon/loading_logo.tsx"
const Loading = () => {
  return (
    <div className={`h-screen w-full bg-cover text-white relative`}>
      <div className="flex flex-col justify-center items-center gap-5 w-full h-[80vh] font-logoTitle text-5xl">
        <LoadingLogo />
        <h1 className="font-logoTitle">Food<span className="font-logoTitle text-[#02C543]">ies</span></h1>
      </div>
      <div className="place-items-center grid h-[20vh]">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  )
}

export default Loading
