import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "../schemas/registerSchema";

const Register = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    control,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      imageUrl: "",
    },
  });

  useEffect(() => {
    generateAvatar();
  }, []);

  const generateAvatar = () => {
    const randomSeed = Math.random().toString(36).substring(2, 15);
    const url = `https://robohash.org/${randomSeed}.png?size=200x200`;
    setAvatarUrl(url);
    setValue("imageUrl", url, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/register`,
        data,
        { withCredentials: true }
      );

      if (res.status === 201 || res.status === 200) {
        reset();
        toast.success("Registration Successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.error("Register error", error.message);
      toast.error("Registration Failed!");
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="min-h-screen flex bg-[url(/hero3.jpg)] items-center flex-col justify-center sm:flex-row sm:gap-x-4 py-16 text-white bg-cover bg-center">
        <div className="w-full sm:w-96 flex items-center flex-col">
          <h1 className="text-4xl">Register</h1>
          <div className="w-full sm:w-96 px-4">
            <div className="flex flex-col items-center mt-4">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full mb-2 border"
                />
              )}
              <button
                type="button"
                onClick={generateAvatar}
                className="px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              >
                Generate Avatar
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 w-full sm:w-96"
            >
              <p className="mb-2 mt-2">Enter your username</p>
              <input
                {...register("username")}
                className="px-3 py-2 w-full outline-0 text-black bg-white placeholder:text-black rounded-md"
                type="text"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}

              <p className="mb-2 mt-2">Enter your email</p>
              <input
                {...register("email")}
                className="px-3 py-2 w-full outline-0 text-black bg-white placeholder:text-black rounded-md"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <p className="mb-2 mt-2">Enter your password</p>
              <input
                {...register("password")}
                className="px-3 py-2 w-full bg-white text-black placeholder:text-black rounded-md outline-0"
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <Controller
                name="imageUrl"
                control={control}
                render={({ field }) => <input type="hidden" {...field} />}
              />

              <input
                disabled={isSubmitting}
                type="submit"
                className="px-5 mt-4 rounded-md py-3 outline-0 bg-[#292929] hover:bg-[#7A7A7A] transition-all sm:px-28 text-[12px] font-extrabold w-full"
                value={isSubmitting ? "Submitting" : "Register"}
              />

              <Link to="/login" className="block mt-3">
                Already have an account? Login
              </Link>
            </form>
          </div>
        </div>

        <div>
          <img
            className="w-96 mt-10 h-96"
            src="/register.svg"
            alt="Register Illustration"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
