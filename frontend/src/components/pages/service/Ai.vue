<script setup>
import {inject} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

const $t = inject('$t');
</script>

<template>
  <div class="p-6 md:p-10 text-justify">
    <WelcomeBox :headingStr="$t('AI')" :message="$t('Agents and more')" />

    <div class="max-w-3xl mx-auto pt-6 text-gray-300 leading-relaxed">
      <p>{{ $t("Harness AI on your own terms with complete control over data security and performance. On-premises AI solutions give you the power to innovate without relying on third-party clouds. Protect sensitive information, reduce latency, and optimize costs while scaling at your own pace. Take full command of your AI workloads—your data, your rules.") }}</p>
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
