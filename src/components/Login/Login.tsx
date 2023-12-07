import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useRegisterUserMutation, useLoginUserMutation } from "../../services/userAuthApi.js";
import { storeToken, getToken } from "../../services/LocalStorageService.js";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import {setUserToken} from '../../features/authSlice.js'

type RegistrationForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [loginUser, { isLoading }] = useLoginUserMutation();
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
    const res = await loginUser(data);
    if (res.error) {
      console.log("response error", res.error);
    }
    if (res.data) {
      storeToken(res.data.token);
      const { access_token } = getToken(); 
      dispatch(setUserToken({access_token:access_token}))     
      navigate("/account/");
    }
  };

  // when refresh then token from state vanish thats why below code

  const {access_token} = getToken()
  useEffect(()=>{
    dispatch(setUserToken({access_token:access_token}))
  },[access_token, dispatch])

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
            <h1 className="uppercase font-semibold text-2xl text-blue-gray-700">Login</h1>
            <p className="text-blue-gray-700 text-lg">If you are a returning customer.</p>
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

          {/* Remember Me */}
          <div className="flex justify-between items-center my-2">
            <Checkbox defaultChecked label="Remember Me" color="pink" />
            <Link to="" className="text-pink-500 font-bold">
              Forgot password
            </Link>
          </div>

          {/* Create Account Button */}
          <div className="flex justify-center items-center my-4">
            <button
              disabled={!isDirty || isSubmitting}
              type="submit"
              className="bg-pink-500  p-2 rounded-lg w-full text-white uppercase font-semibold"
            >
              Login
            </button>
          </div>
          <div className="flex justify-around items-center">
            <div className="h-[1px] bg-blue-gray-500 w-1/3 mr-1"></div>
            <p className="uppercase w-1/3 text-sm my-2">OR LOGIN IN WITH</p>
            <div className="h-[1px] bg-blue-gray-500 w-1/3"></div>
          </div>
          <div className="flex justify-center items-center w-full my-2">
            <button className="font-semibold text-center bg-blue-600  p-2  mr-2 rounded-lg w-1/2 text-white">
              Facebook
            </button>
            <button className="font-semibold text-center bg-pink-500  p-2  rounded-lg w-1/2 text-white">Google</button>
          </div>
          <div className="flex justify-center items-center">
            <h1>
              Don't have an account. ?{" "}
              <Link to="/registration/" className="text-pink-500 font-bold">
                Register Now
              </Link>
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
