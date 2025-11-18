import {Play} from "lucide-react";

export default function HeroContent(){
  return (
    <div className="xl:flex flex-row xl:w-full xl:justify-between">
      <div className="xl:w-4xl">
        <h2 className="font-onest text-2xl text-color-primary tracking-wide	text-left mb-1 md:text-white md:text-[32px] md:mb-0 xl:text-[50px]">End-to-End Conversation Intelligence</h2>
        <div className="font-onest text-xl text-left tracking-wide mb-3 md:text-white md:text-2xl xl:text-[32px]">for <span className="text-color-second md:text-[#d9d9d9]">Service Quality Monitoring</span></div>
        <p className="font-onest text-xs text-color-primary opacity-70 text-left md:text-white md:text-sm xl:text-lg">
          From offline stores to call centers — capture, analyze, and optimize your team's communication with AI. Complete service quality monitoring across all customer touchpoints.
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-5 md:flex-row-reverse md:gap-3.5 md:justify-end xl:flex-col-reverse xl:items-end xl:mt-0 ">
        <button className="text-onest text-sm border bg-white rounded-full inline-flex justify-center items-center gap-3 w-full p-3 md:bg-transparent md:border-white md:w-55.5 md:text-white xl:p-5 xl:w-max xl:text-lg">
          <Play className="w-4 h-4 text-color-primary md:text-white" />
          See dashboard in action
        </button>
        <button className="text-onest text-sm bg-gradient-to-r from-[#cbc3fc] to-[#887bdc] text-white rounded-full inline-flex justify-center items-center gap-3 w-full p-3 md:w-36 xl:p-5 xl:w-46 xl:text-lg">Request a Demo</button>

      </div>
    </div>
  )
}