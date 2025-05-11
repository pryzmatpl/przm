<script setup>
import {defineComponent} from 'vue';
import Navbar from '@c/sections/DefaultNavbar.vue';
import AFooter from '@c/sections/Footer.vue';

defineComponent({
  components: {Navbar, AFooter},
  name: 'DefaultLayout',
});
</script>

<template>
    <div class="layout">
        <Navbar></Navbar>
        <main class="main-content">
            <!--The <slot> element is a slot outlet that indicates
                where the "VIEW" content should be rendered.-->
            <slot></slot>
        </main>

        <AFooter></AFooter>

      <!-- Glossy Effects -->
      <div class="fixed inset-0 z-[-1] pointer-events-none">
        <!-- Top left glow -->
        <div class="absolute left-80 -bottom-40 w-96 h-96 bg-blue-200 dark:bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl opacity-30 animate-pulse"></div>
        <!-- Bottom right glow -->
        <div class="absolute right-80 -bottom-40 w-96 h-96 bg-purple-200 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

    </div>
</template>
<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
  linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px);
  background-size: 4rem 4rem;
}

.dark .bg-grid-pattern {
  background-image: linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
  linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
</style>
