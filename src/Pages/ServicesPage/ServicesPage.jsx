import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import BannerSection from '../../Components/BannerSection/BannerSection'
import Services from '../../Components/Services/Services'
import Footer from '../../Components/Footer/Footer'
import Hamburger from '../../Components/Hamburger/Hamburger';


const ServicesPage = () => {
  return (
    <>
        {/* <NavigationBar/> */}
        <Hamburger title='Fruits | Services'/>
        <BannerSection title='Services Section'/>
        <Services/>
        <Footer/>
    </>
  )
}

export default ServicesPage