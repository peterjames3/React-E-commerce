import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account, ID } from "../lib/appwrite";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserAuthContext = createContext();
const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const toggleLogin = () => {
    setIsLogin((prevState) => !prevState);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const login = async (email, password) => {
    try {
      //Attempt to create a session
      await account.createEmailPasswordSession(email, password);
      // Fetch user details
      const user = await account.get();
      setUser(user);

      console.log(user);
      // check if the user's email is verified
      if (!user.emailVerification) {
        toast.info("Check Your email for verification");
        //optionally, one can log out te user to prevent unauthorized access
        await account.deleteSession("current");
        setUser(null);
      } else {
        setTimeout(() => {
          navigate("/profile");
        }, 3000);
        toast.success("Logged in successfully!");
      }
    } catch (error) {
      console.log(`${error}`);
      toast.error(error.message);
    }
  };

  const register = async (email, password, name) => {
    try {
      await account.create(ID.unique(), email, password, name);
      await account.createEmailPasswordSession(email, password);
      const link = await account.createVerification(
        "http://localhost:5173/Verify",
      );
      setTimeout(() => {
        toast.info("Check Your email for verification");
      }, 200);

      toggleLogin();
      toast.success("Registered successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleVerification = async (userId, secret) => {
    try {
      const Verify = await account.updateVerification(userId, secret);
      const user = await account.get();
      setUser(user);
      console.log(user);

      if (user.emailVerification) {
        toast.success("Email verified successfully!");
        navigate("/profile");
      } else {
        toast.error("Failed to verify email");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      navigate("/register");

      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const init = async () => {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      console.log(user);
    } catch (error) {
      /*  // console.error(error);
      toast.error(error.message);
      navigate("/register"); */
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        user,
        logout,
        login,
        register,
        handleVerification,
        toggleLogin,
        togglePasswordVisibility,
        toast,
        isLogin,
        passwordVisible,
      }}
    >
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </UserAuthContext.Provider>
  );
};
export default UserProvider;
