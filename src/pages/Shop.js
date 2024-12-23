import React, { useState } from 'react'
import Slider from 'rc-slider';
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Img from '../assest/assest/organic/img1.jpg';
import Img2 from '../assest/assest/organic/img2.jpg';
import Img3 from '../assest/assest/organic/img3.jpg';

const Shop = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };


  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(540);

  const handleSliderChange = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };


  // // Update slider handle positions based on state changes
  // useEffect(() => {
  //   const minHandle = document.querySelector('.ui-slider-handle:first-of-type');
  //   const maxHandle = document.querySelector('.ui-slider-handle:last-of-type');
  //   const range = document.querySelector('.ui-slider-range.ui-widget-header');

  //   if (minHandle) minHandle.style.left = `${((minPrice - 10) / 530) * 100}%`;
  //   if (maxHandle) maxHandle.style.left = `${((maxPrice - 10) / 530) * 100}%`;
  //   if (range) {
  //     range.style.left = `${((minPrice - 10) / 530) * 100}%`;
  //     range.style.width = `${((maxPrice - minPrice) / 530) * 100}%`;
  //   }
  // }, [minPrice, maxPrice]);
  return (


    <>
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
      <section className="breadcrumb-section set-bg">
         <div className="container">
          <div className="row">
<div className="col-lg-12 text-center">
<div className="breadcrumb__text">
<h2>Organi Shop</h2>
<div className="breadcrumb__option">
<a href="./index.html">Home</a>
<span>Shop</span>
</div>
</div>
</div>
</div>
</div>
      </section>
  {/* ===================================================================== */}
 <section class="product spad">
  <div className="container">
    <div className="row">
      {/* left section */}
    <div className="col-lg-3 col-md-5">
  <div className="sidebar">
    <div className="sidebar__item">
      <h4>Department</h4>
      <ul>
        <li><a href="#">Fresh Meat</a></li>
        <li><a href="#">Vegetables</a></li>
        <li><a href="#">Fruit &amp; Nut Gifts</a></li>
        <li><a href="#">Fresh Berries</a></li>
        <li><a href="#">Ocean Foods</a></li>
        <li><a href="#">Butter &amp; Eggs</a></li>
        <li><a href="#">Fastfood</a></li>
        <li><a href="#">Fresh Onion</a></li>
        <li><a href="#">Papayaya &amp; Crisps</a></li>
        <li><a href="#">Oatmeal</a></li>
      </ul>
    </div>
    <div className="sidebar__item">
      <h4>Price</h4>
      <div className="price-range-wrap">
        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
          <Slider
            range
            min={10}
            max={540}
            defaultValue={[10, 378]}
            value={[minPrice, maxPrice]}
            onChange={handleSliderChange}
            trackStyle={{ backgroundColor: 'red', height: 5 }}
            handleStyle={[
              { backgroundColor: 'white', borderColor: 'red', height: 20, width: 20, marginTop: -8 },
              { backgroundColor: 'white', borderColor: 'red', height: 20, width: 20, marginTop: -8 },
            ]}
            railStyle={{ backgroundColor: '#d7d7d7', height: 5 }}
          />
        </div>
        <div className="range-slider">
          <div className="price-input">
            <span className="price">${minPrice}</span>
            <span className="price-separator">-</span>
            <span className="price">${maxPrice}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="sidebar__item sidebar__item__color--option">
      <h4>Colors</h4>
      <div className="sidebar__item__color sidebar__item__color--white">
        <label for="white">
          White
          <input type="radio" id="white" />
        </label>
      </div>
      <div className="sidebar__item__color sidebar__item__color--gray">
        <label for="gray">
          Gray
          <input type="radio" id="gray" />
        </label>
      </div>
      <div className="sidebar__item__color sidebar__item__color--red">
        <label for="red">
          Red
          <input type="radio" id="red" />
        </label>
      </div>
      <div className="sidebar__item__color sidebar__item__color--black">
        <label for="black">
          Black
          <input type="radio" id="black" />
        </label>
      </div>
      <div className="sidebar__item__color sidebar__item__color--blue">
        <label for="blue">
          Blue
          <input type="radio" id="blue" />
        </label>
      </div>
      <div className="sidebar__item__color sidebar__item__color--green">
        <label for="green">
          Green
          <input type="radio" id="green" />
        </label>
      </div>
    </div>
    <div className="sidebar__item">
      <h4>Popular Size</h4>
      <div className="sidebar__item__size">
        <label for="large">
          Large
          <input type="radio" id="large" />
        </label>
      </div>
      <div className="sidebar__item__size">
        <label for="medium">
          Medium
          <input type="radio" id="medium" />
        </label>
      </div>
      <div className="sidebar__item__size">
        <label for="small">
          Small
          <input type="radio" id="small" />
        </label>
      </div>
      <div className="sidebar__item__size">
        <label for="tiny">
          Tiny
          <input type="radio" id="tiny" />
        </label>
      </div>
    </div>
    <div className="sidebar__item">
      <div className="latest-product__text">
        <h4>Latest Products</h4>
        <div className="latest-product__slider owl-carousel owl-loaded owl-drag">
  <div className="owl-stage-outer">
    <div className="owl-stage" style={{transform: 'translate3d(-787px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '1575px'}}>
      <div className="owl-item cloned" style={{width: '262.5px'}}>
        <div className="latest-prdouct__slider__item">
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img}alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img2} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
        </div>
      </div>
      {/* ======= */}
      <div className="owl-item cloned" style={{width: '262.5px'}}>
        <div className="latest-prdouct__slider__item">
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img2} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img3} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
        </div>
      </div>

      {/* ===== */}
      <div className="owl-item cloned" style={{width: '262.5px'}}>
        <div className="latest-prdouct__slider__item">
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img2} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img3} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
        </div>
      </div>
      {/* ===== */}
      <div className="owl-item cloned" style={{width: '262.5px'}}>
        <div className="latest-prdouct__slider__item">
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img2} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img3} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
        </div>
      </div>
      {/* ==== */}
      <div className="owl-item cloned" style={{width: '262.5px'}}>
        <div className="latest-prdouct__slider__item">
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img2} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img3} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
        </div>
      </div>
      {/* ===== */}
      <div className="owl-item cloned" style={{width: '262.5px'}}>
        <div className="latest-prdouct__slider__item">
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img2} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img3} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
        </div>
      </div>
      {/* ========= */}
      <div className="owl-item cloned" style={{width: '262.5px'}}>
        <div className="latest-prdouct__slider__item">
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img2} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
          <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={Img3} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>Crab Pool Security</h6>
              <span>$30.00</span>
            </div>
          </a>
        </div>
      </div>
      {/* ========= */}
    </div>
  </div>
  <div className="owl-nav">
    <button type="button" role="presentation" className="owl-prev">
      <span className="fa fa-angle-left"><span></span></span>
    </button>
    <button type="button" role="presentation" className="owl-next">
      <span className="fa fa-angle-right"><span></span></span>
    </button>
  </div>
  <div className="owl-dots disabled"></div>
</div>

      </div>
    </div>
  </div>
    </div>
       {/* right section */}
       <div className="col-lg-9 col-md-7">
    <div className="product__discount">
        <div className="section-title product__discount__title">
            <h2>Sale Off</h2>
        </div>
        <div className="row">
            <div className="product__discount__slider owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{ transform: "translate3d(-877px, 0px, 0px)", transition: "all 1.2s ease 0s", width: "3510px" }}>
                        <div className="owl-item cloned" style={{ width: "292.5px" }}>
                            <div className="col-lg-4">
                                <div className="product__discount__item">
                                    <div className="product__discount__item__pic set-bg" data-setbg="img/product/discount/pd-4.jpg" style={{ backgroundImage: "url('img/product/discount/pd-4.jpg')" }}>
                                        <div className="product__discount__percent">-20%</div>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__discount__item__text">
                                        <span>Dried Fruit</span>
                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* other owl-item elements */}
                    </div>
                </div>
                <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
                    <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
                </div>
                <div className="owl-dots">
                    <button role="button" className="owl-dot active"><span></span></button>
                    <button role="button" className="owl-dot"><span></span></button>
                </div>
            </div>
        </div>
    </div>
    {/* other elements with class attributes */}
</div>

    </div>
  </div>
 </section>
      

    </>
  )
}

export default Shop