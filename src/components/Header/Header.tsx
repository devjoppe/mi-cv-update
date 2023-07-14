import Logo from '../../assets/images/jo-logo.svg'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="nav-wrapper">
                <nav>
                    <button className="selected">.projects</button>
                    <button>.about</button>
                    <button>.contact</button>
                </nav>
            </div>
        </div>
    )
}

export default Header