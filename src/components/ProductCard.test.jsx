import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { CartProvider } from "../context/CartContext";
import { describe, expect, test } from "vitest";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 10,
  image: "test-image.jpg",
};

describe("Product Card", () => {
  test("renders product details", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>,
    );

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.image);
  });

  test("updates quantity input", () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>,
    );

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });
    expect(input.value).toBe("5");
  });

  test('calls addToCart when "add to cart" is clicked', () => {
    const { getByText } = render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>,
    );

    fireEvent.click(getByText("Add to Cart"));
  });
});
