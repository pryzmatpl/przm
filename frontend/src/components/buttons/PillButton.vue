<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <router-link
      :to="content.link"
      class="enhanced-pill-button"
      :class="{
        'primary-cta': content.primaryCta,
        'secondary-cta': content.secondaryCta
      }"
  >
    <div class="button-content">
      <span class="button-text">{{ $t(content.buttonText) }}</span>
      <span class="button-arrow">→</span>
    </div>
    <div class="button-glow"></div>
  </router-link>
</template>

<style scoped>
.enhanced-pill-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.01em;
  border-radius: var(--border-radius-full);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateZ(0);
}

.button-content {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
}

.button-text {
  position: relative;
}

.button-arrow {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.enhanced-pill-button:hover .button-arrow {
  transform: translateX(4px);
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.enhanced-pill-button:hover .button-glow {
  transform: translateX(100%);
}

/* Primary CTA styling */
.primary-cta {
  background: linear-gradient(135deg, var(--secondary-color), var(--secondary-dark));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(112, 0, 255, 0.25);
}

.primary-cta:hover {
  box-shadow: 0 6px 20px rgba(112, 0, 255, 0.4);
  transform: translateY(-2px);
}

.primary-cta:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(112, 0, 255, 0.2);
}

/* Secondary CTA styling */
.secondary-cta {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--dark-text-primary);
  border: 2px solid rgba(157, 77, 255, 0.3);
}

.secondary-cta:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(157, 77, 255, 0.5);
  transform: translateY(-2px);
}

.secondary-cta:active {
  transform: translateY(0);
}

/* Default styling (if neither primary nor secondary) */
.enhanced-pill-button:not(.primary-cta):not(.secondary-cta) {
  background-color: var(--primary-light);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.enhanced-pill-button:not(.primary-cta):not(.secondary-cta):hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
}
</style>
