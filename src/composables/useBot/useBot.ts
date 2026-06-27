import type { BotModel } from "@/types/BotModel.ts"
import type { BotInfo } from "@/types/BotInfo.ts"
import { delay } from "@/utils/delay.ts"
import { reactive } from "vue"

export function useBot() {
  const ai_bot = reactive<BotInfo>({
    name: "足立レイ Discord Bot",
    status: "closed",
    model: "ollama"
  })

  async function change_ai_model(model: BotModel)
  {
    if (model === ai_bot.model)
    {
      return
    }

    const is_openai = model === "openai"

    ai_bot.status = "closed"
    ai_bot.model = model

    await delay(500)

    ai_bot.status = "loading"

    await delay(is_openai ? 1500 : 250)

    ai_bot.status = "ready"
  }

  return {
    ai_bot,
    change_ai_model
  }
}
