// Redux
import {useSelector} from "react-redux";

// Interface from Feature
import {isLightRootStateInt} from "../../features/isLight.ts";

// Framer motion
import { useScroll, useSpring, motion } from "framer-motion"

const ScrollIndicator = () => {

    const lightState = useSelector((state:isLightRootStateInt) => state.isLight.light)

    // Init framer motion for the progressbar
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)

    /* const [scroll, setScroll] = useState<number>(0)

    const onScroll = () => {
        const scrolled = document.documentElement.scrollTop
        const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollPercent = (scrolled / maxHeight) * 100
        setScroll(scrollPercent)
    }

    window.addEventListener("scroll", onScroll)

    <div className="bar" style={{width: `${scroll}%`}}></div>
    
    */

    return(
        <div className={`${!lightState ? "dark-shade" : "light-shade"} scroll-indicator`}>
            <motion.div className="bar" style={{ scaleX }} />
        </div>
    )
}

export default ScrollIndicator