<script setup>
import {computed, defineProps, inject} from 'vue';
import PrizmCrystalOffering from '@c/asset/PrizmCrystalOffering.vue';
import PillButton from "@c/buttons/PillButton.vue";

// Define component name using defineOptions
defineOptions({
  name: 'ContentTile'
});

const props = defineProps({
  title: String,
  text: String,
  link: {type: String, default: ''},
});

const $t = inject('$t');

const content = {
  link: props.link,
  buttonText: props.title,
};

const resolvedImage = computed(() =>
{
  const retStr = content.link.replace("/","-") + ".png";
  return require(`@/assets/${retStr}`);
});
</script>
<template>
  <div>
    <a v-if="link !== ''" :href="link" class="portfolio-tile bg-glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] block text-decoration-none">
      <!-- Header Image with Crystal -->
      <div class="tile-header aspect-video relative overflow-hidden h-80">
        <div class="absolute inset-0 flex items-center justify-center opacity-20">
          <div class="sm:max-w-[450px] md:max-w-full" >
            <picture>
              <img
                  :src="resolvedImage"
                  class="rounded-2xl shadow-md  h-96 object-fill"
                  loading="lazy"
              />
            </picture>
          </div>
        </div>
        <div class="absolute inset-0 tile-gradient"></div>

        <!-- Title Bar -->
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <h2 class="subtitle-1 text-2xl font-bold">{{ $t(title) }}</h2>
        </div>

        <!-- Top right crystal icon -->
        <div class="absolute top-4 right-4">
          <div class="icon-container">
            <PrizmCrystalOffering class="crystal-icon" />
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-5">
        <p class="body-2 text-lg mb-4 tile-text">{{ $t(text) }}</p>
      </div>

      <!-- Action Button -->
      <div class="btn-container m-4">
        <PillButton :content="content" class="tile-btn btn-cta"></PillButton>
      </div>

      <!-- Glow Effect -->
      <div class="tile-glow"></div>
    </a>

    <!-- No link version -->
    <div v-else class="portfolio-tile bg-glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <!-- Header Image with Crystal -->
      <div class="tile-header aspect-video relative overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center opacity-20">
          <PrizmCrystalOffering class="w-24 h-24" />
        </div>
        <div class="absolute inset-0 tile-gradient"></div>

        <!-- Title Bar -->
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <h2 class="subtitle-1 text-2xl font-bold">{{ $t(title) }}</h2>
        </div>

        <!-- Top right crystal icon -->
        <div class="absolute top-4 right-4">
          <div class="icon-container">
            <PrizmCrystalOffering class="crystal-icon" />
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-5">
        <p class="body-2 text-lg mb-4 tile-text">{{ $t(text) }}</p>
      </div>

      <!-- Glow Effect -->
      <div class="tile-glow"></div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-tile {
  position: relative;
  height: 100%;
  isolation: isolate;
  color: inherit;
  text-decoration: none;
}

.portfolio-tile::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--primary-color, #3b82f6), var(--secondary-color, #8b5cf6));
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-tile:hover::before {
  opacity: 0.5;
}

.tile-header {
  background-image: linear-gradient(to bottom right, rgba(13, 19, 30, 0.7), rgba(38, 54, 86, 0.7));
  transition: all 0.3s ease;
}

.light .tile-header {
  background-image: linear-gradient(to bottom right, rgba(230, 230, 235, 0.7), rgba(255, 255, 255, 0.7));
}

.tile-gradient {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
  transition: all 0.3s ease;
}

.light .tile-gradient {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, transparent 60%);
}

.subtitle-1 {
  color: rgba(255, 255, 255, 0.99);
  transition: color 0.3s ease;
}

.light .subtitle-1 {
  color: rgba(10, 10, 12, 0.95);
}

.tile-text {
  color: rgba(220, 220, 230, 0.8);
  transition: color 0.3s ease;
}

.light .tile-text {
  color: rgba(40, 40, 45, 0.8);
}

.icon-container {
  width: 40px;
  height: 40px;
  z-index: 1;
  filter: drop-shadow(0 0 5px rgba(0, 102, 255, 0.5));
  transition: filter 0.3s ease;
}

.crystal-icon {
  width: 100%;
  height: 100%;
  transition: all var(--transition-normal, 0.3s ease);
}

.tile-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%);
  opacity: 0.3;
  transition: opacity var(--transition-normal, 0.3s ease);
  z-index: 0;
  border-radius: 100%;
  transform: translate(30%, -30%);
}

.portfolio-tile:hover .tile-glow {
  opacity: 0.6;
}

.portfolio-tile:hover .crystal-icon {
  transform: scale(1.05) rotate(5deg);
  filter: drop-shadow(0 0 8px rgba(0, 102, 255, 0.6));
}

.btn-container {
  margin-top: auto;
  position: relative;
  z-index: 1;
}

.tile-btn {
  margin-top: var(--space-md, 1rem);
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .portfolio-tile {
    min-height: 220px;
  }

  .icon-container {
    width: 32px;
    height: 32px;
  }
}

/* Light mode transitions */
.dark .tile-header,
.light .tile-header,
.dark .tile-gradient,
.light .tile-gradient,
.dark .subtitle-1,
.light .subtitle-1,
.dark .tile-text,
.light .tile-text {
  transition: all 0.3s ease;
}

.light .tile-glow {
  background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%);
}
</style>
