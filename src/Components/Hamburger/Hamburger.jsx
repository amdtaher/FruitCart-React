import React, { useState } from 'react';
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/responsive.css"
import { Container } from 'react-bootstrap';
import { stack as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";


const Hamburger = (prop) => {
  const [isDropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!isDropdown);
  };
  
  return (
    <>
      <Container fluid={true} className="p-0">
        <title>{prop.title}</title>   
        <Menu id='page-wrap'>
        <NavLink to='/' activeClassName="active">Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/catagory'>Catagory</NavLink>
        <NavLink to='/bestseller'>BestSeller</NavLink>
        <NavLink to='/testimonials'>testimonial</NavLink>
        <NavLink className='dropdown' onClick={toggleDropdown}>More <FaChevronDown size={15}/>
        {isDropdown && (
        <ul className="dropdown-content">
          <li><NavLink className='dropdownItem' to='/services'>Services</NavLink></li>
          <li><NavLink className='dropdownItem' to='/packages'>Packages</NavLink></li>
          <li><NavLink className='dropdownItem' to='/blogs'>Blogs</NavLink></li>
        </ul>
        )}
        </NavLink>
        </Menu>
    </Container>
  
    </>
  )
}

export default Hamburger