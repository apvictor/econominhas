import { icons } from "lucide-react"

interface IconProps {
  name: keyof typeof icons
  size?: number
  className?: string
}

export function Icon({ name, size = 20, className, ...props }: IconProps) {
  const IconComponent = icons[name]
  return (
    <IconComponent
      className={className}
      size={size}
      strokeWidth={1.5}
      {...props}
    />
  )
}
