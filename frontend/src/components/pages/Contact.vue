<script setup>
import {inject} from 'vue';
import ChatWindow from '@c/fragments/ChatWindow.vue';
import PrizmCrystalOffering from '@c/asset/PrizmCrystalOffering.vue';

// Define the component name
defineOptions({
  name: 'ContactPage'
});

const $t = inject('$t');
</script>

<template>
  <div class="page-container animate-fade-in">
    <!-- Hero Section -->
    <section class="hero-section py-8 md:py-12">
      <div class="container-xl mx-auto px-4 ">
        <h1 class="headline-1 text-gradient text-center mb-4 mt-10">
          <span class="text-white">{{ $t('Get in touch') }}</span>
        </h1>
        <p class="body-1 text-center max-w-3xl mx-auto text-color-text-secondary text-xl">
          {{ $t('Looking for traditional contact?') }}
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="content-section py-6 max-w-5xl mx-auto">
      <div class="container-lg mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Information -->
          <div class="content-fade-in content-fade-in-delay-1">
            <div class="portfolio-tile bg-glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:shadow-blue-900/20 h-full">
              <!-- Header with Crystal -->
              <div class="aspect-video relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary-light">
                <div class="absolute inset-0 flex items-center justify-center opacity-20">
                  <PrizmCrystalOffering class="w-24 h-24" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <!-- Title Bar -->
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <h2 class="text-2xl font-bold text-white">{{ $t("Contact Information") }}</h2>
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
                <div class="space-y-4">
                  <div class="contact-item flex items-center">
                    <div class="contact-icon mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-gray-400 text-sm">{{ $t("Email") }}</p>
                      <a href="mailto:pryzmat@pryzmat.pl" class="text-lg text-primary hover:text-primary-light hover:underline transition-all">pryzmat@pryzmat.pl</a>
                    </div>
                  </div>

                  <div class="contact-item flex items-center">
                    <div class="contact-icon mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-gray-400 text-sm">{{ $t("Phone") }}</p>
                      <a href="tel:+48883961639" class="text-lg text-primary hover:text-primary-light hover:underline transition-all">(+48) 883 961 639</a>
                    </div>
                  </div>

                  <div class="contact-item flex items-center">
                    <div class="contact-icon mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-gray-400 text-sm">{{ $t("Office Address") }}</p>
                      <p class="text-lg">
                        <strong>{{ $t("PRZM Technologies") }}</strong><br>
                        {{ $t("Kilińskiego 28/16, 50-264 Wrocław") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Glow Effect -->
              <div class="tile-glow"></div>
            </div>
          </div>

          <!-- AI Chat Window -->
          <div class="content-fade-in content-fade-in-delay-2">
            <div class="portfolio-tile bg-glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:shadow-blue-900/20 h-full">
              <!-- Header with Crystal -->
              <div class="aspect-video relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary-light">
                <div class="absolute inset-0 flex items-center justify-center opacity-20">
                  <PrizmCrystalOffering class="w-24 h-24" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <!-- Title Bar -->
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <h2 class="text-2xl font-bold text-white">{{ $t("Chat with our AI Assistant") }}</h2>
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
                <p class="text-gray-300 text-lg mb-4">{{ $t("Have questions? Our AI assistant can help you with information about our services, pricing, and more.") }}</p>
                <ChatWindow />
              </div>

              <!-- Glow Effect -->
              <div class="tile-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-8 md:py-12 mb-6">
      <div class="container-xl mx-auto px-4">
        <div class="portfolio-tile bg-glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 p-8">
          <h2 class="headline-3 text-center mb-4">{{ $t("Ready to Start a Project?") }}</h2>
          <p class="body-1 text-center text-color-text-secondary max-w-2xl mx-auto mb-6">
            {{ $t("Let's discuss your needs and find the perfect solution for your business.") }}
          </p>
          <div class="flex justify-center">
            <router-link to="/quote" class="btn-cta">
              {{ $t("Request a Quote") }}
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

.contact-item {
  position: relative;
  padding: 1rem;
  border-radius: var(--border-radius-lg);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background-color: rgba(59, 130, 246, 0.1);
}

.contact-icon {
  border-radius: 50%;
  padding: 0.5rem;
  background-color: rgba(59, 130, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  background-color: rgba(59, 130, 246, 0.2);
  transform: scale(1.1);
}
</style>
