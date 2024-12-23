import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { details } from "../components/data"; // Assuming this is the correct path
import Context from '../context';
import { IoIosStar } from "react-icons/io";

const ImageDetailes = () => {
  const { addToCart } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = details.data.find(p => p.id === parseInt(id));
  const  discountPercentage =   ((product.price - product.sellingPrice) / product.price) * 100 ;
  // Initialize state with a default value
  const [mainImage, setMainImage] = useState(product ? product.productImage[0] : '');

  // Use useEffect to update the mainImage if the product is found
  useEffect(() => {
    if (product) {
      setMainImage(product.productImage[0]);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBuyNow = () => {
    navigate('/paypage', { state: { cartItems: [{ ...product, quantity: 1 }] } });
  };

  return (
    <section className='Product__Detailes__container'>
      <div className='container'>
        <div className='row'>
          <div className="product-detail flex">
            <div>
              <div className='flex product-detail-all-imgs'>
                <div className='left-small'>
                  <ul>
                    {product.productImage.map((image, index) => (
                      <li key={index}>
                        <img
                          src={image}
                          alt={product.productName}
                          onMouseEnter={() => setMainImage(image)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="right-big">
                  <img
                    src={mainImage}
                    alt={product.productName}
                    className="main-image"
                  />
                </div>
              </div>
              <div className='product-detail-cart-btn'>
                <button className="btn add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                <button className="btn buy-now" onClick={handleBuyNow}>Buy Now</button>
              </div>
            </div>
            <div className='product-detail-full-detailes'>
              <h2>{product.productName}</h2>
              <div className='flex star'>
                          <div className='flex justify-center align-center'>
                            4.4<IoIosStar />
                          </div>
                          <p className='Reviews'>discountPercentage & 1,330 Reviews</p>
                        </div>
              <div className='price-container'>
                 <div className='Specialprice'>
                    <p>Special price</p>
                 </div>
                 <div className='Specialpricedetail'>
                 <div className='sellingPrice'>₹{product.sellingPrice}.00</div>
                <small className='pri_price'>₹{product.price}</small>
                {discountPercentage > 0 && <span className='discountPercentage'>{discountPercentage.toFixed(0)}% off</span>}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageDetailes;





// import React, { useState, useContext, useEffect } from 'react';
// import {  useParams, useNavigate } from 'react-router-dom';
// import { details } from "../components/data"; // Assuming this is the correct path
// import Context from '../context';
// import ReactImageMagnify from 'react-image-magnify';

// const ImageDetailes = () => {
//   const { addToCart } = useContext(Context);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = details.data.find(p => p.id === parseInt(id));

//   // Initialize state with a default value
//   const [mainImage, setMainImage] = useState(product ? product.productImage[0] : '');

//   // Use useEffect to update the mainImage if the product is found
//   useEffect(() => {
//     if (product) {
//       setMainImage(product.productImage[0]);
//     }
//   }, [product]);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleBuyNow = () => {
//     navigate('/paypage', { state: { cartItems: [{ ...product, quantity: 1 }] } });
//   };

//   return (
//     <section className='Product__Detailes__container'>
//       <div className='container'>
//         <div className='row'>
//           <div className="product-detail flex">
//             <div>
//               <div className='flex product-detail-all-imgs'>
//                 <div className='left-small'>
//                   <ul>
//                     {product.productImage.map((image, index) => (
//                       <li key={index}>
//                         <img
//                           src={image}
//                           alt={product.productName}
//                           onMouseEnter={() => setMainImage(image)}
//                         />
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="right-big">
//                   <ReactImageMagnify {...{
//                     smallImage: {
//                       alt: product.productName,
//                       isFluidWidth: true,
//                       src: mainImage
//                     },
//                     largeImage: {
//                       src: mainImage,
//                       width: "100%",
//                       height: "100%"
//                     },
//                     enlargedImageContainerDimensions: {
//                       width: 500,
//                       height: 500
//                     }
//                   }} />
//                 </div>
//               </div>
//               <div className='product-detail-cart-btn'>
//                 <button onClick={() => addToCart(product)}>Add to Cart</button>
//                 <button onClick={handleBuyNow}>Buy Now</button>
//               </div>
//             </div>
//             <div className='product-detail-full-detailes'>
//               <p>{product.description}</p>
//               <h1>{product.productName}</h1>
//               <div className='flex justify-center align-center'>
//                 <small className='pri_price'>₹{product.price}</small>
//                 <h5>₹{product.sellingPrice}.00</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ImageDetailes;
