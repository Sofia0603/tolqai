import Image from "next/image";
import { Play } from "lucide-react";


export default function Banner() {
  return (
    <section id="banner" className="px-3 flex mb-3 text-center min-h-[80vh]">
      <div className="container mx-auto bg-gray-100 rounded-3xl p-3">
        <div className="bg-white rounded-xl flex justify-end mb-6">
          <Image
            src="/images/banner-mobile.png"
            alt=""
            width={307}
            height={378}
            className=""
          />        </div>
        <h2 className="font-onest text-2xl text-color-primary tracking-wide	text-left  mb-1">End-to-End Conversation Intelligence </h2>
        <div className="font-onest text-xl text-left tracking-wide mb-3">for <span className="text-color-second">Service Quality Monitoring</span></div>
        <p className="font-onest text-xs text-color-primary opacity-70 text-left">
          From offline stores to call centers — capture, analyze, and optimize your team's communication with AI. Complete service quality monitoring across all customer touchpoints.
        </p>

        <div className="flex flex-col gap-2 mt-5 ">
          <button className="text-onest text-sm  bg-white rounded-full flex justify-center items-center gap-3 w-full p-3.5">
            <Play className="w-4 h-4 text-color-primary" />
            See dashboard in action
          </button>
          <button className="text-onest text-sm bg-color-black text-white rounded-full flex justify-center items-center gap-3 w-full p-3.5">Request a Demo</button>

        </div>
      </div>
    </section>
  )
}
