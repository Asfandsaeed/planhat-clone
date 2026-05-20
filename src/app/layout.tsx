import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Planhat — The Agentic Customer Platform",
  description:
    "A customer platform where commercial teams work better. We build and deploy frontier technologies—integrating data, AI and collaboration—that empower industry leaders to acquire and grow lifelong revenue.",
  icons: {
    icon: [
      { url: "https://framerusercontent.com/images/Ryii4s5qcjHmFMxKyur3Yasiv8.png", media: "(prefers-color-scheme: light)" },
      { url: "https://framerusercontent.com/images/FzOwtYGb8lDLgTJJWTwcLl3edM.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "https://framerusercontent.com/images/Z5mji5haekEFlBD0voWyUTQce6M.png",
  },
  openGraph: {
    type: "website",
    title: "Planhat",
    description:
      "A customer platform where commercial teams work better. We build and deploy frontier technologies—integrating data, AI and collaboration—that empower industry leaders to acquire and grow lifelong revenue.",
    images: ["https://framerusercontent.com/images/oT3xihzfqIdgj5LplXZhn8.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
