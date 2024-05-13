// Import React and useState
import React, { useState } from "react";
import { BiGridAlt } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import { FaWallet } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Mission = () => {
  // State to manage hover states
  const [hoverState, setHoverStates] = useState([false, false, false, false]);

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setTimeout(() => {
      setHoverStates((prev) =>
        prev.map((state, idx) => (idx === index ? true : state))
      );
    }, 300);
  };

  // Function to handle mouse leave
  const handleMouseleave = (index) => {
    setTimeout(() => {
      setHoverStates((prev) =>
        prev.map((state, idx) => (idx === index ? false : state))
      );
    }, 300);
  };

  // Icons array
  const icons = [
    <BiGridAlt />,
    <IoShieldCheckmarkOutline />,
    <FaWallet />,
    <GrMoney />,
  ];

  // Content data
  const contents = [
    {
      id: "1",
      title: "Millions of business offerings",
      text: "Explore products and suppliers for your business from millions of offerings worldwide.",
    },
    {
      id: "2",
      title: "Assured quality and transactions",
      text: "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
    },
    {
      id: "3",
      title: "One-stop trading solution",
      text: "Order seamlessly from product/supplier search to order management, payment, and fulfillment.",
    },
    {
      id: "4",
      title: "Tailored trading experience",
      text: "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.",
    },
  ];

  return (
    <section className="max-w-7xl mt-5 py-5 px-5 bg-[#3a190b] *:bg-[#402013] grid grid-cols-1 grid-rows-4 xs:grid-cols-2 xs:grid-rows-2  ss:grid-cols-2 ss:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 *:rounded-[1.2rem] *:text-white *:py-8 *:px-7 *:space-y-4 hover:*:cursor-pointer hover:*:bg-orange-900 *:transition-all *:delay-300">
      {contents.map((content, index) => (
        <div key={content.id} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseleave(index)}>
          <nav className={`text-4xl rounded-full bg-[#4f3125] size-[4rem] flex items-center justify-center ${hoverState[index] ? 'text-orange-600' : 'text-white'}`}>
            {icons[index]}
          </nav>
          <h3 className="text-2xl font-poppins font-semibold text-white">{content.title}</h3>
          <p>{content.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Mission;
