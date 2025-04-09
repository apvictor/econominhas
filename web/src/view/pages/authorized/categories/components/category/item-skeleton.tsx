import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export function ItemSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Button
          key={index}
          variant={"outline"}
          className="border border-zinc-800 p-1 rounded-lg flex items-center justify-start gap-1 w-full"
        >
          <div className="size-10 flex items-center justify-center">
            <Skeleton className="size-6 rounded-sm" />
          </div>
          <Skeleton className="w-20 h-3 rounded-full" />
        </Button>
      ))}
    </>
  )
}
