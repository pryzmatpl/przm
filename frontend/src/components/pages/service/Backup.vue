<script setup>
import {inject} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

const $t = inject('$t');
</script>

<template>
  <div class="p-6 md:p-10 text-justify">
    <WelcomeBox :headingStr="$t('Backup')" :message="$t('Save yourself')" />

    <div class="max-w-3xl mx-auto pt-6 text-gray-300 leading-relaxed">
      <p>{{ $t("Your business should never skip a beat. Keep your critical data safe with encrypted, on-site backups designed for resilience and rapid recovery. Avoid the risks of cloud dependency and take control of your disaster recovery strategy. Secure, scalable, and always under your command.") }}</p>
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
