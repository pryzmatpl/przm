<script setup>
import {inject} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

const $t = inject('$t');
</script>

<template>
  <div class="p-6 md:p-10 text-justify">
    <WelcomeBox :headingStr="$t('Enable creation')" :message="$t('3D Services')" />

    <div class="max-w-3xl mx-auto pt-6 text-gray-300 leading-relaxed">
      <p>{{ $t("Turn imagination into reality with our precision 3D scanning and printing services. Whether you're capturing intricate details for digital preservation or bringing prototypes to life, we offer cutting-edge solutions for industry, art, and engineering. From concept to creation, make your ideas tangible.") }}</p>    </div>
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
