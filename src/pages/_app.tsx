import type { AppProps } from "next/app";
import "@/globals.css";
import { Onest } from "next/font/google";
import HeaderWrapper from "@/components/Layout/Header/HeaderWrapper";
import Footer from "@/components/Layout/Footer/Footer";
import Head from "next/head";
import Cookie from "@/components/Cookie/Cookie";
import {useEffect} from "react";
import "aos/dist/aos.css";


const onest = Onest({
    variable: "--font-onest",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        import('aos').then((AOS) => {
            AOS.init({
                duration: 800,
                once: true,
            });
        });
    }, []);

    return (
        <div className={`${onest.variable} font-onest flex flex-col justify-between min-h-screen`}>
            <Head>
                <title>TolqAi</title>
                <meta name="description" content="TolqAi: description" />


                <link rel="icon" href="" />


                <meta property="og:type" content="website" />
                <meta property="og:title" content="TolqAi" />
                <meta property="og:description" content="TolqAi: description" />
                <meta property="og:image" content="/og-image.png" />
            </Head>

            <HeaderWrapper />

            <main className="relative z-0">
                <Component {...pageProps} />
            </main>

            <Footer />

            {/*<Cookie/>*/}
        </div>
    );
}
