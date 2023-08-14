// Graphics
// import Logo from '../../assets/images/jo-logo.svg'
import logoLightMode from '../../assets/images/jo-logo-2x_exSvg.png'
import logoDarkMode from '../../assets/images/jo-logo-dark-2x_exSvg.png'
import darkMode from '../../assets/icons/dark-theme.svg'

// React Router
import {NavLink} from "react-router-dom";

// Redux
import {useDispatch, useSelector} from "react-redux";

// Interface
import {isLightRootStateInt} from "../../features/isLight.ts";
import {changeMode, isModeRootStateInt} from "../../features/isMode.ts";

const Header = () => {

    const lightState = useSelector((state:isLightRootStateInt) => state.isLight.light)
    const themeState = useSelector((state:isModeRootStateInt) => state.isMode.mode)
    const setMode = useDispatch()

    return (
        <header>
            <div className={`${lightState ? "light-shade" : "dark-shade"} header-wrapper`} >
                <div className="logo-wrapper">
                    <img src={
                        themeState === "lightmode" ? logoLightMode : logoDarkMode
                    } alt="Logo" />
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
                    <button onClick={() => {
                        themeState === "lightmode" ? setMode(changeMode("darkmode")) : setMode(changeMode("lightmode"))
                    }}>
                        <img className={`icon ${themeState}`} src={darkMode} alt="Dark mode" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header