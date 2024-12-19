
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'
import CourseComponent from './Components/CourseCard'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}> </Route>
        <Route path='/about' element={<AboutUs />}> </Route>
        <Route path='/signup' element={<SignUp />}> </Route>
        <Route path='/login' element={<Login />}> </Route>

        <Route path='/course' element={<CourseList />}> </Route>


        <Route path='*' element={<NotFound />}> </Route>




      </Routes>
    </>
  )
}

export default App
