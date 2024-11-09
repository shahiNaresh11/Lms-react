
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}> </Route>
        <Route path='/about' element={<AboutUs />}> </Route>
        <Route path='*' element={<NotFound />}> </Route>




      </Routes>
    </>
  )
}

export default App
