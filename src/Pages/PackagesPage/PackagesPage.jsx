import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import BannerSection from '../../Components/BannerSection/BannerSection'
import Packages from '../../Components/Packages/Packages'
import Footer from '../../Components/Footer/Footer'
import Hamburger from '../../Components/Hamburger/Hamburger'

const PackagesPage = () => {
  return (
    <>
        {/* <NavigationBar/> */}
        <Hamburger title='Fruits | Packages'/>
        <BannerSection title='Packages Section'/>
        <Packages/>
        <Footer/>
    </>
  )
}

export default PackagesPage