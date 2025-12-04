<script setup>
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

defineOptions({
  name: 'CUOServicePage'
});

const openCalendly = () => {
  window.open('https://calendly.com/piotr-slupski-pryzmat/30min', '_blank');
};

const handleTierInquiry = (tier) => {
  const subject = encodeURIComponent(`CUO ${tier} Inquiry`);
  const body = encodeURIComponent(`Hi Peter,\n\nI'm interested in the ${tier} tier of your Chief Upgrade Officer service.\n\n[Tell me about your current setup and what you'd like to optimize]\n\nBest regards`);
  window.location.href = `mailto:pryzmat@pryzmat.pl?subject=${subject}&body=${body}`;
};
</script>

<template>
  <div class="cuo-page p-6 md:p-10">
    <WelcomeBox 
      headingStr="Chief Upgrade Officer" 
      message="Upgrade Without the Waste" 
    />

    <!-- Philosophy Section -->
    <section class="philosophy-section max-w-4xl mx-auto pt-8 pb-12">
      <div class="bg-glass p-8 rounded-xl mb-8">
        <h2 class="text-3xl font-bold text-white mb-4">I don't impulse-buy. Neither should you.</h2>
        <div class="text-gray-300 leading-relaxed space-y-4 text-lg">
          <p>
            Tired of $10k regrets on tech that dies in 2 years? Or worse—missing the one investment that could 10x your startup? I turn waste into weapons and risk into returns.
          </p>
          <p>
            My philosophy is simple: <strong class="text-white">Solve real problems, not buy hype.</strong> Every decision should be durable, upgradable, and maximize long-term value. Whether it's optimizing your tech stack to scale without breaking, or consulting on investments where <strong class="text-white">Power Law Risk</strong> becomes your asset—I help busy founders make decisions that compound.
          </p>
          <p>
            <strong class="text-white">Stack Optimization or Investment Strategy:</strong> Optimize your tech for scale, or consult on bets where asymmetric upside matters. No fluff, just systems that compound.
          </p>
        </div>
      </div>
    </section>

    <!-- Three Tiers Section -->
    <section class="tiers-section py-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Service Tiers</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Tier 1: 48-Hour Purge & Rebuild -->
          <div class="tier-card bg-glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div class="tier-badge bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              One-Off
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">48-Hour Purge & Rebuild</h3>
            <div class="price text-3xl font-bold text-blue-400 mb-4">$3-5k</div>
            <ul class="space-y-3 text-gray-300 mb-6">
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">✓</span>
                <span>Tech stack audit OR investment portfolio review</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">✓</span>
                <span>Optimize infrastructure for scale OR identify Power Law opportunities</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">✓</span>
                <span>Migration plan & upgrade path OR investment thesis</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">✓</span>
                <span>30-day support included</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">✓</span>
                <span>PDF report + actionable deliverables</span>
              </li>
            </ul>
            <button 
              @click="handleTierInquiry('48-Hour Purge & Rebuild')"
              class="w-full btn-cta py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Start Purge
            </button>
          </div>

          <!-- Tier 2: Annual Retainer -->
          <div class="tier-card bg-glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all border-2">
            <div class="tier-badge bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Popular
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Annual Retainer</h3>
            <div class="price text-3xl font-bold text-purple-400 mb-4">$15-25k/yr</div>
            <div class="text-sm text-gray-400 mb-4">Limited to 4-8 clients</div>
            <ul class="space-y-3 text-gray-300 mb-6">
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">✓</span>
                <span>Unlimited async advice via Telegram/Slack</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">✓</span>
                <span>Tech decisions OR investment opportunities ($500+ threshold)</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">✓</span>
                <span>Power Law Risk analysis on asymmetric bets</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">✓</span>
                <span>Priority response (24-48hrs)</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">✓</span>
                <span>Quarterly strategy review</span>
              </li>
            </ul>
            <button 
              @click="handleTierInquiry('Annual Retainer')"
              class="w-full btn-cta py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all"
            >
              Claim Retainer Spot
            </button>
          </div>

          <!-- Tier 3: Niche Builds -->
          <div class="tier-card bg-glass p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all">
            <div class="tier-badge bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Custom
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Niche Builds</h3>
            <div class="price text-3xl font-bold text-green-400 mb-4">$7-12k</div>
            <ul class="space-y-3 text-gray-300 mb-6">
              <li class="flex items-start">
                <span class="text-green-400 mr-2">✓</span>
                <span>Custom tech infrastructure OR investment strategy</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-2">✓</span>
                <span>Scalable systems built for 10-15yr horizon</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-2">✓</span>
                <span>Full sourcing, vetting & Power Law Risk assessment</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-2">✓</span>
                <span>Build documentation & evolution path</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 mr-2">✓</span>
                <span>Lifetime support on strategic decisions</span>
              </li>
            </ul>
            <button 
              @click="handleTierInquiry('Niche Builds')"
              class="w-full btn-cta py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all"
            >
              Discuss Build
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Timeline -->
    <section class="process-section py-12 max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
      <div class="process-timeline space-y-8">
        <div class="process-step bg-glass p-6 rounded-xl">
          <div class="step-number bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
          <h3 class="text-xl font-bold text-white mb-2">Audit</h3>
          <p class="text-gray-300">We review your tech stack or investment portfolio—what works, what's waste, what's missing. No sugar-coating.</p>
        </div>
        <div class="process-step bg-glass p-6 rounded-xl">
          <div class="step-number bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
          <h3 class="text-xl font-bold text-white mb-2">Spec</h3>
          <p class="text-gray-300">I design your optimization path with specific recommendations. Power Law Risk analysis where asymmetric upside matters.</p>
        </div>
        <div class="process-step bg-glass p-6 rounded-xl">
          <div class="step-number bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
          <h3 class="text-xl font-bold text-white mb-2">Execute</h3>
          <p class="text-gray-300">You execute the plan. I provide support, answer questions, and help you avoid common pitfalls.</p>
        </div>
        <div class="process-step bg-glass p-6 rounded-xl">
          <div class="step-number bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
          <h3 class="text-xl font-bold text-white mb-2">Support</h3>
          <p class="text-gray-300">Ongoing guidance ensures your systems evolve without accumulating waste. Retainer clients get priority access.</p>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="testimonials-section py-12 max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-white text-center mb-12">What Clients Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="testimonial bg-glass p-6 rounded-xl">
          <p class="text-gray-300 italic mb-4">"Saved me $8k on a rig that crushes my old one. Peter's recommendations were spot-on—used Threadripper, upgraded GPU, and I'm set for the next decade."</p>
          <p class="text-white font-semibold">— Engineering Founder</p>
        </div>
        <div class="testimonial bg-glass p-6 rounded-xl">
          <p class="text-gray-300 italic mb-4">"The retainer pays for itself. Every $500+ purchase gets a quick sanity check. No more impulse buys that collect dust."</p>
          <p class="text-white font-semibold">— Tech Executive</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section py-12 max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
      <div class="space-y-6">
        <div class="faq-item bg-glass p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-2">How async is async?</h3>
          <p class="text-gray-300">Retainer clients get responses within 24-48 hours. For urgent decisions, I prioritize based on impact. One-off audits are typically completed within 48 hours of starting.</p>
        </div>
        <div class="faq-item bg-glass p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-2">Tech optimization or investment consulting?</h3>
          <p class="text-gray-300">Both. You choose the focus—optimize your startup's tech stack for scale, or get investment strategy with Power Law Risk analysis. Some clients do both. The goal is value, not ideology.</p>
        </div>
        <div class="faq-item bg-glass p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-2">What if I already made decisions?</h3>
          <p class="text-gray-300">We can still optimize. I'll help you extract maximum value from what you have, identify what to pivot/upgrade, and plan the next phase. No judgment—just better decisions going forward.</p>
        </div>
        <div class="faq-item bg-glass p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-2">What is Power Law Risk?</h3>
          <p class="text-gray-300">Power Law Risk is the framework for identifying asymmetric opportunities—bets where the upside massively outweighs the downside. It's an asset when you know where to look. I help you find those.</p>
        </div>
        <div class="faq-item bg-glass p-6 rounded-xl">
          <h3 class="text-xl font-bold text-white mb-2">What's your refund policy?</h3>
          <p class="text-gray-300">If you're not satisfied with the audit quality or recommendations within 7 days, I'll refund 50% and we part ways. Retainers are month-to-month after the first quarter.</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta py-12 max-w-3xl mx-auto text-center">
      <div class="bg-glass p-8 rounded-xl">
        <h2 class="text-3xl font-bold text-white mb-4">Ready to Upgrade Without the Waste?</h2>
        <p class="text-gray-300 text-lg mb-6">Book a 15-minute audit call to see if we're a fit.</p>
        <button 
          @click="openCalendly"
          class="btn-cta px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all text-lg"
        >
          Book a 15-min Audit Call
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cuo-page {
  min-height: 100vh;
}

.tier-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tier-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.process-step {
  position: relative;
  padding-left: 4rem;
}

.step-number {
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
}

.testimonial {
  border-left: 3px solid rgba(59, 130, 246, 0.5);
}

.faq-item {
  border-left: 3px solid rgba(59, 130, 246, 0.3);
  transition: border-color 0.3s ease;
}

.faq-item:hover {
  border-left-color: rgba(59, 130, 246, 0.6);
}

@media (max-width: 768px) {
  .process-step {
    padding-left: 1.5rem;
  }
  
  .step-number {
    position: static;
    margin-bottom: 1rem;
  }
}
</style>
