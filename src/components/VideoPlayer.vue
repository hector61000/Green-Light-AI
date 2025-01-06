<template>
  <div class="video-player">
    <div v-if="loading" class="video-loading">
      <div class="loading-spinner"></div>
      <span>جاري تحميل الفيديو...</span>
    </div>
    <div v-if="error" class="video-error">
      <span class="error-icon">⚠️</span>
      <span>{{ error }}</span>
      <button @click="retryLoading" class="retry-button">إعادة المحاولة</button>
    </div>
    <iframe
      v-show="!loading && !error"
      ref="videoFrame"
      class="video-element"
      :src="videoUrl"
      frameborder="0"
      allowfullscreen
      @load="onLoad"
      @error="onError"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  videoUrl: {
    type: String,
    required: true
  }
})

const videoFrame = ref(null)
const loading = ref(true)
const error = ref(null)

const onLoad = () => {
  console.log('تم تحميل الفيديو بنجاح')
  loading.value = false
  error.value = null
}

const onError = (e) => {
  console.error('خطأ في تحميل الفيديو:', e)
  loading.value = false
  error.value = 'حدث خطأ أثناء تحميل الفيديو'
}

const retryLoading = () => {
  loading.value = true
  error.value = null
  
  if (videoFrame.value) {
    videoFrame.value.src = props.videoUrl
  }
}

onMounted(() => {
  console.log('تهيئة مشغل الفيديو مع المسار:', props.videoUrl)
})
</script>

<style scoped>
.video-player {
  position: relative;
  width: 100%;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.video-element {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}

.video-loading,
.video-error {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  z-index: 10;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

.error-icon {
  font-size: 2rem;
}

.retry-button {
  padding: 0.5rem 1rem;
  background: #4CAF50;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1rem;
}

.retry-button:hover {
  background: #45a049;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
