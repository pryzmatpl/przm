<script setup>
import WelcomeBox from '@c/fragments/WelcomeBox.vue';
import SolutionChatWindow from '@c/fragments/SolutionChatWindow.vue';

defineOptions({
  name: 'DiligenceServicePage'
});
</script>

<template>
  <div class="blog-post-page p-6 md:p-10">
    <WelcomeBox headingStr="Due Diligence" message="Overpaying? Never on time?" />

    <!-- Main Content -->
    <article class="max-w-4xl mx-auto pt-8">
      <!-- Introduction -->
      <section class="bg-glass p-8 rounded-xl mb-8">
        <p class="text-xl text-gray-300 leading-relaxed mb-6">
          Are you overspending on a technical project? Probably. Get an objective, expert evaluation to cut through inefficiencies and mismanagement.
        </p>
        <p class="text-lg text-gray-400 leading-relaxed">
          We provide unbiased insights that help you make smarter, more cost-effective technology decisions. No fluff, just facts. Rooted in research environments where precision and efficiency aren't optional, we understand what technical projects should cost and how they should run.
        </p>
      </section>

      <!-- The Problem -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">The Technical Project Trap: Overpaying, Underdelivering</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            Technical projects spiral. Costs balloon. Timelines slip. Quality suffers. You're paying more than you should, getting less than you need, and you may be part of the problem. Without objective evaluation, you can't see the inefficiencies, mismanagement, or waste.
          </p>
          <p class="text-gray-300 leading-relaxed">
            In research and high-tech industries, we've seen this pattern: projects that should cost $100k cost $500k. Projects that should take 3 months take 18. Projects that should work perfectly require constant fixes. The gap between expectation and reality is where waste lives.
          </p>
        </div>
      </section>

      <!-- The Solution -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Due Diligence: Objective Evaluation, Real Answers</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            Due Diligence is our systematic approach to evaluating technical projects. We don't just review code—we analyze costs, timelines, architecture, and processes. We identify inefficiencies, mismanagement, and waste. We give you objective feedback that helps you make smarter decisions.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-gray-800/50 p-5 rounded-lg border border-yellow-500/20">
              <h3 class="text-xl font-bold text-yellow-400 mb-3">Cost Analysis</h3>
              <p class="text-gray-300 text-sm">
                We evaluate whether you're paying fair prices for work, infrastructure, and services. Identify overpayments, hidden costs, and opportunities to reduce spend by 30-50%.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-yellow-500/20">
              <h3 class="text-xl font-bold text-yellow-400 mb-3">Timeline Evaluation</h3>
              <p class="text-gray-300 text-sm">
                We assess whether timelines are realistic, identify bottlenecks, and recommend optimizations. Projects that should take months shouldn't take years.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-yellow-500/20">
              <h3 class="text-xl font-bold text-yellow-400 mb-3">Architecture Review</h3>
              <p class="text-gray-300 text-sm">
                We evaluate technical architecture for efficiency, scalability, and maintainability. Identify over-engineering, under-engineering, and opportunities to simplify.
              </p>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-yellow-500/20">
              <h3 class="text-xl font-bold text-yellow-400 mb-3">Process Audit</h3>
              <p class="text-gray-300 text-sm">
                We review development processes, team structure, and management practices. Identify inefficiencies, mismanagement, and opportunities to improve velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Research-Grade Approach -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">From Research Rigor to Business Reality</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            At PRZM, we've managed research projects where precision and efficiency aren't optional. Electrons, superconductors, quantum computing—these require projects that deliver on time, on budget, and on spec. That same rigor applies to technical due diligence.
          </p>
          <p class="text-gray-300 leading-relaxed">
            From researchers towards tech businesses: we provide objective evaluation that cuts through hype, identifies waste, and helps you make smarter decisions. Due Diligence isn't just review—it's transformation from overpaying to optimizing.
          </p>
        </div>
      </section>

      <!-- What We Evaluate -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">What We Evaluate</h2>
        <div class="bg-glass p-6 rounded-xl">
          <div class="space-y-4">
            <div class="flex items-start">
              <span class="text-yellow-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">Budget & Costs</h3>
                <p class="text-gray-400 text-sm">Are you paying fair prices? Are there hidden costs? Can you reduce spend without sacrificing quality?</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-yellow-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">Timeline & Milestones</h3>
                <p class="text-gray-400 text-sm">Are timelines realistic? Are milestones achievable? Can you deliver faster without cutting corners?</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-yellow-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">Technical Architecture</h3>
                <p class="text-gray-400 text-sm">Is the architecture sound? Is it scalable? Is it maintainable? Can you simplify without losing functionality?</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-yellow-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">Team & Processes</h3>
                <p class="text-gray-400 text-sm">Is the team structured correctly? Are processes efficient? Can you improve velocity without adding headcount?</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-yellow-400 mr-3 text-xl">✓</span>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">Quality & Deliverables</h3>
                <p class="text-gray-400 text-sm">Is quality meeting standards? Are deliverables complete? Can you improve outcomes without increasing costs?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">The Due Diligence Process</h2>
        <div class="space-y-4">
          <div class="bg-glass p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-xl font-bold text-white mb-2">1. Project Review</h3>
            <p class="text-gray-300">We review project documentation, code, architecture, and processes. Comprehensive analysis that covers all aspects of your technical project.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-xl font-bold text-white mb-2">2. Cost & Timeline Analysis</h3>
            <p class="text-gray-300">We analyze costs, timelines, and resource allocation. Identify overpayments, timeline issues, and opportunities to optimize.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-xl font-bold text-white mb-2">3. Technical Evaluation</h3>
            <p class="text-gray-300">We evaluate architecture, code quality, and technical decisions. Identify over-engineering, under-engineering, and opportunities to improve.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="text-xl font-bold text-white mb-2">4. Objective Report</h3>
            <p class="text-gray-300">We deliver an objective report with findings, recommendations, and actionable insights. No fluff, just facts that help you make smarter decisions.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-glass p-8 rounded-xl text-center mb-8">
        <h2 class="text-2xl font-bold text-white mb-4">Ready for Objective Evaluation?</h2>
        <p class="text-gray-300 mb-6">Let's discuss how Due Diligence can help you cut through inefficiencies, identify waste, and make smarter technical decisions.</p>
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