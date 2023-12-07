import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";

const Navbar1 = () => {
    const [wishList, setWishList] = useState(false)
  return (
    <div className="bg-[#e9354d] flex sm:justify-between p-2 h-[60px] px-10">
      {/* All Category section */}
      <div className="w-1/2 sm:w-1/6  flex justify-center items-center text-white bg-[#44403c] rounded-lg mr-10 p-2"></div>

      {/* Search Section */}
      <div className="hidden sm:visible sm:flex w-4/6  mr-10 ">
        <input type="text" placeholder="Product |Search" />
      </div>

      {/* Cart and Account */}
      <div className="w-1/2 sm:w-1/6  flex justify-center items-center text-white relative">

        <div className="flex flex-col items-center justify-center relative cursor-pointer border-2" onMouseEnter={()=>setWishList(true)}>
          <AiOutlineHeart className="text-2xl" />
          <p className="text-xs">Wish List</p>
          {/* wish list container */}

          {
            wishList &&  <div className={`bg-orange-500 h-[200px] w-[300px] absolute  top-[59px] right-0 z-10`}></div>
          }
          
        </div>

        <div className="mx-2 flex flex-col items-center justify-center  cursor-pointer relative ">
          <AiOutlineShoppingCart className="text-2xl" />
          <div className="bg-[#44403c] rounded-full h-[17px] w-[17px] absolute top-0 right-0 flex justify-center text-xs">
            10
          </div>
          <p className="text-xs">Cart</p>
        </div>

        <div className="flex flex-col items-center justify-center cursor-pointer">
          <AiOutlineUser className="text-2xl" />
          <p className="text-xs">Account</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
