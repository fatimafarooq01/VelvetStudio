import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userlayout from './Layout/Userlayout'
import Home from '../src/Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Gallery from "./Pages/Gallery/Gallery";
import Appointment from './Pages/Appoinment/Appoinment'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Userlayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/appointment" element={<Appointment />} />

            </Route >
        </Routes>
    )
}

export default AppRoutes