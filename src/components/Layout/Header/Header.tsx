"use client";

import Image from "next/image";
import MobileMenu from "@/components/Menu/MobileMenu";
import MenuList from "@/components/Menu/MenuList";

export interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header className="relative z-50 px-5 py-4 mb-3 bg-white md:px-3 md:py-5 md:mb-0 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between xl:justify-normal ">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo/logo.svg"
              alt="Логотип"
              width={81}
              height={25}
              className="relative w-[81px] h-[25px] md:w-[67px] md:h-[20px] object-contain xl:w-[81px] xl:h-[25px]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/images/logo/logo.svg";
              }}
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex xl:ml-auto">
            <nav>
              <ul className="flex justify-between gap-4 py-1 font-onest text-sm xl:gap-[50px] xl:text-lg">
                <MenuList />
              </ul>
            </nav>
          </div>

          {/* Buttons */}
          <div className='flex items-center gap-x-6 xl:ml-[183px]'>

            <button className="button-gradient tracking-wide xl:text-lg">
              Get started
            </button>

            {/* Burger menu (mobile) */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Image
                  src="/images/icons/icon-close.svg"
                  alt="Меню закрыть"
                  width={14}
                  height={14}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/icons/icon-close.svg";
                  }}
                />
              ) : (
                <Image
                  src="/images/icons/icon-burger.svg"
                  alt="Открыть меню"
                  width={24}
                  height={24}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/icons/icon-burger.svg";
                  }}
                />
              )}
            </button>

          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu isOpen={isOpen} />
      </div>
    </header>
  );
}
