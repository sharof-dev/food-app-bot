import Logo from "../../assets/image/bgImg.png"
const Loading = () => {
  return (
    <div className="bg-gradient-to-t bg-[#1e1e1e] to-green-500 h-[100vh] w-full grid place-items-center">
      <img src={Logo} alt="logo" className="block w-full h-full  mx-auto mt-4" />
    </div>
  )
}

export default Loading
