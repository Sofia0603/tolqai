import Image from "next/image";
import {useState} from "react";

interface ICardProps {
    title: string;
    text: string;
    img: string;
    reverse: boolean;
    dataAos?: string;
}

export default function Card({ title, text, img, reverse,dataAos }:ICardProps) {

    const [imgSrc, setImgSrc] = useState(img);
    const [errored, setErrored] = useState(false);

    return (
        <div className={`flex flex-col justify-between bg-[#0D0D0D] rounded-3xl overflow-hidden pt-5 px-7 h-[336px] md:px-5 ${ reverse ? `md:flex-row-reverse` : `md:flex-row`} md:gap-5 md:h-[236px] xl:px-7 xl:h-[413px] xl:pt-10 xl:gap-7`}
             data-aos={dataAos}
        >
            <div className=" md:self-end md:pb-6 xl:max-w-[623px]">
                <h4 className="mb-2 text-xl xl:text-2xl">{title}</h4>
                <p className="opacity-70 text-sm xl:text-lg">{text}</p>
            </div>
            <Image
                src={imgSrc}
                alt={title}
                width={305}
                height={189}
                sizes="(max-width: 768px) 100vw,
                                 (max-width: 1280px) 666px,
                                 1224px"
                className="w-full h-auto max-h-[189px] md:max-h-none xl:max-w-[678px]"
                onError={(e) => {
                    if (!errored) {
                        setImgSrc('/images/no-image.png');
                        setErrored(true);
                    }
                }}
            />
        </div>
    );
}
