type Props = {
  role: "user" | "ai";
  text: string;
};

export default function ChatBubble({ role, text }: Props) {
  return (
    <div
      className={`max-w-[80%] p-3 rounded-lg mb-2 ${
        role === "user"
          ? "ml-auto bg-purple-600 text-white"
          : "mr-auto bg-gray-200 text-black"
      }`}
    >
      {text}
    </div>
  );
}
