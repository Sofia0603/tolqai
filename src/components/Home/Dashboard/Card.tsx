import Image from "next/image";

interface ICardProps {
    title: string;
    text: string;
    img: string;
}

export default function Card({ title, text, img }:ICardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl p-3 h-full max-w-[336px] md:p-5 md:max-w-[666px]  xl:max-w-[1224px] ">
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
            src={img}
            alt={title}
            width={400}
            height={381}
            className="w-full h-auto"

          />
      </div>
    </div>
  );
}
// xl:h-[977px]
// h-[386px] md:h-[596px]