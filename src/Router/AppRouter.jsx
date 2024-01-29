import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Homepage/Homepage'
import AboutPage from '../Pages/AboutPage/AboutPage'
import CatagoriesPage from '../Pages/CatagoriesPage/CatagoriesPage'
import BestSellerPage from '../Pages/BestSellerPage/BestSellerPage'
import BlogsPage from '../Pages/BlogsPage/BlogsPage'
import TestimonialsPage from '../Pages/TestimonialsPage/TestimonialsPage'
import ServicesPage from '../Pages/ServicesPage/ServicesPage'
import PackagesPage from '../Pages/PackagesPage/PackagesPage'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/catagory' element={<CatagoriesPage/>}/>
        <Route exact path='/bestseller' element={<BestSellerPage/>}/>
        <Route exact path='/testimonials' element={<TestimonialsPage/>}/>
        <Route exact path='/services' element={<ServicesPage/>}/>
        <Route exact path='/Packages' element={<PackagesPage/>}/>
        <Route exact path='/blogs' element={<BlogsPage/>}/>
      </Routes>
    </>
  )
}

export default AppRouter