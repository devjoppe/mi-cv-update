import React from "react";

// Interface
import {sectionInfoInt} from "../StartPage/ProjectSection.tsx";

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
                        </div>
                        <div>
                            <span className="quote">
                                {data.kicker}
                            </span>
                            <span>
                                {data.extra[0].data}
                            </span>
                        </div>
                    </div>
                }
                <div>
                    X
                </div>
            </div>
        </section>
    )
}

export default MeSection