import  { useEffect, useState } from "react";
import PrimaryBtn from "../Components/PrimaryBtn";
import HeroImg from "../assets/image-product-1.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import Mission from "../Components/Mission";
import { motion } from "framer-motion";
import AddUser from '../Components/AddUser';


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
      className="wrapper"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mx-auto mt-5 flex w-full flex-col-reverse justify-between gap-4 px-2 ss:flex-row">
        <div className="w-full space-x-5 space-y-8 ss:w-1/2 ss:pt-10">
          <h1 className="px-5 pt-5 font-poppins text-xl text-orange-300 ss:px-10">
            Our Summer Collection
          </h1>
          <h2 className="leading-1 font-poppins text-5xl md:text-7xl font-semibold text-black md:text-7xl">
            The New Arrival <span className="text-orange-600">Sport</span> Shoes
          </h2>

          <p className="text-GrayishBlue">
            Discover stylish sport arrival quality <br /> confort, and
            innovation for your active life{" "}
          </p>
          <PrimaryBtn text="show now" onClick={navigateShop} />

          <div className="flex w-[60%] items-center justify-between gap-3">
            <div>
              <p className="font-Kumbh text-2xl font-semibold">
                1K<span className="text-4xl">+</span>
              </p>
              <p className="text-gray-500">Brands</p>
            </div>
            <div>
              <p className="font-Kumbh text-2xl font-semibold">
                500K<span className="text-4xl">+</span>
              </p>
              <p className="text-gray-500">shops</p>
            </div>
            <div>
              <p className="font-Kumbh text-2xl font-semibold">
                250K<span className="text-4xl">+</span>
              </p>
              <p className="text-gray-500">Customers</p>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-[2rem] ss:h-[35rem] ss:w-1/2">
          <img
            src={HeroImg}
            alt="heroimg"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <Mission />
      <AddUser />
    
    </motion.div>
  );
};

export default Home;
