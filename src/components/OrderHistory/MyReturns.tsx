const MyReturns = () => {
  return (
    <div>
      <div className="bg-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.20)] px-6 py-6 mx-4 flex justify-between items-center">
        {/* product img */}
        <div>
          <img src="" alt="img" />
        </div>

        {/* Title and price */}
        <div>
          <h1 className="text-gray-700 font-semibold">Herschel Leather Duffle Bag</h1>
          <h1 className="text-gray-600">$55</h1>
        </div>

        {/* Order Number */}
        <div>
          <h1 className="text-gray-700 font-semibold">Order Number</h1>
          <h1 className="text-gray-600">4j5445456f</h1>
        </div>

        {/* Return Status */}
        <div>
          <h1 className="text-gray-700 font-semibold">Return Status</h1>
          <h2 className="text-gray-600">Successful</h2>
        </div>

        {/* Order view Button */}
        <button className="border border-pink-500 text-pink-500 rounded-md hover:text-white hover:bg-pink-500 flex justify-center items-center py-2 px-6 duration-500">
          View Order
        </button>
      </div>
    </div>
  );
};

export default MyReturns;
