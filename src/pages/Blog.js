import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
         <section className='hero__page hero-normal'>
        <div className="container">
          <div className="row">

            <div className='col-lg-3 p-right'>
              <div className="hero__categories">
                <div className="hero__categories__all bghover" onClick={toggleMenu}>
                  <div className='menu__hero__categories__all'>
                    <IoMenu />
                    <span>All departments</span>

                  </div>

                  <div>
                  {/* <span>&#9660;</span>  */}
                    <MdKeyboardArrowDown />
                  </div>
                </div>
               
                  <ul className={`menu-list ${isVisible ? 'visible' : ''}`}>
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
             
              </div>
            </div>


            <div className='col-lg-9'>
              <div className='hero__search'>
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All categories
                      {/* <span><MdKeyboardArrowDown /></span> */}
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button className='site-btn bghover'>Search</button>
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
              {/* <div className='hero__banner set-bg'>
                <div className='hero__banner__text'>
                  <span>FRUIT FRESH</span>
                  <h2>"FRUIT FRESH "
                    <br />
                    "100% Organic"
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className='primary-btn bghover'>SHOP NOW</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section class="breadcrumb-section set-bg">
         <div class="container">
          <div class="row">
<div class="col-lg-12 text-center">
<div class="breadcrumb__text">
<h2>Blog</h2>
<div class="breadcrumb__option">
<a href="./index.html">Home</a>
<span>Blog</span>
</div>
</div>
</div>
</div>
</div>
</section>
    </div>
  )
}

export default Blog