"use client";

import Image from "next/image";
import MobileMenu from "@/components/Menu/MobileMenu";
import MenuList from "@/components/Menu/MenuList";
import Link from "next/link";
import {usePathname} from "next/navigation";

export interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isSimple?: boolean;
}

export default function Header({ isOpen, setIsOpen,isSimple }: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";


  const LogoImage = (
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
  );

  return (
    <header className="relative z-50 px-5 py-4 mb-3 bg-white md:px-3 md:py-5 md:mb-0 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between xl:justify-normal ">
          {/* Logo */}
          <div>
            {isHomePage ? (
                LogoImage
            ) : (
                <Link href="/">{LogoImage}</Link>
            )}
          </div>
          {!isSimple && (
          <>
            <div className="hidden md:flex xl:ml-auto">
              <nav>
                <ul className="flex justify-between gap-4 py-1 font-onest text-sm xl:gap-[50px] xl:text-lg">
                  <MenuList />
                </ul>
              </nav>
            </div>

            <div className='flex items-center gap-x-6 xl:ml-[183px]'>

              <a href="#getStarted" className="button-gradient tracking-wide xl:text-lg">
                Get started
              </a>

              {/* Burger menu (mobile) */}
              <button className="md:hidden flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <Image
                    src="/images/icons/icon-close.svg"
                    alt="Меню закрыть"
                    width={24}
                    height={24}
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
          </>
          )}
        </div>

        {/* Mobile menu */}
        {!isSimple && <MobileMenu isOpen={isOpen}  onClose={() => setIsOpen(false)} />}
      </div>
    </header>
  );
}
