import Form from "@/components/GetStarted/Form";
import LinkBottom from "@/components/Common/LinkBottom";

export default function GetStarted(){
    return (
        <section id="getStarted" className="bg-color-black md:pt-20 md:pb-21 md:bg-white md:mx-3">
            <div className="bg-color-black py-20 flex flex-col items-center container mx-auto px-3 rounded-3xl xl:px-0" data-aos="fade-up">
                <h2 className=" text-xl py-2 px-6 rounded-full w-max bg-color-gray-dop text-white mb-4  md:text-2xl md:mb-5 xl:text-[32px] xl:mb-5">Get started</h2>
                <h3 className=" text-white text-[32px] text-center mb-3 md:text-[40px] xl:text-[70px]">Ready to <span className="text-color-dop">Transform</span> Your Business?</h3>
                <p className=" text-[15px] text-color-dop text-center md:text-xl md:max-w-150 xl:text-2xl xl:max-w-240">Schedule a personalized demo and see how tolqAI can drive measurable results for your team</p>

                <Form />


                <div className="flex flex-col gap-10 mx-[18px] md:flex-row md:gap-5 md:max-w-[1154px] xl:gap-20">
                    <LinkBottom
                        title="Email Us"
                        subtitle="Prefer email? Send us a message"
                        linkName="hello@tolqai.com"
                        href="mailto:hello@tolqai.com"
                    />
                    <div className="h-[1px] w-full bg-[#d9d9d9] md:h-[106px] md:w-[1px] md:mx-auto"></div>
                    <LinkBottom
                        title="WhatsApp"
                        subtitle="Quick questions? Chat with us"
                        linkName="Start a conversation"
                        href="#"
                    />
                </div>

            </div>
        </section>
    )
}