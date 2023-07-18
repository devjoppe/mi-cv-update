import React from "react";

// Components
import LinkList from "../../components/LinkList/LinkList.tsx";

export interface sectionUseInt {
    id: number,
    title: string,
    kicker: string,
    extra: object[],
    user?: string
}

interface IProp {
    sectionInfo: sectionUseInt
}

const UseSection:React.FC<IProp> = ({sectionInfo}) => {

    console.log("Find my list: ", sectionInfo.extra[0].data[0])

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
                <div>
                    <LinkList linkData={sectionInfo.extra[0].data[0]}/>
                    <LinkList linkData={sectionInfo.extra[0].data[1]}/>
                    <LinkList linkData={sectionInfo.extra[0].data[2]}/>
                    <LinkList linkData={sectionInfo.extra[0].data[3]}/>
                </div>
            </div>
        </section>
    )
}

export default UseSection