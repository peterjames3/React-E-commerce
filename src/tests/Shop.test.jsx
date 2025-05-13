// Import the required testing utilities
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CartProvider, { CartContext } from "../context/Cart";


const TestComponent = ({ item }) => {
  
  const { addToCart, removeFromCart } = React.useContext(CartContext);

  return (
    <>
      {/* Render test component with context methods */}
      <button onClick={() => addToCart(item)} data-testid="add-to-cart">
        Add to Cart
      </button>
      <button onClick={() => removeFromCart(item)} data-testid="remove-from-cart">
        Remove from Cart
      </button>
    </>
  );
};

describe("CartProvider", () => {
  it("should add item to cart", () => {
    const item = { id: 1, title: "Product", price: 10, quantity: 1 };

  
    const cartContextValues = {
      cartItems: [],
      addToCart: vi.fn(),
      removeFromCart: vi.fn(),
    };

    const { getByTestId } = render(
      <CartContext.Provider value={cartContextValues}>
        <TestComponent item={item} />
      </CartContext.Provider>
    );

  
    fireEvent.click(getByTestId("add-to-cart"));

  
    expect(cartContextValues.addToCart).toHaveBeenCalledWith(item);
  });

  it("should remove item from cart", () => {
    const item = { id: 1, title: "Product", price: 10, quantity: 1 };

   
    const cartContextValues = {
      cartItems: [item],
      addToCart: vi.fn(),
      removeFromCart: vi.fn(),
    };

    const { getByTestId } = render(
      <CartContext.Provider value={cartContextValues}>
        <TestComponent item={item} />
      </CartContext.Provider>
    );

   

    
    expect(cartContextValues.cartItems[0].quantity).toEqual(1);
  });
});
