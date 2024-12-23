// import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Context from './context';

// function App() {
 
//   const [cartItems, setCartItems] =useState([])
//   const addToCart = (product) => {
//    const exsit = cartItems.find((x) => {
//     return x.id === product.id;
//    })
//    if(exsit) {
//        alert("This Product is alleardy added")
//    }
//    else {
//     setCartItems([...cartItems , {...product , quantity:1}])
//    }
//    console.log(setCartItems)
// }

//   return (
//     <>
//       <Context.Provider value={{ addToCart, cartItems, setCartItems }}>
//         <Navbar />
//         <Header />
//         <main className='min-h-[calc(100vh-120px)]'>
//           <Outlet />
//         </main>
//         <Footer />
//       </Context.Provider>
//     </>
//   );
// }

// export default App;


import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Context from './context';
  
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  const addToCart = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      alert("This product is already added");
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    
    } else {
      alert("This product is already in the wishlist");
    }
  };

  return (
    <>
      <Context.Provider value={{ addToCart, cartItems, setCartItems, addToWishlist, wishlist, setWishlist }}>
        <Navbar />
        <Header />
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;

