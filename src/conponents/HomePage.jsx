import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Navbar from './Navbar'
import Content from './Content'
// import Button from './button'
import Button from './Button'
import Button2 from './Button2'
const HomePage = () => {
  return (
    <>
    <div className='bg-[#9CC1DE]'> 
      <HeroSection/>
      <Navbar/>
      {/* <Button/> */}
      <Button2/>
      <About/>
      <Content/>
      </div>
    </>
  )
}

export default HomePage
