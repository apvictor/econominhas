import transactions from "@/assets/transactions.svg"
import { useGlobal } from "@/shared/contexts/global-context"
import { Icon } from "@/view/components/icon"
import { Link, useNavigate } from "react-router-dom"

export function ActionButtons() {
  const navigate = useNavigate()
  const { setTransaction } = useGlobal()

  return (
    <>
      <section className="flex items-center justify-between">
        <button
          className="flex flex-col items-center"
          onClick={() => {
            setTransaction(undefined)
            navigate("/transactions/form")
          }}
        >
          <div className="flex items-center justify-center bg-zinc-900 rounded-full size-14">
            <img src={transactions} alt="Transações" />
          </div>
          <p className="text-[10px] font-light">Transações</p>
        </button>
        <Link to={"/budgets"} className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-zinc-900 rounded-full size-14">
            <Icon name="Percent" />
          </div>
          <p className="text-[10px] font-light">Orçamentos</p>
        </Link>
        <Link to={"/accounts"} className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-zinc-900 rounded-full size-14">
            <Icon name="Landmark" />
          </div>
          <p className="text-[10px] font-light">Contas</p>
        </Link>
        <Link to={"/categories"} className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-zinc-900 rounded-full size-14">
            <Icon name="Library" />
          </div>
          <p className="text-[10px] font-light">Categorias</p>
        </Link>
        <button className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-zinc-900 rounded-full size-14">
            <Icon name="Goal" />
          </div>
          <p className="text-[10px] font-light">Metas</p>
        </button>
      </section>
    </>
  )
}
