import React from 'react'
// import video from '../assets/hero.mp4'
// import logo from '../assets/logo.png'
// import hero from '../assets/hero.jpeg'
import {motion} from 'framer-motion'
import slider1 from '../assets/slider1.jpg'
// import GNYAN1 from '../assets/GNYAN1.png'
// import GNYAN2 from '../assets/GNYAN2.png'
import gn from '../assets/gn.png'

const HeroSection = () => {
  return (
    <section className='relative flex h-screen items-center justify-center'>
        <div className='absolute inset-0 z-20 h-full w-full overflow-hidden'>
            {/* <video src={video} className='h-full w-full object-cover' muted autoPlay loop playsInline poster={hero}></video> */}
            {/* <img src={slider1} className='h-full w-full object-cover'/> */}
        </div>
        {/* <div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-80% to-black'></div>
        <div className='border-red-500  relative z-20 flex h-screen flex-col justify-start pt-20 mx-24 '>
        <motion.img
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
             src={gn} 
             alt="GNYAN1" 
             className='filter invert'/>
            <p className='p-4 text-lg tracking-tighter text-white'>India</p>
        </div> */}

        <div className='relative z-20 flex h-screen flex-col justify-end pb-15'>
            <motion.img
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
             src={gn} 
             alt="GNYAN1" 
             className='filter invert lg:mx-20 '/>
            <p className='p-4 text-lg tracking-tighter text-white lg:mx-20'>TamilNadu</p>
        </div>
    </section>
  )
}

export default HeroSection


