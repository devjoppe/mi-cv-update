// Router dom
import {Outlet} from "react-router-dom";

// Components
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

const Layout = () => {
    return(
        <div className="website-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout