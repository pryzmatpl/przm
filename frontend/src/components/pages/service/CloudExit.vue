<script setup>
import {inject} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

const $t = inject('$t');
</script>

<template>
  <div class="p-6 md:p-10 text-justify">
    <WelcomeBox :headingStr="$t('Cloud Exit')" :message="$t('Move away from vendors')" />

    <div class="max-w-3xl mx-auto pt-6 text-gray-300 leading-relaxed">
      <p>{{ $t("Break free from vendor lock-in and regain control over your infrastructure. Moving off the cloud reduces costs, enhances security, and allows you to scale on your own terms. Whether you're optimizing for performance, compliance, or sovereignty, our solutions ensure a smooth transition to on-prem operations.") }}</p>
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
