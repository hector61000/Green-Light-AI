<script setup>
import { ref, onErrorCaptured } from 'vue'

const error = ref(null)

onErrorCaptured((err) => {
  error.value = err
  return false
})
</script>

<template>
  <div v-if="error" class="error-container">
    <h2>عذراً، حدث خطأ</h2>
    <p>{{ error.message }}</p>
    <button @click="error = null">حاول مرة أخرى</button>
  </div>
  <slot v-else></slot>
</template>

<style scoped>
.error-container {
  padding: 2rem;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>