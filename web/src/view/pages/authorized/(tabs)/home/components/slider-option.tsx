import { cn } from "@/lib/utils";
import { useSwiper } from "swiper/react";

interface Props {
  index: number;
  month: string;
  isActive: boolean;
}
export function SliderOption({ isActive, month, index }: Props) {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => swiper.slideTo(index)}
        className={cn(
          "w-fit px-8 rounded-full h-8 text-sm text-gray-800 dark:text-zinc-400",
          isActive && "dark:text-teal-950 dark:bg-teal-400 font-bold"
        )}
      >
        {month}
      </button>
    </div>
  );
}
