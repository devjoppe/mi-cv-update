// Page data
import about from '../../data/aboutpage.json'

// Sections
import MeSection from "./MeSection.tsx";
import WorkSection from "./WorkSection.tsx";

// Redux
import {useDispatch} from "react-redux";
import {changeLight} from "../../features/isLight.ts";

// React
import {useEffect} from "react";

const AboutPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeLight(true))
    }, [dispatch]);

    return(
        <>
            <section className="light-shade top-section">
                <div className="section-content-wrapper" data-aos="zoom-out" data-aos-duration="1500">
                    {about && about.filter(item => item.id === 1).map(data  => (
                        <div key={data.id}>
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
            <MeSection data={about[1]}/>
            <WorkSection data={about[3]}/>
        </>
    )
}

export default AboutPage