"use client";

import { useEffect, useRef } from "react";

interface ICardProps {
  title: string;
  text: string;
  video: string; // Оставляем название пропса img, как ты просил
  dataAos: string;
  isActive: boolean;
}

export default function Card({ title, text, video, dataAos, isActive }: ICardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        // Запуск видео, когда слайд активен
        videoRef.current.play().catch((err) => {
          console.log("Автоплей заблокирован:", err);
        });
      } else {
        // Пауза и сброс, когда слайд неактивен
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  return (
    <div className="flex flex-col bg-white rounded-2xl p-3 h-full max-w-[336px] md:p-5 md:max-w-[666px] xl:max-w-[1224px]" data-aos={dataAos}>
      <h4 className="flex items-center text-[15px] md:text-xl xl:text-2xl xl:mb-3">
        <span
          className="w-[10px] h-[10px] bg-[#8c3cdd] rounded-full mr-4"
          style={{
            boxShadow: 'inset 0 0 10px 0 rgba(255,255,255,0.25), 0 0 4px 0 rgba(140,60,221,0.5)'
          }}
        ></span>
        {title}
      </h4>

      <p className="text-xs opacity-70 mb-4 md:text-sm md:mb-6 xl:text-lg">
        {text}
      </p>

      {/* Контейнер для видео */}
      <div className="mt-auto overflow-hidden rounded-xl isolate ">
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          loop
          preload="metadata"
          className="w-[102%] h-auto object-cover mix-blend-screen scale-[1.02] outline-none border-none"
          style={{
            backgroundColor: 'transparent',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
}