import React from "react";

const BottomHero = () => {
  return (
    <div className="mx-10 grid  xs:grid-cols-1 xs:my-2 sm:grid-cols-2 bg-[#f3f3f3] rounded mb-10">
      {/* image */}
      <div className="p-10 h-[50%] w-[80%]">
        <img src="/assets/img/bottom_hero/mobile-view.png" alt="" />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center items-center w-full">
        <div>
          <h1 className="text-4xl m-1 text-slate-700">Download Ecommerce App Now</h1>
          <p className="m-1 my-2 text-xl text-slate-600">Shopping fastly and easily more with our app. Get a link to download the app on your phone</p>
          <div className="m-1 my-4 w-[90%] ">
            <input type="text" className="w-[70%] border-[1px] border-[#fd3d57] focus:outline-[#fd3d57] focus:outline-1 p-[9px] rounded-tl-lg rounded-bl-lg text-xl" placeholder="Email Address"/>
            <button className="w-[30%] bg-[#fd3d57] hover:bg-white hover:text-[#fd3d57] border-[1px] border-[#fd3d57] text-white text-xl p-[9px] rounded-tr-lg rounded-br-lg">Subscribe</button>
          </div>

          <div className="flex">
            <div className="w-[150px] mr-2">
              <img src="assets/img/bottom_hero/download-1.png" alt="playstore" />
            </div>
            <div className="w-[150px]">
              <img src="assets/img/bottom_hero/download-2.png" alt="ios" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
