import Image from "next/image";
import { useState } from "react";

export interface Solution {
    title: string;
    description: string;
    detailLink: string;
    imageSrc: string;
}

export const solutions: Solution[] = [
    {
        title: "Retail & Automotive",
        description:
            "From offline stores to call centers — capture, analyze, and optimize your team's communication with AI. Complete service quality monitoring across all customer touchpoints.",
        detailLink: "/solutions/retail-automotive",
        imageSrc: "/images/hero/main-banner.png",
    },
    {
        title: "End-to-End Conversation Intelligence",
        description:
            "From offline stores to call centers — capture, analyze, and optimize your team's communication with AI. Complete service quality monitoring across all customer touchpoints.",
        detailLink: "/solutions/conversation-intelligence",
        imageSrc: "/images/hero/main-banner.png",
    },
    {
        title: "End-to-End Conversation Intelligence",
        description:
            "From offline stores to call centers — capture, analyze, and optimize your team's communication with AI. Complete service quality monitoring across all customer touchpoints.",
        detailLink: "/solutions/conversation-intelligence",
        imageSrc: "/images/hero/main-banner.png",
    },
];

export default function Solutions() {
    const [erroredImages, setErroredImages] = useState<boolean[]>(
        solutions.map(() => false)
    );

    const handleImageError = (index: number) => {
        const newErrored = [...erroredImages];
        newErrored[index] = true;
        setErroredImages(newErrored);
    };

    return (
        <section id="solutions">
            <div className="container mx-auto px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mb-5 text-center z-10">


            {solutions.map((sol, idx) => (
                <a href={sol.detailLink} key={idx} className="relative w-full  bg-gray-100 rounded-3xl overflow-hidden">
                    <div className="relative h-[60vh]">
                        <Image
                            src={erroredImages[idx] ? "/images/no-image.png" : sol.imageSrc}
                            alt={sol.title}
                            fill
                            className="object-cover rounded-2xl"
                            onError={() => handleImageError(idx)}
                            loading="eager"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl pointer-events-none"></div>


                        <div className="absolute left-3 bottom-[20px]  md:left-[20px] flex items-end p-4 ">
                            <div className="text-left max-w-full md:max-w-[90%] ">
                                <h2 className="font-onest text-2xl md:text-3xl lg:text-[38] text-white mb-2">
                                    {sol.title}
                                </h2>
                                <p className="font-onest text-xs md:text-sm lg:text-base text-white/70 mb-2">
                                    {sol.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            ))}

            </div>
        </section>
    );
}
