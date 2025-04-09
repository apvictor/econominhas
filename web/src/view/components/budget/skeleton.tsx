import { Skeleton } from "@/components/ui/skeleton"

export function ItemSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="bg-zinc-900 p-3 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center justify-center gap-3">
            <Skeleton className="size-10 rounded-sm" />
            <div className="space-y-1">
              <Skeleton className="w-20 h-2.5 rounded-full" />
              <Skeleton className="w-20 h-2.5 rounded-full" />
            </div>
          </div>
          <div className="space-y-1">
            <Skeleton className="w-20 h-2.5 rounded-full" />
            <Skeleton className="w-20 h-2.5 rounded-full" />
          </div>
        </div>
      ))}
    </>
  )
}
