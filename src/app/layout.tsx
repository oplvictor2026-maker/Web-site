import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI-OS | 下一代智能操作系统",
  description: "AI-OS 是专为 AI 时代打造的下一代智能操作系统，提供强大的 AI 能力、无缝的跨设备体验和开发者友好的平台。",
  keywords: ["AI-OS", "人工智能", "操作系统", "AI Platform", "智能系统"],
  authors: [{ name: "Victor", email: "victor@fengfan.com" }],
  openGraph: {
    title: "AI-OS | 下一代智能操作系统",
    description: "专为 AI 时代打造的下一代智能操作系统",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
