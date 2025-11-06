"use client";
import MobileMenu from "@/components/menu/MobileMenu";
import MenuList from "@/components/menu/MenuList";
import Image from "next/image";

export default function Header(props) {

  const { isOpen, setIsOpen } = props

  return (
    <header className="relative px-5 py-3 md:px-3 py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between xl:justify-normal ">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Логотип"
              width={81}
              height={25}
            />
          </div>
          <div className="hidden md:flex xl:ml-auto">
            <nav>
              <ul className="flex justify-between gap-4 py-1 font-onest text-sm xl:gap-[50px] xl:text-lg">
                <MenuList />
              </ul>
            </nav>
          </div>
          <div className='flex items-center gap-x-6 xl:ml-[178px]'>

            <button className="button-gradient xl:text-lg">
              Get started
            </button>


            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ?
                <Image
                  src="/images/close.svg"
                  alt=""
                  width={14}
                  height={14}
                />
               :
                <Image
                  src="/images/burger.svg"
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
