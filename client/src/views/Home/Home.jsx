import React, { useEffect } from 'react'
import CardContainer from '../../components/CardsContainer/CardContainer';
import { useDispatch } from 'react-redux';
import { getGenres, getVideoGames } from '../../redux/actions';

const Home=()=> {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getGenres())
    dispatch(getVideoGames())
  },[dispatch])

  return (
    <div>
      <CardContainer/>
    </div>
  )
}

export default Home;