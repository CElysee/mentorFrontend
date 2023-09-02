import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import FindMentor from "../pages/findMentor"
import BecomeMentor from '../pages/becomeMentor'
import MentorProfile from '../pages/mentorProfile'
// import SignUpPage from '../pages/SignUpPage'
import ThankYou from '../pages/Authentication/ThankYou'
import SignUpPage from '../pages/Authentication/SignUpPage'
import SetUpMember from '../pages/Authentication/SetUpMember'

function Routers() {
  return (
    <Routes>
    {/* <Route path='/' element={<Navigate to='/'/>} /> */}
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/findMentor' element={<FindMentor />} />
    <Route path='/becomeMentor' element={<BecomeMentor />} />
    <Route path='/mentorProfile' element={<MentorProfile />} />
    <Route path='/sign-up' element={<SignUpPage />} />
    {/* <Route path='/setUpMember/mentee' element={<SetUpMember />} /> */}
    {/* <Route path='/setUpMember/mentor' element={<SetUpMember />} /> */}
    <Route path='/setUpMember' element={<SetUpMember />} />
    <Route path='/thankyou' element={<ThankYou />} />
   </Routes>
  )
}

export default Routers