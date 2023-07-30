// Page data
import about from '../../data/aboutpage.json'

// Sections
import MeSection from "./MeSection.tsx";
import WorkSection from "./WorkSection.tsx";

// Redux
import {useDispatch} from "react-redux";
import {changeLight} from "../../features/isLight.ts";

// React
import {useEffect, useState} from "react";

// Builder
import {BuilderComponent, builder} from "@builder.io/react";

// API
builder.init(import.meta.env.VITE_API_KEY as string)

const AboutPage = () => {

    const [heroContent, setHeroContent] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        // Redux useDispatch
        dispatch(changeLight(true))

        // Builder -> get data from DB
        builder.get('hero', {
            userAttributes: {
                urlPath: window.location.pathname
            }
        })
            .toPromise().then((data) => {
            setHeroContent(data)
        })

    }, [dispatch]);

    if(heroContent != null) {
        console.log("From builder: ", heroContent)
    }

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
                            <span className="quote-by">
                                - {data.user}
                            </span>
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