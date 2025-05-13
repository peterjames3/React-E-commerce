import { useURLID } from "./useURLID";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import cart from "../assets/icon-cart.svg";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import Navigation from "./Navigation";
import { CartContext } from "../context/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPreview = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { addToCart, increment, decrement, totalCost, isCounter } =
    useContext(CartContext);
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
      <div className="h-screen w-full text-center text-2xl font-medium">
        {" "}
        Loading...
      </div>
    );
  return (
    <section className="flex w-full items-center bg-gray-100 py-20">
      <div className="wrapper flex min-h-[15rem] flex-col items-center justify-center gap-5 rounded-md bg-white p-5 px-2 shadow ss:flex-row ss:px-10">
        <div className="w-full overflow-hidden rounded-md ss:w-1/2">
          <img
            src={singleProduct.image}
            alt="image"
            loading="lazy"
            className="h-[27rem] w-full object-fill"
          />
        </div>
        <div className="w-full space-y-3 px-3 ss:w-1/2">
          <h3 className="text-2xl font-medium">
            Category: {singleProduct.category}
          </h3>

          <h4 className="text-xl">{singleProduct.title}</h4>

          <p className="text-xl">
            Price: <span className="font-medium">{singleProduct.price}</span>{" "}
          </p>
          <p className="text-xl">
            Subtotal: ({isCounter} items) ${totalCost(singleProduct.price)}
          </p>

          <div className="flex flex-col items-center justify-between gap-4 ss:flex-row">
            <div className="flex w-full items-center justify-between gap-2 rounded-md bg-white ss:w-1/2">
              <button
                type="button"
                className="h-full px-5 py-[17px] text-2xl"
                onClick={decrement}
              >
                <img src={minus} alt="minus" className="h-full w-full" />
              </button>
              <div className="font-semi text-xl">
                {" "}
                <strong>{isCounter}</strong>{" "}
              </div>
              <button
                type="button"
                className="px-5 py-[17px]"
                onClick={increment}
              >
                <img src={plus} alt="add" className="h-full w-full" />
              </button>
            </div>
            <div className="w-full ss:w-1/2">
              <button
                onClick={() =>
                  addToCart({ ...singleProduct, quantity: isCounter })
                }
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded bg-orange-600 py-3 font-poppins font-semibold text-white shadow-md shadow-orange-400 transition-all delay-300 hover:cursor-pointer hover:bg-orange-700"
              >
                <img src={cart} alt="cart" className="text-white" />
                add to cart
              </button>
            </div>
          </div>

          <Navigation handleClick={navigateBack} />
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ProductPreview;
