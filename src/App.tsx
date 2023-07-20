// React router
import {Routes, Route} from "react-router-dom";

// React
import {useEffect} from "react";

// Layout
import Layout from "./layout/Layout.tsx";

// Pages
import StartPage from "./pages/StartPage/StartPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
    <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<StartPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    </Routes>
    )
    }

export default App
