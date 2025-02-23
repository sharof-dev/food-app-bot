import { FC } from "react"
import { ButtonProps } from "../../../app/@types/GlobalTypes"


const Button: FC<ButtonProps> = ({ onClick, children, text, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-green-200 hover:bg-green-100 rounded-full w-full text-white ${className}`}
        >
            {children || text}
        </button>
    )
}

export default Button
