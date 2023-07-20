import React from "react"

// Interface
import {linksInt} from "../../pages/StartPage/UseSection.tsx";

interface IProp {
    linkData: linksInt
}

const LinkList:React.FC<IProp> = ({linkData}) => {

    return(
        <li><a href={linkData.url} target="_blank" >{linkData.link_title}</a> - {linkData.description}</li>
    )
}

export default LinkList