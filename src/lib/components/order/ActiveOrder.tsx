import { Trash2 } from "lucide-react"
import KFC from "../../../assets/image/image-removebg-preview (1).png"
const ActiveOrder = () => {
  return (
    <div className="px-2">
        <div  className="flex gap-4 bg-[#01040f] mb-4 p-3 rounded-[19px] h-[125px] text-white">
                <div className='relative flex justify-center items-center w-[25%] h-20'>
                  <img
                    src={KFC}
                    alt={"item"}
                    className="absolute w-[6rem] h-[5rem] object-cover"
                  />
                </div>
                <div className='flex flex-col justify-between w-[75%]'>
                  <div className="flex justify-between">
                    <div className='flex flex-col'>
                      <h3 className="font-[20px] font-cartFont">Grill</h3>
                      <p className="text-gray-400 text-sm">29 Noyabr, 12:30pm</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 className="-top-3 relative justify-self-end w-7 h-7 l-5" />
                    </button>

                  </div>
                  <div className="flex justify-between items-end gap-2">
                    <p className="font-semibold text-green-500">$12.4</p>
                    <p className="right-3 relative font-semibold text-green-500">x1</p>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default ActiveOrder
