import React from 'react'
import logo from "../assest/assest/organic/logo(1).png"
import PaymentItem from "../assest/assest/organic/payment-item.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { RiPinterestFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <footer className="footer spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="footer__about">
          <div className="footer__about__logo">
            <a href="./index.html"><img src={logo} alt="" /></a>
          </div>
          <ul>
            <li>Address: 60-49 Hyderabad</li>
            <li>Phone: +65 11.188.888</li>
            <li>Email: gunalapurisrikanth@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
        <div className="footer__widget">
          <h6>Useful Links</h6>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">About Our Shop</a></li>
            <li><a href="#">Secure Shopping</a></li>
            <li><a href="#">Delivery infomation</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Our Sitemap</a></li>
          </ul>
          <ul>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Innovation</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="footer__widget">
          <h6>Join Our Newsletter Now</h6>
          <p>Get E-mail updates about our latest shop and special offers.</p>
          <form action="#">
            <input type="text" placeholder="Enter your mail" />
            <button type="submit" className="site-btn">Subscribe</button>
          </form>
          <div className="footer__widget__social">
            <ul>
              <li>
              <a href="#"><FaFacebookF /></a>
              </li>
              <li>
              <a href="#"><IoLogoInstagram /></a>
              </li>
              <li>
              <a href="#"><FaTwitter /></a>
              </li>
              <li>
              <a href="#"><RiPinterestFill /></a>
              </li>

            </ul>
           
          

          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="footer__copyright">
          <div className="footer__copyright__text">
            <p>
              Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
              <script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <span>Srikanth Gunalapuri</span>
            </p>
          </div>
          <div className="footer__copyright__payment">
            <img src={PaymentItem} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    
    </>
     
  )
}

export default Footer