import Image from "next/image";
import Card from "@/components/How/Card";

interface IHow {
  title: string;
  description: string;
  className:string
  img:string;
  widthImg:number
  heightImg:number
}

interface nowProps {
  data: IHow[];
}

export default function How({ data }: nowProps) {
  return (
    <section id="how" className="py-12 md:py-20 xl:py-30">
      <div className="container mx-auto px-3 xl:px-0">
        <h2 className="font-onest text-xl text-color-dop mb-2 md:text-2xl xl:text-[32px]">How it works</h2>
        <h3 className="font-onest text-[32px] leading-[1.2] tracking-wider text-color-primary font-base mb-4 md:text-[40px] md:max-w-110 xl:text-[70px] xl:max-w-200">From Conversations  to Insights</h3>
        <p className="font-onest text-[15px] text-color-primary md:max-w-150 md:text-xl xl:max-w-200">
          Dynamic flow from sound capture to text analysis to dashboard visualization — complete intelligence in three steps
        </p>

        <div className="flex flex-col gap-4 mt-6 xl:flex-row xl:grid grid-cols-3">

          {data.map((item, index) => (
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