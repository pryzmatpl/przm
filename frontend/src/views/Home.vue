<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Advanced 
            <span class="text-primary">Technological Solutions</span> 
            for High-Tech Industries
          </h1>
          <p class="hero-subtitle">
            We deliver tailored troubleshooting and efficiency solutions that drive innovation 
            across defense, healthcare, finance, and beyond.
          </p>
          <div class="hero-actions">
            <router-link to="/solutions" class="btn btn-primary">Explore Solutions</router-link>
            <router-link to="/demo" class="btn btn-outline">Request a Demo</router-link>
          </div>
          
          <div class="hero-metrics">
            <div class="metric-card">
              <h3>10M+</h3>
              <p>Opportunities Tracked</p>
            </div>
            <div class="metric-card">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div class="metric-card">
              <h3>3x</h3>
              <p>Efficiency Increase</p>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <img src="@/assets/images/hero-visual.svg" alt="Advanced Analytics Dashboard" class="hero-image" />
        </div>
      </div>
      
      <div class="hero-pattern"></div>
    </section>
    
    <!-- Services Section -->
    <section class="services-section section">
      <div class="container">
        <div class="section-header">
          <h2>Our Core Services</h2>
          <p>Comprehensive solutions to enhance your technological capabilities</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card card">
            <div class="service-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Budget Intelligence</h3>
            <p>Track financial data and optimize resource allocation with precision analytics.</p>
            <router-link to="/services/budget-intelligence" class="service-link">Learn more</router-link>
          </div>
          
          <div class="service-card card">
            <div class="service-icon">
              <i class="fas fa-project-diagram"></i>
            </div>
            <h3>Orion™ Network Graph</h3>
            <p>Visualize complex relationships and identify key opportunities with our proprietary tool.</p>
            <router-link to="/services/orion-network" class="service-link">Learn more</router-link>
          </div>
          
          <div class="service-card card">
            <div class="service-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3>Organization Intelligence</h3>
            <p>Gain insights into organizational structures and optimize internal workflows.</p>
            <router-link to="/services/org-intelligence" class="service-link">Learn more</router-link>
          </div>
          
          <div class="service-card card">
            <div class="service-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>AI-Powered Assistant</h3>
            <p>Leverage cutting-edge AI to automate processes and enhance decision-making.</p>
            <router-link to="/services/ai-assistant" class="service-link">Learn more</router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Case Studies Section -->
    <section class="case-studies-section section">
      <div class="container">
        <div class="section-header">
          <h2>Success Stories</h2>
          <p>Real results from our technological solutions</p>
        </div>
        
        <div class="case-studies-slider">
          <div class="case-study-card card">
            <div class="case-study-content">
              <h3>Defense Innovation Acceleration</h3>
              <p class="case-study-company">Major Defense Contractor</p>
              <p class="case-study-result">Reduced contract analysis time by 75% and increased success rate by 40%</p>
              <p>Using our Orion™ Network Graph and Budget Intelligence services, we helped streamline the procurement process and identify key opportunities.</p>
              <router-link to="/case-studies/defense-innovation" class="btn btn-outline">Read Full Case Study</router-link>
            </div>
            <div class="case-study-visual">
              <img src="@/assets/images/case-study-1.jpg" alt="Defense Innovation Visualization" />
            </div>
          </div>
          
          <!-- More case studies here... -->
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials-section section">
      <div class="container">
        <div class="section-header">
          <h2>What Our Clients Say</h2>
          <p>Trusted by leaders in tech and innovation</p>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card card">
            <div class="testimonial-quote">"Pryzm.at's solutions have transformed how we approach market intelligence. The efficiency gains have been remarkable."</div>
            <div class="testimonial-author">
              <img src="@/assets/images/testimonial-1.jpg" alt="Sarah Johnson" class="testimonial-avatar" />
              <div class="testimonial-info">
                <h4>Sarah Johnson</h4>
                <p>CTO, InnovaTech Solutions</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card card">
            <div class="testimonial-quote">"The Orion Network Graph provided insights we couldn't have discovered otherwise. It's become an essential tool for our strategy team."</div>
            <div class="testimonial-author">
              <img src="@/assets/images/testimonial-2.jpg" alt="James Rodriguez" class="testimonial-avatar" />
              <div class="testimonial-info">
                <h4>James Rodriguez</h4>
                <p>Director of Operations, DefenseTech Inc.</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card card">
            <div class="testimonial-quote">"Pryzm.at doesn't just provide data - they provide actionable intelligence that has measurably improved our decision-making process."</div>
            <div class="testimonial-author">
              <img src="@/assets/images/testimonial-3.jpg" alt="Michelle Chang" class="testimonial-avatar" />
              <div class="testimonial-info">
                <h4>Michelle Chang</h4>
                <p>Head of Procurement, Global Health Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-container card">
          <h2>Ready to Transform Your Technological Capabilities?</h2>
          <p>Schedule a personalized demo to see how our solutions can address your specific challenges.</p>
          <form @submit.prevent="submitDemoRequest" class="cta-form">
            <div class="form-group">
              <input type="email" v-model="email" placeholder="Your Email" required />
            </div>
            <div class="form-group">
              <input type="text" v-model="company" placeholder="Company Name" required />
            </div>
            <div class="form-group">
              <input type="text" v-model="name" placeholder="Your Name" required />
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">Request Demo</button>
          </form>
          <p v-if="submitError" class="error-message">{{ submitError }}</p>
          <p v-if="submitSuccess" class="success-message">Demo request submitted successfully!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'HomePage',
  data() {
    return {
      email: '',
      company: '',
      name: '',
      loading: false,
      submitSuccess: false,
      submitError: ''
    }
  },
  methods: {
    async submitDemoRequest() {
      this.loading = true;
      this.submitSuccess = false;
      this.submitError = '';
      
      try {
        // Prepare the data
        const demoData = {
          email: this.email,
          company: this.company,
          name: this.name,
          timestamp: new Date().toISOString()
        };
        
        // Submit the request to the backend
        const response = await api.submitDemoRequest(demoData);
        
        // Handle success
        if (response.data.status === 'success') {
          this.submitSuccess = true;
          // Reset form
          this.email = '';
          this.company = '';
          this.name = '';
          
          // Optional: redirect to confirmation page
          // this.$router.push('/demo-confirmation');
        }
      } catch (error) {
        // Handle error
        console.error('Error submitting demo request:', error);
        this.submitError = 'There was an error submitting your request. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  },
  metaInfo: {
    title: 'Pryzm.at - Advanced Technological Solutions',
    meta: [
      { name: 'description', content: 'Pryzm.at delivers technological troubleshooting and tailored solutions for high-tech industries including defense, healthcare, and finance.' },
      { name: 'keywords', content: 'technological solutions, data analytics, defense innovation, budget intelligence, AI assistant' }
    ]
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 8rem 0 5rem;
  overflow: hidden;
  
  .container {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
}

.hero-content {
  flex: 1;
  max-width: 600px;
  margin-right: 2rem;
  
  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 3rem;
    text-align: center;
  }
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: $text-secondary;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
}

.hero-metrics {
  display: flex;
  gap: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.metric-card {
  background-color: $background-light;
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 3px solid $primary;
  
  h3 {
    font-size: 2.5rem;
    color: $primary;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: $text-secondary;
    font-size: 0.9rem;
  }
}

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .hero-image {
    max-width: 100%;
    animation: float 6s ease-in-out infinite;
  }
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(0, 230, 118, 0.1) 2px, transparent 2px);
  background-size: 30px 30px;
  opacity: 0.5;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: $primary;
    }
  }
  
  p {
    color: $text-secondary;
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  text-align: center;
  
  .service-icon {
    background: $dark-gradient;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: $primary;
    font-size: 2rem;
    border: 2px solid rgba($primary, 0.3);
  }
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: $text-secondary;
    margin-bottom: 1.5rem;
  }
  
  .service-link {
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    
    &::after {
      content: '→';
      margin-left: 0.5rem;
      transition: transform $transition-fast ease;
    }
    
    &:hover::after {
      transform: translateX(5px);
    }
  }
}

.case-study-card {
  display: flex;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.case-study-content {
  flex: 1;
  padding: 2rem;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .case-study-company {
    color: $primary;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .case-study-result {
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  
  p {
    color: $text-secondary;
    margin-bottom: 1.5rem;
  }
}

.case-study-visual {
  flex: 1;
  max-height: 400px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    max-height: 250px;
  }
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  .testimonial-quote {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-style: italic;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '"';
      position: absolute;
      left: 0;
      top: -5px;
      font-size: 3rem;
      color: rgba($primary, 0.2);
      font-family: Georgia, serif;
    }
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
  
  .testimonial-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
    object-fit: cover;
  }
  
  .testimonial-info {
    h4 {
      margin-bottom: 0.25rem;
    }
    
    p {
      color: $text-secondary;
      font-size: 0.9rem;
    }
  }
}

.cta-section {
  background: $dark-gradient;
}

.cta-container {
  text-align: center;
  padding: 4rem;
  max-width: 800px;
  margin: 0 auto;
  background: $dark-gradient;
  border: 1px solid rgba($primary, 0.2);
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: $text-secondary;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
}

.cta-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  .form-group {
    flex: 1;
    min-width: 240px;
    
    input {
      width: 100%;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid rgba($text-secondary, 0.3);
      background-color: rgba($background-light, 0.8);
      color: $text-primary;
      font-size: 1rem;
      
      &:focus {
        outline: none;
        border-color: $primary;
      }
    }
  }
  
  button {
    min-width: 150px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style> 