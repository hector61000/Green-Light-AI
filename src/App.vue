<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import ChatInterface from './components/ChatInterface.vue'

const selectedBot = ref(null)
const isMinimized = ref(false)

const handleBotSelect = (bot) => {
  selectedBot.value = { ...bot }
  isMinimized.value = false
}

const handleMinimize = (minimized) => {
  isMinimized.value = minimized
}

const handleClose = () => {
  selectedBot.value = null
  isMinimized.value = false
}

// تعيين البوت الافتراضي عند تحميل التطبيق
onMounted(() => {
  // سيتم تعيين البوت الافتراضي من خلال Sidebar
})
</script>

<template>
  <div class="app">
    <header class="main-header">
      <h1 class="platform-name">Green Light AI</h1>
      <img src="/images/4100.png" alt="Green Light AI" class="header-image">
    </header>

    <div class="main-content">
      <div class="video-section">
        <div class="video-container">
          <video 
            controls 
            class="promo-video"
            preload="auto"
            width="100%"
            height="auto"
          >
            <source src="/video/Ai.mp4" type="video/mp4">
            عذراً، متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
      </div>

      <div class="bots-section">
        <Sidebar 
          :selected-bot="selectedBot"
          @select-bot="handleBotSelect" 
        />
        <div v-if="selectedBot" class="bot-windows">
          <ChatInterface 
            v-show="!isMinimized"
            :key="selectedBot.id"
            :selected-bot="selectedBot" 
            class="bot-window"
            @minimize="handleMinimize"
            @close="handleClose"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  padding: 1rem;
}

.main-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.platform-name {
  color: white;
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.header-image {
  max-width: 100%;
  height: 120px;
  object-fit: contain;
  margin-top: 1rem;
}

.main-content {
  display: grid;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.video-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.video-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.promo-video {
  display: block;
  width: 100%;
  height: auto;
  background: #000;
}

.bots-section {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.bot-windows {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.bot-window {
  flex: 1;
  min-height: 500px;
}

@media (max-width: 1024px) {
  .bots-section {
    grid-template-columns: 1fr;
  }
  
  .bot-window {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .app {
    padding: 0.5rem;
  }
  
  .main-header {
    margin-bottom: 1rem;
  }
  
  .platform-name {
    font-size: 2rem;
  }
  
  .header-image {
    height: 80px;
  }
  
  .video-section,
  .bots-section {
    padding: 1rem;
  }
}
</style>