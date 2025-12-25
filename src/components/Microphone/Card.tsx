import Image from "next/image";
import {useState} from "react";

interface ICardProps{
    icon: string;
    title: string;
    description: string;
    img: string;
    classNameImg: string;
    dataAos: string;
}

export default function Card({icon, title, description, img, classNameImg,dataAos} : ICardProps) {
    const [imgSrc, setImgSrc] = useState(img);
    const [iconSrc, setIconSrc] = useState(icon);
    const [errored, setErrored] = useState(false);




    return (
    <div className="flex flex-col relative rounded-2xl bg-color-gray pt-6 pl-6 pr-6 overflow-hidden h-[368px] md:h-[632px] md:p-10 xl:h-[786px] " data-aos={dataAos}>
      <div className=" relative flex flex-row items-center gap-2 mb-2 xl:gap-4">
            <Image
              src={iconSrc}
              alt={title}
              width={18}
              height={18}
              className=" h-auto self-center xl:w-[24px] xl:h-[21px]"
              onError={(e) => {
                  if(!errored) {
                      setIconSrc('/images/no-icon.svg')
                      setErrored(true);
                  }
              }}

            />
        <h4 className="font-onest text-xl text-color-primary md:text-[32px]">{title}</h4>
      </div>
      <p className="font-onest text-xs text-color-second md:text-lg md:text-color-dop xl:max-w-[650px] xl:text-xl">{description}</p>
          <Image
            src={imgSrc}
            alt={title}
            fill
            className={classNameImg}
            onError={(e) => {
               if(!errored) {
                   setImgSrc('/images/no-image.png')
                   setErrored(true);
               }
            }}
          />
    </div>
  )
}