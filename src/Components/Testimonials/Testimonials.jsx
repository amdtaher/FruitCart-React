import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import person from '../../assets/img/Speakers/speakers1.jpg'

const Testimonials = () => {
  const variant = {
    fadeHidden: {
      opacity: 0,
    },
    fadeVisible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .5,
            ease: 'easeInOut', 
            }
    }
}
  return (
    <>
      <Container className="reviewsMain pyb-10">
        <Row className='justify-content-between align-items-center'>
          <Col xs={12} sm={12} md={12} lg={5}>
            <motion.div
            variants={variant}
            initial='fadeHidden'
            whileInView='fadeVisible'
            viewport={{ once: true }}
            >
              <div className="reviewsContent">
                <span className="reviewsSubHeading">Customer Feedback</span>
                <h4 className="reviewsHeading">What Our Customers Say About Us</h4>
                <p className="reviewsParagraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab placeat, culpa aperiam natus reprehenderit possimus quibusdam distinctio. Delectus molestias quis veritatis eveniet saepe iure ad.</p>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={7}>
            <motion.div
            variants={variant}
            initial='fadeHidden'
            whileInView='fadeVisible'
            viewport={{ once: true }}
            >
              <div className="testimonial">
                  <img src={person} alt="" />
                <div className="testimonialContent">
                  <p className="personReview"><b>"</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi libero culpa accusamus explicabo delectus sapiente iure sequi, minima consequatur commodi recusandae. <b>"</b></p>
                  <h4 className='personName'>jhonathan major <span>happy visitor</span></h4>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Testimonials