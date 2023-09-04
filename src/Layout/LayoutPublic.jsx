import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { FloatingNavbar } from "../components/FloatingNavbar"

export const LayoutPublic = () => {
  return (
    <>
    <Navbar/>
    <main className="container mt-3 min-h-[calc(100vh-7rem)]" >
    <Outlet/>
    <FloatingNavbar/>
    </main>
    </>
    )
}
