// import { createContext } from "react";

// const Context = createContext(null)

// export default Context

import React, { createContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Context.Provider value={{ cartItems, setCartItems }}>
      {children}
    </Context.Provider>
  );
};

export default Context;