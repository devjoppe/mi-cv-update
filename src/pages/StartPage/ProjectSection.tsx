import React, {useEffect, useState} from "react";

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

    useEffect(() => {

    }, []);

    // Function to filter projects
    const filterProjects = (tag: string) => {
        console.log("Filter projects: ", tag )

        // Check if the tag already exist
        // If exists, remove from filteredTags
        const checkTag = filteredTags.find(checkTag => checkTag === tag)
        console.log("Checking tag: ", checkTag)

        if(checkTag) {
            setFilteredTags(filteredTags.filter(currentTag => currentTag !== tag))
            console.log("Tag already exist and selected")
            return
        } else {
            // Update array with pushed button
            setFilteredTags(prevState => (
              [...prevState, tag]
            ))
        }
    }

    // Filter project based on that array

    // If string exist, remove it from the array.

    // If no string, show all

    console.log("Filtered tags: ", filteredTags)

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
                    <span>Filter projects</span>
                    { buttonTags && buttonTags.map(tag => (
                        <button key={tag} className={`${filteredTags && filteredTags.find(item => item === tag) ? "selected" : ""} filter`} onClick={() => filterProjects(tag)}>{tag}</button>
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