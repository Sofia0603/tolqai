"use client"
import { useState } from "react";
import { metadata } from "./metadata";
import Header from "@/src/app/components/Layout/Header/Header"
import Footer from "@/src/app/components/Layout/Footer/Footer"
import "./globals.css"



export default function RootLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="ru">
    <body className={ `flex flex-col min-h-screen ${isOpen ? "overflow-hidden" : ""}`}>

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={ `${!isOpen ? "bg-white" : "bg-black/30"} h-dvh z-20` }>

        <main className="flex-grow">
          {children}
        </main>

        {/*<Footer />*/}
      </div>

    </body>
    </html>
  )
}
