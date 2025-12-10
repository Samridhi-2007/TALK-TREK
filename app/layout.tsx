import "./globals.css";
import { connectDB } from "@/lib/mongodb";
import { Providers } from "./providers"; // Client wrapper import

export const metadata = {
  title: "TalkTrek",
  description: "AI English Learning App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  connectDB(); // Database connect
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
