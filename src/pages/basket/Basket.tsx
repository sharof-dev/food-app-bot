import { ArrowLeft, Trash2, Plus, Minus, Menu } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
    quantity: 1
  },
  {
    id: 2,
    name: 'BBQ Chicken',
    category: 'BBQ',
    price: 11.98,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
    quantity: 1
  },
  {
    id: 3,
    name: 'Prawn Yellow Rice',
    category: 'Seafood',
    price: 7.98,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=300&q=80',
    quantity: 1
  }
];

const Basket = () => {
  const deliveryFee = 2.00;
  const discounts = 0.00;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee - discounts;

  return (
    <div className="bg-gray-900 p-6 min-h-screen text-white">
      <div className='mb-20'>
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6" />
            <h1 className="font-semibold text-xl">My Cart</h1>
          </div>
          <Menu className="w-6 h-6" />
        </header>

        {/* Cart Items */}
        <div className="space-y-4 mb-16 px-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl w-20 h-20 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.category}</p>
                <p className="font-semibold text-green-500">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button className="text-gray-400 hover:text-red-500">
                  <Trash2 className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 bg-gray-800 px-2 py-1 rounded-lg">
                  <button className="text-gray-400 hover:text-green-500">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button className="text-gray-400 hover:text-green-500">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
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