// Page Data
import contact from '../../data/contactpage.json'

// Redux
import {useDispatch} from "react-redux";
import {changeLight} from "../../features/isLight.ts";

// React
import {useEffect} from "react";
import SocialSection from "./SocialSection.tsx";

const ContactPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeLight(false))
    }, [dispatch]);

    return(
        <>
            <section className="dark-shade top-section">
                <div className="section-content-wrapper" data-aos="zoom-out" data-aos-duration="1500">
                    {contact && contact.filter(item => item.id === 1).map(data  => (
                        <div key={data.id}>
                            <h1>{data.title}</h1>
                            <span className="subtitle">
                                {data.kicker}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            <SocialSection sectionInfo={contact}/>
        </>
    )
}

export default ContactPage