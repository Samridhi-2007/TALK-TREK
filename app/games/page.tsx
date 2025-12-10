"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Game {
  name: string;
  description: string;
  image: string;
  color: string;
  gradient: string;
  path: string;
}

const games: Game[] = [
  {
    name: "Speak Loud",
    description: "Pronounce the word correctly to move the car forward.",
    image: "/games/speak-loud.jpg",
    color: "from-orange-500 to-yellow-400",
    gradient: "bg-gradient-to-r from-orange-500 to-yellow-400",
    path: "/games/speak-loud",
  },
  {
    name: "Word-Meaning Match",
    description: "Match the word with its correct meaning.",
    image: "/games/word-match.jpg",
    color: "from-blue-500 to-cyan-400",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-400",
    path: "/games/wm",
  },
  {
    name: "Word Basket",
    description: "Collect the correct letters to form the word.",
    image: "/games/word-basket.jpg",
    color: "from-green-500 to-emerald-400",
    gradient: "bg-gradient-to-r from-green-500 to-emerald-400",
    path: "/games/word-basket",
  },
  {
    name: "Word Puzzle",
    description: "Unscramble the letters to form the correct word.",
    image: "/games/word-puzzle.jpg",
    color: "from-purple-500 to-pink-400",
    gradient: "bg-gradient-to-r from-purple-500 to-pink-400",
    path: "/games/word-puzzle",
  },
  {
    name: "Walk n Talk",
    description: "Talk with your friend and interact in real-time.",
    image: "/games/walk-talk.jpg",
    color: "from-rose-500 to-pink-400",
    gradient: "bg-gradient-to-r from-rose-500 to-pink-400",
    path: "/games/walk-n-talk",
  },
];

const GamesPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            Game Zone
          </h1>
          <div className="flex flex-wrap gap-3">
            <button
              className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span>🏠</span> Home
            </button>
            <button
              className="px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
              onClick={() => alert("Instructions will be shown here!")}
            >
              <span>📜</span> Instructions
            </button>
          </div>
        </div>
      </nav>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Game Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className={`absolute inset-0 ${game.gradient} opacity-90`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                  {game.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {game.name}
                  </span>
                </div>
              </div>

              {/* Game Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{game.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push(game.path)}
                    className={`px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 ${game.gradient} hover:opacity-90 flex-1 text-center`}
                  >
                    Play Now
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(
                        `Instructions for ${game.name}:\n${game.description}`
                      );
                    }}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-all duration-300"
                  >
                    How to Play
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-16 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} TalkTrek - Learn English Through Games
        </p>
      </footer>
    </div>
  );
};

export default GamesPage;
