import React from 'react'
import styles from './Landing.module.css'
import { Link } from 'react-router-dom';

const Landing=()=> {
return (
    <div className={styles.mainContent}>
     <Link to="/home"><h1>GO TO HOME-PAGE!</h1></Link>
      </div>
  )
}

export default Landing;