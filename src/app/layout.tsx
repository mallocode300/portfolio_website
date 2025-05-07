import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Engineer Portfolio",
  description: "Professional portfolio showcasing AI engineering work and expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} bg-primary text-gray-900 antialiased`} style={{backgroundColor: "#f5f5f0"}}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 md:px-6 pt-16 pb-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
