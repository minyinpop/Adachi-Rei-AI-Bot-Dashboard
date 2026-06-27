<script setup lang="ts">
  import type {BotModel} from "@/types/BotModel.ts";

  const emit = defineEmits<{ change_model: [model: BotModel] }>()

  function on_click_change_model_button(model: BotModel) {
    emit("change_model", model)
  }
</script>

<template>
  <div class="bot-model-change">
    <h2>更換模型</h2>
    <button @click="on_click_change_model_button('openai')">切換至 OpenAI</button>
    <button @click="on_click_change_model_button('ollama')">切換至 Ollama</button>
  </div>
</template>

<style scoped>

</style>
