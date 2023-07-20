const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div>
                <div className="left-content">
                    <div>
                        <span>Follow me on:</span>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/joakim-ottosson/" target="_blank">LinkedIn</a></li>
                            <li><a href="https://github.com/devjoppe" target="_blank">Github</a></li>
                            <li><a href="https://codepen.io/Max3er" target="_blank">Codepen</a></li>
                        </ul>
                    </div>
                    <div>
                        <span>Built with:</span>
                        <ul>
                            <li><a href="https://react.dev/" target="_blank">React</a></li>
                            <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
                            <li><a href="https://app.netlify.com/" target="_blank">Netlify</a></li>
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