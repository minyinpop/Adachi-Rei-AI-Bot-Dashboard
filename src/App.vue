<script setup lang="ts">
  import ModelSelector from "@/components/ModelSelector.vue"
  import { useBot } from "@/composables/useBot/useBot.ts"
  // import { useBot_log } from "@/composables/useBot/log.ts"
  import BotStatus from "@/components/BotStatus.vue"
  // import LogViewer from "@/components/LogViewer.vue"

  const bot = useBot()
  // const log = useBot_log()
</script>

<template>
  <BotStatus
    v-bind:ai_bot="bot.ai_bot"
  />

  <ModelSelector
    v-on:change_model="bot.change_ai_model"
  />
</template>

<style scoped>

</style>
