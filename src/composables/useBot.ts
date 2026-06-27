import type { BotInfo } from "@/types/BotInfo.ts"
import { BotStatus } from "@/types/BotStatus.ts"
import { BotModel } from "@/types/BotModel.ts"
import { reactive } from "vue"

export function useBot() {
  const ai_bot = reactive<BotInfo>({
    name: "足立レイ Discord Bot",
    status: BotStatus.closed,
    model: BotModel.ollama
  })

  async function change_ai_model()
  {
    switch (ai_bot.model)
    {
      case BotModel.ollama:
      {
        ai_bot.status = BotStatus.closed
        ai_bot.model = BotModel.openai

        await delay(300)

        ai_bot.status = BotStatus.loading

        await delay(1000)

        ai_bot.status = BotStatus.ready
        break
      }
      case BotModel.openai:
      {
        ai_bot.status = BotStatus.closed
        ai_bot.model = BotModel.ollama

        await delay(300)

        ai_bot.status = BotStatus.loading

        await delay(3000)

        ai_bot.status = BotStatus.ready
        break
      }
    }
  }

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return {
    ai_bot,
    change_ai_model
  }
}
