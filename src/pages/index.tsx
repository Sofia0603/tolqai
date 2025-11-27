import Hero from "@/components/Home/Hero/Hero";
import How from "@/components/Home/How/How";
import Use from "@/components/Home/Use/Use";
import Dashboard from "@/components/Home/Dashboard/Dashboard";
import Microphone from "@/components/Home/Microphone/Microphone";
import useCasesData from "@/data/useCasesData";
import nowData from "@/data/nowData";
import type { GetServerSideProps } from "next";


interface IUseCase {
    icon: string;
    title: string;
    description: string;
}
interface IHow {
    title: string;
    description: string;
    className:string
    img:string;
    widthImg:number
    heightImg:number
}


interface PageProps {
    useCasesData: IUseCase[];
    nowData: IHow[];
}

export default function Page({ useCasesData, nowData }: PageProps) {

    return (
        <>
            <Hero />
            <How data={ nowData } />
            <Use data={ useCasesData } />
            <Dashboard />
            <Microphone />
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