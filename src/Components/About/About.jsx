import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aboutImg from '../../assets/img/best-seller/best-fruits.png'
import aboutMiniImg1 from '../../assets/img/best-seller/best-fruits-img1.png'
import aboutMiniImg2 from '../../assets/img/best-seller/best-fruits-img2.png'
import aboutMiniImg3 from '../../assets/img/best-seller/best-fruits-img3.png'
import aboutMiniImg4 from '../../assets/img/best-seller/best-fruits-img3.png'
import {motion} from 'framer-motion'

const About = () => {
  const moveVariant = {
    moveHidden: {
        x: -200,
        opacity: 0
    },
    moveVisible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.3,
            delay: 1
        }
    }
}
const fadeVariant = {
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
      <motion.div
      variants={fadeVariant}
      initial="fadeHidden"
      whileInView="fadeVisible"
      viewport={{ once: true }}
      >
        <section className='aboutMain pyb-10'>
            <Container className='about'>
              <Row className='align-items-center'>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <motion.div
                  variants={fadeVariant}
                  initial="fadeHidden"
                  whileInView="fadeVisible"
                  viewport={{ once: true }}
                  >
                    <div className='aboutImage'>
                      <img src={aboutImg} alt="about_Image" />
                    </div>
                  </motion.div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <motion.div
                  variants={moveVariant}
                  initial="moveHidden"
                  whileInView="moveVisible"
                  viewport={{ once: true }}
                  >
                    <div className="aboutContent text-capitalize mt-5">
                      <span className='aboutSubHeading'>we grow and sell</span>
                      <h4 className='aboutHeading'>best fruits for you</h4>
                      <p className='aboutParagraph'>Etiam quis lacus ac metus facilisis lobortis eget at tortororbi et arcu est. Duis convallis nisl eu vestibulum pellentesqe. Aenean non dui sapien. Mauris ornare, nibh a tristique pretium, mauris purus malesuada mauris.</p>
                      <Row className='text-center pt-3 justify-space-between'>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <div className='aboutSingleMini'>
                            <img src={aboutMiniImg1} alt="" />
                            <a href=""><span>conventional <br /> fruits</span></a>
                          </div>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <div className='aboutSingleMini'>
                            <img src={aboutMiniImg2} alt="" />
                            <a href=""><span>conventional <br /> fruits</span></a>
                          </div>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4}>
                          <div className='aboutSingleMini'>
                            <img src={aboutMiniImg3} alt="" />
                            <a href=""><span>conventional <br /> fruits</span></a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Container>
        </section>
      </motion.div>
    </>
  )
}

export default About