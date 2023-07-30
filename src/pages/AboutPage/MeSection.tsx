import React from "react";

// Links data and page data
import links from '../../data/linkList.json'
import myImage from '../../../public/assets/images/about-me-jo.png'

// Interface
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";

// Components
import LinkList from "../../components/LinkList/LinkList.tsx";

interface IProp {
    data: sectionInfoInt
}

const MeSection:React.FC<IProp> = ({data}) => {
    return(
        <section>
            <div className="section-content-wrapper">
                {data &&
                    <div>
                        <div>
                            <h2>{data.title}</h2>
                            <img className="me-image" src={myImage} alt="me" />
                        </div>
                        <div data-aos="fade-up">
                            <span className="quote">
                                {data.kicker}
                            </span>
                            <span>
                                {data.extra && data.extra[0].data}
                            </span>
                        </div>
                    </div>
                }
                <div>
                    <div>
                        <h2>Education</h2>
                    </div>
                    <div className="linklist-wrapper">
                        {links.filter(item => item.flag === "edu").map((list) => (
                            <div data-aos="fade-up" key={list.category}>
                                <h3>{list.category}</h3>
                                <span>{list.description}</span>
                                <ul>
                                    {list.links &&
                                        list.links.map((link) => (
                                            <div key={`linklist-${link.id}`}>
                                                <LinkList key={`${list.category}-${link.id}`} linkData={link} />
                                            </div>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeSection