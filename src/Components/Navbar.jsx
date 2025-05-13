import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import profile from "../assets/image-avatar.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/Cart";
import { RiArrowDropDownLine } from "react-icons/ri";
import { UserAuthContext } from "../context/UserAuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [nav, setNav] = useState(false);
  const { user } = useContext(UserAuthContext);
  const handleNav = () => {
    setTimeout(() => {
      setNav(!nav);
    }, 300);
    clearTimeout(setTimeout);
  };

  const handleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const closeMenu = () => {
    setNav(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const activeStyle = {
    color: "rgb(249 115 22)",
  };

  return (
    <header
      data-testid="navbar"
      className="z-100 fixed top-0 mb-2 w-full border-b-2 border-LightGrayishBlue bg-white px-2 py-4 pb-7"
    >
      <div className="mx-auto mt-0 flex max-w-[1400px] items-center justify-between px-2 py-3 ss:px-3">
        <nav className="flex items-center justify-center gap-2">
          <button
            onClick={handleNav}
            type="button"
            className="flex size-[1.19rem] ss:hidden"
          >
            <img src={menu} alt="/" className="h-full w-full object-cover" />
          </button>
          <NavLink to="/" className="pr-2 sm:pr-6 md:pr-10">
            <img src={logo} alt="logo" className="h-7 w-[7.5rem]" />
          </NavLink>
        </nav>

        {/* Desktop Navigation */}
        <nav className="flex flex-1 items-center justify-between gap-5 px-1">
          <nav>
            <ul className="hidden list-none flex-row space-x-3 font-Kumbh text-2xl font-[400] ss:flex sm:space-x-8 md:space-x-10">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                className="relative transition-all delay-300 after:absolute after:left-0 after:top-[65px] after:h-1 after:w-0 after:bg-orange-500 after:transition-all after:duration-500 hover:cursor-pointer hover:font-medium hover:after:w-full"
              >
                Home
              </NavLink>

              <NavLink
                to="/Collection"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                className="relative transition-all delay-300 after:absolute after:left-0 after:top-[65px] after:h-1 after:w-0 after:bg-orange-500 after:transition-all after:duration-500 hover:cursor-pointer hover:font-medium hover:after:w-full"
              >
                Collection
              </NavLink>
              {/* Conditionally render the Profile link */}
              {user && (
                <NavLink
                  to="/profile"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  className="relative transition-all delay-300 after:absolute after:left-0 after:top-[65px] after:h-1 after:w-0 after:bg-orange-500 after:transition-all after:duration-500 hover:cursor-pointer hover:font-medium hover:after:w-full"
                >
                  Profile
                </NavLink>
              )}
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                className=""
              >
                Contact
              </NavLink>
            </ul>
          </nav>
          <nav className="relative flex items-center justify-between space-x-4 md:space-x-7">
            <button
              onClick={handleVisibility}
              type="button"
              className="flex items-center gap-1 rounded-md bg-orange-500 px-3 py-2 text-xl font-medium text-white"
            >
              Account{" "}
              <span className="">
                <RiArrowDropDownLine className="text-3xl" />
              </span>
            </button>
            {isVisible ? (
              <ul className="z-80 border-1 border-1 -translate-y-50 absolute top-12 w-[10rem] -translate-x-7 space-y-2 rounded-md border-slate-600 bg-white py-1 shadow-md sm:-translate-x-11">
                {/*   <li className="cursor-pointer p-1 text-[1.2rem] text-slate-600 hover:bg-slate-300 hover:text-orange-600">
                  <NavLink to="/login">Login</NavLink>
                </li> */}
                <li className="cursor-pointer p-1 text-[1.2rem] text-slate-600 hover:bg-slate-300 hover:text-orange-600">
                  <NavLink to="/register">Sign in</NavLink>
                </li>
                <li className="cursor-pointer p-1 text-[1.2rem] text-slate-600 hover:bg-slate-300 hover:text-orange-600">
                  <NavLink>Settings</NavLink>
                </li>
              </ul>
            ) : null}
            <NavLink to="/cart">
              <nav className="relative">
                <img
                  src={cart}
                  alt="cart"
                  loading="lazy"
                  className="size-7 cursor-pointer"
                  onClick={toggleModal}
                />
                {cartItems.length < 1 ? (
                  <nav className="absolute -top-4 left-5 rounded-full px-[8px] text-xl font-bold text-white"></nav>
                ) : (
                  <nav className="absolute -top-4 left-5 rounded-full bg-orange-600 px-[8px] text-xl font-bold text-white">
                    {cartItems.length}
                  </nav>
                )}
              </nav>
            </NavLink>
          </nav>
        </nav>

        {/* Mobile nagivation */}
        <div
          onClick={handleNav}
          className="cursor-pointer text-white transition-all delay-300 sm:hidden"
        >
          {}
        </div>
        {/* Mobile Navigation */}
        {nav && (
          <nav className="${nav ? 'menu-visible' : 'menu-hidden'} fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-white duration-500 ease-in-out">
            <button type="button" onClick={closeMenu} className="px-4 pt-7">
              <img
                src={close}
                alt="close icon"
                className="flex size-7 items-center gap-2"
              />
            </button>
            <ul className="flex flex-col space-y-10 px-4 pt-10 font-Kumbh *:text-xl *:font-bold *:text-black">
              <NavLink
                to="/"
                onClick={closeMenu}
                className="cursor-pointer transition-all delay-300 ease-out"
              >
                Home
              </NavLink>
              <NavLink
                to="/Collection"
                onClick={closeMenu}
                className="cursor-pointer transition-all delay-300 ease-out"
              >
                Collection
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="cursor-pointer transition-all delay-300 ease-out"
              >
                Contact Us
              </NavLink>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
