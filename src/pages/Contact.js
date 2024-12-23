import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";


const Contact = () => {
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
<h2>Cantact Us</h2>
<div class="breadcrumb__option">
<a href="./index.html">Home</a>
<span>Contact</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="contact spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                    <span className="icon_phone"><FaPhoneAlt /></span>
                    <h4>Phone</h4>
                    <p>+01-3-8888-6868</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                    <span className="icon_pin_alt"><IoLocationOutline /></span>
                    <h4>Address</h4>
                    <p>60-49 Road 11378 New York</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                    <span className="icon_clock_alt"><LuClock /></span>
                    <h4>Open time</h4>
                    <p>10:00 am to 23:00 pm</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                    <span className="icon_mail_alt"><MdOutlineMailOutline /></span>
                    <h4>Email</h4>
                    <p>hello@colorlib.com</p>
                </div>
            </div>
        </div>
    </div>
{/* https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd */}

</section>
{/* map section start */}
<div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                style={{ height: "500px", border: "0" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="SR Digi School Map"
            ></iframe>
            <div className="map-inside">
                <i className="icon_pin"></i>
                <div className="inside-widget">
                    <h4>Hyderabad</h4>
                    <ul>
                        <li>Phone: +91 6281448790</li>
                        <li>Add: H.no: 8-2-68/18, Patel colony, Near SR DIGI school, Champapet, 500079</li>
                    </ul>
                </div>
            </div>
        </div>
{/* map section end */}
{/* contact form start */}
<div className="contact-form spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact__form__title">
                            <h2>Leave Message</h2>
                        </div>
                    </div>
                </div>
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <input type="text" placeholder="Your name" />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <input type="text" placeholder="Your Email" />
                        </div>
                        <div className="col-lg-12 text-center">
                            <textarea placeholder="Your message"></textarea>
                            <button type="submit" className="site-btn">SEND MESSAGE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
{/* contact form end */}

    </div>
  )
}

export default Contact