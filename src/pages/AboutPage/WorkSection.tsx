import React from "react";

// JSON data
import links from "../../data/linklist.json";

// Interface
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";
import LinkList from "../../components/LinkList/LinkList.tsx";

interface IProp {
    data: sectionInfoInt
}

const WorkSection:React.FC<IProp> = ({data}) => {
    return(
        <section className="light-shade">
            <div className="section-content-wrapper">
                <div>
                    <div>
                        <h2>{data.title}</h2>
                    </div>
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
                        <button className="inverted-shade">Visit my LinkedIn page for more info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkSection