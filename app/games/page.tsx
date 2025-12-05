"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Game {
  name: string;
  description: string;
  icon: string;
  color: "orange" | "gray";
}

const games: Game[] = [
  {
    name: "Speak Loud",
    description: "Pronounce the word correctly to move the car forward.",
    icon: "🚗",
    color: "orange",
  },
  {
    name: "Word-Meaning Match",
    description: "Match the word with its correct meaning.",
    icon: "🔤",
    color: "gray",
  },
  {
    name: "Word Basket",
    description: "Collect the correct letters to form the word.",
    icon: "🧺",
    color: "orange",
  },
  {
    name: "Word Puzzle",
    description: "Unscramble the letters to form the correct word.",
    icon: "🧩",
    color: "gray",
  },
  {
    name: "Walk n Talk",
    description: "Talk with your friend and interact in real-time.",
    icon: "🗨️",
    color: "orange",
  },
];

const GamesPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Play & Learn
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {games.map((game) => (
          <div
            key={game.name}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer overflow-hidden relative"
            onClick={() =>
              router.push(
                "/games/" + game.name.replace(/\s+/g, "-").toLowerCase()
              )
            }
          >
            {/* Badge / Color Strip */}
            <div
              className={`absolute top-0 left-0 w-full h-2 ${
                game.color === "orange" ? "bg-orange-500" : "bg-gray-400"
              }`}
            />

            {/* Icon */}
            <div className="flex justify-center mt-6 text-6xl">{game.icon}</div>

            {/* Game Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{game.name}</h3>
              <p className="text-gray-600 text-sm">{game.description}</p>
            </div>

            {/* Play Button */}
            <div className="p-6 text-center">
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Login required to play this game!");
                }}
              >
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
