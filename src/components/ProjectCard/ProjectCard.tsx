// React
import React from "react";

// Icons
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

// Interface
import {projectInt} from "../../interfaces/projectCardInt.ts";


interface IProp {
    project: projectInt
    shade: string | undefined
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

                        <button className="icon-button" onClick={() => goToPage(project.github)}>Code <FaGithub /></button>
                        <button className="icon-button" onClick={() => goToPage(project.solution)}>Solution <FaExternalLinkSquareAlt /></button>
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