import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
/* import Login from '../Pages/Login' */
import Register from "../Pages/Register";
import { lazy, Suspense } from "react";
import ProductPreview from "./ProductPreview";
import PrivateRoutes from "../Utils/PrivateRoutes";
import Collection from "../Pages/Collection";
import { AnimatePresence } from "framer-motion";
const Verify = lazy(() => import("../Pages/Verify"));
const NoPage = lazy(() => import("../Pages/NoPage"));
const Checkout = lazy(() => import("../Pages/Checkout"));
const Profile = lazy(() => import("../Pages/Profile"));
import Cart from "../Pages/CartPage";
import Loading from "./Spinner";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/product" element={<ProductPreview />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<PrivateRoutes />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/verify" element={<Verify />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
