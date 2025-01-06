<template>
  <div class="chat-interface" v-if="selectedBot">
    <div class="chat-header">
      <div class="bot-info">
        <img :src="selectedBot.image" :alt="selectedBot.name" class="bot-avatar">
        <span class="bot-name">{{ selectedBot.name }}</span>
      </div>
      <div class="header-controls">
        <button class="control-btn minimize" @click="minimizeChat">_</button>
        <button class="control-btn close" @click="closeChat">×</button>
      </div>
    </div>
    
    <div class="chat-messages" ref="messagesContainer">
      <div class="video-wrapper">
        <video
          ref="videoEl"
          class="video-element"
          controls
          preload="auto"
          width="100%"
          height="auto"
          autoplay
          muted
          loop
        >
          <source src="/video/Ai.mp4" type="video/mp4">
          المتصفح لا يدعم تشغيل الفيديو
        </video>
      </div>
      <div v-for="(message, index) in messages" 
           :key="index"
           :class="['message', message.type]">
        <div class="message-content">{{ message.text }}</div>
      </div>
    </div>

    <div class="chat-input">
      <textarea 
        v-model="userInput"
        @keyup.enter.prevent="sendMessage"
        placeholder="اكتب رسالتك هنا..."
        rows="1"
      ></textarea>
      <button class="send-btn" @click="sendMessage">
        <span class="send-icon">↑</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import VideoPlayer from './VideoPlayer.vue'

const props = defineProps({
  selectedBot: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['minimize', 'close'])

const messages = ref([])
const userInput = ref('')
const messagesContainer = ref(null)
const isMinimized = ref(false)

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const minimizeChat = () => {
  isMinimized.value = !isMinimized.value
  emit('minimize', isMinimized.value)
}

const closeChat = () => {
  emit('close')
}

watch(() => props.selectedBot, async (newBot) => {
  if (newBot) {
    messages.value = []
    await nextTick()
    messages.value.push({
      type: 'bot',
      text: newBot.introduction
    })
    await scrollToBottom()
  }
}, { immediate: true })

onMounted(async () => {
  if (props.selectedBot) {
    await scrollToBottom()
  }
  console.log('مسار الفيديو: /video/Ai.mp4')
})

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  const messageText = userInput.value
  userInput.value = ''

  messages.value.push({
    type: 'user',
    text: messageText
  })

  await scrollToBottom()

  setTimeout(async () => {
    messages.value.push({
      type: 'bot',
      text: 'يسعدني مساعدتك! كيف يمكنني خدمتك اليوم؟'
    })
    await scrollToBottom()
  }, 1000)
}
</script>

<style scoped>
@import '@/assets/fonts.css';

.chat-interface {
  font-family: 'Cairo', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.bot-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bot-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.bot-name {
  font-weight: 600;
  color: #1a202c;
}

.header-controls {
  display: flex;
  gap: 0.5rem;
}

.control-btn {
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  color: white;
}

.minimize {
  background: #eab308;
}

.minimize:hover {
  background: #ca8a04;
}

.close {
  background: #ef4444;
}

.close:hover {
  background: #dc2626;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1);
  -webkit-overflow-scrolling: touch;
}

.message {
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  line-height: 1.5;
}

.message.user {
  align-self: flex-end;
  background: #6366f1;
  color: white;
}

.message.bot {
  align-self: flex-start;
  background: #f1f5f9;
  color: #1a202c;
}

.video-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.video-element {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.chat-input {
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

textarea {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  resize: none;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.25rem;
  direction: rtl;
}

textarea:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
}

.send-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.send-btn:hover {
  background: #4f46e5;
}

.send-icon {
  font-size: 1.25rem;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

@media (max-width: 768px) {
  .chat-header {
    padding: 0.75rem;
  }
  
  .bot-avatar {
    width: 32px;
    height: 32px;
  }
  
  .message {
    max-width: 90%;
  }
  
  .chat-input {
    padding: 0.75rem;
  }
}
</style>
