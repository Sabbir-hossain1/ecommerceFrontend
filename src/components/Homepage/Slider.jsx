import "../../style/swiper.css";
import iphone_12 from "/assets/img/iphone-12.png";
import iphone_xr from "/assets/img/iphone-xr.png";
import iphone from "/assets/img/iphone.png";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
<script type="module"></script>;

const Slider = () => {
  return (
    <swiper-container slides-per-view="1" speed="400" loop="true" navigation="true" pagination="true">
      <swiper-slide>
        <div className="w-full h-full flex bg-[#fc8393]">
          {/* Text */}
          <div className="w-2/2 sm:w-1/2 flex flex-col justify-center items-center  mx-12 text-slate-500">
            <div className="text-lg md:text-xl p-1">Get up to 50% off Today only</div>
            <div className="text-4xl font-bold p-1">Apple iPhone XR</div>
            <div className="text-[#eb344c] p-1">
              $450.00 <span className="line-through text-slate-400">$550.45</span>
            </div>
            <div className="uppercase text-white bg-[#eb344c] rounded py-2 px-4 flex justify-center items-center mt-2 cursor-pointer">
              shop now
            </div>
          </div>
          {/* image div*/}
          <div className="hidden  sm:block sm:w-1/2 py-4 px-8">
            <img src={iphone} alt="iphone_xr" className="object-contain h-full" />
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="w-full h-full flex bg-[#bebcbc]">
          {/* Text */}
          <div className="w-1/2 flex flex-col justify-center items-center  mx-12 text-slate-500">
            <div className="text-xl p-1">Get up to 50% off Today only</div>
            <div className="text-4xl font-bold p-1">Apple iPhone XR</div>
            <div className="text-[#eb344c] p-1">
              $450.00 <span className="line-through text-slate-400">$550.45</span>
            </div>
            <div className="uppercase text-white bg-[#eb344c] rounded py-2 px-4 flex justify-center items-center mt-2 cursor-pointer">
              shop now
            </div>
          </div>
          {/* image div*/}
          <div className="w-1/2 flex justify-center items-center py-4 px-8">
            <img src={iphone_12} alt="iphone_xr" className="object-contain h-full" />
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="w-full h-full flex bg-[#9fd7fa]">
          {/* Text */}
          <div className="w-1/2 flex flex-col justify-center items-center  mx-12 text-slate-500">
            <div className="text-xl p-1">Get up to 50% off Today only</div>
            <div className="text-4xl font-bold p-1">Apple iPhone XR</div>
            <div className="text-[#eb344c] p-1">
              $450.00 <span className="line-through text-slate-400">$550.45</span>
            </div>
            <div className="uppercase text-white bg-[#eb344c] rounded py-2 px-4 flex justify-center items-center mt-2 cursor-pointer">
              shop now
            </div>
          </div>
          {/* image div*/}
          <div className="w-1/2 flex justify-center items-center py-4 px-8">
            <img src={iphone_xr} alt="iphone_xr" className="object-contain h-full" />
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  );
};

export default Slider;
