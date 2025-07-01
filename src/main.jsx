import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Projects from './Projects/home.jsx'
import Info from './Info/home.jsx'
import Contact from './Contact/home.jsx'
import Success from './Success/home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/info' element={<Info />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/success' element={<Success />}/>
    </Routes>
  </BrowserRouter>,
)
