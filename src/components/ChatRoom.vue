<script setup lang="ts">
  import { ref } from "vue"

  const message = ref<string>()

  function show_text() {
    console.log(message.value)
    message.value = ""
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
