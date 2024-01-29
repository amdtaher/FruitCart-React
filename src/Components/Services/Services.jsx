import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import service1 from '../../assets/img/services/service1.png'
import service2 from '../../assets/img/services/service2.png'
import service3 from '../../assets/img/services/service3.png'
import service4 from '../../assets/img/services/service4.png'
import service5 from '../../assets/img/services/service5.png'
import service6 from '../../assets/img/services/service6.png'

const Services = () => {
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
      <Container className='servicesMain pyb-10'>
        <Row className='align-items-center'>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="serviceContent">
              <span className="serviceSubHeading">why choose us?</span>
              <h4 className="serviceHeading">our services</h4>
              <p className="serviceParagraph my-4 pe-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur cupiditate magnam dolor, nisi eos quos.</p>
              <a href="" className="serviceLink">know more</a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <motion.div
            variants={variant}
            initial="fadeHidden"
            whileInView="fadeVisible"
            viewport={{ once: true }}
            >
              <div className="serviceImages">
                <Row className='justify-content-evenly'>
                  <Col xs={4} sm={4} md={6} lg={4}>
                    <div className='singleService mb-2'>
                    <img src={service1} alt="" />
                    </div>
                  </Col>
                  <Col xs={4} sm={4} md={6} lg={4}>
                    <div className='singleService mb-2'>
                    <img src={service2} alt="" />
                    </div>
                  </Col>
                  <Col xs={4} sm={4} md={6} lg={4}>
                    <div className='singleService mb-2'>
                    <img src={service3} alt="" />
                    </div>
                  </Col>
                  <Col xs={4} sm={4} md={6} lg={4}>
                    <div className='singleService mb-2'>
                    <img src={service4} alt="" />
                    </div>
                  </Col>
                  <Col xs={4} sm={4} md={6} lg={4}>
                    <div className='singleService'>
                    <img src={service5} alt="" />
                    </div>
                  </Col>
                  <Col xs={4} sm={4} md={6} lg={4}>
                    <div className='singleService'>
                    <img src={service6} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Services