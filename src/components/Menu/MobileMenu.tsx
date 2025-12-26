"use client";

import MenuList from "@/components/Menu/MenuList";

interface IMobileMenuProps {
  isOpen: boolean;
  onClose: () => void; // Добавляем функцию закрытия
}

export default function MobileMenu({ isOpen, onClose }: IMobileMenuProps) {
  return (
    <nav
      className={`fixed top-[57px] left-0 w-full text-center px-6 py-3 bg-white rounded-b-[40px] shadow z-60 md:hidden
      transition-all duration-300 ease-in-out overflow-hidden
      ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <ul className="flex flex-col gap-4 p-4 font-onest text-sm">
        {/* Передаем onClose в список меню */}
        <MenuList onItemClick={onClose} />
      </ul>
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="button-gradient" onClick={onClose}>
          WhatsApp
        </a>
        <a href="mailto:hello@tolqai.com" className="button-gradient" onClick={onClose}>
          hello@tolqai.com
        </a>
      </div>
    </nav>
  );
}