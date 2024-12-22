import React from 'react'
import Hero from './Hero'
import Introduction from './Introduction'
import Cards  from './Cards'
import Form  from './Form'

const Home = () => {
  return (
    <div className='overflow-hidden' >
        <Hero/>
        <Introduction/>
        <Cards/>
        <Form/> 
    </div>
  )
}

export default Home