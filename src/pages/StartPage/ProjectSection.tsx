import React from "react";

export interface projectsInt {
    id: number,
    title: string,
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
                    <h2>{projects.title}</h2>
                }
            </div>
        </section>
    )
}

export default ProjectSection