<script setup>
import {inject, ref, onMounted, onUnmounted} from 'vue';
import AppLogo from '../asset/AppLogo.vue';
import NavButton from '@c/buttons/NavButton.vue';
import ThemeToggle from '@c/buttons/ThemeToggle.vue';

// Define component name
defineOptions({
  name: 'MainNavbar'
});

const $t=inject("$t");
const isNavOpen = ref(false);
const lastScrollY = ref(0);
const isNavbarVisible = ref(true);
const isScrolled = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;

  // Prevent scrolling when mobile menu is open
  if (isNavOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const navItems = [
  {text: 'About', link: '/about'},
  {text: 'Solutions', link: '/solutions'},
  {text: 'Portfolio', link: '/portfolio'},
];

// Handle navbar visibility on scroll
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Detect if user has scrolled down enough to apply background effect
  isScrolled.value = currentScrollY > 20;

  // Hide navbar on scroll down, show on scroll up
  if (currentScrollY > lastScrollY.value && currentScrollY > 150) {
    isNavbarVisible.value = false;
  } else {
    isNavbarVisible.value = true;
  }

  lastScrollY.value = currentScrollY;
};

// Add scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Check initial scroll position
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Close mobile menu when route changes
const closeNavOnRouteChange = () => {
  if (isNavOpen.value) {
    isNavOpen.value = false;
    document.body.style.overflow = '';
  }
};
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{
      'nav-scrolled': isScrolled,
      'nav-visible': isNavbarVisible,
      'nav-hidden': !isNavbarVisible,
      'nav-open': isNavOpen
    }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <!-- Logo Section with animation -->
        <div class="flex items-center z-50">
          <router-link to="/" class="logo-container" @click="closeNavOnRouteChange">
            <AppLogo class="transition-all duration-300 hover:filter hover:drop-shadow-blue h-12" />
          </router-link>
        </div>

        <!-- Desktop Navigation with modern styling -->
        <div class="hidden lg:flex lg:items-center lg:space-x-4">
          <div class="flex space-x-3" v-for="item in navItems" :key="item.text">
            <NavButton
              :link="item.link"
              :text="item.text"
              class="nav-link"
            />
          </div>

          <div class="ml-6">
            <NavButton
              link="/contact"
              :text='$t("Contact Us")'
              class="cta-button nav-link"
              @toggleNav="closeNavOnRouteChange"
            />
          </div>

          <!-- Theme toggle button (visible on both mobile and desktop) -->
          <ThemeToggle class="mx-2" />
        </div>

        <!-- Modern mobile menu button with animation -->
        <div class="flex lg:hidden items-center space-x-2">
          <button
            @click="toggleNav"
            class="text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
          >
            <div class="hamburger-menu" :class="{open: isNavOpen}">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile Navigation with glass morphism - positioned outside the nav element to cover everything -->
  <div
    v-show="isNavOpen"
    class="mobile-menu-overlay fixed inset-0 z-40 lg:hidden"
  >
    <div 
      class="mobile-nav rounded-b-xl border border-white/10 bg-glass animate-fade-in overflow-hidden"
    >
      <div class="mobile-nav-content px-4 py-6 h-full overflow-y-auto">
        <div class="space-y-3 m-5" v-for="item in navItems" :key="item.text">
          <NavButton
            :link="item.link"
            :text="item.text"
            class="mobile-nav-link"
            @toggleNav="toggleNav"
          />
        </div>

        <div class="mt-8 mb-4">
          <h3 class="text-white/70 text-sm uppercase tracking-wider mb-3">Connect With Us</h3>
          <NavButton
            link="/contact"
            :text='$t("Contact Us")'
            class="cta-button-mobile"
            @toggleNav="toggleNav"
          />
        </div>

        <div class="mt-10 border-t border-white/10 pt-6">
          <div class="flex items-center justify-between">
            <span class="text-white/70">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.nav-scrolled {
  background-color: rgba(10, 10, 12, 0.85);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav-visible {
  transform: translateY(0);
}

.nav-hidden {
  transform: translateY(-100%);
}

.nav-open {
  background-color: rgba(10, 10, 12, 0.95);
}

.light .nav-scrolled {
  background-color: rgba(245, 245, 250, 0.85);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.drop-shadow-blue {
  filter: drop-shadow(0 0 8px rgba(0, 102, 255, 0.6));
}

.logo-container {
  position: relative;
  z-index: 10;
}

.logo-container::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.logo-container:hover::after {
  opacity: 1;
}

/* Mobile navigation */
.mobile-menu-overlay {
  background-color: rgba(10, 10, 12, 0.7);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.mobile-nav {
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 80px; /* Match the navbar height */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 10, 12, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  overflow: hidden;
  height: calc(100vh - 80px);
}

.mobile-nav-content {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeUpIn 0.4s forwards;
}

@keyframes fadeUpIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-glass {
  background-color: rgba(10, 10, 12, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

/* Hamburger menu animation */
.hamburger-menu {
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.hamburger-menu span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger-menu span:nth-child(1) {
  top: 0px;
}

.hamburger-menu span:nth-child(2) {
  top: 9px;
  width: 70%;
}

.hamburger-menu span:nth-child(3) {
  top: 18px;
}

.hamburger-menu.open span:nth-child(1) {
  top: 9px;
  transform: rotate(135deg);
}

.hamburger-menu.open span:nth-child(2) {
  opacity: 0;
  width: 0;
}

.hamburger-menu.open span:nth-child(3) {
  top: 9px;
  transform: rotate(-135deg);
}

/* CTA button styling */
.cta-button {
  @apply bg-secondary text-white font-medium
  transform transition-all duration-300 hover:bg-secondary-light
  hover:shadow-lg relative overflow-hidden;
  box-shadow: 0 4px 12px rgba(112, 0, 255, 0.25);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-button:hover::before {
  transform: translateX(100%);
}

.cta-button-mobile {
  @apply block w-full px-6 py-3 bg-secondary text-white rounded-lg font-medium
  text-center transform transition-all duration-300 hover:bg-secondary-light
  hover:shadow-lg relative overflow-hidden;
  box-shadow: 0 4px 12px rgba(112, 0, 255, 0.25);
}

.cta-button-mobile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-button-mobile:hover::before {
  transform: translateX(100%);
}
</style>
