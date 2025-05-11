<script setup>
import {inject} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

const $t = inject('$t');
</script>

<template>
  <div class="p-6 md:p-10 text-justify">
    <WelcomeBox :headingStr="$t('Critical solutions')" :message="$t('When the mission is at stake')" />

    <div class="max-w-3xl mx-auto pt-6 text-gray-300 leading-relaxed">
      <p>{{ $t("From FPGA and ASIC design to bare-metal software, we build the backbone of mission-critical systems. Whether you're in aerospace, defense, or high-performance computing, we deliver low-latency, high-reliability solutions that stand the test of time. Trust your infrastructure to engineering built for the extreme.") }}</p>
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
