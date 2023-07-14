import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'
// Website Styles
import 'assets/styles/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
            <App />
      </BrowserRouter>
  </React.StrictMode>,
)
