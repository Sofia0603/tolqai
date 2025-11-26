import Hero from "@/components/Home/Hero/Hero";
import How from "@/components/Home/How/How";
import Use from "@/components/Home/Use/Use";
import Dashboard from "@/components/Home/Dashboard/Dashboard";
import Microphone from "@/components/Home/Microphone/Microphone";
import useCasesData from "@/data/useCasesData";
// import { howData } from "@/data/howData";
import type { GetServerSideProps } from "next";


interface IUseCase {
    icon: string;
    title: string;
    description: string;
}

interface PageProps {
    useCasesData: IUseCase[];
}

export default function Page({ useCasesData }: PageProps) {

    return (
        <>
            <Hero />
            <How />
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
            // howData
        },
    };
};