import React, { useState, useEffect, useId } from "react";
import { ToastContainer, toast } from "react-toastify";
import workingSpace from "../assets/space.jpg";
import "react-toastify/dist/ReactToastify.css";
import {motion} from "framer-motion"
import { useLocation } from "react-router-dom";


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailError, setIsEmailError] = useState("");
  const [isNameError, setIsNameError] = useState("");
  const [isMessageError, setIsMesageError] = useState("");
  const [isFormData, setIsFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const location = useLocation();
  const id = useId();
  const handleInputValue = (event) => {
    const { name, value } = event.target;
    setIsFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const notify = () => {
    toast.success("Your message has been sent successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  
  const validateName = () => {
    if (isFormData.name === "") {
      setIsNameError("name is required");
      return;
    }

    setIsNameError("");
  };
  const validateMessage = () => {
    if (isFormData.message === "") {
      setIsMesageError("message can't be empty");
      return;
    }
    setIsMesageError("");
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = () => {
    if (emailRegex.test(isFormData.email.trim())) {
      setTimeout(() => {
        setIsEmailError("");
      });
    } else {
      setTimeout(() => {
        setIsEmailError("invalid email");
      }, 1000);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      isFormData.name === "" ||
      isFormData.email === "" ||
      isFormData.message === ""
    ) {
      toast.error(
        "Cannot submit an  empyt form Ensure all fields are filled.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      return;
    }
    // Set isSubmitting to true to disable the submit button
    setIsSubmitting(true);

    // Simulate an API call or some asynchronous operation
    setTimeout(() => {
      notify(); // This will show success toast notification
      setIsSubmitting(false); // Reset submitting state
      // Optionally reset form data here if needed
      setIsFormData({ name: "", email: "", message: "" });
    }, 3000); // Simulated delay for the "API" response
  };

  useEffect(()=>{
    window.scrollTo(0, 0) //Reset scroll postion to top
  }, [location])
  return (
    <motion.div className="wrapper min-h-[35rem] flex flex-1 flex-col gap-4  ss:flex-row sm:gap-6 rounded-lg "
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity: 0}}
    >
      <div className=" w-full ss:w-1/2 flex flex-row font-Kumbh h-auto overflow-hidden rounded-lg">
        <img
          src={workingSpace}
          alt="workingSpace img"
          loading="lazy"
          className="w-full h-full object-fit"
        />
      </div>
      <div className="w-full ss:w-1/2 flex flex-col justify-center items-center bg-slate-300 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  py-4 sm:py-0 sm:px-0 space-y-5 font-Poppins"
        >
          <nav className="flex items-center justify-between">
            <label htmlFor={id + "name"} className="text-xl">
              Name
            </label>
            <p className="text-red-600 font-semibold">{isNameError}</p>
          </nav>

          <input
            type="text"
            name="name"
            id={id + "name"}
            onInput={validateName}
            onChange={handleInputValue}
            value={isFormData.name}
            className="rounded-md py-3 px-2 outline-none text-xl focus:outline-none focus:border-slate-900 focus:ring-slate-900 focus:ring-1"
            placeholder="John Doe"
          />
          <nav className="flex justify-between">
            <label htmlFor={id + "email"} className="text-xl">
              Email
            </label>
            <p className="text-red-600 font-semibold">{isEmailError}</p>
          </nav>

          <input
            type="email"
            name="email"
            id={id + "email"}
            onInput={validateEmail}
            onChange={handleInputValue}
            value={isFormData.email}
            className="rounded-md py-3 px-2 focus:outline-none focus:border-slate-900 focus:ring-slate-900 focus:ring-1 text-xl"
            placeholder="JohnDoe@gmail.com"
          />
          <nav className="flex items-center justify-between">
            <label htmlFor={id + "message"} className="text-xl">
              Message
            </label>
            <p className="text-red-600 font-semibold">{isMessageError}</p>
          </nav>
          <textarea
            type="text"
            name="message"
            id={id + "message"}
            onInput={validateMessage}
            onChange={handleInputValue}
            value={isFormData.message}
            className="rounded-md py-3 px-2 outline-none text-xl resize-y focus:outline-none focus:border-slate-900 focus:ring-slate-900 focus:ring-1"
            placeholder="Hi John, how are you?"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className=" w-full py-3  bg-blue-800 text-xl text-white font-semibold rounded-xl  cursor-pointer hover:bg-black transition-all delay-300  "
          >
            {" "}
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <ToastContainer />
        </form>
      </div>
      
    </motion.div>
  );
};

export default Contact;
