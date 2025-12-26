import {Play} from "lucide-react";

export default function HeroContent(){
  return (
    <div className="xl:flex flex-row xl:w-full xl:justify-between">
      <div className="xl:w-5xl">
        <h2 className="font-onest text-2xl text-color-primary tracking-wide	text-left mb-1 md:text-white md:text-[32px] md:mb-0 xl:text-[50px]">End-to-End Conversation Intelligence</h2>
        <div className="font-onest text-xl text-left tracking-wide mb-3 md:text-white md:text-2xl xl:text-[32px]">for <span className="text-color-second md:text-[#d9d9d9]">Service Quality Monitoring</span></div>
        <p className="font-onest text-xs text-color-primary opacity-70 text-left md:text-white md:text-sm xl:text-lg xl:w-200">
          From offline stores to call centers — capture, analyze, and optimize your team's communication with AI. Complete service quality monitoring across all customer touchpoints.
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-5 md:flex-row-reverse md:gap-3.5 md:justify-end xl:flex-col-reverse xl:items-end xl:mt-0 ">
          <a href="#dashboard"
             className="button-gradient-hover button-border-gradient font-onest font-normal text-color-primary text-sm rounded-full inline-flex justify-center items-center gap-3 w-full p-3 md:bg-transparent md:border-white md:w-55.5 xl:p-5 xl:w-max xl:text-lg"
          >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="icon-svg lucide w-4 h-4 transition-all duration-300"
                  aria-hidden="true"
              >
                  <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8c3cdd" />
                          <stop offset="50%" stopColor="#cbc3fc" />
                          <stop offset="100%" stopColor="#8c3cdd" />
                      </linearGradient>

                      <linearGradient id="gradient-hover" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8c3cdd" />
                          <stop offset="50%" stopColor="#cbc3fc" />
                          <stop offset="100%" stopColor="#8c3cdd" />
                      </linearGradient>
                  </defs>

                  <path className="icon-path" stroke="black" strokeWidth="2" strokeLinecap="round" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
              </svg>

              <span className="text-color-primary md:text-white">See dashboard in action</span>
          </a>



          <a href="https://wa.me/966534751480"
             target="_blank"
             className="font-onest font-normal text-sm button-background-gradient text-white rounded-full inline-flex justify-center items-center gap-3 w-full p-3 md:w-36 xl:p-5 xl:w-46 xl:text-lg"
          >Request a Demo
          </a>

      </div>
    </div>
  )
}