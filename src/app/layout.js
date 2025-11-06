"use client"
import { useState } from "react";
import { metadata } from "./metadata";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"



export default function RootLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="ru">
    <body className="flex flex-col min-h-screen">

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={ `${!isOpen ? "bg-white" : "bg-black/30"} h-dvh z-10` }>

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </div>

    </body>
    </html>
  )
}
