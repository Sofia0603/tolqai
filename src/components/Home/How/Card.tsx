import Image from "next/image";

interface ICardProps {
    title: string;
    description: string;
    className: string;
    img: string;
    widthImg: number;
    heightImg: number;
}

export default function Card({ title, description, className, img, widthImg, heightImg }: ICardProps) {
    return (
        <div className="flex flex-col relative rounded-2xl bg-color-gray pt-6 pl-6 pr-6 overflow-hidden max-h-[426px] md:max-h-[503px] xl:max-h-[737px]">
            <h4 className="font-onest text-xl text-color-primary mb-2 xl:text-[32px]">{title}</h4>
            <p className="font-onest text-xs text-color-second max-w-120 xl:text-xl xl:max-w-[340px]">{description}</p>
            <Image
                src={img}
                alt={title}
                width={widthImg}
                height={heightImg}
                className={className}
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/how/card-1.svg";
                }}
            />
        </div>
    );
}
