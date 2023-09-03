import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const LayoutPublic = () => {
  return (
    <>
    <Navbar/>
    <main className="container mt-5" >
    <Outlet/>
    </main>
    </>
    )
}
