import { Icon } from "@/view/components/icon"
import { useController } from "./use-controller"

export function Feedback() {
  const { handleFeedback, isSuccess, feedback } = useController()

  if (feedback && isSuccess) {
    return (
      <div className="p-5 bg-zinc-900 rounded-lg flex flex-col gap-4 items-center justify-center text-center">
        <div className="bg-black flex flex-col items-center rounded-full p-3">
          <Icon
            name="Heart"
            className="text-red-400 fill-red-500 animate-pulse"
            size={24}
          />
        </div>
        <p className="text-zinc-200 font-medium">Obrigado pelo seu feedback!</p>
      </div>
    )
  }

  return (
    <div className="p-5 bg-zinc-900 rounded-lg flex flex-col items-center gap-5 justify-center w-full">
      <div className="flex flex-col justify-center w-full items-center gap-3">
        <div className="bg-black flex flex-col items-center rounded-full p-3">
          <Icon
            name="Star"
            className="text-zinc-100 fill-zinc-100 animate-pulse"
            size={16}
          />
          <div className="flex">
            <Icon
              name="Star"
              className="text-zinc-200 fill-zinc-200 animate-pulse"
              size={16}
            />
            <Icon
              name="Star"
              className="text-zinc-500 fill-zinc-500 animate-pulse"
              size={16}
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg text-nowrap text-center">
            Você está gostando do{" "}
            <span className="text-teal-500">econominhas</span>?
          </h4>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 w-full text-center">
        <button
          onClick={() => handleFeedback({ value: false })}
          className="border border-zinc-600 rounded-lg p-3 flex-1 text-nowrap flex flex-col items-center justify-center"
        >
          <span className="text-4xl">🙁</span>
          <span>Não gostei</span>
        </button>
        <button
          onClick={() => handleFeedback({ value: true })}
          className="border border-zinc-600 rounded-lg p-3 flex-1 text-nowrap flex flex-col items-center justify-center"
        >
          <span className="text-4xl">😍</span>
          <span>Estou amando!</span>
        </button>
      </div>

      <p className="text-xs text-zinc-400">
        Queremos muito saber como está sendo sua experiência com nosso
        aplicativo.
      </p>
    </div>
  )
}
