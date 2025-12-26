import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/globals.css";
import { Onest } from "next/font/google";
import HeaderWrapper from "@/components/Layout/Header/HeaderWrapper";
import Footer from "@/components/Layout/Footer/Footer";
import Head from "next/head";
import 'aos/dist/aos.css';
import Cookie from "@/components/Cookie/Cookie";

const onest = Onest({
    variable: "--font-onest",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const hideFooterRoutes = ["/privacy-policy", "/terms-of-service"];
    const shouldHideFooter = hideFooterRoutes.includes(router.pathname);

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

            <HeaderWrapper isSimple={shouldHideFooter} />

            <main className="relative z-0">
                <Component {...pageProps} />
            </main>

            {!shouldHideFooter && <Footer />}

            {/*<Cookie/>*/}
        </div>
    );
}