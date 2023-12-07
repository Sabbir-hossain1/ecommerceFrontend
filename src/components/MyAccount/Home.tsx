import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { GoGift } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

const Home = () => {
  return (
    <div className="flex  w-full px-10 py-4">
      <div className="w-1/4">
        {/* profile icon */}
        <div className="flex bg-white shadow-md mb-8 p-1">
          <div className="mr-2">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
          </div>

          <div>
            <h2 className="text-blue-gray-600">Hello,</h2>
            <h1 className="font-bold text-blue-gray-500">Sabbir Hossain</h1>
          </div>
        </div>

        <div className="bg-white shadow-md px-2 py-1">
          {/* Manage My Account */}
          <div className="py-4">
            <h1 className="flex text-blue-gray-600 hover:text-pink-500 font-semibold  items-center m-1">
              <ImProfile className="mr-2 " />
              <h1 className="">Manage My Account</h1>
            </h1>

            <Link to="" className="p-1 hover:text-pink-500 block ml-5 text-blue-gray-600">
              Profile information
            </Link>

            <Link to="manage-address/" className="p-1 hover:text-pink-500 block ml-5 text-blue-gray-600">
              Manage Address
            </Link>
            <Link to="change-password/" className="p-1 hover:text-pink-500 block ml-5 text-blue-gray-600">
              Change Password
            </Link>
          </div>
          <hr />

          {/* My Order History */}
          <div className="py-4">
            <Link to="my-orders/" className="flex text-blue-gray-600 hover:text-pink-500 font-semibold  items-center m-1">
              <GoGift className="mr-2 " />
              <h1 className="">My Order History</h1>
            </Link>
            <Link to="my-returns/" className="p-1 hover:text-pink-500 block ml-5 text-blue-gray-600">
              My Returns
            </Link>
            <Link to="" className="p-1 hover:text-pink-500 block ml-5 text-blue-gray-600">
              My Cancellations
            </Link>
            <Link to="my-reviews/" className="p-1 hover:text-pink-500 block ml-5 text-blue-gray-600">
              My Reviews
            </Link>
          </div>
          <hr />

          {/* Payment Methods */}
          <div className="py-4">
            <h1 className="flex text-blue-gray-600  hover:text-pink-500 font-semibold  items-center m-1">
              <MdPayment className="mr-2 " />
              <h1 className="">Payment Methods</h1>
            </h1>
            <Link to="/account/voucher/" className="p-1 hover:text-pink-500 block ml-5 text-blue-gray-600 ">
              Voucher
            </Link>
          </div>
          <hr />
          {/* logout */}
          <Link
            to="wishlist/"
            className=" text-blue-gray-600 flex hover:text-pink-500 font-semibold  items-center m-1 py-4"
          >
            <FaRegHeart className="mr-2" />
            My WishList
          </Link>
          <hr />
          <Link
            to="/login/"
            className="text-blue-gray-600 flex hover:text-pink-500 font-semibold  items-center m-1 py-4"
          >
            <AiOutlineLogout className="mr-2" />
            Logout
          </Link>
        </div>
      </div>
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
