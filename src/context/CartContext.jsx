import { createContext, useContext, useState } from "react";

const Context = createContext();

export const CartContext = Context;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      // already having the product
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity } // changing the quantity of the product
            : item,
        );
      }

      // saving the new product in the cart
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    setIsCheckoutComplete(true);
    clearCart();
    setTimeout(() => setIsCheckoutComplete(false), 3000);
  };

  const totalItems = cart.reduce((sum, item) => sum + Number(item.quantity), 0);

  const value = {
    cart,
    addToCart,
    clearCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    checkout,
    isCheckoutComplete,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCartContext = () => useContext(Context);
