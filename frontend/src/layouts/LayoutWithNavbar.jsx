import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from "../components/Navbar";
import { useLenis } from "../hooks/useLenis";

const LayoutWithNavbar = () => {
  
  useLenis();
  
  return (
   <div>
    <Navbar/>
    <Outlet/>
   </div>
  )
}

export default LayoutWithNavbar