"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Sample Module Type
type Module = {
  id: number;
  title: string;
  status: "locked" | "in-progress" | "completed";
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  // Sample modules
  const [modules, setModules] = useState<Module[]>([
    { id: 1, title: "Vocabulary Basics", status: "completed" },
    { id: 2, title: "Grammar 101", status: "in-progress" },
    { id: 3, title: "Speaking Practice", status: "locked" },
    { id: 4, title: "Fun Quiz", status: "locked" },
  ]);

  const [xp, setXp] = useState(1200); // Example XP
  const [streak, setStreak] = useState(5); // Example streak

  // Get user info from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login"); // Redirect if not logged in
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleModuleClick = (mod: Module) => {
    if (mod.status === "locked") return;
    alert(`Opening module: ${mod.title}`);
    // TODO: Navigate to module page
  };

  if (!user) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Hello, {user.name} 👋</h1>
          <p className="text-gray-500 mt-1">Welcome back to TalkTrek</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-gray-500">XP Earned</h2>
          <p className="text-2xl font-bold mt-2">{xp}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-gray-500">Current Streak</h2>
          <p className="text-2xl font-bold mt-2">{streak} days</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-gray-500">Modules Completed</h2>
          <p className="text-2xl font-bold mt-2">
            {modules.filter((m) => m.status === "completed").length} /{" "}
            {modules.length}
          </p>
        </div>
      </div>

      {/* Modules List */}
      <h2 className="text-xl font-semibold mb-4">Your Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <div
            key={mod.id}
            onClick={() => handleModuleClick(mod)}
            className={`p-6 rounded-xl shadow cursor-pointer transition transform hover:scale-105
              ${
                mod.status === "completed"
                  ? "bg-green-100"
                  : mod.status === "in-progress"
                  ? "bg-yellow-100"
                  : "bg-gray-200 cursor-not-allowed"
              }`}
          >
            <h3 className="font-bold text-lg">{mod.title}</h3>
            <p className="mt-2 text-sm text-gray-600">
              Status: {mod.status.replace("-", " ")}
            </p>
            {mod.status === "in-progress" && (
              <button className="mt-3 bg-orange-400 text-white px-3 py-1 rounded hover:bg-orange-500 text-sm">
                Continue
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
