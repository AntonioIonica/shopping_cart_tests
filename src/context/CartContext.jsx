import { createContext, useContext, useState } from "react";

const Context = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const value = { cart, setCart };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCartContext = () => useContext(Context);
