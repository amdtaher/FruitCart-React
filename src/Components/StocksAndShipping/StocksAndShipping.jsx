import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'
import product1 from '../../assets/img/counter-img/counter-img1.jpeg';
import product2 from '../../assets/img/counter-img/counter-img2.jpeg';
import product3 from '../../assets/img/counter-img/counter-img3.jpeg';
import product4 from '../../assets/img/counter-img/counter-img4.jpeg';
import shipping1 from '../../assets/img/icons/shipping1.png';
import shipping2 from '../../assets/img/icons/shipping2.png';
import shipping3 from '../../assets/img/icons/shipping3.png';
import shipping4 from '../../assets/img/icons/shipping4.png';

const StocksAndShipping = () => {
  const variant={
  moveHidden: {
    x: -300,
    opacity: 0
  },
  moveVisible: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1.2,
          delay: .5
      }
  },
  moveReverseHidden: {
    x: 300,
    opacity: 0
  },
  moveReverseVisible: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1.2,
          delay: .3
      }
  },
}
  return (
    <>

      <section className='stocksAndShippingMain pyb-10 text-capitalize'>
        <Container className='stocksAndShipping d-flex gap-5'>
          <Row className='align-items-center justify-content-between'>
            <Col xs={12} sm={12} md={12} lg={12}>
              <h4 className="stocksTitle">our stocks</h4>
              <motion.div
              variants={variant}
              initial='moveHidden'
              whileInView='moveVisible'
              viewport={{ once: true }}
              >
                <ul className="stocks">
                  <li className='singleStock'>
                    <img src={product1} alt="" />
                    <div className='stocksContent'>
                      <h4>2100</h4>
                      <span>strawberry</span>
                    </div>
                  </li>
                  <li className='singleStock'>
                    <img src={product2} alt="" />
                    <div className='stocksContent'>
                      <h4>1800</h4>
                      <span>blueberry</span>
                    </div>
                  </li>
                  <li className='singleStock'>
                    <img src={product3} alt="" />
                    <div className='stocksContent'>
                      <h4>1500</h4>
                      <span>raspberry</span>
                    </div>
                  </li>
                  <li className='singleStock'>
                    <img src={product4} alt="" />
                    <div className='stocksContent'>
                      <h4>2000</h4>
                      <span>blackberry</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <h4 className="shippingTitle">shipping process</h4>
              <motion.div
              variants={variant}
              initial='moveReverseHidden'
              whileInView='moveReverseVisible'
              viewport={{ once: true }}
              >
                <ul className="shipping">
                  <li className='singleShipping'>
                    <img src={shipping1} alt="" />
                    <div className='shippingContent'>
                      <h4>free <br /> shipping</h4>
                    </div>
                  </li>
                  <li className='singleShipping'>
                    <img src={shipping2} alt="" />
                    <div className='shippingContent'>
                      <h4>order <br /> tracking</h4>
                    </div>
                  </li>
                  <li className='singleShipping'>
                    <img src={shipping3} alt="" />
                    <div className='shippingContent'>
                      <h4>fast <br /> delivery</h4>
                    </div>
                  </li>
                  <li className='singleShipping'>
                    <img src={shipping4} alt="" />
                    <div className='shippingContent'>
                      <h4>easy <br /> return</h4>
                    </div>
                  </li>
                </ul>
                </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default StocksAndShipping;
