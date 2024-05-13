import React, { useEffect, useState } from "react";
import PrimaryBtn from "../Components/PrimaryBtn";
import HeroImg from "../assets/image-product-1.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import Mission from "../Components/Mission";
import { motion } from "framer-motion";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  let navigate = useNavigate();
  const navigateShop = () => {
    setTimeout(() => {
      navigate("/Collection");
    }, 300);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, [location]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(setTimeout);
  }, []);

  return (
    <motion.div
      className="max-w-7xl mx-auto mt-0 "
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full flex flex-col-reverse ss:flex-row gap-4 justify-between px-2 mt-5 mx-auto">
        <div className="w-full space-x-5 ss:w-1/2 space-y-8 ss:pt-10">
          <h1 className="text-xl font-poppins text-orange-300 pt-5 px-5 ss:px-10">
            Our Summer Collection
          </h1>
          <h2 className="text-7xl font-semibold font-poppins leading-1 text-black">
            The New Arrival <span className="text-orange-600">Sport</span> Shoes
          </h2>

          <p className="text-GrayishBlue">
            Discover stylish sport arrival quality <br /> confort, and
            innovation for your active life{" "}
          </p>
          <PrimaryBtn text="show now" onClick={navigateShop} />

          <div className="flex items-center w-[60%] justify-between gap-3">
            <div>
              <p className="font-semibold text-2xl font-Kumbh">
                1K<span className="text-4xl">+</span>
              </p>
              <p className="text-gray-500">Brands</p>
            </div>
            <div>
              <p className="font-semibold text-2xl font-Kumbh">
                500K<span className="text-4xl">+</span>
              </p>
              <p className="text-gray-500">shops</p>
            </div>
            <div>
              <p className="font-semibold text-2xl font-Kumbh">
                250K<span className="text-4xl">+</span>
              </p>
              <p className="text-gray-500">Customers</p>
            </div>
          </div>
        </div>
        <div className="w-full ss:w-1/2 ss:h-[35rem] rounded-[2rem] overflow-hidden">
          <img
            src={HeroImg}
            alt="heroimg"
            loading="lazy"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <Mission />
   
    </motion.div>
  );
};

export default Home;
