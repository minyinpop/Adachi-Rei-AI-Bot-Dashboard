<script setup lang="ts">
  import { reactive } from "vue";
  import BotStatus from "@/components/BotStatus.vue";

  let is_openai: boolean = false;

  const bot_closed: string = "🔴 關閉中"
  const bot_loading: string = "🟡 啟動中"
  const bot_ready: string = "🟢 運作中"

  const openai_bot = "GPT 5.4"
  const ollama_bot = "Gemma 3:27B"

  const ai_bot = reactive({
    name: "足立レイ Discord Bot",
    status: bot_closed,
    model: ollama_bot
  })

  async function change_ai_model()
  {
    is_openai = !is_openai;

    ai_bot.status = bot_closed;

    await delay(500)

    ai_bot.status = bot_loading;

    if (is_openai) {
      await delay(1000)

      ai_bot.status = bot_ready
      ai_bot.model = openai_bot
    }
    else {
      await delay(3000)

      ai_bot.status = bot_ready
      ai_bot.model = ollama_bot
    }
  }

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
</script>

<template>
  <BotStatus
    :ai_bot="ai_bot"
    @change_ai_bot="change_ai_model"
  />
</template>

<style scoped>

</style>
