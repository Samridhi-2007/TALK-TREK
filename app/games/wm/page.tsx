"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js App Router ke liye

type Question = {
  id: number;
  word: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: string;
  level: number;
};

export default function WMGame() {
  const [q, setQ] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const router = useRouter(); // Router hook

  async function loadQuestion() {
    const res = await fetch("/api/wm");
    const data: Question = await res.json();
    setQ(data);
    setFeedback(null);
  }

  useEffect(() => {
    loadQuestion();
  }, []);

  function checkAnswer(ans: string) {
    if (!q) return;

    if (ans === q.correct_option) {
      setScore((prev) => prev + 10);
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Wrong!");
    }

    setTimeout(() => {
      loadQuestion();
    }, 700);
  }

  if (!q)
    return (
      <div className="flex items-center justify-center h-screen bg-linear-to-r from-pink-300 via-purple-300 to-indigo-300 animate-pulse">
        <p className="text-2xl font-bold text-white">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-yellow-200 via-pink-300 to-purple-400 p-6 animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-pink-600 animate-bounce">
          🌟 Word Match Game 🌟
        </h1>
        <h2 className="text-xl font-bold mb-6 text-center text-purple-700">
          Score: {score}
        </h2>

        <div className="bg-yellow-100 p-6 rounded-2xl mb-6 text-center text-2xl font-bold text-purple-800 shadow-lg animate-pulse">
          {q.word}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[q.option1, q.option2, q.option3, q.option4].map((opt) => (
            <button
              key={opt}
              onClick={() => checkAnswer(opt)}
              className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-200 animate-bounce"
            >
              {opt}
            </button>
          ))}
        </div>

        {feedback && (
          <div
            className={`mt-6 text-center font-bold text-2xl ${
              feedback.includes("✅")
                ? "text-green-500 animate-pulse"
                : "text-red-500 animate-shake"
            }`}
          >
            {feedback}
          </div>
        )}

        {/* Back button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push("/dashboard")} // ya "/" for homepage
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
