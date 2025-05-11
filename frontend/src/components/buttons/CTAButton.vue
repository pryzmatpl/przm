<template>
  <router-link
      :to="link"
      class="cta-button inline-block text-lg px-8 py-3
           leading-none rounded text-white
           transition-transform duration-300
           hover:shadow-xl hover:scale-105"
  >
    {{ text }}
  </router-link>
</template>

<script setup>
import {defineComponent, defineProps} from 'vue';

const props = defineProps({
  link: {type: String, required: true},
  text: {type: String, required: true},
});

defineComponent({
  name: 'CTAButton',
});
</script>

<style scoped lang="scss">
@keyframes glowing {
  0% {
    background-color: rgba(0, 168, 255, 0.8);
    box-shadow: 0 0 5px rgba(0, 168, 255, 0.8);
  }
  50% {
    background-color: rgba(0, 189, 255, 1);
    box-shadow: 0 0 20px rgba(0, 189, 255, 1);
  }
  100% {
    background-color: rgba(0, 168, 255, 0.8);
    box-shadow: 0 0 5px rgba(0, 168, 255, 0.8);
  }
}

.cta-button {
  background: linear-gradient(
          to right,
          rgba(0, 168, 255, 0.9),
          rgba(0, 120, 255, 0.9)
  );
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  text-align: center;
  transition: background 0.4s, transform 0.3s, box-shadow 0.3s;
  animation: glowing 3s infinite;

  &:hover {
    background: linear-gradient(
            to right,
            rgba(0, 189, 255, 1),
            rgba(0, 150, 255, 1)
    );
    color: rgba(255, 255, 255, 0.9);
    border-color: transparent;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
}
</style>
