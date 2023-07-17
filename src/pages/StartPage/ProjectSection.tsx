import React from "react";

// JSON data
import projects from '../../data/projects.json'

// Components
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";

export interface sectionInfoInt {
    id: number,
    title: string,
    kicker: string,
    extra: object[],
    user: string
}

interface IProp {
    sectionInfo: sectionInfoInt
}

const ProjectSection:React.FC<IProp> = ({sectionInfo}) => {

    return (
        <section className="light-shade">
            <div className="section-content-wrapper">
                {sectionInfo &&
                    <div>
                        <div>
                            <h2>{sectionInfo.title}</h2>
                        </div>
                        <div>
                            <span className="kicker">
                                {sectionInfo.kicker}
                            </span>
                        </div>
                    </div>
                }
                <div>
                    {projects && projects.map(project => (
                            <ProjectCard key={project.title} project={project} shade={project.bg_color}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection