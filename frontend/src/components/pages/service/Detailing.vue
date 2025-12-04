<script setup>
import WelcomeBox from '@c/fragments/WelcomeBox.vue';
import SolutionChatWindow from '@c/fragments/SolutionChatWindow.vue';

defineOptions({
  name: 'CodeDetailing'
});
</script>

<template>
  <div class="blog-post-page p-6 md:p-10">
    <WelcomeBox headingStr="Code Detailing" message="Remove Scratches, Bruises and Dents from Your Product's Code" />

    <!-- Main Content -->
    <article class="max-w-4xl mx-auto pt-8">
      <!-- Introduction -->
      <section class="bg-glass p-8 rounded-xl mb-8">
        <p class="text-xl text-gray-300 leading-relaxed mb-6">
          Scaled too fast? Runway longer than expected, even though you're at warp speed? At PRZM, we assure your code is tested, refactored, and ready for any deployment within a containerized environment.
        </p>
        <p class="text-lg text-gray-400 leading-relaxed">
          Rooted in the lab, we understand that code quality isn't just about functionality—it's about precision, reliability, and the kind of attention to detail that separates research-grade solutions from production slop.
        </p>
      </section>

      <!-- The Problem -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">The Problem: Technical Debt Accumulates Like Rust</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            Every codebase accumulates scratches, bruises, and dents over time. Untested code paths become ticking time bombs. Refactoring opportunities get deferred. Containerization becomes an afterthought. What starts as "we'll fix it later" becomes a tangled mess that slows deployment, increases risk, and drains engineering velocity.
          </p>
          <p class="text-gray-300 leading-relaxed">
            In research environments, we've seen this pattern: rapid prototyping leads to production code that works but isn't production-grade. The gap between "it works" and "it's ready" is where technical debt lives.
          </p>
        </div>
      </section>

      <!-- The Solution -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Code Detailing: From Slop to Solid</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            Code Detailing is our systematic approach to transforming your codebase from functional to excellent. We don't just fix bugs—we polish, optimize, and harden your code until it's ready for any deployment scenario.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-gray-800/50 p-5 rounded-lg border border-blue-500/20">
              <h3 class="text-xl font-bold text-blue-400 mb-3">Comprehensive Testing</h3>
              <p class="text-gray-300 text-sm">
                We write tests that matter. Unit tests, integration tests, and end-to-end coverage that catches regressions before they reach production. No test theater—just real coverage.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-blue-500/20">
              <h3 class="text-xl font-bold text-blue-400 mb-3">Strategic Refactoring</h3>
              <p class="text-gray-300 text-sm">
                We identify and refactor code that's working but fragile. Extract patterns, reduce complexity, improve maintainability—without breaking what works.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-blue-500/20">
              <h3 class="text-xl font-bold text-blue-400 mb-3">Containerization Ready</h3>
              <p class="text-gray-300 text-sm">
                We ensure your code deploys cleanly in containerized environments. Docker, Kubernetes, or custom orchestration—your code runs consistently everywhere.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-blue-500/20">
              <h3 class="text-xl font-bold text-blue-400 mb-3">Rapid Delivery</h3>
              <p class="text-gray-300 text-sm">
                We work fast without cutting corners. Expert testing and refactoring delivered on timeframes that keep your velocity high.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Research-Grade Approach -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Rooted in the Lab, Built for Production</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            At PRZM, we bridge the gap between research and production. We've worked with electrons, superconductors, and optical transistors—where precision isn't optional. That same rigor applies to code.
          </p>
          <p class="text-gray-300 leading-relaxed">
            From researchers towards tech businesses: we deliver your projects faster, with better spend control and informative quality goals. Code Detailing isn't just cleanup—it's transformation from prototype to production-grade system.
          </p>
        </div>
      </section>

      <!-- Process -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">How It Works</h2>
        <div class="space-y-4">
          <div class="bg-glass p-6 rounded-xl border-l-4 border-blue-500">
            <h3 class="text-xl font-bold text-white mb-2">1. Audit & Assessment</h3>
            <p class="text-gray-300">We analyze your codebase to identify technical debt, untested paths, and refactoring opportunities. No sugar-coating—just facts.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-blue-500">
            <h3 class="text-xl font-bold text-white mb-2">2. Test Coverage</h3>
            <p class="text-gray-300">We build comprehensive test suites that catch regressions and validate functionality. Tests that actually matter, not test theater.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-blue-500">
            <h3 class="text-xl font-bold text-white mb-2">3. Refactoring & Optimization</h3>
            <p class="text-gray-300">We refactor strategically—improving structure without breaking functionality. Reduce complexity, improve maintainability.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-blue-500">
            <h3 class="text-xl font-bold text-white mb-2">4. Containerization & Deployment</h3>
            <p class="text-gray-300">We ensure your code deploys cleanly in containerized environments. Ready for any deployment scenario.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-glass p-8 rounded-xl text-center mb-8">
        <h2 class="text-2xl font-bold text-white mb-4">Ready to Transform Your Codebase?</h2>
        <p class="text-gray-300 mb-6">Let's discuss how Code Detailing can polish your product's code from functional to excellent.</p>
        <router-link to="/contact" class="btn-cta inline-block">
          Get in Touch
        </router-link>
      </section>

      <!-- Chat Window -->
      <section class="max-w-2xl mx-auto">
        <SolutionChatWindow />
      </section>
    </article>
  </div>
</template>

<style scoped>
.blog-post-page {
  min-height: 100vh;
}

h2 {
  @apply text-3xl font-bold text-white mb-6;
}

h3 {
  @apply text-xl font-bold text-white mb-3;
}

p {
  @apply text-lg leading-relaxed;
}
</style>