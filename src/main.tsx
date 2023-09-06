// React
import React from 'react'
import App from './App.tsx'

// Routes
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

// React Redux
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from "react-redux";
import lightReducer from './features/isLight.ts'
import modeReducer from './features/isMode.ts'

// CSS
import './assets/styles/style.css'

// Fonts
import './assets/fonts/blenderpro/BlenderPro-Bold.woff';
import './assets/fonts/blenderpro/BlenderPro-Heavy.woff';
import './assets/fonts/blenderpro/BlenderPro-Medium.woff';

// Redux reducers
const store = configureStore({
    reducer: {
        isLight: lightReducer,
        isMode: modeReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)