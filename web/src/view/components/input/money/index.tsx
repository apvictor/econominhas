import { Input, InputProps } from "@/components/ui/input"
import React, { forwardRef } from "react"
import { NumericFormat, NumericFormatProps } from "react-number-format"

export const Money = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <NumericFormat
        className="flex h-9 w-full rounded-md border !border-transparent bg-transparent px-3 py-1 text-4xl font-bold shadow-sm transition-colors placeholder:text-white focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 text-center"
        {...props}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
        decimalScale={2}
      />
    )
  }
)

Money.displayName = "Money"
