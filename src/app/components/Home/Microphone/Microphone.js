import Image from "next/image";
import Card from "@/src/app/components/Home/Microphone/Card";

export default function Microphone(){
  return (
    <section id="microphone" className="py-12">
      <div className="container mx-auto px-3 flex flex-col justify-center xl:px-0">
        <h2 className="font-onest text-xl text-color-dop mb-2 md:text-2xl xl:text-[32px] xl:text-center">TolqAI Microphone</h2>
        <h3 className="font-onest text-[32px] leading-[1.2] tracking-wider text-color-primary font-base mb-4 md:text-[40px] xl:text-[70px] xl:text-center">Capture Offline Conversations Seamlessly</h3>
        <p className="font-onest text-[15px] text-color-primary md:max-w-150 md:text-xl xl:max-w-[900px] xl:text-center xl:self-center">
          Your gateway to offline intelligence — a lightweight wearable that captures
          high-quality audio and automatically uploads encrypted data to your dashboard
        </p>

        <div className="flex flex-col gap-8 mt-8 xl:w-[926px] self-center">

          <Card
            title="Magnetic Clip Design"
            description="Lightweight wearable with long battery life — comfortable for all-day use in any environment"
            icon="/images/icons/icon-magnit.svg"
            img="/images/microphone/card-1.svg"
            classNameImg="object-cover mt-auto ml-auto"
          />
          <Card
            title="Works Online & Offline"
            description="Automatically uploads encrypted data when connected, stores locally when offline — nothing is lost"
            icon="/images/icons/icon-line.svg"
            img="/images/microphone/card-2.svg"
            // className="max-w-[350px] max-h-[300px] object-cover mt-auto absolute bottom-0 right-0"
            classNameImg="object-cover mt-auto ml-auto max-h-[300px] md:max-h-[450px]"
          />

          <Card
            title="Secure & Encrypted"
            description="Enterprise-grade security with end-to-end encryption and GDPR compliance"
            icon="/images/icons/icon-message.svg"
            img="/images/microphone/card-3.svg"
            classNameImg="object-cover mt-auto md:max-h-[500] md:absolute"
          />

          <Card
            title="Instant Dashboard Sync"
            description="Pairs instantly with your TolqAI dashboard — data appears in real-time as conversations happen"
            icon="/images/icons/icon-lightning.svg"
            img="/images/microphone/card-1.svg"
            classNameImg="object-cover mt-auto ml-auto"
          />

        </div>



      </div>
    </section>
  )
}