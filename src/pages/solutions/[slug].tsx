import ErrorBoundary from "@/components/Utils/ErrorBoundary";
import Hero from "@/components/Hero/Hero";
import React, {useEffect} from "react";
import How from "@/components/How/How";
import Use from "@/components/Use/Use";
import Dashboard from "@/components/Dashboard/Dashboard";
import Microphone from "@/components/Microphone/Microphone";
import Features from "@/components/Features/Features";
import GetStarted from "@/components/GetStarted/GetStarted";

import type { GetServerSideProps } from "next";
import type {GetStaticProps} from "next";
import useCasesData from "@/data/useCasesData";
import nowData from "@/data/nowData";


type TUseCase = {
    icon: string;
    title: string;
    description: string;
};
type THow = {
    title: string;
    description: string;
    className: string;
    img: string;
    widthImg: number;
    heightImg: number;
};
type TPageProps = {
    useCasesData: TUseCase[];
    nowData: THow[];
};



export default function Sample({ useCasesData, nowData }: TPageProps){


    return (
        <>
            <ErrorBoundary fallback={<div>Dashboard failed to load.</div>}>
                <Hero />
            </ErrorBoundary>
            <ErrorBoundary fallback={<div>How section failed to load.</div>}>
                <How data={nowData} />
            </ErrorBoundary>

            <ErrorBoundary fallback={<div>Use section failed to load.</div>}>
                <Use data={useCasesData} />
            </ErrorBoundary>

            <ErrorBoundary fallback={<div>Dashboard failed to load.</div>}>
                <Dashboard />
            </ErrorBoundary>

            <ErrorBoundary fallback={<div>Microphone failed to load.</div>}>
                <Microphone />
            </ErrorBoundary>

            <ErrorBoundary fallback={<div>Features failed to load.</div>}>
                <Features />
            </ErrorBoundary>

            <ErrorBoundary fallback={<div>Get Started failed to load.</div>}>
                <GetStarted />
            </ErrorBoundary>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const slug = params?.slug as string;

    // const res = await fetch(`https://api.example.com/solutions/${slug}`);
    // const data = await res.json();
    //
    // if (!data) {
    //     return {
    //         notFound: true,
    //     };
    // }

    return {
        props: {
            useCasesData: useCasesData,
            nowData: nowData,
        },
    };
};