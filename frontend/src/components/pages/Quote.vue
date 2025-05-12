<script setup>
import {inject, ref} from 'vue';
import PrizmCrystalOffering from '@c/asset/PrizmCrystalOffering.vue';

const $t = inject("$t");

const form = ref({
  name: '',
  email: '',
  message: '',
});

const generateMailtoLink = () => {
  const subject = encodeURIComponent(`New Contact Message from ${form.value.name}`);
  const body = encodeURIComponent(`Name: ${form.value.name}\nEmail: ${form.value.email}\n\n${form.value.message}`);
  return `mailto:pryzmat@pryzmat.pl?subject=${subject}&body=${body}`;
};

// Add defineOptions to set a multi-word component name
defineOptions({
  name: 'QuotePage'
});
</script>

<template>
  <div class="page-container animate-fade-in max-w-5xl mx-auto">
    <!-- Hero Section -->
    <section class="hero-section py-8 md:py-12">
      <div class="container-xl mx-auto px-4">
        <h1 class="headline-1 text-gradient text-center mb-4 mt-10">
          <span class="text-white">{{$t("Request a Quote")}}</span>
        </h1>
        <p class="body-1 text-center max-w-3xl mx-auto text-color-text-secondary">
          {{ $t("Have a question or a project idea? Reach out to us, and we'll get back to you.") }}
        </p>
      </div>
    </section>

    <!-- Form Section -->
    <section class="content-section py-6">
      <div class="container-md mx-auto px-4">
        <div class="portfolio-tile bg-glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20">
          <!-- Header with Crystal -->
          <div class="aspect-video relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary-light">
            <div class="absolute inset-0 flex items-center justify-center opacity-20">
              <PrizmCrystalOffering class="w-24 h-24" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <!-- Title Bar -->
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h2 class="text-2xl font-bold text-white">{{ $t("Request a Quote") }}</h2>
            </div>

            <!-- Top right crystal icon -->
            <div class="absolute top-4 right-4">
              <div class="icon-container">
                <PrizmCrystalOffering class="crystal-icon" />
              </div>
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-6">
            <form @submit.prevent class="space-y-5">
              <div class="form-group">
                <label class="form-label text-gray-300 block mb-2">{{ $t("Name") }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your Name"
                  required
                  class="input-modern"
                />
              </div>

              <div class="form-group">
                <label class="form-label text-gray-300 block mb-2">{{ $t("Email")}}</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Your Email"
                  required
                  class="input-modern"
                />
              </div>

              <div class="form-group">
                <label class="form-label text-gray-300 block mb-2">{{ $t("Message")}}</label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  class="input-modern"
                ></textarea>
              </div>

              <div class="flex justify-center pt-6">
                <a
                  :href="generateMailtoLink()"
                  class="btn-cta"
                >
                  {{ $t("Send Message") }}
                </a>
              </div>
            </form>
          </div>

          <!-- Glow Effect -->
          <div class="tile-glow"></div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-8 md:py-12 mb-6">
      <div class="container-xl mx-auto px-4">
        <div class="portfolio-tile bg-glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 p-8">
          <h2 class="headline-3 text-center mb-4">{{ $t("Need more information?") }}</h2>
          <p class="body-1 text-center text-color-text-secondary max-w-2xl mx-auto mb-6">
            {{ $t("Explore our services or portfolio to learn more about what we offer.") }}
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/solutions" class="btn-cta">
              {{ $t("Our Solutions") }}
            </router-link>
            <router-link to="/portfolio" class="btn-cta-secondary">
              {{ $t("View Portfolio") }}
            </router-link>
          </div>

          <!-- Glow Effect -->
          <div class="tile-glow"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 70%);
  z-index: -1;
}

.bg-glass {
  background-color: rgba(20, 30, 48, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.portfolio-tile {
  position: relative;
  isolation: isolate;
}

.portfolio-tile::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--primary-color, #3b82f6), var(--secondary-color, #8b5cf6));
  z-index: -1;
  margin: -1px;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-tile:hover::before {
  opacity: 0.5;
}

.bg-primary-dark {
  background-color: rgba(30, 58, 138, 0.7);
}

.bg-primary-light {
  background-color: rgba(59, 130, 246, 0.7);
}

.icon-container {
  width: 40px;
  height: 40px;
  z-index: 1;
  filter: drop-shadow(0 0 5px rgba(0, 102, 255, 0.5));
}

.crystal-icon {
  width: 100%;
  height: 100%;
  transition: all var(--transition-normal, 0.3s ease);
}

.tile-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%);
  opacity: 0.3;
  transition: opacity var(--transition-normal, 0.3s ease);
  z-index: 0;
  border-radius: 100%;
  transform: translate(30%, -30%);
}

.portfolio-tile:hover .tile-glow {
  opacity: 0.6;
}

.portfolio-tile:hover .crystal-icon {
  transform: scale(1.05) rotate(5deg);
  filter: drop-shadow(0 0 8px rgba(0, 102, 255, 0.6));
}

.light .bg-glass {
  background-color: rgba(240, 240, 245, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.light .tile-glow {
  background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%);
}

/* Form styling */
input:focus, textarea:focus {
  outline: none;
}

.form-group {
  position: relative;
}

input::placeholder, textarea::placeholder {
  color: rgba(156, 163, 175, 0.7);
}
</style>
