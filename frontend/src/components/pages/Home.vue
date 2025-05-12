<script setup>
import {inject, computed, ref} from 'vue';
import WelcomeBox from '@c/fragments/WelcomeBox.vue';
import ComponentSectionLImage from "@c/fragments/ComponentSectionLImage.vue";
import ComponentSectionRImage from "@c/fragments/ComponentSectionRImage.vue";

// Define the component name
defineOptions({
  name: 'HomePage'
});

const $t=inject('$t');

// Check if video versions exist for prism.gif
const prismMp4Exists = computed(() => {
  try {
    require('@/assets/prism.mp4');
    return true;
  } catch (e) {
    return false;
  }
});

const prismWebmExists = computed(() => {
  try {
    require('@/assets/prism.webm');
    return true;
  } catch (e) {
    return false;
  }
});

// Define section content
const contentLeftSections = {
  "newProducts": {
    imageSrc: prismMp4Exists.value ? "prism-video" : "prism.gif",
    title: "Develop new products,",
    subtitle: "with confidence.",
    description: "Light carries both the visible and the invisible. Our solutions give you decision aid, nimbleness, and correct results.",
    link: "/solutions",
    buttonText: "Explore Solutions",
    hasVideoVersion: prismMp4Exists.value && prismWebmExists.value,
    primaryCta: true,
    showButton: true,
  },
  "technologyForYou": {
    imageSrc: "microlens.jpg",
    title: "Technology working",
    subtitle: "for you.",
    description: "Prism guides through tech complexities. We simplify the intricate world of technology, offering clear solutions for your projects. With us, navigate confidently, harnessing technology's true potential.",
    link: "/portfolio",
    buttonText: "View Our Work",
    right: true,
    secondaryCta: true,
    showButton: true,
  },
  "callToAction": {
    imageSrc: "holo.jpg",
    title: "Holographic precision,",
    subtitle: "when destroying process issues",
    description: "Our battle tested formulas give you unprecedented insight into what works and what does not. Hire us and make your teams deliver with confidence.",
    link: "/contact",
    buttonText: "Contact Us",
    primaryCta: true,
    showButton: true,
  },
};

// Features list for benefits section
const features = [
  {
    title: "Advanced R&D",
    description: "Cutting-edge research and development solutions for complex technological challenges.",
    icon: "microscope",
  },
  {
    title: "Expert Consultation",
    description: "Strategic technological guidance from industry experts with proven track records.",
    icon: "brain",
  },
  {
    title: "Rapid Prototyping",
    description: "Quick iteration and development of proof-of-concept prototypes to validate ideas.",
    icon: "bolt",
  },
  {
    title: "Seamless Integration",
    description: "Smooth incorporation of new technologies into your existing infrastructure.",
    icon: "puzzle",
  },
];

// Testimonials data
const testimonials = ref([
  {
    quote: "The Pryzmat team delivered beyond our expectations. Their technological insights transformed our product development process.",
    author: "Sarah Chen",
    role: "CTO, TechVision Inc.",
  },
  {
    quote: "Working with Pryzmat was a game-changer for our R&D department. Their precision and expertise accelerated our innovation pipeline.",
    author: "Mark Johnson",
    role: "Head of Innovation, Future Systems",
  },
]);

const defaultMessage = $t("Our approach offers precision, agility, and insight, empowering you to navigate both the visible and invisible challenges of technology.");
</script>

<template>
  <div class="page-container">
    <!-- Hero Section with enhanced animation -->
    <section class="hero-section py-12 md:py-20">
      <div class="container-xl mx-auto px-4">
        <div class="content-fade-in max-w-5xl mx-auto">
          <WelcomeBox :heading="true" :message="defaultMessage" />

          <!-- Hero CTA buttons -->
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <router-link to="/contact" class="btn-cta">
              Schedule Consultation
              <span class="btn-arrow">→</span>
            </router-link>
            <router-link to="/portfolio" class="btn-hero-secondary">
              View Our Work
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="content-section py-12 md:py-16 max-w-5xl mx-auto text-color-text-secondary">
      <div class="container-xl mx-auto px-4">
        <div class="content-fade-in content-fade-in-delay-1">
          <ComponentSectionLImage :content="contentLeftSections.newProducts" />
        </div>
      </div>
    </section>

    <!-- Features Grid Section -->
    <section class="features-section py-12 md:py-16 bg-glass">
      <div class="container-xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-indigo-300 mb-12">
          How We <span class="text-sky-200">Transform</span> Your Technology
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index"
               class="feature-card p-6 bg-glass-elevated hover:transform hover:scale-105 transition-all duration-300">
            <div class="feature-icon mb-4">
              <!-- You can replace this with actual icon components if available -->
              <div class="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <span class="text-indigo-300 text-xl">{{ feature.icon }}</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-sky-200 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-300">{{ feature.description }}</p>
          </div>
        </div>

        <div class="flex justify-center mt-10">
          <router-link to="/solutions" class="btn-section-cta">
            Discover Our Capabilities
            <span class="ml-2">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Technology Showcase Section -->
    <section class="content-section py-12 md:py-16 max-w-5xl mx-auto text-color-text-secondary">
      <div class="container-xl mx-auto px-4">
        <div class="content-fade-in content-fade-in-delay-2">
          <ComponentSectionRImage :content="contentLeftSections.technologyForYou" />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section py-12 md:py-16">
      <div class="container-xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-indigo-300 mb-12">
          Trusted By <span class="text-sky-200">Industry Leaders</span>
        </h2>

        <div class="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div v-for="(testimonial, index) in testimonials" :key="index"
               class="testimonial-card p-6 bg-glass hover:transform hover:scale-105 transition-all duration-300">
            <div class="quote-mark text-3xl text-indigo-300 opacity-50">"</div>
            <p class="text-gray-300 my-4 text-lg italic">{{ testimonial.quote }}</p>
            <div class="flex items-center mt-4">
              <div class="ml-3">
                <p class="font-medium text-sky-200">{{ testimonial.author }}</p>
                <p class="text-sm text-gray-400">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="content-section py-12 md:py-16 max-w-5xl mx-auto text-color-text-secondary">
      <div class="container-xl mx-auto px-4">
        <div class="content-fade-in content-fade-in-delay-3">
          <ComponentSectionLImage :content="contentLeftSections.callToAction" />
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="cta-section py-12 md:py-16 mb-6">
      <div class="container-xl mx-auto px-4">
        <div class="bg-glass p-8 md:p-12 shadow-glow content-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-indigo-300 mb-4">Ready to Transform Your Technology?</h2>
          <p class="text-center text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Work with us to develop innovative solutions and streamline your technological processes with confidence.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <router-link to="/contact" class="btn-cta">
              Schedule a Consultation
              <span class="btn-arrow">→</span>
            </router-link>
            <router-link to="/solutions" class="btn-cta-secondary">
              Explore Our Services
            </router-link>
          </div>

          <!-- Additional contact option -->
          <p class="text-center text-gray-400 mt-6">
            Or call us directly: <a href="tel:+1234567890" class="text-sky-200 hover:underline">+123 456 7890</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Enhanced design elements */
.bg-glass {
  background-color: rgba(19, 27, 43, 0.75);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-xl);
}

.bg-glass-elevated {
  background-color: rgba(25, 35, 55, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--border-radius-xl);
  transition: all 0.3s ease;
}

.bg-glass-elevated:hover {
  box-shadow: 0 0 30px rgba(112, 0, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.15);
}

.shadow-glow {
  box-shadow: 0 0 30px rgba(112, 0, 255, 0.1), 0 0 60px rgba(0, 102, 255, 0.05);
}

/* Hero buttons */
.btn-cta {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--secondary-dark));
  color: white;
  font-weight: 600;
  border-radius: 9999px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(112, 0, 255, 0.25);
  position: relative;
  overflow: hidden;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(112, 0, 255, 0.4);
}

.btn-cta:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.btn-cta:hover:before {
  transform: translateX(100%);
}

.btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--dark-text-primary);
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-full);
  transition: all 0.3s ease;
}

.btn-hero-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-arrow {
  display: inline-block;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.btn-hero-primary:hover .btn-arrow,
.btn-primary-large:hover .btn-arrow,
.btn-cta:hover .btn-arrow {
  transform: translateX(4px);
}

/* Section CTA button */
.btn-section-cta {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  background-color: rgba(112, 0, 255, 0.2);
  color: var(--secondary-light);
  font-weight: 600;
  border: 1px solid rgba(157, 77, 255, 0.3);
  border-radius: var(--border-radius-full);
  transition: all 0.3s ease;
}

.btn-section-cta:hover {
  background-color: rgba(112, 0, 255, 0.3);
  transform: translateY(-2px);
}

/* Final CTA buttons */
.btn-primary-large {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--secondary-dark));
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(112, 0, 255, 0.25);
  position: relative;
  overflow: hidden;
}

.btn-primary-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(112, 0, 255, 0.4);
}

.btn-primary-large:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.btn-primary-large:hover:before {
  transform: translateX(100%);
}

.btn-secondary-large {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: var(--dark-text-primary);
  font-weight: 600;
  font-size: 1.125rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.btn-secondary-large:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  animation: fadeIn 1s ease 1s forwards;
  opacity: 0;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
}

.wheel {
  width: 4px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  animation: scrollWheel 2s ease infinite;
}

.scroll-text {
  font-size: 12px;
  margin-top: 8px;
  letter-spacing: 1px;
  font-weight: 300;
}

@keyframes scrollWheel {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(16px);
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Testimonial cards */
.testimonial-card {
  position: relative;
  overflow: hidden;
}

.quote-mark {
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 4rem;
  opacity: 0.1;
  font-family: serif;
}

/* Animation classes */
.content-fade-in {
  animation: fadeIn 0.7s ease forwards;
}

.content-fade-in-delay-1 {
  animation: fadeIn 0.7s ease 0.2s forwards;
  opacity: 0;
}

.content-fade-in-delay-2 {
  animation: fadeIn 0.7s ease 0.4s forwards;
  opacity: 0;
}

.content-fade-in-delay-3 {
  animation: fadeIn 0.7s ease 0.6s forwards;
  opacity: 0;
}
</style>
