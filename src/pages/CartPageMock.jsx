import CheckoutButton from "../components/CheckoutButton";
import { useCartContextMock } from "../context/CartContextMock";

export default function CartPageMock() {
  const {
    cart,
    removeFromCart,
    clearCart,
    updateQuantity,
    totalItems,
    isCheckoutComplete,
  } = useCartContextMock();

  return (
    <div className="p-5">
      <h1 className="mb-4 text-2xl font-semibold">Your Cart ({totalItems})</h1>
      {isCheckoutComplete ? (
        <div className="mb-5 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
          Order placed successfully! Thank you for your order!
        </div>
      ) : cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-4">
              <div className="flex items-center space-x-9">
                <div className="h-13 w-13 rounded-sm border shadow-xl">
                  <img
                    className="mb-1 h-12 w-12 object-contain"
                    alt={item.title}
                    src={item.image}
                  />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  className="mr-3 w-16 rounded border px-2 py-1"
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                />
                <button
                  className="text-red-500 hover:text-red-700"
                  // this should be callback as can't be called instantly as page renders and to clear everything
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex w-full items-center justify-between">
            <button
              className="mt-4 rounded bg-red-500 px-4 py-3 text-amber-50 hover:bg-red-700"
              onClick={clearCart}
            >
              Clear cart
            </button>
            <CheckoutButton />
          </div>
        </div>
      )}
    </div>
  );
}
