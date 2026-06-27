import type { BotInfo } from "@/types/BotInfo.ts"
import { reactive } from "vue"

export function useBot() {
  const ai_bot = reactive<BotInfo>({
    name: "足立レイ Discord Bot",
    status: "closed",
    model: "ollama"
  })

  async function change_ai_model()
  {
    switch (ai_bot.model)
    {
      case "openai":
      {
        ai_bot.status = "closed"
        ai_bot.model = "ollama"

        await delay(300)

        ai_bot.status = "loading"

        await delay(3000)

        ai_bot.status = "ready"
        break
      }
      case "ollama":
      {
        ai_bot.status = "closed"
        ai_bot.model = "openai"

        await delay(300)

        ai_bot.status = "loading"

        await delay(1000)

        ai_bot.status = "ready"
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
