import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProviderMock = ({
  children,
  mockCheckout,
  mockAddToCart,
  initialCart = [],
}) => {
  const [cart, setCart] = useState(initialCart);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      // already existing the product
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      // add new one
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
    addToCart: mockAddToCart ?? addToCart,
    clearCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    checkout: mockCheckout ?? checkout,
    isCheckoutComplete,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContextMock = () => useContext(CartContext);
