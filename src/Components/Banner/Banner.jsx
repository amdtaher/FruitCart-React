import React from 'react'
import "../../assets/css/style.css"
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';

const Banner = () => {
  const variant = {
    fadeHidden: {
        opacity: 0,
    },
    fadeVisible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .3,
            ease: 'easeInOut', 
            }
    },
    fadeChildVisible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: .5,
            ease: 'easeInOut', 
            }
    }
}
  return (
    <>
      <motion.section
      variants={variant}
      initial='fadeHidden'
      whileInView='fadeVisible'
      viewport={{ once: true }}
      className='p-0 bannerMain'>
        <div className='bannerOverlay'>
          <Container className='banner'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <motion.div
                variants={variant}
                initial='fadeHidden'
                whileInView='fadeChildVisible'
                viewport={{ once: true }}
                >
                  <div className='bannerContent position-absolute text-capitalize'>
                    <span className='bannerSubHeading'>we grow and sell</span>
                    <h4 className='bannerHeading'>Best fruits</h4>
                    <p className='bannerParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam?</p>
                    <a href="" className='bannerLink'>order now</a>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.section>
    </>
  )
}

export default Banner