
import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}> </Route>

    
      </Routes>
    </>
  )
}

export default App
