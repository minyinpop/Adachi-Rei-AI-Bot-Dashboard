<script setup lang="ts">
  import { logs } from "@/composables/useBot/log.ts"
</script>

<template>
  <div class="log-viewer">
    <p v-for="log in logs"
       v-bind:key="log.timestamp.toLocaleString()">
      【{{ log.timestamp.toLocaleString() }}】{{ log.message }}
    </p>
  </div>
</template>

<style scoped>

</style>
