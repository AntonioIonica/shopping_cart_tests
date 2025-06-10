import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutButton from "./CheckoutButton";
import { CartProvider } from "../context/CartContext";
import { describe, expect, it, vi } from "vitest";
import { CartProviderMock } from "../context/CartContextMock";

describe("CheckoutButton", () => {
  it("disables button when cart is empty", () => {
    render(
      <CartProviderMock>
        <CheckoutButton />
      </CartProviderMock>,
    );

    expect(screen.getByText("Proceed to checkout")).toBeDisabled();
  });

  it("calls checkout when", () => {
    const mockCart = [{ id: 1, title: "Test Product", price: 10, quantity: 1 }];
    const mockCheckout = vi.fn();

    render(
      <CartProviderMock initialCart={mockCart} mockCheckout={mockCheckout}>
        <CheckoutButton />
      </CartProviderMock>,
    );

    fireEvent.click(screen.getByText("Proceed to checkout"));
    expect(mockCheckout).toHaveBeenCalled();
  });
});
