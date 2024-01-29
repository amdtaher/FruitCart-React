import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPhone, FaCalendar, FaLocationArrow, FaFacebook, FaInstagram, FaTwitch, FaYoutube, FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';


const Footer = () => {
    const variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    }
  return (
    <>
        <Container fluid={true} className='footerMain pyb-5'>
            <Container className='footer'>
                <motion.div
                variants={variant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                >
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={3}>
                            <div className='singleFooter'>
                            <h4 className='mb-3'>contact us</h4>
                            <ul className='footerContact'>
                                <li><a href="#"><FaCalendar className='me-2'/> 23-27 Jan, 2024</a></li>
                                <li><a href="#"><FaLocationArrow className='me-2'/> yellow-green street, USA</a></li>
                                <li><a href="#"><FaPhone className='me-2'/> +880 123 4567 7890</a></li>
                            </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3}>
                            <div className='singleFooter'>
                            <h4 className='mb-3'>links</h4>
                            <ul className='footerLinks'>
                                <li><a className='text-white mb-2' href="#"><FaChevronRight className='me-2'/>home</a></li>
                                <li><a className='text-white mb-2' href="#"><FaChevronRight className='me-2'/>contact us</a></li>
                                <li><a className='text-white mb-2' href="#"><FaChevronRight className='me-2'/>terms & conditions</a></li>
                                <li><a className='text-white mb-2' href="#"><FaChevronRight className='me-2'/>FAQ</a></li>
                                <li><a className='text-white' href="#"><FaChevronRight className='me-2'/>reviews</a></li>
                            </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3}>
                            <div className='singleFooter'>
                            <h4 className='mb-3'>contact us</h4>
                            <ul className='footerCatagories'>
                                <li><a className='text-white mb-2' href="#"><FaChevronRight className='me-2'/>fruits</a></li>
                                <li><a className='text-white mb-2' href="#"><FaChevronRight className='me-2'/>prduct made by Fruits</a></li>
                                <li><a className='text-white mb-2' href="#"><FaChevronRight className='me-2'/>vegetables</a></li>
                                <li><a className='text-white mb-2' href="#"><FaChevronRight className='me-2'/>prduct made by Vegetables</a></li>
                            </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3}>
                            <div className='singleFooter'>
                                <h4 className='mb-3'>about us & our socials</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem repellendus quisquam, nesciunt ab itaque ipsam quidem dolores quaerat similique voluptatibus.</p>
                                <ul className='footerSocial'>
                                    <li><a href="#"><FaFacebook className='me-2' size={30}/></a></li>
                                    <li><a href="#"><FaInstagram className='me-2' size={30}/></a></li>
                                    <li><a href="#"><FaTwitch className='me-2' size={30}/></a></li>
                                    <li><a href="#"><FaYoutube className='me-2' size={30}/></a></li>
                                </ul>
                            </div>
                        </Col>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div className='footerBottom text-center'>
                                    <h4>fruits</h4>
                                    <span>©2023 ProTips All Right Reserved</span>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </motion.div>
            </Container>
        </Container>
    </>
  )
}

export default Footer