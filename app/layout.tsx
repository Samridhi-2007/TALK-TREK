import "./globals.css";
import { connectDB } from "@/lib/mongodb";

export const metadata = {
  title: "TalkTrek",
  description: "AI English Learning App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  connectDB(); // Calling database
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
