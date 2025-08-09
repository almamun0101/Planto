import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Selling from '../component/Selling'
import Review from '../component/Review'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <Header/>
        <Selling/>
        <Review/>
        {/* <Footer/> */}

    </div>
  )
}

export default Home