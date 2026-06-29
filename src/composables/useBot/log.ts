import type { BotLog } from "@/types/BotLog.ts"
import { type Reactive, reactive } from "vue"

export const logs: Reactive<BotLog[]> = reactive<BotLog[]>([])

export function add_log(message: string) {
  const new_log: BotLog = {
    timestamp: new Date(),
    message: message
  }

  logs.push(new_log)
}
