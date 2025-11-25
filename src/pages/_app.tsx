import type { AppProps } from "next/app";
import "@/globals.css";
import { Onest } from "next/font/google";
import HeaderWrapper from "@/components/Layout/Header/HeaderWrapper";

const onest = Onest({
    variable: "--font-onest",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${onest.variable} font-onest flex flex-col min-h-screen`}>
            <HeaderWrapper />
            <main className="relative z-0 pb-40 overflow-x-hidden">
                <Component {...pageProps} />
            </main>
        </div>
    );
}
