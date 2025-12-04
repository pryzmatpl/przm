<script setup>
import {inject} from 'vue';
import Tile from '@c/fragments/Tile.vue';

// Define the component name
defineOptions({
  name: 'SolutionsPage'
});

const $t = inject('$t');

const solutions = [
  {
    title: 'Chief Upgrade Officer',
    text: 'Upgrade without the waste. Optimize your tech, car, and office setup for long-term value. No impulse buys, just durable systems that compound.',
    link: 'service/cuo',
  },
  {
    title: 'Code Detailing',
    text: 'Remove scratches, bruises and dents from your product\'s code with expert testing and rapid delivery',
    link: 'service/detailing',
  },
  {
    title: 'Cloud Exit',
    text: 'Move your data on prem. Leave behind the sky-high costs and scale on your own terms.',
    link: 'service/cloudexit',
  },
  {
    title: 'On-prem AI',
    text: 'On-premises AI solutions. Harness the power of AI while ensuring full data privacy.',
    link: 'service/ai',
  },
  {
    title: '3D Services',
    text: 'Scan or print your reality. Bring concepts to life with precision scanning & 3D printing.',
    link: 'service/3d',
  },
  {
    title: 'Due Diligence',
    text: 'Feeling like you are overspending on a technical project? You are probably right, and you may be part of the problem. Objective feedback on technical projects.',
    link: 'service/diligence',
  },
];
</script>

<template>
  <div class="page-container animate-fade-in">
    <!-- Hero Section -->
    <section class="hero-section py-8 md:py-12">
      <div class="container-xl mx-auto px-4">
        <h1 class="headline-1 text-gradient text-center mb-4 mt-10">
          <span class="text-white">{{ $t('Solutions for modern needs') }}</span>
        </h1>
        <p class="body-1 text-center max-w-3xl mx-auto text-color-text-secondary text-xl">
          {{ $t('Tailored tools to optimize your business') }}
        </p>
      </div>
    </section>

    <!-- Solutions Introduction -->
    <section class="content-section py-6">
      <div class="container-lg mx-auto px-4">
        <div class="max-w-5xl mx-auto text-color-text-secondary">
          <div class="bg-glass p-5 mb-8 content-fade-in text-2xl">
            <p class="body-1">{{ $t("Explore our range of solutions designed to address your technical challenges and optimize your operations. Each solution is built on our expertise and commitment to quality.") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="content-section py-6">
      <div class="container-xl mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full h-full">
            <div v-for="(solution, index) in solutions" :key="index"
                class="content-fade-in"
                :style="{animationDelay: `${0.05 * (index + 1)}s`}">
              <Tile
                :title="solution.title"
                :text="solution.text"
                :link="solution.link"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-8 md:py-12 mb-6">
      <div class="container-xl mx-auto px-4">
        <div class="bg-glass p-6 md:p-8 content-fade-in max-w-5xl mx-auto">
          <h2 class="headline-3 text-center mb-4">{{ $t("Need a Custom Solution?") }}</h2>
          <p class="body-1 text-center text-color-text-secondary max-w-2xl mx-auto mb-6">
            {{ $t("Let's discuss how our expertise can be tailored to your specific needs.") }}
          </p>
          <div class="flex justify-center">
            <router-link to="/contact" class="btn-cta">
              {{ $t("Get in Touch") }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Using global design system classes */
</style>
