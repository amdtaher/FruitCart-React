import React, { Fragment, useState, useEffect } from 'react';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import Hamburger from '../../Components/Hamburger/Hamburger';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Discounts from '../../Components/Discounts/Discounts';
import Services from '../../Components/Services/Services';
import Catagories from '../../Components/Catagories/Catagories';
import StocksandShipping from '../../Components/StocksAndShipping/StocksAndShipping';
import BestSeller from '../../Components/BestSeller/BestSeller';
import Packages from '../../Components/Packages/Packages';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Blogs from '../../Components/Blogs/Blogs';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Fragment>
      {loading ? ( <Loader /> ) : (
        <>
          {/* <NavigationBar /> */}
          <Hamburger title='Fruits | Home'/>
          <Banner />
          <About />
          <Discounts />
          <Services />
          <Catagories />
          <StocksandShipping />
          <BestSeller />
          <Packages />
          <Testimonials />
          <Blogs />
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Homepage;
