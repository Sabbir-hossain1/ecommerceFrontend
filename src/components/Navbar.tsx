import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [account, setAccount] = useState(false);
  // this cart will be provide by context provider
  const [cart, setCart] = useState([{ id: 1, title: "product1", size: "xl", price: 12 }]);

  return (
    <div className="bg-pink-500 flex sm:justify-between h-[60px] px-10">
      {/* All Category section */}
      <div className="w-1/2 sm:w-1/6  flex justify-center items-center text-white bg-[#44403c] rounded-lg mr-10 p-2 m-2">
        <div className="mx-2">
          <AiOutlineMenu />
        </div>
        <p className="text-xs md:text-lg md:font-semibold">All Categories</p>
      </div>

      {/* Search Section */}
      <div className="hidden sm:visible sm:flex w-4/6  mr-10 m-2">
        <div className="w-1/6  flex items-center justify-between bg-white border-r-[1px] border-[#44403c] px-2 rounded-l-lg cursor-pointer font-semibold text-blue-gray-500">
          Categories
          <AiOutlineDown className="text-blue-gray-500" />
        </div>
        <div className="w-4/6">
          <input type="text" className="w-full h-full px-2 focus:outline-none" placeholder="Search Product" />
        </div>
        <div className="w-1/6 text-white bg-[#44403c] font-bold flex justify-center items-center cursor-pointer rounded-r-lg ">
          Search
        </div>
      </div>

      {/* Cart and Account */}
      <div className="w-1/2 sm:w-1/6  flex text-white  m-0 p-0">
        {/* Wish list */}
        <Link to="/account/wishlist/" className="h-full w-full  flex flex-col justify-center items-center relative cursor-pointer mt-1">
          <div className="relative">
            <AiOutlineHeart className="text-3xl" />
            <div className=" absolute top-0 -right-3  h-[20px] w-[20px] bg-[#44403c] rounded-full flex justify-center items-center">
              10
            </div>
          </div>
          <p className="text-xs">Wish List</p>
        </Link>

        {/* Cart */}
        <div
          className="h-full w-full  flex flex-col justify-center items-center relative cursor-pointer mt-1"
          onMouseEnter={() => setIsCartOpen(true)}
          onMouseLeave={() => setIsCartOpen(false)}
        >
          <div className="relative">
            <AiOutlineShoppingCart className="text-3xl " />
            <div className=" absolute top-0 -right-3  h-[18px] w-[18px] bg-[#44403c] rounded-full flex justify-center items-center">
              5
            </div>
          </div>
          <p className="text-xs">Cart</p>
          {isCartOpen && (
            <div className=" bg-orange-600 absolute  top-[61px] right-0 rounded p-2 transition-all duration-300 delay-1000 z-20">
              <h1>2 items</h1>
              <hr />
              {cart.map((product) => {
                return (
                  <div key={product.id} className="flex">
                    <img src="" alt="img" />
                    <div className="flex">
                      <div>
                        <h2>{product.title}</h2>
                        <p>
                          {product.size} - <span>{product.price}</span>
                        </p>
                      </div>
                      <div>X</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Account  */}
        <div
          className="h-full w-full  flex flex-col justify-center items-center relative cursor-pointer mt-1"
          onMouseEnter={() => setAccount(true)}
          onMouseLeave={() => setAccount(false)}
        >
          <AiOutlineUser className="text-3xl" />
          <p className="text-xs">Account</p>
          {account && (
            <div className={`bg-white w-[200px] absolute  top-[57px] right-0 rounded z-20 p-2 shadow-md`}>
              <h1 className="text-blue-gray-500 flex justify-center items-center text-xl py-1 hover:text-pink-500">
                Welcome to Eshop
              </h1>

              {/* Join and SignIn Button */}
              <div className="flex justify-between items-center w-full">
                <Link to="/registration/" className=" rounded text-center text-white bg-pink-500 w-1/2 py-1 mr-1">
                  Join
                </Link>
                <Link
                  to="/login/"
                  className=" rounded text-center w-1/2 py-1 text-pink-500 border border-1 border-pink-500 hover:text-white hover:bg-pink-500  duration-500"
                >
                  SignIn
                </Link>
              </div>
              {/* user options */}

              <div>
                <h1 className="flex justify-start items-center py-1 m-1 mr-2 text-blue-gray-500 hover:text-pink-500">
                  <MdOutlineSwitchAccount className="mr-2 " /> <Link to="/account/">My Account</Link>
                </h1>

                <div className="flex justify-start items-center py-1 m-1 mr-2 text-blue-gray-500 hover:text-pink-500">
                  <FaRegHeart className=" mr-2" />
                  <Link to="/account/wishlist/" className="">My Wishlist</Link>
                </div>

                <Link to="/account/my-orders/" className="flex justify-start items-center py-1 m-1 mr-2 text-blue-gray-500 hover:text-pink-500">
                  <FaGift className=" mr-2" /> <h1 className="">My Orders</h1>
                </Link>

                <div className="flex justify-start items-center py-1 m-1 mr-2 text-blue-gray-500 hover:text-pink-500">
                  <FaCartPlus className="  mr-2" /> <h1 className="">My Cart</h1>
                </div>

                <Link to="/login/" className="flex justify-start items-center py-1 m-1 mr-2 text-blue-gray-500 hover:text-pink-500">
                  <RiLogoutCircleRLine className=" mr-2" /> <h1 className="">Logout</h1>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
