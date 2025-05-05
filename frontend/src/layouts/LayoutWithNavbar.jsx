import { Outlet } from "react-router-dom";

import React from 'react'
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const LayoutWithNavbar = () => {
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Toaster/>
   </>
  )
}

export default LayoutWithNavbar