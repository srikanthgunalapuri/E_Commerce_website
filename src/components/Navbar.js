import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import Language from "../assest/assest/organic/language.png"

const Navbar = () => {
  return (
    <nav className='nav-main-conatiner w-full h-12 hidden lg:flex items-center justify-center'>
        <div className='container w-full h-full flex justify-center items-center'>
            <div className='row w-full flex justify-between'>

            <div className='navbar-left'>
                <ul className='flex items-center justify-center'>
                  <li className='gmail flex items-center justify-center pr-4 border-r-2'>
                    <MdEmail className='h-4 w-6'/><span>gunalpurisrikanth@gmail.com</span>
                  </li>
                  <li className='pl-4'>Free Shipping for all Order of $99</li>
                </ul>
            </div>
              
            <div className='navbar-right flex items-center justify-center'>
                 <div className="header__top__right__social flex pr-4 gap-5">
                   <Link to={"#"}> 
                   <FaFacebookF />
                   </Link>
                   <Link to={"#"}>
                   <AiOutlineTwitter />
                   </Link>
                   <Link to={"#"}>
                   <GrLinkedinOption />
                   </Link>
                   <Link to={"#"}>
                   <FaPinterestP />
                   </Link>
                 </div>
                 <div className='header__top__right__language dropdown flex items-center justify-center cursor-pointer gap-3 px-4 border-x-2'>
                   <img src={Language} alt="navbar-Language" />
                   <p>English</p>
                    <span><IoIosArrowDown /></span>
                    <div className="dropdown-content">
                          <ul>
                            <li>
                              <Link to={"#"}>Spanis</Link>
                            </li>
                            <li>
                              <Link to={"#"}>English</Link>
                            </li>
                          </ul>
                    </div>
                 </div>
                 <div className='pl-4'>
                    <Link to={"/Login"} className='flex justify-center items-center gap-2'>
                    <FaUser />
                    <span className='pt-1'>Loing</span>
                    </Link>
                  
                 </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar