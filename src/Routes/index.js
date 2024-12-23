import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SingUp"; 
import Blog from "../pages/Blog";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import ImageDetailes from "../pages/ImageDetailes";
import PayPage from "../pages/PayPage";
import CheckoutPage from "../pages/CheckoutPage";
import AddressForm from "../pages/AddressForm";
import Sree from "../pages/Sree" ;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home /> // Home component is rendered within App component's context
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/signup", 
        element: <SignUp />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
    
      {
        path : "/imagedetailes/:id",
        element : <ImageDetailes />
      
      }, 
      {
        path : "/paypage",
        element : <PayPage />
      
      }, 
      
      {
        path : "/checkoutpage",
        element : <CheckoutPage />
      
      }, 
      {
        path : "/addressform",
        element : <AddressForm />
      
      }, 
      {
        path : "/sree",
        element : <Sree/>
      
      },
    ]
    
  }
]);

export default router;