import { Trash2, Plus, Minus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import { decrement, increment, removeItem } from '../../app/slice/countSlice';

const Basket = () => {
  const deliveryFee = 2.00;
  const discounts = 0.00;

  const cartItems = useSelector((state: RootState) => state.count.items);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee - discounts;
  // const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();



  return (
    <div className="flex flex-col justify-between bg-[1e1e1e] min-h-screen text-white">
      <div className='mb-20'>
        <header className="px-2 py-6 text-center">
          <h1 className="font-semibold text-xl text-center">My Cart</h1>
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
                    <div className="flex items-center gap-3 px-2 py-1 rounded-lg">
                      {item.quantity > 1 && (
                        <button onClick={() => dispatch(decrement(item.id))} className="border-2 hover:border-green-200 border-solid rounded-full hover:text-green-500">
                          <Minus className="w-4 h-4" />
                        </button>
                      )}
                      <span className="opacity-50 w-6 text-xl text-center">x{item.quantity}</span>
                      <button className="border-2 hover:border-green-200 border-solid rounded-full hover:text-green-500" onClick={() => dispatch(increment(item.id))}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className='text-white text-center'>No Product &nbsp; ):</h1>
          )}
        </div>

        {/* Summary */}
        <div className="space-y-4 bg-gray-800 p-6 rounded-t-3xl">
          <div className="space-y-2">
            <div className="flex justify-between text-gray-400">
              <span>Delivery Fee</span>
              <span className="text-green-500">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Total</span>
              <span className="font-semibold text-white">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Discounts</span>
              <span className="text-green-500">${discounts.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Card</span>
              <span>***456</span>
            </div>
          </div>

          <button className="bg-green-500 hover:bg-green-600 py-4 rounded-xl w-full font-semibold text-white transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;