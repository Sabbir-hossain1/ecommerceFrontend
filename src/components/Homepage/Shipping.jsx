import React from "react";
import delivery_men from '/assets/img/delivery-van.svg'
import money_back from '/assets/img/money-back.svg'
import service_hours from '/assets/img/service-hours.svg'

const Shipping = () => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mx-10 my-10">
      {/* 1 */}
      <div className="xs:mx-3 xs:my-2 sm:my-2 sm:mx-5 md:mx-10 flex justify-center items-center px-10 border-[1px] border-red-500  py-4 rounded">
        <img src={delivery_men} className="text-5xl mr-5 text-[#eb697a]" />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl text-slate-600">Free Shipping</p>
          <p className="text-slate-500">Orders over $200</p>
        </div>
      </div>

      {/* 2 */}
      <div className="xs:mx-3 xs:my-2 sm:my-2 sm:mx-5 md:mx-10 flex justify-center items-center px-10 border-[1px] border-red-500  py-4 rounded">
        <img src={money_back} className="text-5xl mr-5 text-[#eb697a]" />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl text-slate-600">Money Returns</p>
          <p className="text-slate-500">30 days money return</p>
        </div>
      </div>

      {/* 3 */}
      <div className="xs:mx-3  sm:mx-5 md:mx-10 flex justify-center items-center px-10 border-[1px] border-red-500  py-4 rounded">
        <img src={service_hours} className="text-5xl mr-5 text-[#eb697a]" />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl text-slate-600">24/7 Support</p>
          <p className="text-slate-500">Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
