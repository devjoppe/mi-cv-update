// Graphics
import Logo from '../../assets/images/jo-logo.svg'
import darkMode from '../../assets/icons/dark-theme.svg'

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
                    <button>
                        <img className="darkmode-icon" src={darkMode} alt="Dark mode" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header