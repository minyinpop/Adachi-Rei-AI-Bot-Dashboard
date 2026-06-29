import type { BotStatus } from "@/types/BotStatus.ts"
import type { BotModel } from "@/types/BotModel.ts"

export interface BotInfo {
  name: string
  status: BotStatus
  model: BotModel
}
