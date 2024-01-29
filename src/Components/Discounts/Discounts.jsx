import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import discount from '../../assets/img/discount.png'
import { motion } from 'framer-motion'

const Discounts = () => {
  const variant = {
    fadeHidden: {
        opacity: 0,
    },
    fadeVisible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .6,
            ease: 'easeInOut', 
            }
    }
  }
  return (
    <>
      <Container fluid={true} className='discountMain'>
          <Container className='bg'>
            <Row className='discountBanner justify-content-between align-items-center'>
              <Col xs={6} sm={6} md={6} lg={6}>
                <motion.div
                variants={variant}
                initial="fadeHidden"
                whileInView="fadeVisible"
                viewport={{ once: true }}
                >
                  <img src={discount} alt="" />
                </motion.div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <motion.div
                variants={variant}
                initial="fadeHidden"
                whileInView="fadeVisible"
                viewport={{ once: true }}
                >
                  <div className="discountContent">
                    <span className= 'discountMark'>50%<br/>discount</span>
                    <span className="discountSubHeading">Fresh Exotic Fruits</span>
                    <h4 className="discountHeading">on Exciting discounts</h4>
                    <p className="discountParagraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur cupiditate magnam dolor, nisi eos quos.</p>
                    <a href="" className="discountLink">shop now</a>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
      </Container>
    </>
  )
}

export default Discounts