import {SwiperSlide} from "swiper/swiper-react";
import Card from "@/components/Home/Dashboard/Card";
import SliderButtons from "@/components/Common/SliderButtons";
import Image from "next/image";

export default function Features(){
    return (
    <section id="features" className="bg-[#f4f4f4] text-white border-none shadow-lg md:shadow-none">
        <div className=" bg-color-gray-dop py-10  rounded-t-4xl md:py-20">

            <div className="container mx-auto flex flex-col items-center px-3 ">
                <h2 className="flex text-white text-xl text-center mt-2 mb-3 md:text-2xl md:mb-3 xl:text-[32px] xl:self-start">Features</h2>
                <div className="flex flex-col xl:flex-row xl:gap-12 xl:justify-between xl:w-full">
                    <h3 className="text-[32px] text-center text-white leading-10 mb-4 md:text-[40px] md:leading-12 md:mb-5 xl:text-[70px] xl:leading-20 xl:text-left xl:max-w-[600px]">Enterprise-Ready. Scalable. Secure.</h3>
                    <p className="text-[15px] text-white text-center md:text-xl max-w-170 xl:text-2xl xl:text-left xl:mt-4">Built for organizations that demand reliability, security, and performance at scale</p>
                </div>
            </div>
                <div className="flex flex-col gap-3 mt-8 mx-3 xl:mx-0 xl:max-w-[1440px] xl:mx-auto">

                    <div className="flex flex-col justify-between bg-[#0D0D0D] rounded-3xl overflow-hidden pt-5 px-7 h-[336px] md:px-5 md:flex-row md:gap-5 md:h-[236px] xl:px-7 xl:h-[413px] xl:pt-10 xl:gap-7">
                        <div className=" md:self-end md:pb-6 xl:max-w-[623px]">
                            <h4 className="mb-2 text-xl xl:text-2xl">Real-Time Benchmarking</h4>
                            <p className="opacity-70 text-sm xl:text-lg">Live benchmarks across teams with performance metrics that update as conversations happen — compare  and improve continuously</p>
                        </div>
                            <Image
                                src="/images/features/card-1.svg"
                                alt=""
                                width={305}
                                height={189}
                                sizes="(max-width: 768px) 100vw,
                                 (max-width: 1280px) 666px,
                                 1224px"
                                className="w-full h-auto max-h-[189px] md:max-h-none xl:max-w-[678px]"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = "/images/features/card-1.png";
                                }}
                                priority
                            />
                    </div>
                    <div className="flex flex-col justify-between bg-[#0D0D0D] rounded-3xl overflow-hidden pt-5 px-7 h-[336px] md:px-5 md:flex-row-reverse md:gap-5 md:h-[236px] xl:px-7 xl:h-[413px] xl:pt-10 xl:gap-7">
                        <div className=" md:self-end md:pb-6 xl:max-w-[623px]">
                            <h4 className="mb-2 text-xl xl:text-2xl">Role-Based Access Control</h4>
                            <p className="opacity-70 text-sm xl:text-lg">Connect with existing CRM, telephony, and business tools — custom analytics widgets for your specific needs</p>
                        </div>
                            <Image
                                src="/images/features/card-2.svg"
                                alt=""
                                width={305}
                                height={189}
                                sizes="(max-width: 768px) 100vw,
                                 (max-width: 1280px) 666px,
                                 1224px"
                                className="w-full h-auto max-h-[189px] md:max-h-none xl:max-w-[678px]"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = "/images/features/card-1.png";
                                }}
                                priority
                            />
                    </div>
                    <div className="flex flex-col justify-between bg-[#0D0D0D] rounded-3xl overflow-hidden pt-5 px-7 h-[336px] md:px-5 md:flex-row md:gap-5 md:h-[236px] xl:h-[413px] xl:px-7 xl:pt-10 xl:gap-7">
                        <div className=" md:self-end md:pb-6 xl:max-w-[623px]">
                            <h4 className="mb-2 text-xl xl:text-2xl">API Integrations & Widgets</h4>
                            <p className="opacity-70 text-sm xl:text-lg">Connect with existing CRM, telephony,
                                and business tools — custom analytics widgets for your specific needs</p>
                        </div>
                            <Image
                                src="/images/features/card-3.svg"
                                alt=""
                                width={305}
                                height={189}
                                sizes="(max-width: 768px) 100vw,
                                 (max-width: 1280px) 666px,
                                 1224px"
                                className="w-full h-auto max-h-[189px] md:max-h-none xl:max-w-[678px]"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = "/images/features/card-1.png";
                                }}
                                priority
                            />
                    </div>
                    <div className="flex flex-col justify-between bg-[#0D0D0D] rounded-3xl overflow-hidden pt-5 px-7 h-[336px] md:px-5 md:flex-row-reverse md:gap-5 md:h-[236px] xl:px-7 xl:h-[413px] xl:pt-10 xl:gap-7">
                        <div className=" md:self-end md:pb-6 xl:max-w-[623px]">
                            <h4 className="mb-2 text-xl xl:text-2xl">Offline-First & Secure</h4>
                            <p className="opacity-70 text-sm xl:text-lg">Field teams work without connectivity
                                — data syncs automatically with enterprise-grade encryption and GDPR compliance</p>
                        </div>
                            <Image
                                src="/images/features/card-4.svg"
                                alt=""
                                width={305}
                                height={189}
                                sizes="(max-width: 768px) 100vw,
                                 (max-width: 1280px) 666px,
                                 1224px"
                                className="w-full h-auto max-h-[189px] md:max-h-none xl:max-w-[678px]"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = "/images/features/card-1.png";
                                }}
                                priority
                            />
                    </div>


                </div>


        </div>
    </section>
    )
}