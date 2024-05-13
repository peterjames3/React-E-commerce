import { useURLID } from "./useURLID";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import cart from "../assets/icon-cart.svg";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import Navigation from "./Navigation";
import { CartContext } from "../context/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const ProductPreview = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    addToCart,
    increment,
    decrement,
    totalCost,
    isCounter,
    
  } = useContext(CartContext);
  let navigate = useNavigate();
  const id = useURLID();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`Error occurred: ${response.statusText}`);
      }
      const data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.log(`Error occurred while fetching: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const navigateBack = () => {
    setTimeout(() => {
      navigate("/Collection");
     
    }, 1000);
  };
  if (isLoading)
    return (
      <div className="w-full h-screen text-center text-2xl font-medium">
        {" "}
        Loading...
      </div>
    );
  return (
    <section className="max-w-4xl p-5 min-h-[10rem] my-5 mx-auto flex flex-col ss:flex-row gap-5 px-2 ss:px-10 items-center justify-center bg-slate-500">
      <div className="w-full ss:w-1/2 rounded-md overflow-hidden">
        <img
          src={singleProduct.image}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full ss:w-1/2 px-3 space-y-3">
        <h2 className="text-2xl">Category: {singleProduct.category}</h2>

        <h3 className="text-xl">{singleProduct.title}</h3>

        <p className="text-xl">Price: {singleProduct.price}</p>
        <p className="text-xl">
          Subtotal: ({isCounter} items) ${totalCost(singleProduct.price)}
        </p>

        <div className="flex flex-col ss:flex-row items-center justify-between gap-4">
          <div className="w-full ss:w-1/2 flex gap-2 bg-white items-center justify-between rounded-md ">
            <button
              type="button"
              className="px-5 py-[17px] text-2xl h-full "
              onClick={decrement}
            >
              <img src={minus} alt="minus" className="w-full h-full" />
            </button>
            <div className="text-xl font-semi">
              {" "}
              <strong>{isCounter}</strong>{" "}
            </div>
            <button
              type="button"
              className="px-5  py-[17px]"
              onClick={increment}
            >
              <img src={plus} alt="add" className="w-full h-full" />
            </button>
          </div>
          <div className="w-full ss:w-1/2">
            <button
              onClick={() =>
                addToCart({ ...singleProduct, quantity: isCounter })
              }
              type="button"
              className="w-full bg-orange-600 py-3 text-white font-semibold font-poppins rounded hover:bg-orange-700 flex items-center gap-2 justify-center hover:cursor-pointer shadow-md shadow-orange-400 transition-all delay-300"
            >
              <img src={cart} alt="cart" className="text-white" />
              add to cart
            </button>
          </div>
        </div>

        <Navigation handleClick={navigateBack} />
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProductPreview;
