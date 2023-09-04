// Sections
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";

// React
import React from "react";

// Icons
import {FaLinkedin, FaRegCopy} from "react-icons/fa";

// React router
import {useNavigate} from "react-router-dom";

interface IProp {
    sectionInfo: sectionInfoInt[]
}

const SocialSection:React.FC<IProp> = ({sectionInfo}) => {

    const navigate = useNavigate()

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
                        <div className="contact-content">
                            <button className="contact-button">joaott02[a]gmail.com <FaRegCopy /></button>
                            <button className="contact-button" onClick={() => navigate('https//google.com')}>Go to my LinkedIn page <FaLinkedin /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialSection