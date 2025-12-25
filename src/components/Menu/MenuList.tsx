export default function MenuList() {

    interface MenuItem {
        title: string;
        href?: string;
    }

    const menu: MenuItem[] = [
        { title: "How it works", href: "#how" },
        { title: "Use Cases", href: "#use" },
        { title: "Dashboard", href: "#dashboard" },
        { title: "TolqAI Microphone", href: "#microphone" },
        { title: "Features", href: "#features" },
    ];


  return (
    <>
        {menu.map((item, index) => (
            <li key={index} className={"w-max mx-auto"}>
                <a href={item.href} className="block tracking-wide button-gradient-hover">
                    {item.title}
                </a>
            </li>

        ))}
    </>
  )
}