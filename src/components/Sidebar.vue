<script setup>
import { ref } from 'vue'
import BotCard from './BotCard.vue'

const bots = ref([
  {
    id: 'programming',
    name: 'مساعد البرمجة',
    icon: '💻',
    image: '/images/bot-programming.png',
    description: 'مساعد ذكي للبرمجة يساعدك في كتابة وتصحيح الأكواد وإدارة المشاريع البرمجية',
    tasks: [
      'تصحيح وتحسين الكود',
      'اقتراح حلول برمجية',
      'إدارة المشاريع البرمجية'
    ]
  },
  {
    id: 'marketing',
    name: 'مساعد التسويق',
    icon: '📢',
    image: '/images/bot-marketing.png',
    description: 'خبير في التسويق الرقمي وإدارة الحملات الإعلانية',
    tasks: [
      'تخطيط الحملات التسويقية',
      'تحليل البيانات التسويقية',
      'إدارة وسائل التواصل الاجتماعي'
    ]
  },
  {
    id: 'ai-explorer',
    name: 'مستكشف الذكاء الاصطناعي',
    icon: '🔍',
    image: '/images/bot-ai.png',
    description: 'يستكشف ويحلل أحدث تقنيات وأدوات الذكاء الاصطناعي',
    tasks: [
      'البحث عن أدوات ذكاء اصطناعي جديدة',
      'تحليل وتقييم الأدوات',
      'تقديم توصيات للاستخدام'
    ]
  },
  {
    id: 'security',
    name: 'حارس الأمان',
    icon: '🛡️',
    image: '/images/bot-security.png',
    description: 'يحمي أنظمتك ويراقب التهديدات الأمنية',
    tasks: [
      'مراقبة الأنشطة المشبوهة',
      'تحليل التهديدات الأمنية',
      'تقديم توصيات للحماية'
    ]
  },
  {
    id: 'image-gen',
    name: 'مولد الصور',
    icon: '🎨',
    image: '/images/bot-image.png',
    description: 'ينشئ صوراً عالية الجودة باستخدام الذكاء الاصطناعي',
    tasks: [
      'توليد صور من النصوص',
      'تعديل وتحسين الصور',
      'إنشاء تصاميم إبداعية'
    ]
  },
  {
    id: 'data-analyst',
    name: 'محلل البيانات',
    icon: '📊',
    image: '/images/bot-data.png',
    description: 'يحلل البيانات ويستخرج الرؤى والتوصيات',
    tasks: [
      'تحليل البيانات الإحصائية',
      'إنشاء التقارير التحليلية',
      'تقديم توصيات مبنية على البيانات'
    ]
  },
  {
    id: 'content-writer',
    name: 'كاتب المحتوى',
    icon: '✍️',
    image: '/images/bot-writer.png',
    description: 'ينشئ محتوى إبداعي ومميز بمختلف الأنماط',
    tasks: [
      'كتابة المقالات والتدوينات',
      'إنشاء محتوى السوشيال ميديا',
      'تحرير وتحسين النصوص'
    ]
  },
  {
    id: 'research',
    name: 'الباحث الذكي',
    icon: '🔬',
    image: '/images/bot-research.png',
    description: 'يساعد في البحث العلمي وجمع المعلومات',
    tasks: [
      'البحث في المصادر العلمية',
      'تلخيص الأبحاث والدراسات',
      'تحليل النتائج البحثية'
    ]
  },
  {
    id: 'translator',
    name: 'المترجم المحترف',
    icon: '🌐',
    image: '/images/bot-translator.png',
    description: 'يقدم خدمات الترجمة الاحترافية بين مختلف اللغات',
    tasks: [
      'ترجمة النصوص والوثائق',
      'تدقيق لغوي للترجمات',
      'ترجمة المحتوى التقني'
    ]
  },
  {
    id: 'assistant',
    name: 'المساعد الشخصي',
    icon: '🤖',
    image: '/images/bot-assistant.png',
    description: 'مساعد شخصي ذكي لإدارة المهام اليومية والمواعيد',
    tasks: [
      'تنظيم المواعيد والمهام',
      'إدارة البريد والرسائل',
      'تذكير بالمواعيد المهمة'
    ]
  }
])

const emit = defineEmits(['select-bot'])
</script>

<template>
  <aside class="sidebar">
    <div class="logo">
      <h2>Green Light AI</h2>
    </div>
    <div class="bots-grid">
      <BotCard
        v-for="bot in bots"
        :key="bot.id"
        :bot="bot"
        @select-bot="emit('select-bot', $event)"
      />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 300px;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  overflow-y: auto;
  height: 100vh;
  transition: width 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
}

.logo {
  padding: 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #2c3e50, #3498db);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo h2 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(to right, #fff, #ecf0f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.bots-grid {
  display: grid;
  gap: 1.5rem;
  padding: 0 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

@media (max-width: 768px) {
  .bots-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>