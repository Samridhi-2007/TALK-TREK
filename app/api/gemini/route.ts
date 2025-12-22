import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
    });

    const result = await model.generateContent(text);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("Gemini SDK FULL error:", err);

    return NextResponse.json(
      {
        error: err?.message || "Gemini failed",
      },
      { status: 500 }
    );
  }
}
