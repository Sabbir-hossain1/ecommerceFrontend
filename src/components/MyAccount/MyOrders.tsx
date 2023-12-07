import React from "react";
import { Button } from "@material-tailwind/react";

const MyOrders = () => {
  return (
    <div className="ml-4">
      <div className="bg-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.20)] px-6 py-8 w-full mb-6">
        <div className="w-full flex justify-between">
          <div className="w-[80%] flex">
            <img
              className="h-[50px] w-[50px]  object-cover object-center mr-4"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <img
              className="h-[50px] w-[50px]  object-cover object-center mr-4"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <img
              className="h-[50px] w-[50px]  object-cover object-center mr-4"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
          </div>

          <div className="w-[20%]  flex justify-center items-center">
            <Button className="bg-white text-pink-500 hover:bg-pink-500 hover:text-white border-[1px] border-pink-500">
              View Order
            </Button>
          </div>
        </div>
        {/* Order Details */}
        <div className="w-full flex justify-between items-center pt-6 pr-8">
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Order Number</h1>
                <p className="text-sm text-blue-gray-600">23E34RT3</p>
            </div>
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Purchased</h1>
                <p className="text-sm text-blue-gray-600">01 march 2023</p>
            </div>
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Quantity</h1>
                <p className="text-sm text-blue-gray-600">x3</p>
            </div>
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Total</h1>
                <p className="text-sm text-blue-gray-600">$123</p>
            </div>
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Status</h1>
                <p className="text-sm text-pink-500">Cancelled</p>
            </div>
        </div>
      </div>

      <div className="bg-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.20)] px-6 py-8 w-full mb-6">
        <div className="w-full flex justify-between">
          <div className="w-[80%] flex">
            <img
              className="h-[50px] w-[50px]  object-cover object-center mr-4"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <img
              className="h-[50px] w-[50px]  object-cover object-center mr-4"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <img
              className="h-[50px] w-[50px]  object-cover object-center mr-4"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
          </div>

          <div className="w-[20%]  flex justify-center items-center">
            <Button className="bg-white text-pink-500 hover:bg-pink-500 hover:text-white border-[1px] border-pink-500">
              View Order
            </Button>
          </div>
        </div>
        {/* Order Details */}
        <div className="w-full flex justify-between items-center pt-6 pr-8">
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Order Number</h1>
                <p className="text-sm text-blue-gray-600">23E34RT3</p>
            </div>
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Purchased</h1>
                <p className="text-sm text-blue-gray-600">01 march 2023</p>
            </div>
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Quantity</h1>
                <p className="text-sm text-blue-gray-600">x3</p>
            </div>
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Total</h1>
                <p className="text-sm text-blue-gray-600">$123</p>
            </div>
            <div className="">
                <h1 className="font-semibold text-blue-gray-800">Status</h1>
                <p className="text-sm text-green-500">Delevered</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
