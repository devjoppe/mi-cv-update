import React from "react"

// Interface
import {linksInt} from "../../interfaces/linksInt.ts";

// Icons
import {FaExternalLinkSquareAlt} from "react-icons/fa";

interface IProp {
    linkData: linksInt,
    style: number
}

const LinkList:React.FC<IProp> = ({linkData, style}) => {

    return(
        <>
            {style === 0 &&
                <li className="list-row">
                    <div><FaExternalLinkSquareAlt size={13} /> <a href={linkData.url} target="_blank">{linkData.link_title}</a></div>
                    <span>&nbsp;- {linkData.description}</span>
                </li>}
            {style === 1 &&
                <li className="list-column">
                    <div><FaExternalLinkSquareAlt size={13} /> <a href={linkData.url} target="_blank">{linkData.link_title}</a></div>
                    <span>{linkData.description}</span>
                </li>}
        </>
    )
}

export default LinkList