import { Drawer } from "antd"
import { FC } from "react"
import Img from "../../../assets/image/image 7.png"
import { notificationProps } from "../../../app/@types/GlobalTypes"
import "./notificationcss.css"
const Notification: FC<notificationProps> = ({ showDrawer, onClose }) => {
    return (
        <Drawer
            title="Notification"
            open={showDrawer}
            onClose={onClose}
            className="custom-drawer"
            style={{
                borderRadius: "10px 0 0 10px",
                backgroundColor: "#191a1f",
                color: "#fff"
            }}
        >
            <div className="flex bg-[#1e1e1e] p-1 rounded-2xl">
                <img src={Img} width={80} alt="img" />
                <div className="p-3 text-[12px] text-white">
                    <h2>Arriving soon</h2>
                    <span>Order Id</span>&nbsp;
                    <span>PO1234567</span>
                </div>
            </div>
        </Drawer>
    )
}

export default Notification
