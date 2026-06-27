import type { BotModel } from "@/types/BotModel.ts"
import type { BotStatus } from "@/types/BotStatus"

export interface BotInfo {
  name: string
  status: BotStatus
  model: BotModel
}
