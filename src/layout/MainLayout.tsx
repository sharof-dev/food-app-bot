import { Outlet } from "react-router-dom"
import BottomNavigator from "../lib/widgets/bottom-navigator/BottomNavigator"

const MainLayout = () => {
  return (
    <div className="bg-[#191A1F]">
      <Outlet />
      <BottomNavigator />
    </div>
  )
}

export default MainLayout
