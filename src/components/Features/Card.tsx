"use client";

import { useRef, useEffect } from "react";

interface ICardProps {
    title: string;
    text: string;
    video: string;
    reverse: boolean;
    dataAos?: string;
}

export default function Card({ title, text, video, reverse, dataAos }: ICardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (!isMobile) return;

        const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (videoRef.current) {
                      if (entry.isIntersecting) {
                          videoRef.current.play().catch(() => {});
                      } else {
                          videoRef.current.pause();
                          videoRef.current.currentTime = 0;
                      }
                  }
              });
          },
          { threshold: 0.6 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Обработчики для десктопа (Hover)
    const handleMouseEnter = () => {
        // Запускаем только если это десктоп
        if (videoRef.current && window.innerWidth >= 768) {
            videoRef.current.play().catch(() => {});
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current && window.innerWidth >= 768) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
      <div
        ref={containerRef}
        className={`flex flex-col justify-between bg-[#0B0B0B] rounded-3xl overflow-hidden pt-5 px-7 h-[336px] md:px-5 ${ reverse ? `md:flex-row-reverse` : `md:flex-row`} md:gap-5 md:h-[236px] xl:px-7 xl:h-[413px] xl:pt-10 xl:gap-7`}
        data-aos={dataAos}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <div className="md:self-end md:pb-6 xl:max-w-[623px]">
              <h4 className="mb-2 text-xl xl:text-2xl text-white">{title}</h4>
              <p className="opacity-70 text-sm xl:text-lg text-white">{text}</p>
          </div>

          <div className="flex items-end h-full md:max-w-[50%] isolate overflow-hidden">
              <video
                ref={videoRef}
                src={video}
                muted
                playsInline
                loop
                preload="metadata"

                className="w-full h-auto max-h-[240px] md:max-h-[320px] lg:max-h-[220px] xl:max-w-[678px] xl:md:max-h-[380px] scale-[1.02] mix-blend-screen"
                style={{
                    backgroundColor: 'transparent',
                    display: 'block',
                    filter: 'contrast(1.01)',
                    objectFit: 'cover'
                }}
              />
          </div>
      </div>
    );
}