import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Userlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Userlayout