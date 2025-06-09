import PropTypes from "prop-types";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, removeFromCart, updateQuantity, cart } = useCartContext();

  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = cartItem !== undefined;

  const handleAddToCart = () => {
    if (quantity === 0) return;
    addToCart(product, quantity);
    setQuantity(1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setQuantity(1);
  };

  const handleUpdateCart = () => {
    updateQuantity(product.id, quantity);
  };

  return (
    <div className="rounded-lg border p-4 shadow-2xl">
      <img
        src={product.image}
        alt={product.title}
        className="mb-4 h-48 w-full object-contain"
      />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="font-bold text-green-600">${product.price}</p>
      <div className="mt-2 flex w-[100%] items-center">
        <input
          type="number"
          value={quantity}
          className="mr-2 w-16 rounded border px-2"
          onChange={(e) => setQuantity(e.target.value)}
        />
        {isInCart && cartItem.quantity > 0 ? (
          <button
            onClick={handleUpdateCart}
            className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-800"
          >
            Update quantity
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-800"
          >
            Add to Cart
          </button>
        )}
        <button
          onClick={handleRemoveFromCart}
          className="rounded bg-red-600 px-4 py-1 text-white hover:bg-red-800"
        >
          X
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
