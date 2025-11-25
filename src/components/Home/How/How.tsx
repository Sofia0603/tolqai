import Image from "next/image";
import Card from "@/components/Home/How/Card";

interface IHow {
  title: string;
  description: string;
  className:string
  img:string;
  widthImg:number
  heightImg:number
}

const howData: IHow[] = [
  {
    title: "Capture Everywhere",
    description: "Via TolqAI Microphone or uploaded audio (MP3, CRM recordings, call center logs). Works offline and online with automatic sync.",
    className: "w-full h-auto max-w-[456px] self-center xl:mt-auto",
    img: "/images/how/card-1.svg",
    widthImg: 400,
    heightImg: 381
  },
  {
    title: "Analyze with AI",
    description: "Automatic transcription, language detection, sentiment analysis, intent recognition,  and service stage classification powered by AI.",
    className: "w-full h-auto mt-5 max-w-[271px] md:max-w-[415px] md:mt-17 self-center xl:max-w-[348px]",
    img: "/images/how/card-2.svg",
    widthImg: 200,
    heightImg: 400
  },
  {
    title: "Visualize & Act",
    description: "Dashboard aggregates metrics by employee, branch, or time period. Real-time alerts  and actionable insights",
    className: "w-full h-auto mt-5 max-w-[274px] md:max-w-[418px] md:mt-18 self-center xl:max-w-[397px]",
    img: "/images/how/card-3.svg",
    widthImg: 200,
    heightImg: 381
  }
]

export default function How(){
  return (
    <section id="how" className="py-12 md:py-20 xl:py-30">
      <div className="container mx-auto px-3 xl:px-0">
        <h2 className="font-onest text-xl text-color-dop mb-2 md:text-2xl xl:text-[32px]">How it works</h2>
        <h3 className="font-onest text-[32px] leading-[1.2] tracking-wider text-color-primary font-base mb-4 md:text-[40px] md:max-w-110 xl:text-[70px] xl:max-w-200">From Conversations  to Insights</h3>
        <p className="font-onest text-[15px] text-color-primary md:max-w-150 md:text-xl xl:max-w-200">
          Dynamic flow from sound capture to text analysis to dashboard visualization — complete intelligence in three steps
        </p>

        <div className="flex flex-col gap-4 mt-6 xl:flex-row xl:grid grid-cols-3">

          {howData.map((item, index) => (
              <Card
                  title={item.title}
                  description={item.description}
                  className={item.className}
                  img={item.img}
                  widthImg={item.widthImg}
                  heightImg={item.heightImg}
                  key={index}
              />
          ))}


        </div>
      </div>
    </section>
  )
}