import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MyProjects from './pages/projectDetails'
import CreateProject from './pages/CreateProject'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import ProjectDetails from './pages/projectDetails'
import UpdateProfile from './pages/UpdateProfile'

const App = () => {
  return (
    <>
       < Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createproject" element={<CreateProject/>} />
          <Route path="/updateprofile" element={<UpdateProfile/>} />
          <Route path="/projectdetails/:id" element={<ProjectDetails />} />
        </Routes>
      
    </>
    
  )
}

export default App;