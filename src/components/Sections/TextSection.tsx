import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";
import React from "react";

interface IProp {
    sectionInfo: sectionInfoInt
}

const TextSection:React.FC<IProp> = ({sectionInfo}) => {
    return(
        <section className="light-shade">
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
                    <div data-aos="fade-up">
                        <span className="body-text">
                            {sectionInfo.extra && sectionInfo.extra[0].data}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextSection