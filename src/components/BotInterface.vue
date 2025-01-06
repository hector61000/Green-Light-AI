<script setup>
import { ref } from 'vue'

const props = defineProps({
  bot: {
    type: Object,
    required: true
  }
})

const input = ref('')
const messages = ref([])

const sendMessage = () => {
  if (!input.value.trim()) return
  
  messages.value.push({
    type: 'user',
    content: input.value
  })
  
  // هنا سيتم إضافة المنطق الخاص بكل بوت
  setTimeout(() => {
    messages.value.push({
      type: 'bot',
      content: `مرحباً! أنا ${props.bot.name}. كيف يمكنني مساعدتك؟`
    })
  }, 1000)
  
  input.value = ''
}
</script>

<template>
  <div class="bot-interface">
    <div class="bot-header">
      <span class="bot-icon">{{ bot.icon }}</span>
      <h2>{{ bot.name }}</h2>
    </div>
    
    <div class="messages">
      <div v-for="(message, index) in messages" 
           :key="index" 
           :class="['message', message.type]">
        {{ message.content }}
      </div>
    </div>
    
    <div class="input-area">
      <input v-model="input" 
             @keyup.enter="sendMessage" 
             placeholder="اكتب رسالتك هنا..." />
      <button @click="sendMessage">إرسال</button>
    </div>
  </div>
</template>

<style scoped>
.bot-interface {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
}

.bot-header {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bot-icon {
  font-size: 1.5rem;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.message {
  margin: 0.5rem 0;
  padding: 0.75rem;
  border-radius: 8px;
  max-width: 80%;
}

.message.user {
  background-color: #e3f2fd;
  margin-left: auto;
}

.message.bot {
  background-color: #f5f5f5;
  margin-right: auto;
}

.input-area {
  padding: 1rem;
  border-top: 1px solid #eee;
  display: flex;
  gap: 0.5rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #34495e;
}
</style>