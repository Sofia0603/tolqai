"use client";

import MenuList from "@/components/menu/MenuList";

export default function MobileMenu({ isOpen }) {
  return (
    <nav
      className={`fixed top-[65px] left-0 w-full text-center px-6 py-3 bg-white rounded-b-[40px] shadow z-50 md:hidden
      transition-all duration-300 ease-in-out overflow-hidden z-20
      ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <ul className="flex flex-col gap-4 p-4 font-onest text-sm">
        <MenuList/>
      </ul>
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="button-gradient">
          WhatsApp
        </a>
        <a href="#" className="button-gradient">
          demo@tolqai.com
        </a>
      </div>
    </nav>
  );
}
