import { Select, SelectTrigger, SelectContent } from "@/components/ui/select"
import { FixedSizeGrid as Grid } from "react-window"
import { useEffect, useState } from "react"
import { Icon } from "../../icon"
import { icons } from "lucide-react"

interface Bank {
  name: string
  img: string
}
export const banks: Bank[] = [
  { name: "Banco", img: "/banks/banco.svg" },
  { name: "Carteira", img: "/banks/carteira.svg" },
  { name: "Cofrinho", img: "/banks/cofrinho.svg" },
  { name: "BB", img: "/banks/bb.png" },
  { name: "BMG", img: "/banks/bmg.png" },
  { name: "Bradesco", img: "/banks/bradesco.png" },
  { name: "BTG", img: "/banks/btgpactual.png" },
  { name: "C6 Bank", img: "/banks/c6bank.png" },
  { name: "Caixa", img: "/banks/caixa.png" },
  { name: "Inter", img: "/banks/intermedium.png" },
  { name: "Itaú", img: "/banks/itau.png" },
  { name: "Neon", img: "/banks/neon.png" },
  { name: "Next", img: "/banks/next.png" },
  { name: "Nomad", img: "/banks/nomad.png" },
  { name: "Nubank", img: "/banks/nubank.png" },
  { name: "Original", img: "/banks/original.png" },
  { name: "Pan", img: "/banks/pan.png" },
  { name: "PicPay", img: "/banks/picpay.png" },
  { name: "Rico", img: "/banks/rico.png" },
  { name: "Safra", img: "/banks/safra.png" },
  { name: "Santander", img: "/banks/santander.png" },
  { name: "Votorantim", img: "/banks/votorantim.png" },
  { name: "Will", img: "/banks/will-bank.png" },
  { name: "XP", img: "/banks/xp.png" },
]

interface Props {
  placeholder?: string
  value?: keyof typeof icons | string
  onSelect: (bank: string) => void
}
export function BankSelect({ onSelect, value, placeholder }: Props) {
  const [selected, setSelected] = useState<Bank | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (value) {
      const bank = banks.find((b) => b.name === value)
      setSelected(bank || null)
    }
  }, [value])

  const columnCount = 4
  const itemHeight = 80
  const itemWidth = 80
  const rowCount = Math.ceil(banks.length / columnCount)

  const handleSelect = (bank: Bank) => {
    setSelected(bank)
    onSelect(bank.name)
    setIsOpen(false)
  }

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex
    const bank = banks[index]

    if (!bank) return null

    return (
      <button
        style={style}
        className="rounded"
        onClick={() => handleSelect(bank)}
      >
        <div className="flex flex-col items-center size-12">
          <img
            src={bank.img}
            alt={bank.name}
            className="size-12 object-contain rounded"
          />
          <span className="text-xs">{bank.name}</span>
        </div>
      </button>
    )
  }

  return (
    <Select open={isOpen} onOpenChange={setIsOpen}>
      <SelectTrigger className="flex items-center gap-2 border">
        {selected ? (
          <div className="flex items-center gap-2">
            <img
              src={selected.img}
              alt={selected.name}
              className="size-6 object-contain rounded-full"
            />
            {selected.name}
          </div>
        ) : (
          <>
            <Icon name="CirclePlus" className="size-6 text-zinc-500" />
            {placeholder}
          </>
        )}
      </SelectTrigger>
      <SelectContent className="max-w-fit overflow-y-auto p-4">
        <Grid
          columnCount={columnCount}
          rowCount={rowCount}
          columnWidth={itemWidth}
          rowHeight={itemHeight}
          height={300}
          width={itemWidth * columnCount}
        >
          {Cell}
        </Grid>
      </SelectContent>
    </Select>
  )
}
