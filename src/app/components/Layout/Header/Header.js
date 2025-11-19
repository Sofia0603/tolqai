"use client";
import MobileMenu from "@/src/app/components/Menu/MobileMenu";
import MenuList from "@/src/app/components/Menu/MenuList";
import Image from "next/image";

export default function Header(props) {

  const { isOpen, setIsOpen } = props

  return (
    <header className="relative z-50 px-5 py-4 mb-3 md:px-3 md:py-5 md:mb-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between xl:justify-normal ">
          <div>
            <Image
              src="/images/logo/logo.svg"
              alt="Логотип"
              width={81}
              height={25}
              className="relative w-[81px] h-[25px] md:w-[67px] md:h-[20px] object-contain xl:w-[81px] xl:h-[25px]"
            />
          </div>
          <div className="hidden md:flex xl:ml-auto">
            <nav>
              <ul className="flex justify-between gap-4 py-1 font-onest text-sm xl:gap-[50px] xl:text-lg">
                <MenuList />
              </ul>
            </nav>
          </div>
          <div className='flex items-center gap-x-6 xl:ml-[183px]'>

            <button className="button-gradient tracking-wide xl:text-lg">
              Get started
            </button>


            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ?
                <Image
                  src="/images/icons/icon-close.svg"
                  alt=""
                  width={14}
                  height={14}
                />
               :
                <Image
                  src="/images/icons/icon-burger.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              }
            </button>
          </div>
        </div>

       <MobileMenu isOpen={isOpen}/>

      </div>
    </header>
  )
}
