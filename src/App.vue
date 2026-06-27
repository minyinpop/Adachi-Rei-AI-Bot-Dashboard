<script setup lang="ts">
  import ModelSelector from "@/components/ModelSelector.vue";
  import BotStatus from "@/components/BotStatus.vue"
  import { useBot } from "@/composables/useBot.ts"

  const bot = useBot()
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
