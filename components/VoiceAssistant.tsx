"use client";
import { useState } from "react";
import { useSpeech } from "@/hooks/useSpeech";
import ChatBubble from "./ChatBubble";
import VoiceWave from "./VoiceWave";
import { useRouter } from "next/navigation";

type Chat = {
  role: "user" | "ai";
  text: string;
};

export default function VoiceAssistant() {
  const {
    transcript,
    listening,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition,
  } = useSpeech();
  const router = useRouter();

  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleStop = async () => {
    stopListening();

    if (!transcript.trim()) return;

    setChats((prev) => [...prev, { role: "user", text: transcript }]);
    setLoading(true);

    const res = await fetch("/api/ai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: transcript }),
    });

    const data = await res.json();

    setChats((prev) => [...prev, { role: "ai", text: data.answer }]);
    speak(data.answer);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-100 to-purple-50 p-4 flex flex-col items-center">
      <h1
        className="text-4xl font-extrabold mb-6 
  bg-linear-to-r from-purple-600 via-pink-500 to-indigo-600
  text-transparent bg-clip-text tracking-wide drop-shadow-sm"
      >
        TalkTrek AI
      </h1>
      <button
        onClick={() => router.push("/")}
        className="fixed top-4 right-4 
    bg-white/80 backdrop-blur 
    px-4 py-2 rounded-full shadow 
    text-purple-600 font-medium 
    hover:bg-purple-100 transition"
      >
        🏠 Home
      </button>

      <div className="w-full max-w-xl bg-white p-4 rounded-lg shadow mb-4 h-[60vh] overflow-y-auto">
        {chats.map((chat, i) => (
          <ChatBubble key={i} role={chat.role} text={chat.text} />
        ))}
        {loading && <p className="text-gray-400">AI is thinking...</p>}
      </div>

      <p className="mb-2 text-gray-600">{transcript}</p>

      <div className="flex flex-col items-center gap-3 mt-4">
        <button
          onClick={listening ? handleStop : startListening}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl transition-all
      ${
        listening ? "bg-red-500 animate-pulse" : "bg-purple-600 hover:scale-105"
      }`}
        >
          🎤
        </button>

        <p className="text-sm text-gray-600">
          {listening ? "Listening..." : "Tap to speak"}
        </p>

        <VoiceWave active={listening} />
      </div>
    </div>
  );
}
