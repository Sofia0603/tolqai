import Image from "next/image";


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

          <div className="flex flex-col relative rounded-2xl bg-color-gray pt-6 pl-6 pr-6 overflow-hidden max-h-[426px] md:max-h-[503px]  xl:max-h-[737px]">
            <h4 className="font-onest text-xl text-color-primary mb-2 xl:text-[32px]">Capture Everywhere</h4>
            <p className="font-onest text-xs text-color-second  xl:max-w-[340px] xl:text-xl">Via TolqAI Microphone or uploaded audio (MP3, CRM recordings, call center logs). Works offline and online with automatic sync.</p>
            <Image
            src="/images/how/card-1.svg"
            alt=""
            width={400}
            height={381}
            className="w-full h-auto max-w-[456px] self-center xl:mt-auto"
            layout="responsive"
          />
          </div>

          <div className="flex flex-col relative rounded-2xl bg-color-gray pt-6 pl-6 pr-6 overflow-hidden max-h-[431px] md:max-h-[503px]  xl:max-h-[737px]">
            <h4 className="font-onest text-xl text-color-primary mb-2 md:mb-3 xl:text-[32px]">Analyze with AI</h4>
            <p className="font-onest text-xs text-color-second max-w-120 xl:text-xl xl:max-w-[340px]">Automatic transcription, language detection, sentiment analysis, intent recognition,  and service stage classification powered by AI.</p>
            <Image
              src="/images/how/card-2.svg"
              alt=""
              width={200}
              height={400}
              className="w-full h-auto mt-5 max-w-[271px] md:max-w-[415px] md:mt-17 self-center xl:max-w-[348px]"
              layout="responsive"
            />
          </div>

          <div className="flex flex-col relative rounded-2xl bg-color-gray pt-6 pl-6 pr-6 overflow-hidden max-h-[426px] md:max-h-[503px] xl:max-h-[737px]">
            <h4 className="font-onest text-xl text-color-primary mb-2 xl:text-[32px] ">Visualize & Act</h4>
            <p className="font-onest text-xs text-color-second max-w-120 xl:text-xl xl:max-w-[340px]">Dashboard aggregates metrics by employee, branch, or time period. Real-time alerts  and actionable insights.</p>
            <Image
              src="/images/how/card-3.svg"
              alt=""
              width={200}
              height={381}
              className="w-full h-auto mt-5 max-w-[274px] md:max-w-[418px] md:mt-18 self-center xl:max-w-[397px] "
              layout="responsive"
            />
          </div>

        </div>
      </div>
    </section>
  )
}