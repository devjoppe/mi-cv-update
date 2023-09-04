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
                <li><FaExternalLinkSquareAlt size={13} /> <a href={linkData.url} target="_blank">{linkData.link_title}</a> - {linkData.description}</li>}
            {style === 1 &&
                <li><a href={linkData.url} target="_blank">{linkData.link_title}</a><br />
                    {linkData.description}
                </li>}
        </>
    )
}

export default LinkList