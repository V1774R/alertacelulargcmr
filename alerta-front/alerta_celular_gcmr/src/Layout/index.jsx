import { Outlet } from "react-router-dom"
import { Menu } from "../Components/Menu"
import { GlobalStyle } from "../EstiloGlobal/GlobalStyles"
import { Footer } from "../Components/Footer"

export const Layout = () => {
    return(
        <>
            <GlobalStyle />
            <Menu />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}