import { Outlet } from "react-router-dom";

import React from 'react'
import Navbar from "../components/Navbar";

const LayoutWithNavbar = () => {
  return (
   <>
    <Navbar/>
    <Outlet/>
   </>
  )
}

export default LayoutWithNavbar