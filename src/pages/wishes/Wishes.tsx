import { Trash2, Plus, Minus } from 'lucide-react';
import Burger from '../../assets/image/image-removebg-preview.png';
import KFC from '../../assets/image/image-removebg-preview (1).png';
import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Prawn mix salad',
    category: 'Seafood',
    price: 5.98,
    image: Burger,
    quantity: 1
  },
  {
    id: 2,
    name: 'BBQ Chicken',
    category: 'BBQ',
    price: 11.98,
    image: KFC,
    quantity: 1
  },
  {
    id: 2,
    name: 'BBQ Chicken',
    category: 'BBQ',
    price: 11.98,
    image: KFC,
    quantity: 1
  },
  {
    id: 2,
    name: 'BBQ Chicken',
    category: 'BBQ',
    price: 11.98,
    image: KFC,
    quantity: 1
  },
  {
    id: 3,
    name: 'Prawn Yellow Rice',
    category: 'Seafood',
    price: 7.98,
    image: Burger,
    quantity: 1
  }
];
const Wishes = () => {
  const deliveryFee = 2.00;
  const discounts = 0.00;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee - discounts;
  const [cartItemCopy, setCartItemCopy] = useState(cartItems)
  const addQuantity = (id: number) => {
    const updatedCart = cartItemCopy.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      } else {
        return cartItem;
      }
    })
    setCartItemCopy(updatedCart)
  }
  const minusQuantity = (id: number) => {
    const updatedCart = cartItemCopy.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      } else {
        return cartItem;
      }
    })
    setCartItemCopy(updatedCart)
  }

  const removeItem = (id: number) => {
    const updatedCart = cartItemCopy.filter((cartItem) => cartItem.id !== id);
    setCartItemCopy(updatedCart);
  }

  return (
    <div className="flex flex-col justify-between bg-[1e1e1e] min-h-screen text-white">
    <div className='mb-16'>
      <header className="px-2 py-6 text-center">
        <h1 className="font-semibold text-center text-xl">My Cart</h1>
      </header>

      {/* Cart Items */}
      <div className="gap-4 mb-5 p-2">
        {cartItemCopy.length > 0 ? (
          cartItemCopy.map((item) => (
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
                    <Trash2 onClick={() => removeItem(item.id)} className="relative -top-3 justify-self-end w-7 h-7 l-5" />
                  </button>

                </div>
                <div className="flex justify-between items-end gap-2">
                  <p className="font-semibold text-green-500">${item.price.toFixed(2)}</p>
                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className='text-center text-white'>No Product &nbsp; ):</h1>
        )}
      </div>
    </div>
  </div>
  )
}

export default Wishes
