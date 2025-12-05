"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleSignup = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        alert("Signup Successful 🎉");
        router.push("/login");
      } else {
        alert("Signup Failed ❌");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong 😢");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-2xl overflow-hidden">
        {/* Left Orange Section */}
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

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded-xl text-gray-500 bg-gray-100 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded-xl text-gray-500 bg-gray-100 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-2 rounded-xl text-gray-500 bg-gray-100 outline-none"
          />

          <button
            onClick={handleSignup}
            className="bg-orange-400 text-white font-semibold w-full py-3 mt-5 rounded-xl hover:bg-orange-500"
          >
            Sign Up
          </button>

          {/* Google Login Button (same as login) */}
          <div className="flex items-center gap-2 justify-center border mt-5 py-3 rounded-xl cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-6 h-6"
            />
            <span className="text-sm text-gray-500 font-semibold">
              Continue with Google
            </span>
          </div>

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
