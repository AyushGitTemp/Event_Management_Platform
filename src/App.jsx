import './output.css'
import './App.css'
import Home from './pages/Home'
import Events from './pages/Events'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/services' element={<Services/>} />
      </Routes> 
    </>
  )
}

export default App

