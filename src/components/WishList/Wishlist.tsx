import React from "react";
import { Button } from "@material-tailwind/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Wishlist = () => {
  return (
    <div className="bg-white shadow-md mx-4 w-full">
      <div className="flex w-full px-4 py-5 border border-1 border-blue-gray-100 rounded">
        <div className="flex  items-center w-[50%]">
          <div className="mr-6">
            <img
              className="h-[60px] w-[60px]  object-cover object-center mr-2"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
          </div>

          <div>
            <h1 className="text-blue-gray-700 font-semibold">Casual USB Charging Laptop Backpack</h1>
            <p className="text-blue-gray-600">Availability: <span className="text-green-500">In Stock</span></p>
          </div>
        </div>

        <div className="flex justify-end  items-center w-[50%]">
          <h1 className="font-bold text-2xl text-pink-500 mx-5">$45.00</h1>
          <Button className="mx-5 bg-pink-500 text-white hover:bg-white hover:text-pink-500 hover:border-[1px] hover:border-pink-500">Add to Cart</Button>
          <RiDeleteBin6Line className="text-2xl mx-5 hover:text-pink-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
