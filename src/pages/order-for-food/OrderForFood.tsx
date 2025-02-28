import { useNavigate } from "react-router-dom"
import OrderForFoodIcon from "../../assets/icon/OrderForFood"
import Button from "../../lib/widgets/button/Button"

const OrderForFood = () => {
  const navigate = useNavigate()
  return (
    <div className="justify-center p-6 w-full max-w-md min-h-screen">
      <div className="flex justify-center items-center">
        <OrderForFoodIcon />
      </div>
      <h1 className="mt-6 font-medium text-green-200 text-4xl text-center">Order For Food</h1>
      <p className="mt-3 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <div className="flex justify-center mt-3">
        <div className="bg-green-200 rounded-full w-8 h-1"></div>
        <div className="bg-gray-500 ml-2 rounded-full w-1 h-1"></div>
        <div className="bg-gray-500 ml-2 rounded-full w-1 h-1"></div>
      </div>
      <div className="flex justify-center mt-8">
        <Button text="Next" className="h-[60px]" onClick={() => navigate('/easy-payment')} />
      </div>
    </div>
  )
}

export default OrderForFood
