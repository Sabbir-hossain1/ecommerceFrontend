import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ProfileInfoForm = {
  House: string;
  Phone: string;
  Country: string;
  Region: string;
  City: string;
  Area: string;
};

const ManageAddress = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty, dirtyFields },
  } = useForm<ProfileInfoForm>();
  return (
    <div className="bg-white shadow-md p-4 mx-4">
      <h1 className="text-2xl font-semibold">Manage Address </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* House */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">
            House <span className="text-red-500">*</span>
          </h1>
          <input
            type="text"
            defaultValue="Sabbir"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("House")}
          />
          <p className="text-pink-500">{errors.House?.message}</p>
        </div>

        {/* Phone */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Phone Number</h1>
          <input
            type="text"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("Phone")}
          />
        </div>

        {/* Country  */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Country</h1>
          <select
            id="country"
            className="w-full border border-1 border-slate-300 rounded p-2 focus:outline-none text-slate-500"
            {...register("Country", {
              required: {
                value: true,
                message: "Select a Country",
              },
            })}
          >
            <option value="bangladesh" className="text-slate-600">
              Bangladesh
            </option>
            <option value="india" className="text-slate-600">
              India
            </option>
          </select>
        </div>

        {/* Region  */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Region</h1>
          <select
            id="Region"
            className="w-full border border-1 border-slate-300 rounded p-2 focus:outline-none text-slate-500"
            {...register("Region", {
              required: {
                value: true,
                message: "Select a Region",
              },
            })}
          >
            <option value="Chattogram" className="text-slate-600">
              Chattogram
            </option>
            <option value="Commilla" className="text-slate-600">
              Commilla
            </option>
          </select>
        </div>

        {/* City  */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">City</h1>
          <select
            id="City"
            className="w-full border border-1 border-slate-300 rounded p-2 focus:outline-none text-slate-500"
            {...register("City", {
              required: {
                value: true,
                message: "Select a City",
              },
            })}
          >
            <option value="dhaka-south" className="text-slate-600">
              Dhaka South
            </option>
            <option value="dhaka-north" className="text-slate-600">
              Dhaka North
            </option>
          </select>
        </div>

        {/* Area  */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Area</h1>
          <select
            id="Area"
            className="w-full border border-1 border-slate-300 rounded p-2 focus:outline-none text-slate-500"
            {...register("Area", {
              required: {
                value: true,
                message: "Select a Area",
              },
            })}
          >
            <option value="north" className="text-slate-600">
              North
            </option>
            <option value="south" className="text-slate-600">
              South
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="px-4 py-2 uppercase bg-pink-500 text-white text-center font-semibold m-2 my-4 rounded-md">
          Update Changes
        </button>
      </div>
    </div>
  );
};

export default ManageAddress;
