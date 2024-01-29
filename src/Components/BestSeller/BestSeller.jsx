import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import product1 from '../../assets/img/best-seller/best-product-img1.jpeg'
import product2 from '../../assets/img/best-seller/best-product-img2.jpeg'
import product3 from '../../assets/img/best-seller/best-product-img3.jpeg'
import product4 from '../../assets/img/best-seller/best-product-img4.jpeg'

const BestSeller = () => {
  const variant = {
    moveHidden: {
        x: -100,
        opacity: 0
    },
    moveVisible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: .5
        }
    },
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
    }
}
  return (
    <>
      <Container className='bestSellerMain pyb-10'>
            <Row className='align-items-center'>
              <Col xs={12} sm={12} md={5} lg={4}>
                <motion.div
                variants={variant}
                initial='fadeHidden'
                whileInView='fadeVisible'
                viewport={{ once: true }}
                >
                  <div className="bestSellerContent">
                    <span className="bestSellerSubHeading">bestSeller</span>
                    <h4 className="bestSellerHeading">products</h4>
                    <p className="bestSellerParagraph my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur cupiditate magnam dolor, nisi eos quos.</p>
                    <a href="" className="bestSellerLink">view all products</a>
                  </div>
                </motion.div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={8}>
                <motion.div
                variants={variant}
                initial='moveHidden'
                whileInView='moveVisible'
                viewport={{ once: true }}
                >
                  <div className="bestSellerImages">
                    <ul className="bestSellerImageLists">
                      <li className='singleSellProduct'><img src={product1} alt="" /><a href=""><span>fruit</span></a></li>
                      <li className='singleSellProduct'><img src={product2} alt="" /><a href=""><span>fruit</span></a></li>
                      <li className='singleSellProduct'><img src={product3} alt="" /><a href=""><span>fruit</span></a></li>
                      <li className='singleSellProduct'><img src={product4} alt="" /><a href=""><span>fruit</span></a></li>
                    </ul>
                  </div>
                </motion.div>
              </Col>
            </Row>
      </Container>
    </>
  )
}

export default BestSeller