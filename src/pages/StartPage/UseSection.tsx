import React from "react";

// Components
import LinkList from "../../components/LinkList/LinkList.tsx"

export interface sectionUseInt {
    id: number,
    title: string,
    kicker: string,
    extra?: object[],
    user?: string
}

interface linkListInt {
    id: number,
    category: string,
    description?: string,
    flag: string,
    links?:linksInt[]
}

export interface linksInt {
    id: number,
    link_title?: string,
    description?: string,
    url?: string
}

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
                    {linkList.map((list) => (
                        <React.Fragment key={list.category}>
                            <h3>{list.category}</h3>
                            <span>{list.description}</span>
                            <ul>
                                {list.links &&
                                    list.links.map((link) => (
                                        <LinkList key={`${list.category}-${link.id}`} linkData={link} />
                                    ))}
                            </ul>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UseSection