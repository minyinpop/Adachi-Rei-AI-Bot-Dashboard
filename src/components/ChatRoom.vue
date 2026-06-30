<script setup lang="ts">
  import { ask_bot } from "@/services/askBot.ts"
  import type { Ref } from 'vue'
  import { ref } from "vue"

  const message: Ref = ref<string>()

  async function on_click_ask_bot_button() {
    message.value = await ask_bot(message.value)
  }
</script>

<template>
  <div class="chat-room">
    <input v-model="message">
    <button v-on:click="on_click_ask_bot_button">
      發送文字
    </button>
  </div>
</template>

<style scoped>

</style>
