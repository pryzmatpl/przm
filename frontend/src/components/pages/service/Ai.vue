<script setup>
import WelcomeBox from '@c/fragments/WelcomeBox.vue';
import SolutionChatWindow from '@c/fragments/SolutionChatWindow.vue';

defineOptions({
  name: 'AiServicePage'
});
</script>

<template>
  <div class="blog-post-page p-6 md:p-10">
    <WelcomeBox headingStr="On-Premises AI" message="Agents and More" />

    <!-- Main Content -->
    <article class="max-w-4xl mx-auto pt-8">
      <!-- Introduction -->
      <section class="bg-glass p-8 rounded-xl mb-8">
        <p class="text-xl text-gray-300 leading-relaxed mb-6">
          Harness AI on your own terms with complete control over data security and performance. On-premises AI solutions give you the power to innovate without relying on third-party clouds.
        </p>
        <p class="text-lg text-gray-400 leading-relaxed">
          Protect sensitive information, reduce latency, and optimize costs while scaling at your own pace. Take full command of your AI workloads—your data, your rules, your infrastructure.
        </p>
      </section>

      <!-- The Problem -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">The Cloud AI Dilemma: Power vs. Control</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            Cloud AI services promise power, but demand compromise. Your data leaves your infrastructure. Latency adds up. Costs scale unpredictably. Compliance becomes complicated. You're using AI, but you're not in control.
          </p>
          <p class="text-gray-300 leading-relaxed">
            In research and high-tech industries, this model fails. Sensitive research data can't go to third-party AI services. Real-time applications need low latency. Proprietary models require custom infrastructure. The cloud isn't always the answer for AI.
          </p>
        </div>
      </section>

      <!-- The Solution -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">On-Premises AI: Full Control, Full Power</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            On-Premises AI is our approach to deploying AI infrastructure on your terms. We don't just install models—we architect solutions that give you complete control over data, performance, and costs. Your AI, your infrastructure, your rules.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-gray-800/50 p-5 rounded-lg border border-green-500/20">
              <h3 class="text-xl font-bold text-green-400 mb-3">Data Privacy</h3>
              <p class="text-gray-300 text-sm">
                Your data never leaves your infrastructure. Sensitive research, proprietary information, compliance requirements—all stay on-prem. Complete data sovereignty.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-green-500/20">
              <h3 class="text-xl font-bold text-green-400 mb-3">Low Latency</h3>
              <p class="text-gray-300 text-sm">
                On-prem AI eliminates network latency. Real-time inference, interactive agents, production workloads—all run with predictable, low-latency performance.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-green-500/20">
              <h3 class="text-xl font-bold text-green-400 mb-3">Cost Optimization</h3>
              <p class="text-gray-300 text-sm">
                On-prem infrastructure pays for itself at scale. No per-API-call costs, no data transfer fees, no vendor margins. Predictable costs that scale with your usage.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-green-500/20">
              <h3 class="text-xl font-bold text-green-400 mb-3">Custom Agents</h3>
              <p class="text-gray-300 text-sm">
                Build AI agents tailored to your workflows. Custom models, fine-tuned for your domain. Agents that understand your business, not generic cloud services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Research-Grade Approach -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">From Quantum Research to Production AI</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            At PRZM, we've worked with electrons, superconductors, and optical transistors—where precision and control aren't optional. That same rigor applies to AI infrastructure.
          </p>
          <p class="text-gray-300 leading-relaxed">
            From researchers towards tech businesses: we deploy AI solutions that protect data, optimize performance, and scale on your terms. On-prem AI isn't just infrastructure—it's complete control over your AI capabilities.
          </p>
        </div>
      </section>

      <!-- Capabilities -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">What We Deploy</h2>
        <div class="bg-glass p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start">
              <span class="text-green-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">LLM Infrastructure</h3>
                <p class="text-gray-400 text-sm">Deploy large language models on-prem. Fine-tune for your domain. Run inference at scale without cloud dependencies.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-green-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">AI Agents</h3>
                <p class="text-gray-400 text-sm">Build custom agents that automate workflows, answer questions, and integrate with your systems. Agents that work for you.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-green-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">Computer Vision</h3>
                <p class="text-gray-400 text-sm">Deploy vision models for image analysis, object detection, and pattern recognition. All on-prem, all under your control.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-green-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">ML Pipelines</h3>
                <p class="text-gray-400 text-sm">Build end-to-end ML pipelines for training, inference, and monitoring. Complete ML infrastructure on your terms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Deployment Process</h2>
        <div class="space-y-4">
          <div class="bg-glass p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="text-xl font-bold text-white mb-2">1. Requirements & Architecture</h3>
            <p class="text-gray-300">We analyze your AI needs, design on-prem infrastructure, and select models that match your use cases. No over-engineering—just what works.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="text-xl font-bold text-white mb-2">2. Infrastructure Setup</h3>
            <p class="text-gray-300">We deploy GPU infrastructure, configure networking, and set up monitoring. Hardware that matches your AI workloads, optimized for performance.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="text-xl font-bold text-white mb-2">3. Model Deployment</h3>
            <p class="text-gray-300">We deploy models, fine-tune for your domain, and build agents that integrate with your workflows. AI that works for your business.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="text-xl font-bold text-white mb-2">4. Optimization & Support</h3>
            <p class="text-gray-300">We optimize performance, tune configurations, and provide ongoing support. Your AI infrastructure runs better on-prem than in the cloud.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-glass p-8 rounded-xl text-center mb-8">
        <h2 class="text-2xl font-bold text-white mb-4">Ready to Deploy On-Premises AI?</h2>
        <p class="text-gray-300 mb-6">Let's discuss how On-Premises AI can give you complete control over your AI infrastructure, data, and costs.</p>
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