<script setup>
import {inject, ref} from 'vue';
import AppLogo from "@c/asset/AppLogo.vue";
import SocialColumn from "@c/fragments/SocialColumn.vue";
import axios from "axios";

// Define component name
defineOptions({
  name: 'SiteFooter'
});

const $t = inject('$t');

const services = [
  {name: 'R&D Solutions', link: '/solutions#rd'},
  {name: 'On-premises AI', link: '/solutions#ai'},
  {name: 'Cloud Migration', link: '/solutions#cloud'},
  {name: 'Automation', link: '/solutions#automation'},
  {name: 'Consultancy', link: '/solutions#consultancy'},
  {name: 'Custom Software', link: '/solutions#software'},
  {name: 'Hardware Integration', link: '/solutions#hardware'},
  {name: 'Backup Solutions', link: '/solutions#backup'},
];

const resources = [
  {name: 'Case Studies', link: '/portfolio'},
  {name: 'Blog', link: '/blog'},
  {name: 'Resources', link: '/resources'},
  {name: 'FAQ', link: '/faq'},
];

const email = 'piotr.slupski@pryzmat.pl';
const phone = '+48 883 961 639';

// Newsletter subscription
const newsletterEmail = ref('');
const subscribeSuccess = ref(false);
const subscribeError = ref(false);
const errorMessage = ref('');

const submitNewsletter = () => {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newsletterEmail.value)) {
    subscribeError.value = true;
    errorMessage.value = 'Please enter a valid email address';
    return;
  }

  axios.post('/api/register-newsletter', {
    email: newsletterEmail.value
  }).then(()=> {

    subscribeSuccess.value = true;
    subscribeError.value = false;
    newsletterEmail.value = '';
  }).catch(()=>{
    subscribeError.value = true;
  });
};
</script>

<template>
  <footer class="footer-wrapper">
    <!-- Newsletter sign-up section -->
    <div class="newsletter-section">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="newsletter-container">
          <div class="text-container">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">
              Stay Updated with Our Technology Insights
            </h2>
            <p class="text-gray-300 mb-6">
              Join our newsletter for exclusive insights on R&D, industry trends, and tech innovations.
            </p>
          </div>

          <form @submit.prevent="submitNewsletter" class="newsletter-form">
            <div class="input-container">
              <input
                type="email"
                v-model="newsletterEmail"
                placeholder="Enter your email address"
                class="newsletter-input"
                :class="{error: subscribeError}"
              />
              <button type="submit" class="newsletter-button">
                Subscribe
                <span class="newsletter-button-arrow">→</span>
              </button>
            </div>
            <div class="message-container">
              <p v-if="subscribeSuccess" class="success-message">
                Thank you for subscribing!
              </p>
              <p v-if="subscribeError" class="error-message">
                {{ errorMessage }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="footer-content">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Updated grid layout for better structure -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <!-- Company Column -->
          <div>
            <div class="footer-logo mb-6">
              <AppLogo class="transform hover:scale-105 transition-all duration-500 h-12" />
            </div>
            <p class="text-gray-400 mb-6 max-w-xs">
              Innovative R&D solutions that empower businesses to navigate technological complexity with confidence.
            </p>
            <div class="contact-info">
              <a href="mailto:pryzmat@pryzmat.pl" class="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{{ email }}</span>
              </a>
              <a href="tel:+48123456789" class="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ phone }}</span>
              </a>
            </div>
          </div>

          <!-- Services Column -->
          <div>
            <h3 class="footer-heading">
              {{$t("Our Services")}}
            </h3>
            <ul class="footer-links">
              <li v-for="service in services" :key="service.name">
                <router-link :to="service.link" class="footer-link">
                  {{$t(service.name)}}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Resources Column -->
          <div>
            <h3 class="footer-heading">
              {{$t("Resources")}}
            </h3>
            <ul class="footer-links">
              <li v-for="resource in resources" :key="resource.name">
                <router-link :to="resource.link" class="footer-link">
                  {{$t(resource.name)}}
                </router-link>
              </li>
            </ul>

            <!-- CTA -->
            <div class="mt-8">
              <router-link to="/contact" class="footer-cta-button">
                Schedule Consultation
              </router-link>
            </div>
          </div>

          <!-- Social Media Column -->
          <div>
            <h3 class="footer-heading">
              {{$t("Connect With Us")}}
            </h3>
            <SocialColumn class="justify" />

            <!-- Certifications or badges -->
<!--            <div class="mt-8">
              <h4 class="text-sm text-gray-400 mb-3">Certified Partner</h4>
              <div class="flex space-x-4">
                <div class="certification-badge">AWS</div>
                <div class="certification-badge">Microsoft</div>
                <div class="certification-badge">ISO 9001</div>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Section with glass effect -->
    <div class="copyright-section">
      <div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <p class="text-sm text-gray-400 mb-3 md:mb-0">
          {{$t("&copy; 2025 Pryzmat sp. z o.o. All rights reserved.")}}
        </p>
        <div class="flex space-x-8">
          <router-link to="/privacy" class="copyright-link">
            {{$t("Privacy Policy")}}
          </router-link>
          <router-link to="/terms" class="copyright-link">
            {{$t("Terms of Service")}}
          </router-link>
          <router-link to="/sitemap" class="copyright-link">
            {{$t("Sitemap")}}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  position: relative;
  background-color: var(--primary-dark);
  overflow: hidden;
}

.light .footer-wrapper {
  background-color: var(--light-background);
}

.newsletter-section {
  background: linear-gradient(90deg, var(--primary-color), var(--primary-dark));
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.newsletter-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: radial-gradient(circle at right, rgba(112, 0, 255, 0.15), transparent 60%);
  z-index: 0;
}

.newsletter-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .newsletter-container {
    flex-direction: row;
    align-items: center;
  }

  .text-container {
    flex: 1;
    padding-right: 2rem;
  }

  .newsletter-form {
    flex: 1;
  }
}

.newsletter-form {
  width: 100%;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .input-container {
    flex-direction: row;
  }
}

.newsletter-input {
  flex: 1;
  padding: 0.875rem 1.25rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  outline: none;
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-input:focus {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.newsletter-input.error {
  border-color: var(--danger-color);
}

.newsletter-button {
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--secondary-dark));
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter-button:hover {
  background: linear-gradient(135deg, var(--secondary-light), var(--secondary-color));
  transform: translateY(-2px);
}

.newsletter-button-arrow {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.newsletter-button:hover .newsletter-button-arrow {
  transform: translateX(4px);
}

.message-container {
  margin-top: 0.75rem;
  height: 1.5rem;
}

.success-message {
  color: var(--success-color);
  font-size: 0.875rem;
}

.error-message {
  color: var(--danger-color);
  font-size: 0.875rem;
}

.footer-content {
  position: relative;
  background: linear-gradient(to bottom, var(--primary-dark), rgba(10, 15, 25, 1));
  border-top: 1px solid rgba(255, 255, 255, 0.03);
}

.light .footer-content {
  background: linear-gradient(to bottom, var(--light-background), rgba(240, 240, 245, 1));
  border-top: 1px solid rgba(0, 0, 0, 0.03);
}

.footer-heading {
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, var(--secondary-color), transparent);
}

.light .footer-heading {
  color: var(--primary-dark);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9375rem;
  transition: all 0.2s ease;
  display: inline-block;
  position: relative;
  padding-left: 0;
}

.footer-link:hover {
  color: white;
  padding-left: 0.5rem;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 1px;
  background-color: var(--secondary-color);
  opacity: 0;
  transition: all 0.2s ease;
}

.footer-link:hover::before {
  width: 0.25rem;
  opacity: 1;
}

.light .footer-link {
  color: rgba(30, 30, 30, 0.7);
}

.light .footer-link:hover {
  color: var(--primary-dark);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
}

.contact-link:hover {
  color: white;
  transform: translateX(5px);
}

.light .contact-link {
  color: rgba(30, 30, 30, 0.7);
}

.light .contact-link:hover {
  color: var(--primary-dark);
}

.footer-cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: rgba(112, 0, 255, 0.1);
  border: 1px solid rgba(112, 0, 255, 0.3);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.footer-cta-button:hover {
  background-color: rgba(112, 0, 255, 0.2);
  border-color: rgba(112, 0, 255, 0.5);
  transform: translateY(-2px);
}

.light .footer-cta-button {
  background-color: rgba(112, 0, 255, 0.05);
  color: var(--primary-dark);
}

.light .footer-cta-button:hover {
  background-color: rgba(112, 0, 255, 0.1);
}

.certification-badge {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.light .certification-badge {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(30, 30, 30, 0.8);
}

.copyright-section {
  background-color: rgba(10, 15, 25, 0.9);
  backdrop-filter: blur(10px);
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
}

.light .copyright-section {
  background-color: rgba(240, 240, 245, 0.9);
  border-top: 1px solid rgba(0, 0, 0, 0.03);
}

.copyright-link {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8125rem;
  transition: all 0.2s ease;
}

.copyright-link:hover {
  color: white;
}

.light .copyright-link {
  color: rgba(30, 30, 30, 0.5);
}

.light .copyright-link:hover {
  color: var(--primary-dark);
}

.footer-logo {
  position: relative;
}

.footer-logo::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: radial-gradient(circle at center, rgba(112, 0, 255, 0.2), transparent 70%);
  border-radius: 50%;
  z-index: -1;
  opacity: 0.5;
}
</style>
