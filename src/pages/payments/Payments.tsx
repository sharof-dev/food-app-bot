import CreditCard from "../../lib/components/card-component/CreditCard"
const Payments = () => {
    return (
        <div className="bg-[#191a1f] min-h-screen">
            <div className="mb-16">
                <header className="px-2 py-6">
                    <h1 className="text-white text-xl text-center">Mening Kartalarim</h1>
                </header>
                {/* <section className="place-items-center grid mt-52 text-white">
                    <div className="relative flex flex-col justify-center items-center gap-3 bg-[#01040f] rounded-full w-[130px] h-[130px] text-white">
                        <FaPlus className="text-2xl" />
                        <h1>Karta Qo'shish</h1>
                    </div>
                </section> */}
                <CreditCard />
            </div>
        </div>
    )
}

export default Payments
