import { Outlet } from "react-router-dom";

import React from 'react'
import Navbar from "../components/Navbar";

const LayoutWithNavbar = () => {
  return (
   <div className="max-h-screen overflow-hidden">
    <Navbar/>
    <Outlet/>
   </div>
  )
}

export default LayoutWithNavbar