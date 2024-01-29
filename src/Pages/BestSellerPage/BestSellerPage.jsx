import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import BannerSection from '../../Components/BannerSection/BannerSection'
import BestSeller from '../../Components/BestSeller/BestSeller'
import Footer from '../../Components/Footer/Footer'
import Hamburger from '../../Components/Hamburger/Hamburger';

const BestSellerPage = () => {
  return (
    <>
        {/* <NavigationBar/> */}
        <Hamburger title='Fruits | BestSeller'/>
        <BannerSection title='BestSeller Section'/>
        <BestSeller/>
        <Footer/>
    </>
  )
}

export default BestSellerPage