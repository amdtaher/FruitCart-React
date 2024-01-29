import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion'

const packages = () => {
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
    },
    fadeSpecialHidden: {
      opacity:0,
      y: 100
    },
    fadeSpecialVisible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: .5,
            ease: 'easeInOut', 
            }
    }
}
  return (
    <>
      <motion.div
      variants={variant}
      initial='fadeHidden'
      whileInView='fadeVisible'
      viewport={{ once: true }}
      >
        <Container className="packageMain pyb-10">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <h4 className="packageTitle text-center mb-5">our packages</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="singlePackage">
                <h4 className="packageHeading">basic <span>the most recommend</span></h4>
                <span className="packagePrice"><sup>$</sup> 49 <sub>/month</sub></span>
                <ul className="packageBenifitList">
                  <li>html5 & css3 <FaCheck/></li>
                  <li>html5 & css3 <b>X</b></li>
                  <li>html5 & css3 <FaCheck/></li>
                  <li>html5 & css3 <b>X</b></li>
                  <li>html5 & css3 <FaCheck/></li>
                </ul>
                <a href="" className="packageLink">buy now</a>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <motion.div
              variants={variant}
              initial='fadeSpecialHidden'
              whileInView='fadeSpecialVisible'
              viewport={{ once: true }}
              >
                <div className="singlePackage specialPackage">
                  <h4 className="packageHeading">special <span>the most recommend</span></h4>
                  <span className="packagePrice"><sup>$</sup> 49 <sub>/month</sub></span>
                  <ul className="packageBenifitList">
                    <li><span>html5 & css3 </span><FaCheck/></li>
                    <li><span>html5 & css3 </span><FaCheck/></li>
                    <li><span>html5 & css3 </span><FaCheck/></li>
                    <li><span>html5 & css3 </span><FaCheck/></li>
                    <li><span>html5 & css3 </span><FaCheck/></li>
                  </ul>
                  <a href="" className="packageLink">buy now</a>
                </div>
              </motion.div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="singlePackage">
                <h4 className="packageHeading">basic <span>the most recommend</span></h4>
                <span className="packagePrice"><sup>$</sup> 49 <sub>/month</sub></span>
                <ul className="packageBenifitList">
                  <li>html5 & css3 <FaCheck/></li>
                  <li>html5 & css3 <b>X</b></li>
                  <li>html5 & css3 <FaCheck/></li>
                  <li>html5 & css3 <b>X</b></li>
                  <li>html5 & css3 <FaCheck/></li>
                </ul>
                <a href="" className="packageLink">buy now</a>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  )
}

export default packages