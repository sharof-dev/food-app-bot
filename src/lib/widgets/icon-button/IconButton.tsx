import { FC } from "react"
import { IconButtonProps } from "../../shared/types/GlobalTypes"

const IconButton: FC<IconButtonProps> = ({ icon, onClick, className, children }) => {
    return (
        <button className={`p-2 rounded-full hover:bg-green-100  ${className}`} onClick={onClick}>
            {icon || children}
        </button>
    )
}

export default IconButton
