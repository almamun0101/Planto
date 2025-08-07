import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Selling from '../component/Selling'
import Review from '../component/Review'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <Header/>
        <Selling/>
        <Review/>

    </div>
  )
}

export default Home