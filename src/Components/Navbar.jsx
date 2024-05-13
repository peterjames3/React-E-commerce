import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import profile from "../assets/image-avatar.png";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/Cart";
import CartModal from "./CartModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setTimeout(() => {
      setNav(!nav);
    }, 300);
    clearTimeout(setTimeout);
  };

  const closeMenu = () => {
    setNav(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header data-testid="navbar" className="w-full  top-0 z-100 sticky   mt-10   pb-7 bg-white border-b-2 border-LightGrayishBlue">
      <div className="max-w-7xl mt-0 mx-auto flex  items-center justify-between px-2 ss:px-3">
        <nav className=" flex items-center justify-center gap-2 ">
          <button
            onClick={handleNav}
            type="button"
            className=" flex ss:hidden size-[1.19rem]  "
          >
            <img src={menu} alt="/" className="w-full h-full object-cover" />
          </button>
          <Link to="/" className="pr-10">
            <img src={logo} alt="logo" className="w-[7.5rem] h-7" />
          </Link>
        </nav>

        {/* Desktop Navigation */}
        <nav className="flex flex-1 justify-between px-1 items-center">
          <nav>
            <ul className="hidden flex-row ss:flex text-xl space-x-10 sm:space-x-10 list-none font-Kumbh font-[400] ">
              <Link
                to="/"
                className="relative after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[65px] after:left-0 hover:after:w-full after:transition-all after:duration-500 hover:font-medium hover:cursor-pointer transition-all delay-300"
              >
                Home
              </Link>

              <Link
                to="/Collection"
                className="relative after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[65px] after:left-0 hover:after:w-full after:transition-all after:duration-500 hover:font-medium hover:cursor-pointer transition-all delay-300"
              >
                Collection
              </Link>
              <Link
                to="/contact"
                className="relative after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[65px] after:left-0 hover:after:w-full after:transition-all after:duration-500 hover:font-medium hover:cursor-pointer transition-all delay-300"
              >
                Contact
              </Link>
            </ul>
          </nav>
          <nav className="flex justify-between items-center space-x-7">
            <nav className="relative ">
              <img
                src={cart}
                alt="cart"
                className="size-7 cursor-pointer"
                onClick={toggleModal}
              />
              {cartItems.length < 1 ? (
                <nav className="absolute -top-4  left-5 text-xl font-bold text-white rounded-full px-[8px]"></nav>
              ) : (
                <nav className="absolute -top-4 bg-orange-600 left-5 text-xl font-bold text-white rounded-full px-[8px]">
                  {cartItems.length}
                </nav>
              )}
            </nav>
            <nav>
              <img
                src={profile}
                alt="profile"
                className="size-[3rem] hover:border-2 border-orange-400 rounded-full transition-all delay-300"
              />
            </nav>
            <CartModal isOpen={isModalOpen} onClose={toggleModal} />
          </nav>
        </nav>

        {/* Mobile nagivation */}
        <div
          onClick={handleNav}
          className="sm:hidden text-white cursor-pointer transition-all delay-300"
        >
          {}
        </div>
        {/* Mobile Navigation */}
        {nav && (
          <nav className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 ${nav ? 'menu-visible' : 'menu-hidden'} ">
            <button type="button" onClick={closeMenu} className="pt-7 px-4">
              <img
                src={close}
                alt="close icon"
                className="flex items-center gap-2 size-7"
              />
            </button>
            <ul className="flex flex-col space-y-10  pt-10 px-4 font-Kumbh *:text-black *:text-xl *:font-bold">
              <Link
                to="/"
                onClick={closeMenu}
                className=" cursor-pointer transition-all delay-300 ease-out"
              >
                Home
              </Link>
              <Link
                to="/Collection"
                onClick={closeMenu}
                className=" cursor-pointer  transition-all delay-300 ease-out"
              >
                Collection
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="cursor-pointer  transition-all delay-300 ease-out"
              >
                Contact Us
              </Link>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
