"use client";

export default function MobileMenu({ isOpen }) {
  return (
    <nav
      className={`fixed top-[67px] left-0 w-full text-center px-6 py-3 bg-white rounded-b-[40px] shadow z-50 md:hidden
      transition-all duration-300 ease-in-out overflow-hidden
      ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <ul className="flex flex-col gap-4 p-4 font-onest text-sm">
        <li><a href="#" className="block">How it works</a></li>
        <li><a href="#" className="block">Use Cases</a></li>
        <li><a href="#" className="block">Dashboard</a></li>
        <li><a href="#" className="block">TolqAI Microphone</a></li>
        <li><a href="#" className="block">Features</a></li>
      </ul>
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="font-onest font-normal text-transparent bg-clip-text
          bg-gradient-to-r from-[#cbc3fc] to-[#8c3cdd]
          hover:from-[#8c3cdd] hover:to-[#cbc3fc] transition-colors ease-in-out duration-300">
          WhatsApp
        </a>
        <a href="#" className="font-onest font-normal text-transparent bg-clip-text
          bg-gradient-to-r from-[#cbc3fc] to-[#8c3cdd]
          hover:from-[#8c3cdd] hover:to-[#cbc3fc] transition-colors ease-in-out duration-300">
          demo@tolqai.com
        </a>
      </div>
    </nav>
  );
}
