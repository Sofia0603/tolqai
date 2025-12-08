export default function Cookie(){
    return (
        <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center w-full px-3 pt-5 pb-3 bg-[#F4F4F4] rounded-t-[60px] border-1 border-[#D9D9D9] md:flex-row md:justify-between md:items-baseline md:px-8 xl:pl-10">
            <div className="text-primary text-center text-[11px] opacity-70 mb-3 md:text-sm md:w-full md:text-left">We use cookies to improve the website's performance</div>
            <div className="flex flex-col md:flex-row md:gap-7 w-full items-center md:items-end md:justify-end">
                <a href="#" className="text-color-second text-sm text-cenetr mb-3 hover:opacity-70">Privacy Policy</a>
                <button className="font-onest font-normal bg-color-black py-3 w-full rounded-full text-white hover:opacity-70 text-sm md:max-w-[107px]">Accept All </button>
            </div>
        </div>
    )
}