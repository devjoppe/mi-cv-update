import {useState} from "react";

// Redux
import {useSelector} from "react-redux";

// Interface from Feature
import {isLightRootStateInt} from "../../features/isLight.ts";

const ScrollIndicator = () => {

    const [scroll, setScroll] = useState<number>(0)

    const lightState = useSelector((state:isLightRootStateInt) => state.isLight.light)

    const onScroll = () => {
        const scrolled = document.documentElement.scrollTop
        const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollPercent = (scrolled / maxHeight) * 100
        setScroll(scrollPercent)
    }

    console.log("Scroll indicator: IsLight: ", lightState)

    window.addEventListener("scroll", onScroll)

    return(
        <div className="scroll-indicator">
            <div className="bar" style={{width: `${scroll}%`}}></div>
        </div>
    )
}

export default ScrollIndicator