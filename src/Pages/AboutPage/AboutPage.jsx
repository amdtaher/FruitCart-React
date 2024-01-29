import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer'
import Hamburger from '../../Components/Hamburger/Hamburger';
import BannerSection from '../../Components/BannerSection/BannerSection'

const AboutPage = () => {
  return (
    <>
        {/* <NavigationBar/> */}
        <Hamburger title='Fruits | About'/>
        <BannerSection title='About Section'/>
        <About/>
        <Footer/>
    </>
  )
}

export default AboutPage