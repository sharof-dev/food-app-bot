import ActiveOrder from "../../lib/components/order/ActiveOrder"
import CompletedOrder from "../../lib/components/order/CompletedOrder"
import { useState } from "react"
import CancelledOrder from "../../lib/components/order/CanccelledOrder"
import Button from "../../lib/widgets/button/Button"
// import ActiveOrder from "../../lib/components/order/ActiveOrder";
interface Order {
    id: number;
    name: string;
    price: number;
    items: number;
    date: string;
    status: 'active' | 'completed' | 'cancelled';
    image: string;
  }
  
  const orders: Order[] = [
    {
      id: 1,
      name: "Strawberry Shake",
      price: 20.00,
      items: 2,
      date: "29 Nov, 01:20 pm",
      status: "cancelled",
      image: "/strawberry-shake.jpg"
    },
    {
      id: 2,
      name: "Chicken Curry",
      price: 50.00,
      items: 2,
      date: "29 Nov, 10:30 pm",
      status: "completed",
      image: "/chicken-curry.jpg"
    },
    {
      id: 3,
      name: "Sushi Wave",
      price: 103.00,
      items: 3,
      date: "02 Nov, 04:01 pm",
      status: "active",
      image: "/sushi.jpg"
    }
  ];

const Orders = () => {
    const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'cancelled'>('active')
    const filteredOrder = orders.filter(order => order.status === activeTab);
    return (
        <div className="bg-[#191a1f] min-h-screen">
            <div className="mb-16">
                <header className="px-2 py-6">
                    <h1 className="text-white text-xl text-center">My Orders</h1>
                </header>
                <section className="flex gap-2 mb-5 px-2">
                    <Button className={`h-[35px] ${activeTab === "active" ? 'bg-transparent border border-green-200' : ''}`}
                        onClick={() => setActiveTab("active")}
                    >Faol</Button>
                    <Button className={`h-[35px] ${activeTab === "completed" ? 'bg-transparent border border-green-200' : ''}`}
                        onClick={() => setActiveTab("completed")}
                    >Yakunlandi</Button>
                    <Button className={`h-[35px] ${activeTab === "cancelled" ? 'bg-transparent border border-green-200' : ''}`}
                        onClick={() => setActiveTab("cancelled")}
                    >Bekor qilingan</Button>
                </section>
                {filteredOrder && filteredOrder.map(order => (
                    <div key={order.id}>
                        {activeTab && order.status === "active" && (
                            <ActiveOrder />
                        )}
                        {activeTab && order.status === "completed" && (
                            <CompletedOrder />
                        )}
                        {order.status === "cancelled" && (
                            <CancelledOrder />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
