<script setup lang="ts">
  import type { BotInfo } from "@/types/BotInfo.ts";
  import { computed } from "vue";

  const props = defineProps<{ ai_bot: BotInfo }>()

  const emit = defineEmits<{ change_ai_bot: [] }>()

  const statusText = computed(() => {
    switch (props.ai_bot.status)
    {
      case "ready":
      {
        return "🟢 準備就緒"
      }
      case "loading":
      {
        return "🟡 啟動中"
      }
      case "closed":
      {
        return "🔴 已關閉"
      }
      default:
      {
        return "⚪ 已離線"
      }
    }
  })

  const modelText = computed(() => {
    switch (props.ai_bot.model)
    {
      case "openai":
      {
        return "GPT 5.4"
      }
      case "ollama":
      {
        return "Gemma 3:27B"
      }
      default:
      {
        return "你怎麼選到這個模型的？"
      }
    }
  })

  function on_click_change_ai_bot() {
    emit("change_ai_bot")
  }
</script>

<template>
  <div class="bot-status">

    <h2>{{ props.ai_bot.name }}</h2>

    <p>Status：{{ statusText }}</p>

    <p>Model：{{ modelText }}</p>

    <p>Token：1024 / 65535</p>

    <button @click="on_click_change_ai_bot">
      更換 AI 模型
    </button>

  </div>
</template>

<style scoped>
.bot-status {
  width: 320px;

  padding: 20px;

  border: 1px solid #666;

  border-radius: 10px;
}
</style>
