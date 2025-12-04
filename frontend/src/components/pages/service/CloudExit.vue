<script setup>
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

defineOptions({
  name: 'CloudExitServicePage'
});
</script>

<template>
  <div class="blog-post-page p-6 md:p-10">
    <WelcomeBox headingStr="Cloud Exit" message="Move Away from Vendors" />

    <!-- Main Content -->
    <article class="max-w-4xl mx-auto pt-8">
      <!-- Introduction -->
      <section class="bg-glass p-8 rounded-xl mb-8">
        <p class="text-xl text-gray-300 leading-relaxed mb-6">
          Break free from vendor lock-in and regain control over your infrastructure. Moving off the cloud reduces costs, enhances security, and allows you to scale on your own terms.
        </p>
        <p class="text-lg text-gray-400 leading-relaxed">
          Whether you're optimizing for performance, compliance, or sovereignty, our solutions ensure a smooth transition to on-prem operations. Rooted in research environments where data control isn't optional, we understand what it means to own your infrastructure.
        </p>
      </section>

      <!-- The Problem -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">The Cloud Trap: Sky-High Costs and Lost Control</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            Cloud vendors promise simplicity, but deliver lock-in. Costs scale unpredictably. Data sovereignty becomes a question mark. Performance bottlenecks appear at the worst times. You're paying for convenience, but losing control.
          </p>
          <p class="text-gray-300 leading-relaxed">
            In research and high-tech industries, this model breaks down. Sensitive data can't live in third-party clouds. Compliance requirements demand on-prem solutions. Performance-critical workloads need predictable infrastructure. The cloud isn't always the answer.
          </p>
        </div>
      </section>

      <!-- The Solution -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Cloud Exit: Regain Control, Reduce Costs</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            Cloud Exit is our systematic approach to moving your infrastructure on-prem. We don't just migrate—we optimize, secure, and scale on your terms. Your data, your infrastructure, your control.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-gray-800/50 p-5 rounded-lg border border-purple-500/20">
              <h3 class="text-xl font-bold text-purple-400 mb-3">Cost Reduction</h3>
              <p class="text-gray-300 text-sm">
                Cloud costs compound. On-prem infrastructure pays for itself. We help you calculate true TCO and migrate to solutions that reduce long-term spend by 30-70%.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-purple-500/20">
              <h3 class="text-xl font-bold text-purple-400 mb-3">Data Sovereignty</h3>
              <p class="text-gray-300 text-sm">
                Your data stays on your infrastructure. No third-party access, no compliance questions, no vendor lock-in. Complete control over sensitive information.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-purple-500/20">
              <h3 class="text-xl font-bold text-purple-400 mb-3">Performance Optimization</h3>
              <p class="text-gray-300 text-sm">
                On-prem infrastructure eliminates network latency, provides predictable performance, and allows custom optimization for your specific workloads.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-purple-500/20">
              <h3 class="text-xl font-bold text-purple-400 mb-3">Scale on Your Terms</h3>
              <p class="text-gray-300 text-sm">
                Scale when you need, how you need. No vendor-imposed limits, no surprise bills, no architectural constraints. Build infrastructure that matches your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Research-Grade Approach -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">From Research Labs to Production Infrastructure</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            At PRZM, we've built infrastructure for research environments where data control isn't optional. Superconductors, quantum computing, optical transistors—these require infrastructure that's predictable, secure, and under your control.
          </p>
          <p class="text-gray-300 leading-relaxed">
            That same rigor applies to Cloud Exit. We don't just move data—we architect solutions that reduce costs, enhance security, and scale on your terms. From researchers towards tech businesses: infrastructure that works for you, not your vendor.
          </p>
        </div>
      </section>

      <!-- Process -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">The Migration Process</h2>
        <div class="space-y-4">
          <div class="bg-glass p-6 rounded-xl border-l-4 border-purple-500">
            <h3 class="text-xl font-bold text-white mb-2">1. Assessment & Planning</h3>
            <p class="text-gray-300">We analyze your cloud usage, calculate true costs, and design an on-prem architecture that matches your needs. No assumptions—just data-driven planning.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-purple-500">
            <h3 class="text-xl font-bold text-white mb-2">2. Infrastructure Design</h3>
            <p class="text-gray-300">We design on-prem infrastructure that's secure, scalable, and cost-effective. Hardware selection, network architecture, security layers—all optimized for your workloads.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-purple-500">
            <h3 class="text-xl font-bold text-white mb-2">3. Migration & Testing</h3>
            <p class="text-gray-300">We migrate your data and applications with zero downtime. Comprehensive testing ensures everything works before we cut over. Smooth transitions, no surprises.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-purple-500">
            <h3 class="text-xl font-bold text-white mb-2">4. Optimization & Support</h3>
            <p class="text-gray-300">We optimize performance, tune configurations, and provide ongoing support. Your infrastructure runs better on-prem than it ever did in the cloud.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-glass p-8 rounded-xl text-center">
        <h2 class="text-2xl font-bold text-white mb-4">Ready to Exit the Cloud?</h2>
        <p class="text-gray-300 mb-6">Let's discuss how Cloud Exit can reduce costs, enhance security, and give you complete control over your infrastructure.</p>
        <router-link to="/contact" class="btn-cta inline-block">
          Get in Touch
        </router-link>
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