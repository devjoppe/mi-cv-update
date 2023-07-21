// Page data
import about from '../../data/aboutpage.json'

// Sections
import MeSection from "./MeSection.tsx";

const AboutPage = () => {
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
        </>
    )
}

export default AboutPage