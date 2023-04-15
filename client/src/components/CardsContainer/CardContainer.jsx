import React from 'react'
import Card from '../Cards/Card'
import style from './CardContainer.module.css'
//import { videogames } from '../../videogames'
import { useSelector } from 'react-redux'


const CardContainer=() =>{

  const videogames = useSelector(state => state.videogames)

  return (
    <div className={style.mainContainer}>
      {videogames.map((vg)=>{
        return <Card 
            name={vg.name}
            image={vg.image}
            genre={vg.genre}
        />
      })}
        
    </div>
  )
}

export default CardContainer