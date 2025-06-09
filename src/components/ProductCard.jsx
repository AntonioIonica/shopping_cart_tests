import PropTypes from "prop-types";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { setCart } = useCartContext();

  const handleAddToCart = (product) => {
    setCart(product);
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
          min="1"
          className="mr-2 w-16 rounded border px-2"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={() => handleAddToCart(product)}
          className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-800"
        >
          Add to Cart
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
