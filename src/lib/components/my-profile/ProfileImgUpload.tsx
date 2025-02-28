import React, { useRef, useState } from 'react'
import { GoPerson } from 'react-icons/go';


const ProfileImgUpload = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };
    return (
        <div>
            <div className="relative mx-auto mb-10 w-32 h-32">
                <div
                    onClick={handleClick}
                    className="relative rounded-3xl w-full h-full overflow-hidden cursor-pointer"
                >
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex justify-center items-center bg-gray-100 w-full h-full">
                            <GoPerson />
                        </div>
                    )}
                </div>

                {/* Camera Icon Button */}
                <button
                    onClick={handleClick}
                    className="right-0 bottom-0 absolute bg-green-200 shadow-lg p-2 rounded-full"
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </button>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                />
            </div>
        </div>
    )
}

export default ProfileImgUpload
