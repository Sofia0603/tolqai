import Image from "next/image";
import Form from "@/components/Home/GetStarted/Form";

export default function GetStarted(){
    return (
            <section className="bg-color-black md:pt-20 md:pb-21 md:bg-white md:mx-3">
                <div className="bg-color-black py-20 flex flex-col items-center container mx-auto px-3 rounded-3xl xl:px-0">
                    <h2 className=" text-xl py-2 px-6 rounded-full w-max bg-color-gray-dop text-white mb-4  md:text-2xl md:mb-5 xl:text-[32px] xl:mb-5">Get started</h2>
                    <h3 className=" text-white text-[32px] text-center mb-3 md:text-[40px] xl:text-[70px]">Ready to <span className="text-color-dop">Transform</span> Your Business?</h3>
                    <p className=" text-[15px] text-color-dop text-center md:text-xl md:max-w-150 xl:text-2xl xl:max-w-240">Schedule a personalized demo and see how tolqAI can drive measurable results for your team</p>

                    <Form />
                    
                    <div className="flex flex-col gap-10 mx-[18px] md:flex-row md:gap-5 md:max-w-[1154px] xl:gap-20">
                        <div className="flex flex-col items-center text-center md:w-[300px]">
                            <div className="font-onest text-xl mb-3 text-white xl:text-2xl">Email Us</div>
                            <div className="font-onest font-normal text-sm opacity-50 text-white mb-[10px] xl:text-lg xl:max-w-100">Prefer email? Send us a message</div>
                            <a href="#" className="flex flex-row gap-3 justify-center items-center button-gradient font-onest text-sm xl:text-lg">demo@tolqai.com</a>
                        </div>
                        <div className="h-[1px] w-full bg-[#d9d9d9] md:h-[106px] md:w-[1px] md:mx-auto"></div>
                        <div className="flex flex-col items-center text-center md:w-[300px]">
                            <div className="font-onest text-xl mb-3 text-white xl:text-2xl">WhatsApp</div>
                            <div className="font-onest font-normal text-sm opacity-50 text-white mb-[10px] xl:text-lg xl:max-w-100">Quick questions? Chat with us</div>
                            <a href="#" className="flex flex-row gap-3 justify-center items-center button-gradient font-onest text-sm xl:text-lg">Start a conversation</a>
                        </div>
                    </div>

                </div>
            </section>
    )
}