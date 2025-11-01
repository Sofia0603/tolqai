import { Button } from "@/components/ui/Button"

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-b from-gray-50 to-white px-6">
      <h1 className="text-5xl font-bold mb-4">Современные сайты на Next.js 🚀</h1>
      <p className="font-onest">
        Быстрый, адаптивный и SEO-оптимизированный лендинг с серверным рендерингом.
      </p>
      <Button className="px-6 py-3 text-lg rounded-xl shadow-md">Начать</Button>
    </section>
  )
}
