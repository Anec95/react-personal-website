import { Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar"

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout