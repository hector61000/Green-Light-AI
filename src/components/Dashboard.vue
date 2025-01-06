<script setup>
import { ref } from 'vue'

const stats = ref({
  activeProjects: 5,
  completedTasks: 128,
  aiTools: 24,
  securityAlerts: 2
})
</script>

<template>
  <div class="dashboard">
    <h2>لوحة التحكم</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <h3>المشاريع النشطة</h3>
        <p class="stat-value">{{ stats.activeProjects }}</p>
      </div>
      <div class="stat-card">
        <h3>المهام المكتملة</h3>
        <p class="stat-value">{{ stats.completedTasks }}</p>
      </div>
      <div class="stat-card">
        <h3>أدوات الذكاء الاصطناعي</h3>
        <p class="stat-value">{{ stats.aiTools }}</p>
      </div>
      <div class="stat-card">
        <h3>تنبيهات الأمان</h3>
        <p class="stat-value">{{ stats.securityAlerts }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.stat-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  margin: 0;
  color: #666;
  font-size: 1rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0.5rem 0 0;
}
</style>