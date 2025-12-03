type LinkBottomProps = {
    title: string,
    subtitle: string,
    linkName: string,
    href: string,
}

export default function LinkBottom({title, subtitle, linkName, href}:LinkBottomProps) {
    return (
        <div className="flex flex-col items-center text-center md:w-[300px]">
            <div className="font-onest text-xl mb-3 text-white xl:text-2xl">{title}</div>
            <div className="font-onest font-normal text-sm opacity-50 text-white mb-[10px] xl:text-lg xl:max-w-100">{subtitle}</div>
            <a href={href} className="flex flex-row gap-3 justify-center items-center button-gradient font-onest text-sm xl:text-lg">{linkName}</a>
        </div>
    )
}