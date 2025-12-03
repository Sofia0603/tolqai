import Image from "next/image";
import Card from "@/components/Home/Use/Card";

interface IUseCase {
  icon: string;
  title: string;
  description: string;
}


interface UseProps {
  data: IUseCase[];
}

export default function Use({ data }: UseProps) {

  return (
    <section id="use" className="bg-color-black pt-10 pb-12 md:pt-20 md:pb-21">
      <div className="flex flex-col items-center container mx-auto px-3 xl:px-0">
        <h2 className=" text-xl py-2 px-6 rounded-full w-max bg-white text-color-primary mb-4  md:text-2xl md:mb-5 xl:text-[32px] xl:mb-5">Use Cases</h2>
        <h3 className=" text-white text-[32px] text-center mb-3 md:text-[40px] xl:text-[70px]">Built for Every Business Function</h3>
        <p className=" text-[15px] text-color-dop text-center mb-8 md:text-xl xl:text-2xl xl:max-w-240">From sales and HR to customer support and training, tolqAI delivers conversation intelligence across your entire organization</p>

        <div className="flex flex-col gap-3 mb-20 md:grid md:grid-cols-2 md:mb-24 xl:grid-cols-3 xl:gap-5 xl:mb-35">

          {data.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}

              />
          ))}

        </div>

        <div className="flex flex-col gap-10 mx-[18px] md:flex-row md:gap-5 md:max-w-[1154px] xl:gap-20">
          <div className="flex flex-col items-center text-center">
            <div className="font-onest text-xl mb-3 text-white xl:text-2xl">Offline Retail Solution</div>
            <div className="font-onest font-normal text-sm opacity-50 text-white mb-[10px] xl:text-lg xl:max-w-100">Capture in-store conversations with wearable microphones and get real-time analytics</div>
            <a href="#" className="flex flex-row gap-3 justify-center items-center button-gradient font-onest text-sm xl:text-lg">
              <span>Learn more</span>
              <Image
                src="/images/icons/icon-arrow-right.svg"
                alt="Offline Retail Solution"
                width={13}
                height={8}
                className="w-[13px] h-[8px]"
              />
            </a>
          </div>
          <div className="h-[1px] w-full bg-[#d9d9d9] md:h-[106px] md:w-[1px] md:mx-auto"></div>
          <div className="flex flex-col items-center text-center">
            <div className="font-onest text-xl mb-3 text-white xl:text-2xl">Omni-Retail Solution</div>
            <div className="font-onest font-normal text-sm opacity-50 text-white mb-[10px] xl:text-lg xl:max-w-100">Unified analytics for online and offline conversations across all channels</div>
            <a href="#" className="flex flex-row gap-3 justify-center items-center button-gradient font-onest text-sm xl:text-lg">
              <span>Learn more</span>
              <Image
                src="/images/icons/icon-arrow-right.svg"
                alt="Omni-Retail Solution"
                width={13}
                height={8}
                className="w-[13px] h-[8px]"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
