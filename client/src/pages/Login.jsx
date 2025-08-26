import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/loginSchema";
import { z } from "zod";
const Login = ({ darkTheme }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        reset();
        toast.success("Login Successful!");
        setTimeout(() => {
          navigate("/admindashboard", { state: res.data.foundUser });
        }, 1500);
      }
    } catch (error) {
      console.error("Login error", error.message);
      toast.error("Login Failed!");
    }
  };
  return (
    <>
      <Toaster position="bottom-right" />
      <div
        className={`min-h-screen flex bg-[url(/hero3.jpg)] items-center flex-col justify-center center sm:flex-row sm:gap-x-4 py-16 text-white bg-cover bg-center`}
      >
        <div className="w-full sm:w-96 flex  items-center flex-col">
          <h1 className="text-4xl">Login</h1>
          <div className="w-full sm:w-96 px-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 w-full sm:w-96"
            >
              <p className="mb-2 mt-2">Enter your email</p>
              <input
                {...register("email")}
                className={`px-3 py-2 w-full outline-0 text-black bg-white placeholder:text-black rounded-md `}
                type="text"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <p className="mb-2 mt-2">Enter your password</p>
              <input
                {...register("password")}
                className={`px-3 py-2 w-full bg-white text-black placeholder:text-black rounded-md outline-0 `}
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <input
                disabled={isSubmitting}
                type="submit"
                className={`px-5 mt-4 rounded-md py-3 outline-0 bg-[#292929] hover:bg-[#7A7A7A] transition-all sm:px-28 text-[12px] font-extrabold w-full `}
                value={isSubmitting ? "Submitting" : "Login"}
              />
              <Link to="/register">Dont have an account? Register</Link>
            </form>
          </div>
        </div>
        <div>
          <img className="w-96 mt-10 h-96" src="/register.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
