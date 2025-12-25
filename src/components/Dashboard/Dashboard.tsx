"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import SliderButtons from "@/components/Common/SliderButtons";
import Card from "@/components/Dashboard/Card";
import type { Swiper as SwiperType } from "swiper";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), { ssr: false });


export default function Dashboard() {

    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

  return (
    <section id="dashboard" className="bg-color-black border-none shadow-lg md:shadow-none">
      <div className="bg-[#f4f4f4] py-10  rounded-t-4xl md:py-20">

        <div className="container mx-auto flex flex-col items-center px-3 xl:px-0">
          <h2 className=" text-color-dop text-xl text-center mt-2 md:text-2xl md:mb-3 xl:text-[32px]" data-aos="fade-up">Dashboard</h2>
          <h3 className=" text-[32px] text-center text-color-primary leading-10 mb-4 md:text-[40px] md:leading-12 md:mb-5 xl:text-[70px] xl:leading-20" data-aos="fade-up">Your AI-Powered Service<br/>Intelligence Platform</h3>
          <p className="text-[15px] text-color-second text-center md:text-xl max-w-170 xl:text-2xl" data-aos="fade-up">Web and mobile SaaS dashboard that transforms every conversation into actionable intelligence and performance metrics</p>
        </div>

        <div className="mt-8 md:mt-15 xl:mt-25">

              <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={20}
                loop={true}
                speed={800}
                pagination={{
                  clickable: true,
                }}
                modules={[]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={() => {
                    if (!swiperRef.current) return;
                    setIsBeginning(swiperRef.current.isBeginning);
                    setIsEnd(swiperRef.current.isEnd);
                }}
                className="pb-10 flex items-start justify-center h-[420px] md:h-[620px] xl:h-[1030px]"
              >


              <SwiperSlide className="!w-auto h-full flex self-center">
                <Card
                  title="Analytics"
                  text="This page highlights total dialogs, recorded minutes, and the share of irrelevant conversations, along with sales results, missed sales, conversion rate, and total score. You can track performance across key behavioral blocks, view dashboards for main sales mistakes and main contributors to lost sales, and filter all analytics by store or date range."
                  img="/images/dashboard/card-1.png"
                  dataAos="fade-up"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-auto h-full flex self-center">
                <Card
                  title="AI Transcripts"
                  text="This section displays all transcripts generated across your stores. You can open any transcript to view completed and missing blocks, track performance, and analyze a heatmap of activity across all locations with date-based breakdowns."
                  img="/images/dashboard/card-1.png"
                  dataAos="fade-up"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-auto h-full flex self-center">
                <Card
                  title="Scoring"
                  text="This module lets you create custom scoring blocks and add questions such as “Attract the customer” or “Understand customer needs.” You can assign individual weights to each block and question so that the total equals 100%. The system supports adaptive scenarios: for example, if an employee asks about the customer’s online experience, a “yes” or “no” response triggers different follow-up paths based on your internal scripts."
                  img="/images/dashboard/card-1.png"
                  dataAos="fade-up"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-auto h-full flex self-center">
                <Card
                  title="Organizational Structure"
                  text="This section shows all stores along with their active and inactive devices, as well as employees who currently have no device attached. You can track disconnected devices (inactive for more than three days) and assign available devices to any employee directly from this page."
                  img="/images/dashboard/card-1.png"
                  dataAos="fade-up"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-auto h-full flex self-center">
                <Card
                  title="Stores"
                  text="This section displays all offline locations with their names, region filters, and store IDs. You can see how many employees are assigned to each store, search through locations, add new stores, or deactivate existing ones when needed."
                  img="/images/dashboard/card-1.png"
                  dataAos="fade-up"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-auto h-full flex self-center">
                <Card
                  title="Employees"
                  text="This section lets you filter staff by their assigned store or offline position and open any employee’s profile. Inside the profile, you can see their current and past devices, all active transcripts, and deactivate the employee if needed. Deactivated employees are not removed from the system."
                  img="/images/dashboard/card-1.png"
                  dataAos="fade-up"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-auto h-full flex self-center">
                <Card
                  title="Devices"
                  text="This section shows all devices in the system, including their assigned employee, store location, total collected dialogs and minutes, and current status (connected, disconnected, or unassigned). By opening a device, you can view its full history, Wi-Fi details, reassign it to another employee, or deactivate it when needed.."
                  img="/images/dashboard/card-1.png"
                  dataAos="fade-up"
                />
              </SwiperSlide>
            </Swiper>

          <SliderButtons
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />


        </div>


        </div>
    </section>
  )
}