import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import blogimg1 from '../../assets/img/Blogs/blog-1.jpg'
import blogimg2 from '../../assets/img/Blogs/blog-2.jpg'
import blogimg3 from '../../assets/img/Blogs/blog-3.jpg'
import blogimg4 from '../../assets/img/Blogs/blog-2.jpg'

const blogs = () => {
  const variant = {
    fadeHidden: {
        opacity: 0,
    },
    fadeVisible1: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .5,
            ease: 'easeInOut', 
            }
    },
    fadeVisible2: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 1,
            ease: 'easeInOut', 
            }
    },
    fadeVisible3: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 1.5,
            ease: 'easeInOut', 
            }
    },
    fadeVisible4: {
        opacity: 1,
        transition: {
            duration: 2.5,
            delay: 2,
            ease: 'easeInOut', 
            }
    }
}
  return (
    <>
      <Container className="blogsMain pyb-10">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h4 className="blogsTitle text-center pb-5">our Latestt blogs</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={3}>
            <motion.div
            variants={variant}
            initial='fadeHidden'
            whileInView='fadeVisible1'
            viewport={{ once: true }}
            >
              <div className="singleBlog">
                <img src={blogimg1} alt="" />
                <div className="blogContent">
                  <h4 className="blogTitle">Latest blog1</h4>
                  <p className="blogParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, necessitatibus!</p>
                </div>
                <a href="" className="blogLink">know more</a>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <motion.div
            variants={variant}
            initial='fadeHidden'
            whileInView='fadeVisible2'
            viewport={{ once: true }}
            >
              <div className="singleBlog">
                <img src={blogimg2} alt="" />
                <div className="blogContent">
                  <h4 className="blogTitle">Latest blog2</h4>
                  <p className="blogParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, necessitatibus!</p>
                </div>
                <a href="" className="blogLink">know more</a>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <motion.div
            variants={variant}
            initial='fadeHidden'
            whileInView='fadeVisible3'
            viewport={{ once: true }}
            >
              <div className="singleBlog">
                <img src={blogimg3} alt="" />
                <div className="blogContent">
                  <h4 className="blogTitle">Latest blog3</h4>
                  <p className="blogParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, necessitatibus!</p>
                </div>
                <a href="" className="blogLink">know more</a>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <motion.div
            variants={variant}
            initial='fadeHidden'
            whileInView='fadeVisible4'
            viewport={{ once: true }}
            >
              <div className="singleBlog">
                <img src={blogimg4} alt="" />
                <div className="blogContent">
                  <h4 className="blogTitle">Latest blog4</h4>
                  <p className="blogParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, necessitatibus!</p>
                </div>
                <a href="" className="blogLink">know more</a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default blogs