import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const LayoutPublic = () => {
  return (
    <>
    <Navbar/>
    <main className="container mt-3 min-h-[calc(100vh-7rem)]" >
    <Outlet/>
    </main>
    </>
    )
}
