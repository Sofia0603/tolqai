import Hero from "@/components/Home/Hero/Hero";
import How from "@/components/Home/How/How";
import Use from "@/components/Home/Use/Use";
import Dashboard from "@/components/Home/Dashboard/Dashboard";
import Microphone from "@/components/Home/Microphone/Microphone";
import Features from "@/components/Home/Features/Features";

import useCasesData from "@/data/useCasesData";
import nowData from "@/data/nowData";
import type { GetServerSideProps } from "next";
import GetStarted from "@/components/Home/GetStarted/GetStarted";

type TUseCase =  {
    icon: string;
    title: string;
    description: string;
}
type THow = {
    title: string;
    description: string;
    className:string
    img:string;
    widthImg:number
    heightImg:number
}
type TPageProps = {
    useCasesData: TUseCase[];
    nowData: THow[];
}

export default function Page({ useCasesData, nowData }: TPageProps) {

    return (
        <>
            <Hero />
            <How data={ nowData } />
            <Use data={ useCasesData } />
            <Dashboard />
            <Microphone />
            <Features />
            <GetStarted />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            useCasesData,
            nowData
        },
    };
};