import {SwiperSlide} from "swiper/swiper-react";
import Card from "@/components/Features/Card";
import SliderButtons from "@/components/Common/SliderButtons";
import Image from "next/image";

export default function Features(){
    return (
         <section id="features" className="bg-[#f4f4f4] text-white border-none shadow-lg md:shadow-none">
        <div className=" bg-color-gray-dop py-10  rounded-t-4xl md:py-20">

            <div className="container mx-auto flex flex-col items-center px-3 ">
                <h2 className="flex text-white text-xl text-center mt-2 mb-3 md:text-2xl md:mb-3 xl:text-[32px] xl:self-start" data-aos="fade-up">Features</h2>
                <div className="flex flex-col xl:flex-row xl:gap-12 xl:justify-between xl:w-full">
                    <h3 className="text-[32px] text-center text-white leading-10 mb-4 md:text-[40px] md:leading-12 md:mb-5 xl:text-[70px] xl:leading-20 xl:text-left xl:max-w-[600px]" data-aos="fade-up">Enterprise-Ready. Scalable. Secure.</h3>
                    <p className="text-[15px] text-white text-center md:text-xl max-w-170 xl:text-2xl xl:text-left xl:mt-4" data-aos="fade-up">Built for organizations that demand reliability, security, and performance at scale</p>
                </div>
            </div>
                <div className="flex flex-col gap-3 mt-8 mx-3 xl:mx-0 xl:max-w-[1440px] xl:mx-auto">

                    <Card
                        title="Real-Time Benchmarking"
                        text="Live benchmarks across teams with performance metrics that update as conversations happen — compare  and improve continuously"
                        video = "/images/features/real1.mp4"
                        reverse={false}
                        dataAos="fade-up"
                    />
                    <Card
                        title="Role-Based Access Control"
                        text="Connect with existing CRM, telephony, and business tools — custom analytics widgets for your specific needs"
                        video = "/images/features/role2.mp4"
                        reverse={true}
                        dataAos="fade-up"
                    />
                    <Card
                        title="API Integrations & Widgets"
                        text="Connect with existing CRM, telephony, and business tools — custom analytics widgets for your specific needs"
                        video = "/images/features/integrations3.mp4"
                        reverse={false}
                        dataAos="fade-up"
                    />
                    <Card
                        title="Offline-First & Secure"
                        text="Field teams work without connectivity — data syncs automatically with enterprise-grade encryption and GDPR compliance"
                        video = "/images/features/offline4.mp4"
                        reverse={true}
                        dataAos="fade-up"
                    />

                </div>


        </div>
    </section>
    )
}