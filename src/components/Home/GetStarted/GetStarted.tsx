import Image from "next/image";

export default function GetStarted(){
    return (
        <section>
            <section className="bg-color-black md:pt-20 md:pb-21 md:bg-white">
                <div className="bg-color-black py-20 flex flex-col items-center container mx-auto px-3 rounded-3xl xl:px-0">
                    <h2 className=" text-xl py-2 px-6 rounded-full w-max bg-color-gray-dop text-white mb-4  md:text-2xl md:mb-5 xl:text-[32px] xl:mb-5">Get started</h2>
                    <h3 className=" text-white text-[32px] text-center mb-3 md:text-[40px] xl:text-[70px]">Ready to <span className="text-color-dop">Transform</span> Your Business?</h3>
                    <p className=" text-[15px] text-color-dop text-center md:text-xl xl:text-2xl xl:max-w-240">Schedule a personalized demo and see how tolqAI can drive measurable results for your team</p>

                    <form action="" className="flex flex-col gap-4 mt-10 mb-15 w-full max-w-[490px]">
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs" htmlFor="name">Full Name*</label>
                            <input className="w-full p-4 rounded-full bg-color-gray-dop border-1 border-[#575757] text-color-dop h-[50px]" type="text" id="name" placeholder="Joe Doe" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs" htmlFor="email">Email Address* </label>
                            <input className="w-full p-4 rounded-full bg-color-gray-dop border-1 border-[#575757] text-color-dop h-[50px]" type="email" id="email" placeholder="john@company.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs" htmlFor="company-name">Company Name*  </label>
                            <input className="w-full p-4 rounded-full bg-color-gray-dop border-1 border-[#575757] text-color-dop h-[50px]" type="text" id="company-name" placeholder="Your Company Inc." />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white text-xs" htmlFor="needs">Tell us about your needs</label>
                            <textarea
                                placeholder="I’m interested in learnning more about  tolqAi for..."
                                name="needs"
                                id="needs"
                                cols="10"
                                rows="10"
                                className="w-full py-1 px-4 rounded-full leading-5 bg-color-gray-dop border-1 border-[#575757] text-color-dop h-[50px] resize-none overflow-hidden"
                            ></textarea>

                        </div>

                        <button type="button" className="button-background-gradient text-white rounded-full py-3 mt-2">Send</button>
                    </form>
                    
                    <div className="flex flex-col gap-10 mx-[18px] md:flex-row md:gap-5 md:max-w-[1154px] xl:gap-20">
                        <div className="flex flex-col items-center text-center">
                            <div className="font-onest text-xl mb-3 text-white xl:text-2xl">Offline Retail Solution</div>
                            <div className="font-onest font-normal text-sm opacity-50 text-white mb-[10px] xl:text-lg xl:max-w-100">Capture in-store conversations with wearable microphones and get real-time analytics</div>
                            <a href="#" className="flex flex-row gap-3 justify-center items-center button-gradient font-onest text-sm xl:text-lg">
                                <span>Learn more</span>
                                <Image
                                    src="/images/icons/icon-arrow-right.svg"
                                    alt="Offline Retail Solution"
                                    width={13}
                                    height={8}
                                    className="w-[13px] h-[8px]"
                                />
                            </a>
                        </div>
                        <div className="h-[1px] w-full bg-[#d9d9d9] md:h-[106px] md:w-[1px] md:mx-auto"></div>
                        <div className="flex flex-col items-center text-center">
                            <div className="font-onest text-xl mb-3 text-white xl:text-2xl">Omni-Retail Solution</div>
                            <div className="font-onest font-normal text-sm opacity-50 text-white mb-[10px] xl:text-lg xl:max-w-100">Unified analytics for online and offline conversations across all channels</div>
                            <a href="#" className="flex flex-row gap-3 justify-center items-center button-gradient font-onest text-sm xl:text-lg">
                                <span>Learn more</span>
                                <Image
                                    src="/images/icons/icon-arrow-right.svg"
                                    alt="Omni-Retail Solution"
                                    width={13}
                                    height={8}
                                    className="w-[13px] h-[8px]"
                                />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    )
}