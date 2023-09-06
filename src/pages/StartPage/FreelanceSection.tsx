// Icons
import { FaLinkedin } from "react-icons/fa";
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";
import React from "react";
import {Link} from "react-router-dom";

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
                        <Link to="https://www.linkedin.com/in/joakim-ottosson/">
                            <button className="icon-button">
                                Contact me <FaLinkedin />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreelanceSection