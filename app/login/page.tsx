"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Store user info in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful 🎉");
        router.push("/dashboard"); // Redirect to dashboard
      } else {
        alert(data.error || "Login Failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong 😢");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-orange-400 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-black">TalkTrek</h1>
          <h2 className="text-4xl font-bold mt-3">
            Welcomes <br /> You
          </h2>
          <p className="text-lg font-medium mt-5">
            AI-Powered English. <br /> Real-World Confidence.
          </p>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Talk<span className="text-orange-500">Trek</span>
          </h2>

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

          <p className="text-sm text-right text-gray-500 cursor-pointer hover:underline">
            Forgot password?
          </p>

          <button
            onClick={handleLogin}
            className="bg-orange-400 text-white font-semibold w-full py-3 mt-5 rounded-xl hover:bg-orange-500"
          >
            Sign In
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="text-orange-500 font-semibold text-sm mt-4"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
