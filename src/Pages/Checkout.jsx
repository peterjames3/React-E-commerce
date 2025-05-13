import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/Cart";
import { motion } from "framer-motion";

const Checkout = () => {
  const [total, setTotal] = useState(null);
  const [saving, setSaving] = useState(null)
  const { getCartTotal } = useContext(CartContext);
  const [selectedPayment, setSelectedPayment] = useState("visa");

  useEffect(() => {

    const additionalCost = 199.0;
    let cartTotalString = getCartTotal();
     let cartTotalNumber = parseFloat(cartTotalString);
  const updatedTotal = cartTotalNumber + additionalCost;
     const amountSaved =   cartTotalNumber > 1000 ?  100 : 20;
     setSaving(amountSaved)
    setTotal(updatedTotal);
  }, [getCartTotal]); 

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full bg-gray-100"
    >
      <div className="wrapper">
        <div className="flex min-h-screen justify-center py-10">
          <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Payment</h2>

            {/* Payment Methods */}
            <div className="mb-6">
              <h3 className="mb-4 font-semibold">Select Payment Method</h3>

              {/* Visa */}
              <div
                className={`mb-4 flex items-center justify-between rounded-lg border p-4 ${selectedPayment === "visa" ? "border-blue-500" : "border-gray-300"}`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-4"
                    checked={selectedPayment === "visa"}
                    onChange={() => setSelectedPayment("visa")}
                  />
                  <div>
                    <p>Visa ending in 7658</p>
                    <p className="text-sm text-gray-500">Expiry 10/2024</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-blue-600">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>

              {/* Mastercard */}
              <div
                className={`mb-4 flex items-center justify-between rounded-lg border p-4 ${selectedPayment === "mastercard" ? "border-blue-500" : "border-gray-300"}`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-4"
                    checked={selectedPayment === "mastercard"}
                    onChange={() => setSelectedPayment("mastercard")}
                  />
                  <div>
                    <p>Mastercard ending in 8429</p>
                    <p className="text-sm text-gray-500">Expiry 04/2026</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-blue-600">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>

              {/* PayPal */}
              <div
                className={`mb-4 flex items-center justify-between rounded-lg border p-4 ${selectedPayment === "paypal" ? "border-blue-500" : "border-gray-300"}`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-4"
                    checked={selectedPayment === "paypal"}
                    onChange={() => setSelectedPayment("paypal")}
                  />
                  <div>
                    <p>Paypal account</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-blue-600">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>

            {/* Add Payment Method */}
            <div className="mb-6">
              <h3 className="mb-4 font-semibold">Add a new payment method</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">
                      Full name (as displayed on card)
                    </label>
                    <input
                      type="text"
                      placeholder="Bonnie Green"
                      className="w-full rounded-lg border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Card number</label>
                    <input
                      type="text"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      className="w-full rounded-lg border border-gray-300 p-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">
                      Card expiration
                    </label>
                    <input
                      type="text"
                      placeholder="12/23"
                      className="w-full rounded-lg border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">CVV</label>
                    <input
                      type="text"
                      placeholder="..."
                      className="w-full rounded-lg border border-gray-300 p-2"
                    />
                  </div>
                </div>
                <button type="submit" className="btn--primary">
                  Pay now
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-300 pt-6">
              <h3 className="mb-4 font-semibold">Order Summary</h3>
              <div className="mb-2 flex justify-between">
                <p>Original price</p>
                <p>${getCartTotal()}</p>
              </div>
              <div className="mb-2 flex justify-between text-green-600">
                <p>Savings</p>
                <p>-${saving}</p>
              </div>
              <div className="mb-2 flex justify-between">
                <p>Store Pickup</p>
                <p>$99.00</p>
              </div>
              <div className="mb-2 flex justify-between">
                <p>Tax</p>
                <p>$100.00</p>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>

            {/* Free Shipping and Discounts */}
            <div className="mt-6 space-y-4">
              {getCartTotal() > 1000 && (
                <div className="flex items-center justify-between rounded-lg border bg-gray-50 p-4">
                  <div>
                    <p className="font-semibold">Free shipping</p>
                    <p className="text-sm text-gray-500">
                      You have earned free shipping and exclusive Genius offers,
                      since you cart subtotal is above 1000
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between rounded-lg border bg-gray-50 p-4">
                <div>
                  <p className="font-semibold">-10% Extra</p>
                  <p className="text-sm text-gray-500">
                    You get 10% extra when purchasing this product, for orders
                    of at least $1000!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Checkout;
