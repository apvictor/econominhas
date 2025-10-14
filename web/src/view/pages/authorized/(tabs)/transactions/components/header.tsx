import { Swiper, SwiperSlide } from "swiper/react"
import { useAuth } from "@/shared/contexts/auth-context"
import { useTransactions } from "../contexts"
import { formatCurrency } from "@/lib/format-currency"
import { SliderNavigation } from "../../home/components/slider-navigation"
import { SliderOption } from "../../home/components/slider-option"
import { getDynamicMonths } from "@/lib/get-dynamic-months"

export function Header() {
  const { filters, setFilters } = useAuth()
  const { transactions } = useTransactions()

  const months = getDynamicMonths(12)

  return (
    <header className="bg-gradient-to-b from-teal-950 to-zinc-950 p-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center text-zinc-400 text-xs">
          <p>Total no mês</p>
          <strong>{formatCurrency(transactions?.balance)}</strong>
        </div>
        <div className="text-center flex-1 font-bold">
          <p className="text-sm">Saldo</p>
          <p className="text-2xl text-nowrap">
            {formatCurrency(transactions?.total)}
          </p>
        </div>
        <div className="text-center text-zinc-400 text-xs flex-1">
          <p>Total previsto</p>
          <strong>{formatCurrency(transactions?.balanceForecast)}</strong>
        </div>
      </div>

      <div className="relative">
        <Swiper
          slidesPerView={3}
          centeredSlides
          initialSlide={months.findIndex(
            (m) => m.month === filters.month && m.year === filters.year
          )}
          onSlideChange={(swiper) => {
            const selected = months[swiper.realIndex]
            setFilters((prevState: any) => ({
              ...prevState,
              month: selected.month,
              year: selected.year,
            }))
          }}
        >
          <SliderNavigation />

          {months.map((item, index) => (
            <SwiperSlide key={`${item.month}-${item.year}`}>
              {({ isActive }) => (
                <SliderOption
                  isActive={isActive}
                  month={`${item.label}`}
                  index={index}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  )
}
