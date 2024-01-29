import React from 'react'
import "../../assets/css/style.css"
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';

const BannerSection = (prop) => {
  const variant = {
    fadeHidden: {
        opacity: 0,
    },
    fadeVisible: {
        opacity: 1,
        transition: {
            duration: .6,
            delay: .3,
            ease: 'easeInOut', 
            }
    },
    fadeChildVisible: {
        opacity: 1,
        transition: {
            duration: 1.3,
            delay: .6,
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
      className='p-0 bannerSectionMain'>
        <div className='bannerOverlay'>
          <Container className='banner'>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <motion.div
                variants={variant}
                initial='fadeHidden'
                whileInView='fadeChildVisible'
                viewport={{ once: true }}
                >
                <div className='bannerSectionContent position-absolute text-capitalize margin-0'>
                    <h4 className='bannerHeading shadow-0 text-center'>{prop.title}</h4>                  
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

export default BannerSection