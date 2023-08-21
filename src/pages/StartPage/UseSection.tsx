import React from "react";

// Components
import LinkList from "../../components/LinkList/LinkList.tsx"

// Interface
import {sectionUseInt, linkListInt} from "../../interfaces/linksInt.ts";

interface IProp {
    sectionInfo: sectionUseInt
    linkList: linkListInt[]
}

const UseSection:React.FC<IProp> = ({sectionInfo, linkList}) => {
    return(
        <section className="dark-shade">
            <div className="section-content-wrapper">
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
                <div className="right-pane">
                    <div className="linklist-wrapper">
                        {linkList.filter(item => item.flag === "use").map((list) => (
                            <div data-aos="fade-up" className={list.type} key={list.category}>
                                { list.category && <h3>{list.category}</h3> }
                                <span className="link-description">{list.description}</span>
                                {list.links &&
                                    <ul>
                                        { list.links.map((link) => (
                                            <LinkList key={`${list.category}-${link.id}`} linkData={link} style={0}/>
                                        )) }
                                    </ul>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UseSection