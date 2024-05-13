import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section data-testid="footer" className=" w-full mt-7 border-t-2 flex flex-col gap-2 ">
      <div className="w-full bg-white py-5 px-3 ss:px-16 grid grid-cols-2 grid-rows-2 ss:grid-cols-4 ss:grid-rows-1 gap-4  *:mt-0 *:mx-auto  ">
        <div>
          <h1 className="text-black  font-Kumbh font-semibold text-[1.2rem]">
            Company
          </h1>
          <ul className="flex flex-col space-y-2 pt-2 list-none text-[1.1rem] *:text-slate-900 hover:*:cursor-pointer hover:*:text-slate-500 *:transition-all *:delay-300">
            <li>Our Story</li>
            <li>shop Locations</li>
            <li>Mission</li>
            <li>Philanthropy</li>
          </ul>
        </div>
        <div>
          <h1 className="text-black  font-Kumbh font-semibold text-[1.2rem]">
            Trade Assurance
          </h1>
          <ul className="flex flex-col space-y-2 pt-2 list-none text-[1.1rem] *:text-slate-900 hover:*:cursor-pointer hover:*:text-slate-500 *:transition-all *:delay-300">
            <li>Safe and easy payments</li>
            <li> Money-back policy</li>
            <li>On-time shipping</li>
            <li>After-sales protections</li>
            <li>Product monitoring services</li>
          </ul>
        </div>
        <div>
          <h1 className="text-black  font-Kumbh font-semibold text-[1.2rem]">
            Brand
          </h1>
          <ul className="flex flex-col space-y-2 pt-2 list-none text-[1.1rem] *:text-slate-900 hover:*:cursor-pointer hover:*:text-slate-500 *:transition-all *:delay-300">
            <li>Style & Fit</li>
            <li> craftsmanship</li>
            <li>Reviews</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h1 className="text-black  font-Kumbh font-semibold text-[1.2rem]">
            Help
          </h1>
          <ul className="flex flex-col space-y-2 pt-2 list-none text-[1.1rem] *:text-slate-900  hover:*:cursor-pointer hover:*:text-slate-500 *:transition-all *:delay-300">
            <li>Shipping & Returns</li>
            <li>Repairs</li>
            <li>warrantly</li>
            <li>FAQ</li>
            <li>contact Us</li>
          </ul>
        </div>
      </div>

      <div className=" max-w-7xl flex  ss:w-[65%]  gap-2  ss:gap-5 justify-between mx-auto px-2">
        <nav className="text-slate-500 font-Kumbh">
          <h6>StepClassy 2024 | All Rights Reserved</h6>
        </nav>
      <nav className="flex gap-4 ss:gap-9">
        <a
          href="https://www.facebook.com/YourPageName"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare
            size={30}
            className="hover:text-blue-700 transition-all delay-300 cursor-pointer"
          />
        </a>
        <a
          href="https://www.instagram.com/YourUsername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={30}
            className="hover:text-pink-600 transition-all delay-300 cursor-pointer"
          />
        </a>
        <a
          href="https://twitter.com/YourUsername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare
            size={30}
            className="hover:text-blue-400 transition-all delay-300 cursor-pointer"
          />
        </a>
        </nav>
        
        <nav className="flex items-center">
        <p>Trade on the go with <a href="#" className="font-semibold underline">Classystep.com</a></p>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
