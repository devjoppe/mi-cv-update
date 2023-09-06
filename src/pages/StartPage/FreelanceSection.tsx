// Icons
import { FaLinkedin } from "react-icons/fa";
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";
import React from "react";

interface IProp {
    sectionInfo: sectionInfoInt
}

const FreelanceSection:React.FC<IProp> = ({sectionInfo}) => {
    return(
        <section className="inverted-shade">
            <div className="section-content-wrapper">
                <div>
                    <div>
                        <h2>{sectionInfo.title}</h2>
                    </div>
                    <div>
                        <span className="inverted-kicker">
                            {sectionInfo.kicker}
                        </span>
                        <button className="icon-button">
                            Contact me <FaLinkedin />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreelanceSection