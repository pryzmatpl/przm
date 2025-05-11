<template>
  <router-link
      @click="$emit('toggleNav')"
      class="nav-button"
      :class="{active: isActive}"
      :to="link"
  >
    <span class="nav-text">{{ $t(text) }}</span>
    <span v-if="isActive" class="active-indicator"></span>
  </router-link>
</template>

<script setup>
import {defineComponent, defineProps, inject, computed} from 'vue';
import {useRoute} from 'vue-router';

const $t = inject('$t');
const route = useRoute();

const props = defineProps({
  link: {type: String, required: true},
  text: {type: String, required: true},
  cta: {type: Boolean, default: false},
});

// Check if current route matches this nav button
const isActive = computed(() => {
  return route.path === props.link ||
         (props.link !== '/' && route.path.startsWith(props.link));
});

defineComponent({
  name: 'NavButton',
});
</script>

<style scoped>
.nav-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  border-radius: 12px;
  background: linear-gradient(to right, rgba(0, 168, 255, 0.1), rgba(0, 120, 255, 0.1));
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.nav-button:hover {
  background: linear-gradient(to right, rgba(0, 189, 255, 0.2), rgba(0, 150, 255, 0.2));
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.nav-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-button:hover:before {
  transform: translateX(100%);
}

/* Active state styling */
.nav-button.active {
  background: linear-gradient(to right, rgba(0, 189, 255, 0.3), rgba(0, 150, 255, 0.3));
  color: #ffffff;
  font-weight: 600;
}

.active-indicator {
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2rem;
  height: 2px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(157, 77, 255, 0.8));
  border-radius: 2px;
  animation: pulseWidth 2s infinite;
}

@keyframes pulseWidth {
  0%, 100% { width: 2rem; opacity: 0.8; }
  50% { width: 2.5rem; opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-button {
    width: 100%;
    padding: 0.875rem 1rem;
    margin: 0.5rem 0;
    text-align: center;
  }
}
</style>
