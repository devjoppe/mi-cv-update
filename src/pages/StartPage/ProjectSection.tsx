import React, {useState} from "react";

// JSON data
import projects from '../../data/projects.json'

// Components
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";

// Interface
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";

interface IProp {
    sectionInfo: sectionInfoInt
}

const ProjectSection:React.FC<IProp> = ({sectionInfo}) => {

    const [filteredTags, setFilteredTags] = useState<string[]>([])

    // Filter out tags from the projects
    const allProjectTags:string[] = []
    projects.map(tag => {
        tag.tags.map(item => {
            allProjectTags.push(item)
        })
    })

    // Unique button tags
    const buttonTags:string[] = [...new Set(allProjectTags)]

    // Function to filter projects
    const filterProjects = (tag: string) => {
        console.log("Filter projects: ", tag )

        // Update array with pushed button
        setFilteredTags(prevState => (
            [...prevState, tag]
        ))

        console.log("Filtered tags: ", filteredTags)

        // Filter project based on that array

        // If string exist, remove it from the array.

        // If no string, show all

    }

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
                    { buttonTags && buttonTags.map(tag => (
                        <button onClick={() => filterProjects(tag)}>{tag}</button>
                    ))}
                </div>
                <div>
                    { projects && projects.map(project => (
                        <div data-aos="fade-up" key={project.title}>
                            <ProjectCard key={project.title} project={project} shade={project.bg_color}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection