import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0f0f] md:bg-white">
      <div className="bg-[#f4f4f4] mx-auto pt-10 rounded-t-[60px] xl:pt-15 ">

      <div className="flex flex-col md:max-w-[492px] md:mx-auto xl:max-w-[923px] xl:flex-row xl:gap-30">
        <div  className="flex justify-center mb-10 md:mb-8 md:w-full md:justify-start xl:w-max">
          <Image
              src="/images/footer-logo.svg"
              alt="Логотип"
              width={74}
              height={25}
              className="xl:w-[108px] xl:h-[33px]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/images/logo/logo.svg";
              }}
          />
        </div>
        <div className="flex flex-col justify-between gap-8 mb-10 md:flex-row md:gap-11 xl:gap-26 ">

          {/*first menu*/}
          <div className="text-center md:text-left">
            <div className="font-onest font-medium text-sm mb-3 md:text-lg">Sections</div>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="font-onest text-sm">How it works</a>
              </li>
              <li>
                <a href="#" className="font-onest text-sm">Use Cases</a>
              </li>
              <li>
                <a href="#" className="font-onest text-sm">Dashboard</a>
              </li>
              <li>
                <a href="#" className="font-onest text-sm">TolqAI Microphone</a>
              </li>
              <li>
                <a href="#" className="font-onest text-sm">Features</a>
              </li>
            </ul>
          </div>

          {/*second menu*/}
          <div className="text-center md:text-left">
            <div className="font-onest font-medium text-sm mb-3 md:text-lg">Solutions</div>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="font-onest text-sm">Retail & Automotive</a>
              </li>
              <li>
                <a href="#" className="font-onest text-sm">Customer Support</a>
              </li>
              <li>
                <a href="#" className="font-onest text-sm">HR & Recruitment</a>
              </li>
              <li>
                <a href="#" className="font-onest text-sm">Training & QA</a>
              </li>
            </ul>
          </div>

          {/*third menu*/}
          <div className="text-center md:text-left">
            <div className="font-onest font-medium text-sm mb-3 md:text-lg">Contact</div>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="font-onest text-sm">demo@tolqai.com</a>
              </li>
              <li>
                <a href="#" className="font-onest text-sm">WhatsApp Support</a>
              </li>

            </ul>
          </div>

        </div>
      </div>

        <div  className="flex flex-col items-center w-full border-t border-[#d9d9d9] py-5 md:flex-row-reverse md:justify-between md:max-w-[492px] md:mx-auto xl:max-w-[923px]">
            <div className="flex gap-5 mb-4 md:mb-0">
              <a href="#" className="font-onest text-sm text-color-dop">Privacy Policy</a>
              <a href="#" className="font-onest text-sm text-color-dop">Terms of Service</a>
            </div>
            <div className="font-onetst text-sm text-color-dop">
              © {new Date().getFullYear()} tolqAI. All rights reserved.
            </div>
        </div>


      </div>
    </footer>
  )
}
