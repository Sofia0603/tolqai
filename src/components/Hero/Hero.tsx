import Image from "next/image";
import { Play } from "lucide-react";
import {useState} from "react";
import BannerContent from "@/components/Hero/HeroContent";


export default function Hero() {

  const [imgSrc, setImgSrc] = useState('/images/hero/main-banner.png');
  const [errored, setErrored] = useState(false);

  return (
    <section id="hero" className="px-3 flex mb-3 text-center z-10">
      <div className=" container mx-auto bg-gray-100 rounded-3xl p-4 md:p-0">
        <div
          className="relative rounded-xl h-[40vh] flex justify-end mb-6 overflow-hidden md:mb-0 md:rounded-4xl md:h-[90vh]"
        >
          <Image
            src={imgSrc}
            alt="Service Quality Monitoring"
            fill
            sizes="100vh"
            loading="eager"
            priority
            className="rounded-2xl object-cover object-[40%_75%] md:object-center"
            onError={() => {
              if (!errored) {
                setImgSrc('/images/no-image.png');
                setErrored(true);
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl pointer-events-none"></div>

          {/* На md+ поверх картинки */}
          <div className="hidden md:flex absolute inset-0 justify-center items-end md:my-7 md:mx-6.5  xl:m-9 ">
            <BannerContent/>
          </div>
        </div>

        {/* На мобильных под картинкой */}
        <div className="md:hidden">
          <BannerContent/>
        </div>
      </div>
    </section>

  )
}
