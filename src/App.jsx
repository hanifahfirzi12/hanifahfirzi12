import { RiH1 } from 'react-icons/ri'
import './App.css'
import Home from './pages/Home'
import DetailPortofolio from './pages/DetailPortofolio'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home /> }/>
    <Route path='/portfolio/:id' element={<DetailPortofolio/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App