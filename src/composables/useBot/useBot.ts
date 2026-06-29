import { add_log } from "@/composables/useBot/log.ts"
import type { BotModel } from "@/types/BotModel.ts"
import type { BotInfo } from "@/types/BotInfo.ts"
import { delay } from "@/utils/delay.ts"
import { reactive, watch } from "vue"

const ai_bot = reactive<BotInfo>({
  name: "足立レイ Discord Bot",
  status: "closed",
  model: "ollama"
})

watch(
  () => ai_bot.status,
  (new_status, old_status) => {
    add_log(`${old_status} -> ${new_status}`)
  }
)

export function useBot() {
  async function change_ai_model(model: BotModel)
  {
    if (model === ai_bot.model)
    {
      return
    }

    const is_openai: boolean = model === "openai"

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
