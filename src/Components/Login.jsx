import { useContext, useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthContext";
import { motion } from "framer-motion";
import { LuEyeOff, LuEye } from "react-icons/lu";

const Login = () => {
  const {
    login,

    toggleLogin,
    passwordVisible,
    togglePasswordVisibility,
  } = useContext(UserAuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigateToSignup = () => {
    setTimeout(() => {
      toggleLogin();
    }, 300);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
        errors.email = "Invalid email format";

      if (!values.password) errors.password = "Password is required";

      return errors;
    },
    onSubmit: (values) => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        login(values.email, values.password);
        formik.resetForm();
      }, 2000);
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="my-16 w-full"
    >
      <div className="">
        <main className="flex items-center bg-slate-900 px-8 py-4 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">
              Welcome Back!
            </h1>
            <p className="mt-4 text-gray-200">
              Don&apos;t have an account?{" "}
              <Link
                className="text-primary-400 hover:opacity-80"
                onClick={navigateToSignup}
              >
                Sign Up
              </Link>
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
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
              <div className="col-span-6">
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
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    isSubmitting ? "cursor-not-allowed opacity-50" : ""
                  } btn btn--secondary`}
                >
                  {isSubmitting ? "Submitting..." : "Log in"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </motion.section>
  );
};

export default Login;
