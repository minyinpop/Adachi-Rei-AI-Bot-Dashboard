<script setup lang="ts">
  import BotStatus from "@/components/BotStatus.vue";
  import { useBot } from "@/composables/useBot.ts"

  const bot = useBot()
  const { ai_bot, change_ai_model } = bot
</script>

<template>
  <BotStatus
    :ai_bot="ai_bot"
    @change_ai_bot="change_ai_model"
  />
</template>

<style scoped>

</style>
