<script setup lang="ts">
  import BotStatus from "@/components/BotStatus.vue"
  import { useBot } from "@/composables/useBot.ts"

  const bot = useBot()
</script>

<template>
  <BotStatus
    :ai_bot="bot.ai_bot"
    @change_ai_bot="bot.change_ai_model"
  />
</template>

<style scoped>

</style>
