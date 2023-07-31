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

    console.log("Find my list: ", linkList)

    return(
        <section className="dark-shade">
            <div className="section-content-wrapper">
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
                <div className="linklist-wrapper">
                    {linkList.filter(item => item.flag === "use").map((list) => (
                        <div data-aos="fade-up" key={list.category}>
                            <h3>{list.category}</h3>
                            <span>{list.description}</span>
                            <ul>
                                {list.links &&
                                    list.links.map((link) => (
                                        <LinkList key={`${list.category}-${link.id}`} linkData={link} style={0}/>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UseSection