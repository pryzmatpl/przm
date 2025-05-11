<script setup>
import {inject} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

const $t = inject('$t');
</script>

<template>
  <div class="p-6 md:p-10 text-justify">
    <WelcomeBox :headingStr="$t('Due Diligence')" :message="$t('Overpaying? Never on time?')" />

    <div class="max-w-3xl mx-auto pt-6 text-gray-300 leading-relaxed">
      <p>{{ $t("Are you overspending on a technical project? Probably. Get an objective, expert evaluation to cut through inefficiencies and mismanagement. We provide unbiased insights that help you make smarter, more cost-effective technology decisions. No fluff, just facts.") }}</p>
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
