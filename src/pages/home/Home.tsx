import { useEffect, useState } from "react";
// import Loading from "../loading/Loading";
import { Bell, Search } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules';
import Img from "../../assets/image/image 7.png"
import "swiper/css";
import "swiper/css/pagination";
import { IoBasket } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import IconButton from "../../lib/widgets/icon-button/IconButton";
import Notification from "../../lib/widgets/notification/Notification";
import { useDispatch } from "react-redux";
import { CartItem } from "../../app/@types/GlobalTypes";
import { addToCart } from "../../app/slice/countSlice";
import { addProduct } from "../../app/slice/wishesSlice";

const categories = [
  { id: 1, name: 'Burger', icon: '🍔' },
  { id: 2, name: 'Pizza', icon: '🍕' },
  { id: 3, name: 'Noodles', icon: '🍜' },
  { id: 4, name: 'Chicken', icon: '🍗' },
  { id: 5, name: 'Vegetarian', icon: '🥗' },
  { id: 6, name: 'Cake', icon: '🍰' },
  { id: 8, name: 'Others', icon: '🍽️' },
];
const promotions = [
  {
    id: 1,
    discount: "30%",
    title: "off from chicken burger",
    bgColor: "from-green-500 to-green-400",
    img: Img
  },
  {
    id: 2,
    discount: "25%",
    title: "off from pizza",
    bgColor: "from-blue-500 to-blue-400",
    img: Img
  },
  {
    id: 3,
    discount: "40%",
    title: "off from salads",
    bgColor: "from-purple-500 to-purple-400",
    img: Img
  }
];

const weeklySpecials = [
  {
    id: 1,
    name: 'Fresh Garden Salad',
    image: Img,
    price: 1.25,
    category: "salat",
    quantity: 0,
  },
  {
    id: 2,
    name: 'Grilled Chicken',
    image: Img,
    price: 5.98,
    category: "BBQ",
    quantity: 0,
  },
  {
    id: 3,
    name: 'Grill',
    image: Img,
    price: 5.98,
    category: "tovuq",
    quantity: 0,
  },
  {
    id: 4,
    name: 'Burger',
    image: Img,
    price: 5.98,
    category: "fassfood",
    quantity: 1,
  },
];



const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleWishes = (id: CartItem) => {
    dispatch(addProduct(id))
    
  }

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product))
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div className="bg-[#191a1f] p-4 min-h-screen text-white">
      <div className="mb-20">

        <header className="flex justify-between items-center gap-4 mb-6">
          <div className="relative">
            <Search className="top-3 left-4 absolute w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your interesting foods..."
              className="bg-gray-800 py-3 pr-4 pl-12 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            />
          </div>
          <div className="flex gap-4">
            <Bell className="w-6 h-6 cursor-pointer" onClick={showDrawer} />
          </div>
        </header>
        <Notification showDrawer={open} onClose={onClose} />

        <div className="mb-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true
            }}
            className="w-full"
          >
            {promotions.map(promo => (
              <SwiperSlide key={promo.id}>
                <div className={`bg-gradient-to-r flex ${promo.bgColor} justify-between  p-4 rounded-[32px]`}>
                  <div>
                    <h2 className="mb-2 font-bold text-4xl">{promo.discount}</h2>
                    <p className="text-xl">{promo.title}</p>
                  </div>
                  <img src={promo.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-4 mb-5">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex flex-col items-center hover:bg-gray-700 p-3 rounded-lg"
              >
                <span className="mb-1 text-2xl">{category.icon}</span>
                <span className="text-xs">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="gap-6 grid grid-cols-2 mt-14">
            {weeklySpecials.map((item) => (
              <div key={item.id} className="relative flex flex-col justify-between bg-white mb-10 p-4 rounded-[28px] w-[175px] h-[187px]">
                <div  className="flex justify-center rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="-top-12 absolute"
                  />
                </div>
                <span className="top-14 -right-[45px] -z-[1] absolute font-semibold text-red-100 text-3xl rotate-[270deg] transform">PROMO</span>
                <div className="flex items-end gap-2">
                  <p className="font-cartFont font-semibold text-black">{item.name}</p>
                  <div className="flex flex-col">
                    <p className="left-2 relative text-green-200">${item.price}</p>
                    <div className="flex">
                      <IconButton className="group" onClick={() => handleAddToCart(item)}>
                        <IoBasket className="group-hover:text-white text-[18px] text-green-200" />
                      </IconButton>
                      <IconButton className="group" onClick={() => handleWishes(item)}>
                        <FaHeart className="group-hover:text-white text-[18px] text-green-200" />
                      </IconButton>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
