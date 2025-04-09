import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSwiper } from "swiper/react";

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center z-10 dark:from-gray-700"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-800 dark:text-teal-400" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center z-10 dark:from-gray-700"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-800 dark:text-teal-400" />
      </button>
    </>
  );
}
