const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div>
                <div className="left-content">
                    <div>
                        <span>Follow me on:</span>
                        <ul>
                            <li><a href="">LinkedIn</a></li>
                            <li><a href="">Github</a></li>
                            <li><a href="">Codepen</a></li>
                        </ul>
                    </div>
                    <div>
                        <span>Built with:</span>
                        <ul>
                            <li><a href="">React</a></li>
                            <li><a href="">Vite</a></li>
                            <li><a href="">Netlify</a></li>
                        </ul>
                    </div>
                </div>
                <div className="right-content">
                    <a href="">Work.</a>
                    <a href="">About.</a>
                    <a href="">Contact.</a>
                </div>
            </div>
            <div className="copyright">
                <div>
                    Copyright © 2023 Joakim Ottosson. All rights reserved.
                </div>
                <div>
                    Fulled by code and coffee
                </div>
            </div>
        </div>
    )
}

export default Footer