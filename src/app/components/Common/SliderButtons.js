
export default function SliderButtons({ onPrev, onNext, isBeginning, isEnd }) {



  return (
    <div className="flex space-x-2 justify-center mt-5" >
      {/* Кнопка "Назад" */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-purple-300 hover:bg-purple-50 transition md:w-12 md:h-12 opacity-90 hover:opacity-100 disabled:opacity-60"
        onClick={onPrev}
        disabled={isBeginning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-300"
          fill="none"

          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Кнопка "Вперед" */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-purple-300 hover:bg-purple-50 transition md:w-12 md:h-12 opacity-90 hover:opacity-100 disabled:opacity-60"
        onClick={onNext}
        disabled={isEnd}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  )
}
