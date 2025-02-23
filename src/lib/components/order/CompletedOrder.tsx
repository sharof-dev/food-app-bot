import { RotateCcw } from "lucide-react"
import KFC from "../../../assets/image/image-removebg-preview (1).png"
import Button from "../../widgets/button/Button"
import { FaRegCheckCircle } from "react-icons/fa"
const ActiveOrder = () => {
    return (
        <div className="px-2">
            <div className="flex gap-4 bg-[#01040f] mb-4 p-3 rounded-[19px] h-[125px] text-white">
                <div className='relative flex justify-center items-center w-[25%] h-20'>
                    <img
                        src={KFC}
                        alt={"item"}
                        className="absolute w-[6rem] h-[5rem] object-cover"
                    />
                </div>
                <div className='flex flex-col justify-between w-[75%]'>
                    <div className="flex justify-between">
                        <div className='flex flex-col gap-1'>
                            <h3 className="font-cartFont">Grill</h3>
                            <p className="text-gray-400 text-sm">29 Noyabr, 12:30pm</p>
                            <p className="flex gap-2 text-gray-400 text-sm">Yetkazilgan <FaRegCheckCircle className="w-4 h-4" /></p>
                        </div>
                        <div className="flex flex-col items-end text-gray-400">
                            <p className="font-semibold text-green-500">$12.4</p>
                            <p className="font-semibold text-green-500">x3</p>
                        </div>

                    </div>
                    <div className="flex justify-between items-end gap-2">
                        <Button className="flex justify-center items-center gap-2 h-[30px] font-semibold text-green-500"> Yana<RotateCcw className="w-4 h-4" /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveOrder
