<template>
  <div class="text-center mx-auto md:float-left">
    <h3 class="text-white font-extrabold text-lg mb-6 gradient-text">
      {{ $t("Socials") }}
    </h3>
    <ul class="space-y-3 flex flex-col items-center md:items-start">
      <li v-for="(social, index) in socialLinks" :key="index">
        <a
            :href="social.href"
            class="flex items-center text-gray-400 hover:text-white transition-colors duration-300 hover:-skew-x-3"
            target="_blank"
            rel="noopener noreferrer"
        >
          <img
              :src="social.icon"
              :alt="social.alt"
              class="w-6 h-6 filter invert opacity-80 hover:opacity-100 mr-3"
              loading="lazy"
          />
          {{ social.alt }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue';

import xIcon from '@/assets/x.min.svg';
import discordIcon from '@/assets/discord.min.svg';
import youtubeIcon from '@/assets/youtube.min.svg';
import githubIcon from '@/assets/github.min.svg';

const socialLinks = ref([
  {href: 'https://x.com/pryzmat_tech', icon: xIcon, alt: 'X'},
  {href: 'https://discord.gg/hzErdRbeTG', icon: discordIcon, alt: 'Discord'},
  {href: 'https://www.youtube.com/pryzmatpl', icon: youtubeIcon, alt: 'YouTube'},
  {href: 'https://github.com/pryzmatpl', icon: githubIcon, alt: 'GitHub'},
]);
</script>

<style scoped>
.social-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
