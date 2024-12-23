


import React, { useState, useEffect, useRef, useContext } from 'react';
// import axios from 'axios';
import { IoMenu } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { details } from "../components/data"; // Make sure this path is correct
import { FaRegCalendar } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
// import { details } from './ProductDetails'; 
import Context from '../context';
import Banner1 from "../assest/assest/organic/banner-1.jpg"
import Banner2 from "../assest/assest/organic/banner-2.jpg"
import Img from '../assest/assest/organic/img1.jpg';
import Img2 from '../assest/assest/organic/img2.jpg';
import Img3 from '../assest/assest/organic/img3.jpg';
import Img4 from '../assest/assest/organic/img4.jpg';
import Img5 from '../assest/assest/organic/img5.jpg';
import Img6 from '../assest/assest/organic/img6.jpg';
import Img7 from '../assest/assest/organic/img7.jpg';
import Lp1 from "../assest/assest/organic/lp-1.jpg";
import Lp2 from "../assest/assest/organic/lp-2.jpg";
import Lp3 from "../assest/assest/organic/lp-3.jpg";
import Blog1 from "../assest/assest/organic/blog-1.jpg" ;
import Blog2 from "../assest/assest/organic/blog-2.jpg" ;
import Blog3 from "../assest/assest/organic/blog-3.jpg" ;
import { Link } from 'react-router-dom';




const Home = () => {

  const { addToCart, addToWishlist } = useContext(Context);
  const [showCategories, setShowCategories] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const stage = slider.querySelector('.owl-stage');
    const prevButton = slider.querySelector('.owl-prev');
    const nextButton = slider.querySelector('.owl-next');
    const itemWidth = 292.5;

    let intervalId = null;

    const scrollNextItem = () => {
      stage.style.transition = 'transform 1.2s ease';
      stage.style.transform = `translateX(-${itemWidth}px)`;

      setTimeout(() => {
        const firstItem = stage.children[0];
        stage.appendChild(firstItem);
        stage.style.transition = '';
        stage.style.transform = 'translateX(0)';
      }, 1200);
    };

    const startAutoScroll = () => {
      intervalId = setInterval(scrollNextItem, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    startAutoScroll();

    const handlePrevButtonClick = () => {
      stopAutoScroll();
      const lastItem = stage.lastElementChild;
      stage.insertBefore(lastItem, stage.firstElementChild);
      stage.style.transition = '';
      stage.style.transform = `translateX(${itemWidth}px)`;

      setTimeout(() => {
        stage.style.transition = 'transform 1.2s ease';
        stage.style.transform = 'translateX(0)';
      }, 100);
    };

    const handleNextButtonClick = () => {
      stopAutoScroll();
      scrollNextItem();
    };

    prevButton.addEventListener('click', handlePrevButtonClick);
    nextButton.addEventListener('click', handleNextButtonClick);

    return () => {
      clearInterval(intervalId);
      prevButton.removeEventListener('click', handlePrevButtonClick);
      nextButton.removeEventListener('click', handleNextButtonClick);
    };
  }, []);

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories);
  };


  const [selectedCategory, setSelectedCategory] = useState('All'); // Category state

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' ? details.data : details.data.filter(product => product.category === selectedCategory);


  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
  };


 
  return (
    <>
 <section className="hero__page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories pr-6">
                <div className="hero__categories__all bghover" onClick={handleCategoriesClick}>
                  <IoMenu />
                  <span>All departments</span>
                  <MdKeyboardArrowDown />
                </div>
                {showCategories && (
                  <ul>
                    <li>
                      <a href="##">Vegetables</a>
                    </li>
                    <li>
                      <a href="#">Fruit & Nut Gifts</a>
                    </li>
                    <li>
                      <a href="#">Fresh Berries</a>
                    </li>
                    <li>
                      <a href="#">Ocean Foods</a>
                    </li>
                    <li>
                      <a href="#">Butter & Eggs</a>
                    </li>
                    <li>
                      <a href="#">Fastfood</a>
                    </li>
                    <li>
                      <a href="#">Fresh Onion</a>
                    </li>
                    <li>
                      <a href="#">Papayaya & Crisps</a>
                    </li>
                    <li>
                      <a href="#">Oatmeal</a>
                    </li>
                    <li>
                      <a href="#">Fresh Bananas</a>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">All categories</div>
                    <input type="text" placeholder="What do you need?"
                   
                   />
                    <button className="site-btn bghover">Search</button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div className="hero__banner set-bg">
                <div className="hero__banner__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable
                    <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn bghover">SHOP NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
 </section>
 <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel owl-loaded owl-drag" ref={sliderRef}>
              <div className="owl-stage-outer">
                <div className="owl-stage" style={{ width: '3803px' }}>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img})` }}>
                        <h5>
                          <a href="#">Dried Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img2})` }}>
                        <h5>
                          <a href="#">Vegetables</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img3})` }}>
                        <h5>
                          <a href="#">Drink Fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img4})` }}>
                        <h5>
                          <a href="#">Drink Fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img5})` }}>
                        <h5>
                          <a href="#">Fresh Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img6})` }}>
                        <h5>
                          <a href="#">Dried Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img7})` }}>
                        <h5>
                          <a href="#">Vegetables</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img3})` }}>
                        <h5>
                          <a href="#">Drink Fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img5})` }}>
                        <h5>
                          <a href="#">Drink Fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img})` }}>
                        <h5>
                          <a href="#">Fresh Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img6})` }}>
                        <h5>
                          <a href="#">Dried Fruit</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img3})` }}>
                        <h5>
                          <a href="#">Vegetables</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '292.5px' }}>
                    <div className="col-lg-3">
                      <div className="categories__item set-bg" style={{ backgroundImage: `url(${Img2})` }}>
                        <h5>
                          <a href="#">Drink Fruits</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <span className="fa fa-angle-left">
                    <MdOutlineKeyboardArrowLeft />
                    <span></span>
                  </span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span className="fa fa-angle-right">
                    <span>
                      <MdKeyboardArrowRight />
                    </span>
                  </span>
                </button>
              </div>
              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
</section>
<section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Product</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryClick('All')} data-filter="*">All</li>
                <li className={selectedCategory === 'fruits' ? 'active' : ''} onClick={() => handleCategoryClick('fruits')} data-filter="fruits">Fruits</li>
                <li className={selectedCategory === 'dry fruits' ? 'active' : ''} onClick={() => handleCategoryClick('dry fruits')} data-filter=".fresh-meat">Dry Fruits</li>
                <li className={selectedCategory === 'vegetables' ? 'active' : ''} onClick={() => handleCategoryClick('vegetables')} data-filter=".vegetables">Vegetables</li>
                <li className={selectedCategory === 'ayurvadica' ? 'active' : ''} onClick={() => handleCategoryClick('ayurvadica')} data-filter=".fastfood">Ayurveda</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter" id="MixItUp9E8392">
          {filteredProducts.map((product, index) => (
            
 <div key={index} className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category}`}>
   <Link to={`/imagedetailes/${product.id}`}>
              <div className="featured__item">
                <div className="featured__item__pic">
                  <img src={product?.productImage[0]} alt={product.productName} />
                  <ul className="featured__item__pic__hover">
                    <Link to="/">
                    <li><a href="#" onClick={() => addToWishlist(product)}><FaHeart className='fa'/></a></li>
                    </Link>
                    <li><a href="#"><FaRetweet className='fa'/></a></li>
                    <Link to="/cart">
                    <li><a onClick={() => addToCart(product)}><IoMdCart className='fa'/></a></li>
                    </Link>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">{truncateText(product.productName, 40)}</a></h6>
                  <div className='flex justify-center items-center'>
                  <h5>₹{product.sellingPrice}.00</h5>
                  <small className='pri_price'>₹{product.price}</small>
                  </div>
                </div>
              </div>
               </Link>
            </div>
           
           
          ))}
        </div>
      </div>
    </section>
<div className="banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="banner__pic">
          <img src={Banner1} alt="" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="banner__pic">
          <img src={Banner2} alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<section className="latest-product spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="latest-product__text">
          <h4>Latest Products</h4>
          <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{transform: "translate3d(-719px, 0px, 0px)" , transition: "all 1.2s ease 0s" , width: "2160px"}}>
                <div className="owl-item cloned" style={{width:"359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width:"359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item active" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev"><span className="fa fa-angle-left"><MdKeyboardArrowLeft /></span></button>
              <button type="button" role="presentation" className="owl-next"><span className="fa fa-angle-right"><MdOutlineKeyboardArrowRight /></span></button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="latest-product__text">
          <h4>Top Rated Products</h4>
          <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{transform: "translate3d(-719px, 0px, 0px)", transition: "all 1.2s ease 0s", width: "2160px"}}>
                <div className="owl-item cloned" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item active" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev"><span className="fa fa-angle-left"><MdKeyboardArrowLeft /></span></button>
              <button type="button" role="presentation" className="owl-next"><span className="fa fa-angle-right"><MdOutlineKeyboardArrowRight /></span></button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="latest-product__text">
          <h4>Review Products</h4>
          <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{transform: "translate3d(-719px, 0px, 0px)", transition: "all 1.2s ease 0s", width: "2160px"}}>
                <div className="owl-item cloned" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width:"359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item active" style={{width:"359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item" style={{width : "359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width:"359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{width:"359.99px"}}>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp1} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp2} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src={Lp3} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev"><span className="fa fa-angle-left"><MdKeyboardArrowLeft /></span></button>
              <button type="button" role="presentation" className="owl-next"><span className="fa fa-angle-right"><MdOutlineKeyboardArrowRight /></span></button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="from-blog spad">
  <div className="container">
    <div className="row" style={{width : "1170px"}}>
      <div className="col-lg-12">
        <div className="section-title from-blog__title">
          <h2>From The Blog</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="blog__item">
          <div className="blog__item__pic">
            <img src={Blog1} alt="" />
          </div>
          <div className="blog__item__text">
            <ul>
              <li><FaRegCalendar /> May 4,2019</li>
              <li><BiMessageRounded /> 5</li>
            </ul>
            <h5><a href="#">Cooking tips make cooking simple</a></h5>
            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="blog__item">
          <div className="blog__item__pic">
            <img src={Blog2} alt="" />
          </div>
          <div className="blog__item__text">
            <ul>
              <li><FaRegCalendar />May 4,2019</li>
              <li><BiMessageRounded /> 5</li>
            </ul>
            <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="blog__item">
          <div className="blog__item__pic">
            <img src={Blog3} alt="" />
          </div>
          <div className="blog__item__text">
            <ul>
              <li><FaRegCalendar /> May 4,2019</li>
              <li><BiMessageRounded /> 5</li>
            </ul>
            <h5><a href="#">Visit the clean farm in the US</a></h5>
            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Home;
