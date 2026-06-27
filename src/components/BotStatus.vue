<script setup lang="ts">
  interface ai_bot_info {
    name: string
    status: string
    model: string
  }

  const props = defineProps<{ ai_bot: ai_bot_info }>()

  const emit = defineEmits<{ change_ai_bot: [] }>()

  function on_click_change_ai_bot() {
    emit("change_ai_bot")
  }
</script>

<template>
  <div class="bot-status">

    <h2>{{ props.ai_bot.name }}</h2>

    <p>Status：{{ props.ai_bot.status }}</p>

    <p>Model：{{ props.ai_bot.model }}</p>

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
