import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'

// React Redux
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from "react-redux";
import lightReducer from './features/isLight.ts'

const store = configureStore({
    reducer: {
        isLight: lightReducer
    }
})

// CSS
import './assets/styles/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
