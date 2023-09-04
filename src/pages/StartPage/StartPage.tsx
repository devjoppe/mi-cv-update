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

// React
import {useEffect} from "react";
import {Link} from "react-router-dom";

const StartPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeLight(false))
    }, [dispatch]);

    return(
        <>
            <section className="dark-shade top-section">
                <div className="section-content-wrapper" data-aos="zoom-out" data-aos-duration="1500">
                    {start && start.filter(item => item.id === 1).map(data  => (
                        <div key={data.id}>
                            <span className="welcome-text">Welcome! 👋 My name is <Link to={'/about'}>Joakim</Link> and I am a</span>
                            <h1>{data.title}</h1>
                            <span className="subtitle">
                                {data.kicker}
                            </span>
                            { /* <span className="quote-by">
                                - {data.user}
                            </span> */ }
                        </div>
                    ))}
                </div>
            </section>
            <ProjectSection sectionInfo={start[1]} />
            <FreelanceSection />
            <UseSection sectionInfo={start[3]} linkList={linkData} />
        </>
    )
}

export default StartPage