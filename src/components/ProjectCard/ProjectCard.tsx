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
}

const ProjectCard:React.FC<IProp> = ({project}) => {
    return(
        <div className="project-card-wrapper">
            <img src={project.image} alt={project.title}/>
            {project.title}
        </div>
    )
}

export default ProjectCard