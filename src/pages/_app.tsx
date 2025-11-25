import type { AppProps } from "next/app";
import HeaderWrapper from "@/app/components/Layout/Header/HeaderWrapper";
import "@/app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeaderWrapper />
            <Component {...pageProps} />
        </>
    );
}
