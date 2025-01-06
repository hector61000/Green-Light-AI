<script setup>
import { ref } from 'vue'

const props = defineProps({
  bot: {
    type: Object,
    required: true
  }
})

const showDetails = ref(false)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}
</script>

<template>
  <div class="bot-card" @click="toggleDetails">
    <div class="bot-image">
      <img :src="bot.image" :alt="bot.name" />
      <div class="bot-hover-effect">
        <span class="bot-icon">{{ bot.icon }}</span>
      </div>
    </div>
    <div class="bot-info">
      <h3>{{ bot.name }}</h3>
    </div>
    
    <transition name="modal">
      <div v-if="showDetails" class="bot-details-modal" @click.stop>
        <div class="modal-content">
          <div class="modal-header">
            <span class="bot-icon">{{ bot.icon }}</span>
            <h2>{{ bot.name }}</h2>
            <button class="close-btn" @click.stop="showDetails = false">×</button>
          </div>
          <div class="modal-body">
            <p class="description">{{ bot.description }}</p>
            <h4>المهام الرئيسية:</h4>
            <ul>
              <li v-for="(task, index) in bot.tasks" :key="index">
                {{ task }}
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button class="start-btn" @click.stop="$emit('select-bot', bot)">
              ابدأ الآن
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.bot-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.bot-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.bot-image {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
}

.bot-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.bot-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bot-card:hover .bot-hover-effect {
  opacity: 1;
}

.bot-card:hover .bot-image img {
  transform: scale(1.1);
}

.bot-info {
  padding: 1rem;
  text-align: center;
}

.bot-info h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
}

.bot-icon {
  font-size: 2.5rem;
}

/* Modal Styles */
.bot-details-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eee;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #2c3e50;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.modal-body h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.modal-body ul {
  list-style: none;
  padding: 0;
}

.modal-body li {
  padding: 0.5rem 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-body li::before {
  content: "•";
  color: #3498db;
  font-weight: bold;
}

.start-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    padding: 1.5rem;
  }

  .bot-icon {
    font-size: 2rem;
  }

  .modal-header h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .modal-content {
    padding: 1rem;
  }

  .bot-info h3 {
    font-size: 1rem;
  }

  .description {
    font-size: 0.9rem;
  }
}
</style>