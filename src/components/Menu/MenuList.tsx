interface IMenuListProps {
  onItemClick?: () => void; // Проп для обработки клика
}

export default function MenuList({ onItemClick }: IMenuListProps) {
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
        <li key={index} className="w-max mx-auto">
          <a
            href={item.href}
            className="block tracking-wide button-gradient-hover"
            onClick={onItemClick} // Вызываем закрытие здесь
          >
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
}