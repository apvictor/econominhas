import { Icon } from "@/view/components/icon"
import { useController } from "./use-controller"

export function Feedback() {
  const { handleFeedback } = useController()

  return (
    <div className="p-5 bg-zinc-900 rounded-lg flex flex-col items-center gap-5 justify-center w-full">
      <div className="flex flex-col justify-center w-full items-center gap-3">
        <div className="bg-black flex flex-col items-center rounded-full p-3">
          <Icon name="Star" className="text-zinc-100 fill-zinc-100" size={16} />
          <div className="flex">
            <Icon
              name="Star"
              className="text-zinc-500 fill-zinc-500"
              size={16}
            />
            <Icon
              name="Star"
              className="text-zinc-500 fill-zinc-500"
              size={16}
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg text-nowrap text-center">
            Você está gostando do{" "}
            <span className="text-teal-500">econominhas</span>?
          </h4>
          <p className="text-xs text-zinc-400">
            Queremos muito saber como está sendo sua experiência com nosso
            aplicativo.
          </p>
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
    </div>
  )
}
