import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import BannerSection from '../../Components/BannerSection/BannerSection'
import Catagories from '../../Components/Catagories/Catagories'
import Discounts from '../../Components/Discounts/Discounts'
import StocksAndShipping from '../../Components/StocksAndShipping/StocksAndShipping'
import Footer from '../../Components/Footer/Footer'
import Hamburger from '../../Components/Hamburger/Hamburger'

const CatagoriesPage = () => {
  return (
    <>
        {/* <NavigationBar/> */}
        <Hamburger title='Fruits | Catagories'/>
        <BannerSection title='Catagory Section'/>
        <Discounts/>
        <Catagories/>
        <StocksAndShipping/>
        <Footer/>
    </>
  )
}

export default CatagoriesPage