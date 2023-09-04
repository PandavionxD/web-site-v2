import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { FloatingNavbar } from "../components/FloatingNavbar"

export const LayoutPublic = () => {
  return (
    <div className=" dark:bg-black bg-white transition-all duration-700 min-h-screen ">
    <Navbar/>
    <main className="container mt-3 min-h-[calc(100vh-7rem)] " >
    <Outlet/>
    <FloatingNavbar/>
    </main>
    </div>
    )
}
