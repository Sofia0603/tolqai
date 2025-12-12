import Image from "next/image";
import footerMenu from "@/data/footerMenu";

type FooterMenuProps = {
  title: string;
  menu: MenuItem[];
};

type MenuItem = {
  name: string;
  href: string;
};

const data = footerMenu

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0f0f] md:bg-white">
      <div className="bg-[#f4f4f4] mx-auto pt-10 rounded-t-[60px] xl:pt-15 ">

      <div className="flex flex-col md:max-w-[492px] md:mx-auto xl:max-w-[923px] xl:flex-row xl:gap-30">
        <div  className="flex justify-center mb-10 md:mb-8 md:w-full md:justify-start xl:w-max">
          <Image
              src="/images/logo/logo.svg"
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

          {data.map((section:FooterMenuProps) => (
              <div key={section.title} className="text-center md:text-left">
                <div className="font-onest font-medium text-sm mb-3 md:text-lg">{section.title}</div>
                <ul className="flex flex-col gap-2">
                  {section.menu.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="font-onest text-sm transition hover:opacity-70">{item.name}</a>
                      </li>
                  ))}
                </ul>
              </div>
          ))}

        </div>
      </div>

        <div  className="flex flex-col items-center w-full border-t border-[#d9d9d9] py-5 md:flex-row-reverse md:justify-between md:max-w-[492px] md:mx-auto xl:max-w-[923px]">
            <div className="flex gap-5 mb-4 md:mb-0">
              <a href="/privacy-policy" className="font-onest text-sm text-color-dop transition hover:opacity-70">Privacy Policy</a>
              <a href="/terms-of-service" className="font-onest text-sm text-color-dop transition hover:opacity-70">Terms of Service</a>
            </div>
            <div className="font-onetst text-sm text-color-dop">
              © {new Date().getFullYear()} tolqAI. All rights reserved.
            </div>
        </div>


      </div>
    </footer>
  )
}
