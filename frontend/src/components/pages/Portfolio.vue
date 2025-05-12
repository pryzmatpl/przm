/* eslint-disable object-curly-spacing */
<script setup>
import {ref, onMounted} from 'vue';
import PortfolioCard from '@c/cards/PortfolioCard.vue';
import PortfolioService from '@/services/PortfolioService';
/* eslint-enable object-curly-spacing */

// Add defineOptions to set a multi-word component name
defineOptions({
  name: 'PortfolioPage'
});

// Portfolio items data from service
const portfolioItems = ref([]);

// Load portfolio data when component mounts
onMounted(() => {
  portfolioItems.value = PortfolioService.getAllPortfolioItems();
});

</script>

<template>
  <div class="page-container animate-fade-in">
    <!-- Hero Section -->
    <section class="hero-section py-8 md:py-12">
      <div class="container-xl mx-auto px-4">
        <h1 class="headline-1 text-gradient text-center mb-4">
          <span class="text-white">Our Digital Portfolio</span>
        </h1>
        <p class="body-1 text-center max-w-3xl mx-auto text-color-text-secondary">
          Explore our innovative digital products and solutions that push the boundaries of what's possible.
        </p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="content-section py-6">
      <div class="container-xl mx-auto px-4 max-w-5xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 content-fade-in">
          <PortfolioCard
            v-for="item in portfolioItems"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-8 md:py-12 mb-6">
      <div class="container-xl mx-auto px-4">
        <div class="bg-glass p-8 md:p-12 content-fade-in">
          <h2 class="headline-3 text-center mb-4">Ready to Build Something Amazing?</h2>
          <p class="body-1 text-center max-w-2xl mx-auto mb-6 text-color-text-secondary">
            We're constantly developing new digital products. Contact us to discuss your next project.
          </p>
          <div class="flex justify-center">
            <router-link to="/contact" class="btn-cta">
              Get in Touch
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-grid {
  position: relative;
}

.portfolio-grid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(112, 0, 255, 0.08) 0%, transparent 70%),
    radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.08) 0%, transparent 70%);
  z-index: -1;
}
</style>
