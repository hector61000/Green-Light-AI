<script setup>
import { ref } from 'vue'
import ChatInterface from './ChatInterface.vue'

const props = defineProps({
  bot: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select-bot'])

const showChat = ref(false)

function toggleChat() {
  showChat.value = !showChat.value
}

function selectBot() {
  emit('select-bot', props.bot)
}

function getEgyptianDescription(botName) {
  const descriptions = {
    'AdGenius': 'أنا متخصص في التسويق والإعلانات، هساعدك توصل لعملاءك بأفضل طريقة',
    'AI Explorer': 'أنا خبير في الذكاء الاصطناعي، هنكتشف مع بعض أحدث التقنيات',
    'AnalyzePro': 'أنا محلل البيانات بتاعك، هحول الأرقام لمعلومات مفيدة ليك',
    'CyberGuard': 'أنا مسؤول عن حماية بياناتك، متقلقش أنا معاك',
    'DesignMate': 'أنا مصمم محترف، هخلي شغلك يطلع بأحلى شكل',
    'DevBuddy': 'أنا مبرمج صاحبك، هساعدك في كل حاجة تخص البرمجة',
    'KnowledgeBot': 'أنا موسوعة معلومات كاملة، اسأل وأنا أجاوب',
    'PicGenie': 'أنا خبير الصور بتاعك، هظبطلك صورك وتطلع زي الفل',
    'ProjectFinder': 'أنا مدير المشاريع بتاعك، هنظملك شغلك كله',
    'SmartTutor': 'أنا المدرس بتاعك، هبسطلك كل حاجة صعبة'
  }
  return descriptions[botName]
}

function getEgyptianTasks(botName) {
  const tasks = {
    'AdGenius': [
      'هعملك حملات إعلانية تجنن',
      'هخلي إعلاناتك توصل للناس الصح',
      'هديك تقارير وتحليلات عن نتايج الحملات'
    ],
    'AI Explorer': [
      'هنكتشف أحدث تقنيات الذكاء الاصطناعي',
      'هحللك الأدوات المناسبة لشغلك',
      'هقدملك حلول ذكية لمشاكلك'
    ],
    'AnalyzePro': [
      'هحلل البيانات بتاعتك بدقة عالية',
      'هطلعلك تقارير سهلة وواضحة',
      'هساعدك تفهم الأرقام وتاخد قرارات صح'
    ],
    'CyberGuard': [
      'هحمي بياناتك من أي اختراق',
      'هكشف أي تهديدات أمنية',
      'هديك نصايح تحمي بيها نفسك'
    ],
    'DesignMate': [
      'هصمملك واجهات تجنن',
      'هظبطلك الصور والألوان',
      'هخلي شغلك يطلع احترافي'
    ],
    'DevBuddy': [
      'هساعدك في كتابة الكود',
      'هصلحلك الأخطاء البرمجية',
      'هعلمك أحسن ممارسات البرمجة'
    ],
    'KnowledgeBot': [
      'هجاوب على كل أسئلتك',
      'هدور على المعلومات اللي محتاجها',
      'هشرحلك أي حاجة بالتفصيل'
    ],
    'PicGenie': [
      'هظبطلك الصور باحترافية',
      'هضيف تأثيرات حلوة على صورك',
      'هصلح أي عيوب في الصور'
    ],
    'ProjectFinder': [
      'هلاقيلك أحسن المشاريع',
      'هنظملك المهام والمواعيد',
      'هتابع معاك التقدم في شغلك'
    ],
    'SmartTutor': [
      'هشرحلك المواد بطريقة سهلة',
      'هديك تمارين تفاعلية',
      'هتابع معاك تقدمك خطوة بخطوة'
    ]
  }
  return tasks[botName]
}
</script>

<template>
  <div class="bot-card" @click="selectBot">
    <div class="bot-image-container">
      <img :src="props.bot.image" :alt="props.bot.name" class="bot-image">
      <div class="bot-hover-effect">
        <span class="bot-icon">{{ props.bot.icon }}</span>
      </div>
    </div>
    <div class="bot-info">
      <h3>{{ props.bot.name }}</h3>
      <p class="bot-description">{{ getEgyptianDescription(props.bot.name) }}</p>
    </div>
    
    <transition name="modal">
      <div v-if="showChat" class="chat-modal" @click.self="showChat = false">
        <div class="chat-container">
          <ChatInterface :bot="props.bot" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.bot-card {
  position: relative;
  background: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 320px;
}

.bot-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.bot-image-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
}

.bot-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.bot-card:hover .bot-image {
  transform: scale(1.05);
}

.bot-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bot-card:hover .bot-hover-effect {
  opacity: 1;
}

.bot-info {
  padding: 1.5rem;
  background: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bot-info h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
}

.bot-description {
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: #4a5568;
  line-height: 1.5;
}

.bot-icon {
  font-size: 2rem;
  color: white;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.bot-card:hover .bot-icon {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 768px) {
  .bot-card {
    min-height: 280px;
  }
  
  .bot-info {
    padding: 1rem;
  }
  
  .bot-info h3 {
    font-size: 1.1rem;
  }
  
  .bot-description {
    font-size: 0.8rem;
  }
}
</style>