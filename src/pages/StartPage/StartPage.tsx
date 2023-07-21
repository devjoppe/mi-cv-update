// Page data
import start from '../../data/startpage.json'
import linkData from '../../data/linkList.json'

// Sections
import ProjectSection from "./ProjectSection.tsx";
import FreelanceSection from "./FreelanceSection.tsx";
import UseSection from "./UseSection.tsx";

const StartPage = () => {
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