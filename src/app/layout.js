"use client"
import { useState } from "react";
import Header from "@/src/app/components/Layout/Header/Header"
import Footer from "@/src/app/components/Layout/Footer/Footer"
import "./globals.css"
import {  Onest } from "next/font/google";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500"]
});

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="ru">
      <body className={`${onest.variable} flex flex-col font-onest min-h-screen ${isOpen ? "overflow-hidden" : ""}`}>

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="relative flex-grow">

        {isOpen && (
          <div className="absolute inset-0 bg-black/50 z-40 pointer-events-none"></div>
        )}

        <main className="relative z-0 pb-40 overflow-x-hidden">
          {children}
        </main>

        {/*<Footer />*/}

      </div>

      </body>
    </html>
  );
}
