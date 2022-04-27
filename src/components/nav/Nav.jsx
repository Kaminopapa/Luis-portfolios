import React from 'react'
import './nav.css'
import {HiOutlineHome} from "react-icons/hi"
import {AiOutlineUser,AiOutlineMessage} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {MdOutlinePhoto} from "react-icons/md"
import { useState } from "react"
const Nav = () => {
  const [activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      {/* take you to the top */}
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav ==='#'?'active':''}><HiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience'?'active':''}><BiBook/></a>
      <a href="#portfolio"onClick={()=> setActiveNav('#services')} className={activeNav ==='#services'?'active':''}><MdOutlinePhoto/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact'?'active':''}><AiOutlineMessage/></a>
      
    </nav>
  )
}

export default Nav