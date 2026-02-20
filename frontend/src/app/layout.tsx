import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Ventures Institute",
  description:
    "Advance your space career. A remote-first space venture studio and experiential learning institute—real projects, CAIPO, MoodChanger, Space Travel Agency, and robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground px-4`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
