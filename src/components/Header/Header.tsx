import Logo from '../../assets/images/jo-logo.svg'

// React Router
import {NavLink} from "react-router-dom";

// Redux
import {useSelector} from "react-redux";

// Interface
import {isLightRootStateInt} from "../../features/isLight.ts";

const Header = () => {

    const lightState = useSelector((state:isLightRootStateInt) => state.isLight.light)

    return (
        <header>
            <div className={`${lightState ? "light-shade" : "dark-shade"} header-wrapper`} >
                <div className="logo-wrapper">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="nav-wrapper">
                    <nav>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : "standard" } >
                            projects
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "standard" } >
                            about
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "standard" } >
                            contact
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header