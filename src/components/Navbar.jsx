import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCartContext();

  return (
    <nav className="bg-slate-400 p-5 text-amber-50">
      <div className="container mx-auto flex items-center justify-between px-15">
        <Link to="/" className="text-xl font-bold">
          ShopCart
        </Link>

        <div className="flex space-x-25 text-3xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-400">
            Shop
          </Link>
        </div>
        <div className="flex items-center">Cart: {cart.length}</div>
      </div>
    </nav>
  );
}
