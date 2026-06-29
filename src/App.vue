<script setup lang="ts">
  import ModelSelector from "@/components/ModelSelector.vue"
  import BotStatus from "@/components/BotStatus.vue"
  import LogViewer from "@/components/LogViewer.vue"
  import { useBotStore } from "@/stores/bot.ts"

  const bot = useBotStore()
</script>

<template>
  <BotStatus
    v-bind:ai_bot="bot.ai_bot"
  />

  <ModelSelector
    v-on:change_model="bot.change_ai_model"
  />

  <LogViewer/>
</template>

<style scoped>

</style>
