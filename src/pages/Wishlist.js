import React, { useContext } from 'react';
import Contact from '../context';
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
// import { details } from "../components/data"; 

const Wishlist = () => {
  // const { id } = useParams();
  // const product = details.data.find(p => p.id === parseInt(id));
  //  const  discountPercentage =   ((product.price - product.sellingPrice) / product.price) * 100 ;

  const { wishlist, setWishlist, addToCart } = useContext(Contact);
  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter((x) => x.id !== product.id));
  };

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
  };



  return (
    <div className='wishlist-container'>
      <div className='container'>
        <div className='row'>
          <div className='wishlist_heading'>
            <h1>My Wishlist ({wishlist.length})</h1>
          </div>
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <div className='wishlist-items'>
              {wishlist.map((product) => {
                     const discountPercentage = ((product.price - product.sellingPrice) / product.price) * 100;
                return (
                  <Link key={product.id} to={`/imagedetailes/${product.id}`}>
                  <div className='wishlist-item flex'>
                    <div className='wishlist-image'>
                      <img src={product.productImage[0]} alt={product.productName} />
                    </div>
                    <div className='wishlist-text'>
                      <h4>{truncateText(product.productName, 40)}</h4>
                      <div>
                        <div className='flex star'>
                          <div className='flex justify-center align-center'>
                            4.4<IoIosStar />
                          </div>
                          <p>(22)</p>
                        </div>
                        <div className='wishlist-prices'>
                          <h5>₹{product.sellingPrice}.00</h5>
                          <small className='pri_price'>₹{product.price}</small>
                          {discountPercentage > 0 && <span>{discountPercentage.toFixed(0)}% off</span>}
                        </div>
                      </div>
                      <div className='wishlist-btns'>
                        <Link to="/wishlist">
                          <button className='wishlist-remove' onClick={(event) => {
                            event.preventDefault();
                            removeFromWishlist(product);
                          }}>Remove</button>
                        </Link>
                        <Link to="/cart">
                          <button className='ml-4' onClick={(event) => {
                            event.preventDefault();
                            addToCart(product);
                          }}>Add to cart</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
                )
               
})}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
