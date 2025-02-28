import { FC } from "react"
import { InputProps } from "../../app/@types/GlobalTypes"

const Input: FC<InputProps> = ({ id, type, className, placeholder, onChange, value }) => {
    console.log(value);

    return (
        <input
            id={id}
            type={type}
            className={`px-4 py-2 w-[323px] mb-5 h-12 rounded-lg bg-[#01040f] text-white outline-none ${className}`}
            placeholder={type !== "date" ? placeholder : ""}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
