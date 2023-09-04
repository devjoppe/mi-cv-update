// Sections
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";

// React
import React from "react";

interface IProp {
    sectionInfo: sectionInfoInt[]
}

const SocialSection:React.FC<IProp> = ({sectionInfo}) => {
    return(
        <section className="light-shade">
            <div className="section-content-wrapper">
                {sectionInfo &&
                    <div className="left-pane" data-aos="fade-up">
                        { sectionInfo && sectionInfo.filter(item => item.id != 1).map(content => (
                            <>
                                <div>
                                    <h2>{content.title}</h2>
                                </div>
                                <div>
                                    <span className="kicker">
                                        {content.kicker}
                                    </span>
                                </div>
                            </>
                        ))
                        }
                    </div>
                }
                <div className="right-pane">
                    <div className="content-block" data-aos="fade-up">
                        <span className="body-text">
                            joaott02[a]gmail.com
                        </span>
                        <span className="body-text">Go to my LinkedIn page</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialSection