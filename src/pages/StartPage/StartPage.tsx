// Page data
import jsonData from '../../data/startpage.json'

// Sections
import ProjectSection from "./ProjectSection.tsx";
import FreelanceSection from "./FreelanceSection.tsx";
import UseSection from "./UseSection.tsx";

const StartPage = () => {
    return(
        <>
            <section className="dark-shade top-section">
                <div className="section-content-wrapper">
                    {jsonData && jsonData.filter(item => item.id === 1).map(data  => (
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
            <ProjectSection sectionInfo={jsonData[1]} />
            <FreelanceSection />
            <UseSection sectionInfo={jsonData[3]} />
        </>
    )
}

export default StartPage