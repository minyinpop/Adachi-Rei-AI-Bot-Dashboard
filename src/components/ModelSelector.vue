<script setup lang="ts">
  import type { ModelChangeButton } from "@/types/ModelChangeButton.ts"
  import type { BotModel } from "@/types/BotModel.ts"

  const emit = defineEmits<{ change_model: [model: BotModel], load_from_backend: [] }>()

  function on_click_change_model_button(model: BotModel) {
    emit("change_model", model)
  }

  function on_click_load_from_backend_button() {
    emit("load_from_backend")
  }

  const models: ModelChangeButton[] = [
    {
      button_title: "切換至 OpenAI",
      button_model: "openai"
    },
    {
      button_title: "切換至 Ollama",
      button_model: "ollama"
    }
  ]
</script>

<template>
  <div class="bot-model-change">
    <h2>更換模型</h2>
    <button v-for="model in models"
            v-bind:key="model.button_model"
            v-on:click="on_click_change_model_button(model.button_model)">
      {{ model.button_title }}
    </button>
    <button v-on:click="on_click_load_from_backend_button">
      從後端讀取 AI Bot 資料
    </button>
  </div>
</template>

<style scoped>

</style>
