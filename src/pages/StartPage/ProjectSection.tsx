// React
import React, {useEffect, useState} from "react";

// JSON data
import projects from '../../data/projects.json'

// Components
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";

// Interface
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";
import {projectInt} from "../../interfaces/projectCardInt.ts";

interface IProp {
    sectionInfo: sectionInfoInt
}

const ProjectSection:React.FC<IProp> = ({sectionInfo}) => {

    // Console.log styling for debugging
    // const log = "background: lightgreen; color: green; padding: 3px;"
    // const warning = "background: red; color: darkred; padding: 3px;"

    const [filteredTags, setFilteredTags] = useState<string[]>([])
    const [projectList, setProjectList] = useState<projectInt[]>(projects)
    const [projectCounter, setProjectCounter] = useState<number>(0)

    // Filter out tags from the projects
    const allProjectTags:string[] = []
    projects.map(tag => {
        tag.tags.map(item => {
            allProjectTags.push(item)
        })
    })

    const allProjects = projects.filter(item => item.type != 'quote')

    // Unique button tags
    const buttonTags:string[] = [...new Set(allProjectTags)]

    // Function to filter projects
    const filterProjects = (tag: string) => {
        // Check if the tag already exist
        // If exists, remove from filteredTags
        const checkTag = filteredTags.find(checkTag => checkTag === tag)

        if(checkTag) {
            setFilteredTags(filteredTags.filter(currentTag => currentTag !== tag))
            return
        } else {
            // Update array with pushed button
            setFilteredTags(prevState => (
              [...prevState, tag]
            ))
        }
    }

    // Filter projects based on filterTags array:
    useEffect(() => {
        if(filteredTags.length > 0) {
            setProjectList(
                projects.filter(project =>
                    project.tags?.some(tag =>
                        filteredTags.includes(tag)
                    )
                )
            )
        } else {
            setProjectList(projects)
            setProjectCounter(projects.filter(item => item.type != 'quote').length)
        }
    }, [filteredTags]);

    return (
        <section className="light-shade">
            <div className="section-content-wrapper">
                {sectionInfo &&
                    <div className="left-pane">
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
                <div className="right-pane">
                    <div className="filter-block">
                        <span className="filter-tags">Filter ({projectCounter} of {allProjects.length} projects)</span>
                        { buttonTags && buttonTags.map(tag => (
                            <button key={tag} className={`${filteredTags && filteredTags.find(item => item === tag) ? "selected" : ""} filter`} onClick={() => filterProjects(tag)}>{tag}</button>
                        ))}
                    </div>
                    <div className="project-card-list-wrapper">
                        { projectList && projectList.map(project => (
                            <div data-aos="fade-up" key={project.title} className={`project-card ${project.type}`}>
                                <ProjectCard key={project.title} project={project} shade={project.bg_color}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection