import { FaCoffee, FaReact, FaJsSquare, FaServer, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="footer-wrapper">
                <div>
                    <div className="left-content">
                        <div>
                            <span>Visit me on</span>
                            <div className="footer-linklist">
                                <div className="link-items"><FaLinkedin /> <a href="https://www.linkedin.com/in/joakim-ottosson/" target="_blank">LinkedIn</a></div>
                                <div className="link-items"><FaGithub /> <a href="https://github.com/devjoppe" target="_blank">Github</a></div>
                                <div className="link-items"><FaCodepen /><a href="https://codepen.io/Max3er" target="_blank">Codepen</a></div>
                            </div>
                        </div>
                        <div>
                            <span>Built with</span>
                            <div className="footer-linklist">
                                <div className="link-items"><FaReact /> <a href="https://react.dev/" target="_blank">React</a></div>
                                <div className="link-items"><FaJsSquare /> <a href="https://vitejs.dev/" target="_blank">ViteJS</a></div>
                                <div className="link-items"><FaServer /> <a href="https://app.netlify.com/" target="_blank">Netlify</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div>
                        <FaCoffee />
                    </div>
                    <div className="footer-text">
                        Copyright © 2023 Joakim Ottosson. All rights reserved.<br />
                        Fueled by code and coffee
                    </div>
                    <div className="footer-menu-links">
                        <Link to="/">Work</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer