<template>
  <aside class="sidebar">
    <div class="bots-list">
      <div v-for="bot in bots" 
           :key="bot.id" 
           class="bot-card"
           :class="{ 'active': selectedBot?.id === bot.id }"
           @click="selectBot(bot)">
        <div class="bot-image-container">
          <img :src="bot.image" :alt="bot.name" class="bot-image">
          <div class="bot-glow" :class="{ 'active': selectedBot?.id === bot.id }"></div>
        </div>
        <h3 class="bot-name">{{ bot.name }}</h3>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  selectedBot: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['select-bot'])

const bots = ref([
  {
    id: 1,
    name: 'AdGenius',
    image: '/images/AdGenius.png',
    introduction: 'مرحباً! أنا AdGenius، مساعدك في إدارة وتحسين حملاتك الإعلانية.',
    features: ['تحليل أداء الحملات', 'تحسين الاستهداف', 'إدارة الميزانية']
  },
  {
    id: 2,
    name: 'AI Explorer',
    image: '/images/AI Explorer.png',
    introduction: 'مرحباً! أنا AI Explorer، مستكشف عالم الذكاء الاصطناعي.',
    features: ['شرح المفاهيم', 'تطبيق النماذج', 'تحليل البيانات']
  },
  {
    id: 3,
    name: 'AnalyzePro',
    image: '/images/AnalyzePro.png',
    introduction: 'مرحباً! أنا AnalyzePro، محلل البيانات المحترف.',
    features: ['تحليل إحصائي', 'تقارير تفاعلية', 'تنبؤات مستقبلية']
  },
  {
    id: 4,
    name: 'CyberGuard',
    image: '/images/CyberGuard.png',
    introduction: 'مرحباً! أنا CyberGuard، حارس أمنك الرقمي.',
    features: ['حماية البيانات', 'كشف التهديدات', 'حلول أمنية']
  },
  {
    id: 5,
    name: 'DesignMate',
    image: '/images/DesignMate.png',
    introduction: 'مرحباً! أنا DesignMate، شريكك في التصميم.',
    features: ['تصميم واجهات', 'تحرير صور', 'تصاميم إبداعية']
  },
  {
    id: 6,
    name: 'DevBuddy',
    image: '/images/DevBuddy.png',
    introduction: 'مرحباً! أنا DevBuddy، صديقك في عالم البرمجة.',
    features: ['كتابة الكود', 'تصحيح الأخطاء', 'حلول برمجية']
  },
  {
    id: 7,
    name: 'KnowledgeBot',
    image: '/images/KnowledgeBot.png',
    introduction: 'مرحباً! أنا KnowledgeBot، موسوعتك المعرفية.',
    features: ['إجابة الأسئلة', 'بحث المعلومات', 'شروحات تفصيلية']
  },
  {
    id: 8,
    name: 'PicGenie',
    image: '/images/PicGenie.png',
    introduction: 'مرحباً! أنا PicGenie، خبير معالجة الصور.',
    features: ['تحسين الصور', 'إضافة تأثيرات', 'تصحيح العيوب']
  },
  {
    id: 9,
    name: 'ProjectFinder',
    image: '/images/ProjectFinder.png',
    introduction: 'مرحباً! أنا ProjectFinder، مدير مشاريعك المحترف.',
    features: ['إدارة المشاريع', 'تنظيم المهام', 'متابعة التقدم']
  },
  {
    id: 10,
    name: 'SmartTutor',
    image: '/images/SmartTutor.png',
    introduction: 'مرحباً! أنا SmartTutor، معلمك الذكي.',
    features: ['شرح المفاهيم', 'تمارين تفاعلية', 'تقييم التقدم']
  }
])

function selectBot(bot) {
  emit('select-bot', bot)
}
</script>

<style scoped>
.sidebar {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #6366f1 #f0f0f0;
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #6366f1;
  border-radius: 3px;
}

.bots-list {
  display: grid;
  gap: 1.5rem;
}

.bot-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  border: 2px solid transparent;
  overflow: hidden;
}

.bot-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.bot-card.active {
  border-color: #6366f1;
  background: #f0f7ff;
}

.bot-image-container {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 1rem;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f4ff, #e5e7ff);
}

.bot-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.bot-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    rgba(99, 102, 241, 0.3) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.bot-glow.active {
  opacity: 1;
  animation: glowPulse 2s infinite;
}

.bot-card:hover .bot-image {
  transform: scale(1.05);
}

.bot-name {
  margin: 0;
  font-size: 1.2rem;
  color: #1a202c;
  font-weight: 600;
}

@keyframes glowPulse {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.3;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    max-height: none;
    padding: 1rem;
  }
  
  .bots-list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .bot-card {
    padding: 1rem;
  }
  
  .bot-image {
    padding: 1rem;
  }
  
  .bot-name {
    font-size: 1.1rem;
  }
}
</style>