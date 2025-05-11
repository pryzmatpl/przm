<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <img src="@/assets/images/logo.svg" alt="Pryzm.at Logo" />
          </router-link>
          <p class="footer-tagline">Advanced Technological Solutions for High-Tech Industries</p>
          <div class="footer-social">
            <a href="#" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" target="_blank" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-nav">
          <div class="footer-nav-column">
            <h3>Services</h3>
            <ul>
              <li><router-link to="/services/budget-intelligence">Budget Intelligence</router-link></li>
              <li><router-link to="/services/relationship-management">Relationship Management</router-link></li>
              <li><router-link to="/services/orion-network">Orion™ Network Graph</router-link></li>
              <li><router-link to="/services/ai-assistant">AI-Powered Assistant</router-link></li>
            </ul>
          </div>
          
          <div class="footer-nav-column">
            <h3>Solutions</h3>
            <ul>
              <li><router-link to="/solutions/defense">Defense</router-link></li>
              <li><router-link to="/solutions/healthcare">Healthcare</router-link></li>
              <li><router-link to="/solutions/finance">Finance</router-link></li>
              <li><router-link to="/solutions/government">Government</router-link></li>
            </ul>
          </div>
          
          <div class="footer-nav-column">
            <h3>Company</h3>
            <ul>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/careers">Careers</router-link></li>
              <li><router-link to="/case-studies">Case Studies</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
            </ul>
          </div>
          
          <div class="footer-nav-column">
            <h3>Resources</h3>
            <ul>
              <li><router-link to="/documentation">Documentation</router-link></li>
              <li><router-link to="/support">Support</router-link></li>
              <li><router-link to="/privacy">Privacy Policy</router-link></li>
              <li><router-link to="/terms">Terms of Service</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Pryzm.at. All rights reserved.</p>
        <p>
          <router-link to="/privacy">Privacy</router-link> | 
          <router-link to="/terms">Terms</router-link> | 
          <router-link to="/cookies">Cookies</router-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.footer {
  background-color: $background-light;
  padding-top: 5rem;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
}

.footer-brand {
  flex: 1;
  min-width: 250px;
  
  .footer-logo {
    display: inline-block;
    margin-bottom: 1.5rem;
    
    img {
      height: 40px;
    }
  }
  
  .footer-tagline {
    color: $text-secondary;
    margin-bottom: 1.5rem;
    max-width: 300px;
  }
}

.footer-social {
  display: flex;
  gap: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba($primary, 0.1);
    color: $primary;
    transition: all $transition-fast ease;
    
    &:hover {
      background-color: $primary;
      color: $background-dark;
    }
  }
}

.footer-nav {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 3rem;
  }
}

.footer-nav-column {
  flex: 1;
  min-width: 150px;
  
  h3 {
    color: $text-primary;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: $primary;
    }
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        color: $text-secondary;
        transition: color $transition-fast ease;
        
        &:hover {
          color: $primary;
        }
      }
    }
  }
}

.footer-bottom {
  padding: 2rem 0;
  border-top: 1px solid rgba($text-secondary, 0.1);
  display: flex;
  justify-content: space-between;
  color: $text-secondary;
  flex-wrap: wrap;
  gap: 1rem;
  
  p {
    font-size: 0.9rem;
  }
  
  a {
    color: $text-secondary;
    
    &:hover {
      color: $primary;
    }
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
}
</style> 