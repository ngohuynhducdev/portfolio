import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duc Ngo — Web Developer",
  description:
    "Portfolio of Duc Ngo — crafting beautiful, functional web experiences with React, Next.js, and modern tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
