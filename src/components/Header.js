import React , { useContext }  from 'react'
import Logo from '../assest/assest/organic/logo(1).png'
// import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Context from '../context';


const Header = () => {
  const cartItems = useContext(Context).cartItems;
  const wishlist = useContext(Context).wishlist;
  
  return (
 <header className='h-20 shadow-md bg-white'>
    <div className=" h-full container mx-auto justify-between flex items-center px-4">
        <div>
        <Link to={"/"}> 
          <img src={Logo} alt="main-logo" />
        </Link>
        </div>
      

    
     <div className='nav__header__menu hidden lg:flex items-center justify-between  '>
       <ul className=' flex'>
        <li className='active'>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/shop"}>SHOP</Link>
        </li>
        <li className='header-dropdown'>
          <Link to={"/"}>PAGES</Link>

          <div className="header-dropdown-content">
                          <div>
                            <p>
                              <Link to={"#"}>Shop Details</Link>
                            </p>
                            <p>
                              <Link to={"/cart"}>Shoping Cart</Link>
                            </p>
                            <p>
                              <Link to={"#"}>Check Out</Link>
                            </p>
                            <p>
                              <Link to={"#"}>Blog Details</Link>
                            </p>
                          </div>
                    </div>
        </li>
        <li>
          <Link to={"/blog"}>BLOG</Link>
        </li>
        <li>
          <Link to={"/contact"}>CONTACT</Link>
        </li>
       </ul>
       
       
        {/* <input type="text" placeholder='Search...' className='w-full outline-none '/>
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
          <IoSearch />
          </div> */}
     </div>

     <div className='flex items-center gap-7 '>
        <div className='text-3xl relative cursor-pointer'>
          <Link to="/wishlist"> 
          <span>   <FaHeart className='w-6'/></span>
          <div className='heart-count bg-red-600 text-white w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-3'>
          <p className='text-xs'>{wishlist.length}</p>
         </div>
          </Link>
          
        </div>

        <div className='text-2xl relative'>
  <Link to="/cart">
    <span><FaShoppingCart /></span>
    <div className='cart-count bg-red-600 text-white w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
      <p className='text-xs'>{cartItems.length}</p>
    </div>
  </Link>
</div>

<div>
  <p className='nav__header__item'>Item:<span className='nav__header__price'>₹{cartItems.reduce((total, item) => total + item.sellingPrice * item.quantity, 0)}.00</span></p>
</div>
</div>
 </div>
 </header>
  )
}

export default Header