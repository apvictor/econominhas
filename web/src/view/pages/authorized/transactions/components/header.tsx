import { Swiper, SwiperSlide } from "swiper/react"
import { BR_MONTHS } from "@/config/constants/months"
import { SliderNavigation } from "../../home/components/slider-navigation"
import { SliderOption } from "../../home/components/slider-option"
import { TransactionsFiltersModel } from "@/shared/models/transactions"
import { useAuth } from "@/shared/contexts/auth-context"
import { useTransactions } from "../contexts"
import { formatCurrency } from "@/lib/format-currency"

export function Header() {
  const { filters, setFilters } = useAuth()
  const { transactions } = useTransactions()

  function handleChangeFilters<TFilter extends keyof TransactionsFiltersModel>(
    filter: TFilter
  ) {
    return (value: TransactionsFiltersModel[TFilter]) => {
      if (value === filters[filter]) return
      setFilters((prevState: any) => ({ ...prevState, [filter]: value }))
    }
  }

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
          initialSlide={filters.month}
          onSlideChange={(swiper) => {
            handleChangeFilters("month")(swiper.realIndex)
          }}
        >
          <SliderNavigation />

          {BR_MONTHS.map((month, index) => (
            <SwiperSlide key={month}>
              {({ isActive }) => (
                <SliderOption isActive={isActive} month={month} index={index} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  )
}
