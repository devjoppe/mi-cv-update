import React from "react";

export interface sectionUseInt {
    id: number,
    title: string,
    kicker: string,
    extra: ({
        id: number,
        links: useLinksInt[]
    })[],
    user?: string
}

interface useLinksInt {
    id: number,
    title?: string,
    data: linkItemInt[]
}

interface linkItemInt {
    id: string,
    tech: string,
    description: string,
    url: string
}

interface IProp {
    sectionInfo: sectionUseInt
}

const UseSection:React.FC<IProp> = ({sectionInfo}) => {
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
                <div className="TESTAR">
                    {sectionInfo && sectionInfo.extra.map(item => (
                        <div className={`${sectionInfo.id}`} key={sectionInfo.id} >{item.links.map(link => (
                            <div className={`${link.id}`} key={link.id}>
                                {link.title}
                                {link.data.map(item => (
                                    <span className={`${item.id}`} key={item.id}>{item.tech}</span>
                                ))}
                            </div>
                        ))}</div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UseSection