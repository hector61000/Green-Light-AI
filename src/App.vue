<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Dashboard from './components/Dashboard.vue'
import BotInterface from './components/BotInterface.vue'

const currentBot = ref(null)
</script>

<template>
  <div class="app-container">
    <Sidebar @select-bot="currentBot = $event" />
    <main class="main-content">
      <header class="header">
        <h1>Green Light AI</h1>
      </header>
      <Dashboard v-if="!currentBot" />
      <BotInterface v-else :bot="currentBot" />
    </main>
  </div>
</template>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.header h1 {
  color: #2c3e50;
  font-size: 2rem;
  font-weight: bold;
}
</style>