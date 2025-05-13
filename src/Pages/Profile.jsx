import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthContext";

const Profile = () => {
  const { user, logout } = useContext(UserAuthContext);
  const [infor] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://via.placeholder.com/150",
    orders: [
      { id: 1, date: "2023-07-25", total: "$150.00", status: "Delivered" },
      { id: 2, date: "2023-07-18", total: "$200.00", status: "Processing" },
    ],
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      setTimeout(() => {
        navigate("/register");
      }, 2000);
      logout();
    }, 300);
  };

  return (
    <motion.section
      className=" w-full h-auto bg-gray-100 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" min-h-[25rem] py-8 mt-[8rem]">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
          <div className="px-6 py-8 md:flex md:justify-between">
            {/* Profile Header */}
            <div className="flex items-center space-x-4">
              <img
                src={infor.avatar}
                alt="User avatar"
                className="h-20 w-20 rounded-full border-2 border-gray-300"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {user && user.name}
                </h1>

                <p className="text-gray-600">{user && user.email}</p>
              </div>
            </div>
            {/* Edit Profile Button */}
            <div className="mt-4 md:mt-0 md:flex md:items-center">
              <button className="btn btn--secondary">Edit Profile</button>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Order History */}
          <div className="px-6 py-8">
            <h2 className="text-xl font-bold text-gray-800">Order History</h2>
            <div className="mt-4">
              {infor.orders.length > 0 ? (
                infor.orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between border-b border-gray-200 py-4"
                  >
                    <div>
                      <p className="text-gray-800">Order ID: {order.id}</p>
                      <p className="text-gray-600">Date: {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">{order.total}</p>
                      <p
                        className={`${
                          order.status === "Delivered"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No orders found.</p>
              )}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Account Settings */}
          <div className="px-6 py-8">
            <h2 className="text-xl font-bold text-gray-800">
              Account Settings
            </h2>
            <div className="mt-4">
              <button onClick={handleLogout} className="btn--secondary">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
