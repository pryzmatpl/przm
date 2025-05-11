<template>
  <header class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container navbar-container">
      <router-link to="/" class="navbar-logo">
        <img src="@/assets/images/logo.svg" alt="Pryzm.at Logo" />
      </router-link>
      
      <div class="navbar-menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav class="navbar-menu" :class="{ 'active': menuActive }">
        <ul class="navbar-links">
          <li><router-link to="/" class="navbar-link">Home</router-link></li>
          <li><router-link to="/services" class="navbar-link">Services</router-link></li>
          <li><router-link to="/solutions" class="navbar-link">Solutions</router-link></li>
          <li><router-link to="/case-studies" class="navbar-link">Case Studies</router-link></li>
          <li><router-link to="/about" class="navbar-link">About</router-link></li>
        </ul>
        
        <div class="navbar-actions">
          <router-link to="/contact" class="btn btn-outline">Contact Us</router-link>
          <router-link to="/demo" class="btn btn-primary">Request Demo</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      scrolled: false,
      menuActive: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    },
    toggleMenu() {
      this.menuActive = !this.menuActive;
      document.body.style.overflow = this.menuActive ? 'hidden' : '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all $transition-normal ease;
  background-color: rgba($background-dark, 0.8);
  backdrop-filter: blur(10px);
  
  &.navbar-scrolled {
    padding: 0.5rem 0;
    background-color: rgba($background-dark, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  img {
    height: 40px;
  }
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-links {
  display: flex;
  list-style: none;
  margin-right: 2rem;
  
  li {
    margin: 0 1rem;
  }
}

.navbar-link {
  color: $text-primary;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $primary;
    transition: width $transition-fast ease;
  }
  
  &:hover, &.router-link-active {
    color: $primary;
    
    &::after {
      width: 100%;
    }
  }
}

.navbar-actions {
  display: flex;
  gap: 1rem;
}

.navbar-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: $text-primary;
    transition: all $transition-fast ease;
  }
}

@media (max-width: 992px) {
  .navbar-menu-toggle {
    display: flex;
  }
  
  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background-color: $background-light;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
    transition: right $transition-normal ease;
    
    &.active {
      right: 0;
    }
  }
  
  .navbar-links {
    flex-direction: column;
    margin: 0 0 2rem 0;
    width: 100%;
    
    li {
      margin: 1rem 0;
    }
  }
  
  .navbar-link {
    font-size: 1.2rem;
    display: block;
    width: 100%;
  }
  
  .navbar-actions {
    flex-direction: column;
    width: 100%;
    
    .btn {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
}
</style> 