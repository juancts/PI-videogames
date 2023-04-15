import React from 'react';
import style from './Card.module.css'

const Card= (props)=> {
  return (
    <div className={style.mainContainer}>
        <p>{props.name}</p>
        <img width="200px" height="200px" alt= {props.name} src={props.image}></img>
        <p>{props.genre}</p>
    </div>
  )
}

export default Card