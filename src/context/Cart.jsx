import { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify"; 

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false)
  const [isCounter, setIsCounter] = useState(1);
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("cartItems");
    return localData ? JSON.parse(localData) : [];
  });

  const toggleLogin = ()=>{
    setIsLogin(prevState => !prevState)
  }

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += item.quantity; 
      } else {
        prevItems.push({ ...item, quantity: isCounter }); // Use isCounter for quantity
        toast.success(`${item.title} added to cart!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return [...prevItems];
    });
    setIsCounter(1);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((cartItem) => cartItem.id === item.id);
      if (index > -1 && prevItems[index].quantity > 1) {
        prevItems[index].quantity -= 1;
        toast.info("One item removed!",{
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
      } else {
        prevItems.splice(index, 1);
        toast.success(`${item.title} removed from cart!`,{
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
      }
      return [...prevItems];
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared!",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getCartTotal = () => {
    return (cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )).toFixed(2);
  };

  const increment = () => {
    setIsCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setIsCounter((prevCount) => Math.max(1, prevCount - 1));
  };

  const totalCost = (price) => {
    return (isCounter * price).toFixed(2);
  };

  
  return (
    <CartContext.Provider
      value={{
        isLogin,
        toggleLogin,
        isCounter,
        setIsCounter,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        increment,
        decrement,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
