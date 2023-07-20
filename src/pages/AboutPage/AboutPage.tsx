// Page data
import about from '../../data/aboutpage.json'

const AboutPage = () => {
    return(
        <>
            <section className="light-shade top-section">
                <div className="section-content-wrapper">
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
        </>
    )
}

export default AboutPage