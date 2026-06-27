import type { BotModel } from "@/types/BotModel.ts"
import type { BotStatus } from "@/types/BotStatus.ts"

export interface BotInfo {
  name: string
  status: BotStatus
  model: BotModel
}
