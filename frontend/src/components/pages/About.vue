<script setup>
import {inject} from 'vue';
import ComponentSectionLImage from "@c/fragments/ComponentSectionLImage.vue";
import ComponentSectionRImage from "@c/fragments/ComponentSectionRImage.vue";
import Publications from "@c/fragments/Publications.vue";

// Define the component name
defineOptions({
  name: 'AboutPage'
});

const $t = inject('$t');

const contentLeftSections = {
  "newProducts": {
    imageSrc: "chamber.jpg",
    title: "Changing landscape?",
    subtitle: "Be ready.",
    description: "A trusted partner for companies developing technological solutions.",
    link: "",
    buttonText: "",
  },
  "newestProductser": {
    imageSrc: "fei.jpg",
    title: "Electrons",
    subtitle: "are our tool.",
    description: "Not only when investigating superconductors or pushing them through transistors.",
    link: "",
    buttonText: "",
  },
  "newerProducts": {
    imageSrc: "plasma.jpg",
    title: "Rooted in the lab.",
    subtitle: "",
    description: "Wrocław's technological community is our incredible support",
    link: "",
    buttonText: "",
  },
  "newestProducts": {
    imageSrc: "transistor.jpg",
    title: "Optical transistors,",
    subtitle: "for the quantum internet.",
    description: "From researchers towards tech businesses. Deliver your projects faster, with better spend control and informative quality goals.",
    link: "",
    buttonText: "",
  },
};
</script>

<template>
  <div class="page-container animate-fade-in">
    <!-- Hero Section -->
    <section class="hero-section py-8 md:py-12">
      <div class="container-xl mx-auto px-4">
        <h1 class="headline-1 text-gradient text-center mb-4 mt-10">
          <span class="text-white">{{ $t('Using prisms since 1991') }}</span>
        </h1>
        <p class="body-1 text-center max-w-3xl mx-auto text-color-text-secondary text-xl">
          {{ $t('Our Services') }}
        </p>
      </div>
    </section>

    <!-- About Content Section -->
    <section class="content-section py-6">
      <div class="container-lg mx-auto px-4 max-w-5xl">
        <div class="max-w-5xl mx-auto text-color-text-secondary">
          <div class="bg-glass p-4 mb-6 content-fade-in">
            <p class="text-xl body-1">{{ $t("We offer a range of services to help you navigate technology challenges with confidence.") }}</p>
          </div>

          <div class="mb-8 content-fade-in content-fade-in-delay-1">
            <ComponentSectionLImage :content="contentLeftSections.newProducts"/>
            <div class="bg-glass p-4 mt-5">
              <h2 class="subtitle-1 mb-3">{{ $t("About the company") }}</h2>
              <p class="body-1 text-xl">
                {{ $t("With a background in enterprise software, scientific research, and technological innovation, we cover over a decade of experience in software engineering, research, and leadership. As the technical leaders, we span an expertise over secure web infrastructure, advanced computing, research projects both civilian and military. From designing logic to holographic lithorgraphy, from measuring the earth with lasers to designing energy harvesting materials, we will monetize your ideas.") }}
              </p>
            </div>
          </div>

          <div class="mb-8 content-fade-in content-fade-in-delay-2">
            <ComponentSectionRImage :content="contentLeftSections.newestProductser" />
            <div class="bg-glass p-4 mt-5">
              <h2 class="subtitle-1 mb-3">{{ $t("History") }}</h2>
              <p class="body-1 text-xl">
                {{ $t("The company has been established in 1991 offering services in geodesy, cartography and print. Since then, the company has been through both tumultuous and good times, always focusing on delivering quality services. With the advent of a new technological era, the new PRZM brand encompasses the bold move into expanding the offering beyond only one area.") }}
              </p>
            </div>
          </div>

          <div class="mb-8 content-fade-in content-fade-in-delay-3">
            <ComponentSectionLImage :content="contentLeftSections.newerProducts" />
            <div class="bg-glass p-4 mt-5">
              <h2 class="subtitle-1 mb-3">{{ $t("Our Expertise") }}</h2>
              <p class="body-1 text-xl">
                {{ $t("Our team has extensive experience in enterprise software development, computational modeling, full-stack development, scientific programming, and cutting-edge research in fields such as AI, lithography, nanotechnology, and applied physics.") }}
              </p>
            </div>
          </div>

          <div class="mb-8 content-fade-in">
            <ComponentSectionRImage :content="contentLeftSections.newestProducts" />
          </div>

          <div class="content-fade-in">
            <Publications />
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-8 md:py-12 mb-6">
      <div class="container-xl mx-auto px-4">
        <div class="bg-glass p-4 md:p-8 content-fade-in">
          <h2 class="headline-3 text-center mb-4">{{ $t("Ready to Work with Experts?") }}</h2>
          <p class="body-1 text-center text-color-text-secondary max-w-2xl mx-auto mb-6">
            {{ $t("Let's harness our expertise to solve your technology challenges.") }}
          </p>
          <div class="flex justify-center">
            <router-link to="/contact" class="btn-cta">
              {{ $t("Get in Touch") }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Using global design system classes */
</style>
