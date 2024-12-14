import React from 'react';
import Hero from './Hero/Hero';
import DetailsBlock from './DetailsBlock/DetailsBlock';
import RsvpBlock from './RsvpBlock/RsvpBlock';

const Home = () => {
  return (
    <div className='home__container'>
    <Hero />
    <DetailsBlock />
    <RsvpBlock />
  </div>
  )
}

export default Home