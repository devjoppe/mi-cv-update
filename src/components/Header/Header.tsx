import Logo from '../../assets/images/jo-logo.svg'

// React Router
import {NavLink} from "react-router-dom";

// React
import {useState} from "react";

const Header = () => {

    const [isLight, setIsLight] = useState<boolean>(false)

    console.log("isLight: ", isLight)

    return (
        <header>
            <div className={`${isLight ? "light-shade" : "dark-shade"} header-wrapper`} >
                <div className="logo-wrapper">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="nav-wrapper">
                    <nav>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : "standard" } onClick={() => setIsLight(false)}>
                            projects
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "standard" } onClick={() => setIsLight(true)}>
                            about
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "standard" } onClick={() => setIsLight(false)}>
                            contact
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header