import { useCartContext } from "../context/CartContext";

export default function CheckoutButton() {
  const { checkout, totalItems } = useCartContext();

  return (
    <button
      onClick={checkout}
      disabled={totalItems === 0}
      className="py2 mt-4 w-full bg-green-500 px-4 hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
      Proceed to checkout
    </button>
  );
}
