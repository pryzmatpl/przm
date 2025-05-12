<script setup>
import {inject} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

const $t = inject('$t');

// Add defineOptions to set a multi-word component name
defineOptions({
  name: 'CodeDetailing'
});
</script>

<template>
  <div class="p-6 md:p-10 text-justify">
    <WelcomeBox :headingStr="$t('AI')" :message="$t('Slop to solid')" />

    <div class="max-w-3xl mx-auto pt-6 text-gray-300 leading-relaxed">
      <p>{{ $t("Scaled too fast? Runway longer than expected, even though you are at warp speed? At PRZM, we will assure your code is tested, refactored and ready for any deployment within a containerized environment.") }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  @apply text-3xl font-bold text-white mb-6;
}
h2 {
  @apply text-2xl font-bold text-white mt-6;
}
p {
  @apply text-lg;
}
</style>
