import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ProfileInfoForm = {
  FirstName: string;
  LastName: string;
  dob: Date;
  gender: string;
  email: string;
  phoneNumber: string;
};

const ProfileInfo = () => {
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
      <h1 className="text-2xl font-semibold">Profile Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">First Name</h1>
          <input
            type="text"
            defaultValue="Sabbir"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("FirstName", { required: { value: true, message: "First Name required" } })}
          />
          <p className="text-pink-500">{errors.FirstName?.message}</p>
        </div>

        {/* Last Name */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Last Name</h1>
          <input
            type="text"
            defaultValue="Hossain"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("LastName", { required: { value: true, message: "Last Name required" } })}
          />
          <p className="text-pink-500">{errors.LastName?.message}</p>
        </div>
        {/* Birth day */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Birthday</h1>
          <input
            type="date"
            defaultValue="Hossain"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("dob", { required: { value: true, message: "Select Birthday" } })}
          />
          <p className="text-pink-500">{errors.dob?.message}</p>
        </div>

        {/* Gender  */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Gender</h1>
          <select
            id="gender"
            className="w-full border border-1 border-slate-300 rounded p-2 focus:outline-none text-slate-500"
            {...register("gender", {
              required: {
                value: true,
                message: "Select a Gender",
              },
            })}
          >
            <option value="male" className="text-slate-600">
              Male
            </option>
            <option value="female" className="text-slate-600">
              Female
            </option>
          </select>
        </div>

        {/* Email */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">
            Update Email <span className="text-red-500">*</span>
          </h1>
          <input
            type="email"
            defaultValue="sabbir@gmail.com"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email",
              },
              validate: {
                emailAvailable: async (fieldValue) => {
                  if (dirtyFields.email) {
                    // Only validate if the email field is dirty
                    console.log("Check email called");
                    const response = await fetch("http://127.0.0.1:8000/email-check/", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email: fieldValue }),
                    });
                    const data = await response.json();
                    if (data.emailExist) {
                      return "Email Already Exist";
                    }
                  }
                },
              },
            })}
          />
          <p className="text-pink-500">{errors.email?.message}</p>
        </div>

        {/* Phone */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Phone Number</h1>
          <input
            type="text"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("phoneNumber")}
          />
          <p className="text-pink-500">{errors.phoneNumber?.message}</p>
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

export default ProfileInfo;
