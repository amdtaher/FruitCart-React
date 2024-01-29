import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import BannerSection from '../../Components/BannerSection/BannerSection'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'
import Hamburger from '../../Components/Hamburger/Hamburger';

const TestimonialsPage = () => {
  return (
    <>
      {/* <NavigationBar/> */}
      <Hamburger title='Fruits | Testimonial'/>
      <BannerSection title='Testimonial Section'/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default TestimonialsPage