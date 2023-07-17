import React from "react";

export interface linkInt {
    id: number,
    title: string,
    data: linkItemInk[] | string
}

interface linkItemInk {
    id: string,
    tech: string,
    description: string,
    url: string
}

interface IProp {
    linkData: linkInt
}

const LinkList:React.FC<IProp> = ({linkData}) => {
    return(
       <div className="linklist-wrapper">
           <h3>{linkData.title}</h3>
           <ul>
           {typeof(linkData.data) != "string" ? linkData.data.map(link => (
               <li><a href={link.url} target="_blank" >{link.tech}</a> - {link.description}</li>
           )) :
               <span>{linkData.data}</span> }
           </ul>
       </div>
    )
}

export default LinkList