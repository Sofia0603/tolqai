import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f4] rounded-t-[60px] ">
      <div className="container mx-auto pt-10">
        <div  className="flex justify-center mb-10">
          <Image
            src="/images/footer-logo.svg"
            alt="Логотип"
            width={74}
            height={25}
          />
        </div>
        <div className="flex flex-col gap-8 mb-10">

          {/*first menu*/}
          <div className="text-center">
            <div className="font-onest font-medium text-sm text-center mb-3">Sections</div>
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
          <div className="text-center">
            <div className="font-onest font-medium text-sm text-center mb-3">Solutions</div>
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
          <div className="text-center">
            <div className="font-onest font-medium text-sm text-center mb-3">Contact</div>
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

        <div  className="flex flex-col items-center w-full border-t border-[#d9d9d9] py-5 ">
            <div className="flex gap-5 mb-4">
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
