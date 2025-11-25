import type { ReactNode } from "react";
import "./globals.css";
import { Onest } from "next/font/google";
import HeaderWrapper from "@/app/components/Layout/Header/HeaderWrapper";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const metadata = {
  title: "Название",
  description: "Описание",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
    <body className={`${onest.variable} flex flex-col font-onest min-h-screen`}>

    <HeaderWrapper />

    <main className="relative z-0 pb-40 overflow-x-hidden">
      {children}
    </main>

    </body>
    </html>
  );
}
