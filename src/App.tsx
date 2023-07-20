// React router
import {Routes, Route} from "react-router-dom";

// Layout
import Layout from "./layout/Layout.tsx";

// Pages
import StartPage from "./pages/StartPage/StartPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";

function App() {

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
