import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { Input, Button } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="mt-12  bg-[#f3f3f3]">
      {/* Upper Section */}
      <div className="h-[90%] md:flex py-10 px-10">
        {/* eCommerce section */}
        <div className="w-[400px]">
          <h2 className="text-2xl text-blue-gray-600 font-semibold uppercase">ECommerce</h2>
          <p className="text-xl text-blue-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusantium, quasi nostrum corporis at
          </p>
          <p className="text-2xl uppercase text-blue-gray-600">newsletter</p>

          <div className="w-[90%] m-2">
          <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Email Address"        
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"               
        className="!absolute right-1 top-1 rounded bg-pink-500"
      >
        Subscribe
      </Button>
    </div>        
          </div>
        </div>

        {/* Menu Section Start here */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3">
          <div>
            <h1 className="text-2xl uppercase font-semibold text-blue-gray-600">My Account</h1>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">Orders</p>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">WishList</p>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">Track Order</p>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">Manage Account</p>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">Return Order</p>
          </div>
          <div>
            {" "}
            <h1 className="text-2xl uppercase font-semibold text-blue-gray-600">Information</h1>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">About us</p>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">Return Policy</p>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">Terms & Condition</p>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">Privacy Policy</p>
            <p className="p-1 m-1 text-blue-gray-500 hover:text-pink-500 cursor-pointer">FAQ</p>
          </div>

          <div>
            {" "}
            <h1 className="text-2xl uppercase font-semibold text-blue-gray-600">Contact</h1>
            <div className="flex items-center mt-2 text-blue-gray-500">
              <CiLocationOn className="mr-3" />
              <p>Syed Nagar, Batara, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center text-blue-gray-500">
              <BsTelephone className="mr-3" />
              <p>+880 1826559551</p>
            </div>
            <div className="flex items-center text-blue-gray-500">
              <TfiEmail className="mr-3" />
              <p>sabbir.cse.duet@gmail.com</p>
            </div>
            <div className="flex text-2xl mt-4">
              <BsFacebook className="mr-2 text-[#3b5998]" />
              <AiFillTwitterCircle className="mr-2 text-[#00acee]" />
              <AiFillInstagram className="mr-2 text-[#d53982]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="h-[10%] bg-[#3f3933] sm:flex sm:justify-between">
        <p className="text-xl text-white text-center m-1 p-1">@eCommerce - All Right Reserved</p>
        <div className="m-1 p-1 flex items-center justify-center sm:justify-end">
          <img className="w-[400px]" src="/assets/img/Footer/payment-method.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
