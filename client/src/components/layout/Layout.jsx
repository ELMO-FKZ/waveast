import { Outlet } from "react-router-dom"
import Nav from "../nav/Nav"
import ScrollUp from "../scrollUp/ScrollUp"
import Footer from "../footer/Footer"

function Layout() {

    return (
        <>
        <Nav />
        <Outlet />
        <ScrollUp />
        <Footer />
        </>
    )
}

export default Layout