import { Swiper, SwiperSlide } from "swiper/react"
import { SliderNavigation } from "./slider-navigation"
import { SliderOption } from "./slider-option"
import { Icon } from "@/view/components/icon"
import { Link } from "react-router-dom"
import { useAuth } from "@/shared/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useHome } from "../contexts"
import { formatCurrency } from "@/lib/format-currency"
import { getDynamicMonths } from "@/lib/get-dynamic-months"
import { cn } from "@/lib/utils"

export function Header() {
  const { user, filters, setFilters } = useAuth()
  const { transactionsSummary } = useHome()

  const months = getDynamicMonths(12)

  return (
    <header className="bg-gradient-to-b from-teal-950 to-zinc-950 p-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <Link to={"/profile"} className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage className="rounded-full" src={user?.picture} />
            <AvatarFallback className="h-10 w-10 rounded-full bg-teal-900 flex items-center justify-center font-bold uppercase">
              {user?.name[0]}
              {user?.name[1]}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-zinc-400 text-sm">Olá,</p>
            <p className="font-bold">{user?.name}</p>
          </div>
        </Link>
        <div className="flex gap-3">
          <button className="p-2 rounded-lg text-black bg-teal-500">
            <Icon name="Crown" className="stroke-2" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-1 text-center text-zinc-400 text-xs">
          <p>Total no mês</p>
          <strong>{formatCurrency(transactionsSummary?.balance)}</strong>
        </div>
        <div className="text-center flex-1 font-bold">
          <p className="text-sm">Saldo</p>
          <p
            className={cn(
              "text-2xl text-nowrap",
              transactionsSummary &&
                transactionsSummary?.total < 0 &&
                "text-red-500"
            )}
          >
            {formatCurrency(transactionsSummary?.total)}
          </p>
        </div>
        <div className="text-center text-zinc-400 text-xs flex-1">
          <p>Total previsto</p>
          <strong>
            {formatCurrency(transactionsSummary?.balanceForecast)}
          </strong>
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
