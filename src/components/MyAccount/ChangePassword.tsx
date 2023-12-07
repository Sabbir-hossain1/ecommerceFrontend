import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ChangePasswordForm = {
  currentPassword: string;
  newPassword: string;
  retypePassword: string;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty, dirtyFields },
  } = useForm<ChangePasswordForm>();
  return (
    <div className="bg-white shadow-md p-4 mx-4 w-[50%]">
      <h1 className="text-2xl font-semibold"> Change Password </h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Current Password */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold"> Current Password </h1>
          <input
            type="password"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("currentPassword", { required: { value: true, message: "Current password  required" } })}
          />
          <p className="text-rose-500">{errors.currentPassword?.message}</p>
        </div>

        {/* New Password Password */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">New Password Password</h1>
          <input
            type="password"
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("newPassword", { required: { value: true, message: "New Password Password required" } })}
          />
          <p className="text-rose-500">{errors.newPassword?.message}</p>
        </div>

        {/* Retype password */}
        <div>
          <h1 className="text-slate-500 m-1 font-semibold">Retype Password</h1>
          <input
            type="password"            
            className="text-slate-600 rounded p-2 w-full border border-1 border-slate-300 focus:outline-none"
            {...register("retypePassword", { required: { value: true, message: "This field is required" } })}
          />
          <p className="text-rose-500">{errors.retypePassword?.message}</p>
        </div>       
      </div>
      <div className="flex justify-center items-center">
        <button className="px-4 py-2 uppercase bg-rose-500 text-white text-center font-semibold m-2 my-4 rounded-md">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
