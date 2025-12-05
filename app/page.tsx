"use client";

import { useRouter } from "next/navigation";
import { ReactTyped } from "react-typed";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-orange-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 shadow-sm bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <h1 className="text-3xl font-bold">
          Talk<span className="text-orange-500">Trek</span>
        </h1>

        <div className="hidden md:flex gap-10 text-gray-700 font-medium">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/ai-chat" className="hover:text-orange-500">
            AI Chat
          </Link>
          <Link href="/games" className="hover:text-orange-500">
            Games
          </Link>
          <Link href="/feedback" className="hover:text-orange-500">
            Feedback
          </Link>
        </div>

        <button
          onClick={() => router.push("/login")}
          className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 transition"
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-24 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Level Up Your English <br />
          Skills With
          <span className="text-orange-500"> AI-Powered </span> Learning
        </h1>

        <ReactTyped
          strings={[
            "Speak confidently ✨",
            "Improve fluency 🎙️",
            "Learn with fun games 🎮",
            "Chat with AI anytime 🤖",
          ]}
          typeSpeed={55}
          backSpeed={35}
          loop
          className="text-2xl md:text-3xl mt-4 text-gray-700 font-semibold"
        />

        <p className="text-lg text-gray-600 mt-6 max-w-2xl">
          Practice English speaking with real-time AI conversations, interactive
          games, and personalized lessons crafted just for you.
        </p>

        <button
          onClick={() => router.push("/signup")}
          className="bg-orange-500 text-white px-10 py-3 mt-8 rounded-xl shadow-lg hover:bg-orange-600 transition font-semibold"
        >
          Get Started →
        </button>
      </div>

      {/* About Section */}
      <section className="py-24 px-6 text-center bg-white mt-24">
        <h2 className="text-4xl font-bold">
          What is <span className="text-orange-500">TalkTrek?</span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          TalkTrek is a modern AI-powered learning tool designed to help
          students and professionals build real-world English speaking
          confidence through practice, feedback, and gamified training.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-orange-50 text-center">
        <h2 className="text-4xl font-bold mb-12">How We Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-white shadow-lg">
            <h3 className="text-xl font-bold">1. Practice</h3>
            <p className="text-gray-600 mt-2">
              Speak daily with the AI speaking coach and improve fluency
              naturally.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-lg">
            <h3 className="text-xl font-bold">2. Play & Learn</h3>
            <p className="text-gray-600 mt-2">
              Enjoy interactive English games that boost vocabulary and
              accuracy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-lg">
            <h3 className="text-xl font-bold">3. Track Progress</h3>
            <p className="text-gray-600 mt-2">
              Get smart feedback, insights, and personalized learning paths.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((x) => (
            <div key={x} className="bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-gray-600 italic">
                “TalkTrek boosted my speaking confidence. AI chat feels just
                like talking to a real person!”
              </p>
              <h4 className="mt-4 font-bold text-orange-500">⭐ ⭐ ⭐ ⭐ ⭐</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <h2 className="text-xl font-semibold">
          Talk<span className="text-orange-500">Trek</span>
        </h2>
        <p className="mt-2">Learn. Practice. Improve Everyday.</p>
        <p className="mt-4 text-sm">© 2025 TalkTrek. All rights reserved.</p>
      </footer>
    </div>
  );
}
