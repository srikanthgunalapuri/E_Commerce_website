// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Context from '../context';

// const Cart = () => {
//   const { cartItems, setCartItems } = useContext(Context);
//   const navigate = useNavigate();

//   const inc = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     setCartItems(cartItems.map((item) => (item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item)));
//   };

//   const der = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist) {
//       if (exist.quantity - 1 === 0) {
//         setCartItems(cartItems.filter((item) => item.id !== product.id));
//       } else {
//         setCartItems(cartItems.map((item) => (item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item)));
//       }
//     }
//   };

//   const removeCart = (product) => {
//     setCartItems(cartItems.filter((x) => x.id !== product.id));
//   };

//   const totalOriginalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
//   const totalSellingPrice = cartItems.reduce((sellingPrice, item) => sellingPrice + item.quantity * item.sellingPrice, 0);
//   // const DeliveryCharges = 190;
//   const discount = totalOriginalPrice;
//   const buyMoreSaveMore = totalOriginalPrice * 0.03 * cartItems.length;
//   const packingFee = 60 * cartItems.length;
//   const tax = totalSellingPrice * 0.03;
//   const DeliveryCharges = cartItems.length === 0 ? 0 : 50 * cartItems.length; 
//   const totalSaving = discount + buyMoreSaveMore + DeliveryCharges;
//   const totalAmount = totalSellingPrice - buyMoreSaveMore + packingFee + tax;

//   const handleBuyNow = (item) => {
//     navigate('/paypage', { state: { cartItems: [{ ...item, quantity: 1 }] } });
//   };

//   const handleCheckout = () => {
//     navigate('/paypage', { state: { cartItems } });
//   };

//   return (
//     <section className="cart_page">
//       <div className="container">
//         <div className="row">
//           {cartItems.length === 0 && (
//             <div className="empty-cart">
//               <h2>Cart is Empty</h2>
//               <Link to="/">
//                 <button>Shopping</button>
//               </Link>
//             </div>
//           )}
//           <div className="cart_main_container">
//             <div className="cart_container">
//               <div className="cart_product">
//                 {cartItems.map((item) => (
//                   <div className="cart_box" key={item.id}>
//                     <div className="cart_product_container">
//                       <div className="cart_img_box">
//                         <Link to={`/imagedetailes/${item.id}`}>
//                           <img src={item.productImage[0]} alt="cart-images" />
//                         </Link>
//                       </div>
//                       <div className="cart_detail_container">
//                         <div className="d-flex">
//                           <div className="cart_item_detail">
//                             <h5>{item.productName}</h5>
//                             <div className="cart-prices">
//                               <small className="pri_price">₹{item.price}</small>
//                               <h3>₹{item.sellingPrice}</h3>
//                               <span>18% off</span>
//                             </div>
//                             <div>
//                               <button className="Cart_dec" onClick={() => der(item)}>-</button>
//                               <input type="text" value={item.quantity} readOnly />
//                               <button className="Cart_inc" onClick={() => inc(item)}>+</button>
//                             </div>
//                             <h3>Sub Total: ₹{item.quantity * item.sellingPrice}.00</h3>
//                           </div>
//                         </div>
//                         <div className="cart_payment">
//                           <button className="btn-payment cart-payment-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
//                           <button className="remove_Cart" onClick={() => removeCart(item)}>REMOVE</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {cartItems.length > 0 && (
//               <div className="totalprice_section">
//                 <div className="PRICE_DETAILS">
//                   <h1>PRICE DETAILS</h1>
//                 </div>
//                 <div className="flex flex-col">
//                   <div className="prices">
//                     <p>
//                       Price ({cartItems.length} items)
//                     </p>
//                     <p>₹{totalSellingPrice.toFixed(2)}</p>
//                   </div>
//                   {/* <div className="prices">
//                     <p>Discount</p>
//                     <span>− ₹{discount.toFixed(2)}</span>
//                   </div> */}
//                   <div className="prices">
//                     <p>Buy more & save more</p>
//                     <span>− ₹{buyMoreSaveMore.toFixed(2)}</span>
//                   </div>
//                   <div className="prices">
//                     <p>Delivery Charges</p>
//                     <span><small>₹{DeliveryCharges}</small>Free</span>
//                   </div>
//                   <div className="prices">
//                     <p>Secured Packaging Fee</p>
//                     <p>₹{packingFee}</p>
//                   </div>
//                   <div className="prices">
//                     <p>GST</p>
//                     <p>₹{tax.toFixed(2)}</p>
//                   </div>
//                 </div>
//                 <div className="total-price">
//                   <h1>Total Amount</h1>
//                   <h1>₹{totalAmount.toFixed(2)}</h1>
//                 </div>
//                 <div className="total-saving">
//                   <p> You will save ₹{totalSaving.toFixed(2)} on this order</p>
//                 </div>
//                 <div className="payment_btn">
//                   <button className="checkout" onClick={handleCheckout}>CheckOut</button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;


import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../context';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(Context);
  const navigate = useNavigate();

  const inc = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    setCartItems(cartItems.map((item) => (item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item)));
  };

  const der = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      if (exist.quantity - 1 === 0) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        setCartItems(cartItems.map((item) => (item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item)));
      }
    }
  };

  const removeCart = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  const totalOriginalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  const totalSellingPrice = cartItems.reduce((sellingPrice, item) => sellingPrice + item.quantity * item.sellingPrice, 0);
  const discount = totalOriginalPrice - totalSellingPrice;
  // const buyMoreSaveMore = totalOriginalPrice * 0.03 * cartItems.length;
  const packingFee = 60 * cartItems.length;
  const tax = totalSellingPrice * 0.03;
  const DeliveryCharges = cartItems.length === 0 ? 0 : 50 * cartItems.length;
  const totalSaving = discount + DeliveryCharges;
  const totalAmount = totalOriginalPrice - discount  + packingFee + tax;

  const handleBuyNow = (item) => {
    navigate('/paypage', { state: { cartItems: [{ ...item, quantity: 1 }] } });
  };

  const handleCheckout = () => {
    navigate('/paypage', { state: { cartItems } });
  };

  return (
    <section className="cart_page">
      <div className="container">
        <div className="row">
          {cartItems.length === 0 && (
            <div className="empty-cart">
              <h2>Cart is Empty</h2>
              <Link to="/">
                <button>Shopping</button>
              </Link>
            </div>
          )}
          <div className="cart_main_container">
            <div className="cart_container">
              <div className="cart_product">
                {cartItems.map((item) => {
                  const discountPercentage = ((item.price - item.sellingPrice) / item.price) * 100;
                  return (
                    <div className="cart_box" key={item.id}>
                      <div className="cart_product_container">
                        <div className="cart_img_box">
                          <Link to={`/imagedetailes/${item.id}`}>
                            <img src={item.productImage[0]} alt="cart-images" />
                          </Link>
                        </div>
                        <div className="cart_detail_container">
                          <div className="d-flex">
                            <div className="cart_item_detail">
                              <h5>{item.productName}</h5>
                              <div className="cart-prices">
                                <small className="pri_price">₹{item.price}</small>
                                <h3>₹{item.sellingPrice}</h3>
                                {discountPercentage > 0 && <span>{discountPercentage.toFixed(0)}% off</span>}
                              </div>
                              <div>
                                <button className="Cart_dec" onClick={() => der(item)}>-</button>
                                <input type="text" value={item.quantity} readOnly />
                                <button className="Cart_inc" onClick={() => inc(item)}>+</button>
                              </div>
                              <h3>Sub Total: ₹{item.quantity * item.sellingPrice}.00<small className="pri_price">₹{item.quantity * item.price}</small></h3>
                            </div>
                          </div>
                          <div className="cart_payment">
                            <button className="btn-payment cart-payment-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
                            <button className="remove_Cart" onClick={() => removeCart(item)}>REMOVE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {cartItems.length > 0 && (
              <div className="totalprice_section">
                <div className="PRICE_DETAILS">
                  <h1>PRICE DETAILS</h1>
                </div>
                <div className="flex flex-col">
                  <div className="prices">
                    <p>
                      Price ({cartItems.length} items)
                    </p>
                    <p>₹{totalOriginalPrice.toFixed(2)}</p>
                  </div>
                  <div className="prices">
                    <p>Discount</p>
                    <span>− ₹{discount.toFixed(2)}</span>
                  </div>
                  {/* <div className="prices">
                    <p>Buy more & save more</p>
                    <span>− ₹{buyMoreSaveMore.toFixed(2)}</span>
                  </div> */}
                  <div className="prices">
                    <p>Delivery Charges</p>
                    <span><small>₹{DeliveryCharges}</small>Free</span>
                  </div>
                  <div className="prices">
                    <p>Secured Packaging Fee</p>
                    <p>₹{packingFee}</p>
                  </div>
                  <div className="prices">
                    <p>GST</p>
                    <p>₹{tax.toFixed(2)}</p>
                  </div>
                </div>
                <div className="total-price">
                  <h1>Total Amount</h1>
                  <h1>₹{totalAmount.toFixed(2)}</h1>
                </div>
                <div className="total-saving">
                  <p> You will save ₹{totalSaving.toFixed(2)} on this order</p>
                </div>
                <div className="payment_btn">
                  <button className="checkout" onClick={handleCheckout}>CheckOut</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;


// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Context from '../context';

// const Cart = () => {
//   const { cartItems, setCartItems } = useContext(Context);

//   function inc(product) {
//     const exist = cartItems.find((x) => x.id === product.id);
//     setCartItems(cartItems.map((item) => (item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item)));
//   }

//   function der(product) {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist) {
//       if (exist.quantity - 1 === 0) {
//         setCartItems(cartItems.filter((item) => item.id !== product.id));
//       } else {
//         setCartItems(cartItems.map((item) => (item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item)));
//       }
//     }
//   }

//   function removeCart(product) {
//     setCartItems(cartItems.filter((x) => x.id !== product.id));
//   }

//   const totalOriginalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
//   const totalSellingPrice = cartItems.reduce((sellingPrice, item) => sellingPrice + item.quantity * item.sellingPrice, 0);

//   const discount = totalOriginalPrice * 0.08 * cartItems.length;
//   const buyMoreSaveMore = totalOriginalPrice * 0.03 * cartItems.length;
//   const packingFee = cartItems.length * 20;
//   const tax = totalSellingPrice * 0.03;
//   const totalSaving = discount + buyMoreSaveMore;
//   const totalAmount = totalSellingPrice - discount - buyMoreSaveMore + packingFee + tax;


//   return (
//     <>
//       <section className="cart_page">
//         <div className="container">
//           <div className="row">
//             {cartItems.length === 0 && (
//               <div className="empty-cart">
//                 <h2>Cart is Empty</h2>
//                 <Link to="/">
//                   <button>Shopping</button>
//                 </Link>
//               </div>
//             )}
//             <div className="cart_main_container">
//               <div className="cart_container">
//                 <div className="cart_product">
//                   {cartItems.map((item) => (
//                     <div className="cart_box" key={item.id}>
//                       <div className="cart_product_container">
//                         <div className="cart_img_box">
//                           <Link to={`/imagedetailes/${item.id}`}>
//                             <img src={item.productImage[0]} alt="cart-images" />
//                           </Link>
//                         </div>
//                         <div className="cart_detail_container">
//                           <div className="d-flex">
//                             <div className="cart_item_detail">
//                               <h5>{item.productName}</h5>
//                               <div className="cart-prices">
//                                 <small className="pri_price">₹{item.price}</small>
//                                 <h3>₹{item.sellingPrice}</h3>
//                                 <span>18% off</span>
//                               </div>
//                               <div>
//                                 <button className="Cart_dec" onClick={() => der(item)}>-</button>
//                                 <input type="text" value={item.quantity} readOnly />
//                                 <button className="Cart_inc" onClick={() => inc(item)}>+</button>
//                               </div>
//                               <h3>Sub Total: ₹{item.quantity * item.sellingPrice}.00</h3>
//                             </div>
//                           </div>
//                           <div className="cart_payment">
//                             <Link to="/payment">
//                               <button className="btn-payment cart-payment-btn">Buy Now</button>
//                             </Link>
//                             <button className="remove_Cart" onClick={() => removeCart(item)}>REMOVE</button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {cartItems.length > 0 && (
//                 <div className="totalprice_section">
//                   <div className="PRICE_DETAILS">
//                     <h1>PRICE DETAILS</h1>
//                   </div>
//                   <div className="flex flex-col">
//                     <div className="prices">
//                       <p>
//                         Price ({cartItems.length} items)
//                       </p>
//                       <p>₹{totalSellingPrice}.00</p>
//                     </div>
//                     <div className="prices">
//                       <p>Discount</p>
//                       <span>− ₹{discount.toFixed(2)}</span>
//                     </div>
//                     <div className="prices">
//                       <p>Buy more & save more</p>
//                       <span>− ₹{buyMoreSaveMore.toFixed(2)}</span>
//                     </div>
//                     <div className="prices">
//                       <p>Delivery Charges</p>
//                       <span><small>₹{190}</small>Free</span>
//                     </div>
//                     <div className="prices">
//                       <p>Secured Packaging Fee</p>
//                       <p>₹{packingFee}</p>
//                     </div>
//                     <div className="prices">
//                       <p>Tax</p>
//                       <p>₹{tax.toFixed(2)}</p>
//                     </div>
//                   </div>
//                   <div className="total-price">
//                     <h1>Total Amount</h1>
//                     <h1>₹{totalAmount.toFixed(2)}</h1>
//                   </div>
//                   <div className="total-saving">
//                     <p>Your total saving on this order: ₹{totalSaving.toFixed(2)}</p>
//                   </div>
//                   <div className="payment_btn">
//                     <Link to="/paypage">
//                     <button className="checkout">CheckOut</button>

//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cart;
