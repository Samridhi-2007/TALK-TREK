import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json({ answer: "Please say something." });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    const prompt = `
You are a friendly English speaking tutor.
Correct the user's English if needed and reply clearly and politely.

User said: "${message}"
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return Response.json({ answer: text });
  } catch (error) {
    console.error(error);
    return Response.json(
      { answer: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
