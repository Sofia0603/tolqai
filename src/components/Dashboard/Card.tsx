import Image from "next/image";
import {useState} from "react";

interface ICardProps {
    title: string;
    text: string;
    img: string;
    dataAos:string;
}

export default function Card({ title, text, img,dataAos }:ICardProps) {

    const [imgSrc, setImgSrc] = useState(img);
    const [errored, setErrored] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-2xl p-3 h-full max-w-[336px] md:p-5 md:max-w-[666px]  xl:max-w-[1224px] " data-aos={dataAos} >
      <h4 className="flex items-center text-[15px] md:text-xl xl:text-2xl xl:mb-3">
        <span
          className="w-[10px] h-[10px] bg-[#8c3cdd] rounded-full mr-4"
          style={{
            boxShadow:
              'inset 0 0 10px 0 rgba(255,255,255,0.25), 0 0 4px 0 rgba(140,60,221,0.5)'
          }}
        ></span>
        {title}
      </h4>

      <p className="text-xs opacity-70 mb-4 md:text-sm md:mb-6 xl:text-lg">
        {text}
      </p>
      <div className="mt-auto">
          <Image
            src={imgSrc}
            alt={title}
            width={1224}
            height={977}
            sizes="(max-width: 768px) 100vw,
                     (max-width: 1280px) 666px,
                     1224px"
            className="w-full h-auto"
            onError={() => {
                if (!errored) {
                    setImgSrc('/images/no-image.png');
                    setErrored(true);
                }
            }}
          />
      </div>
    </div>
  );
}
