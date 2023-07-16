import React from "react";

interface projectInt {
    id: number,
    type: string,
    image: string,
    title: string,
    description: string,
    github: string,
    solution: string,
    extra?: string,
    bg_color?: string
}

interface IProp {
    project: projectInt
    shade: string
}

const ProjectCard:React.FC<IProp> = ({project, shade}) => {
    const CardType = () => {
        if (project.type  === "card-small" || project.type ===  "card-large") {
            return (
                <>
                <img src={project.image} alt={project.title}/>
                <div className={`card-content ${project.type}`}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="card-buttons">
                        <button>Project on Github.</button>
                        <button>View solution.</button>
                    </div>
                </div>
                </>
            )
        }
        if (project.type === "quote") {
            return (
                <div className={`card-content ${project.type}`}>
                    <span className="quote">{project.description}</span>
                </div>
            )
        }
    }

    return(
        <div className={`project-card-wrapper ${shade} ${project.type}`}>
            <CardType />
        </div>
    )
}

export default ProjectCard