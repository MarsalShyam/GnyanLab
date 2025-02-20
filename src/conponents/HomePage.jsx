import React,{useState} from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Navbar from './Navbar'
import Content from './Content'
// import Button from './button'
import Button from './Button'
import Button2 from './Button2'
import Rough from './Rough'
const HomePage = () => {
  // Shared state for selected year
  const [selectedYear, setSelectedYear] = useState(1);
  return (
    <>
    <div className='bg-[#9CC1DE]'> 
      <HeroSection/>
       {/* Pass setSelectedYear to Navbar */}
      <Navbar setSelectedYear={setSelectedYear}/>

      {/* <Button/> */}{/* Pass selectedYear and setSelectedYear to Button2 */}
      <Button2 selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
      <About/>
      <Content/>
      <Rough/>
      </div>
    </>
  )
}

export default HomePage
