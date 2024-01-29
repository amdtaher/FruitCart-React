import React from 'react'
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/responsive.css"
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="p-0" fixed='top'>
        <Container fluid={true}>
          <Navbar.Brand><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between'>
            <Nav className="ms-5 d-flex align-items-center">
              <Nav.Link><NavLink to='/' className='link fs-5 fw-semibold text-decoration-none' activeClassName="active">Home</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/about' className='link fs-5 fw-semibold text-decoration-none'>About</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/catagory' className='link fs-5 fw-semibold text-decoration-none'>Catagory</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/bestseller' className='link fs-5 fw-semibold text-decoration-none'>BestSeller</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/testimonials' className='link fs-5 fw-semibold text-decoration-none'>Testimonial</NavLink></Nav.Link>
              <NavDropdown title="More" id="collapsible-nav-dropdown" className='link fs-5 fw-semibold text-decoration-none p-0'>
                <NavDropdown.Item><NavLink to='/services' className='link fs-5 fw-semibold text-decoration-none'>Services</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/packages' className='link fs-5 fw-semibold text-decoration-none'>Packages</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to='/blogs' className='link fs-5 fw-semibold text-decoration-none'>Blogs</NavLink></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#cart" className='link fs-5 fw-semibold text-decoration-none'><FaCartArrowDown size={26}/></Nav.Link>
              <Nav.Link href="#amount" className='link fs-5 fw-semibold text-decoration-none'>$0.00</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar