import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { Bell, Search } from 'lucide-react';

const categories = [
  { id: 1, name: 'Burger', icon: '🍔' },
  { id: 2, name: 'Pizza', icon: '🍕' },
  { id: 3, name: 'Noodles', icon: '🍜' },
  { id: 4, name: 'Chicken', icon: '🍗' },
  { id: 5, name: 'Vegetarian', icon: '🥗' },
  { id: 6, name: 'Cake', icon: '🍰' },
  { id: 7, name: 'Beer', icon: '🍺' },
  { id: 8, name: 'Others', icon: '🍽️' },
];

const weeklySpecials = [
  {
    id: 1,
    name: 'Fresh Garden Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=300&q=80',
  },
];



const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-900 p-6 min-h-screen text-white">
      <div className="mb-20">
       
        <header className="flex justify-between items-center mb-6">

          <div className="relative">
            <Search className="top-3 left-4 absolute w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your interesting foods..."
              className="bg-gray-800 py-3 pr-4 pl-12 rounded-full focus:ring-2 focus:ring-green-500 w-full focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <Bell className="w-6 h-6" />
          </div>
        </header>

        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-2xl">
            <h2 className="mb-2 font-bold text-4xl">30%</h2>
            <p className="text-xl">off from chicken burger</p>
          </div>
        </div>

        <div className="gap-4 grid grid-cols-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 p-3 rounded-xl"
            >
              <span className="mb-1 text-2xl">{category.icon}</span>
              <span className="text-xs">{category.name}</span>
            </button>
          ))}
        </div>

        <div>
          <div className="gap-4 grid grid-cols-2">
            {weeklySpecials.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
