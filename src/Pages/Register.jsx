import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import workingSpace from "../assets/space.jpg";
import Login from "../Components/Login";
import { UserAuthContext } from "../context/UserAuthContext";
import { useFormik } from "formik";
import { LuEyeOff, LuEye } from "react-icons/lu";

const Register = () => {
  const {
    isLogin,
    register,
    toggleLogin,
    passwordVisible,
    togglePasswordVisibility,
  } = useContext(UserAuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigateToLogin = () => {
    setTimeout(() => {
      toggleLogin();
    }, 300);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      privacy_policy: false,
    },

    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = " Name is required";
      } else if (values.name.length < 3) {
        errors.lastName = "Too short";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords mismatch";
      }
      if (!values.privacy_policy) {
        errors.privacy_policy = "Must be checked";
      }

      return errors;
    },

    onSubmit: (values) => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        register(values.email, values.password, values.name);
        formik.resetForm();
      }, 2000);
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <div className="wrapper dark:bg-gray-900 lg:grid lg:grid-cols-12">
        <section className="flex h-24 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src={workingSpace}
            className="h-full w-full object-cover"
          />
        </section>

        <main className="flex items-center justify-center bg-slate-900 px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {!isLogin ? (
              <form
                onSubmit={formik.handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500"
                        : ""
                    } mt-1 w-full rounded-lg border-gray-700 bg-gray-800 p-3 text-sm text-gray-300 shadow-sm`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : ""
                    } mt-1 w-full rounded-lg border-gray-700 bg-gray-800 p-3 text-sm text-gray-300 shadow-sm`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      className={`${
                        formik.touched.password && formik.errors.password
                          ? "border-red-500"
                          : ""
                      } mt-1 w-full rounded-lg border-gray-700 bg-gray-800 p-3 text-sm text-gray-300 shadow-sm`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-5 text-gray-400"
                    >
                      {passwordVisible ? <LuEyeOff /> : <LuEye />}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "border-red-500"
                        : ""
                    } mt-1 w-full rounded-lg border-gray-700 bg-gray-800 p-3 text-sm text-gray-300 shadow-sm`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-500">
                        {formik.errors.confirmPassword}
                      </p>
                    )}
                </div>
                <div className="col-span-6">
                  <label htmlFor="policy" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      value={formik.values.checked}
                      className={`size-5 rounded-md border-gray-200 bg-white shadow-sm outline-none`}
                    />

                    <span className="text-sm text-gray-400">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <label htmlFor="PrivacyPolicy" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="privacy_policy"
                      name="privacy_policy"
                      checked={formik.values.privacy_policy}
                      onChange={formik.handleChange}
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm outline-none"
                    />

                    <span className="text-sm text-gray-400">
                      I have read and agree to the
                      <a href="#" className="text-gray-200 underline">
                        {" "}
                        Privacy Policy{" "}
                      </a>
                    </span>
                    {formik.errors.privacy_policy &&
                      formik.touched.privacy_policy && (
                        <p className="text-sm text-red-500">
                          {formik.errors.privacy_policy}
                        </p>
                      )}
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting ? "cursor-not-allowed opacity-50" : ""
                    } btn btn--secondary`}
                  >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                  </button>
                  <p className="mt-4 text-sm text-gray-400 sm:mt-0">
                    Already have an account?
                    <Link
                      onClick={navigateToLogin}
                      className="text-gray-200 underline"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
            ) : (
              <Login />
            )}
          </div>
        </main>
      </div>
    </motion.section>
  );
};

export default Register;
