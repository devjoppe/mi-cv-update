// Router dom
import {Outlet} from "react-router-dom";

// Components
import Header from "../components/Header/Header.tsx";

const Layout = () => {
    return(
        <div className="website-container">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout