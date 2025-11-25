import type { Metadata } from "next";
import HeaderWrapper from "@/app/components/Layout/Header/HeaderWrapper";
import "@/app/globals.css";
import { Onest } from "next/font/google";

const onest = Onest({
    variable: "--font-onest",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "TolqAi",
    description: "The official Next.js Course Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${onest.variable} font-onest flex flex-col min-h-screen`}>
                 <HeaderWrapper />
                <main className="relative z-0 pb-40 overflow-x-hidden">
                    {children}
                </main>

            </body>
        </html>
    );
}
