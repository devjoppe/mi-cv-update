// Page data
import start from '../../data/startpage.json'
import linkData from '../../data/linkList.json'

// Sections
import ProjectSection from "./ProjectSection.tsx";
import FreelanceSection from "./FreelanceSection.tsx";
import UseSection from "./UseSection.tsx";

// Redux - Change light - useDispatch for changing value, useSelector for accessing.
import {useDispatch} from "react-redux";
import {changeLight} from "../../features/isLight.ts"; // Redux feature to change light

// React
import {useEffect, useState} from "react";

// Builder
import {BuilderComponent, builder} from "@builder.io/react";

// API
builder.init(import.meta.env.VITE_API_KEY as string)

const StartPage = () => {

    const [heroContent, setHeroContent] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        // Redux useDispatch
        dispatch(changeLight(false))

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
            <section className="dark-shade top-section">
                <div className="section-content-wrapper" data-aos="zoom-out" data-aos-duration="1500">
                    {start && start.filter(item => item.id === 1).map(data  => (
                        <div key={data.id}>
                            <h1>{data.title}</h1>
                            <span className="subtitle">
                                {data.kicker}
                            </span>
                            <span className="quote-by">
                                - {data.user}
                            </span>
                            { heroContent &&
                                <>
                                    Does it work?
                                    <BuilderComponent model="hero" content={heroContent} />
                                </>
                            }
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