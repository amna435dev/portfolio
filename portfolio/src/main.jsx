import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/header/Header'
import Home from './Components/pages/Home/Home'
import Footer from './Components/Footer/Footer'
import { BrowserRouter} from 'react-router-dom'
import { Routes, Route, Outlet} from 'react-router'
import About from './Components/pages/about/about'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
