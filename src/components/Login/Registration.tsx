import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useRegisterUserMutation } from "../../services/userAuthApi.js";
import { storeToken } from "../../services/LocalStorageService.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Checkbox } from "@material-tailwind/react";

type RegistrationForm = {
  fullName: string;
  email: string;
  password: string;
  confirm_password: string;
  tc: boolean;
};

const Registration = () => {
  const navigate = useNavigate()
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const defaultCheckedValue = true;
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty, dirtyFields },
  } = useForm<RegistrationForm>();

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    const res = await registerUser(data);
    console.log("form data: ", data)
    if (res.error) {
      console.log("response error", res.error);
    }
    if (res.data) {
      storeToken(res.data.token)
      navigate('/account/')
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className=" flex justify-center items-center">
      {/* <DevTool control={control} placement="top-right" /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white shadow-lg m-4 p-6 rounded md:w-[500px]">
          <div className="mb-6">
            <h1 className="uppercase font-semibold text-2xl text-blue-gray-700">Create An Account</h1>
            <p className="text-blue-gray-700">Register here if you are a new customer.</p>
          </div>

          {/* Full Name */}
          <div>
            <h1 className="text-blue-gray-500 m-1 font-semibold">
              Full Name <span className="text-red-500">*</span>
            </h1>
            <input
              type="text"
              className="rounded p-2 w-full border border-1 border-blue-gray-300 focus:outline-none"
              {...register("fullName", { required: { value: true, message: "Full Name required" } })}
            />
            <p className="text-pink-500">{errors.fullName?.message}</p>
          </div>

          {/* Email */}
          <div>
            <h1 className="text-blue-gray-500 m-1 font-semibold">
              Email <span className="text-red-500">*</span>
            </h1>
            <input
              type="email"
              className="rounded p-2 w-full border border-1 border-blue-gray-300 focus:outline-none"
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
                      const response = await fetch("http://127.0.0.1:8000/api/user/email-availability/", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: fieldValue }),
                      });
                      const data = await response.json();
                      if (data.emailExist) {
                        console.log("Email already exists");
                        return "Email Already Exist";
                      }
                    }
                  },
                },
              })}
            />
            <p className="text-pink-500">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <h1 className="text-blue-gray-500 m-1 font-semibold">
              Password <span className="text-red-500">*</span>
            </h1>
            <input
              type="password"
              className="rounded p-2 w-full border border-1 border-blue-gray-300 focus:outline-none"
              {...register("password", {
                required: { value: true, message: "Password field is required" },
                validate: {
                  minimumLength: (fieldValue) => {
                    return fieldValue.length >= 8 || "Password should be minimum 8 character";
                  },
                },
              })}
            />
            <p className="text-pink-500">{errors.password?.message}</p>
          </div>

          {/* Confirm Password */}
          <div>
            <h1 className="text-blue-gray-500 m-1 font-semibold">
              Confirm Password <span className="text-red-500">*</span>
            </h1>
            <input
              type="password"
              className="rounded p-2 w-full border border-1 border-blue-gray-300 focus:outline-none"
              {...register("confirm_password", {
                required: { value: true, message: "confirm password is required" },
                validate: (fieldValue) => {
                  return fieldValue === watch("password") || "Password and confirm password does not match";
                },
              })}
            />
            <p className="text-pink-500">{errors.confirm_password?.message}</p>
          </div>

          {/* Terms and Condition */}          
          <div className="flex items-center my-2">
            <Checkbox defaultChecked label="I have read and agree to the" color="pink" {...register('tc')} />
            <Link to="" className="text-pink-500 font-bold ml-2">terms & conditions</Link>
          </div>

          {/* Create Account Button */}
          <div className="flex justify-center items-center my-4">
            <button
              disabled={!isDirty || isSubmitting}
              type="submit"
              className="bg-pink-500  p-2 rounded-lg w-full text-white uppercase font-semibold"
            >
              Create Account
            </button>
          </div>
          <div className="flex justify-around items-center">
            <div className="h-[1px] bg-blue-gray-500 w-1/3 mr-1"></div>
            <p className="uppercase w-1/3 text-sm my-2">OR SIGNUP IN WITH</p>
            <div className="h-[1px] bg-blue-gray-500 w-1/3"></div>
          </div>
          <div className="flex justify-center items-center w-full my-2">
            <button className="font-semibold text-center bg-blue-600  p-2  mr-2 rounded-lg w-1/2 text-white">
              Facebook
            </button>
            <button className="font-semibold text-center bg-pink-500  p-2  rounded-lg w-1/2 text-white">Google</button>
          </div>
          <div className="flex justify-center items-center mt-4">
            <h1 className="text-blue-gray-600">Already have an account. ? <Link to="/login/" className="text-pink-500 font-semibold">Login Now</Link></h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
