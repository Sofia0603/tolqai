"use client";
import { useState } from "react";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="relative px-5 py-3 md:px-3 py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between xl:justify-normal ">
          <div>
            <img src='/images/logo.svg' />
          </div>
          <div className="hidden md:flex xl:ml-auto">
            <nav>
              <ul className="flex justify-between gap-4 py-1 font-onest text-sm">
                <li><a href="#">How it works</a></li>
                <li><a href="#">Use Cases</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">TolqAI Microphone</a></li>
                <li><a href="#">Features</a></li>
              </ul>
            </nav>
          </div>
          <div className='flex items-center gap-x-6 xl:ml-[178px]'>

            <button className="font-onest text-transparent bg-clip-text
              bg-gradient-to-r from-[#cbc3fc] to-[#8c3cdd]
              hover:from-[#8c3cdd] hover:to-[#cbc3fc] transition-colors ease-in-out duration-300">
              Get started
            </button>


            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ?
                <img src="/images/close.svg" alt="Menu" />
               : <img src="/images/burger.svg" alt="Menu" />}
            </button>
          </div>
        </div>

       <MobileMenu isOpen={isOpen}/>

      </div>
    </header>
  )
}
