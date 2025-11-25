export default function MenuList() {

    interface MenuItem {
        title: string;
        href?: string;
    }

    const menu: MenuItem[] = [
        { title: "How it works", href: "/" },
        { title: "Use Cases", href: "/" },
        { title: "Dashboard", href: "/" },
        { title: "TolqAI Microphone", href: "/" },
        { title: "Features", href: "/" },
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