import { Rating, Textarea, Button } from "@material-tailwind/react";
const WriteReview = () => {
  return (
    <div className="bg-white shadow-md p-4 mx-4">
      <h1 className="text-2xl font-semibold text-blue-gray-800">Write Review</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First col */}
        <div>
          {/* Product info */}
          <div className="flex items-center">
            <img
              className="h-[60px] w-[60px] rounded-full object-cover object-center mr-2"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />

            <div className="m-2">
              <h1 className="p-1 text-blue-gray-600 text-lg">Sound Intone I65 Earphone</h1>
              <p className="p-1 text-blue-gray-600 text-md">No Warranty Available</p>
            </div>
          </div>

          <div className="text-lg p-1 m-1">
            <h1 className=" text-blue-gray-600">Rate and review your product</h1>
            <div className="flex  text-blue-gray-600">
              <Rating unratedColor="amber" ratedColor="amber" />
              <p>Good</p>
            </div>
          </div>

          <div>
            <h1 className="m-1 p-1 text-blue-gray-600">Review Details</h1>
            <Textarea label="Review" color="blue-gray" />
          </div>
          <Button className="bg-pink-500">Submit</Button>
        </div>

        {/* Second col */}

        <div>
          <div className="m-1 p-1 text-blue-gray-600">
            <h1 className="text-lg">Purchased</h1>
            <p>16 Dec 2023</p>
          </div>

          <div className="mx-1 my-2 p-1 text-blue-gray-600 text-lg">
            <h1>Rate and review your seller</h1>
            <div className="flex">
              <Rating unratedColor="amber" ratedColor="amber" />
              <p>Good</p>
            </div>
          </div>

          <div className="mx-1 my-2 p-1 text-blue-gray-600 text-lg">
            <h1>Rate your Rider</h1>
            <div className="flex">
              <Rating unratedColor="amber" ratedColor="amber" />
              <p>Good</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
