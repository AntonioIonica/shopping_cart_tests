import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCartContext();

  return (
    <nav className="bg-slate-400 p-5 text-amber-50">
      <div className="container mx-auto flex items-center justify-between px-15">
        <Link to="/" className="text-3xl font-bold text-blue-900">
          ShopCart
        </Link>

        <div className="flex space-x-25 text-3xl font-bold">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/shop" className="hover:text-blue-300">
            Shop
          </Link>
        </div>
        <Link to="/cart" className="flex items-center text-lg font-bold">
          Cart: {totalItems}
        </Link>
      </div>
    </nav>
  );
}
