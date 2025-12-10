"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FaHome } from "react-icons/fa";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  // If already logged in, redirect
  if (session) {
    router.push("/"); // redirect to homepage
  }

  // Custom signup with your API
  const handleSignup = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        alert("Signup Successful 🎉");
        router.push("/login");
      } else {
        const data = await res.json();
        alert(data.message || "Signup Failed ❌");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong 😢");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Home button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 left-5 flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <FaHome /> Home
      </button>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="bg-orange-400 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-black">TalkTrek</h1>
          <h2 className="text-4xl font-bold mt-3">
            Create <br /> Your Account
          </h2>
          <p className="text-lg font-medium mt-5">
            Learn English with AI + Fun Modules.
          </p>
        </div>

        {/* Signup Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Create Account
          </h2>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded-xl text-gray-500 bg-gray-100 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded-xl text-gray-500 bg-gray-100 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-2 rounded-xl text-gray-500 bg-gray-100 outline-none"
          />

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="bg-orange-400 text-white font-semibold w-full py-3 mt-5 rounded-xl hover:bg-orange-500"
          >
            Sign Up
          </button>

          {/* OR Separator */}
          <div className="flex items-center my-5">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Login */}
          <div
            onClick={() => signIn("google")}
            className="flex items-center gap-2 justify-center border py-3 rounded-xl cursor-pointer hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-6 h-6"
            />
            <span className="text-sm text-gray-500 font-semibold">
              Continue with Google
            </span>
          </div>

          {/* Already have account */}
          <p className="text-center text-sm mt-4">
            Already have an account?
            <span
              className="text-orange-500 ml-1 font-bold cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
