<script setup>
import {defineProps, ref, onMounted} from 'vue';

// Define props
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

// Check if images actually exist
const imageExists = ref(false);
const fallbackExists = ref(false);

onMounted(() => {
  // Check if the WebP image exists
  const webpImg = new Image();
  webpImg.onload = () => {
    imageExists.value = true;
  };
  webpImg.onerror = () => {
    imageExists.value = false;
  };
  webpImg.src = props.item.imagePath;

  // Check if the fallback image exists
  const fallbackImg = new Image();
  fallbackImg.onload = () => {
    fallbackExists.value = true;
  };
  fallbackImg.onerror = () => {
    fallbackExists.value = false;
  };
  fallbackImg.src = props.item.imageFallback;
});
</script>

<template>
  <div class="portfolio-card bg-glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:shadow-blue-900/20">
    <!-- Content -->
    <div class="p-6">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-2xl font-bold">{{ item.title }}</h3>
        <div v-if="item.featured" class="px-3 py-1 text-xs font-medium bg-secondary/80 text-white rounded-full">
          Featured
        </div>
      </div>

      <p class="text-gray-300 text-lg mb-3">{{ item.description }}</p>
      <p class="text-gray-400 mb-6">{{ item.longDescription }}</p>

      <!-- Action button -->
      <div class="flex justify-between items-center">
        <a
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-2 bg-primary text-white rounded-full inline-flex items-center transition-all duration-300 hover:bg-primary-light"
        >
          Visit Website
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <!-- Indicator that it's an external link -->
        <div class="text-sm text-gray-400">
          <span class="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
            </svg>
            External Link
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-glass {
  background-color: rgba(20, 30, 48, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.light .bg-glass {
  background-color: rgba(240, 240, 245, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.portfolio-card {
  position: relative;
  isolation: isolate;
}

.portfolio-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover::before {
  opacity: 0.5;
}
</style>
