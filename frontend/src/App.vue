<template>
  <div id="app" class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Roboto', sans-serif;
  background-color: $background-dark;
  color: $text-primary;
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 10;
}

a {
  color: $primary;
  text-decoration: none;
  transition: color $transition-fast ease;
  
  &:hover {
    color: $primary-dark;
  }
}

.section {
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.card {
  background-color: $background-light;
  border-radius: 8px;
  box-shadow: $card-shadow;
  padding: 2rem;
  transition: transform $transition-normal ease, box-shadow $transition-normal ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  }
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all $transition-fast ease;
  border: none;
  
  &.btn-primary {
    background: $primary-gradient;
    color: $background-dark;
    box-shadow: $button-shadow;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 230, 118, 0.3);
    }
  }
  
  &.btn-outline {
    background: transparent;
    border: 2px solid $primary;
    color: $primary;
    
    &:hover {
      background: rgba($primary, 0.1);
    }
  }
}

.text-primary {
  color: $primary;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity $transition-normal;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style> 