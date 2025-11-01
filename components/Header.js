export default function Header() {
  return (
    <header className="w-full bg-white shadow py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Landing</h1>
      <nav className="flex flex-row justify-center gap-4">
        <a href="#features" className=" no-underline text-primary hover:text-gray-900">Особенности</a>
        <a href="#contact" className=" no-underline text-primary hover:text-gray-900">Контакты</a>
      </nav>
    </header>
  )
}
