import Image from "next/image";
import {useState} from "react";

interface ICardProps{
    icon: string;
    title: string;
    description: string;
}

export default function Card({ icon, title, description}: ICardProps){

    const [imgSrc, setImgSrc] = useState(icon);
    const [errored, setErrored] = useState(false);



    return (
        <div className="py-5 pl-5 pr-12 bg-color-gray-dop rounded-4xl md:py-7 md:pl-7 xl:p-9">
            <Image
                src={imgSrc}
                width={32}
                height={32}
                alt="icon"
                className="mb-10 md:mb-12 xl:mb-24"
                onError={(e) => {
                    if(!errored){
                        setImgSrc('./images/no-icon.svg')
                        setErrored(true);
                    }
                }}

            />
            <h4 className="text-xl text-white mb-2 xl:text-2xl">{title}</h4>
            <p className="text-xs text-white opacity-70 leading-4 tracking-wide md:text-sm xl:text-lg xl:leading-6">
                {description}
            </p>
        </div>
    )
}