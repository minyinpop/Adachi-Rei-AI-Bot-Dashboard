<script setup lang="ts">
  import { ref } from "vue"

  const message = ref<string>()

  async function show_text() {
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message.value
      })
    })

    const data = await response.json()

    message.value = data.message
  }
</script>

<template>
  <div class="chat-room">
    <input v-model="message">
    <button v-on:click="show_text">
      顯示文字
    </button>
  </div>
</template>

<style scoped>

</style>
