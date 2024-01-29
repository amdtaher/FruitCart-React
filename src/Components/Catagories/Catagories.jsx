import React, { useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FaCoffee, FaStarHalf, FaStar, FaStarAndCrescent, FaRegStar, FaRegStarHalf, FaStarHalfAlt} from "react-icons/fa";
import product1 from '../../assets/img/product/product-1.jpg'
import product2 from '../../assets/img/product/product-2.jpg'
import product3 from '../../assets/img/product/product-3.jpg'
import product4 from '../../assets/img/product/product-4.jpg'
import product5 from '../../assets/img/product/product-5.jpg'
import product6 from '../../assets/img/product/product-6.jpg'
import product7 from '../../assets/img/product/product-7.jpg'
import product8 from '../../assets/img/product/product-8.jpg'

const Catagories = () => {
  const [active, setactive] = useState('ctg1');
  const fruits = ["banana", "mango", "straberry", "pineapple", "jakefruit", "lemon", "watermelon", "potato"]

  const handle = (exe) => {
    setactive(exe);
  };
  return (
    <>
      <Container className='catagoryMain pyb-10'>
        <Row className='position-relative'>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className='pb-5'>
              <h4 className='catagoryTitle text-center'>catagories</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className='p-0'>
            <ul className='catagoryTab'>
              <li className={`singleTab ${active === 'ctg1' ? 'activeTab' : ''}`} id='ctg1' onClick={()=> handle('ctg1')}><a>catag1</a></li>
              <li className={`singleTab ${active === 'ctg2' ? 'activeTab' : ''}`} id='ctg2' onClick={()=> handle('ctg2')}><a>catag2</a></li>
              <li className={`singleTab ${active === 'ctg3' ? 'activeTab' : ''}`} id='ctg3' onClick={()=> handle('ctg3')}><a>catag3</a></li>
              <li className={`singleTab ${active === 'ctg4' ? 'activeTab' : ''}`} id='ctg4' onClick={()=> handle('ctg4')}><a>catag4</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className='position-relative'>
            <ul className={`singleCatagory ${active === 'ctg1' ? 'show' : 'hide'}`}>
              <li className='singleProduct'>
                <img src={product1} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[0]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product2} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[1]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product3} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[2]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product4} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[3]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product5} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[4]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product6} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[5]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product7} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[6]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product8} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[7]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className='position-relative'>
            <ul className={`singleCatagory position-absolute ${active === 'ctg2' ? 'show' : 'hide'}`}>
              <li className='singleProduct'>
                <img src={product3} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[7]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product4} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[6]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product5} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[5]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product6} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[4]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product7} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[3]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product8} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[2]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product1} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[1]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product2} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[0]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className='position-relative'>
            <ul className={`singleCatagory position-absolute ${active === 'ctg3' ? 'show' : 'hide'}`}>
              <li className='singleProduct'>
                <img src={product8} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[1]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product7} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[3]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product6} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[5]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product5} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[7]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product4} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[0]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product3} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[2]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product2} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[4]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product1} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[6]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className='position-relative'>
            <ul className={`singleCatagory position-absolute ${active === 'ctg4' ? 'show' : 'hide'}`}>
              <li className='singleProduct'>
                <img src={product5} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[0]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product6} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[2]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product7} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[4]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product8} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[6]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product1} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[1]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product2} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[3]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product3} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[7]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
              <li className='singleProduct'>
                <img src={product4} alt="" />
                <div className="catagoryContent">
                  <h4 className='productTitle'>{fruits[0]}</h4>
                  <p className="productCatagory">fruits</p>
                  <span className="productRating">
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStar size={15} color='#ff950a'/>
                    <FaStarHalfAlt size={15} color='#ff950a'/>
                    <FaRegStar size={15} color='#ff950a'/>
                  </span>
                  <h5 className='productPrice'>$400</h5>
                  <a href="" className="productCart">add to cart</a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Catagories