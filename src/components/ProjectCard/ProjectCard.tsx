// React
import React from "react";

// Interface
import {projectInt} from "../../interfaces/projectCardInt.ts";

interface IProp {
    project: projectInt
    shade: string
}

const ProjectCard:React.FC<IProp> = ({project, shade}) => {

    const goToPage = (url:string) => {
        window.open(url)
    }
    const CardType = () => {
        if (project.type  === "card-small" || project.type ===  "card-large") {
            return (
                <>
                { project.image && <img src={project.image} alt={project.title}/> }
                <div className={`card-content ${project.type}`}>
                    <h3>{project.title}</h3>
                    <div className="tags">
                        { project.tags && project.tags.map(tag => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                    <p>{project.description}</p>
                    <div className="card-buttons">
                        <button onClick={() => goToPage(project.github)}>Project on Github</button>
                        <button onClick={() => goToPage(project.solution)}>View solution</button>
                    </div>
                </div>
                </>
            )
        }
        if (project.type === "quote") {
            return (
                <div className={`card-content ${project.type}`}>
                    <span>{project.description}</span>
                </div>
            )
        }
    }

    return(
        <div className={`project-card-wrapper ${shade}`}>
            <CardType />
        </div>
    )
}

export default ProjectCard