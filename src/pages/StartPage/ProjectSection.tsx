import React from "react";

// Components
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";

export interface projectsInt {
    id: number,
    title: string,
    kicker: string,
    extra: object[],
    user: string
}

interface IProp {
    projects: projectsInt
}

const ProjectSection:React.FC<IProp> = ({projects}) => {

    return (
        <section className="light-shade">
            <div className="section-content-wrapper">
                {projects &&
                    <div>
                        <div>
                            <h2>{projects.title}</h2>
                        </div>
                        <div>
                            <span className="kicker">
                                {projects.kicker}
                            </span>
                        </div>
                    </div>
                }
                <div>
                    <ProjectCard />
                </div>
            </div>
        </section>
    )
}

export default ProjectSection