import Logo from '../../assets/images/jo-logo.svg'

// React Router
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className="header-wrapper">
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