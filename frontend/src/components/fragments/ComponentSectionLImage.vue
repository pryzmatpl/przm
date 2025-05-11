<script setup>
import {computed, inject, defineProps} from 'vue';
import PillButton from "@c/buttons/PillButton.vue";

const $t = inject('$t');

// Define props using defineProps
const props = defineProps({
  content: {
    type: Object,
    required: true,
    showButton: true,
  },
  imageWidth: {
    type: String,
    default: '450px',
  },
});

// Get the file name without extension
const getFileNameWithoutExtension = (filename) => {
  return filename.split('.').slice(0, -1).join('.');
};

// Computed property for WebP image
const webpImage = computed(() => {
  const fileName = getFileNameWithoutExtension(props.content.imageSrc);
  try {
    return require(`@/assets/${fileName}.webp`);
  } catch (e) {
    // WebP version doesn't exist, will use original
    return null;
  }
});

// Computed property for resolved image (original format as fallback)
const resolvedImage = computed(() => {
  return require(`@/assets/${props.content.imageSrc}`);
});
</script>


<template>
  <div class="relative w-full grid gap-12 lg:grid-cols-2 container-xl mx-auto px-4">
    <!-- Image Section -->
    <div class="overflow-hidden flex justify-center items-center w-full">
      <div class="sm:max-w-[450px] md:max-w-full">
        <picture>
          <source v-if="webpImage" :srcset="webpImage" type="image/webp">
          <img
              :src="resolvedImage"
              class="rounded-2xl shadow-md max-w-full"
              :style="{ width: imageWidth }"
              alt="Product Image"
              width="450"
              height="300"
              loading="lazy"
          />
        </picture>
      </div>
    </div>

    <!-- Text Section -->
    <div class="w-full flex justify-center items-center px-5 xl:px-0">
      <div class="sm:max-w-[480px] text-center sm:text-left text-container">
        <h2 class="text-4xl font-bold md:text-5xl text-indigo-300 text-wrapper">
          {{ $t(content.title) }}<br/>
          <span class="font-extrabold italic text-sky-200">
            {{ $t(content.subtitle) }}
          </span>
        </h2>
        <p class="mt-6 text-gray-300 leading-relaxed text-justify text-wrapper">
          {{ $t(content.description) }}
        </p>
        <div class="button-wrapper" v-if="content.showButton">
          <PillButton :content="content"></PillButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #005ec3;
}

.text-container {
  position: relative;
  z-index: 1;
}

.text-wrapper {
  background-color: rgba(19, 27, 43, 0.75);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  padding: 12px 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.button-wrapper {
  margin-top: 15px;
  padding: 5px;
}
</style>
