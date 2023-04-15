import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

import React from 'react'

const NavBar=()=> {
  return (<div className={style.mainContainer}>
  <Link to="/home">HOME</Link>
  <Link to="/form">NEW VIDEOGAME</Link>
  <Link to="/about">ABOUT ME</Link>
  
    </div>
  )
}

export default NavBar