import { FC } from "react"
import { ButtonProps } from "../../shared/types/GlobalTypes"


const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="bg-green-200 hover:bg-green-100 rounded-full w-[370px] h-[60px] text-white"
        >
            {children}
        </button>
    )
}

export default Button
