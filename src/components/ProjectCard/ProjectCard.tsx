import React from "react";

interface projectInt {
    id: number,
    type: string,
    image: string,
    title: string,
    description: string,
    github: string,
    solution: string,
    extra?: string
}

interface IProp {
    project: projectInt
    shade: string
}

const ProjectCard:React.FC<IProp> = ({project, shade}) => {
    return(
        <div className={`project-card-wrapper ${shade}`}>
            <img src={project.image} alt={project.title}/>
            <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-buttons">
                    <button>Project on Github.</button>
                    <button>View solution.</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard