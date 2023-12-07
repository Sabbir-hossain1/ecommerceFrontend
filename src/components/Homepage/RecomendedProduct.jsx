import React, { useContext } from "react";
import { MdStarRate } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BsSuitHeart } from "react-icons/bs";
import { RecommendedContext } from "../../contexts/homePage/RecomendedProductContext";

const RecomendedProduct = () => {
  const { recommendedItems } = useContext(RecommendedContext);
  return (
    <div className="m-10">
      <h1 className="text-4xl text-slate-700 font-semibold p-2 mb-2 ml-2">Recommended For You</h1>
      <div className="grid mobile:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recommendedItems.map((newItem) => {
          return (
            <div key={newItem.id} className="flex-1 mx-2 my-1  rounded border-[1px] relative group cursor-pointer">
              {/* image */}
              <div className="p-10 flex justify-center items-center group-hover:opacity-50 bg-[#f3f3f3] h-[60%] w-full">
                <img src={newItem.img} alt={newItem.title} />
              </div>

              {/* Text */}
              <div className="p-3">
                <p className="font-semibold text-xl">{newItem.title}</p>
                <p className="text-[#eb344c]">
                  ${newItem.currentPrice} <span className="line-through text-slate-400">${newItem.prevPrice}</span>
                </p>
                <p className="flex items-center text-slate-400">
                  <MdStarRate className="text-yellow-300" />
                  <MdStarRate className="text-yellow-300" />
                  <MdStarRate className="text-yellow-300" />
                  <MdStarRate className="text-yellow-300" />
                  <MdStarRate className="text-yellow-300" />
                  <span className="text-xs">({newItem.numberOfReview})</span>
                </p>
              </div>

              <div className="flex absolute top-[30%] right-[30%] opacity-0 transition ease-in-out duration-500 group-hover:opacity-100">
                <div className="bg-[#eb344c] hover:bg-gray-700 text-white h-[40px] w-[40px] rounded-full p-2 mx-[2px] flex justify-center items-center">
                  <IoIosSearch className="text-white h-[30px] w-[30px]" />
                </div>
                <div className="bg-[#eb344c] hover:bg-gray-700 text-white h-[40px] w-[40px] rounded-full p-2 mx-[2px] flex justify-center items-center">
                  <BsSuitHeart className=" text-white h-[30px] w-[30px]" />
                </div>
              </div>

              <div className="absolute bottom-0 right-2 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition ease-in-out duration-500  p-2 bg-[#eb344c] text-white font-semibold rounded uppercase ">
                add to cart
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecomendedProduct;
