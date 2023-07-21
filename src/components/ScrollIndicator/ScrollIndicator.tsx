import {useState} from "react";

const ScrollIndicator = () => {

    const [scroll, setScroll] = useState<number>(0)

    const onScroll = () => {
        const scrolled = document.documentElement.scrollTop
        const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollPercent = (scrolled / maxHeight) * 100
        setScroll(scrollPercent)
    }

    window.addEventListener("scroll", onScroll)

    return(
        <div className="scroll-indicator">
            <div className="bar" style={{width: `${scroll}%`}}></div>
        </div>
    )
}

export default ScrollIndicator