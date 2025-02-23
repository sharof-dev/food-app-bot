import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import { addToCart, removeItem } from '../../app/slice/countSlice';
import IconButton from '../../lib/widgets/icon-button/IconButton';
import { IoBasket } from 'react-icons/io5';
import { CartItem } from '../../app/@types/GlobalTypes';

const Wishes = () => {
  const cartItems = useSelector((state: RootState) => state.wishesList.items)
  const dispatch = useDispatch();
  const handleProduct = (product: CartItem) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="flex flex-col justify-between bg-[#191a1f] min-h-screen text-white">
      <div className='mb-16'>
        <header className="px-2 py-6">
          <h1 className="font-semibold text-xl text-center">Saqalangan Ovqatlar</h1>
        </header>

        {/* Cart Items */}
        <div className="gap-4 mb-5 p-2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-[#01040f] mb-4 p-3 rounded-[19px] h-[125px]">
                <div className='relative flex justify-center items-center w-[25%] h-20'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute w-[6rem] h-[5rem] object-cover"
                  />
                </div>
                <div className='flex flex-col justify-between w-[75%]'>
                  <div className="flex justify-between">
                    <div className='flex flex-col'>
                      <h3 className="font-[20px] font-cartFont">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.category}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 onClick={() => dispatch(removeItem(item.id))} className="-top-3 relative justify-self-end w-7 h-7 l-5" />
                    </button>

                  </div>
                  <div className="flex justify-between items-end gap-2">
                    <p className="font-semibold text-green-500">${item.price.toFixed(2)}</p>
                    <IconButton className="group left-2 relative" onClick={() => handleProduct(item)}>
                      <IoBasket className="group-hover:text-white w-7 h-7 text-green-200" />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className='text-white text-center'>No Product &nbsp; ):</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Wishes
