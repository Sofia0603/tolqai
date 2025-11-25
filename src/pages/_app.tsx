
import type { AppProps } from "next/app";
import HeaderWrapper from "@/app/components/Layout/Header/HeaderWrapper";
import "@/app/globals.css";
import { Onest } from "next/font/google";
import Head from "next/head";

const onest = Onest({
    variable: "--font-onest",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${onest.variable} font-onest flex flex-col min-h-screen`}>
            <Head>
                <title>TolqAi</title>
                <meta name="description" content="The official Next.js Course Dashboard" />
            </Head>

            <HeaderWrapper />
            <main className="relative z-0 pb-40 overflow-x-hidden">
                <Component {...pageProps} />
            </main>


        </div>
    );
}
