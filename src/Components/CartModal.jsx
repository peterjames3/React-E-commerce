import deleteIcon from "../assets/icon-delete.svg";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, getCartTotal, totalCost,   clearCart,  } = useContext(CartContext);
  console.log(cartItems.length);
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="fixed right-0 inset-y-0 max-w-md w-full bg-slate-400 shadow-xl overflow-y-auto">
        <div className="absolute top-0 right-0 -mr-1 p-4">
          <button
            className=" text-2xl flex items-center justify-center w-12 h-12 text-white rounded-full bg-gray-600 focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="px-4 py-8 ">
          <div className="w-full bottom-1 border-slate-400 ">
            <h3 className="text-black text-2xl font-semibold">Cart</h3>
          </div>

          {cartItems.length < 1 ? (
            <div className="w-full h-screen flex items-center justify-center">
              <p className="text-2xl font-bold  text-white ">
                Your Cart is Empty
              </p>
            </div>
          ) : (
            <div className="w-full h-auto">
              
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center gap-2 mt-3 px-2 py-5"
                  >
                    <div className="w-[20%] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.tittle}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>

                    <div className="w-[65%]  ">
                      <h2 className=" font-medium">{item.title}</h2>
                      <span className="px-2" >Quantity: {item.quantity}</span>
                      <span>TotalCost : ${totalCost(item.price) }</span>
                    </div>

                    <div className="flex items-center justify-center w-[7%] py-5 ">
                      <button
                        type="button"
                        className="w-full"
                        onClick={() => removeFromCart(item)}
                      >
                        <img
                          src={deleteIcon}
                          alt="delete img"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </div>
                  </div>
                ))}
            

              <h3 className="text-xl font-medium">Totalcost: ${getCartTotal()} </h3>
              <button
                type="button"
                className="w-full mt-5 py-4 rounded-md font-semibold text-xl text-white bg-orange-600 hover:bg-orange-700 transition-all delay-300"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button
                type="button"
                className="w-full mt-5 py-4 rounded-md font-semibold text-xl text-white bg-orange-600 hover:bg-orange-700 transition-all delay-300"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
