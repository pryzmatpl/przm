<script setup>
import {ref, watch, defineAsyncComponent, computed, markRaw} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const importedComponent = ref(null);

/**
 * Capitalizes the first letter of a string.
 * @param {String} str
 * @return {String}
 */
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/**
 * A map for loading components dynamically.
 * Webpack requires explicit paths to avoid "Cannot find module" errors.
 */
const componentMap = {
  Home: () => import('@/components/pages/Home.vue'),
  About: () => import('@/components/pages/About.vue'),
  Contact: () => import('@/components/pages/Contact.vue'),
  Solutions: () => import('@/components/pages/Solutions.vue'),
  Quote: () => import('@/components/pages/Quote.vue'),
  Portfolio: () => import('@/components/pages/Portfolio.vue'),
  Backup: () => import('@/components/pages/service/Backup.vue'),
  Ai: () => import('@/components/pages/service/Ai.vue'),
  Cloudexit: () => import('@/components/pages/service/CloudExit.vue'),
  Three: () => import('@/components/pages/service/ThreeD.vue'),
  Mission: () => import('@/components/pages/service/Mission.vue'),
  Diligence: () => import('@/components/pages/service/Diligence.vue'),
  Appraisal: () => import('@/components/pages/service/Appraisal.vue'),
};

/**
 * Computes the async component dynamically based on the current route.
 */
const resolveComponent = computed(() => {
  const routeName = capitalize(route.name);
  return componentMap[routeName] || null;
});

// Watch route changes and dynamically update the component
watch(
    () => route.name,
    (newName) => {
      const componentLoader = resolveComponent.value;
      if (componentLoader) {
        // Use markRaw to prevent the component from becoming reactive
        importedComponent.value = markRaw(defineAsyncComponent(componentLoader));
      } else {
        importedComponent.value = null; // Handle missing components gracefully
      }
    },
    {immediate: true}, // Trigger on first load
);
</script>

<template>
  <div class="default-view">
    <section class="coming-soon-section">
      <div class="container">
        <h1>{{ getPageTitle() }}</h1>
        <p class="subtitle">We're building something amazing for you.</p>
        <div class="coming-soon-card card">
          <div class="icon">
            <i class="fas fa-tools"></i>
          </div>
          <h2>This page is coming soon</h2>
          <p>We're working hard to bring you a fantastic experience. Please check back soon!</p>
          <router-link to="/" class="btn btn-primary">Return to Homepage</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.coming-soon-section {
  min-height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 0 5rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: $primary-gradient;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.subtitle {
  font-size: 1.5rem;
  color: $text-secondary;
  margin-bottom: 3rem;
}

.coming-soon-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem;
  
  .icon {
    font-size: 3rem;
    color: $primary;
    margin-bottom: 1.5rem;
  }
  
  h2 {
    margin-bottom: 1.5rem;
  }
  
  p {
    color: $text-secondary;
    margin-bottom: 2rem;
  }
}
</style>
