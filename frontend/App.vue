<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import './src/index.css'
import {onMounted} from "vue";
import {config} from './src/config';

onMounted(() => {
  document.title = config['title'];
  // Delay loading of prism background for better LCP
  setTimeout(() => {
    document.documentElement.classList.add('prism-loaded');
  }, 100);
});

</script>

<template>
  <div class="app-wrapper">
    <!-- Background effects -->
    <div class="background-effects">
      <!-- Beautiful Prism -->
      <div class="beautiful-prism"></div>
      <!-- Gradient orbs -->
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>

      <!-- Grid pattern -->
      <div class="grid-pattern"></div>

      <!-- Animated particles for depth -->
      <div class="particles">
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
        <div class="particle p4"></div>
        <div class="particle p5"></div>
      </div>
    </div>

    <DefaultLayout>
      <router-view></router-view>
    </DefaultLayout>
  </div>
</template>

<style>
:root {
  /* 2025 Modern color palette with navy base color */
  --primary-color: #131b2b;
  --primary-dark: #0d131e;
  --primary-light: #263656;
  --secondary-color: #7000FF;
  --secondary-dark: #5C00CC;
  --secondary-light: #9D4DFF;
  --success-color: #00CC77;
  --warning-color: #FF8800;
  --danger-color: #FF3355;
  --info-color: #00CCFF;

  /* Dark theme as default with navy background */
  --dark-background: rgba(19, 27, 43, 0.97);
  --dark-surface: rgba(25, 35, 55, 0.95);
  --dark-surface-elevated: rgba(32, 45, 70, 0.9);
  --dark-surface-pressed: rgba(16, 23, 36, 0.98);

  /* Light theme options (still available but dark is default) */
  --light-background: rgba(245, 245, 250, 0.9);
  --light-surface: rgba(255, 255, 255, 0.85);
  --light-surface-elevated: rgba(255, 255, 255, 0.95);
  --light-surface-pressed: rgba(240, 240, 245, 0.9);

  /* Text colors with optimal contrast for readability */
  --dark-text-primary: rgba(255, 255, 255, 0.95);
  --dark-text-secondary: rgba(200, 200, 210, 0.8);
  --dark-text-tertiary: rgba(180, 180, 190, 0.6);
  --light-text-primary: rgba(10, 10, 12, 0.95);
  --light-text-secondary: rgba(40, 40, 45, 0.8);
  --light-text-tertiary: rgba(80, 80, 85, 0.6);

  /* Modern spacing system */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4rem;
  --space-12: 5rem;

  /* Refined border radii for 2025 */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;
  --radius-2xl: 2.5rem;
  --radius-full: 9999px;

  /* Enhanced shadows with more depth and subtlety */
  --shadow-subtle: 0 2px 10px rgba(0, 0, 0, 0.06);
  --shadow-light: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
  --shadow-strong: 0 12px 40px rgba(0, 0, 0, 0.16);
  --shadow-intense: 0 20px 60px rgba(0, 0, 0, 0.2);

  /* Glass effect variables with higher quality blur */
  --glass-blur: 16px;
  --glass-opacity: 0.6;
  --glass-border: 1px solid rgba(255, 255, 255, 0.08);
  --glass-saturation: 180%;

  /* Animation and transition speeds */
  --transition-fast: 0.15s;
  --transition-medium: 0.25s;
  --transition-slow: 0.4s;
  --transition-curve: cubic-bezier(0.16, 1, 0.3, 1);

  /* Typography - 2025 trends with variable fonts */
  --font-primary: 'Space Grotesk', 'Inter var', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-display: 'Outfit', 'Montserrat', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;

  /* Typographic scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  --text-7xl: 4.5rem;    /* 72px */
  --text-8xl: 6rem;      /* 96px */

  /* Line heights */
  --leading-none: 1;
  --leading-tight: 1.2;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Font weights for variable fonts */
  --weight-thin: 100;
  --weight-extralight: 200;
  --weight-light: 300;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;
  --weight-black: 900;
}

/* Base styling with modern dark-by-default approach */
body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  background-color: var(--dark-background);
  color: var(--dark-text-primary);
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background-image:
    radial-gradient(circle at 15% 50%, rgba(38, 54, 86, 0.1) 0%, transparent 60%),
    radial-gradient(circle at 85% 30%, rgba(112, 0, 255, 0.04) 0%, transparent 60%);
  min-height: 100vh;
  scroll-behavior: smooth;
}

/* Add modern font imports */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap');

.light-mode {
  background-color: var(--light-background);
  color: var(--light-text-primary);
  background-image:
    radial-gradient(circle at 15% 50%, rgba(38, 54, 86, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 85% 30%, rgba(112, 0, 255, 0.08) 0%, transparent 60%);
}

/* Modern container with auto spacing */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-4);
  }
}

/* Main content padding to account for fixed navbar */
.app-wrapper {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Create space for the fixed navbar */
.app-wrapper > div:first-of-type:not(.background-effects) {
  padding-top: 5rem; /* Adjust based on navbar height */
}

/* 2025 Background effects */
.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

/* Beautiful Prism */
.beautiful-prism {
  position: absolute;
  width: 40%;
  height: 70%;
  top: 15%;
  right: 5%;
  background-image: url('~@/assets/beautiful-prism.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.2));
  transform: rotate(-5deg);
  animation: prismFloat 40s infinite ease-in-out;
  z-index: -1;
  content-visibility: auto;
  will-change: transform;
  background-image: none;
}

.prism-loaded .beautiful-prism {
  background-image: url('~@/assets/beautiful-prism.webp'), url('~@/assets/beautiful-prism.png');
}

@keyframes prismFloat {
  0%, 100% { transform: rotate(-5deg) translateY(0); }
  50% { transform: rotate(-5deg) translateY(-20px); }
}

/* Gradient orbs with subtle animation */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
}

.light .gradient-orb {
  opacity: 0.15;
}

.orb-1 {
  width: 40vw;
  height: 40vw;
  top: -15vw;
  right: -10vw;
  background: radial-gradient(circle, rgba(var(--color-primary-light), 0.3), transparent 70%);
  animation: float1 40s infinite ease-in-out;
}

.orb-2 {
  width: 35vw;
  height: 35vw;
  bottom: -10vw;
  left: -10vw;
  background: radial-gradient(circle, rgba(var(--color-secondary), 0.3), transparent 70%);
  animation: float2 50s infinite ease-in-out;
}

.orb-3 {
  width: 25vw;
  height: 25vw;
  top: 30vh;
  left: 20vw;
  background: radial-gradient(circle, rgba(var(--color-info), 0.2), transparent 70%);
  animation: float3 45s infinite ease-in-out;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(50px, 30px); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -50px); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(-20px, 30px); }
  66% { transform: translate(20px, -20px); }
}

/* Grid pattern */
.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 50px 50px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  opacity: 0.4;
}

.light .grid-pattern {
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  opacity: 0.3;
}

/* Animated particles */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(var(--color-primary-light), 0.5), rgba(var(--color-secondary), 0.5));
  filter: blur(3px);
  opacity: 0.3;
}

.light .particle {
  opacity: 0.15;
}

.p1 {
  width: 10px;
  height: 10px;
  top: 20%;
  left: 15%;
  animation: particleFloat 20s infinite linear;
}

.p2 {
  width: 15px;
  height: 15px;
  top: 60%;
  left: 75%;
  animation: particleFloat 25s infinite linear reverse;
}

.p3 {
  width: 8px;
  height: 8px;
  top: 80%;
  left: 25%;
  animation: particleFloat 30s infinite linear;
}

.p4 {
  width: 12px;
  height: 12px;
  top: 35%;
  left: 85%;
  animation: particleFloat 22s infinite linear reverse;
}

.p5 {
  width: 7px;
  height: 7px;
  top: 50%;
  left: 50%;
  animation: particleFloat 28s infinite linear;
}

@keyframes particleFloat {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(100px, 50px) rotate(90deg); }
  50% { transform: translate(50px, 100px) rotate(180deg); }
  75% { transform: translate(-50px, 50px) rotate(270deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}

/* Optimizations for performance */
@media (prefers-reduced-motion: reduce) {
  .gradient-orb, .particle, .beautiful-prism {
    animation: none !important;
  }
}
</style>
