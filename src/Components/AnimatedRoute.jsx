import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import { lazy } from "react";
import ProductPreview from "./ProductPreview";
import Collection from "../Pages/Collection";
import { AnimatePresence } from "framer-motion";
const NoPage = lazy(() => import("../Pages/NoPage"));

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/Collection" element={<Collection />} />
        <Route path="/product" element={<ProductPreview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
