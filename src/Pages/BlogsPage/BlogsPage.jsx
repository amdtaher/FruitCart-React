import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import BannerSection from '../../Components/BannerSection/BannerSection'
import Blogs from '../../Components/Blogs/Blogs'
import Footer from '../../Components/Footer/Footer'
import Hamburger from '../../Components/Hamburger/Hamburger';

const BlogsPage = () => {
  return (
    <>
        {/* <NavigationBar/> */}
        <Hamburger title='Fruits | Blogs'/>
        <BannerSection title='Blogs Section'/>
        <Blogs/>
        <Footer/>
    </>
  )
}

export default BlogsPage