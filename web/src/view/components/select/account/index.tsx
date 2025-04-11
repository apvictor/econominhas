import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select"
import { FixedSizeGrid as Grid } from "react-window"
import { useEffect, useState } from "react"
import { useController } from "./use-controller"
import { Loader } from "../../loader"
import { AccountsModel } from "@/shared/models/accounts"
import { banks } from "../bank"
import { Link } from "react-router-dom"
import { Icon } from "../../icon"

interface Props {
  value?: number
  columnCount?: number
  onSelect: (accountId: number) => void
}
export function AccountSelect({ onSelect, columnCount = 2, value }: Props) {
  const { accounts } = useController()

  const [selected, setSelected] = useState<AccountsModel | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (accounts && value) {
      const account = accounts.find((a: AccountsModel) => a.id === value)
      setSelected(account || null)
    }
  }, [accounts, value])

  if (!accounts) return <Loader />

  const itemHeight = 70
  const itemWidth = 150
  const rowCount = Math.ceil(accounts.length / columnCount)

  const handleSelect = (account: AccountsModel) => {
    setSelected(account)
    onSelect(account.id)
    setIsOpen(false)
  }

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex
    const account = accounts[index]

    if (!account) return null

    const bankProps = banks.find((b) => b.name === account.bank)

    return (
      <button
        className="flex items-center justify-center gap-2"
        style={style}
        onClick={() => handleSelect(account)}
      >
        <img
          src={bankProps?.img}
          alt={account.bank}
          className="size-8 object-contain rounded-full"
        />
        <p className="text-nowrap">{account.name}</p>
      </button>
    )
  }

  return (
    <Select open={isOpen} onOpenChange={setIsOpen}>
      <SelectTrigger className="flex items-center gap-2">
        {selected ? (
          <div className="flex items-center gap-2">
            <img
              src={banks.find((b) => b.name === selected.bank)?.img}
              alt={selected.bank}
              className="size-6 object-contain rounded-full"
            />
            <p className="text-nowrap">{selected.name}</p>
          </div>
        ) : (
          <SelectValue placeholder="Selecione uma conta" />
        )}
      </SelectTrigger>
      <SelectContent className="max-w-fit overflow-y-auto p-2">
        {accounts.length > 0 ? (
          <Grid
            columnCount={columnCount}
            rowCount={rowCount}
            columnWidth={itemWidth}
            rowHeight={itemHeight}
            height={80}
            width={itemWidth * columnCount}
          >
            {Cell}
          </Grid>
        ) : (
          <Link
            to={"/accounts"}
            className="flex items-center justify-center gap-2"
          >
            <Icon name="Plus" />
            <span>Cadastre uma conta</span>
          </Link>
        )}
      </SelectContent>
    </Select>
  )
}
