import { useContext } from "react";
import { CartContext } from "../context/Cart";
import { UserAuthContext } from "../context/UserAuthContext";
import deleteIcon from "../assets/icon-delete.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, getCartTotal, totalCost, clearCart } =
    useContext(CartContext);
  const { user } = useContext(UserAuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleNavigate = () => {
    const Routes = user ? "/checkout" : "/register";
    setTimeout(() => {
      navigate(Routes);
    }, 1000);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-100"
    >
      <div className="wrapper min-h-[20rem]">
        <div className="h-full text-2xl font-semibold text-black">Cart</div>
        <div className="flex-row-reverse gap-2 sm:flex">
          <div className="flex h-[20rem] flex-col justify-between divide-y-2 rounded-sm bg-White py-2 shadow-lg md:w-[30%]">
            <h4 className="px-3 pt-5 font-light uppercase text-black">
              cart summary
            </h4>
            <div className="flex items-center justify-between px-3 pt-5">
              <p className="text-xl font-normal">Subtotal</p>
              <p>${getCartTotal()} </p>
            </div>
            {getCartTotal() > 1000 && (
              <p className="px-3 py-2 font-Kumbh font-normal">
                {" "}
                You are eligible for free delivery{" "}
              </p>
            )}
            <div className="mt-0 flex w-full flex-col space-y-2">
              <button
                type="button"
                className="btn--primary"
                onClick={clearCart}
              >
                Clear Cart
              </button>

              <button
                onClick={handleNavigate}
                type="button"
                className="btn--primary"
              >
                Checkout
              </button>
            </div>
          </div>
          <div className="bg-White w-full py-8 h-auto">
            {cartItems.length < 1 ? (
              <div className="flex h-[28rem] w-full items-center justify-center">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="h-full w-full divide-y-2 rounded-sm shadow-lg">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="mt-3 flex items-center justify-between gap-2 px-2 py-5"
                  >
                    <div className="h-[9rem] w-[20%] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.tittle}
                        loading="lazy"
                        className="h-full w-full rounded-md object-contain"
                      />
                    </div>

                    <div className="w-[65%]">
                      <h2 className="font-medium">{item.title}</h2>
                      <span className="px-2">Quantity: {item.quantity}</span>
                      <span>TotalCost : ${totalCost(item.price)}</span>
                    </div>

                    <div className="flex h-[5rem] w-[7%] items-center justify-center py-5">
                      <button
                        type="button"
                        className="h-full w-full"
                        onClick={() => removeFromCart(item)}
                      >
                        <img
                          src={deleteIcon}
                          alt="delete img"
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </button>
                    </div>
                    <div></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CartPage;
