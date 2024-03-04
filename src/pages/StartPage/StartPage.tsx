// Page data
import start from '../../data/startpage.json'
import linkData from '../../data/linklist.json'

// Sections
import ProjectSection from "./ProjectSection.tsx";
import FreelanceSection from "./FreelanceSection.tsx";
import UseSection from "./UseSection.tsx";

// Redux - Change light - useDispatch for changing value, useSelector for accessing.
import {useDispatch} from "react-redux";
import {changeLight} from "../../features/isLight.ts"; // Redux feature to change light
// import {isModeRootStateInt} from "../../features/isMode.ts";

// Background images for the top section
// import darkBg from '../../assets/images/jotto-background-smoke-dark.webp'
// import lightBg from '../../assets/images/jotto-background-smoke-light.webp'
import sectionBg from '../../assets/images/vintage_comp-start-hero.webp'

// React typed
import { ReactTyped } from "react-typed"

// React
import {useEffect} from "react";
import SpecialSection from './SpecialSection.tsx';
// import {Link} from "react-router-dom";

const StartPage = () => {

    const dispatch = useDispatch()
    // const themeState = useSelector((state:isModeRootStateInt) => state.isMode.mode)

    useEffect(() => {
        dispatch(changeLight(false))
    }, [dispatch]);

const computerText = `start.filter(item => item.id === 1)
.map(data  => 
    &lt;div key={data.id}&gt;
        &lt;h1&gt;{data.title}&lt;/h1&gt;
        &lt;span className="subtitle"&gt;
            {data.kicker}
        &lt;/span&gt;
    &lt;/div&gt;
)`

    return(
        <>
            <section className="dark-shade top-section">
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    width: '100%',
                    height: 'inherit',
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <div data-aos="zoom-out" data-aos-duration="1500" style={{
                        position: 'relative',
                        display: 'block',
                        height: '520px',
                        width: '25%',
                        // backgroundColor: 'red',
                        backgroundImage: `url(${sectionBg})`,
                        backgroundSize: '500px',
                        backgroundPosition: '0% 100%',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div style={{
                            position: 'relative',
                            right: '-90px',
                            top: '70px',
                            width: '320px',
                            // backgroundColor: 'blueviolet',
                            color: 'white',
                        }}>
                            <code style={{ wordWrap: 'break-word', textShadow: '0 0 5px #fff'}}>
                                {
                                    <ReactTyped strings={[computerText]} typeSpeed={50} cursorChar='&#x275A;' loop style={{ whiteSpace: 'pre-line', fontSize: '12px' }} />
                                }
                            </code>
                        </div>
                    </div>
                </div>
                <div className="section-content-wrapper" data-aos="zoom-in" data-aos-duration="1500">
                    { start && start.filter(item => item.id === 1).map(data  => (
                        <div key={data.id}>
                            { /* <span className="welcome-text">Hello! 👋 My name is <Link to={'/about'}>Joakim</Link> and I am a</span> */}
                            <h1>{data.title}</h1>
                            <span className="subtitle">
                                {data.kicker}
                            </span>
                            { /* <span className="quote-by">
                                - {data.user}
                            </span> */ }
                        </div>
                    )) }
                </div>
            </section>
            <SpecialSection />
            <ProjectSection sectionInfo={start[1]} />
            <FreelanceSection sectionInfo={start[2]} />
            <UseSection sectionInfo={start[3]} linkList={linkData} />
        </>
    )
}

export default StartPage