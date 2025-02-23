import ProfileImgUpload from "../../lib/components/my-profile-image-upload/ProfileImgUpload";

const MyProfile = () => {

    return (
        <div className="bg-[#191a1f] w-full min-h-screen text-white">
            <div className="mb-16">
                <header className="px-2 py-6 text-center">
                    <h1 className="font-semibold text-xl text-center">My Profile</h1>
                </header>
                <ProfileImgUpload />
            </div>
        </div>
    )
}

export default MyProfile
