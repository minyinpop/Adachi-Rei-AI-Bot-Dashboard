import type { BotInfo } from "@/types/BotInfo.ts"
import { BotStatus } from "@/types/BotStatus.ts"
import { BotModel } from "@/types/BotModel.ts"
import { reactive } from "vue"

export function useBot() {
  const ai_bot = reactive<BotInfo>({
    name: "足立レイ Discord Bot",
    status: BotStatus.Closed,
    model: BotModel.Ollama
  })

  async function change_ai_model()
  {
    switch (ai_bot.model)
    {
      case BotModel.Ollama:
      {
        ai_bot.status = BotStatus.Closed
        ai_bot.model = BotModel.OpenAI

        await delay(300)

        ai_bot.status = BotStatus.Loading

        await delay(1000)

        ai_bot.status = BotStatus.Ready
        break
      }
      case BotModel.OpenAI:
      {
        ai_bot.status = BotStatus.Closed
        ai_bot.model = BotModel.Ollama

        await delay(300)

        ai_bot.status = BotStatus.Loading

        await delay(3000)

        ai_bot.status = BotStatus.Ready
        break
      }
    }
  }

  function delay(ms: number) : Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return {
    ai_bot,
    change_ai_model
  }
}
