import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "./CartPage";
import { CartProvider } from "../context/CartContext";
import { describe, expect, it } from "vitest";
import CartPageMock from "./CartPageMock";
import { CartProviderMock } from "../context/CartContextMock";

describe("Cartpage", () => {
  it("shows empty cart message", () => {
    render(
      <CartProvider>
        <CartPage />
      </CartProvider>,
    );

    expect(screen.getByText("Your cart is empty!")).toBeInTheDocument();
  });

  it("Renders cart items and updates quantity", () => {
    const mockCart = [{ id: 1, title: "Test Product", price: 10, quantity: 2 }];

    render(
      <CartProviderMock initialCart={mockCart}>
        <CartPageMock />
      </CartProviderMock>,
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "3" } });
    expect(input.value).toBe("3");
  });

  it("removes item when 'Remove' is clicked", () => {
    const mockCart = [{ id: 1, title: "Test Product", price: 10, quantity: 1 }];

    render(
      <CartProviderMock initialCart={mockCart}>
        <CartPageMock />
      </CartProviderMock>,
    );

    fireEvent.click(screen.getByText("Remove"));
    expect(screen.queryByText("Test Product")).not.toBeInTheDocument();
  });
});
