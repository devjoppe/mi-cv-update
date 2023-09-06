import React from "react";

// JSON data
import links from "../../data/linklist.json";

// Interface
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";
import LinkList from "../../components/LinkList/LinkList.tsx";

// Icons
import { FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom";

interface IProp {
    data: sectionInfoInt
}

const WorkSection:React.FC<IProp> = ({data}) => {
    return(
        <section className="light-shade">
            <div className="section-content-wrapper">
                <div className="left-pane">
                    <div>
                        <h2>{data.title}</h2>
                    </div>
                </div>
                <div className="right-pane">
                    <div>
                        <span className="kicker">
                            {data.kicker}
                        </span>
                        <div className="linklist-wrapper">
                            {links.filter(item => item.flag === "work").map((list) => (
                                <div data-aos="fade-up" key={list.category}>
                                    <h3>{list.category}</h3>
                                    <span>{list.description}</span>
                                    <ul>
                                        {list.links &&
                                            list.links.map((link) => (
                                                <LinkList key={`${list.category}-${link.id}`} linkData={link} style={1}/>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <Link to="https://www.linkedin.com/in/joakim-ottosson/">
                        <button className="inverted-shade icon-button">
                            Visit my LinkedIn page for more info
                            <FaLinkedin />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkSection