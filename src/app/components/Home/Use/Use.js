import Image from "next/image";

export default function Use(){
  return (
    <section className="bg-color-black pt-10 pb-12 md:pt-20 md:pb-21">
      <div className="flex flex-col items-center container mx-auto px-3 xl:px-0">
        <h2 className=" text-xl py-2 px-6 rounded-full w-max bg-white text-color-primary mb-4  md:text-2xl md:mb-5">Use Cases</h2>
        <h3 className=" text-white text-[32px] leading-9 text-center mb-3 md:text-[40px]">Built for Every Business Function</h3>
        <p className=" text-[15px] text-color-dop text-center mb-8 md:text-xl">From sales and HR to customer support and training, tolqAI delivers conversation intelligence across your entire organization</p>

        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-5">

          <div className="py-5 pl-5 pr-12 bg-color-gray-dop rounded-4xl md:py-7 md:pl-7 xl:p-9">
            <Image
              src="/images/icons/icon-sale.svg"
              width={32}
              height={32}
              alt=""
              className="mb-10 md:mb-12 xl:mb-30"
              />
            <h4 className=" text-xl text-white mb-2 xl:text-2xl">Retail & Automotive Sales</h4>
            <p className="text-xs text-white opacity-70 leading-4 tracking-wide md:text-sm xl:text-lg xl:leading-6" >From sales and HR to customer support
              and training, tolqAI delivers conversation intelligence across your entire organization</p>
          </div>

          <div className="py-5 pl-5 pr-12 bg-color-gray-dop rounded-4xl md:py-7 md:pl-7 xl:p-9">
            <Image
              src="/images/icons/icon-support.svg"
              width={32}
              height={32}
              alt=""
              className="mb-10 md:mb-12 xl:mb-30"
              />
            <h4 className=" text-xl text-white mb-2 xl:text-2xl">Customer Support Centers</h4>
            <p className="text-xs text-white opacity-70 leading-4 tracking-wide md:text-sm xl:text-lg xl:leading-6">Monitor online call quality across all channels, identify training needs, and ensure compliance with service standards</p>
          </div>

          <div className="py-5 pl-5 pr-12 bg-color-gray-dop rounded-4xl md:py-7 md:pl-7 xl:p-9">
            <Image
              src="/images/icons/icon-add-human.svg"
              width={32}
              height={32}
              alt=""
              className="mb-10 md:mb-12 xl:mb-30"
              />
            <h4 className=" text-xl text-white mb-2 xl:text-2xl">HR & Recruitment Teams</h4>
            <p className="text-xs text-white opacity-70 leading-4 tracking-wide md:text-sm xl:text-lg xl:leading-6">Record and analyze interviews for objective assessment, standardized evaluation,  and data-driven hiring decisions</p>
          </div>

          <div className="py-5 pl-5 pr-12 bg-color-gray-dop rounded-4xl md:py-7 md:pl-7 xl:p-9">
            <Image
              src="/images/icons/icon-idea.svg"
              width={32}
              height={32}
              alt=""
              className="mb-10 md:mb-12 xl:mb-30"
              />
            <h4 className=" text-xl text-white mb-2 xl:text-2xl">Training & QA Teams</h4>
            <p className="text-xs text-white opacity-70 leading-4 tracking-wide md:text-sm xl:text-lg xl:leading-6">Analyze real conversations to identify best practices, coaching opportunities,  and standardize training programs</p>
          </div>

          <div className="py-5 pl-5 pr-12 bg-color-gray-dop rounded-4xl md:py-7 md:pl-7 xl:p-9">
            <Image
              src="/images/icons/icon-star.svg"
              width={32}
              height={32}
              alt=""
              className="mb-10 md:mb-12 xl:mb-30"
              />
            <h4 className=" text-xl text-white mb-2 xl:text-2xl">Hospitality & Service</h4>
            <p className="text-xs text-white opacity-70 leading-4 tracking-wide md:text-sm xl:text-lg xl:leading-6">Enhance guest interactions across touchpoints, standardize service quality, and gather actionable feedback insights</p>
          </div>


          <div className="py-5 pl-5 pr-12 bg-color-gray-dop rounded-4xl md:py-7 md:pl-7 xl:p-9">
            <Image
              src="/images/icons/icon-location.svg"
              width={32}
              height={32}
              alt=""
              className="mb-10 md:mb-12 xl:mb-30"
              />
            <h4 className=" text-xl text-white mb-2 xl:text-2xl">Multi-Location Teams</h4>
            <p className="text-xs text-white opacity-70 leading-4 tracking-wide md:text-sm xl:text-lg xl:leading-6">Unified analytics across all locations  and channels to compare performance, share insights, and scale best practices</p>
          </div>

        </div>

      </div>
    </section>
  )
}