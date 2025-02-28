import { useState } from "react";
import ProfileImgUpload from "../../lib/components/my-profile/ProfileImgUpload";
import Input from "../../lib/widgets/Input";
import Button from "../../lib/widgets/button/Button";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

const MyProfile = () => {
    const [birthDate, setBirthDate] = useState<string>("2000-01-01");
    const navigate = useNavigate();

    return (
        <div className="bg-[#191a1f] w-full min-h-screen text-white">
            <div className="pb-16">
                <header className="px-2 py-6 text-center">
                    <button className="left-2 absolute" onClick={() => navigate(-1)}>
                        <FaAngleLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="font-semibold text-xl text-center">My Profile</h1>
                </header>
                <ProfileImgUpload />
                <div className="place-items-center grid mb-16 w-full">
                    <form className="place-items-center grid">
                        <div>
                            <label htmlFor="fullname">Ism Familya:</label><br />
                            <Input
                                id="fullname"
                                type="text"
                                placeholder="Mardiyev Sharofbek"
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="date_birthday">Tug'ilgan yilingiz:</label><br />
                            <Input
                                type="date"
                                id="date_birthday"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="email">Emailingiz:</label><br />
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@gmail.com"
                            /><br />
                        </div>
                        <div>
                            <label htmlFor="phone">Telefon Raqamingiz:</label><br />
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="+998-12-345-67-89"
                            />
                        </div>
                        <Button className="h-[60px]">Profilni O'zgartirish</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
