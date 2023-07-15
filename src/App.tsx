// React router
import {Routes, Route} from "react-router-dom";

// Layout
import Layout from "./layout/Layout.tsx";

// Pages
import StartPage from "./pages/StartPage/StartPage.tsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<StartPage />} />
        </Route>
    </Routes>
  )
}

export default App
