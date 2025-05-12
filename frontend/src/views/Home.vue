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
            <router-link to="/contact" class="btn btn-outline">Request a Demo</router-link>
          </div>
          
          <div class="hero-metrics">
            <div class="metric-card">
              <h3>30+</h3>
              <p>Deep projects and research</p>
            </div>
            <div class="metric-card">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div class="metric-card">
              <h3>50%</h3>
              <p>Minimal cost efficiency increase</p>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="carousel">
            <div class="carousel-inner">
              <div 
                v-for="(slide, index) in carouselSlides" 
                :key="index" 
                :class="['carousel-slide', { active: currentSlide === index }]"
                @click="handleSlideClick(slide)"
              >
                <img :src="slide.image" :alt="slide.alt" class="hero-image max-h-full w-full rounded-xl" />
                <div class="slide-overlay">
                  <span class="ml-10 slide-title">{{ slide.title }}</span>
                </div>
              </div>
            </div>
            <div class="carousel-navigation">
              <button class="carousel-nav-btn prev" @click="prevSlide" aria-label="Previous slide">
                <span class="nav-arrow">‹</span>
              </button>
              <div class="carousel-indicators mt-2">
                <button 
                  v-for="(_, index) in carouselSlides" 
                  :key="index"
                  :class="['indicator', { active: currentSlide === index }]"
                  @click="goToSlide(index)"
                  :aria-label="`Go to slide ${index + 1}`"
                ></button>
              </div>
              <button class="carousel-nav-btn next" @click="nextSlide" aria-label="Next slide">
                <span class="nav-arrow">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero-pattern"></div>
    </section>
    
    <!-- Benefits Section -->
    <section class="benefits-section section">
      <div class="container">
        <div class="section-header">
          <h2>Core Benefits</h2>
          <p>Comprehensive solutions to enhance your technological capabilities and ease building</p>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-card card">
            <div class="benefit-image rounded-xl">
              <img src="@/assets/images/image2.jpg" alt="Budget Intelligence" />
            </div>
            <h3>Budget Intelligence</h3>
            <p>Track projects and optimize resource allocation with precision analytics.</p>
          </div>
          
          <div class="benefit-card card">
            <div class="benefit-image rounded-xl">
              <img src="@/assets/images/image3.jpg" alt="Orion Network Graph" />
            </div>
            <h3>Solutions Graph</h3>
            <p>Visualize complex relationships and identify key opportunities with our proprietary research tool.</p>
          </div>
          
          <div class="benefit-card card">
            <div class="benefit-image  rounded-xl">
              <img src="@/assets/images/image4.jpg" alt="Organization Intelligence" />
            </div>
            <h3>Organization Intelligence</h3>
            <p>Gain insights into organizational structures and optimize internal workflows.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features-section section mt-20">
      <div class="container">
        <div class="section-header">
          <h2>Key Deliverables</h2>
          <p>Powerful capabilities that set our solutions apart</p>
        </div>
        
        <div class="features-container">
          <div class="feature-block">
            <h3 class="mb-2">Tailored Research Optimization</h3>
            <p>Our approach processes complex data sets to provide actionable insights for strategic decision-making.</p>
            <div class="feature-visualization">
              <img src="@/assets/sciencer.png" alt="Analytics Chart" class="rounded-xl" />
            </div>
          </div>
          
          <div class="feature-block">
            <h3 class="mb-2">Research Data Processing</h3>
            <p>Stay ahead with real-time updates and data processing capabilities for immediate decision support.</p>
            <div class="feature-visualization">
              <img src="@/assets/crunch.png" alt="Data Processing Graph" class="rounded-xl"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-section section mt-10 mb-20">
      <div class="container">
        <div class="section-header">
          <h2>On to transform capabilities</h2>
        </div>
        
        <div class="cta-button-container">
          <router-link to="/demo" class="btn btn-primary">Request a Demo</router-link>
        </div>
        
        <div class="feature-cards-grid">
          <div class="feature-card card">
            <div class="feature-card-image mb-5">
              <img src="@/assets/images/image8.jpg" alt="Defense Solutions" class="rounded-xl"/>
            </div>
            <h3>Defense</h3>
            <p>Specialized simulations and design solutions for defense sector innovation and procurement optimization.</p>
          </div>
          
          <div class="feature-card card">
            <div class="feature-card-image mb-5">
              <img src="@/assets/images/image9.jpg" alt="Healthcare Integration" />
            </div>
            <h3>Renewable Energy</h3>
            <p>Seamless integration and process design for the latest technology in printed and next-gen renewable energy sources.</p>
          </div>
          
          <div class="feature-card card">
            <div class="feature-card-image mb-5">
              <img src="@/assets/images/case-study-1.jpg" alt="Financial Analytics" class="rounded-xl"/>
            </div>
            <h3>Digital Transformation</h3>
            <p>Tools for data analysis, research data analisys and budget optimization. Agents and AI implementations.</p>
          </div>
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
      submitError: '',
      defenseFeatureEnabled: false,
      currentSlide: 0,
      carouselSlides: [
        {
          image: require('@/assets/krasnal.jpg'),
          alt: 'Research',
          title: 'Research',
          link: '/solutions'
        },
        {
          image: require('@/assets/solutionsgraph.jpg'),
          alt: 'Budget Intelligence',
          title: 'Budget Intelligence',
          link: '/budget'
        },
        {
          image: require('@/assets/solutions_graph_svg.svg'),
          alt: 'Solutions Graph',
          title: 'Solutions Graph',
          link: '/solutions'
        },
        {
          image: require('@/assets/sciencer.png'),
          alt: 'Optimization',
          title: 'Optimization',
          link: '/research'
        }
      ]
    }
  },
  mounted() {
    // Auto-advance slides
    this.startCarouselTimer();
  },
  beforeUnmount() {
    this.stopCarouselTimer();
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
    },
    showFinancialDemo() {
      // Implement the function to show financial demo
      this.$router.push('/financial-demo');
    },
    // Carousel methods
    startCarouselTimer() {
      this.carouselTimer = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change slide every 5 seconds
    },
    stopCarouselTimer() {
      clearInterval(this.carouselTimer);
    },
    resetCarouselTimer() {
      this.stopCarouselTimer();
      this.startCarouselTimer();
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
      this.resetCarouselTimer();
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.carouselSlides.length) % this.carouselSlides.length;
      this.resetCarouselTimer();
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.resetCarouselTimer();
    },
    handleSlideClick(slide) {
      if (slide.link) {
        this.$router.push(slide.link);
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
}

/* Carousel Styles */
.carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 400px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  cursor: pointer;
  overflow: hidden;
  
  &.active {
    opacity: 1;
    z-index: 1;
  }
  
  &:hover .slide-overlay {
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  transition: background-color 0.3s ease;
}

.slide-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.carousel-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  padding: 0 1rem;
  z-index: 2;
}

.carousel-nav-btn {
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  .nav-arrow {
    font-size: 1.5rem;
    line-height: 1;
  }
}

.carousel-indicators {
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &.active {
    background-color: #fff;
    transform: scale(1.2);
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
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

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.benefit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.benefit-image {
  margin-bottom: 1.5rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
}

.benefit-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.feature-block {
  padding: 2rem;
  background-color: var(--color-background-alt);
  border-radius: 0.5rem;
}

.feature-visualization {
  margin-top: 1.5rem;
  width: 100%;
}

.feature-visualization img {
  width: 100%;
  height: auto;
}

.trust-section .section-header.centered {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.world-map-container {
  width: 100%;
  text-align: center;
}

.world-map {
  max-width: 900px;
  width: 100%;
  height: auto;
}

.final-section .cta-button-container {
  text-align: center;
  margin-bottom: 3rem;
}

.feature-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
}

.feature-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.feature-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-toggle, .feature-qr-code, .interactive-button {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 0.5rem;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--color-primary);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-primary);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.feature-qr-code img {
  width: 80px;
  height: 80px;
  margin-right: 1rem;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .benefits-grid,
  .features-container,
  .feature-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .benefits-grid,
  .features-container,
  .feature-cards-grid {
    grid-template-columns: 1fr;
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