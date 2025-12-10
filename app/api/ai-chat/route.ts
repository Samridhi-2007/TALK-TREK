import { NextResponse } from "next/server";

// ✅ Demo / Hybrid AI backend
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt?.trim()) {
      return NextResponse.json({ reply: "Empty message" }, { status: 400 });
    }

    // ✅ Your Gemini / OpenAI key (optional)
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // 🔹 If key exists → try real API
    if (apiKey) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
          }
        );

        const data = await res.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) return NextResponse.json({ reply });
      } catch (err) {
        console.warn("Real API failed, using demo response");
      }
    }

    // 🔹 If no key / API fails → fallback to demo response
    const demoReply = getDemoResponse(prompt);
    return NextResponse.json({ reply: demoReply });
  } catch (err: any) {
    return NextResponse.json(
      { reply: "Server crashed: " + err.message },
      { status: 500 }
    );
  }
}

// 🔹 Simple demo AI function
function getDemoResponse(prompt: string) {
  const lower = prompt.toLowerCase();

  if (lower.includes("goa"))
    return "Demo AI: 2-day trip to Goa includes beaches & forts.";
  if (lower.includes("delhi"))
    return "Demo AI: Visit India Gate, Qutub Minar in Delhi.";
  if (lower.includes("jaipur"))
    return "Demo AI: Jaipur trip includes Amber Fort & City Palace.";

  return "Demo AI: Sorry, I don't have info on that. Try another city!";
}
