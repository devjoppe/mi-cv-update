// Sections
import {sectionInfoInt} from "../../interfaces/sectionInfoInt.ts";

// React
import React, {useState} from "react";

// Icons
import {FaLinkedin, FaRegCopy} from "react-icons/fa";

// React router
import {Link} from "react-router-dom";

interface IProp {
    sectionInfo: sectionInfoInt[]
}

const SocialSection:React.FC<IProp> = ({sectionInfo}) => {

    const [isCopied, setIsCopied] = useState(false)

    const copyText = async () => {
        setIsCopied(true)
        try {
            await navigator.clipboard.writeText("joaott02@gmail.com");
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <section className="light-shade">
            <div className="section-content-wrapper">
                {sectionInfo &&
                    <div className="left-pane" data-aos="fade-up">
                        { sectionInfo && sectionInfo.filter(item => item.id != 1).map(content => (
                            <div key={content.title}>
                                <div>
                                    <h2>{content.title}</h2>
                                </div>
                                <div>
                                    <span className="kicker">
                                        {content.kicker}
                                    </span>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                }
                <div className="right-pane">
                    <div className="content-block" data-aos="fade-up">
                        {isCopied && <span className="body-text">My email address is copied</span>}
                        <div className="contact-content">
                            <button className="contact-button" onClick={() => copyText()}>joaott02@gmail.com <FaRegCopy /></button>
                            <Link to="https://www.linkedin.com/in/joakim-ottosson/">
                                <button className="contact-button">Go to my LinkedIn page <FaLinkedin /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialSection