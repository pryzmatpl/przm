<script setup>
import {inject} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

const $t = inject('$t');
</script>

<template>
  <div class="p-6 md:p-10 text-justify">
    <WelcomeBox :headingStr="$t('Real estate')" :message="$t('Years of experience. Trusted partner in your investment.')" />

    <div class="max-w-3xl mx-auto pt-6 text-gray-300 leading-relaxed">
      <p>{{ $t("Rooted in tradition, we provide expert geodesy, real estate appraisal, and legal advisory services in Lower Silesia. Whether you're buying, selling, or managing property, our meticulous assessments ensure fair value and compliance. With deep industry knowledge and regional expertise, we bring clarity and confidence to your real estate decisions.") }}</p>
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
