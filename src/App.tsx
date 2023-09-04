// React router
import {Routes, Route} from "react-router-dom";

// React
import {useEffect} from "react";

// Redux
import {useDispatch, useSelector} from "react-redux";

// Layout
import Layout from "./layout/Layout.tsx";

// Pages
import StartPage from "./pages/StartPage/StartPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";

// Interfaces
import {changeMode, isModeRootStateInt} from "./features/isMode.ts";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

    const themeState = useSelector((state:isModeRootStateInt) => state.isMode.mode)
    const setMode = useDispatch()

    // Check localStorage for dork/light mode
    const checkMode = localStorage.getItem('isMode')
    if(checkMode !==  null) {
        setMode(changeMode(checkMode))
    }

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
    <div data-theme={themeState}>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<StartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    </div>
    )
    }

export default App
