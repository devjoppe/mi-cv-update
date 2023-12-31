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

    window.addEventListener("scroll", onScroll)

    return(
        <div className={`${!lightState ? "dark-shade" : "light-shade"} scroll-indicator`}>
            <div className="bar" style={{width: `${scroll}%`}}></div>
        </div>
    )
}

export default ScrollIndicator