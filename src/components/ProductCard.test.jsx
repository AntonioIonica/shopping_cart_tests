import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { CartProviderMock } from "../context/CartContextMock";
import { describe, expect, test, vi } from "vitest";

// test product
const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 10,
  image: "test-image.jpg",
};

describe("Product Card", () => {
  test("renders product details", () => {
    render(
      <CartProviderMock>
        <ProductCard product={mockProduct} />
      </CartProviderMock>,
    );

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.image);
  });

  test("updates quantity input", () => {
    render(
      <CartProviderMock>
        <ProductCard product={mockProduct} />
      </CartProviderMock>,
    );

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });
    expect(input.value).toBe("5");
  });

  test('calls addToCart when "add to cart" is clicked', () => {
    const addToCart = vi.fn();
    render(
      <CartProviderMock mockAddToCart={addToCart}>
        <ProductCard product={mockProduct} />
      </CartProviderMock>,
    );

    fireEvent.click(screen.getByText("Add to Cart"));
    expect(addToCart).toHaveBeenCalledWith(mockProduct, 1);
  });
});
